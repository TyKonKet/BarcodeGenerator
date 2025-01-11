using SkiaSharp;
using System;
using TyKonKet.BarcodeGenerator.Encoders.Abstract;
using TyKonKet.BarcodeGenerator.Utils;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    internal class UpcaEncoder : EanEncoder
    {
        private readonly byte[] _barsHeight =
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
            1, 1, 1
        };

        public UpcaEncoder() : base()
        {
        }

        public UpcaEncoder(BarcodeOptions options) : base(options)
        {
        }

        public override string Encode(string barcode)
        {
            // Barcode checks
            this.Barcode = Validate(barcode, 12);
            this.CheckCharset(this.Barcode);

            // Bars encode
            var bars = EncodeBars(this.Barcode);

            // Calculate drawing data
            var scale = Math.Max(this.Options.Scale, 0);
            var margin = 2 * scale;
            var leftExtraSpace = this.Options.RenderText ? 6 * scale : 0;
            var rightExtraSpace = this.Options.RenderText ? 6 * scale : 0;
            var width = scale * bars.Length + margin * 2 + leftExtraSpace + rightExtraSpace;
            var height = scale * this.Options.Height + margin * 2;
            var barsHeights = new[] { (int)((height - margin * 2) * 0.76), height - margin * 2 };

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

                var posX = margin + leftExtraSpace;
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
                    var leftText = Barcode[1..6];
                    var rightText = Barcode[6..11];
                    var rightExtraText = Barcode[11..];
#else
                    var leftExtraText = barcode.Substring(0, 1);
                    var leftText = this.Barcode.Substring(1, 5);
                    var rightText = this.Barcode.Substring(6, 5);
                    var rightExtraText = this.Barcode.Substring(11, 1);
#endif
                    var leftTextOffset = 24;
                    var leftTextModifier = -4;
                    var rightTextOffset = 60;
                    var rightTextModifier = -4;
                    var rightExtraTextOffset = 102;
                    canvas.DrawText(leftExtraText, margin, barsHeights[1] + margin, font, brush);
                    canvas.DrawText(leftText, margin + leftTextOffset * scale + leftTextModifier, barsHeights[1] + margin, font, brush);
                    canvas.DrawText(rightText, margin + rightTextOffset * scale + rightTextModifier, barsHeights[1] + margin, font, brush);
                    canvas.DrawText(rightExtraText, margin + rightExtraTextOffset * scale, barsHeights[1] + margin, font, brush);

                    //// Draw texts
                    //var font = SystemFonts.CreateFont(Options.Font, scale * 7, Options.FontStyle);
                    //var leftExtraText = barcode.Substring(0, 1);
                    //var leftText = barcode.Substring(1, 5);
                    //var rightText = barcode.Substring(6, 5);
                    //var rightExtraText = barcode.Substring(11, 1);
                    //var leftExtraPoint = new PointF(margins, barsH[0] - margins / 2);
                    //var leftPoint = new PointF(margins + leftExtreSpace + 18 * scale, barsH[0] - margins / 2);
                    //var rightPoint = new PointF(margins + leftExtreSpace + 57 * scale, barsH[0] - margins / 2);
                    //var rightExtraPoint = new PointF(width - rightExtreSpace, barsH[0] - margins / 2);

                    //image.Mutate(i => i
                    //    .DrawText(leftExtraText, font, Options.Color, leftExtraPoint)
                    //    .DrawText(leftText, font, Options.Color, leftPoint)
                    //    .DrawText(rightText, font, Options.Color, rightPoint)
                    //    .DrawText(rightExtraText, font, Options.Color, rightExtraPoint)
                    //);
                }

                this.Surface = surface;

                // Save barcode image
                this.Image = surface.Snapshot();
            }

            return this.Barcode;
        }

        internal static string EncodeBars(string barcode)
        {
            var left = "";
            var right = "";
            for (var i = 0; i < barcode.Length; i++)
            {
                var num = barcode[i].ToInt();
                if (i < 6)
                    left += EncodingA[num];
                else if (i >= 6) right += EncodingC[num];
            }

            return $"{Guards[0]}{left}{Guards[1]}{right}{Guards[2]}";
        }
    }
}