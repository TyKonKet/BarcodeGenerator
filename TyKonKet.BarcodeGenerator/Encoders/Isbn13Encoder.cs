namespace TyKonKet.BarcodeGenerator.Encoders
{
    /// <summary>
    /// Encoder for ISBN-13 barcodes.
    /// </summary>
    internal sealed class Isbn13Encoder : Ean13Encoder
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Isbn13Encoder"/> class.
        /// </summary>
        public Isbn13Encoder()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="Isbn13Encoder"/> class with the specified options.
        /// </summary>
        /// <param name="options">The barcode options.</param>
        public Isbn13Encoder(BarcodeOptions options)
            : base(options)
        {
        }

        /// <summary>
        /// Encodes the specified barcode.
        /// </summary>
        /// <param name="barcode">The barcode to encode.</param>
        /// <returns>The encoded barcode.</returns>
        public override string Encode(string barcode)
        {
            barcode = FormatBarcode(barcode);
            return base.Encode(barcode);
        }

        /// <summary>
        /// Formats the barcode according to ISBN-13 rules.
        /// </summary>
        /// <param name="barcode">The barcode to format.</param>
        /// <returns>The formatted barcode.</returns>
        internal static new string FormatBarcode(string barcode)
        {
            // format barcode following ISBN-13 rules
            if (barcode.Length > 3 && string.Equals(barcode.Substring(0, 3), "978", System.StringComparison.Ordinal))
            {
                barcode = barcode.Remove(0, 3);
            }

            barcode = barcode.PadLeft(9, '0');
            barcode = $"978{barcode.Substring(0, 9)}";

            return barcode;
        }
    }
}