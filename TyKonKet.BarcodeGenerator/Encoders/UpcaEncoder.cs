using SkiaSharp;
using System;
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
        /// Encodes the specified barcode string.
        /// </summary>
        /// <param name="barcode">The barcode string to encode.</param>
        /// <returns>The encoded barcode string.</returns>
        public override string Encode(string barcode)
        {
            // Barcode checks
            this.Barcode = FormatBarcode(barcode, 12);
            this.ValidateCharset(this.Barcode);

            // Bars encode
            var encodedBars = EncodeBars(this.Barcode);

            // Calculate drawing data
            var scalingFactor = Math.Max(this.Options.Scale, 0);

            var padding = 2 * scalingFactor;

            var leftTextPadding = this.Options.RenderText ? 6 * scalingFactor : 0;
            var rightTextPadding = this.Options.RenderText ? 6 * scalingFactor : 0;

            var imageWidth = (scalingFactor * encodedBars.Length) + (padding * 2) + leftTextPadding + rightTextPadding;
            var imageHeight = (scalingFactor * this.Options.Height) + (padding * 2);

            var longBarHeight = imageHeight - (padding * 2);
            var shortBarHeight = (int)(longBarHeight * 0.76);
            var barHeightValues = new[] { shortBarHeight, longBarHeight };

            // Generate barcode image
            var drawingSurface = SKSurface.Create(new SKImageInfo(imageWidth, imageHeight));
            using (var renderCanvas = drawingSurface.Canvas)
            {
                // Draw bg color
                renderCanvas.Clear(this.Options.BackgroundColor);

                using (var paintBrush = new SKPaint
                {
                    Color = this.Options.Color,
                    IsStroke = false,
                })
                {
                    var xPosition = padding + leftTextPadding;
                    for (var i = 0; i < encodedBars.Length; i++)
                    {
                        // Draw bars
                        if (encodedBars[i] == '1')
                        {
                            renderCanvas.DrawRect(xPosition, padding, scalingFactor, barHeightValues[this.barsHeight[i]], paintBrush);
                        }

                        xPosition += scalingFactor;
                    }

                    if (this.Options.RenderText)
                    {
                        this.RenderBarcodeText(scalingFactor, padding, barHeightValues, renderCanvas, paintBrush);
                    }

                    this.Surface?.Dispose();
                    this.Surface = drawingSurface;

                    // Save barcode image
                    this.Image?.Dispose();
                    this.Image = drawingSurface.Snapshot();
                }
            }

            return this.Barcode;
        }

        /// <summary>
        /// Renders the barcode text on the canvas.
        /// </summary>
        /// <param name="scalingFactor">The scaling factor for the text.</param>
        /// <param name="padding">The padding around the text.</param>
        /// <param name="barHeightValues">The heights of the bars.</param>
        /// <param name="renderCanvas">The canvas to render the text on.</param>
        /// <param name="paintBrush">The paint brush to use for rendering the text.</param>
        private void RenderBarcodeText(int scalingFactor, int padding, int[] barHeightValues, SKCanvas renderCanvas, SKPaint paintBrush)
        {
            // Draw texts
            using (var textFont = new SKFont(SKTypeface.FromFamilyName(this.Options.Font, this.Options.FontStyle), 9 * scalingFactor))
            {
                var leftFirstDigit = this.Barcode.Substring(0, 1);
                var leftMainText = this.Barcode.Substring(1, 5);
                var rightMainText = this.Barcode.Substring(6, 5);
                var rightCheckDigit = this.Barcode.Substring(11, 1);

                renderCanvas.DrawText(leftFirstDigit, padding, barHeightValues[1] + padding, textFont, paintBrush);

                const int leftTextPosition = 22;
                const int leftTextOffset = -4;
                renderCanvas.DrawText(leftMainText, padding + (leftTextPosition * scalingFactor) + leftTextOffset, barHeightValues[1] + padding, textFont, paintBrush);

                const int rightTextPosition = 61;
                const int rightTextOffset = -4;
                renderCanvas.DrawText(rightMainText, padding + (rightTextPosition * scalingFactor) + rightTextOffset, barHeightValues[1] + padding, textFont, paintBrush);

                const int rightCheckDigitPosition = 102;
                renderCanvas.DrawText(rightCheckDigit, padding + (rightCheckDigitPosition * scalingFactor), barHeightValues[1] + padding, textFont, paintBrush);
            }
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
                var num = barcode[i].ToInt();

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
    }
}