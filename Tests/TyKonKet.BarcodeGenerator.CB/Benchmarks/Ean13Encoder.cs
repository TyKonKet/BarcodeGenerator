using BenchmarkDotNet.Attributes;
using SkiaSharp;
using System;
using System.IO;
using System.Reflection;
using TyKonKet.BarcodeGenerator.Fonts;

namespace TyKonKet.BarcodeGenerator.CB.Benchmarks
{
    [Config(typeof(BenchmarkConfig))]
    public class Ean13Encoder
    {
        private const string BARCODE = "978020137962";

        private const int QUALITY = 75;

        private static readonly SKEncodedImageFormat sKEncodedImageFormat = SKEncodedImageFormat.Jpeg;

        private static readonly string outputFilePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "out", "barcode.jpg");

        private static readonly BarcodeTypes barcodeType = BarcodeTypes.Ean13;

        private const int HEIGHT = 20;

        private const int MARGINS = 1;

        private const int SCALING = 5;

        private static readonly SKColor backgroundColor = SKColors.White;

        private static readonly SKColor foregroundColor = SKColors.Black;

        private Barcode encodeWithoutTextEncoder;

        private Barcode encodeWithTextEncoder;

        private Barcode exportEncoder;

        [Benchmark]
        public Barcode SimpleInstance()
        {
            return new Barcode(options =>
            {
                options.Type = barcodeType;
                options.Height = HEIGHT;
                options.Margins = MARGINS;
                options.Scaling = SCALING;
                options.BackgroundColor = backgroundColor;
                options.ForegroundColor = foregroundColor;
                options.RenderText = false;
            });
        }

        [Benchmark]
        public Barcode AdvancedInstance()
        {
            return new Barcode(options =>
            {
                options.Type = barcodeType;
                options.Height = HEIGHT;
                options.Margins = MARGINS;
                options.Scaling = SCALING;
                options.BackgroundColor = backgroundColor;
                options.ForegroundColor = foregroundColor;
                options.RenderText = true;
                options.UseTypeface(FontFamilies.DejaVuSerif, SKFontStyle.Normal);
            });
        }

        #region EncodingWithoutText

        [GlobalSetup(Target = nameof(EncodingWithoutText))]
        public void EncodingWithoutTextSetup()
        {
            Console.WriteLine("Setting up the barcode encoder without text...");
            Console.WriteLine();

            encodeWithoutTextEncoder = new Barcode(options =>
            {
                options.Type = barcodeType;
                options.Height = HEIGHT;
                options.Margins = MARGINS;
                options.Scaling = SCALING;
                options.BackgroundColor = backgroundColor;
                options.ForegroundColor = foregroundColor;
                options.RenderText = false;
            });
        }

        [Benchmark]
        public void EncodingWithoutText()
        {
            encodeWithoutTextEncoder.Encode(BARCODE);
        }

        [GlobalCleanup(Target = nameof(EncodingWithoutText))]
        public void EncodingWithoutTextCleanup()
        {
            Console.WriteLine("Cleaning up the barcode encoder without text...");
            Console.WriteLine();

            encodeWithoutTextEncoder?.Dispose();
        }

        #endregion

        #region EncodingWithText

        [GlobalSetup(Target = nameof(EncodingWithText))]
        public void EncodingWithTextSetup()
        {
            Console.WriteLine("Setting up the barcode encoder with text...");
            Console.WriteLine();

            encodeWithTextEncoder = new Barcode(options =>
            {
                options.Type = barcodeType;
                options.Height = HEIGHT;
                options.Margins = MARGINS;
                options.Scaling = SCALING;
                options.BackgroundColor = backgroundColor;
                options.ForegroundColor = foregroundColor;
                options.RenderText = true;
            });
        }

        [Benchmark]
        public void EncodingWithText()
        {
            encodeWithTextEncoder.Encode(BARCODE);
        }

        [GlobalCleanup(Target = nameof(EncodingWithText))]
        public void EncodingWithTextCleanup()
        {
            Console.WriteLine("Cleaning up the barcode encoder with text...");
            Console.WriteLine();

            encodeWithTextEncoder?.Dispose();
        }

        #endregion

        #region ExportToFile

        [GlobalSetup(Target = nameof(ExportToFile))]
        public void ExportToFileSetup()
        {
            Console.WriteLine("Setting up the barcode export to file...");
            Console.WriteLine();

            exportEncoder = new Barcode(options =>
            {
                options.Type = barcodeType;
                options.Height = HEIGHT;
                options.Margins = MARGINS;
                options.Scaling = SCALING;
                options.BackgroundColor = backgroundColor;
                options.ForegroundColor = foregroundColor;
                options.RenderText = false;
            });
            exportEncoder.Encode(BARCODE);
        }

        [Benchmark]
        public void ExportToFile()
        {
            exportEncoder.Export(outputFilePath, sKEncodedImageFormat, QUALITY);
        }

        [GlobalCleanup(Target = nameof(ExportToFile))]
        public void ExportToFileCleanup()
        {
            Console.WriteLine("Cleaning up the barcode export to file...");
            Console.WriteLine();

            exportEncoder?.Dispose();
        }

        #endregion
    }
}
