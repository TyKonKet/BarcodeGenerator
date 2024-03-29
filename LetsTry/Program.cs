﻿using SkiaSharp;
using System;
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
                o.Encode = Encodes.Ean13;
                o.Height = 30;
                o.Scale = 10;
                o.Margins = 2;
                o.BackgroundColor = SKColors.Transparent;
                o.Color = SKColors.Black;
                o.Font = "Arial";
                o.FontStyle = SKFontStyle.Normal;
                o.DrawText = true;
            });
            bc.Encode("923456809876");
            Console.WriteLine($"Barcode generated in {sw.ElapsedMilliseconds}ms");
            sw.Restart();
            bc.Export(Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "out/{barcode}.png"));
            sw.Stop();
            Console.WriteLine($"Barcode exported in {sw.ElapsedMilliseconds}ms");
            bc.Dispose();

            Console.ReadKey();
        }
    }
}