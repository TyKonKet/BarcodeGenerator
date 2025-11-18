using SkiaSharp;
using System;
using System.IO;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests.Integration
{
    /// <summary>
    /// Contains integration tests for the complete barcode generation workflow.
    /// Tests end-to-end functionality including encoding, rendering, and exporting.
    /// </summary>
    public class BarcodeIntegrationTests : IDisposable
    {
        private readonly string tempDirectory;

        public BarcodeIntegrationTests()
        {
            tempDirectory = Path.Combine(Path.GetTempPath(), "BarcodeGenerator_Tests", Guid.NewGuid().ToString());
            Directory.CreateDirectory(tempDirectory);
        }

        public void Dispose()
        {
            if (Directory.Exists(tempDirectory))
            {
                Directory.Delete(tempDirectory, true);
            }
            GC.SuppressFinalize(this);
        }

        #region Full Workflow Tests

        [Theory]
        [InlineData(BarcodeTypes.Ean13, "1234567890123", "1234567890128")]
        [InlineData(BarcodeTypes.Ean8, "12345678", "12345670")]
        [InlineData(BarcodeTypes.Upca, "123456789012", "123456789012")]
        [InlineData(BarcodeTypes.Isbn13, "9781234567897", "9781234567897")]
        [InlineData(BarcodeTypes.Code93, "HELLO123", "HELLO1237N")]
        [InlineData(BarcodeTypes.Code128, "ABC123xyz", "ABC123xyz")]
        [InlineData(BarcodeTypes.Code39, "HELLO123", "HELLO123")]
        [InlineData(BarcodeTypes.Code39, "CODE-39", "CODE-39")]
        public void FullWorkflow_ShouldEncodeAndGenerateImage_ForAllBarcodeTypes(BarcodeTypes type, string input, string expectedOutput)
        {
            // Arrange & Act
            using var barcode = new Barcode(options =>
            {
                options.Type = type;
                options.Height = 50;
                options.Scaling = 2;
                options.RenderText = true;
                options.BackgroundColor = SKColors.White;
                options.ForegroundColor = SKColors.Black;
            });

            var result = barcode.Encode(input);

            // Assert
            Assert.Equal(expectedOutput, result);
            Assert.NotNull(barcode.Image);
            Assert.True(barcode.Image.Width > 0);
            Assert.True(barcode.Image.Height > 0);
        }

        [Fact]
        public void ExportToPng_ShouldCreateValidImageFile()
        {
            // Arrange
            var fileName = Path.Combine(tempDirectory, "test_barcode.png");
            
            using var barcode = new Barcode(options =>
            {
                options.Type = BarcodeTypes.Ean13;
                options.Height = 30;
                options.Scaling = 5;
                options.RenderText = true;
            });

            // Act
            var result = barcode.Encode("1234567890123");
            barcode.Export(fileName, SKEncodedImageFormat.Png, 100);

            // Assert
            Assert.True(File.Exists(fileName));
            
            var fileInfo = new FileInfo(fileName);
            Assert.True(fileInfo.Length > 0);

            // Verify it's a valid PNG by reading the header
            using var fileStream = new FileStream(fileName, FileMode.Open, FileAccess.Read);
            const int pngHeaderSize = 8;
            var pngHeader = new byte[pngHeaderSize];
            var bytesRead = fileStream.Read(pngHeader, 0, pngHeaderSize);
            
            // Ensure we read the expected number of bytes
            Assert.Equal(pngHeaderSize, bytesRead);
            
            // PNG signature: 137 80 78 71 13 10 26 10
            var expectedPngSignature = new byte[] { 137, 80, 78, 71, 13, 10, 26, 10 };
            Assert.Equal(expectedPngSignature, pngHeader);
        }

        [Fact]
        public void ExportToJpeg_ShouldCreateValidImageFile()
        {
            // Arrange
            var fileName = Path.Combine(tempDirectory, "test_barcode.jpg");
            
            using var barcode = new Barcode(options =>
            {
                options.Type = BarcodeTypes.Code93;
                options.Height = 40;
                options.Scaling = 3;
                options.RenderText = false;
            });

            // Act
            var result = barcode.Encode("HELLO");
            barcode.Export(fileName, SKEncodedImageFormat.Jpeg, 85);

            // Assert
            Assert.True(File.Exists(fileName));
            
            var fileInfo = new FileInfo(fileName);
            Assert.True(fileInfo.Length > 0);

            // Verify it's a valid JPEG by checking the header
            using var fileStream = new FileStream(fileName, FileMode.Open, FileAccess.Read);
            const int jpegHeaderSize = 2;
            var jpegHeader = new byte[jpegHeaderSize];
            var bytesRead = fileStream.Read(jpegHeader, 0, jpegHeaderSize);
            
            // Ensure we read the expected number of bytes
            Assert.Equal(jpegHeaderSize, bytesRead);
            
            // JPEG header: FF D8
            var expectedJpegSignature = new byte[] { 0xFF, 0xD8 };
            Assert.Equal(expectedJpegSignature, jpegHeader);
        }

        [Fact]
        public void ExportWithPlaceholders_ShouldReplaceTokensCorrectly()
        {
            // Arrange
            var fileName = Path.Combine(tempDirectory, "{barcode}_{quality}.{format}");
            
            using var barcode = new Barcode(options =>
            {
                options.Type = BarcodeTypes.Ean8;
                options.Height = 25;
                options.Scaling = 4;
            });

            // Act
            var result = barcode.Encode("12345678");
            barcode.Export(fileName, SKEncodedImageFormat.Png, 95);

            // Assert
            var expectedFileName = Path.Combine(tempDirectory, "12345670_95.png");
            Assert.True(File.Exists(expectedFileName));
        }

        #endregion

        #region Error Handling Tests

        [Fact]
        public void Encode_ShouldThrowArgumentNullException_WhenBarcodeIsNull()
        {
            using var barcode = new Barcode();
            Assert.Throws<ArgumentNullException>(() => barcode.Encode(null!));
        }

        [Theory]
        [InlineData("")]
        [InlineData("   ")]
        public void Encode_ShouldThrowArgumentException_WhenBarcodeIsEmptyOrWhitespace(string input)
        {
            using var barcode = new Barcode();
            Assert.Throws<FormatException>(() => barcode.Encode(input));
        }

        [Fact]
        public void Export_ShouldThrowInvalidOperationException_WhenNoImageGenerated()
        {
            // Arrange
            var fileName = Path.Combine(tempDirectory, "test.png");
            
            using var barcode = new Barcode();
            // Don't encode anything - Image should be null

            // Act & Assert
            Assert.Throws<InvalidOperationException>(() => 
                barcode.Export(fileName, SKEncodedImageFormat.Png, 100));
        }

        [Fact]
        public void Export_ShouldThrowArgumentNullException_WhenFileNameIsNull()
        {
            using var barcode = new Barcode();
            barcode.Encode("12345678");

            string fileName = null!;
            Assert.Throws<ArgumentNullException>(() => 
                barcode.Export(fileName, SKEncodedImageFormat.Png, 100));
        }

        [Theory]
        [InlineData("")]
        [InlineData("   ")]
        public void Export_ShouldThrowArgumentException_WhenFileNameIsEmptyOrWhitespace(string fileName)
        {
            using var barcode = new Barcode();
            barcode.Encode("12345678");

            Assert.Throws<ArgumentException>(() => 
                barcode.Export(fileName, SKEncodedImageFormat.Png, 100));
        }

        #endregion

        #region Performance and Stress Tests

        [Fact]
        public void MultipleEncodings_ShouldWorkWithSameBarcodeInstance()
        {
            using var barcode = new Barcode(options =>
            {
                options.Type = BarcodeTypes.Ean13;
                options.Height = 30;
                options.Scaling = 2;
            });

            // First encoding
            var result1 = barcode.Encode("1111111111116");
            Assert.NotNull(barcode.Image);
            var firstImageHash = barcode.Image.GetHashCode();

            // Second encoding should replace the first
            var result2 = barcode.Encode("2222222222228");
            Assert.NotNull(barcode.Image);
            var secondImageHash = barcode.Image.GetHashCode();

            // Images should be different
            Assert.NotEqual(firstImageHash, secondImageHash);
            Assert.Equal("1111111111116", result1);
            Assert.Equal("2222222222222", result2);
        }

        [Theory]
        [InlineData(1, 1)]
        [InlineData(10, 10)]
        [InlineData(100, 5)]
        [InlineData(500, 1)]
        public void ExtremeScalingAndHeight_ShouldNotCrash(int height, int scaling)
        {
            // Test that extreme values don't cause crashes
            using var barcode = new Barcode(options =>
            {
                options.Type = BarcodeTypes.Ean8;
                options.Height = height;
                options.Scaling = scaling;
                options.RenderText = false; // Disable text for extreme cases
            });

            // Should not throw
            var result = barcode.Encode("12345678");
            Assert.NotNull(result);
            Assert.NotNull(barcode.Image);
        }

        #endregion
    }
}