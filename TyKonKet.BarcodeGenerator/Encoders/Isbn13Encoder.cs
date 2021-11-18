namespace TyKonKet.BarcodeGenerator.Encoders
{
    internal class Isbn13Encoder : Ean13Encoder
    {

        public Isbn13Encoder() : base()
        {
        }

        public Isbn13Encoder(BarcodeOptions options) : base(options)
        {
        }

        public override string Encode(string barcode)
        {
            barcode = IsbnValidate(barcode);
            return base.Encode(barcode);
        }

        internal static string IsbnValidate(string barcode)
        {
            // validate barcode following ISBN-13 rules
#if NET6_0_OR_GREATER
            if (barcode.Length > 3 && barcode[..3] == "978") barcode = barcode.Remove(0, 3);
            barcode = barcode.PadLeft(9, '0');
            barcode = $"978{barcode[..9]}";
#else
            if (barcode.Length > 3 && barcode.Substring(0, 3) == "978") barcode = barcode.Remove(0, 3);
            barcode = barcode.PadLeft(9, '0');
            barcode = $"978{barcode.Substring(0, 9)}";
#endif

            return barcode;
        }
    }
}