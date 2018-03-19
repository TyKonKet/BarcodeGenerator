using SixLabors.Fonts;
using SixLabors.ImageSharp;
using System;
using System.Diagnostics;
using System.IO;
using System.Reflection;
using TyKonKet.BarcodeGenerator;

namespace LetsTry
{
    class Program
    {
        static void Main(string[] args)
        {
            var sw = new Stopwatch();
            sw.Start();
            var bc = new Barcode(o =>
            {
                o.Encode = Encodes.EAN8;
                o.Height = 31;
                o.Scale = 5;
                o.BgColor = Rgba32.Transparent;
                o.FontStyle = FontStyle.Regular;
                o.ShowText = false;
            });
            bc.GenerateBarcode("98458486", Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "test.png"));
            sw.Stop();
            Console.WriteLine($"Barcode generated in {sw.ElapsedMilliseconds}ms");
            Console.ReadKey();
        }
    }
}


