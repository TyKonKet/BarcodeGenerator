using BenchmarkDotNet.Attributes;
using SixLabors.Fonts;
using SixLabors.ImageSharp;
using System.IO;
using System.Reflection;

namespace TyKonKet.BarcodeGenerator.Benchmark.Encode
{
    public class EncodeEan8 : Encode
    {
        [Benchmark]
        public override void DoEncoding()
        {
            var bc = new Barcode(o =>
            {
                o.Encode = Encodes.Ean8;
                o.Height = 30;
                o.Scale = 5;
                o.BackgroundColor = Rgba32.Transparent;
                o.Color = Rgba32.Black;
                o.Font = "Arial";
                o.FontStyle = FontStyle.Regular;
            });
            bc.Encode("90311017", Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "{barcode}.png"));
        }
    }
}
