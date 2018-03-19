using SixLabors.Fonts;
using SixLabors.ImageSharp;
using System.IO;
using System.Reflection;
using TyKonKet.BarcodeGenerator;

namespace LetsTry
{
    class Program
    {
        static void Main(string[] args)
        {
            var bc = new Barcode()
            {
                Encode = Encode.EAN8,
                Height = 31,
                Scale = 5,
                BgColor = Rgba32.Transparent,
                FontStyle = FontStyle.Regular
            };
            bc.GenerateBarcode("98458486", Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "test.png"));
        }
    }
}


