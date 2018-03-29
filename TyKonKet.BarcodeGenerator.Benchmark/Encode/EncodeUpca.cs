using BenchmarkDotNet.Attributes;
using SixLabors.Fonts;
using SixLabors.ImageSharp.PixelFormats;
using System;
using System.IO;
using System.Reflection;

namespace TyKonKet.BarcodeGenerator.Benchmark.Encode
{
    public class EncodeUpca : Encode
    {
        [Benchmark]
        public override void DoEncoding()
        {
            var bc = new Barcode(o =>
            {
                o.Encode = Encodes.Upca;
                o.Height = 30;
                o.Scale = 5;
                o.BackgroundColor = Rgba32.Transparent;
                o.Color = Rgba32.Black;
                o.Font = "Arial";
                o.FontStyle = FontStyle.Regular;
            });
            bc.Encode("725272730706",
                Path.Combine(
                    Path.GetDirectoryName(Assembly.GetEntryAssembly().Location) ??
                    throw new InvalidOperationException(), "{barcode}.png"));
        }
    }
}
