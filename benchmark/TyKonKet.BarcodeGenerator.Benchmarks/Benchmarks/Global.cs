using BenchmarkDotNet.Attributes;
using SkiaSharp;
using System;
using System.IO;
using System.Reflection;
using TyKonKet.BarcodeGenerator.Benchmarks;
using TyKonKet.BarcodeGenerator.Utils;

namespace TyKonKet.BarcodeGenerator.Benchmarks.Benchmarks
{
    [BenchmarkCategory("CI")]
    [Config(typeof(BenchmarkConfig))]
    public class Global
    {
        private const string BARCODE = "90311017";

        private const int QUALITY = 100;

        private static readonly SKEncodedImageFormat sKEncodedImageFormat = SKEncodedImageFormat.Png;

        private static readonly string outputFilePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "out", "barcode.png");

        private static readonly string outputFilePathWithPlaceholders = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "out", "{barcode}_{quality}.{format}");

        private static readonly BarcodeTypes barcodeType = BarcodeTypes.Ean8;

        private const int HEIGHT = 20;

        private const int MARGINS = 1;

        private const int SCALING = 5;

        private static readonly SKColor backgroundColor = SKColors.White;

        private static readonly SKColor foregroundColor = SKColors.Black;

        private Barcode exportEncoder;
        private MemoryStream memoryStream;

        #region ExportToStream

        [GlobalSetup(Target = nameof(ExportToStream))]
        public void ExportToStreamSetup()
        {
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

            memoryStream = new MemoryStream();
        }

        [Benchmark]
        public void ExportToStream()
        {
            memoryStream.SetLength(0); // Reset the stream
            exportEncoder.Export(memoryStream, sKEncodedImageFormat, QUALITY);
        }

        [GlobalCleanup(Target = nameof(ExportToStream))]
        public void ExportToStreamCleanup()
        {
            memoryStream?.Dispose();
            exportEncoder?.Dispose();
        }

        #endregion

        #region ExportToFile

        [GlobalSetup(Target = nameof(ExportToFile))]
        public void ExportToFileSetup()
        {
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
            exportEncoder?.Dispose();
        }

        #endregion

        #region ExportToFileWithPlaceholders

        [GlobalSetup(Target = nameof(ExportToFileWithPlaceholders))]
        public void ExportToFileWithPlaceholdersSetup()
        {
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
        public void ExportToFileWithPlaceholders()
        {
            exportEncoder.Export(outputFilePathWithPlaceholders, sKEncodedImageFormat, QUALITY);
        }

        [GlobalCleanup(Target = nameof(ExportToFileWithPlaceholders))]
        public void ExportToFileWithPlaceholdersCleanup()
        {
            exportEncoder?.Dispose();
        }

        #endregion

        #region GetDisplayName

        private BarcodeTypes[] barcodeTypes;
        private char[] barcodeTypeNamesFirstChars;

        [GlobalSetup(Target = nameof(GetDisplayName))]
        public void GetDisplayNameSetup()
        {
            barcodeTypes = Enum.GetValues<BarcodeTypes>();
            barcodeTypeNamesFirstChars = new char[barcodeTypes.Length];
        }

        [Benchmark]
        public char[] GetDisplayName()
        {
            for (int i = 0; i < barcodeTypes.Length; i++)
            {
                barcodeTypeNamesFirstChars[i] = barcodeTypes[i].GetDisplayName()[0];
            }
            return barcodeTypeNamesFirstChars;
        }

        #endregion

        #region RegexCache

        [Benchmark]
        public bool EanAllowedCharsetRegex()
        {
            return RegexCache.EanAllowedCharsetRegex.IsMatch("1234567890123");
        }

        [Benchmark]
        public bool Code93AllowedCharsetRegex()
        {
            return RegexCache.Code93AllowedCharsetRegex.IsMatch("CODE93-VALID");
        }

        #endregion
    }
}
