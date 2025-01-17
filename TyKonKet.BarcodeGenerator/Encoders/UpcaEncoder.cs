using SkiaSharp;
using System;
using System.Diagnostics.CodeAnalysis;
using System.Text;
using TyKonKet.BarcodeGenerator.Encoders.Abstract;
using TyKonKet.BarcodeGenerator.Utils;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    /// <summary>
    /// Encoder for UPC-A barcodes.
    /// </summary>
    internal sealed class UpcaEncoder : EanEncoder
    {
        /// <summary>
        /// Heights of the bars in the barcode.
        /// </summary>
        private readonly byte[] barsHeight =
        {
                    1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1,
                    0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0,
                    1, 1, 1, 1, 1,
                    0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0,
                    1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1,
        };

        /// <summary>
        /// Indicates whether the object has been disposed.
        /// </summary>
        private bool disposed = false;

        /// <summary>
        /// Padding around the barcode.
        /// </summary>
        private int imagePadding = 0;

        /// <summary>
        /// Padding for the left text.
        /// </summary>
        private int leftTextPadding = 0;

        /// <summary>
        /// Padding for the right text.
        /// </summary>
        private int rightTextPadding = 0;

        /// <summary>
        /// Height of the barcode image.
        /// </summary>
        private int imageHeight = 0;

        /// <summary>
        /// Heights of the bars in the barcode.
        /// </summary>
        private int[] barHeightValues;

        /// <summary>
        /// Paint brush for drawing the barcode.
        /// </summary>
        private SKPaint paintBrush;

        /// <summary>
        /// Information about the image.
        /// </summary>
        private SKImageInfo imageInfo;

        /// <summary>
        /// Surface for drawing the barcode.
        /// </summary>
        private SKSurface drawingSurface;

        /// <summary>
        /// Canvas for rendering the barcode.
        /// </summary>
        private SKCanvas renderCanvas;

        /// <summary>
        /// Font for rendering the text.
        /// </summary>
        private SKFont textFont;

        /// <summary>
        /// Initializes a new instance of the <see cref="UpcaEncoder"/> class.
        /// </summary>
        public UpcaEncoder()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="UpcaEncoder"/> class with the specified options.
        /// </summary>
        /// <param name="options">The barcode options.</param>
        public UpcaEncoder(BarcodeOptions options)
            : base(options)
        {
        }

        /// <summary>
        /// Loads the barcode options.
        /// </summary>
        protected internal override void LoadOptions()
        {
            base.LoadOptions();

            this.imagePadding = this.Options.Margins * this.Options.Scale;

            this.leftTextPadding = this.Options.RenderText ? 6 * this.Options.Scale : 0;
            this.rightTextPadding = this.Options.RenderText ? 6 * this.Options.Scale : 0;

            this.imageHeight = (this.Options.Scale * this.Options.Height) + (this.imagePadding * 2);

            var longBarHeight = this.imageHeight - (this.imagePadding * 2);
            var shortBarHeight = (int)(longBarHeight * 0.76);
            this.barHeightValues = new[] { shortBarHeight, longBarHeight };

            this.paintBrush?.Dispose();
            this.paintBrush = new SKPaint()
            {
                Color = this.Options.Color,
                IsStroke = false,
            };

            if (this.Options.RenderText)
            {
                this.textFont?.Dispose();
                this.textFont = new SKFont(SKTypeface.FromFamilyName(this.Options.Font, this.Options.FontStyle), 9 * this.Options.Scale);
            }
        }

        /// <summary>
        /// Encodes the specified barcode string.
        /// </summary>
        /// <param name="barcode">The barcode string to encode.</param>
        /// <returns>The encoded barcode string.</returns>
        [SuppressMessage("IDisposableAnalyzers.Correctness", "IDISP004:Don't ignore created IDisposable", Justification = "DisposedByBaseClass")]
        public override string Encode(string barcode)
        {
            // Charset validation
            this.EnsureValidCharset(barcode);

            // Barcode formatting + check digit
            this.Barcode = FormatBarcode(barcode);

            // Bars encoding
            var encodedBars = EncodeBars(this.Barcode);

            var imageWidth = (this.Options.Scale * encodedBars.Length) + (this.imagePadding * 2) + this.leftTextPadding + this.rightTextPadding;

            // Setups the canvas for rendering if it's not already set or if the image size has changed
            if (this.imageInfo == default || this.imageHeight != this.imageInfo.Height || imageWidth != this.imageInfo.Width)
            {
                this.imageInfo = new SKImageInfo(imageWidth, this.imageHeight);

                this.drawingSurface?.Dispose();
                this.drawingSurface = SKSurface.Create(this.imageInfo);

                this.renderCanvas?.Dispose();
                this.renderCanvas = this.drawingSurface.Canvas;
            }

            // Clear canvas
            this.renderCanvas.Clear(this.Options.BackgroundColor);

            // Iterate over the bars and draw them
            var xPosition = this.imagePadding + this.leftTextPadding;
            for (var i = 0; i < encodedBars.Length; i++)
            {
                // If the bar is a colored one, draw it
                if (encodedBars[i] == '1')
                {
                    this.renderCanvas.DrawRect(xPosition, this.imagePadding, this.Options.Scale, this.barHeightValues[this.barsHeight[i]], this.paintBrush);
                }

                xPosition += this.Options.Scale;
            }

            // Render barcode text if enabled
            if (this.Options.RenderText)
            {
                this.RenderBarcodeText();
            }

            // Set the image
            this.SetImage(this.drawingSurface.Snapshot());

            return this.Barcode;
        }

        /// <summary>
        /// Renders the barcode text on the canvas.
        /// </summary>
        private void RenderBarcodeText()
        {
            // Draw the barcode text
            var leftFirstDigit = this.Barcode.Substring(0, 1);
            var leftMainText = this.Barcode.Substring(1, 5);
            var rightMainText = this.Barcode.Substring(6, 5);
            var rightCheckDigit = this.Barcode.Substring(11, 1);

            this.renderCanvas.DrawText(leftFirstDigit, this.imagePadding, this.barHeightValues[1] + this.imagePadding, this.textFont, this.paintBrush);

            const int leftTextPosition = 22;
            const int leftTextOffset = -4;
            this.renderCanvas.DrawText(leftMainText, this.imagePadding + (leftTextPosition * this.Options.Scale) + leftTextOffset, this.barHeightValues[1] + this.imagePadding, this.textFont, this.paintBrush);

            const int rightTextPosition = 61;
            const int rightTextOffset = -4;
            this.renderCanvas.DrawText(rightMainText, this.imagePadding + (rightTextPosition * this.Options.Scale) + rightTextOffset, this.barHeightValues[1] + this.imagePadding, this.textFont, this.paintBrush);

            const int rightCheckDigitPosition = 102;
            this.renderCanvas.DrawText(rightCheckDigit, this.imagePadding + (rightCheckDigitPosition * this.Options.Scale), this.barHeightValues[1] + this.imagePadding, this.textFont, this.paintBrush);
        }

        /// <summary>
        /// Formats the barcode to the specified length.
        /// </summary>
        /// <param name="barcode">The barcode string to format.</param>
        /// <returns>The formatted barcode string.</returns>
        internal static string FormatBarcode(string barcode)
        {
            return FormatBarcode(barcode, 12);
        }

        /// <summary>
        /// Encodes the bars for the specified barcode string.
        /// </summary>
        /// <param name="barcode">The barcode string to encode.</param>
        /// <returns>The encoded bars as a string.</returns>
        internal static string EncodeBars(string barcode)
        {
            var left = new StringBuilder(42);
            var right = new StringBuilder(42);

            for (var i = 0; i < barcode.Length; i++)
            {
                var num = barcode[i] - '0';

                if (i < 6)
                {
                    left.Append(EncodingA[num]);
                }
                else
                {
                    right.Append(EncodingC[num]);
                }
            }

            return $"{Guards[0]}{left}{Guards[1]}{right}{Guards[2]}";
        }

        /// <summary>
        /// Disposes the resources used by the encoder.
        /// </summary>
        /// <param name="disposing">Indicates whether the method call comes from a Dispose method (its value is true) or from a finalizer (its value is false).</param>
        protected override void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    this.paintBrush?.Dispose();
                    this.drawingSurface?.Dispose();
                    this.renderCanvas?.Dispose();
                    this.textFont?.Dispose();
                }

                this.disposed = true;
            }

            base.Dispose(disposing);
        }
    }
}