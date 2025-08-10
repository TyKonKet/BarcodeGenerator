using System;

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
        /// <returns>The encoded barcode string.</returns>
        /// <exception cref="System.ArgumentNullException">Thrown when <paramref name="barcode"/> is <c>null</c>.</exception>
        /// <exception cref="System.FormatException">Thrown when the resulting ISBN-13 barcode contains characters not allowed by EAN charset (only digits 0–9).</exception>
        /// <exception cref="System.ArgumentOutOfRangeException">Thrown when a numeric character falls outside the valid range during internal conversion (documented for forward compatibility).</exception>
        public override string Encode(string barcode)
        {
            barcode = FormatBarcode(barcode);
            return base.Encode(barcode);
        }

        /// <summary>
        /// Formats the barcode according to ISBN-13 rules.
        /// </summary>
        /// <param name="barcode">The barcode to format.</param>
        /// <returns>The formatted barcode string.</returns>
        internal static new string FormatBarcode(string barcode)
        {
            // Determine prefix: use existing if valid (978/979), otherwise default to 978
            string prefix = barcode.Length > 3 && (string.Equals(barcode.Substring(0, 3), "978", StringComparison.Ordinal) || string.Equals(barcode.Substring(0, 3), "979", StringComparison.Ordinal))
                ? barcode.Substring(0, 3)
                : "978";

            // Remove prefix from barcode only if it was already present
            if (barcode.Length > 3 && (barcode.StartsWith("978", StringComparison.Ordinal) || barcode.StartsWith("979", StringComparison.Ordinal)))
            {
                barcode = barcode.Remove(0, 3);
            }

            // Pad and reformat barcode
            barcode = barcode.PadLeft(9, '0');
            barcode = $"{prefix}{barcode.Substring(0, 9)}";

            return barcode;
        }
    }
}