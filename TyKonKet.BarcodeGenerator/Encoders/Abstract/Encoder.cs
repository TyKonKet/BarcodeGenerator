using System;
using System.IO;
using System.Text.RegularExpressions;
using SkiaSharp;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    internal abstract class Encoder : IDisposable
    {
        protected Encoder()
        {
        }

        protected Encoder(BarcodeOptions options)
        {
            Options = options;
        }

        protected BarcodeOptions Options { get; }

        internal SKImage Image { get; set; }

        protected string Barcode { get; set; }

        protected abstract Regex AcceptedCharset { get; }

        /// <summary>
        /// Validates and generates the barcode image.
        /// </summary>
        /// <param name="barcode">Barcode chars / digits.</param>
        /// <returns>Returns the vaidated barcode chars / digits.</returns>
        public abstract string Encode(string barcode);

        internal bool CheckCharset(string barcode)
        {
            if (!AcceptedCharset.IsMatch(barcode))
                throw new FormatException($"Invalid barcode charset ({barcode}), only {AcceptedCharset} are accepted");
            return true;
        }

        /// <summary>
        /// Exports the barcode image.
        /// </summary>
        /// <param name="fileName">Name of the file.</param>
        /// <param name="format">Image export format.</param>
        /// <param name="quality">Image export qualty.</param>
        /// <exception cref="InvalidOperationException"></exception>
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

        private static string GetSafeFilename(string filename)
        {
            return string.Join("", filename.Split(Path.GetInvalidFileNameChars()));
        }

        public void Dispose()
        {
            Image?.Dispose();
        }
    }
}