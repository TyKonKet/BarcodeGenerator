using System;
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
                o.Encode = Encodes.Ean13;
                o.Height = 30;
                o.Scale = 5;
                o.BgColor = Rgba32.Transparent;
                o.Color = Rgba32.Black;
                o.Font = "Arial";
                o.FontStyle = FontStyle.Regular;
                //o.ShowText = false;
            });
            bc.Encode("978323456773", Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "test.png"));
            sw.Stop();
            Console.WriteLine($"Barcode generated in {sw.ElapsedMilliseconds}ms");
            Console.ReadKey();
        }
    }
}
