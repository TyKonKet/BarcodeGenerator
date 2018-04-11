using System;
using System.Runtime.CompilerServices;

[assembly: InternalsVisibleTo("TyKonKet.BarcodeGenerator.Tests")]
[assembly: InternalsVisibleTo("TyKonKet.BarcodeGenerator.Benchmark")]
[assembly: InternalsVisibleTo("LetsTry")]

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    ///     Provides support for barcode encoding.
    /// </summary>
    public class Barcode
    {
        /// <summary>
        ///     Initialize a new instance of <see cref="Barcode" /> with custom options.
        /// </summary>
        /// <param name="options">Barcode options.</param>
        public Barcode(Action<BarcodeOptions> options = null)
        {
            options?.Invoke(Options);
        }

        /// <summary>
        ///     Barcode options.
        /// </summary>
        private BarcodeOptions Options { get; } = new BarcodeOptions();

        /// <summary>
        ///     Encode the barcode based on <see cref="Options" /> and save it as image.
        /// </summary>
        /// <param name="barcode">Alphanumeric barcode to encode.</param>
        /// <param name="file">Output image path, supports <c>{barcode}</c> keyword.</param>
        /// <returns>Validated barcode.</returns>
        public string Encode(string barcode, string file)
        {
            var encoder = EncodersFactory.Create(Options);
            return encoder.Encode(barcode, file);
        }
    }
}