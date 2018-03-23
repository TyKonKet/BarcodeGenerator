using System;
using System.IO;
using System.Text.RegularExpressions;
using SixLabors.ImageSharp;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    internal abstract class Encoder
    {
        protected BarcodeOptions Options { get; }
        protected abstract Regex AcceptedCharset { get; }

        protected Encoder()
        {
        }

        protected Encoder(BarcodeOptions options)
        {
            Options = options;
        }

        public abstract string Encode(string barcode, string file);

        internal virtual bool _checkCharset(string barcode)
        {
            if (!AcceptedCharset.IsMatch(barcode))
            {
                throw new FormatException($"Invalid barcode charset ({barcode}), only {AcceptedCharset} are accepted");
            }
            return true;
        }

        protected virtual void Export(Image<Rgba32> image, string barcode, string file)
        {
            file = file.Replace("{barcode}", barcode);
            var path = Path.GetDirectoryName(file);
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            image.Save(file);
        }
    }
}
