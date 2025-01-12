using SkiaSharp;
using System;
using System.Diagnostics;
using System.IO;
using TyKonKet.BarcodeGenerator.Encoders.Abstract;
using TyKonKet.BarcodeGenerator.Utils;

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// Provides support for barcode encoding.
    /// </summary>
    [DebuggerDisplay("Barcode = {barcodeEncoder.Barcode}, {Options}")]
    public sealed class Barcode : IDisposable
    {
        private readonly Encoder barcodeEncoder;

        /// <summary>
        /// Barcode options.
        /// </summary>
        private BarcodeOptions Options { get; } = new BarcodeOptions();

        /// <summary>
        /// Gets the generated barcode image.
        /// </summary>
        public SKImage Image => this.barcodeEncoder.Image;

        /// <summary>
        /// Initialize a new instance of <see cref="Barcode" /> with custom options.
        /// </summary>
        /// <param name="options">Barcode options.</param>
        /// <exception cref="InvalidOperationException">Thrown when the encoder type is not known or does not inherit from <see cref="Encoder"/>.</exception>
        public Barcode(Action<BarcodeOptions> options = null)
        {
            options?.Invoke(this.Options);
            this.barcodeEncoder = EncodersFactory.Create(this.Options);
            this.barcodeEncoder.LoadOptions();
        }

        /// <summary>
        /// Encodes the barcode based on <see cref="Options" /> and renders the image.
        /// </summary>
        /// <param name="barcode">Alphanumeric barcode to encode.</param>
        /// <returns>Validated barcode.</returns>
        public string Encode(string barcode)
        {
            return this.barcodeEncoder.Encode(barcode);
        }

        /// <summary>
        /// Exports the barcode image to a file.
        /// </summary>
        /// <param name="fileName">Name of the file.</param>
        /// <param name="format">Image export format.</param>
        /// <param name="quality">Image export quality.</param>
        /// <exception cref="InvalidOperationException">Thrown when the barcode has not been encoded before export.</exception>
        public void Export(string fileName, SKEncodedImageFormat format = SKEncodedImageFormat.Png, int quality = 100)
        {
            this.barcodeEncoder.Export(fileName, format, quality);
        }

        /// <summary>
        /// Exports the barcode image to a stream.
        /// </summary>
        /// <param name="stream">The stream to export the image to.</param>
        /// <param name="format">Image export format.</param>
        /// <param name="quality">Image export quality.</param>
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