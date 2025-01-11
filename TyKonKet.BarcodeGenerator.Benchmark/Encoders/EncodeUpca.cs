using BenchmarkDotNet.Attributes;
using SkiaSharp;
using System;
using System.IO;
using System.Reflection;
using TyKonKet.BarcodeGenerator.Benchmark.Common;

namespace TyKonKet.BarcodeGenerator.Benchmark.Encode
{
    public class EncodeUpca : EncodeBenchmark
    {
        private Barcode forEncode;
        private Barcode forExport;

        [GlobalSetup]
        public void GlobalSetup()
        {
            forEncode = new Barcode(o =>
            {
                o.Encode = Encodes.Upca;
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
                o.Encode = Encodes.Upca;
                o.Height = 30;
                o.Scale = 5;
                o.BackgroundColor = SKColors.Transparent;
                o.Color = SKColors.Black;
                o.Font = "Arial";
                o.FontStyle = SKFontStyle.Normal;
                o.DrawText = false;
            });

            forExport.Encode("725272730706");
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
                o.Encode = Encodes.Upca;
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
            forEncode.Encode("725272730706");
        }

        [Benchmark]
        public override void DoExport()
        {
            forExport.Export(Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location) ?? throw new InvalidOperationException(), "{barcode}.png"));
        }
    }
}