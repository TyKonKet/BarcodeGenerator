using SixLabors.Fonts;
using SixLabors.ImageSharp;
using SixLabors.Primitives;
using SixLabors.Shapes;
using System;
using System.Numerics;
using System.Text;
using System.Text.RegularExpressions;

namespace TyKonKet.BarcodeGenerator.Generators
{
    internal class EAN8Generator : EANUPCGenerator, IGenerator
    {
        public BarcodeOptions Options { get; set; }

        public void GenerateBarcode(string barcode, string file)
        {
            // Barcode checks
            if (barcode.Length > 8)
            {
                throw new Exception("Barcode number must be less then 8 characters.");
            }
            barcode = this._checkDigit(barcode, 8);

            // Bars encode
            var bars = _ean8Encode(barcode);

            // Calculate drawing data
            var scale = this.Options.Scale < 1 ? 2 : this.Options.Scale;
            var margins = new { Top = 2 * scale, Right = 2 * scale, Bottom = 2 * scale, Left = 2 * scale };
            var totalY = (float)(scale * this.Options.Height);
            var totalX = scale * bars.Length + margins.Right + margins.Left;
            var posX = margins.Left;
            var height = (float)Math.Floor(totalY - (scale * 10));
            var height2 = (float)Math.Floor(totalY - margins.Bottom);

            // Generate barcode
            using (var im = new Image<Rgba32>(totalX, (int)totalY))
            {
                // Set bg color
                im.Mutate(i => i.Fill(this.Options.BgColor));

                // Draw bars
                var tempPosX = posX;
                for (var i = 0; i < bars.Length; i++)
                {
                    var h = height;
                    var val = bars[i].ToString().ToUpper();
                    if ((new Regex("[a-z]", RegexOptions.IgnoreCase)).IsMatch(val))
                    {
                        val = (Encoding.ASCII.GetBytes(val)[0] - 65).ToString();
                        h = height2;
                    }

                    if (val == "1")
                    {
                        var rect = new RectangleF(tempPosX, margins.Top, scale, h - margins.Top + 1);
                        im.Mutate(img => img.Fill(this.Options.Color, rect));
                    }
                    tempPosX += scale;
                }

                // Draw texts
                var font = SystemFonts.CreateFont(this.Options.Font, scale * 7.8f, this.Options.FontStyle);
                var txt = barcode.Substring(0, 4);
                var textsize = TextMeasurer.Measure(txt, new RendererOptions(font));
                var matrix = Matrix3x2.Identity;
                matrix.Translation = new Vector2(margins.Left + scale * barcode.Length, height2 - scale * 3);
                var path = new PathBuilder(matrix).AddLine(0, 0, textsize.Width, 0).Build();
                im.Mutate(i => i.DrawText(txt, font, this.Options.Color, path));
                txt = barcode.Substring(4, 4);
                matrix = Matrix3x2.Identity;
                matrix.Translation = new Vector2(margins.Left + scale * bars.Length / 1.65f, height2 - scale * 3);
                path = new PathBuilder(matrix).AddLine(0, 0, textsize.Width, 0).Build();
                im.Mutate(i => i.DrawText(txt, font, this.Options.Color, path));

                // Export barcode
                im.Save(file);
            }
        }

        private string _ean8Encode(string barcode)
        {
            var mfcStr = "";
            var prodStr = "";
            for (var i = 0; i < barcode.Length; i++)
            {
                var num = barcode[i].ToInt();
                if (i < 4)
                {
                    mfcStr += this._leftOdd[num];
                }
                else if (i >= 4)
                {
                    prodStr += this._rightAll[num];
                }
            }
            return $"{this._guards[0]}{mfcStr}{this._guards[1]}{prodStr}{this._guards[2]}";
        }
    }
}
