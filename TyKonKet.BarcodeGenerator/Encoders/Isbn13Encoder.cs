namespace TyKonKet.BarcodeGenerator.Encoders
{
    internal class Isbn13Encoder : Ean13Encoder
    {
        public Isbn13Encoder(BarcodeOptions options) : base(options)
        {
        }

        public override void Encode(string barcode, string file)
        {
            barcode = _isbnValidate(barcode);
            base.Encode(barcode, file);
        }

        internal static string _isbnValidate(string barcode)
        {
            // validate barcode following ISBN-13 rules
            if (barcode.Length > 3 && barcode.Substring(0, 3) == "978")
            {
                barcode = barcode.Remove(0, 3);
            }
            barcode = barcode.PadLeft(9, '0');
            barcode = $"978{barcode.Substring(0, 9)}";
            return barcode;
        }
    }
}
