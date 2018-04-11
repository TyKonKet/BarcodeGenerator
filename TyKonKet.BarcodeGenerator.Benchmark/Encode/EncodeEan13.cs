using System;
using System.IO;
using System.Reflection;
using BenchmarkDotNet.Attributes;
using SixLabors.Fonts;
using SixLabors.ImageSharp.PixelFormats;

namespace TyKonKet.BarcodeGenerator.Benchmark.Encode
{
    public class EncodeEan13 : Encode
    {
        [Benchmark]
        public override void DoEncoding()
        {
            var bc = new Barcode(o =>
            {
                o.Encode = Encodes.Ean13;
                o.Height = 30;
                o.Scale = 5;
                o.BackgroundColor = Rgba32.Transparent;
                o.Color = Rgba32.Black;
                o.Font = "Arial";
                o.FontStyle = FontStyle.Regular;
            });
            bc.Encode("9780201379624",
                Path.Combine(
                    Path.GetDirectoryName(Assembly.GetEntryAssembly().Location) ??
                    throw new InvalidOperationException(), "{barcode}.png"));
        }
    }
}