using SkiaSharp;
using System;
using System.Diagnostics;
using TyKonKet.BarcodeGenerator.Encoders.Abstract;
using TyKonKet.BarcodeGenerator.Utils;

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// Provides support for barcode encoding.
    /// </summary>
    [DebuggerDisplay("BarcodeSurface = {BarcodeSurface}, BarcodeImage = {BarcodeImage}")]
    public sealed class Barcode : IDisposable
    {
        private Encoder barcodeEncoder;

        /// <summary>
        /// Barcode options.
        /// </summary>
        private BarcodeOptions Options { get; } = new BarcodeOptions();

        /// <summary>
        /// Barcode surface.
        /// </summary>
        public SKSurface BarcodeSurface { get => this.barcodeEncoder.Surface; }

        /// <summary>
        /// Encoded image.
        /// </summary>
        public SKImage BarcodeImage { get => this.barcodeEncoder.Image; }

        /// <summary>
        /// Initialize a new instance of <see cref="Barcode" /> with custom options.
        /// </summary>
        /// <param name="options">Barcode options.</param>
        public Barcode(Action<BarcodeOptions> options = null)
        {
            options?.Invoke(this.Options);
        }

        /// <summary>
        /// Encodes the barcode based on <see cref="Options" /> and renders the image.
        /// </summary>
        /// <param name="barcode">Alphanumeric barcode to encode.</param>
        /// <returns>Validated barcode.</returns>
        public string Encode(string barcode)
        {
            this.barcodeEncoder?.Dispose();
            this.barcodeEncoder = EncodersFactory.Create(this.Options);
            return this.barcodeEncoder.Encode(barcode);
        }

        /// <summary>
        /// Exports the barcode image.
        /// </summary>
        /// <param name="fileName">Output image path, supports <c>{barcode}</c> keyword.</param>
        /// <param name="format">Image export format.</param>
        /// <param name="quality">Image export quality.</param>
        /// <exception cref="InvalidOperationException">Thrown when the barcode has not been encoded before export.</exception>
        public void Export(string fileName, SKEncodedImageFormat format = SKEncodedImageFormat.Png, int quality = 100)
        {
            if (this.barcodeEncoder == null)
            {
                throw new InvalidOperationException("The barcode must be encoded before exported");
            }

            this.barcodeEncoder.Export(fileName, format, quality);
        }

        /// <summary>
        /// Releases all resources used by the <see cref="Barcode"/> class.
        /// </summary>
        public void Dispose()
        {
            this.barcodeEncoder?.Dispose();
        }
    }
}