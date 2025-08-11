using SkiaSharp;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using TyKonKet.BarcodeGenerator.Utils;

namespace TyKonKet.BarcodeGenerator.Encoders.Abstract
{
    /// <summary>
    /// Abstract base class for barcode encoders.
    /// </summary>
    internal abstract class Encoder : IDisposable
    {
        private static readonly HashSet<char> InvalidChars = [.. Path.GetInvalidFileNameChars()];

        private bool disposed = false;

        /// <summary>
        /// Initializes a new instance of the <see cref="Encoder"/> class.
        /// </summary>
        protected Encoder()
        {
            this.Options = new BarcodeOptions();
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="Encoder"/> class with the specified options.
        /// </summary>
        /// <param name="options">The barcode options.</param>
        protected Encoder(BarcodeOptions options)
        {
            this.Options = options;
        }

        /// <summary>
        /// Gets the barcode options.
        /// </summary>
        protected BarcodeOptions Options { get; }

        /// <summary>
        /// Gets or sets the SKImage representing the barcode.
        /// </summary>
        internal SKImage Image { get; set; }

        /// <summary>
        /// Gets or sets the barcode string.
        /// </summary>
        internal string Barcode { get; set; }

        /// <summary>
        /// Gets the accepted character set for the barcode.
        /// </summary>
        protected abstract Regex AllowedCharsetPattern { get; }

        /// <summary>
        /// Validates and generates the barcode image.
        /// </summary>
        /// <param name="barcode">Barcode chars / digits.</param>
        /// <returns>Returns the validated barcode chars / digits.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="barcode"/> is <c>null</c>.</exception>
        /// <exception cref="FormatException">Thrown when <paramref name="barcode"/> contains characters not allowed by the specific encoder charset.</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when a numeric character falls outside the valid range during internal conversion (documented for forward compatibility).</exception>
        public abstract string Encode(string barcode);

        /// <summary>
        /// Exports the barcode image to a file.
        /// </summary>
        /// <param name="filePath">
        /// Path to the file (can be relative or absolute). The following special keywords are supported:
        /// <list type="bullet">
        /// <item><description><c>{barcode}</c>: Replaced with the barcode string, sanitized for file names.</description></item>
        /// <item><description><c>{format}</c>: Replaced with the file extension corresponding to the image format (e.g., "png").</description></item>
        /// <item><description><c>{quality}</c>: Replaced with the image quality value.</description></item>
        /// </list>
        /// </param>
        /// <param name="format">Image export format.</param>
        /// <param name="quality">Image export quality.</param>
        /// <exception cref="InvalidOperationException">Thrown when the barcode has not been encoded before export.</exception>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="filePath"/> is <c>null</c>.</exception>
        /// <exception cref="DirectoryNotFoundException">Thrown when the directory for the file path does not exist and cannot be created.</exception>
        /// <exception cref="IOException">Thrown when an I/O error occurs during file operations.</exception>
        public virtual void Export(string filePath, SKEncodedImageFormat format, int quality)
        {
            if (this.Image == null)
            {
                throw new InvalidOperationException("The barcode must be encoded before exported");
            }

            filePath = GetFinalFileName(filePath, this.Barcode, format, quality);

            // Convert relative paths to absolute paths
            if (!Path.IsPathRooted(filePath))
            {
                filePath = Path.GetFullPath(filePath);
            }

            var directory = Path.GetDirectoryName(filePath);
            if (!Directory.Exists(directory))
            {
                Directory.CreateDirectory(directory);
            }

            using var fileStream = new FileStream(filePath, FileMode.OpenOrCreate);
            this.Export(fileStream, format, quality);
        }

        /// <summary>
        /// Exports the barcode image to a stream.
        /// </summary>
        /// <param name="stream">The stream to export the image to.</param>
        /// <param name="format">Image export format.</param>
        /// <param name="quality">Image export quality.</param>
        /// <exception cref="InvalidOperationException">Thrown when the barcode has not been encoded before export.</exception>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="stream"/> is <c>null</c>.</exception>
        /// <exception cref="IOException">Thrown when an I/O error occurs during stream operations.</exception>
        public virtual void Export(Stream stream, SKEncodedImageFormat format, int quality)
        {
            if (this.Image == null)
            {
                throw new InvalidOperationException("The barcode must be encoded before exported");
            }

            using var encodedImage = this.Image.Encode(format, quality);
            encodedImage.SaveTo(stream);
        }

        /// <summary>
        /// Loads the barcode options.
        /// </summary>
        protected internal virtual void LoadOptions()
        {
        }

        /// <summary>
        /// Sets the image for the barcode.
        /// </summary>
        /// <param name="image">The SKImage representing the barcode.</param>
        [SuppressMessage("IDisposableAnalyzers.Correctness", "IDISP007:Don't dispose injected", Justification = "EnsureDisposing")]
        protected void SetImage(SKImage image)
        {
            this.Image?.Dispose();
            this.Image = image;
        }

        /// <summary>
        /// Checks if the barcode matches the accepted character set.
        /// </summary>
        /// <param name="barcode">The barcode string to check.</param>
        /// <returns>Returns true if the barcode matches the accepted character set.</returns>
        /// <exception cref="FormatException">Thrown when the barcode does not match the accepted character set.</exception>
        /// <exception cref="ArgumentNullException">Thrown when the barcode is null.</exception>
        internal bool EnsureValidCharset(string barcode)
        {
            if (barcode == null)
            {
                throw new ArgumentNullException(nameof(barcode));
            }

            if (!this.AllowedCharsetPattern.IsMatch(barcode))
            {
                throw new FormatException($"Invalid barcode charset ({barcode}), only {this.AllowedCharsetPattern} are accepted");
            }

            return true;
        }

        /// <summary>
        /// Generates the final file name by replacing placeholders with actual values.
        /// </summary>
        /// <param name="fileName">The original file name with placeholders.</param>
        /// <param name="barcode">The barcode string.</param>
        /// <param name="format">The image format.</param>
        /// <param name="quality">The image quality.</param>
        /// <returns>Returns the final file name with placeholders replaced.</returns>
        internal static string GetFinalFileName(string fileName, string barcode, SKEncodedImageFormat format, int quality)
        {
            fileName = fileName.Replace("{barcode}", GetSafeFilename(barcode));
            fileName = fileName.Replace("{format}", format.ToFileExtension());
            fileName = fileName.Replace("{quality}", $"{quality}");
            return fileName;
        }

        /// <summary>
        /// Gets a safe filename by removing invalid characters.
        /// </summary>
        /// <param name="filename">The original filename.</param>
        /// <returns>Returns a safe filename.</returns>
        internal static string GetSafeFilename(string filename)
        {
            if (string.IsNullOrEmpty(filename))
            {
                return filename;
            }

            var result = new StringBuilder(filename.Length);
            foreach (char c in filename)
            {
                if (!InvalidChars.Contains(c))
                {
                    result.Append(c);
                }
            }

            return result.ToString();
        }

        /// <summary>
        /// Disposes the resources used by the encoder.
        /// </summary>
        public void Dispose()
        {
            this.Dispose(disposing: true);
            GC.SuppressFinalize(this);
        }

        /// <summary>
        /// Disposes the resources used by the encoder.
        /// </summary>
        /// <param name="disposing">Indicates whether the method call comes from a Dispose method (its value is true) or from a finalizer (its value is false).</param>
        [SuppressMessage("IDisposableAnalyzers.Correctness", "IDISP007:Don't dispose injected", Justification = "EnsureDisposing")]
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    this.Image?.Dispose();
                }

                this.disposed = true;
            }
        }
    }
}