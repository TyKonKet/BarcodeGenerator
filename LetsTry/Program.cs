using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Reflection;
using SixLabors.Fonts;
using SixLabors.ImageSharp;
using TyKonKet.BarcodeGenerator;

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
                o.Encode = Encodes.Ean8;
                o.Height = 30;
                o.Scale = 5;
                o.BgColor = Rgba32.Transparent;
                o.Color = Rgba32.Black;
                o.Font = "Arial";
                o.FontStyle = FontStyle.Regular;
                //o.ShowText = false;
            });
            bc.Encode("1234567", Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "test.png"));
            bc.Options.Encode = Encodes.Ean13;
            bc.Encode("6601414520715", Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "test1.png"));
            sw.Stop();
            Console.WriteLine($"Barcode generated in {sw.ElapsedMilliseconds}ms");
            //var ou = "";
            //foreach (var io in new Dictionary<string, string>
            //{
            //    {"9780201379624", ""},
            //    {"2837491746340", ""},
            //    {"8829647458294", ""},
            //    {"1234567891231", ""},
            //    {"7352837294767", ""}
            //})
            //{
            //    ou += TyKonKet.BarcodeGenerator.Encoders.Ean13Encoder._eanEncodeBars(io.Key) + "\r\n";
            //}

            //File.WriteAllText("a.txt", ou);
            Console.ReadKey();
        }
    }
}
