namespace TyKonKet.BarcodeGenerator.Generators
{
    interface IGenerator
    {
        BarcodeOptions Options { get; set; }

        void GenerateBarcode(string barcode, string file);
    }
}
