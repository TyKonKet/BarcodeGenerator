using System;
using SixLabors.Fonts;
using SixLabors.ImageSharp;
using SixLabors.Primitives;
using TyKonKet.BarcodeGenerator.System;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    internal class Ean8Encoder : EanEncoder
    {
        private readonly byte[] _barsHeight = {
            1, 1, 1,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            1, 1, 1, 1, 1,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            1, 1, 1
        };

        public Ean8Encoder() : base()
        {
        }

        public Ean8Encoder(BarcodeOptions options) : base(options)
        {
        }

        public override void Encode(string barcode, string file)
        {
            // Barcode checks
            barcode = _validate(barcode, 8);
            _checkCharset(barcode);

            // Bars encode
            var bars = _encodeBars(barcode);

            // Calculate drawing data
            var scale = Math.Max(Options.Scale, 1);
            var margins = 2 * scale;
            var width = scale * bars.Length + margins * 2;
            var height = scale * Options.Height;
            var barsH = new[] {(int) ((height - margins) * 0.76), height - margins};

            // Generate barcode image
            using (var image = new Image<Rgba32>(width, height))
            {                
                image.Mutate(img =>
                {
                    // Draw bg color
                    img.Fill(Options.BgColor);

                    var posX = margins;
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
                    var leftText = barcode.Substring(0, 4);
                    var rightText = barcode.Substring(4, 4);
                    var leftPoint = new PointF(margins + 10 * scale, barsH[0] - margins / 2);
                    var rightPoint = new PointF(margins + 42 * scale, barsH[0] - margins / 2);

                    image.Mutate(i => i
                        .DrawText(leftText, font, Options.Color, leftPoint)
                        .DrawText(rightText, font, Options.Color, rightPoint)
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
                if (i < 4)
                {
                    left += EncodingA[num];
                }
                else if (i >= 4)
                {
                    right += EncodingC[num];
                }
            }
            return $"{Guards[0]}{left}{Guards[1]}{right}{Guards[2]}";
        }
    }
}
