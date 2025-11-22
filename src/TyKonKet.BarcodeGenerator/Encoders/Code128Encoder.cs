// Copyright (c) 2020-2025 TyKonKet and contributors
// Licensed under the MIT License. See LICENSE in the repository root for full license information.

using SkiaSharp;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using TyKonKet.BarcodeGenerator.Utils;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    /// <summary>
    /// Encoder for Code 128 barcodes.
    /// </summary>
    internal sealed class Code128Encoder : Abstract.Encoder
    {
        /// <summary>
        /// Code set identifiers.
        /// </summary>
        [SuppressMessage("ApiDesign", "SS039:An enum should specify a default value", Justification = "Not applicable here")]
        private enum CodeSet
        {
            A = 0,
            B = 1,
            C = 2,
        }

        /// <summary>
        /// Special codes for Code 128.
        /// </summary>
        private const int CodeStartA = 103;
        private const int CodeStartB = 104;
        private const int CodeStartC = 105;
        private const int CodeStop = 106;
        private const int CodeCodeA = 101;
        private const int CodeCodeB = 100;
        private const int CodeCodeC = 99;

        /// <summary>
        /// Encoding patterns for Code 128 (values 0-106).
        /// Each pattern represents the bar/space widths.
        /// </summary>
        internal static readonly string[] EncodingPatterns =
        [
            "11011001100", "11001101100", "11001100110", "10010011000", "10010001100",
            "10001001100", "10011001000", "10011000100", "10001100100", "11001001000",
            "11001000100", "11000100100", "10110011100", "10011011100", "10011001110",
            "10111001100", "10011101100", "10011100110", "11001110010", "11001011100",
            "11001001110", "11011100100", "11001110100", "11101101110", "11101001100",
            "11100101100", "11100100110", "11101100100", "11100110100", "11100110010",
            "11011011000", "11011000110", "11000110110", "10100011000", "10001011000",
            "10001000110", "10110001000", "10001101000", "10001100010", "11010001000",
            "11000101000", "11000100010", "10110111000", "10110001110", "10001101110",
            "10111011000", "10111000110", "10001110110", "11101110110", "11010001110",
            "11000101110", "11011101000", "11011100010", "11011101110", "11101011000",
            "11101000110", "11100010110", "11101101000", "11101100010", "11100011010",
            "11101111010", "11001000010", "11110001010", "10100110000", "10100001100",
            "10010110000", "10010000110", "10000101100", "10000100110", "10110010000",
            "10110000100", "10011010000", "10011000010", "10000110100", "10000110010",
            "11000010010", "11001010000", "11110111010", "11000010100", "10001111010",
            "10100111100", "10010111100", "10010011110", "10111100100", "10011110100",
            "10011110010", "11110100100", "11110010100", "11110010010", "11011011110",
            "11011110110", "11110110110", "10101111000", "10100011110", "10001011110",
            "10111101000", "10111100010", "11110101000", "11110100010", "10111011110",
            "10111101110", "11101011110", "11110101110", "11010000100", "11010010000",
            "11010011100", "1100011101011",
        ];

        /// <summary>
        /// Gets the allowed character set pattern for Code 128.
        /// Code 128 supports all ASCII characters (0-127).
        /// </summary>
        protected override Regex AllowedCharsetPattern => RegexCache.Code128AllowedCharsetRegex;

        /// <summary>
        /// Indicates whether the object has been disposed.
        /// </summary>
        private bool disposed = false;

        /// <summary>
        /// Padding for the barcode image.
        /// </summary>
        private int imagePadding = 0;

        /// <summary>
        /// Height of the barcode image.
        /// </summary>
        private int imageHeight = 0;

        /// <summary>
        /// Height of the bars in the barcode.
        /// </summary>
        private int barsHeight = 0;

        /// <summary>
        /// Font size for rendering the text.
        /// </summary>
        private int fontSize = 0;

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
        /// Information about the image.
        /// </summary>
        private SKImageInfo imageInfo;

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
        /// Initializes a new instance of the <see cref="Code128Encoder"/> class.
        /// </summary>
        public Code128Encoder()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="Code128Encoder"/> class with the specified options.
        /// </summary>
        /// <param name="options">The barcode options.</param>
        public Code128Encoder(BarcodeOptions options) : base(options)
        {
        }

        /// <summary>
        /// Loads the barcode options.
        /// </summary>
        protected internal override void LoadOptions()
        {
            base.LoadOptions();

            this.imagePadding = this.Options.Margins * this.Options.Scaling;

            this.imageHeight = (this.Options.Scaling * this.Options.Height) + (this.imagePadding * 2);

            this.barsHeight = this.imageHeight - (this.imagePadding * 2);

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
                this.fontSize = 9 * this.Options.Scaling;

                this.textFont?.Dispose();
                this.textFont = new SKFont(this.Options.Typeface, 9 * this.Options.Scaling);

                this.textBrush?.Dispose();
                this.textBrush = new SKPaint()
                {
                    Color = this.Options.EffectiveTextColor,
                    IsAntialias = true,
                };

                // Increase the image height to accommodate the text
                this.imageHeight += this.fontSize;
            }
        }

        /// <summary>
        /// Encodes the specified barcode string.
        /// </summary>
        /// <param name="barcode">The barcode string to encode.</param>
        /// <returns>The encoded barcode string.</returns>
        /// <exception cref="System.ArgumentNullException">Thrown when <paramref name="barcode"/> is <see langword="null"/>.</exception>
        /// <exception cref="System.FormatException">Thrown when <paramref name="barcode"/> contains characters not allowed by Code 128 charset (ASCII 0-127).</exception>
        /// <exception cref="System.ArgumentOutOfRangeException">Thrown when a character falls outside the valid ASCII range.</exception>
        [SuppressMessage("IDisposableAnalyzers.Correctness", "IDISP004:Don't ignore created IDisposable", Justification = "DisposedByBaseClass")]
        public override string Encode(string barcode)
        {
            // Charset validation
            this.EnsureValidCharset(barcode);

            // Store the original barcode
            this.Barcode = barcode;

            // Encode the barcode data
            var encodedData = EncodeData(barcode);

            // Calculate check digit
            var checkDigit = CalculateCheckDigit(encodedData);
            encodedData.Add(checkDigit);

            // Add stop code
            encodedData.Add(CodeStop);

            // Encode bars
            var encodedBars = EncodeBars(encodedData);

            var imageWidth = (this.Options.Scaling * encodedBars.Length) + (this.imagePadding * 2);

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
            this.renderCanvas!.Clear(this.Options.BackgroundColor);

            // Iterate over the bars and draw them
            var xPosition = this.imagePadding;
            foreach (var bar in encodedBars)
            {
                // If the bar is a colored one, draw it
                if (bar == '1')
                {
                    this.renderCanvas.DrawRect(xPosition, this.imagePadding, this.Options.Scaling, this.barsHeight, this.paintBrush);
                }

                xPosition += this.Options.Scaling;
            }

            // Render barcode text if enabled
            if (this.Options.RenderText)
            {
                this.RenderBarcodeText(imageWidth);
            }

            // Set the image
            this.SetImage(this.drawingSurface!.Snapshot());

            return this.Barcode;
        }

        /// <summary>
        /// Renders the barcode text on the canvas.
        /// </summary>
        /// <param name="imageWidth">The width of the image.</param>
        private void RenderBarcodeText(int imageWidth)
        {
            // Get the barcode text
            var barcodeText = this.Barcode!;

            // Offset for the text
            var textOffset = new SKPoint(0, 0);

            // Measure the text
            this.textFont!.MeasureText(barcodeText, out SKRect textBounds, this.textBrush);

            // Get the text position
            var textPosition = new SKPoint((int)(imageWidth / 2.0), this.imageHeight - this.imagePadding);

            // Offset the text to the middle of the available space
            textOffset.Y -= (this.fontSize - textBounds.Height) / 2;

            // Draw the barcode text
            this.renderCanvas!.DrawText(barcodeText, textPosition + textOffset, SKTextAlign.Center, this.textFont, this.paintBrush);

#if DEBUG
            // Offset the bounds to the center of the text
            textBounds.Offset(textBounds.Width / -2, 0);
            textBounds.Offset(textPosition + textOffset);

            // Draw the bounds of the text
            this.renderCanvas.DrawRect(textBounds, this.debugPaint);

            // Draw the center point of the text
            this.renderCanvas.DrawPoint(textPosition + textOffset, SKColors.Blue);
#endif
        }

        /// <summary>
        /// Encodes the data using Code 128.
        /// Automatically selects the optimal code set and switches between them as needed.
        /// </summary>
        /// <param name="data">The data to encode.</param>
        /// <returns>A list of encoded values.</returns>
        internal static List<int> EncodeData(string data)
        {
            var encoded = new List<int>();
            var currentSet = DetermineStartCodeSet(data);

            // Add start code
            encoded.Add(GetStartCode(currentSet));

            int i = 0;
            while (i < data.Length)
            {
                // Try to use Code C if possible (pairs of digits)
                if (currentSet != CodeSet.C && CanUseCodeC(data, i))
                {
                    encoded.Add(CodeCodeC);
                    currentSet = CodeSet.C;
                }

                if (currentSet == CodeSet.C)
                {
                    // Encode pairs of digits
                    if (i + 1 < data.Length && char.IsDigit(data[i]) && char.IsDigit(data[i + 1]))
                    {
                        int value = int.Parse(data.Substring(i, 2), System.Globalization.CultureInfo.InvariantCulture);
                        encoded.Add(value);
                        i += 2;
                    }
                    else
                    {
                        // Switch to Code B for non-digit characters
                        encoded.Add(CodeCodeB);
                        currentSet = CodeSet.B;
                    }
                }
                else
                {
                    char c = data[i];

                    // Check if we need to switch code sets
                    if (currentSet == CodeSet.A && !IsInCodeSetA(c) && IsInCodeSetB(c))
                    {
                        encoded.Add(CodeCodeB);
                        currentSet = CodeSet.B;
                    }
                    else if (currentSet == CodeSet.B && !IsInCodeSetB(c) && IsInCodeSetA(c))
                    {
                        encoded.Add(CodeCodeA);
                        currentSet = CodeSet.A;
                    }

                    // Encode the character
                    encoded.Add(GetCharacterCode(c, currentSet));
                    i++;
                }
            }

            return encoded;
        }

        /// <summary>
        /// Determines the best starting code set for the given data.
        /// </summary>
        /// <param name="data">The data to encode.</param>
        /// <returns>The optimal starting code set.</returns>
        private static CodeSet DetermineStartCodeSet(string data)
        {
            if (string.IsNullOrEmpty(data))
            {
                return CodeSet.B;
            }

            // If the data starts with 2 or more consecutive digits, use Code C
            if (CanUseCodeC(data, 0))
            {
                return CodeSet.C;
            }

            // Check if data contains control characters (Code A only)
            bool hasControlChars = data.Any(c => c < 32);
            if (hasControlChars)
            {
                return CodeSet.A;
            }

            // Default to Code B for standard printable characters
            return CodeSet.B;
        }

        /// <summary>
        /// Checks if Code C can be used starting at the given position.
        /// Code C requires at least 2 consecutive digits.
        /// </summary>
        /// <param name="data">The data string.</param>
        /// <param name="position">The starting position.</param>
        /// <returns>True if Code C can be used, otherwise false.</returns>
        private static bool CanUseCodeC(string data, int position)
        {
            return CountConsecutiveDigits(data, position) >= 2;
        }

        /// <summary>
        /// Counts the number of consecutive digits starting at the given position.
        /// </summary>
        /// <param name="data">The data string.</param>
        /// <param name="position">The starting position.</param>
        /// <returns>The count of consecutive digits.</returns>
        private static int CountConsecutiveDigits(string data, int position)
        {
            int count = 0;
            for (int i = position; i < data.Length && char.IsDigit(data[i]); i++)
            {
                count++;
            }

            return count;
        }

        /// <summary>
        /// Gets the start code for the given code set.
        /// </summary>
        /// <param name="codeSet">The code set.</param>
        /// <returns>The start code value.</returns>
        private static int GetStartCode(CodeSet codeSet)
        {
            return codeSet switch
            {
                CodeSet.A => CodeStartA,
                CodeSet.B => CodeStartB,
                CodeSet.C => CodeStartC,
                _ => CodeStartB,
            };
        }

        /// <summary>
        /// Checks if a character is in Code Set A.
        /// Code Set A includes ASCII 0-95 (control characters, digits, uppercase letters, and some symbols).
        /// </summary>
        /// <param name="c">The character to check.</param>
        /// <returns>True if the character is in Code Set A, otherwise false.</returns>
        private static bool IsInCodeSetA(char c)
        {
            return c >= 0 && c <= 95;
        }

        /// <summary>
        /// Checks if a character is in Code Set B.
        /// Code Set B includes ASCII 32-127 (printable characters).
        /// </summary>
        /// <param name="c">The character to check.</param>
        /// <returns>True if the character is in Code Set B, otherwise false.</returns>
        private static bool IsInCodeSetB(char c)
        {
            return c >= 32 && c <= 127;
        }

        /// <summary>
        /// Gets the code value for a character in the given code set.
        /// </summary>
        /// <param name="c">The character to encode.</param>
        /// <param name="codeSet">The code set to use.</param>
        /// <returns>The code value for the character.</returns>
        private static int GetCharacterCode(char c, CodeSet codeSet)
        {
            if (codeSet == CodeSet.A)
            {
                if (c < 32)
                {
                    return c + 64; // Control characters
                }

                if (c is >= (char)32 and <= (char)95)
                {
                    return c - 32; // Space to underscore
                }
            }
            else if (codeSet == CodeSet.B && c is >= (char)32 and <= (char)127)
            {
                return c - 32; // Printable characters
            }

            throw new ArgumentOutOfRangeException(nameof(c), $"Character '{c}' cannot be encoded in Code Set {codeSet}");
        }

        /// <summary>
        /// Calculates the check digit for the encoded data.
        /// </summary>
        /// <param name="encodedData">The encoded data.</param>
        /// <returns>The check digit value.</returns>
        internal static int CalculateCheckDigit(List<int> encodedData)
        {
            if (encodedData == null || encodedData.Count == 0)
            {
                return 0;
            }

            int sum = encodedData[0]; // Start code
            for (int i = 1; i < encodedData.Count; i++)
            {
                sum += encodedData[i] * i;
            }

            return sum % 103;
        }

        /// <summary>
        /// Encodes the bars for the given encoded data.
        /// </summary>
        /// <param name="encodedData">The encoded data values.</param>
        /// <returns>The encoded bars string.</returns>
        internal static string EncodeBars(List<int> encodedData)
        {
            var sb = new StringBuilder();

            foreach (var value in encodedData)
            {
                if (value >= 0 && value < EncodingPatterns.Length)
                {
                    sb.Append(EncodingPatterns[value]);
                }
            }

            return sb.ToString();
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
