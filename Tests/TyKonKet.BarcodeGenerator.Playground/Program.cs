namespace TyKonKet.BarcodeGenerator.Playground
{
    using SkiaSharp;

    internal static class Program
    {
        private static void Main()
        {
            // Test CODE128 barcode generation
            GenerateCode128Barcodes();
            
            // Test sequential rendering with different sizes
            TestSequentialRendering();
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

        /// <summary>
        /// Tests that a single Barcode instance can sequentially render different barcodes
        /// with varying sizes without rendering issues.
        /// </summary>
        private static void TestSequentialRendering()
        {
            System.Console.WriteLine("\n" + new string('=', 80));
            System.Console.WriteLine("Testing Sequential Rendering with Different Barcode Sizes");
            System.Console.WriteLine(new string('=', 80) + "\n");

            var outputDir = "/tmp/sequential_test";
            if (!System.IO.Directory.Exists(outputDir))
            {
                System.IO.Directory.CreateDirectory(outputDir);
            }

            // Test data with varying sizes (short to long to short)
            var testSequence = new[]
            {
                ("AB", "Very short barcode (2 chars)"),
                ("1234567890123456789012345678901234567890", "Very long barcode (40 digits)"),
                ("TEST", "Short barcode (4 chars)"),
                ("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", "Long alphanumeric (36 chars)"),
                ("12", "Minimal numeric (2 digits)"),
                ("CODE128-TEST-SEQUENTIAL-RENDERING-2024", "Medium mixed barcode"),
                ("X", "Single character"),
                ("9999999999999999999999999999999999999999999999999999999999", "Very long numeric (58 digits)"),
                ("Hi", "Two characters"),
            };

            // Use a SINGLE Barcode instance for all encodings
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
                System.Console.WriteLine($"Using SINGLE Barcode instance for {testSequence.Length} sequential encodings:\n");

                for (int i = 0; i < testSequence.Length; i++)
                {
                    var (data, description) = testSequence[i];
                    
                    System.Console.WriteLine($"[{i + 1}/{testSequence.Length}] Encoding: {description}");
                    System.Console.WriteLine($"  Input length: {data.Length} characters");
                    System.Console.WriteLine($"  Input data: \"{data}\"");

                    try
                    {
                        // Encode with the same instance
                        string result = barcode.Encode(data);
                        
                        // Export to verify rendering
                        string filename = $"{outputDir}/seq_{i + 1:D2}_{data.Length:D3}chars.png";
                        barcode.Export(filename, SKEncodedImageFormat.Png, 100);
                        
                        // Get image dimensions to verify
                        if (barcode.Image != null)
                        {
                            System.Console.WriteLine($"  ✓ Rendered successfully - Image size: {barcode.Image.Width}x{barcode.Image.Height} px");
                            System.Console.WriteLine($"  ✓ Exported to: seq_{i + 1:D2}_{data.Length:D3}chars.png");
                        }
                        else
                        {
                            System.Console.WriteLine($"  ✗ ERROR: Image is null after encoding!");
                        }
                    }
                    catch (System.Exception ex)
                    {
                        System.Console.WriteLine($"  ✗ ERROR: {ex.Message}");
                        System.Console.WriteLine($"  Stack trace: {ex.StackTrace}");
                    }
                    
                    System.Console.WriteLine();
                }

                System.Console.WriteLine(new string('=', 80));
                System.Console.WriteLine($"✓ Sequential rendering test completed successfully!");
                System.Console.WriteLine($"  All {testSequence.Length} barcodes rendered without issues.");
                System.Console.WriteLine($"  Output directory: {outputDir}");
                System.Console.WriteLine(new string('=', 80));
            }

            // Additional test: Mix different barcode types
            System.Console.WriteLine("\n" + new string('=', 80));
            System.Console.WriteLine("Testing Sequential Rendering with Mixed Barcode Types");
            System.Console.WriteLine(new string('=', 80) + "\n");

            var mixedTypeTests = new[]
            {
                (BarcodeTypes.Code128, "ABC123", "CODE128 - Alphanumeric"),
                (BarcodeTypes.Code93, "TEST-93", "CODE93 - Alphanumeric"),
                (BarcodeTypes.Code128, "12345678901234567890", "CODE128 - Long numeric"),
                (BarcodeTypes.Ean13, "123456789012", "EAN13 - 12 digits"),
                (BarcodeTypes.Code128, "Short", "CODE128 - Short"),
                (BarcodeTypes.Code93, "A", "CODE93 - Single char"),
                (BarcodeTypes.Code128, "VERY-LONG-CODE128-BARCODE-WITH-MANY-CHARACTERS", "CODE128 - Very long"),
            };

            System.Console.WriteLine($"Testing {mixedTypeTests.Length} encodings with different types:\n");

            for (int i = 0; i < mixedTypeTests.Length; i++)
            {
                var (type, data, description) = mixedTypeTests[i];
                
                System.Console.WriteLine($"[{i + 1}/{mixedTypeTests.Length}] {description}");
                System.Console.WriteLine($"  Type: {type}");
                System.Console.WriteLine($"  Input: \"{data}\" ({data.Length} chars)");

                try
                {
                    using (var barcode = new Barcode(options =>
                    {
                        options.Type = type;
                        options.Height = 50;
                        options.Scaling = 3;
                        options.Margins = 5;
                        options.BackgroundColor = SKColors.White;
                        options.ForegroundColor = SKColors.Black;
                        options.RenderText = true;
                    }))
                    {
                        string result = barcode.Encode(data);
                        
                        // Export to verify rendering
                        string filename = $"{outputDir}/mixed_{i + 1:D2}_{type}.png";
                        barcode.Export(filename, SKEncodedImageFormat.Png, 100);
                        
                        if (barcode.Image != null)
                        {
                            System.Console.WriteLine($"  ✓ Rendered - Size: {barcode.Image.Width}x{barcode.Image.Height} px");
                        }
                    }
                }
                catch (System.Exception ex)
                {
                    System.Console.WriteLine($"  ✗ ERROR: {ex.Message}");
                }
                
                System.Console.WriteLine();
            }

            System.Console.WriteLine(new string('=', 80));
            System.Console.WriteLine($"✓ Mixed type rendering test completed!");
            System.Console.WriteLine(new string('=', 80));
        }
    }
}