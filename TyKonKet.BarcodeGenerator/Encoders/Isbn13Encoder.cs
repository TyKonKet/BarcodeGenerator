namespace TyKonKet.BarcodeGenerator.Encoders
{
    internal class Isbn13Encoder : Ean13Encoder
    {
        public Isbn13Encoder(BarcodeOptions options) : base(options)
        {
        }

        public override void Encode(string barcode, string file)
        {
            // Prevalidate barcode
            if (barcode.Length > 3 && barcode.Substring(0, 3) == "978")
            {
                barcode = barcode.Remove(0, 3);
            }
            barcode = barcode.PadLeft(9, '0');
            barcode = $"978{barcode.Substring(0, 9)}";
            base.Encode(barcode, file);
        }
    }
}
