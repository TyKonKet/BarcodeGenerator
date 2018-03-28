using System;
using SixLabors.ImageSharp;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using SixLabors.Fonts;
using SixLabors.Primitives;
using TyKonKet.BarcodeGenerator.System;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    internal class Code93Encoder : Encoder
    {
        protected internal static Dictionary<string, string> EncodingTable => new Dictionary<string, string>
        {
            {"0", "100010100"},
            {"1", "101001000"},
            {"2", "101000100"},
            {"3", "101000010"},
            {"4", "100101000"},
            {"5", "100100100"},
            {"6", "100100010"},
            {"7", "101010000"},
            {"8", "100010010"},
            {"9", "100001010"},
            {"A", "110101000"},
            {"B", "110100100"},
            {"C", "110100010"},
            {"D", "110010100"},
            {"E", "110010010"},
            {"F", "110001010"},
            {"G", "101101000"},
            {"H", "101100100"},
            {"I", "101100010"},
            {"J", "100110100"},
            {"K", "100011010"},
            {"L", "101011000"},
            {"M", "101001100"},
            {"N", "101000110"},
            {"O", "100101100"},
            {"P", "100010110"},
            {"Q", "110110100"},
            {"R", "110110010"},
            {"S", "110101100"},
            {"T", "110100110"},
            {"U", "110010110"},
            {"V", "110011010"},
            {"W", "101101100"},
            {"X", "101100110"},
            {"Y", "100110110"},
            {"Z", "100111010"},
            {"-", "100101110"},
            {".", "111010100"},
            {" ", "111010010"},
            {"$", "100100110"},
            {"/", "111010110"},
            {"+", "100110010"},
            {"%", "111011010"},
            {"*", "101011110"}
        };

        protected override Regex AcceptedCharset => new Regex(@"^[A-Z0-9 .$+%\-\/]+$");

        public Code93Encoder() : base()
        {
        }

        public Code93Encoder(BarcodeOptions options) : base(options)
        {
        }

        public override string Encode(string barcode, string file)
        {
            // Barcode checks
            barcode = _validate(barcode);
            _checkCharset(barcode);

            // Bars encode
            var bars = _encodeBars($"{barcode}{_checkDigits(barcode)}");

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

        internal static string _validate(string barcode)
        {
            // validate barcode following CODE93 rules
            return $"{barcode.ToUpper()}";
        }

        internal static string _checkDigits(string barcode)
        {
            // calculate check digit following CODE93 rules
            var keys = EncodingTable.Keys.ToArray();
            var checkDigit = "";
            for (var two = 0; two < 2; two++)
            {
                var sum = 0;
                for (var i = barcode.Length; i > 0; i--)
                {
                    var num = barcode[barcode.Length - i];
                    switch (num)
                    {
                        case '-':
                            num = (char) 36;
                            break;
                        case '.':
                            num = (char) 37;
                            break;
                        case ' ':
                            num = (char) 38;
                            break;
                        case '$':
                            num = (char) 39;
                            break;
                        case '/':
                            num = (char) 40;
                            break;
                        case '+':
                            num = (char) 41;
                            break;
                        case '%':
                            num = (char) 42;
                            break;
                        case '*':
                            num = (char) 43;
                            break;
                        case '0':
                        case '1':
                        case '2':
                        case '3':
                        case '4':
                        case '5':
                        case '6':
                        case '7':
                        case '8':
                        case '9':
                            num = (char) num.ToInt();
                            break;
                        default:
                            num = (char) (Encoding.ASCII.GetBytes(num.ToString())[0] - 55);
                            break;
                    }

                    sum += i * num;
                }

                var c = keys[sum % 47];
                checkDigit += c;
                barcode += c;
            }

            return $"{checkDigit}";
        }

        internal static string _encodeBars(string barcode)
        {
            barcode = $"*{barcode}*";
            var bars = barcode.Aggregate("", (current, b) => current + EncodingTable[b.ToString()]);
            return $"{bars}1";
        }
    }
}
