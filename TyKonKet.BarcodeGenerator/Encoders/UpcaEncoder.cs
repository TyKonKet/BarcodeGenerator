using SixLabors.Fonts;
using SixLabors.ImageSharp;
using SixLabors.Primitives;
using System;
using System.Text.RegularExpressions;
using TyKonKet.BarcodeGenerator.System;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    internal class UpcaEncoder : EanEncoder
    {
        private readonly byte[] _barsHeight = new byte[]
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

        public override void Encode(string barcode, string file)
        {
            // Barcode checks
            barcode = _validate(barcode, 12);
            _checkCharset(barcode);

            // Bars encode
            var bars = _encodeBars(barcode);

            // Calculate drawing data
            var scale = Math.Max(Options.Scale, 1);
            var margins = 2 * scale;
            var leftExtreSpace = Options.ShowText ? 6 * scale : 0;
            var rightExtreSpace = Options.ShowText ? 6 * scale : 0;
            var width = scale * bars.Length + margins * 2 + leftExtreSpace + rightExtreSpace;
            var height = scale * Options.Height;
            var barsH = new[] { (int)((height - margins) * 0.76), height - margins };

            // Generate barcode image
            using (var image = new Image<Rgba32>(width, height))
            {
                image.Mutate(img =>
                {
                    // Draw bg color
                    img.Fill(Options.BgColor);

                    var posX = margins + leftExtreSpace;
                    for (var i = 0; i < bars.Length; i++)
                    {
                        // Draw bars
                        if (bars[i] == '1')
                        {
                            var barRectangle = new RectangleF(posX, margins, scale, barsH[_barsHeight[i]] - margins);
                            img.Fill(Options.Color, barRectangle);
                        }

                        posX += scale;
                    }
                });

                if (Options.ShowText)
                {
                    // Draw texts
                    var font = SystemFonts.CreateFont(Options.Font, scale * 7, Options.FontStyle);
                    var leftExtraText = barcode.Substring(0, 1);
                    var leftText = barcode.Substring(1, 5);
                    var rightText = barcode.Substring(6, 5);
                    var rightExtraText = barcode.Substring(11, 1);
                    var leftExtraPoint = new PointF(margins, barsH[0] - margins / 2);
                    var leftPoint = new PointF(margins + leftExtreSpace + 18 * scale, barsH[0] - margins / 2);
                    var rightPoint = new PointF(margins + leftExtreSpace + 57 * scale, barsH[0] - margins / 2);
                    var rightExtraPoint = new PointF(width - rightExtreSpace, barsH[0] - margins / 2);

                    image.Mutate(i => i
                        .DrawText(leftExtraText, font, Options.Color, leftExtraPoint)
                        .DrawText(leftText, font, Options.Color, leftPoint)
                        .DrawText(rightText, font, Options.Color, rightPoint)
                        .DrawText(rightExtraText, font, Options.Color, rightExtraPoint)
                    );
                }

                // Export barcode
                image.Save(file);
            }
        }

        internal static string _encodeBars(string barcode)
        {
            var left = "";
            var right = "";
            for (var i = 0; i < barcode.Length; i++)
            {
                var num = barcode[i].ToInt();
                if (i < 6)
                {

                    left += EncodingA[num];
                }
                else if (i >= 6)
                {
                    right += EncodingC[num];
                }
            }
            return $"{Guards[0]}{left}{Guards[1]}{right}{Guards[2]}";
        }
    }
}
