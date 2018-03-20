namespace TyKonKet.BarcodeGenerator.Encoders
{
    internal class Isbn13Encoder : Ean13Encoder
    {
        public Isbn13Encoder(BarcodeOptions options) : base(options)
        {
        }

        public override void Encode(string barcode, string file)
        {
            // Preparse barcode
            barcode = barcode.PadLeft(12, '0');
            barcode = barcode.Substring(0, 12);
            barcode = $"978{barcode.Substring(3, 9)}";
            base.Encode(barcode, file);
        }
    }
}
