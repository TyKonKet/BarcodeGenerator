using BenchmarkDotNet.Attributes;
using SkiaSharp;
using System;
using System.IO;
using System.Reflection;
using TyKonKet.BarcodeGenerator.Benchmarks.Common;

namespace TyKonKet.BarcodeGenerator.Benchmarks.Encoders
{
    public class EncodeIsbn13 : EncodeBenchmark
    {
        private Barcode forEncode;
        private Barcode forExport;

        [GlobalSetup]
        public void GlobalSetup()
        {
            forEncode = new Barcode(o =>
            {
                o.Encode = BarcodeEncodings.Isbn13;
                o.Height = 30;
                o.Scale = 5;
                o.BackgroundColor = SKColors.Transparent;
                o.Color = SKColors.Black;
                o.Font = "Arial";
                o.FontStyle = SKFontStyle.Normal;
                o.RenderText = false;
            });

            forExport = new Barcode(o =>
            {
                o.Encode = BarcodeEncodings.Isbn13;
                o.Height = 30;
                o.Scale = 5;
                o.BackgroundColor = SKColors.Transparent;
                o.Color = SKColors.Black;
                o.Font = "Arial";
                o.FontStyle = SKFontStyle.Normal;
                o.RenderText = false;
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
                o.Encode = BarcodeEncodings.Isbn13;
                o.Height = 30;
                o.Scale = 5;
                o.BackgroundColor = SKColors.Transparent;
                o.Color = SKColors.Black;
                o.Font = "Arial";
                o.FontStyle = SKFontStyle.Normal;
                o.RenderText = false;
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