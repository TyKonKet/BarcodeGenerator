using SkiaSharp;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using TyKonKet.BarcodeGenerator.Utils;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    /// <summary>
    /// Encoder for Code 93 barcodes.
    /// </summary>
    internal sealed class Code93Encoder : Abstract.Encoder
    {
        /// <summary>
        /// Encoding table for Code 93 characters.
        /// </summary>
        internal static readonly Dictionary<char, (int, string)> EncodingTable = new Dictionary<char, (int, string)>
            {
                { '0', (0, "100010100") },
                { '1', (1, "101001000") },
                { '2', (2, "101000100") },
                { '3', (3, "101000010") },
                { '4', (4, "100101000") },
                { '5', (5, "100100100") },
                { '6', (6, "100100010") },
                { '7', (7, "101010000") },
                { '8', (8, "100010010") },
                { '9', (9, "100001010") },
                { 'A', (10, "110101000") },
                { 'B', (11, "110100100") },
                { 'C', (12, "110100010") },
                { 'D', (13, "110010100") },
                { 'E', (14, "110010010") },
                { 'F', (15, "110001010") },
                { 'G', (16, "101101000") },
                { 'H', (17, "101100100") },
                { 'I', (18, "101100010") },
                { 'J', (19, "100110100") },
                { 'K', (20, "100011010") },
                { 'L', (21, "101011000") },
                { 'M', (22, "101001100") },
                { 'N', (23, "101000110") },
                { 'O', (24, "100101100") },
                { 'P', (25, "100010110") },
                { 'Q', (26, "110110100") },
                { 'R', (27, "110110010") },
                { 'S', (28, "110101100") },
                { 'T', (29, "110100110") },
                { 'U', (30, "110010110") },
                { 'V', (31, "110011010") },
                { 'W', (32, "101101100") },
                { 'X', (33, "101100110") },
                { 'Y', (34, "100110110") },
                { 'Z', (35, "100111010") },
                { '-', (36, "100101110") },
                { '.', (37, "111010100") },
                { ' ', (38, "111010010") },
                { '$', (39, "111001010") },
                { '/', (40, "101101110") },
                { '+', (41, "101110110") },
                { '%', (42, "110101110") },
                { '<', (43, "100100110") },
                { '=', (44, "111011010") },
                { '>', (45, "111010110") },
                { '?', (46, "100110010") },
                { '*', (47, "101011110") },
            };

        /// <summary>
        /// Keys of the encoding table.
        /// </summary>
        private static readonly char[] EncodingTableKeys = EncodingTable.Keys.ToArray();

        /// <summary>
        /// Gets the allowed character set pattern for Code 93.
        /// </summary>
        protected override Regex AllowedCharsetPattern => RegexCache.Code93AllowedCharsetRegex;

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
        /// Initializes a new instance of the <see cref="Code93Encoder"/> class.
        /// </summary>
        public Code93Encoder()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="Code93Encoder"/> class with the specified options.
        /// </summary>
        /// <param name="options">The barcode options.</param>
        public Code93Encoder(BarcodeOptions options)
            : base(options)
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

            if (this.Options.RenderText)
            {
                var fontSize = 9 * this.Options.Scaling;

                this.textFont?.Dispose();
                this.textFont = new SKFont(this.Options.Typeface, fontSize);

                // Increase the image height to accommodate the text
                this.imageHeight += fontSize;
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

            // Barcode formatting + check digits
            this.Barcode = FormatBarcode(barcode);

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
            this.renderCanvas.Clear(this.Options.BackgroundColor);

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
            this.SetImage(this.drawingSurface.Snapshot());

            return this.Barcode;
        }

        /// <summary>
        /// Renders the barcode text on the canvas.
        /// </summary>
        /// <param name="imageWidth">The width of the image.</param>
        private void RenderBarcodeText(int imageWidth)
        {
            // Get the barcode text (without the check digits)
            var barcodeText = this.Barcode.Substring(0, this.Barcode.Length - 2);

            var textPosition = new SKPoint((int)(imageWidth / 2.0), this.barsHeight + this.imagePadding + (9 * this.Options.Scaling));

            // Draw the barcode text
            this.renderCanvas.DrawText(barcodeText, textPosition, SKTextAlign.Center, this.textFont, this.paintBrush);
        }

        /// <summary>
        /// Formats the barcode string by adding check digits.
        /// </summary>
        /// <param name="barcode">The barcode string to format.</param>
        /// <returns>The formatted barcode string with check digits.</returns>
        internal static string FormatBarcode(string barcode)
        {
            barcode = barcode.ToUpper(System.Globalization.CultureInfo.CurrentCulture);
            var checkDigits = GetCheckDigits(barcode);
            return $"{barcode}{checkDigits}";
        }

        /// <summary>
        /// Gets the check digits for the specified barcode string.
        /// </summary>
        /// <param name="barcode">The barcode string.</param>
        /// <returns>The check digits for the barcode string.</returns>
        internal static string GetCheckDigits(string barcode)
        {
            var checkDigit = GetCheckDigit(barcode, 20);
            checkDigit += GetCheckDigit($"{barcode}{checkDigit}", 15);

            return $"{checkDigit}";
        }

        /// <summary>
        /// Gets a single check digit for the specified barcode string and maximum weight.
        /// </summary>
        /// <param name="b">The barcode string.</param>
        /// <param name="maxWeight">The maximum weight for the check digit calculation.</param>
        /// <returns>The check digit for the barcode string.</returns>
        internal static string GetCheckDigit(string b, int maxWeight)
        {
            var sum = 0;
            var weight = 1;
            for (var i = b.Length - 1; i >= 0; i--)
            {
                sum += weight * EncodingTable[b[i]].Item1;
                weight++;
                if (weight > maxWeight)
                {
                    weight = 1;
                }
            }

            return EncodingTableKeys[sum % 47].ToString();
        }

        /// <summary>
        /// Encodes the bars for the specified barcode string.
        /// </summary>
        /// <param name="barcode">The barcode string to encode.</param>
        /// <returns>The encoded bars string.</returns>
        internal static string EncodeBars(string barcode)
        {
            barcode = "*" + barcode + "*";
            int capacity = (barcode.Length * 9) + 1;

            var sb = new StringBuilder(capacity);

            for (int i = 0; i < barcode.Length; i++)
            {
                sb.Append(EncodingTable[barcode[i]].Item2);
            }

            sb.Append('1');
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