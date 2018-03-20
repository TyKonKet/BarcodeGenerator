using System;
using SixLabors.Fonts;
using SixLabors.ImageSharp;
using SixLabors.Primitives;
using TyKonKet.BarcodeGenerator.System;

namespace TyKonKet.BarcodeGenerator.Generators
{
    internal class Ean8Generator : EanGenerator, IGenerator
    {
        public BarcodeOptions Options { get; set; }

        public void GenerateBarcode(string barcode, string file)
        {
            // Barcode checks
            barcode = _checkDigit(barcode, 8);

            // Bars encode
            var bars = _ean8Encode(barcode);

            // Calculate drawing data
            var scale = Math.Max(Options.Scale, 1);
            var margins = 2 * scale;
            var width = scale * bars.Length + margins * 2;
            var height = scale * Options.Height;
            var longBarsH = height - margins;
            var shortBarsH = (int)(longBarsH * 0.76);

            // Generate barcode
            using (var image = new Image<Rgba32>(width, height))
            {
                // Draw bg color
                image.Mutate(i => i.Fill(Options.BgColor));

                // Draw bars
                var posX = margins;
                foreach (var value in bars)
                {
                    if (value == 'b' || value == '1')
                    {
                        var barRectangle = new RectangleF(posX, margins, scale, (value == '1' ? shortBarsH : longBarsH) - margins);
                        image.Mutate(img => img.Fill(Options.Color, barRectangle));
                    }
                    posX += scale;
                }

                if (Options.ShowText)
                {
                    // Draw texts
                    var font = SystemFonts.CreateFont(Options.Font, scale * 7, Options.FontStyle);
                    var leftText = barcode.Substring(0, 4);
                    var rightText = barcode.Substring(4, 4);
                    var leftPoint = new PointF(margins + 10 * scale, shortBarsH - margins / 2);
                    var rightPoint = new PointF(margins + 42 * scale, shortBarsH - margins / 2);

                    image.Mutate(i => i
                        .DrawText(leftText, font, Options.Color, leftPoint)
                        .DrawText(rightText, font, Options.Color, rightPoint)
                    );
                }

                // Export barcode
                image.Save(file);
            }
        }

        private string _ean8Encode(string barcode)
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
