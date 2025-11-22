using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Environments;
using BenchmarkDotNet.Jobs;
using SkiaSharp;
using TyKonKet.BarcodeGenerator.Fonts;

namespace TyKonKet.BarcodeGenerator.CB.Benchmarks
{
    [BenchmarkCategory("CI")]
    [Config(typeof(BenchmarkConfig))]
    public class UpceEncoder
    {
        private const string BARCODE = "0123456";

        private static readonly BarcodeTypes barcodeType = BarcodeTypes.Upce;

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
        public string EncodingWithoutText()
        {
            return encodeWithoutTextEncoder.Encode(BARCODE);
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
        public string EncodingWithText()
        {
            return encodeWithTextEncoder.Encode(BARCODE);
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
