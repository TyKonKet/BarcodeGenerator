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
    /// Encoder for UPC-A barcodes.
    /// </summary>
    internal sealed class UpcaEncoder : EanEncoder
    {
        /// <summary>
        /// Heights of the bars in the barcode.
        /// </summary>
        private readonly byte[] barsHeight =
        [
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
        /// Padding for the left text.
        /// </summary>
        private int leftTextPadding = 0;

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
        /// Position for the last digit text.
        /// </summary>
        private SKPoint lastDigitTextPosition;

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
        public UpcaEncoder(BarcodeOptions options) : base(options)
        {
        }

        /// <summary>
        /// Loads the barcode options and initializes the necessary properties.
        /// </summary>
        protected internal override void LoadOptions()
        {
            base.LoadOptions();

            this.imagePadding = this.Options.Margins * this.Options.Scaling;

            this.leftTextPadding = this.Options.RenderText ? 7 * this.Options.Scaling : 0;
            var rightTextPadding = this.Options.RenderText ? 7 * this.Options.Scaling : 0;

            var imageHeight = (this.Options.Scaling * this.Options.Height) + (this.imagePadding * 2);
            var imageWidth = (this.Options.Scaling * this.barsHeight.Length) + (this.imagePadding * 2) + this.leftTextPadding + rightTextPadding;

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

                this.firstDigitTextPosition = new SKPoint(this.imagePadding, imageHeight - this.imagePadding);
                this.leftTextPosition = new SKPoint(this.imagePadding + this.leftTextPadding + (10 * this.Options.Scaling) + (int)((36 * this.Options.Scaling) / 2.0), imageHeight - this.imagePadding);
                this.rightTextPosition = new SKPoint(this.imagePadding + this.leftTextPadding + (49 * this.Options.Scaling) + (int)((36 * this.Options.Scaling) / 2.0), imageHeight - this.imagePadding);
                this.lastDigitTextPosition = new SKPoint(imageWidth - this.imagePadding, imageHeight - this.imagePadding);
            }
        }

        /// <summary>
        /// Encodes the specified barcode string into a UPC-A barcode.
        /// </summary>
        /// <param name="barcode">The barcode string to encode.</param>
        /// <returns>The encoded barcode string.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="barcode"/> is <see langword="null"/>.</exception>
        /// <exception cref="FormatException">Thrown when <paramref name="barcode"/> contains characters not allowed by EAN/UPC charset (only digits 0–9).</exception>
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
            var xPosition = this.imagePadding + this.leftTextPadding;
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
        /// Renders the barcode text on the canvas.
        /// </summary>
        private void RenderBarcodeText()
        {
            // Draw the barcode text
            var firstDigitText = this.Barcode![..1];
            var leftText = this.Barcode.Substring(1, 5);
            var rightText = this.Barcode.Substring(6, 5);
            var lastDigitText = this.Barcode.Substring(11, 1);

            // Offset for the text
            var textOffset = new SKPoint(0, 0);

            // Measure the texts
            this.textFont!.MeasureText(firstDigitText, out SKRect firstDigitTextBounds, this.textBrush);
            this.textFont.MeasureText(leftText, out SKRect leftTextBounds, this.textBrush);
            this.textFont.MeasureText(leftText, out SKRect rightTextBounds, this.textBrush);
            this.textFont.MeasureText(lastDigitText, out SKRect lastDigitTextBounds, this.textBrush);

            // Get the highest text
            var highestText = Math.Max(Math.Max(Math.Max(leftTextBounds.Height, rightTextBounds.Height), firstDigitTextBounds.Height), lastDigitTextBounds.Height);

            // Offset the text to the middle of the available space
            textOffset.Y -= (this.verticalTextSpace - highestText) / 2;

            this.renderCanvas!.DrawText(firstDigitText, this.firstDigitTextPosition + textOffset, SKTextAlign.Left, this.textFont, this.textBrush);
            this.renderCanvas.DrawText(leftText, this.leftTextPosition + textOffset, SKTextAlign.Center, this.textFont, this.textBrush);
            this.renderCanvas.DrawText(rightText, this.rightTextPosition + textOffset, SKTextAlign.Center, this.textFont, this.textBrush);
            this.renderCanvas.DrawText(lastDigitText, this.lastDigitTextPosition + textOffset, SKTextAlign.Right, this.textFont, this.textBrush);

#if DEBUG
            // Offset the bounds of the first digit text
            firstDigitTextBounds.Offset(this.firstDigitTextPosition + textOffset);

            // Draw the bounds of the left text
            this.renderCanvas.DrawRect(firstDigitTextBounds, this.debugPaint);

            // Draw the center point of the left text
            this.renderCanvas.DrawPoint(this.firstDigitTextPosition + textOffset, SKColors.Blue);

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

            // Offset the bounds to the center of the right text
            lastDigitTextBounds.Offset(-lastDigitTextBounds.Width, 0);
            lastDigitTextBounds.Offset(this.lastDigitTextPosition + textOffset);

            // Draw the bounds of the right text
            this.renderCanvas.DrawRect(lastDigitTextBounds, this.debugPaint);

            // Draw the center point of the right text
            this.renderCanvas.DrawPoint(this.lastDigitTextPosition + textOffset, SKColors.Blue);
#endif
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
            // UPC-A structure: Start Guard (3) + Left Group (42) + Center Guard (5) + Right Group (42) + End Guard (3) = 95 chars total
            const int totalLength = 95;
            Span<char> result = stackalloc char[totalLength];
            var position = 0;

            // Start guard: "101"
            var startGuard = Guards[0].AsSpan();
            startGuard.CopyTo(result[position..]);
            position += startGuard.Length;

            // Left group (6 digits, positions 0-5)
            for (var i = 0; i < 6; i++)
            {
                var num = barcode[i] - '0';
                var encoding = EncodingA[num];
                var encodingSpan = encoding.AsSpan();
                encodingSpan.CopyTo(result[position..]);
                position += encodingSpan.Length;
            }

            // Center guard: "01010"
            var centerGuard = Guards[1].AsSpan();
            centerGuard.CopyTo(result[position..]);
            position += centerGuard.Length;

            // Right group (6 digits, positions 6-11)
            for (var i = 6; i < 12; i++)
            {
                var num = barcode[i] - '0';
                var encoding = EncodingC[num];
                var encodingSpan = encoding.AsSpan();
                encodingSpan.CopyTo(result[position..]);
                position += encodingSpan.Length;
            }

            // End guard: "101"
            var endGuard = Guards[2].AsSpan();
            endGuard.CopyTo(result[position..]);

#if NET6_0_OR_GREATER
            return new string(result);
#else
            return new string(result.ToArray());
#endif
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
