using SkiaSharp;
using System;

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
            1, 1, 1
        };

        public Ean13Encoder() : base()
        {
        }

        public Ean13Encoder(BarcodeOptions options) : base(options)
        {
        }

        public override string Encode(string barcode)
        {
            // Barcode checks
            Barcode = Validate(barcode, 13);
            CheckCharset(Barcode);

            // Bars encode
            var bars = EncodeBars(Barcode);

            // Calculate drawing data
            var scale = Math.Max(Options.Scale, 0);
            var margin = 2 * scale;
            var width = scale * bars.Length + margin * 2;
            var height = scale * Options.Height + margin * 2;
            var barsHeights = new[] { (int)((height - margin * 2) * 0.76), height - margin * 2 };

            // Generate barcode image
            using (var surface = SKSurface.Create(new SKImageInfo(width, height)))
            {
                using (var canvas = surface.Canvas)
                {
                    // Draw bg color
                    canvas.Clear(Options.BackgroundColor);

                    var brush = new SKPaint
                    {
                        Color = Options.Color,
                        IsStroke = false,
                    };

                    var posX = margin;
                    for (var i = 0; i < bars.Length; i++)
                    {
                        // Draw bars
                        if (bars[i] == '1')
                        {
                            canvas.DrawRect(posX, margin, scale, barsHeights[_barsHeight[i]], brush);
                        }

                        posX += scale;
                    }

                    if (Options.DrawText)
                    {
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
                }
                // Save barcode image
                Image = surface.Snapshot();
            }

            return Barcode;
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
                        left += EncodingA[num];
                    else
                        left += EncodingB[num];
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