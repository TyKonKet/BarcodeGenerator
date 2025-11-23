// Copyright (c) 2020-2025 TyKonKet and contributors
// Licensed under the MIT License. See LICENSE in the repository root for full license information.

using SkiaSharp;
using System;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using TyKonKet.BarcodeGenerator.Encoders.Abstract;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    /// <summary>
    /// Encoder for UPC-E barcodes.
    /// </summary>
    internal sealed class UpceEncoder : EanEncoder
    {
        /// <summary>
        /// Heights of the bars in the barcode.
        /// </summary>
        private readonly byte[] barsHeight =
        [
            1, 1, 1,                         // Start guard (3)
            0, 0, 0, 0, 0, 0, 0,             // Digit 1 (7)
            0, 0, 0, 0, 0, 0, 0,             // Digit 2 (7)
            0, 0, 0, 0, 0, 0, 0,             // Digit 3 (7)
            0, 0, 0, 0, 0, 0, 0,             // Digit 4 (7)
            0, 0, 0, 0, 0, 0, 0,             // Digit 5 (7)
            0, 0, 0, 0, 0, 0, 0,             // Digit 6 (7)
            1, 1, 1, 1, 1, 1,                // End guard (6)
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
        /// Position for the number system digit text.
        /// </summary>
        private SKPoint numberSystemTextPosition;

        /// <summary>
        /// Position for the center text.
        /// </summary>
        private SKPoint centerTextPosition;

        /// <summary>
        /// Position for the check digit text.
        /// </summary>
        private SKPoint checkDigitTextPosition;

        /// <summary>
        /// Initializes a new instance of the <see cref="UpceEncoder"/> class.
        /// </summary>
        public UpceEncoder()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="UpceEncoder"/> class with the specified options.
        /// </summary>
        /// <param name="options">The barcode options.</param>
        public UpceEncoder(BarcodeOptions options) : base(options)
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

                this.numberSystemTextPosition = new SKPoint(this.imagePadding, imageHeight - this.imagePadding);
                this.centerTextPosition = new SKPoint(this.imagePadding + this.leftTextPadding + (int)((45 * this.Options.Scaling) / 2.0), imageHeight - this.imagePadding);
                this.checkDigitTextPosition = new SKPoint(imageWidth - this.imagePadding, imageHeight - this.imagePadding);
            }
        }

        /// <summary>
        /// Encodes the specified barcode string into a UPC-E barcode.
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
            // UPC-E format: [Number System][6 Data Digits][Check Digit]
            var numberSystemText = this.Barcode![..1];
            var centerText = this.Barcode.Substring(1, 6);
            var checkDigitText = this.Barcode.Substring(7, 1);

            // Offset for the text
            var textOffset = new SKPoint(0, 0);

            // Measure the texts
            this.textFont!.MeasureText(numberSystemText, out SKRect numberSystemTextBounds, this.textBrush);
            this.textFont.MeasureText(centerText, out SKRect centerTextBounds, this.textBrush);
            this.textFont.MeasureText(checkDigitText, out SKRect checkDigitTextBounds, this.textBrush);

            // Get the highest text
            var highestText = Math.Max(Math.Max(numberSystemTextBounds.Height, centerTextBounds.Height), checkDigitTextBounds.Height);

            // Offset the text to the middle of the available space
            textOffset.Y -= (this.verticalTextSpace - highestText) / 2;

            this.renderCanvas!.DrawText(numberSystemText, this.numberSystemTextPosition + textOffset, SKTextAlign.Left, this.textFont, this.textBrush);
            this.renderCanvas.DrawText(centerText, this.centerTextPosition + textOffset, SKTextAlign.Center, this.textFont, this.textBrush);
            this.renderCanvas.DrawText(checkDigitText, this.checkDigitTextPosition + textOffset, SKTextAlign.Right, this.textFont, this.textBrush);

#if DEBUG
            // Offset the bounds of the number system text
            numberSystemTextBounds.Offset(this.numberSystemTextPosition + textOffset);

            // Draw the bounds of the number system text
            this.renderCanvas.DrawRect(numberSystemTextBounds, this.debugPaint);

            // Draw the center point of the number system text
            this.renderCanvas.DrawPoint(this.numberSystemTextPosition + textOffset, SKColors.Blue);

            // Offset the bounds to the center of the center text
            centerTextBounds.Offset(centerTextBounds.Width / -2, 0);
            centerTextBounds.Offset(this.centerTextPosition + textOffset);

            // Draw the bounds of the center text
            this.renderCanvas.DrawRect(centerTextBounds, this.debugPaint);

            // Draw the center point of the center text
            this.renderCanvas.DrawPoint(this.centerTextPosition + textOffset, SKColors.Blue);

            // Offset the bounds to the center of the check digit text
            checkDigitTextBounds.Offset(-checkDigitTextBounds.Width, 0);
            checkDigitTextBounds.Offset(this.checkDigitTextPosition + textOffset);

            // Draw the bounds of the check digit text
            this.renderCanvas.DrawRect(checkDigitTextBounds, this.debugPaint);

            // Draw the center point of the check digit text
            this.renderCanvas.DrawPoint(this.checkDigitTextPosition + textOffset, SKColors.Blue);
#endif
        }

        /// <summary>
        /// Formats the barcode to the UPC-E format (8 digits: number system + 6 data digits + check digit).
        /// </summary>
        /// <param name="barcode">The barcode string to format.</param>
        /// <returns>The formatted barcode string.</returns>
        internal static string FormatBarcode(string barcode)
        {
            // UPC-E is 8 digits: [Number System (1)][Data Digits (6)][Check Digit (1)]
            // If input is 6 digits, prepend '0' as number system, then calculate check digit
            // If input is 7 digits, assume first is number system, calculate check digit
            // If input is 8 digits, validate and return (recalculate check digit)
            if (barcode.Length <= 6)
            {
                // Pad to 6 digits if needed
                var paddedData = barcode.Length < 6 ? new string('0', 6 - barcode.Length) + barcode : barcode;

                // Default number system is 0
                var withNumberSystem = "0" + paddedData;

                // Calculate check digit
                var checkDigit = GetCheckDigit(withNumberSystem);
                return withNumberSystem + checkDigit;
            }
            else if (barcode.Length == 7)
            {
                // First digit is number system, next 6 are data
                var checkDigit = GetCheckDigit(barcode);
                return barcode + checkDigit;
            }
            else
            {
                // 8 or more digits - take first 7 and recalculate check digit
                var truncated = barcode[..7];
                var checkDigit = GetCheckDigit(truncated);
                return truncated + checkDigit;
            }
        }

        /// <summary>
        /// Encodes the bars for the specified barcode string.
        /// </summary>
        /// <param name="barcode">The barcode string to encode (8 digits: number system + 6 data + check digit).</param>
        /// <returns>The encoded bars as a string.</returns>
        internal static string EncodeBars(string barcode)
        {
            // UPC-E structure: Start Guard (3) + Data (42) + End Guard (6) = 51 chars total
            const int totalLength = 51;
            Span<char> result = stackalloc char[totalLength];
            var position = 0;

            // Extract number system and check digit
            var numberSystem = barcode[0] - '0';
            var checkDigit = barcode[7] - '0';

            // Determine parity pattern based on check digit
            // UPC-E uses the check digit to determine the parity pattern
            var parityPattern = GetParityPattern(numberSystem, checkDigit);

            // Start guard: "101"
            const string startGuard = "101";
            var startGuardSpan = startGuard.AsSpan();
            startGuardSpan.CopyTo(result[position..]);
            position += startGuardSpan.Length;

            // Encode 6 data digits (positions 1-6) using parity pattern
            for (var i = 0; i < 6; i++)
            {
                var num = barcode[i + 1] - '0';
                var encoding = parityPattern[i] == '0' ? EncodingA[num] : EncodingB[num];
                var encodingSpan = encoding.AsSpan();
                encodingSpan.CopyTo(result[position..]);
                position += encodingSpan.Length;
            }

            // End guard: "010101"
            const string endGuard = "010101";
            var endGuardSpan = endGuard.AsSpan();
            endGuardSpan.CopyTo(result[position..]);

#if NET8_0_OR_GREATER
            return new string(result);
#else
            return new string(result.ToArray());
#endif
        }

        /// <summary>
        /// Gets the parity pattern for UPC-E encoding based on number system and check digit.
        /// </summary>
        /// <param name="numberSystem">The number system digit (0 or 1).</param>
        /// <param name="checkDigit">The check digit (0-9).</param>
        /// <returns>The parity pattern string.</returns>
        private static string GetParityPattern(int numberSystem, int checkDigit)
        {
            // UPC-E parity patterns for number system 0
            string[] parityPatternsNS0 =
            [
                "111000", // Check digit 0
                "110100", // Check digit 1
                "110010", // Check digit 2
                "110001", // Check digit 3
                "101100", // Check digit 4
                "100110", // Check digit 5
                "100011", // Check digit 6
                "101010", // Check digit 7
                "101001", // Check digit 8
                "100101", // Check digit 9
            ];

            // UPC-E parity patterns for number system 1
            string[] parityPatternsNS1 =
            [
                "000111", // Check digit 0
                "001011", // Check digit 1
                "001101", // Check digit 2
                "001110", // Check digit 3
                "010011", // Check digit 4
                "011001", // Check digit 5
                "011100", // Check digit 6
                "010101", // Check digit 7
                "010110", // Check digit 8
                "011010", // Check digit 9
            ];

            return numberSystem == 0 ? parityPatternsNS0[checkDigit] : parityPatternsNS1[checkDigit];
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
