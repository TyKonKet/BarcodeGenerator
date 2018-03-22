using System;
using System.Runtime.CompilerServices;
[assembly: InternalsVisibleTo("TyKonKet.BarcodeGenerator.Tests")]
[assembly: InternalsVisibleTo("LetsTry")]

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
        public void Encode(string barcode, string file)
        {
            var encoder = EncodersFactory.Create(Options);
            encoder.Encode(barcode, file);
        }
    }
}
