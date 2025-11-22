namespace TyKonKet.BarcodeGenerator.Playground
{
    using SkiaSharp;
    using System;
    using System.IO;
    using TyKonKet.BarcodeGenerator;

    internal static class Program
    {
        private static void Main()
        {
            Directory.CreateDirectory("output");

            foreach (var type in Enum.GetValues<BarcodeTypes>())
            {
                string input = GetSampleInput(type);
                using var barcode = new Barcode(options =>
                {
                    options.Type = type;
                    options.Height = 30;
                    options.Scaling = 10;
                    options.RenderText = true;
                });

                barcode.Encode(input);
                barcode.Export($"output/{type}.png", SKEncodedImageFormat.Png, 100);
            }
        }

        private static string GetSampleInput(BarcodeTypes type) => type switch
        {
            BarcodeTypes.Ean13 => "1234567890123",
            BarcodeTypes.Ean8 => "12345678",
            BarcodeTypes.Upca => "123456789012",
            BarcodeTypes.Upce => "0123456",
            BarcodeTypes.Isbn13 => "9781234567897",
            BarcodeTypes.Code93 => "HELLO123",
            BarcodeTypes.Code128 => "ABC123xyz",
            BarcodeTypes.Code39 => "HELLO123",
            BarcodeTypes.Codabar => "A123456A",
            _ => throw new ArgumentOutOfRangeException(nameof(type))
        };
    }
}