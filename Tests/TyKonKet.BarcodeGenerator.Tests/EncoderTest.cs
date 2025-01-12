using SkiaSharp;
using TyKonKet.BarcodeGenerator.Encoders.Abstract;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests
{
    public class EncoderTest
    {
        [Fact]
        public void GetSafeFilename_ShouldRemoveInvalidCharacters()
        {
            // Arrange
            string filename = "test*file:name?.png";
            string expected = "testfilename.png";

            // Act
            string result = Encoder.GetSafeFilename(filename);

            // Assert
            Assert.Equal(expected, result);
        }

        [Theory]
        [InlineData("file_{barcode}_{format}_{quality}.png", "123456789012", SKEncodedImageFormat.Png, 100, "file_123456789012_png_100.png")]
        [InlineData("barcode_{barcode}_quality_{quality}.{format}", "ABC123", SKEncodedImageFormat.Jpeg, 80, "barcode_ABC123_quality_80.jpg")]
        [InlineData("test_{barcode}.{format}", "test*file", SKEncodedImageFormat.Webp, 50, "test_testfile.webp")]
        public void GetFinalFileName_ShouldReplacePlaceholdersCorrectly(string fileName, string barcode, SKEncodedImageFormat format, int quality, string expected)
        {
            // Act
            var result = Encoder.GetFinalFileName(fileName, barcode, format, quality);

            // Assert
            Assert.Equal(expected, result);
        }

        [Fact]
        public void GetSafeFilename_ShouldHandleEmptyString()
        {
            // Arrange
            string filename = "";
            string expected = "";

            // Act
            string result = Encoder.GetSafeFilename(filename);

            // Assert
            Assert.Equal(expected, result);
        }

        [Fact]
        public void GetSafeFilename_ShouldHandleNullString()
        {
            // Arrange
            string filename = null;
            string expected = null;

            // Act
            string result = Encoder.GetSafeFilename(filename);

            // Assert
            Assert.Equal(expected, result);
        }

        [Theory]
        [InlineData("file_{barcode}_{format}_{quality}.png", "", SKEncodedImageFormat.Png, 100, "file__png_100.png")]
        [InlineData("barcode_{barcode}_quality_{quality}.{format}", null, SKEncodedImageFormat.Jpeg, 80, "barcode__quality_80.jpg")]
        public void GetFinalFileName_ShouldHandleEmptyOrNullBarcode(string fileName, string barcode, SKEncodedImageFormat format, int quality, string expected)
        {
            // Act
            var result = Encoder.GetFinalFileName(fileName, barcode, format, quality);

            // Assert
            Assert.Equal(expected, result);
        }
    }
}