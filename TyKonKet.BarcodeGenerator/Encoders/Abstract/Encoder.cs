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
        private static readonly HashSet<char> InvalidChars = new HashSet<char>(Path.GetInvalidFileNameChars());

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
        protected string Barcode { get; set; }

        /// <summary>
        /// Gets the accepted character set for the barcode.
        /// </summary>
        protected abstract Regex AllowedCharsetPattern { get; }

        /// <summary>
        /// Validates and generates the barcode image.
        /// </summary>
        /// <param name="barcode">Barcode chars / digits.</param>
        /// <returns>Returns the validated barcode chars / digits.</returns>
        public abstract string Encode(string barcode);

        /// <summary>
        /// Exports the barcode image to a file.
        /// </summary>
        /// <param name="fileName">Name of the file.</param>
        /// <param name="format">Image export format.</param>
        /// <param name="quality">Image export quality.</param>
        /// <exception cref="InvalidOperationException">Thrown when the barcode has not been encoded before export.</exception>
        public virtual void Export(string fileName, SKEncodedImageFormat format, int quality)
        {
            if (this.Image == null)
            {
                throw new InvalidOperationException("The barcode must be encoded before exported");
            }

            fileName = GetFinalFileName(fileName, this.Barcode, format, quality);

            var path = Path.GetDirectoryName(fileName);
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            using (var fileStream = new FileStream(fileName, FileMode.OpenOrCreate))
            {
                this.Export(fileStream, format, quality);
            }
        }

        /// <summary>
        /// Exports the barcode image to a stream.
        /// </summary>
        /// <param name="stream">The stream to export the image to.</param>
        /// <param name="format">Image export format.</param>
        /// <param name="quality">Image export quality.</param>
        /// <exception cref="InvalidOperationException">Thrown when the barcode has not been encoded before export.</exception>
        public virtual void Export(Stream stream, SKEncodedImageFormat format, int quality)
        {
            if (this.Image == null)
            {
                throw new InvalidOperationException("The barcode must be encoded before exported");
            }

            using (var encodedImage = this.Image.Encode(format, quality))
            {
                encodedImage.SaveTo(stream);
            }
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
        internal bool ValidateCharset(string barcode)
        {
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