﻿using BenchmarkDotNet.Attributes;
using SkiaSharp;
using System;
using System.IO;
using System.Reflection;

namespace TyKonKet.BarcodeGenerator.Benchmark.Encode
{
    public class EncodeIsbn13 : Encode
    {
        private Barcode forEncode;
        private Barcode forExport;

        [GlobalSetup]
        public void GlobalSetup()
        {
            forEncode = new Barcode(o =>
            {
                o.Encode = Encodes.Isbn13;
                o.Height = 30;
                o.Scale = 5;
                o.BackgroundColor = SKColors.Transparent;
                o.Color = SKColors.Black;
                o.Font = "Arial";
                o.FontStyle = SKFontStyle.Normal;
                o.DrawText = false;
            });

            forExport = new Barcode(o =>
            {
                o.Encode = Encodes.Isbn13;
                o.Height = 30;
                o.Scale = 5;
                o.BackgroundColor = SKColors.Transparent;
                o.Color = SKColors.Black;
                o.Font = "Arial";
                o.FontStyle = SKFontStyle.Normal;
                o.DrawText = false;
            });

            forExport.Encode("9781234567897");
        }

        [GlobalCleanup]
        public void GlobalCleanup()
        {
            forEncode.Dispose();
            forExport.Dispose();
        }

        [Benchmark]
        public override Barcode DoInstance()
        {
            return new Barcode(o =>
            {
                o.Encode = Encodes.Isbn13;
                o.Height = 30;
                o.Scale = 5;
                o.BackgroundColor = SKColors.Transparent;
                o.Color = SKColors.Black;
                o.Font = "Arial";
                o.FontStyle = SKFontStyle.Normal;
                o.DrawText = false;
            });
        }

        [Benchmark]
        public override void DoEncoding()
        {
            forEncode.Encode("9781234567897");
        }

        [Benchmark]
        public override void DoExport()
        {
            forExport.Export(Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location) ?? throw new InvalidOperationException(), "{barcode}.png"));
        }
    }
}