using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Reflection;
using SixLabors.Fonts;
using SixLabors.ImageSharp;
using TyKonKet.BarcodeGenerator;
using TyKonKet.BarcodeGenerator.Encoders;

namespace LetsTry
{
    internal static class Program
    {
        private static void Main()
        {
            var sw = new Stopwatch();
            sw.Start();
            var bc = new Barcode(o =>
            {
                o.Encode = Encodes.Upca;
                o.Height = 30;
                o.Scale = 5;
                o.BgColor = Rgba32.Transparent;
                o.Color = Rgba32.Black;
                o.Font = "Arial";
                o.FontStyle = FontStyle.Regular;
                //o.ShowText = false;
            });
            bc.Encode("72527273070", Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "test.png"));
            sw.Stop();
            Console.WriteLine($"Barcode generated in {sw.ElapsedMilliseconds}ms");

            //var ou = "";
            //foreach (var io in new Dictionary<string, string>
            //{
            //    {"725272730706", "10101110110010011011000100100110111011001001101010100010010000101110010100010011100101010000101"},
            //    {"827364192833", "10101101110010011011101101111010101111010001101010110011011101001101100100100010000101000010101"},
            //    {"192748273645", "10100110010001011001001101110110100011011011101010110110010001001000010101000010111001001110101"},
            //    {"112233445562", "10100110010011001001001100100110111101011110101010101110010111001001110100111010100001101100101"},
            //    {"998877665548", "10100010110001011011011101101110111011011101101010101000010100001001110100111010111001001000101"}
            //})
            //{
            //    ou += TyKonKet.BarcodeGenerator.Encoders.UpcaEncoder._encodeBars(io.Key) + "\r\n";
            //}
            //File.WriteAllText("a.txt", ou);

            //Console.ReadKey();
        }
    }
}
