// Copyright (c) 2020-2025 TyKonKet and contributors
// Licensed under the MIT License. See LICENSE in the repository root for full license information.

using SkiaSharp;
using System;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using TyKonKet.BarcodeGenerator.Encoders.Abstract;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    /// <summary>
    /// Encoder for EAN-8 barcodes.
    /// </summary>
    internal sealed class Ean8Encoder : EanEncoder
    {
        private readonly byte[] barsHeight =
        [
                    1, 1, 1,
                    0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0,
                    1, 1, 1, 1, 1,
                    0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0,
                    1, 1, 1,
        ];

        /// <summary>
        /// Indicates whether the object has been disposed.
        /// </summary>
        private bool disposed = false;

        /// <summary>
        /// Padding around the barcode.
        /// </summary>
        private int imagePadding = 0;

        /// <summary>
        /// Heights of the bars in the barcode.
        /// </summary>
        private int[]? barHeightValues;

        /// <summary>
        /// Vertical space for the text.
        /// </summary>
        private int verticalTextSpace = 0;

        /// <summary>
        /// Paint brush for drawing the barcode.
        /// </summary>
        private SKPaint? paintBrush;

        /// <summary>
        /// Text brush for drawing the text.
        /// </summary>
        private SKPaint? textBrush;

#if DEBUG
        /// <summary>
        /// Paint brush for debugging purposes.
        /// </summary>
        private SKPaint? debugPaint;
#endif

        /// <summary>
        /// Surface for drawing the barcode.
        /// </summary>
        private SKSurface? drawingSurface;

        /// <summary>
        /// Canvas for rendering the barcode.
        /// </summary>
        private SKCanvas? renderCanvas;

        /// <summary>
        /// Font for rendering the text.
        /// </summary>
        private SKFont? textFont;

        /// <summary>
        /// Position for the left text.
        /// </summary>
        private SKPoint leftTextPosition;

        /// <summary>
        /// Position for the right text.
        /// </summary>
        private SKPoint rightTextPosition;

        /// <summary>
        /// Initializes a new instance of the <see cref="Ean8Encoder"/> class.
        /// </summary>
        public Ean8Encoder()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="Ean8Encoder"/> class with the specified options.
        /// </summary>
        /// <param name="options">The barcode options.</param>
        public Ean8Encoder(BarcodeOptions options) : base(options)
        {
        }

        /// <summary>
        /// Loads the barcode options and initializes the necessary properties for rendering.
        /// </summary>
        protected internal override void LoadOptions()
        {
            base.LoadOptions();

            this.imagePadding = this.Options.Margins * this.Options.Scaling;

            var imageHeight = (this.Options.Scaling * this.Options.Height) + (this.imagePadding * 2);
            var imageWidth = (this.Options.Scaling * this.barsHeight.Length) + (this.imagePadding * 2);

            var longBarHeight = imageHeight - (this.imagePadding * 2);
            var shortBarHeight = (int)(longBarHeight * 0.76);
            this.barHeightValues = [shortBarHeight, longBarHeight];

            var imageInfo = new SKImageInfo(imageWidth, imageHeight);

            this.drawingSurface?.Dispose();
            this.drawingSurface = SKSurface.Create(imageInfo);

            this.renderCanvas?.Dispose();
            this.renderCanvas = this.drawingSurface.Canvas;

            this.paintBrush?.Dispose();
            this.paintBrush = new SKPaint()
            {
                Color = this.Options.ForegroundColor,
                IsStroke = false,
            };

#if DEBUG
            this.debugPaint?.Dispose();
            this.debugPaint = new SKPaint()
            {
                Color = SKColors.Red,
                IsStroke = true,
            };
#endif

            if (this.Options.RenderText)
            {
                this.verticalTextSpace = this.barHeightValues.Max() - this.barHeightValues.Min();

                this.textFont?.Dispose();
                this.textFont = new SKFont(this.Options.Typeface, 9 * this.Options.Scaling);

                this.textBrush?.Dispose();
                this.textBrush = new SKPaint()
                {
                    Color = this.Options.EffectiveTextColor,
                    IsAntialias = true,
                };

                this.leftTextPosition = new SKPoint(this.imagePadding + (3 * this.Options.Scaling) + (int)((29 * this.Options.Scaling) / 2.0), imageHeight - this.imagePadding);
                this.rightTextPosition = new SKPoint(this.imagePadding + (6 * this.Options.Scaling) + (29 * this.Options.Scaling) + (int)((29 * this.Options.Scaling) / 2.0), imageHeight - this.imagePadding);
            }
        }

        /// <summary>
        /// Encodes the specified barcode string into an EAN-8 barcode image.
        /// </summary>
        /// <param name="barcode">The barcode string to encode.</param>
        /// <returns>The encoded barcode string.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="barcode"/> is <see langword="null"/>.</exception>
        /// <exception cref="FormatException">Thrown when <paramref name="barcode"/> contains characters not allowed by EAN charset (only digits 0–9).</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when a numeric character falls outside the valid range during internal conversion (documented for forward compatibility).</exception>
        [SuppressMessage("IDisposableAnalyzers.Correctness", "IDISP004:Don't ignore created IDisposable", Justification = "DisposedByBaseClass")]
        public override string Encode(string barcode)
        {
            // Charset validation
            this.EnsureValidCharset(barcode);

            // Barcode formatting + check digit
            this.Barcode = FormatBarcode(barcode);

            // Bars encoding
            var encodedBars = EncodeBars(this.Barcode);

            // Clear canvas
            this.renderCanvas!.Clear(this.Options.BackgroundColor);

            // Iterate over the bars and draw them
            var xPosition = this.imagePadding;
            for (var i = 0; i < encodedBars.Length; i++)
            {
                // If the bar is a colored one, draw it
                if (encodedBars[i] == '1')
                {
                    this.renderCanvas.DrawRect(xPosition, this.imagePadding, this.Options.Scaling, this.barHeightValues![this.barsHeight[i]], this.paintBrush);
                }

                xPosition += this.Options.Scaling;
            }

            // Render barcode text if enabled
            if (this.Options.RenderText)
            {
                this.RenderBarcodeText();
            }

            // Set the image
            this.SetImage(this.drawingSurface!.Snapshot());

            return this.Barcode;
        }

        /// <summary>
        /// Renders the text below the barcode.
        /// </summary>
        private void RenderBarcodeText()
        {
            // Draw the barcode text
            var leftText = this.Barcode![..4];
            var rightText = this.Barcode.Substring(4, 4);

            // Offset for the text
            var textOffset = new SKPoint(0, 0);

            // Measure the texts
            this.textFont!.MeasureText(leftText, out SKRect leftTextBounds, this.textBrush);
            this.textFont.MeasureText(leftText, out SKRect rightTextBounds, this.textBrush);

            // Get the highest text
            var highestText = Math.Max(leftTextBounds.Height, rightTextBounds.Height);

            // Offset the text to the middle of the available space
            textOffset.Y -= (this.verticalTextSpace - highestText) / 2;

            // Draw the left and right text
            this.renderCanvas!.DrawText(leftText, this.leftTextPosition + textOffset, SKTextAlign.Center, this.textFont, this.textBrush);
            this.renderCanvas.DrawText(rightText, this.rightTextPosition + textOffset, SKTextAlign.Center, this.textFont, this.textBrush);

#if DEBUG
            // Offset the bounds to the center of the left text
            leftTextBounds.Offset(leftTextBounds.Width / -2, 0);
            leftTextBounds.Offset(this.leftTextPosition + textOffset);

            // Draw the bounds of the left text
            this.renderCanvas.DrawRect(leftTextBounds, this.debugPaint);

            // Draw the center point of the left text
            this.renderCanvas.DrawPoint(this.leftTextPosition + textOffset, SKColors.Blue);

            // Offset the bounds to the center of the right text
            rightTextBounds.Offset(rightTextBounds.Width / -2, 0);
            rightTextBounds.Offset(this.rightTextPosition + textOffset);

            // Draw the bounds of the right text
            this.renderCanvas.DrawRect(rightTextBounds, this.debugPaint);

            // Draw the center point of the right text
            this.renderCanvas.DrawPoint(this.rightTextPosition + textOffset, SKColors.Blue);
#endif
        }

        /// <summary>
        /// Formats the barcode string to the required length and appends the check digit.
        /// </summary>
        /// <param name="barcode">The barcode string to format.</param>
        /// <returns>The formatted barcode string.</returns>
        internal static string FormatBarcode(string barcode)
        {
            return FormatBarcode(barcode, 8);
        }

        /// <summary>
        /// Encodes the bars for the barcode using the EAN-8 encoding scheme.
        /// </summary>
        /// <param name="barcode">The barcode string to encode.</param>
        /// <returns>The encoded bars string.</returns>
        internal static string EncodeBars(string barcode)
        {
            var left = new StringBuilder(28); // 4 digits * 7 bits
            var right = new StringBuilder(28); // 4 digits * 7 bits
            for (var i = 0; i < barcode.Length; i++)
            {
                var num = barcode[i] - '0'; // Convert char to int
                if (i < 4)
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
                    this.textBrush?.Dispose();
                    this.drawingSurface?.Dispose();
                    this.renderCanvas?.Dispose();
                    this.textFont?.Dispose();
#if DEBUG
                    this.debugPaint?.Dispose();
#endif
                }

                this.disposed = true;
            }

            base.Dispose(disposing);
        }
    }
}
