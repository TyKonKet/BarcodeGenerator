namespace TyKonKet.BarcodeGenerator.Playground
{
    using SkiaSharp;

    internal static class Program
    {
        private static void Main()
        {
            // Test CODE128 barcode generation
            GenerateCode128Barcodes();
        }

        private static void GenerateCode128Barcodes()
        {
            // Create output directory
            var outputDir = "/tmp/code128_test";
            if (!System.IO.Directory.Exists(outputDir))
            {
                System.IO.Directory.CreateDirectory(outputDir);
            }

            // Test 1: Alphanumeric data
            using (var barcode = new Barcode(options =>
            {
                options.Type = BarcodeTypes.Code128;
                options.Height = 50;
                options.Scaling = 3;
                options.Margins = 5;
                options.BackgroundColor = SKColors.White;
                options.ForegroundColor = SKColors.Black;
                options.RenderText = true;
                options.UseTypeface("Arial", SKFontStyle.Normal);
            }))
            {
                string data = "ABC123xyz";
                string result = barcode.Encode(data);
                barcode.Export($"{outputDir}/code128_alphanumeric.png", SKEncodedImageFormat.Png, 100);
                System.Console.WriteLine($"Generated: code128_alphanumeric.png - Input: {data}, Result: {result}");
            }

            // Test 2: Numeric data
            using (var barcode = new Barcode(options =>
            {
                options.Type = BarcodeTypes.Code128;
                options.Height = 50;
                options.Scaling = 3;
                options.Margins = 5;
                options.BackgroundColor = SKColors.White;
                options.ForegroundColor = SKColors.Black;
                options.RenderText = true;
            }))
            {
                string data = "12345678";
                string result = barcode.Encode(data);
                barcode.Export($"{outputDir}/code128_numeric.png", SKEncodedImageFormat.Png, 100);
                System.Console.WriteLine($"Generated: code128_numeric.png - Input: {data}, Result: {result}");
            }

            // Test 3: Mixed case with special characters
            using (var barcode = new Barcode(options =>
            {
                options.Type = BarcodeTypes.Code128;
                options.Height = 50;
                options.Scaling = 3;
                options.Margins = 5;
                options.BackgroundColor = SKColors.White;
                options.ForegroundColor = SKColors.Black;
                options.RenderText = true;
            }))
            {
                string data = "Test-123";
                string result = barcode.Encode(data);
                barcode.Export($"{outputDir}/code128_mixed.png", SKEncodedImageFormat.Png, 100);
                System.Console.WriteLine($"Generated: code128_mixed.png - Input: {data}, Result: {result}");
            }

            // Test 4: Long numeric sequence
            using (var barcode = new Barcode(options =>
            {
                options.Type = BarcodeTypes.Code128;
                options.Height = 50;
                options.Scaling = 3;
                options.Margins = 5;
                options.BackgroundColor = SKColors.White;
                options.ForegroundColor = SKColors.Black;
                options.RenderText = true;
            }))
            {
                string data = "1234567890";
                string result = barcode.Encode(data);
                barcode.Export($"{outputDir}/code128_long_numeric.png", SKEncodedImageFormat.Png, 100);
                System.Console.WriteLine($"Generated: code128_long_numeric.png - Input: {data}, Result: {result}");
            }

            System.Console.WriteLine($"\nAll barcodes generated in: {outputDir}");
        }
    }
}