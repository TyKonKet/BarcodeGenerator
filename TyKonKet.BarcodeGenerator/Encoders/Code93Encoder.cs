using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using SixLabors.Fonts;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.PixelFormats;
using SixLabors.ImageSharp.Processing;
using SixLabors.ImageSharp.Processing.Drawing;
using SixLabors.ImageSharp.Processing.Text;
using SixLabors.Primitives;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    internal class Code93Encoder : Encoder
    {
        internal static readonly Dictionary<char, (int, string)> EncodingTable = new Dictionary<char, (int, string)>
        {
            {'0', (0, "100010100")},
            {'1', (1, "101001000")},
            {'2', (2, "101000100")},
            {'3', (3, "101000010")},
            {'4', (4, "100101000")},
            {'5', (5, "100100100")},
            {'6', (6, "100100010")},
            {'7', (7, "101010000")},
            {'8', (8, "100010010")},
            {'9', (9, "100001010")},
            {'A', (10, "110101000")},
            {'B', (11, "110100100")},
            {'C', (12, "110100010")},
            {'D', (13, "110010100")},
            {'E', (14, "110010010")},
            {'F', (15, "110001010")},
            {'G', (16, "101101000")},
            {'H', (17, "101100100")},
            {'I', (18, "101100010")},
            {'J', (19, "100110100")},
            {'K', (20, "100011010")},
            {'L', (21, "101011000")},
            {'M', (22, "101001100")},
            {'N', (23, "101000110")},
            {'O', (24, "100101100")},
            {'P', (25, "100010110")},
            {'Q', (26, "110110100")},
            {'R', (27, "110110010")},
            {'S', (28, "110101100")},
            {'T', (29, "110100110")},
            {'U', (30, "110010110")},
            {'V', (31, "110011010")},
            {'W', (32, "101101100")},
            {'X', (33, "101100110")},
            {'Y', (34, "100110110")},
            {'Z', (35, "100111010")},
            {'-', (36, "100101110")},
            {'.', (37, "111010100")},
            {' ', (38, "111010010")},
            {'$', (39, "111001010")},
            {'/', (40, "101101110")},
            {'+', (41, "101110110")},
            {'%', (42, "110101110")},
            {'<', (43, "100100110")},
            {'=', (44, "111011010")},
            {'>', (45, "111010110")},
            {'?', (46, "100110010")},
            {'*', (47, "101011110")}
        };

        private static readonly char[] EncodingTableKeys = EncodingTable.Keys.ToArray();

        protected override Regex AcceptedCharset => new Regex(@"^[A-Z0-9 .$+%\-\/]+$");

        public override string Encode(string barcode, string file)
        {
            // Barcode checks
            barcode = _validate(barcode);
            _checkCharset(barcode);
            var checkDigits = _checkDigits(barcode);

            // Bars encode
            var bars = _encodeBars($"{barcode}{checkDigits}");

            // Calculate drawing data
            var scale = Math.Max(Options.Scale, 1);
            var margins = 2 * scale;
            var width = scale * bars.Length + margins * 2;
            var height = scale * Options.Height;
            var barsH = (int) ((height - margins) * 0.76);

            // Generate barcode image
            using (var image = new Image<Rgba32>(width, height))
            {
                image.Mutate(img =>
                {
                    // Draw bg color
                    img.Fill(Options.BackgroundColor);

                    var posX = margins;
                    foreach (var bar in bars)
                    {
                        // Draw bars
                        if (bar == '1')
                        {
                            var barRectangle = new RectangleF(posX, margins, scale, barsH - margins);
                            img.Fill(Options.Color, barRectangle);
                        }

                        posX += scale;
                    }
                });

                if (Options.ShowText)
                {
                    // Draw text
                    var font = SystemFonts.CreateFont(Options.Font, scale * 7, Options.FontStyle);
                    var textsize = TextMeasurer.Measure(barcode, new RendererOptions(font));
                    // ReSharper disable once PossibleLossOfFraction
                    var point = new PointF(width / 2 - textsize.Width / 2, barsH - margins / 2);

                    image.Mutate(i => i
                        .DrawText(barcode, font, Options.Color, point)
                    );
                }

                // Export barcode
                Export(image, barcode, file);
            }

            return barcode;
        }

        private static string _validate(string barcode)
        {
            // validate barcode following CODE93 rules
            return $"{barcode.ToUpper()}";
        }

        internal static string _checkDigits(string barcode)
        {
            // calculate check digit following CODE93 rules
            string CheckDigit(string b, int maxWeight)
            {
                var sum = 0;
                var weight = 1;
                for (var i = b.Length - 1; i >= 0; i--)
                {
                    sum += weight * EncodingTable[b[i]].Item1;
                    weight++;
                    if (weight > maxWeight) weight = 1;
                }

                return EncodingTableKeys[sum % 47].ToString();
            }

            var checkDigit = CheckDigit(barcode, 20);
            checkDigit += CheckDigit($"{barcode}{checkDigit}", 15);

            return $"{checkDigit}";
        }

        internal static string _encodeBars(string barcode)
        {
            barcode = $"*{barcode}*";
            var bars = barcode.Aggregate("", (current, b) => current + EncodingTable[b].Item2);
            return $"{bars}1";
        }
    }
}