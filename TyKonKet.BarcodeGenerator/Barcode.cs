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
            this.Options.Lock();
            this.barcodeEncoder = EncodersFactory.Create(this.Options);
            this.barcodeEncoder.LoadOptions();
        }

        /// <summary>
        /// Encodes the barcode based on the specified options and renders the image.
        /// </summary>
        /// <param name="barcode">The alphanumeric barcode to encode.</param>
        /// <returns>The validated barcode string with added check digits if the encoding requires them.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="barcode"/> is <c>null</c>.</exception>
        /// <exception cref="FormatException">Thrown when <paramref name="barcode"/> contains characters not allowed by the selected encoder's charset (e.g., only digits for EAN/UPC; Code 93 allows A–Z, 0–9, and specific symbols).</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when a numeric character falls outside the valid range during internal conversion (documented for forward compatibility).</exception>
        public string Encode(string barcode)
        {
            return this.barcodeEncoder.Encode(barcode);
        }

        /// <summary>
        /// Exports the barcode image to a file.
        /// </summary>
        /// <param name="filePath">
        /// Path to the file (can be relative or absolute). The following special keywords are supported:
        /// <list type="bullet">
        /// <item><description><c>{barcode}</c>: Replaced with the barcode string, sanitized for file names.</description></item>
        /// <item><description><c>{format}</c>: Replaced with the file extension corresponding to the image format (e.g., "png").</description></item>
        /// <item><description><c>{quality}</c>: Replaced with the image quality value.</description></item>
        /// </list>
        /// </param>
        /// <param name="format">Image export format.</param>
        /// <param name="quality">Image export quality.</param>
        /// <exception cref="InvalidOperationException">Thrown when the barcode has not been encoded before export.</exception>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="filePath"/> is <c>null</c>.</exception>
        /// <exception cref="DirectoryNotFoundException">Thrown when the directory for the file path does not exist and cannot be created.</exception>
        /// <exception cref="IOException">Thrown when an I/O error occurs during file operations.</exception>
        public void Export(string filePath, SKEncodedImageFormat format = SKEncodedImageFormat.Png, int quality = 100)
        {
            this.barcodeEncoder.Export(filePath, format, quality);
        }

        /// <summary>
        /// Exports the barcode image to a stream.
        /// </summary>
        /// <param name="stream">The stream to export the image to.</param>
        /// <param name="format">Image export format.</param>
        /// <param name="quality">Image export quality.</param>
        /// <exception cref="InvalidOperationException">Thrown when the barcode has not been encoded before export.</exception>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="stream"/> is <c>null</c>.</exception>
        /// <exception cref="IOException">Thrown when an I/O error occurs during stream operations.</exception>
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