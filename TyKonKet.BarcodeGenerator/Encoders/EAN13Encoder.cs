using System;
using SixLabors.Fonts;
using SixLabors.ImageSharp;
using SixLabors.Primitives;
using TyKonKet.BarcodeGenerator.System;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    internal class Ean13Encoder : EanEncoder
    {
        public Ean13Encoder(BarcodeOptions options) : base(options)
        {
        }

        public override void Encode(string barcode, string file)
        {
            // Barcode checks
            barcode = _checkDigit(barcode, 13);

            // Bars encode
            var bars = _eanEncode(barcode);

            // Calculate drawing data
            var scale = Math.Max(Options.Scale, 1);
            var margins = 2 * scale;
            var leftExtreSpace = Options.ShowText ? 6 * scale : 0;
            var width = scale * bars.Length + margins * 2 + leftExtreSpace;
            var height = scale * Options.Height;
            var longBarsH = height - margins;
            var shortBarsH = (int)(longBarsH * 0.76);

            // Generate barcode
            using (var image = new Image<Rgba32>(width, height))
            {
                // Draw bg color
                image.Mutate(i => i.Fill(Options.BgColor));

                // Draw bars
                var posX = margins + leftExtreSpace;
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
                    var leftExtraText = barcode.Substring(0, 1);
                    var leftText = barcode.Substring(1, 6);
                    var rightText = barcode.Substring(7, 6);
                    var leftExtraPoint = new PointF(margins, shortBarsH - margins / 2);
                    var leftPoint = new PointF(margins + leftExtreSpace + 13 * scale, shortBarsH - margins / 2);
                    var rightPoint = new PointF(margins + leftExtreSpace + 59 * scale, shortBarsH - margins / 2);

                    image.Mutate(i => i
                        .DrawText(leftExtraText, font, Options.Color, leftExtraPoint)
                        .DrawText(leftText, font, Options.Color, leftPoint)
                        .DrawText(rightText, font, Options.Color, rightPoint)
                    );
                }

                // Export barcode
                image.Save(file);
            }
        }

        private string _eanEncode(string barcode)
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
