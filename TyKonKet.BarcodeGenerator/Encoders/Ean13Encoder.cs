﻿using System;
using SixLabors.Fonts;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.PixelFormats;
using SixLabors.ImageSharp.Processing;
using SixLabors.ImageSharp.Processing.Drawing;
using SixLabors.ImageSharp.Processing.Text;
using SixLabors.Primitives;

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

        public override string Encode(string barcode, string file)
        {
            // Barcode checks
            barcode = _validate(barcode, 13);
            _checkCharset(barcode);

            // Bars encode
            var bars = _encodeBars(barcode);

            // Calculate drawing data
            var scale = Math.Max(Options.Scale, 1);
            var margins = 2 * scale;
            var leftExtreSpace = Options.ShowText ? 6 * scale : 0;
            var width = scale * bars.Length + margins * 2 + leftExtreSpace;
            var height = scale * Options.Height;
            var barsH = new[] {(int) ((height - margins) * 0.76), height - margins};

            // Generate barcode image
            using (var image = new Image<Rgba32>(width, height))
            {
                image.Mutate(img =>
                {
                    // Draw bg color
                    img.Fill(Options.BackgroundColor);

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
                    var leftText = barcode.Substring(1, 6);
                    var rightText = barcode.Substring(7, 6);
                    var leftExtraPoint = new PointF(margins, barsH[0] - margins / 2);
                    var leftPoint = new PointF(margins + leftExtreSpace + 13 * scale, barsH[0] - margins / 2);
                    var rightPoint = new PointF(margins + leftExtreSpace + 59 * scale, barsH[0] - margins / 2);

                    image.Mutate(i => i
                        .DrawText(leftExtraText, font, Options.Color, leftExtraPoint)
                        .DrawText(leftText, font, Options.Color, leftPoint)
                        .DrawText(rightText, font, Options.Color, rightPoint)
                    );
                }

                // Export barcode
                Export(image, barcode, file);
            }

            return barcode;
        }

        internal static string _encodeBars(string barcode)
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