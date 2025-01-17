﻿using SkiaSharp;
using System.Diagnostics.CodeAnalysis;
using System.Text;
using TyKonKet.BarcodeGenerator.Encoders.Abstract;
using TyKonKet.BarcodeGenerator.Utils;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    /// <summary>
    /// Encoder for EAN-13 barcodes.
    /// </summary>
    internal class Ean13Encoder : EanEncoder
    {
        private readonly byte[] barsHeight =
        {
                1, 1, 1,
                0, 0, 0, 0, 0, 0, 0,
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
                0, 0, 0, 0, 0, 0, 0,
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
        /// Position for the first digit text.
        /// </summary>
        private SKPoint firstDigitTextPosition;

        /// <summary>
        /// Position for the left text.
        /// </summary>
        private SKPoint leftTextPosition;

        /// <summary>
        /// Position for the right text.
        /// </summary>
        private SKPoint rightTextPosition;

        /// <summary>
        /// Initializes a new instance of the <see cref="Ean13Encoder"/> class.
        /// </summary>
        public Ean13Encoder()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="Ean13Encoder"/> class with the specified options.
        /// </summary>
        /// <param name="options">The barcode options.</param>
        public Ean13Encoder(BarcodeOptions options)
            : base(options)
        {
        }

        /// <summary>
        /// Loads the barcode options.
        /// </summary>
        protected internal override void LoadOptions()
        {
            base.LoadOptions();

            this.imagePadding = 2 * this.Options.Scale;

            this.leftTextPadding = this.Options.RenderText ? 6 * this.Options.Scale : 0;

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

                this.firstDigitTextPosition = new SKPoint(this.imagePadding + this.leftTextPadding - this.Options.Scale, this.barHeightValues[0] + this.imagePadding + (8 * this.Options.Scale));
                this.leftTextPosition = new SKPoint(this.imagePadding + this.leftTextPadding + (int)((49 * this.Options.Scale) / 2.0), this.barHeightValues[0] + this.imagePadding + (8 * this.Options.Scale));
                this.rightTextPosition = new SKPoint(this.imagePadding + this.leftTextPadding + (int)((49 * this.Options.Scale) / 2.0) + (46 * this.Options.Scale), this.barHeightValues[0] + this.imagePadding + (8 * this.Options.Scale));
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

            var imageWidth = (this.Options.Scale * encodedBars.Length) + (this.imagePadding * 2) + this.leftTextPadding;

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
            var firstDigitText = this.Barcode.Substring(0, 1);
            var leftMainText = this.Barcode.Substring(1, 6);
            var rightMainText = this.Barcode.Substring(7, 6);

            this.renderCanvas.DrawText(firstDigitText, this.firstDigitTextPosition, SKTextAlign.Right, this.textFont, this.paintBrush);

            this.renderCanvas.DrawText(leftMainText, this.leftTextPosition, SKTextAlign.Center, this.textFont, this.paintBrush);

            this.renderCanvas.DrawText(rightMainText, this.rightTextPosition, SKTextAlign.Center, this.textFont, this.paintBrush);
        }

        /// <summary>
        /// Formats the barcode string to the required length and appends the check digit.
        /// </summary>
        /// <param name="barcode">The barcode string to format.</param>
        /// <returns>The formatted barcode string.</returns>
        internal static string FormatBarcode(string barcode)
        {
            return FormatBarcode(barcode, 13);
        }

        /// <summary>
        /// Encodes the bars for the specified barcode string.
        /// </summary>
        /// <param name="barcode">The barcode string to encode.</param>
        /// <returns>The encoded bars string.</returns>
        internal static string EncodeBars(string barcode)
        {
            var left = new StringBuilder(42);
            var right = new StringBuilder(42);
            var encodingTable = EncodingTable[barcode[0].ToInt()];

            for (var i = 1; i < barcode.Length; i++)
            {
                var num = barcode[i].ToInt();
                if (i < 7)
                {
                    if (encodingTable[i - 1] == '0')
                    {
                        left.Append(EncodingA[num]);
                    }
                    else
                    {
                        left.Append(EncodingB[num]);
                    }
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