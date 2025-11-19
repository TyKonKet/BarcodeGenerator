using SkiaSharp;
using TyKonKet.BarcodeGenerator.Utils;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests.Utils
{
    public class SkiaExtensionsTests
    {
        [Theory]
        [InlineData(SKEncodedImageFormat.Jpeg, "jpg")]
        [InlineData(SKEncodedImageFormat.Png, "png")]
        [InlineData(SKEncodedImageFormat.Webp, "webp")]
        [InlineData(SKEncodedImageFormat.Bmp, "bmp")]
        [InlineData(SKEncodedImageFormat.Gif, "gif")]
        [InlineData(SKEncodedImageFormat.Ico, "ico")]
        [InlineData(SKEncodedImageFormat.Heif, "heif")]
        [InlineData(SKEncodedImageFormat.Jpegxl, "jxl")]
        [InlineData(SKEncodedImageFormat.Avif, "avif")]
        [InlineData(SKEncodedImageFormat.Dng, "dng")]
        [InlineData(SKEncodedImageFormat.Astc, "astc")]
        [InlineData(SKEncodedImageFormat.Ktx, "ktx")]
        [InlineData(SKEncodedImageFormat.Pkm, "pkm")]
        [InlineData(SKEncodedImageFormat.Wbmp, "wbmp")]
        public void ToFileExtension_ShouldReturnCorrectExtension(SKEncodedImageFormat format, string expectedExtension)
        {
            // Act
            var extension = format.ToFileExtension();

            // Assert
            Assert.Equal(expectedExtension, extension);
        }

        [Fact]
        public void ToFileExtension_ShouldHandleUndefinedFormat()
        {
            // Arrange
            var undefinedFormat = (SKEncodedImageFormat)999; // An undefined value

            // Act
            var extension = undefinedFormat.ToFileExtension();

            // Assert
            Assert.Equal("999", extension.ToLower());
        }
    }
}
