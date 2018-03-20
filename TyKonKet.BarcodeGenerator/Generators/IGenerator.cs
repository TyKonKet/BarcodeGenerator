namespace TyKonKet.BarcodeGenerator.Generators
{
    internal interface IGenerator
    {
        BarcodeOptions Options { get; set; }

        void GenerateBarcode(string barcode, string file);
    }
}
