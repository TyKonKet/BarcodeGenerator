using SkiaSharp;
using System;
using TyKonKet.BarcodeGenerator.Encoders;

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// Provides support for barcode encoding.
    /// </summary>
    public class Barcode : IDisposable
    {
        private Encoder BarcodeEncoder;

        /// <summary>
        /// Barcode surface.
        /// </summary>
        public SKSurface BarcodeSurface { get => BarcodeEncoder.Surface; }

        /// <summary>
        /// Encoded image.
        /// </summary>
        public SKImage BarcodeImage { get => BarcodeEncoder.Image; }

        /// <summary>
        /// Initialize a new instance of <see cref="Barcode" /> with custom options.
        /// </summary>
        /// <param name="options">Barcode options.</param>
        public Barcode(Action<BarcodeOptions> options = null)
        {
            options?.Invoke(Options);
        }

        /// <summary>
        /// Barcode options.
        /// </summary>
        private BarcodeOptions Options { get; } = new BarcodeOptions();

        /// <summary>
        /// Encodes the barcode based on <see cref="Options" /> and renders the image.
        /// </summary>
        /// <param name="barcode">Alphanumeric barcode to encode.</param>
        /// <returns>Validated barcode.</returns>
        public string Encode(string barcode)
        {
            BarcodeEncoder = EncodersFactory.Create(Options);
            return BarcodeEncoder.Encode(barcode);
        }

        /// <summary>
        /// Exports the barcode image.
        /// </summary>
        /// <param name="fileName">Output image path, supports <c>{barcode}</c> keyword.</param>
        /// <param name="format">Image export format.</param>
        /// <param name="quality">Image export qualty.</param>
        /// <exception cref="InvalidOperationException"></exception>
        public void Export(string fileName, SKEncodedImageFormat format = SKEncodedImageFormat.Png, int quality = 100)
        {
            if (BarcodeEncoder == null)
            {
                throw new InvalidOperationException("The barcode must be encoded before exported");
            }
            BarcodeEncoder.Export(fileName, format, quality);
        }

        /// <summary>
        /// 
        /// </summary>
        public void Dispose()
        {
            BarcodeEncoder?.Dispose();
            GC.SuppressFinalize(this);
        }
    }
}