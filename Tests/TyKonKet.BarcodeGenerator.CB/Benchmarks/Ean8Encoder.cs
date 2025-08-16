using BenchmarkDotNet.Attributes;
using SkiaSharp;
using TyKonKet.BarcodeGenerator.Fonts;

namespace TyKonKet.BarcodeGenerator.CB.Benchmarks
{
    [Config(typeof(BenchmarkConfig))]
    public class Ean8Encoder
    {
        private const string BARCODE = "90311017";

        private static readonly BarcodeTypes barcodeType = BarcodeTypes.Ean8;

        private const int HEIGHT = 20;

        private const int MARGINS = 1;

        private const int SCALING = 5;

        private static readonly SKColor backgroundColor = SKColors.White;

        private static readonly SKColor foregroundColor = SKColors.Black;

        private Barcode encodeWithoutTextEncoder;

        private Barcode encodeWithTextEncoder;

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
            //Console.WriteLine("Setting up the barcode encoder without text...");
            //Console.WriteLine();

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
            //Console.WriteLine("Cleaning up the barcode encoder without text...");
            //Console.WriteLine();

            encodeWithoutTextEncoder?.Dispose();
        }

        #endregion

        #region EncodingWithText

        [GlobalSetup(Target = nameof(EncodingWithText))]
        public void EncodingWithTextSetup()
        {
            //Console.WriteLine("Setting up the barcode encoder with text...");
            //Console.WriteLine();

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
            //Console.WriteLine("Cleaning up the barcode encoder with text...");
            //Console.WriteLine();

            encodeWithTextEncoder?.Dispose();
        }

        #endregion
    }
}
