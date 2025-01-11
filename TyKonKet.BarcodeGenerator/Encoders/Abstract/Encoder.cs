using System;
using System.IO;
using System.Text.RegularExpressions;
using SkiaSharp;

namespace TyKonKet.BarcodeGenerator.Encoders.Abstract
{
    /// <summary>
    /// Abstract base class for barcode encoders.
    /// </summary>
    internal abstract class Encoder : IDisposable
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Encoder"/> class.
        /// </summary>
        protected Encoder()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="Encoder"/> class with the specified options.
        /// </summary>
        /// <param name="options">The barcode options.</param>
        protected Encoder(BarcodeOptions options)
        {
            Options = options;
        }

        /// <summary>
        /// Gets the barcode options.
        /// </summary>
        protected BarcodeOptions Options { get; }

        /// <summary>
        /// Gets or sets the SKSurface for drawing the barcode.
        /// </summary>
        internal SKSurface Surface { get; set; }

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
        protected abstract Regex AcceptedCharset { get; }

        /// <summary>
        /// Validates and generates the barcode image.
        /// </summary>
        /// <param name="barcode">Barcode chars / digits.</param>
        /// <returns>Returns the validated barcode chars / digits.</returns>
        public abstract string Encode(string barcode);

        /// <summary>
        /// Checks if the barcode matches the accepted character set.
        /// </summary>
        /// <param name="barcode">The barcode string to check.</param>
        /// <returns>Returns true if the barcode matches the accepted character set.</returns>
        /// <exception cref="FormatException">Thrown when the barcode does not match the accepted character set.</exception>
        internal bool CheckCharset(string barcode)
        {
            if (!AcceptedCharset.IsMatch(barcode))
                throw new FormatException($"Invalid barcode charset ({barcode}), only {AcceptedCharset} are accepted");
            return true;
        }

        /// <summary>
        /// Exports the barcode image to a file.
        /// </summary>
        /// <param name="fileName">Name of the file.</param>
        /// <param name="format">Image export format.</param>
        /// <param name="quality">Image export quality.</param>
        /// <exception cref="InvalidOperationException">Thrown when the barcode has not been encoded before export.</exception>
        public virtual void Export(string fileName, SKEncodedImageFormat format, int quality)
        {
            if (Image == null)
            {
                throw new InvalidOperationException("The barcode must be encoded before exported");
            }

            fileName = fileName.Replace("{barcode}", GetSafeFilename(Barcode));
            var path = Path.GetDirectoryName(fileName);
            if (!Directory.Exists(path)) Directory.CreateDirectory(path);
#if NET6_0_OR_GREATER
                using var encodedImage = Image.Encode(format, quality);
                using var fileStream = new FileStream(fileName, FileMode.OpenOrCreate);
                encodedImage.SaveTo(fileStream);
#else
            using (var encodedImage = Image.Encode(format, quality))
            {
                using (var fileStream = new FileStream(fileName, FileMode.OpenOrCreate))
                {
                    encodedImage.SaveTo(fileStream);
                }
            }
#endif
        }

        /// <summary>
        /// Gets a safe filename by removing invalid characters.
        /// </summary>
        /// <param name="filename">The original filename.</param>
        /// <returns>Returns a safe filename.</returns>
        private static string GetSafeFilename(string filename)
        {
            return string.Join("", filename.Split(Path.GetInvalidFileNameChars()));
        }

        /// <summary>
        /// Disposes the resources used by the encoder.
        /// </summary>
        public void Dispose()
        {
            Surface?.Dispose();
            Image?.Dispose();
        }
    }
}