using SixLabors.Fonts;
using SixLabors.ImageSharp;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Reflection;
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
                o.Encode = Encodes.Code93;
                o.Height = 30;
                o.Scale = 5;
                o.BackgroundColor = Rgba32.Transparent;
                o.Color = Rgba32.Black;
                o.Font = "Arial";
                o.FontStyle = FontStyle.Regular;
                //o.ShowText = false;
            });
            bc.Encode("ABC", Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "out/{barcode}.png"));
            sw.Stop();
            Console.WriteLine($"Barcode generated in {sw.ElapsedMilliseconds}ms");

            Console.ReadKey();
        }
    }
}
