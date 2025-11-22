// Copyright (c) 2020-2025 TyKonKet and contributors
// Licensed under the MIT License. See LICENSE in the repository root for full license information.

using SkiaSharp;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text;
using System.Text.RegularExpressions;
using TyKonKet.BarcodeGenerator.Utils;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    /// <summary>
    /// Encoder for Interleaved 2 of 5 (ITF) barcodes.
    /// </summary>
    [SuppressMessage("Naming", "S101:Types should be named in PascalCase", Justification = "EncoderFactory naming convention")]
    internal sealed class Interleaved2of5Encoder : Abstract.Encoder
    {
        /// <summary>
        /// Encoding patterns for digits 0-9 in Interleaved 2 of 5.
        /// Each pattern has 5 elements (bars for even positions, spaces for odd positions).
        /// 'n' = narrow (1 unit), 'w' = wide (2 or 3 units, typically 2.5).
        /// </summary>
        internal static readonly Dictionary<char, string> EncodingTable = new()
        {
            { '0', "nnwwn" },
            { '1', "wnnnw" },
            { '2', "nwnnw" },
            { '3', "wwnnn" },
            { '4', "nnwnw" },
            { '5', "wnwnn" },
            { '6', "nwwnn" },
            { '7', "nnnww" },
            { '8', "wnnwn" },
            { '9', "nwnwn" },
        };

        /// <summary>
        /// Start pattern for ITF (nnnn - 4 narrow bars).
        /// </summary>
        private const string StartPattern = "1010";

        /// <summary>
        /// Stop pattern for ITF (wnn - wide bar, narrow space, narrow bar).
        /// </summary>
        private const string StopPattern = "11101";

        private SKPaint? paintBrush;
        private SKPaint? textBrush;
        private SKFont? textFont;
#if DEBUG
        private SKPaint? debugPaint;
#endif
        private SKSurface? drawingSurface;
        private SKCanvas? renderCanvas;
        private SKImageInfo imageInfo;
        private int imageHeight;
        private int imagePadding;
        private int barsHeight;
        private int fontSize;
        private bool disposed;

        /// <summary>
        /// Gets the allowed character set pattern for Interleaved 2 of 5.
        /// </summary>
        protected override Regex AllowedCharsetPattern => RegexCache.Interleaved2of5AllowedCharsetRegex;

        /// <summary>
        /// Initializes a new instance of the <see cref="Interleaved2of5Encoder"/> class.
        /// </summary>
        public Interleaved2of5Encoder()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="Interleaved2of5Encoder"/> class with the specified options.
        /// </summary>
        /// <param name="options">The barcode options.</param>
        public Interleaved2of5Encoder(BarcodeOptions options) : base(options)
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
        /// <exception cref="System.FormatException">Thrown when <paramref name="barcode"/> contains characters not allowed by Interleaved 2 of 5 charset (0–9) or has odd length.</exception>
        /// <exception cref="System.ArgumentOutOfRangeException">Thrown when a numeric character falls outside the valid range during internal conversion (documented for forward compatibility).</exception>
        [SuppressMessage("IDisposableAnalyzers.Correctness", "IDISP004:Don't ignore created IDisposable", Justification = "DisposedByBaseClass")]
        public override string Encode(string barcode)
        {
            // Ensure barcode is not null first
            if (barcode == null)
            {
                throw new ArgumentNullException(nameof(barcode));
            }

            // Charset validation
            this.EnsureValidCharset(barcode);

            // ITF requires even-length data
            if (barcode.Length % 2 != 0)
            {
                throw new FormatException($"Interleaved 2 of 5 requires even-length numeric data. Input length: {barcode.Length}");
            }

            // Store the formatted barcode
            this.Barcode = barcode;

            // Bars encoding
            var encodedBars = EncodeBars(this.Barcode);

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
            // Use the barcode text
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
            // Offset the bounds to the center of the left text
            textBounds.Offset(textBounds.Width / -2, 0);
            textBounds.Offset(textPosition + textOffset);

            // Draw the bounds of the left text
            this.renderCanvas.DrawRect(textBounds, this.debugPaint);

            // Draw the center point of the left text
            this.renderCanvas.DrawPoint(textPosition + textOffset, SKColors.Blue);
#endif
        }

        /// <summary>
        /// Calculates the check digit for Interleaved 2 of 5 using modulo 10.
        /// </summary>
        /// <param name="barcode">The barcode string.</param>
        /// <returns>The check digit character.</returns>
        internal static char GetCheckDigit(string barcode)
        {
            var sum = 0;
            for (int i = 0; i < barcode.Length; i++)
            {
                var digit = barcode[i] - '0';

                // Weight is 3 for odd positions (from left, 0-indexed even), 1 for even positions
                var weight = i % 2 == 0 ? 3 : 1;
                sum += digit * weight;
            }

            var checkDigit = (10 - (sum % 10)) % 10;
            return (char)('0' + checkDigit);
        }

        /// <summary>
        /// Encodes the bars for the specified barcode string.
        /// </summary>
        /// <param name="barcode">The barcode string to encode.</param>
        /// <returns>The encoded bars string as binary (1=bar, 0=space).</returns>
        internal static string EncodeBars(string barcode)
        {
            // Capacity: start (4) + (pairs * 10) + stop (5)
#pragma warning disable SS003 // Intentional integer division
            int pairCount = barcode.Length / 2;
#pragma warning restore SS003
            int capacity = 4 + (pairCount * 10) + 5;

            var sb = new StringBuilder(capacity);

            // Add start pattern
            sb.Append(StartPattern);

            // Encode pairs of digits
            for (int i = 0; i < barcode.Length; i += 2)
            {
                var evenDigit = barcode[i];
                var oddDigit = barcode[i + 1];

                var evenPattern = EncodingTable[evenDigit];
                var oddPattern = EncodingTable[oddDigit];

                // Interleave: even digit patterns form bars, odd digit patterns form spaces
                for (int j = 0; j < 5; j++)
                {
                    // Bar from even digit
                    var evenIsWide = evenPattern[j] == 'w';
                    sb.Append(evenIsWide ? "11" : "1");

                    // Space from odd digit
                    var oddIsWide = oddPattern[j] == 'w';
                    sb.Append(oddIsWide ? "00" : "0");
                }
            }

            // Add stop pattern
            sb.Append(StopPattern);

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
