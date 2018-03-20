using System;
using TyKonKet.BarcodeGenerator.Encoders;

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
            var encoder = EncodersFactory.Create(Options);
            encoder.Encode(barcode, file);
        }
    }
}
