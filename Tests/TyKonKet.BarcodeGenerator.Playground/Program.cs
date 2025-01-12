using SkiaSharp;
using System;
using System.Diagnostics;
using System.IO;
using System.Reflection;

namespace TyKonKet.BarcodeGenerator.Playground
{
    internal static class Program
    {
        private static void Main()
        {
            var sw = new Stopwatch();
            sw.Start();

            var bc = new Barcode(o =>
            {
                o.Encode = BarcodeEncodings.Upca;
                o.Height = 30;
                o.Scale = 10;
                o.Margins = 2;
                o.BackgroundColor = SKColors.Transparent;
                o.Color = SKColors.Black;
                o.Font = "Arial";
                o.FontStyle = SKFontStyle.Normal;
                o.RenderText = true;
            });

            bc.Encode("72527273070");
            Console.WriteLine($"Barcode generated in {sw.ElapsedMilliseconds}ms");

            sw.Restart();
            bc.Export(Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "out/{barcode}_{quality}.{format}"), quality: 25);
            sw.Stop();
            Console.WriteLine($"Barcode exported in {sw.ElapsedMilliseconds}ms");

            Console.WriteLine();
            sw.Restart();
            bc.Encode("72527273070");
            Console.WriteLine($"Barcode generated in {sw.ElapsedMilliseconds}ms");

            sw.Restart();
            bc.Export(Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "out/{barcode}_{quality}.{format}"), quality: 50);
            sw.Stop();
            Console.WriteLine($"Barcode exported in {sw.ElapsedMilliseconds}ms");

            Console.WriteLine();
            sw.Restart();
            bc.Encode("72527273070");
            Console.WriteLine($"Barcode generated in {sw.ElapsedMilliseconds}ms");

            sw.Restart();
            bc.Export(Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "out/{barcode}_{quality}.{format}"), quality: 75);
            sw.Stop();
            Console.WriteLine($"Barcode exported in {sw.ElapsedMilliseconds}ms");

            Console.WriteLine();
            sw.Restart();
            bc.Encode("72527273070");
            Console.WriteLine($"Barcode generated in {sw.ElapsedMilliseconds}ms");

            sw.Restart();
            bc.Export(Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "out/{barcode}_{quality}.{format}"), quality: 100);
            sw.Stop();
            Console.WriteLine($"Barcode exported in {sw.ElapsedMilliseconds}ms");

            bc.Dispose();

            Console.ReadKey();
        }
    }
}