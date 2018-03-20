using System;

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// 
    /// </summary>
    public class Barcode
    {
        public BarcodeOptions Options { get; set; } = new BarcodeOptions();

        /// <summary>
        /// 
        /// </summary>
        /// <param name="options"></param>
        public Barcode(Action<BarcodeOptions> options = null)
        {
            options?.Invoke(Options);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="barcode"></param>
        /// <param name="file"></param>
        public void GenerateBarcode(string barcode, string file)
        {
            var generator = Options.Encode.GetGenerator();
            generator.Options = Options;
            generator.GenerateBarcode(barcode, file);
        }
    }
}
