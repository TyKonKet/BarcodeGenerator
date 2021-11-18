using SkiaSharp;
using System;

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
            Barcode = Validate(barcode, 12);
            CheckCharset(Barcode);

            // Bars encode
            var bars = EncodeBars(Barcode);

            // Calculate drawing data
            var scale = Math.Max(Options.Scale, 0);
            var margin = 2 * scale;
            var leftExtreSpace = Options.DrawText ? 6 * scale : 0;
            var rightExtreSpace = Options.DrawText ? 6 * scale : 0;
            var width = scale * bars.Length + margin * 2 + leftExtreSpace + rightExtreSpace; ;
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

                    var posX = margin + leftExtreSpace;
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