using SkiaSharp;
using System;
using System.Diagnostics;
using System.IO;
using System.Reflection;
using TyKonKet.BarcodeGenerator.Fonts;

namespace TyKonKet.BarcodeGenerator.Playground
{
    internal static class Program
    {
        private static void Main()
        {
            //for (int i = 0; i <= 15; i++)
            //{
            //    RenderBarcodes((FontFamilies)i);
            //}

            //return;

            var sw = new Stopwatch();
            sw.Start();

            var bc = new Barcode(o =>
            {
                o.Type = BarcodeTypes.Ean13;
                o.Height = 30;
                o.Scaling = 10;
                o.Margins = 2;
                o.BackgroundColor = SKColors.White;
                o.ForegroundColor = SKColors.Black;
                o.RenderText = true;
                o.UseTypeface(FontFamilies.Arial, SKFontStyle.Normal);
                //o.UseTypeface("Arial", SKFontStyle.Normal);
            });

            const string barcode = "978020137962";

            bc.Encode(barcode);
            Console.WriteLine($"Barcode generated in {sw.ElapsedMilliseconds}ms");

            sw.Restart();
            bc.Export(Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "out/{barcode}_{quality}.{format}"), quality: 25);
            sw.Stop();
            Console.WriteLine($"Barcode exported in {sw.ElapsedMilliseconds}ms");

            Console.WriteLine();
            sw.Restart();
            bc.Encode(barcode);
            Console.WriteLine($"Barcode generated in {sw.ElapsedMilliseconds}ms");

            sw.Restart();
            bc.Export(Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "out/{barcode}_{quality}.{format}"), quality: 50);
            sw.Stop();
            Console.WriteLine($"Barcode exported in {sw.ElapsedMilliseconds}ms");

            Console.WriteLine();
            sw.Restart();
            bc.Encode(barcode);
            Console.WriteLine($"Barcode generated in {sw.ElapsedMilliseconds}ms");

            sw.Restart();
            bc.Export(Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "out/{barcode}_{quality}.{format}"), quality: 75);
            sw.Stop();
            Console.WriteLine($"Barcode exported in {sw.ElapsedMilliseconds}ms");

            Console.WriteLine();
            sw.Restart();
            bc.Encode(barcode);
            Console.WriteLine($"Barcode generated in {sw.ElapsedMilliseconds}ms");

            sw.Restart();
            bc.Export(Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "out/{barcode}_{quality}.{format}"), quality: 100);
            sw.Stop();
            Console.WriteLine($"Barcode exported in {sw.ElapsedMilliseconds}ms");

            bc.Dispose();

            Console.ReadKey();
        }

        private static void RenderBarcodes(FontFamilies font)
        {
            var type = BarcodeTypes.Code93;
            var barcode = "012345678905";
            var height = 30;
            var scaling = 10;
            var margins = 2;
            var backgroundColor = SKColors.White;
            var foregroundColor = SKColors.Black;

            using var barcode1 = new Barcode(options =>
            {
                options.Type = type;
                options.Height = height;
                options.Scaling = scaling;
                options.Margins = margins;
                options.BackgroundColor = backgroundColor;
                options.ForegroundColor = foregroundColor;
                options.RenderText = true;
                options.UseTypeface(font, SKFontStyle.Normal);
            });
            barcode1.Encode(barcode);
            barcode1.Export(Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), $"out/{{barcode}}_{font}_Normal.{{format}}"), quality: 100);

            using var barcode2 = new Barcode(options =>
            {
                options.Type = type;
                options.Height = height;
                options.Scaling = scaling;
                options.Margins = margins;
                options.BackgroundColor = backgroundColor;
                options.ForegroundColor = foregroundColor;
                options.RenderText = true;
                options.UseTypeface(font, SKFontStyle.Bold);
            });
            barcode2.Encode(barcode);
            barcode2.Export(Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), $"out/{{barcode}}_{font}_Bold.{{format}}"), quality: 100);

            using var barcode3 = new Barcode(options =>
            {
                options.Type = type;
                options.Height = height;
                options.Scaling = scaling;
                options.Margins = margins;
                options.BackgroundColor = backgroundColor;
                options.ForegroundColor = foregroundColor;
                options.RenderText = true;
                options.UseTypeface(font, SKFontStyle.Italic);
            });
            barcode3.Encode(barcode);
            barcode3.Export(Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), $"out/{{barcode}}_{font}_Italic.{{format}}"), quality: 100);

            using var barcode4 = new Barcode(options =>
            {
                options.Type = type;
                options.Height = height;
                options.Scaling = scaling;
                options.Margins = margins;
                options.BackgroundColor = backgroundColor;
                options.ForegroundColor = foregroundColor;
                options.RenderText = true;
                options.UseTypeface(font, SKFontStyle.BoldItalic);
            });
            barcode4.Encode(barcode);
            barcode4.Export(Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), $"out/{{barcode}}_{font}_BoldItalic.{{format}}"), quality: 100);
        }
    }
}