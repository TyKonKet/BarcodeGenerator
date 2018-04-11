using System;
using System.IO;
using System.Text.RegularExpressions;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.PixelFormats;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    internal abstract class Encoder
    {
        protected Encoder()
        {
        }

        protected Encoder(BarcodeOptions options)
        {
            Options = options;
        }

        protected BarcodeOptions Options { get; }
        protected abstract Regex AcceptedCharset { get; }

        public abstract string Encode(string barcode, string file);

        internal bool _checkCharset(string barcode)
        {
            if (!AcceptedCharset.IsMatch(barcode))
                throw new FormatException($"Invalid barcode charset ({barcode}), only {AcceptedCharset} are accepted");
            return true;
        }

        protected void Export(Image<Rgba32> image, string barcode, string file)
        {
            file = file.Replace("{barcode}", _getSafeFilename(barcode));
            var path = Path.GetDirectoryName(file);
            if (!Directory.Exists(path)) Directory.CreateDirectory(path);
            image.Save(file);
        }

        private static string _getSafeFilename(string filename)
        {
            return string.Join("", filename.Split(Path.GetInvalidFileNameChars()));
        }
    }
}