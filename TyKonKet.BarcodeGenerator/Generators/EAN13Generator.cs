using SixLabors.Fonts;
using SixLabors.ImageSharp;
using SixLabors.Primitives;
using System;

namespace TyKonKet.BarcodeGenerator.Generators
{
    internal class EAN13Generator : EANGenerator, IGenerator
    {
        public BarcodeOptions Options { get; set; }

        public void GenerateBarcode(string barcode, string file)
        {
            // Barcode checks
            if (barcode.Length > 13)
            {
                throw new Exception("Barcode number must be less then 14 characters.");
            }
            barcode = this._checkDigit(barcode, 13);

            // Bars encode
            var bars = _eanEncode(barcode);

            // Calculate drawing data
            var scale = Math.Max(this.Options.Scale, 1);
            var margins = 2 * scale;
            var width = scale * bars.Length + margins * 2;
            var height = scale * this.Options.Height;
            var longBarsH = height - margins;
            var shortBarsH = (int)(longBarsH * 0.76);

            // Generate barcode
            using (var im = new Image<Rgba32>(width, height))
            {
                // Draw bg color
                im.Mutate(i => i.Fill(this.Options.BgColor));

                // Draw bars
                var posX = margins;
                for (var i = 0; i < bars.Length; i++)
                {
                    var value = bars[i];
                    if (value == 'b' || value == '1')
                    {
                        var barRectangle = new RectangleF(posX, margins, scale, (value == '1' ? shortBarsH : longBarsH) - margins);
                        im.Mutate(img => img.Fill(this.Options.Color, barRectangle));
                    }
                    posX += scale;
                }

                //if (this.Options.ShowText)
                //{
                //    // Draw texts
                //    var font = SystemFonts.CreateFont(this.Options.Font, scale * 7, this.Options.FontStyle);
                //    var leftText = barcode.Substring(1, 6);
                //    var rightText = barcode.Substring(7, 6);
                //    var leftPoint = new PointF(margins + 10 * scale, shortBarsH - margins / 2);
                //    var rightPoint = new PointF(margins + 42 * scale, shortBarsH - margins / 2);

                //    im.Mutate(i => i.DrawText(leftText, font, this.Options.Color, leftPoint));
                //    im.Mutate(i => i.DrawText(rightText, font, this.Options.Color, rightPoint));
                //}

                // Export barcode
                im.Save(file);
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
                    var encodingA = this._encodingTable[barcode[0].ToInt()].Substring(i - 1, 1) == "0";
                    if (encodingA)
                    {
                        left += this._encodingA[num];
                    }
                    else
                    {
                        left += this._encodingB[num];
                    }
                    
                }
                else if (i >= 7)
                {
                    right += this._encodingC[num];
                }
            }
            return $"{this._guards[0]}{left}{this._guards[1]}{right}{this._guards[2]}";
        }
    }
}
