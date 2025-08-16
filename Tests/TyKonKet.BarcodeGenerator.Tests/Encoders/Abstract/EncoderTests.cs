using SkiaSharp;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using TyKonKet.BarcodeGenerator.Encoders.Abstract;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests.Encoders.Abstract
{
    public class EncoderTests
    {
        [Fact]
        public void GetSafeFilename_ShouldRemoveInvalidCharacters()
        {
            // Arrange
            string filename = "test*file:name?.png";
            string expected = "test*file:name?.png";

            // On Linux the colon, question mark and asterisk are allowed in filenames, but not on Windows
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                expected = "testfilename.png";
            }

            // Act
            string result = Encoder.GetSafeFilename(filename);

            // Assert
            Assert.Equal(expected, result);
        }

        public static TheoryData<string, string, SKEncodedImageFormat, int, string> GetFinalFileName_ShouldReplacePlaceholdersCorrectly_Data()
        {
            var data = new TheoryData<string, string, SKEncodedImageFormat, int, string>
                {
                    { "file_{barcode}_{format}_{quality}.png", "123456789012", SKEncodedImageFormat.Png, 100, "file_123456789012_png_100.png" },
                    { "barcode_{barcode}_quality_{quality}.{format}", "ABC123", SKEncodedImageFormat.Jpeg, 80, "barcode_ABC123_quality_80.jpg" },
                    { "{barcode}_{quality}_{format}.{format}", "ABC123", SKEncodedImageFormat.Bmp, 85, "ABC123_85_bmp.bmp" },
                    { "{barcode}_{quality}_{quality}.{format}", "ASDFG", SKEncodedImageFormat.Ico, 50, "ASDFG_50_50.ico" },
                    { "{barcode}_{barcode}_{quality}.{format}", "ABC321", SKEncodedImageFormat.Jpeg, 70, "ABC321_ABC321_70.jpg" },
                    { "{barcode}_{barcode}_{quality}_{quality}_{format}.{format}", "PLYSH9374", SKEncodedImageFormat.Webp, 90, "PLYSH9374_PLYSH9374_90_90_webp.webp" },
                };

            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                data.Add("test_{barcode}.{format}", "test*file", SKEncodedImageFormat.Webp, 50, "test_testfile.webp");
            }
            else
            {
                data.Add("test_{barcode}.{format}", "test*file", SKEncodedImageFormat.Webp, 50, "test_test*file.webp");
            }

            return data;
        }

        [Theory]
        [MemberData(nameof(GetFinalFileName_ShouldReplacePlaceholdersCorrectly_Data))]
        public void GetFinalFileName_ShouldReplacePlaceholdersCorrectly(string fileName, string barcode, SKEncodedImageFormat format, int quality, string expected)
        {
            // Act
            var result = Encoder.FormatFileName(fileName, barcode, format, quality);

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
            var result = Encoder.FormatFileName(fileName, barcode, format, quality);

            // Assert
            Assert.Equal(expected, result);
        }

        [Theory]
        [InlineData("file_{barcode}_{format}_{quality}.png", "123456789012", SKEncodedImageFormat.Png, 0, "file_123456789012_png_0.png")]
        [InlineData("file_{barcode}_{format}_{quality}.png", "123456789012", SKEncodedImageFormat.Png, -1, "file_123456789012_png_-1.png")]
        [InlineData("file_{barcode}_{format}_{quality}.png", "123456789012", SKEncodedImageFormat.Png, int.MaxValue, "file_123456789012_png_2147483647.png")]
        [InlineData("file_{barcode}_{format}_{quality}.png", "123456789012", SKEncodedImageFormat.Png, int.MinValue, "file_123456789012_png_-2147483648.png")]
        public void GetFinalFileName_ShouldHandleExtremeQualityValues(string fileName, string barcode, SKEncodedImageFormat format, int quality, string expected)
        {
            // Act
            var result = Encoder.FormatFileName(fileName, barcode, format, quality);

            // Assert
            Assert.Equal(expected, result);
        }

        [Theory]
        [InlineData("test*file:name?.png", "testfilename.png")]
        [InlineData("test|file<>name?.png", "testfilename.png")]
        [InlineData("test\\file/name?.png", "testfilename.png")]
        [InlineData("test\"file:name?.png", "testfilename.png")]
        public void GetSafeFilename_ShouldRemoveAllInvalidCharacters(string filename, string expected)
        {
            // Act
            string result = Encoder.GetSafeFilename(filename);

            // Assert
            Assert.Equal(expected, result);
        }

        [Fact]
        public void GetSafeFilename_ShouldHandleLongFilenames()
        {
            // Arrange
            string filename = new string('a', 300) + ".png";
            string expected = new string('a', 300) + ".png";

            // Act
            string result = Encoder.GetSafeFilename(filename);

            // Assert
            Assert.Equal(expected, result);
        }
    }
}