using BenchmarkDotNet.Attributes;
using SkiaSharp;
using System;
using System.IO;
using System.Reflection;

namespace TyKonKet.BarcodeGenerator.Benchmark.Encode
{
    public class EncodeCode93 : Encode
    {
        private Barcode forEncode;
        private Barcode forExport;

        [GlobalSetup]
        public void GlobalSetup()
        {
            forEncode = new Barcode(o =>
            {
                o.Encode = Encodes.Code93;
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
                o.Encode = Encodes.Code93;
                o.Height = 30;
                o.Scale = 5;
                o.BackgroundColor = SKColors.Transparent;
                o.Color = SKColors.Black;
                o.Font = "Arial";
                o.FontStyle = SKFontStyle.Normal;
                o.DrawText = false;
            });

            forExport.Encode("ABC-1234-ABC");
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
                o.Encode = Encodes.Code93;
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
            forEncode.Encode("ABC-1234-ABC");
        }

        [Benchmark]
        public override void DoExport()
        {
            forExport.Export(Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location) ?? throw new InvalidOperationException(), "{barcode}.png"));
        }
    }
}