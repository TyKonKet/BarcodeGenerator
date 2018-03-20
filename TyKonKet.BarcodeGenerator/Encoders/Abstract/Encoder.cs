namespace TyKonKet.BarcodeGenerator.Encoders
{
    internal abstract class Encoder
    {
        protected BarcodeOptions Options { get; }

        protected Encoder(BarcodeOptions options)
        {
            Options = options;
        }

        public abstract void Encode(string barcode, string file);
    }
}
