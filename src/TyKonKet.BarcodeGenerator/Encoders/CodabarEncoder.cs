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
    /// Encoder for Codabar barcodes.
    /// </summary>
    internal sealed class CodabarEncoder : Abstract.Encoder
    {
        /// <summary>
        /// Encoding table for Codabar characters.
        /// Each pattern uses 'w' for wide and 'n' for narrow elements.
        /// Pattern format: 4 bars + 3 spaces (bnbnbnb where b=bar, n=space).
        /// </summary>
        internal static readonly Dictionary<char, string> EncodingTable = new()
        {
            { '0', "nnnnnww" },
            { '1', "nnnnwwn" },
            { '2', "nnnwnnw" },
            { '3', "wwnnnnn" },
            { '4', "nnwnnwn" },
            { '5', "wnnnnwn" },
            { '6', "nwnnnnw" },
            { '7', "nwnnwnn" },
            { '8', "nwwnnnn" },
            { '9', "wnnwnnn" },
            { '-', "nnnwwnn" },
            { '$', "nnwwnnn" },
            { ':', "wnnnwnw" },
            { '/', "wnwnnnw" },
            { '.', "wnwnwnn" },
            { '+', "nnwnwnw" },
            { 'A', "nnwwnwn" },  // Start/Stop A (also known as T, N or *)
            { 'B', "nwnwnnw" },  // Start/Stop B (also known as N, E or E)
            { 'C', "nnnwnww" },  // Start/Stop C (also known as *, A or A)
            { 'D', "nnnwwwn" },  // Start/Stop D (also known as E, T or T)
        };

        /// <summary>
        /// Gets the allowed character set pattern for Codabar.
        /// </summary>
        protected override Regex AllowedCharsetPattern => RegexCache.CodabarAllowedCharsetRegex;

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
        /// Initializes a new instance of the <see cref="CodabarEncoder"/> class.
        /// </summary>
        public CodabarEncoder()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="CodabarEncoder"/> class with the specified options.
        /// </summary>
        /// <param name="options">The barcode options.</param>
        public CodabarEncoder(BarcodeOptions options) : base(options)
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
        /// <exception cref="System.FormatException">Thrown when <paramref name="barcode"/> does not have valid start/stop characters (A–D) or contains characters not allowed by Codabar charset (0–9, -$:/.+).</exception>
        /// <exception cref="System.ArgumentOutOfRangeException">Thrown when a numeric character falls outside the valid range during internal conversion (documented for forward compatibility).</exception>
        [SuppressMessage("IDisposableAnalyzers.Correctness", "IDISP004:Don't ignore created IDisposable", Justification = "DisposedByBaseClass")]
        public override string Encode(string barcode)
        {
            // Ensure barcode is not null first
            if (barcode == null)
            {
                throw new ArgumentNullException(nameof(barcode));
            }

            // Barcode formatting (uppercase conversion)
            barcode = FormatBarcode(barcode);

            // Charset validation (after uppercase conversion)
            this.EnsureValidCharset(barcode);

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
            this.renderCanvas!.DrawText(barcodeText, textPosition + textOffset, SKTextAlign.Center, this.textFont, this.textBrush);

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
        /// Formats the barcode string by converting to uppercase.
        /// </summary>
        /// <param name="barcode">The barcode string to format.</param>
        /// <returns>The formatted barcode string.</returns>
        internal static string FormatBarcode(string barcode)
        {
            return barcode.ToUpper(System.Globalization.CultureInfo.CurrentCulture);
        }

        /// <summary>
        /// Encodes the bars for the specified barcode string.
        /// </summary>
        /// <param name="barcode">The barcode string to encode (must include start/stop characters).</param>
        /// <returns>The encoded bars string as binary (1=bar, 0=space).</returns>
        internal static string EncodeBars(string barcode)
        {
            // Codabar already includes start/stop characters (A-D)
            // Calculate capacity: each character has 7 elements (n=2, w=3 by default)
            // Plus intercharacter gaps (1 unit narrow space between characters)
            int capacity = (barcode.Length * ((5 * 2) + (2 * 3))) + (barcode.Length - 1);

            var sb = new StringBuilder(capacity);

            for (int i = 0; i < barcode.Length; i++)
            {
                if (i > 0)
                {
                    // Add intercharacter gap (narrow space)
                    sb.Append("0");
                }

                var pattern = EncodingTable[barcode[i]];

                // Convert pattern (n/w) to binary (0/1)
                // n (narrow) = 1 unit, w (wide) = 3 units (using 3:1 ratio)
                for (int j = 0; j < pattern.Length; j++)
                {
                    var isBar = j % 2 == 0; // Even positions are bars, odd are spaces
                    var isWide = pattern[j] == 'w';

                    if (isWide)
                    {
                        // Wide element: 3 units
                        sb.Append(isBar ? "111" : "000");
                    }
                    else
                    {
                        // Narrow element: 1 unit
                        sb.Append(isBar ? "1" : "0");
                    }
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
