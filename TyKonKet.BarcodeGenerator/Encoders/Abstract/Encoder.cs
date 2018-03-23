using System;
using System.Text.RegularExpressions;

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

        public abstract void Encode(string barcode, string file);

        internal virtual bool _checkCharset(string barcode)
        {
            if (!AcceptedCharset.IsMatch(barcode))
            {
                throw new FormatException($"Invalid barcode charset ({barcode}), only {AcceptedCharset} are accepted");
            }
            return true;
        }
    }
}
