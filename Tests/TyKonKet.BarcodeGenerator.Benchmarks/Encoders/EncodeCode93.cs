using BenchmarkDotNet.Attributes;
using SkiaSharp;
using System;
using System.IO;
using System.Reflection;
using TyKonKet.BarcodeGenerator.Benchmarks.Common;

namespace TyKonKet.BarcodeGenerator.Benchmarks.Encoders
{
    public class EncodeCode93 : EncodeBenchmark
    {
        private Barcode toEncode;
        private Barcode toExport;

        [GlobalSetup]
        public void GlobalSetup()
        {
            toEncode = new Barcode(o =>
            {
                o.Type = BarcodeTypes.Code93;
                o.Height = 30;
                o.Scaling = 5;
                o.BackgroundColor = SKColors.Transparent;
                o.ForegroundColor = SKColors.Black;
                o.RenderText = false;
            });

            toExport = new Barcode(o =>
            {
                o.Type = BarcodeTypes.Code93;
                o.Height = 30;
                o.Scaling = 5;
                o.BackgroundColor = SKColors.Transparent;
                o.ForegroundColor = SKColors.Black;
                o.RenderText = false;
            });

            toExport.Encode("ABC-1234-ABC");
        }

        [GlobalCleanup]
        public void GlobalCleanup()
        {
            toEncode.Dispose();
            toExport.Dispose();
        }

        [Benchmark]
        public override Barcode DoInstance()
        {
            return new Barcode(o =>
            {
                o.Type = BarcodeTypes.Code93;
                o.Height = 30;
                o.Scaling = 5;
                o.BackgroundColor = SKColors.Transparent;
                o.ForegroundColor = SKColors.Black;
                o.RenderText = false;
            });
        }

        [Benchmark]
        public override void DoEncoding()
        {
            toEncode.Encode("ABC-1234-ABC");
        }

        [Benchmark]
        public override void DoExport()
        {
            toExport.Export(Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location) ?? throw new InvalidOperationException(), "{barcode}.png"));
        }
    }
}