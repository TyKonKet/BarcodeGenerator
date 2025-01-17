using SkiaSharp;
using System;
using System.Diagnostics;
using System.IO;
using TyKonKet.BarcodeGenerator.Encoders.Abstract;
using TyKonKet.BarcodeGenerator.Utils;

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// Provides support for barcode encoding and exporting.
    /// </summary>
    [DebuggerDisplay("Barcode = {barcodeEncoder.Barcode}, {Options}")]
    public sealed class Barcode : IDisposable
    {
        private readonly Encoder barcodeEncoder;

        /// <summary>
        /// Gets the barcode options.
        /// </summary>
        private BarcodeOptions Options { get; } = new BarcodeOptions();

        /// <summary>
        /// Gets the generated barcode image.
        /// </summary>
        public SKImage Image => this.barcodeEncoder.Image;

        /// <summary>
        /// Initializes a new instance of the <see cref="Barcode"/> class with custom options.
        /// </summary>
        /// <param name="options">An action to configure the barcode options.</param>
        /// <exception cref="InvalidOperationException">Thrown when the encoder type is not known or does not inherit from <see cref="Encoder"/>.</exception>
        public Barcode(Action<BarcodeOptions> options = null)
        {
            options?.Invoke(this.Options);
            this.barcodeEncoder = EncodersFactory.Create(this.Options);
            this.barcodeEncoder.LoadOptions();
        }

        /// <summary>
        /// Encodes the barcode based on the specified options and renders the image.
        /// </summary>
        /// <param name="barcode">The alphanumeric barcode to encode.</param>
        /// <returns>The validated barcode string with added check digits if the encoding requires them.</returns>
        public string Encode(string barcode)
        {
            return this.barcodeEncoder.Encode(barcode);
        }

        /// <summary>
        /// Exports the barcode image to a file.
        /// </summary>
        /// <param name="fileName">The name of the file to export the image to.</param>
        /// <param name="format">The image export format.</param>
        /// <param name="quality">The image export quality (1-100).</param>
        /// <exception cref="InvalidOperationException">Thrown when the barcode has not been encoded before export.</exception>
        public void Export(string fileName, SKEncodedImageFormat format = SKEncodedImageFormat.Png, int quality = 100)
        {
            this.barcodeEncoder.Export(fileName, format, quality);
        }

        /// <summary>
        /// Exports the barcode image to a stream.
        /// </summary>
        /// <param name="stream">The stream to export the image to.</param>
        /// <param name="format">The image export format.</param>
        /// <param name="quality">The image export quality (1-100).</param>
        /// <exception cref="InvalidOperationException">Thrown when the barcode has not been encoded before export.</exception>
        public void Export(Stream stream, SKEncodedImageFormat format = SKEncodedImageFormat.Png, int quality = 100)
        {
            this.barcodeEncoder.Export(stream, format, quality);
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