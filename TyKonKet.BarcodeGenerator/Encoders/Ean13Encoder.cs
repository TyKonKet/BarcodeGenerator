using SkiaSharp;
using System;
using TyKonKet.BarcodeGenerator.Encoders.Abstract;
using TyKonKet.BarcodeGenerator.Utils;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    internal class Ean13Encoder : EanEncoder
    {
        private readonly byte[] _barsHeight =
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

        public Ean13Encoder()
        {
        }

        public Ean13Encoder(BarcodeOptions options)
            : base(options)
        {
        }

        internal static string FormatBarcode(string barcode)
        {
            return FormatBarcode(barcode, 13);
        }

        public override string Encode(string barcode)
        {
            // Barcode checks
            this.Barcode = FormatBarcode(barcode);
            this.EnsureValidCharset(this.Barcode);

            // Bars encode
            var bars = EncodeBars(this.Barcode);

            // Calculate drawing data
            var scale = Math.Max(this.Options.Scale, 0);
            var margin = 2 * scale;
            var width = scale * bars.Length + margin * 2;
            var height = scale * this.Options.Height + margin * 2;
            var barsHeights = new[] { (int)((height - margin * 2) * 0.76), height - margin * 2 };
            var leftExtraMargin = margin * 3;

            if (this.Options.RenderText)
            {
                width += leftExtraMargin;
            }

            // Generate barcode image
            var surface = SKSurface.Create(new SKImageInfo(width, height));

            using (var canvas = surface.Canvas)
            {
                // Draw bg color
                canvas.Clear(this.Options.BackgroundColor);

                var brush = new SKPaint
                {
                    Color = this.Options.Color,
                    IsStroke = false,
                };

                var posX = margin;
                if (this.Options.RenderText)
                {
                    posX += leftExtraMargin;
                }
                for (var i = 0; i < bars.Length; i++)
                {
                    // Draw bars
                    if (bars[i] == '1')
                    {
                        canvas.DrawRect(posX, margin, scale, barsHeights[this._barsHeight[i]], brush);
                    }

                    posX += scale;
                }

                if (this.Options.RenderText)
                {
                    // Draw texts
                    var font = new SKFont(SKTypeface.FromFamilyName(this.Options.Font, this.Options.FontStyle), 9 * scale);
#if NET6_0_OR_GREATER
                    var leftExtraText = barcode[..1];
                    var leftText = Barcode[1..7];
                    var rightText = Barcode[7..13];
#else
                    var leftExtraText = barcode.Substring(0, 1);
                    var leftText = this.Barcode.Substring(1, 6);
                    var rightText = this.Barcode.Substring(7, 6);
#endif
                    canvas.DrawText(leftExtraText, margin, barsHeights[1] + margin, font, brush);
                    canvas.DrawText(leftText, margin + 16 * scale - 4, barsHeights[1] + margin, font, brush);
                    canvas.DrawText(rightText, margin + 62 * scale, barsHeights[1] + margin, font, brush);


                    // Draw texts
                    //var font = SystemFonts.CreateFont(Options.Font, scale * 7, Options.FontStyle);
                    //var leftExtraText = barcode.Substring(0, 1);
                    //var leftText = barcode.Substring(1, 6);
                    //var rightText = barcode.Substring(7, 6);
                    //var leftExtraPoint = new PointF(margins, barsHight[0] - margins / 2);
                    //var leftPoint = new PointF(margins + leftExtraSpace + 13 * scale, barsHight[0] - margins / 2);
                    //var rightPoint = new PointF(margins + leftExtraSpace + 59 * scale, barsHight[0] - margins / 2);

                    //image.Mutate(i => i
                    //    .DrawText(leftExtraText, font, Options.Color, leftExtraPoint)
                    //    .DrawText(leftText, font, Options.Color, leftPoint)
                    //    .DrawText(rightText, font, Options.Color, rightPoint)
                    //);
                }

                //this.Surface = surface;

                // Save barcode image
                this.Image = surface.Snapshot();
            }

            return this.Barcode;
        }

        internal static string EncodeBars(string barcode)
        {
            var left = "";
            var right = "";
            for (var i = 1; i < barcode.Length; i++)
            {
                var num = barcode[i].ToInt();
                if (i < 7)
                {
                    var encodingA = EncodingTable[barcode[0].ToInt()].Substring(i - 1, 1) == "0";
                    if (encodingA)
                    {
                        left += EncodingA[num];
                    }
                    else
                    {
                        left += EncodingB[num];
                    }
                }
                else if (i >= 7)
                {
                    right += EncodingC[num];
                }
            }

            return $"{Guards[0]}{left}{Guards[1]}{right}{Guards[2]}";
        }
    }
}