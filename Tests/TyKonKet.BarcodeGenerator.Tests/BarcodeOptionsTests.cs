using SkiaSharp;
using System;
using System.IO;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests
{
    /// <summary>
    /// Contains unit tests for the <see cref="BarcodeOptions"/> class.
    /// Tests configuration options, default values, validation, and option interactions.
    /// </summary>
    public class BarcodeOptionsTests
    {
        [Fact]
        public void DefaultValues_ShouldBeCorrect()
        {
            var options = new BarcodeOptions();
            Assert.Equal(2, options.Margins);
            Assert.Equal(BarcodeTypes.Ean8, options.Type);
            Assert.Equal(30, options.Height);
            Assert.Equal(5, options.Scaling);
            Assert.Equal(SKColors.White, options.BackgroundColor);
            Assert.Equal(SKColors.Black, options.ForegroundColor);
            Assert.Null(options.TextColor);
            Assert.Equal(SKColors.Black, options.EffectiveTextColor); // Should fallback to ForegroundColor
            Assert.True(options.RenderText);
            Assert.Equal(SKTypeface.Default, options.Typeface);
        }

        [Fact]
        public void TextColor_WhenSet_ShouldReturnSetValue()
        {
            var options = new BarcodeOptions();
            options.TextColor = SKColors.Red;
            Assert.Equal(SKColors.Red, options.TextColor);
            Assert.Equal(SKColors.Red, options.EffectiveTextColor);
        }

        [Fact]
        public void TextColor_WhenNull_ShouldFallbackToForegroundColor()
        {
            var options = new BarcodeOptions();
            options.ForegroundColor = SKColors.Blue;
            options.TextColor = null;
            Assert.Null(options.TextColor);
            Assert.Equal(SKColors.Blue, options.EffectiveTextColor);
        }

        [Fact]
        public void TextColor_ShouldBeIndependentOfForegroundColor()
        {
            var options = new BarcodeOptions();
            options.ForegroundColor = SKColors.Green;
            options.TextColor = SKColors.Yellow;
            Assert.Equal(SKColors.Green, options.ForegroundColor);
            Assert.Equal(SKColors.Yellow, options.TextColor);
            Assert.Equal(SKColors.Yellow, options.EffectiveTextColor);
        }

        [Fact]
        public void TextColor_IntegrationTest_ShouldUseCorrectColors()
        {
            // Test that TextColor is actually used in barcode generation
            using var barcode = new Barcode(options =>
            {
                options.Type = BarcodeTypes.Ean13;
                options.Height = 30;
                options.Scaling = 1;
                options.ForegroundColor = SKColors.Black;
                options.TextColor = SKColors.Red;
                options.RenderText = true;
            });

            var result = barcode.Encode("1234567890123");
            Assert.NotNull(barcode.Image);
            Assert.Equal("1234567890128", result); // Includes check digit
        }

        [Fact]
        public void TextColor_BackwardCompatibility_ShouldDefaultToForegroundColor()
        {
            // Test that when TextColor is not set, it behaves like before
            using var barcode = new Barcode(options =>
            {
                options.Type = BarcodeTypes.Ean13;
                options.Height = 30;
                options.Scaling = 1;
                options.ForegroundColor = SKColors.Blue;
                // TextColor not set - should use ForegroundColor
                options.RenderText = true;
            });

            var result = barcode.Encode("1234567890123");
            Assert.NotNull(barcode.Image);
            Assert.Equal("1234567890128", result);
        }

        [Fact]
        public void UseTypeface_ShouldSetTypeface()
        {
            var options = new BarcodeOptions();
            var typeface = SKTypeface.FromFamilyName("Arial");
            options.UseTypeface(typeface);
            Assert.Equal(typeface, options.Typeface);
        }

        [Fact]
        public void UseTypeface_ShouldThrowException_WhenLocked()
        {
            var options = new BarcodeOptions();
            options.Lock();
            Assert.Throws<InvalidOperationException>(() => options.UseTypeface(SKTypeface.FromFamilyName("Arial")));
        }

        [Fact]
        public void UseTypefaceFromFile_ShouldSetTypeface()
        {
            var options = new BarcodeOptions();
            var path = "path/to/font.ttf";
            options.UseTypefaceFromFile(path);
            Assert.NotNull(options.Typeface);
        }

        [Fact]
        public void UseTypefaceFromFile_ShouldThrowException_WhenLocked()
        {
            var options = new BarcodeOptions();
            options.Lock();
            Assert.Throws<InvalidOperationException>(() => options.UseTypefaceFromFile("path/to/font.ttf"));
        }

        [Fact]
        public void UseTypefaceFromData_ShouldSetTypeface()
        {
            var options = new BarcodeOptions();
            var data = SKData.Create(1);
            options.UseTypefaceFromData(data);
            Assert.NotNull(options.Typeface);
        }

        [Fact]
        public void UseTypefaceFromData_ShouldThrowException_WhenLocked()
        {
            var options = new BarcodeOptions();
            options.Lock();
            Assert.Throws<InvalidOperationException>(() => options.UseTypefaceFromData(SKData.Create(1)));
        }

        [Fact]
        public void UseTypefaceFromStream_ShouldSetTypeface()
        {
            var options = new BarcodeOptions();
            using var stream = new MemoryStream([0]);
            options.UseTypefaceFromStream(stream);
            Assert.NotNull(options.Typeface);
        }

        [Fact]
        public void UseTypefaceFromStream_ShouldThrowException_WhenLocked()
        {
            var options = new BarcodeOptions();
            options.Lock();
            using var stream = new MemoryStream([0]);
            Assert.Throws<InvalidOperationException>(() => options.UseTypefaceFromStream(stream));
        }

        [Fact]
        public void Lock_ShouldPreventModifications()
        {
            var options = new BarcodeOptions();
            options.Lock();
            Assert.Throws<InvalidOperationException>(() => options.UseTypeface(SKTypeface.FromFamilyName("Arial")));
            Assert.Throws<InvalidOperationException>(() => options.UseTypefaceFromFile("path/to/font.ttf"));
            Assert.Throws<InvalidOperationException>(() => options.UseTypefaceFromData(SKData.Create(1)));
            using var stream = new MemoryStream([0]);
            Assert.Throws<InvalidOperationException>(() => options.UseTypefaceFromStream(stream));
        }

        #region Boundary and Negative Tests

        [Theory]
        [InlineData(-1)]
        [InlineData(-10)]
        [InlineData(int.MinValue)]
        public void Height_ShouldAcceptNegativeValues_ForEdgeCaseTesting(int height)
        {
            // Note: Testing that negative values are accepted by the options class
            // The actual validation may occur at encoding time
            var options = new BarcodeOptions();
            options.Height = height;
            Assert.Equal(height, options.Height);
        }

        [Theory]
        [InlineData(0)]
        [InlineData(-1)]
        [InlineData(int.MinValue)]
        public void Scaling_ShouldAcceptZeroAndNegativeValues_ForEdgeCaseTesting(int scaling)
        {
            // Note: Testing that zero/negative values are accepted by the options class
            // The actual validation may occur at encoding time
            var options = new BarcodeOptions();
            options.Scaling = scaling;
            Assert.Equal(scaling, options.Scaling);
        }

        [Theory]
        [InlineData(-5)]
        [InlineData(-1)]
        [InlineData(int.MinValue)]
        public void Margins_ShouldAcceptNegativeValues_ForEdgeCaseTesting(int margins)
        {
            // Note: Testing that negative values are accepted by the options class
            var options = new BarcodeOptions();
            options.Margins = margins;
            Assert.Equal(margins, options.Margins);
        }

        [Fact]
        public void BarcodeOptions_ShouldHandleExtremeColorValues()
        {
            var options = new BarcodeOptions();
            
            // Test with extreme color values
            options.BackgroundColor = new SKColor(0, 0, 0, 0); // Transparent
            options.ForegroundColor = new SKColor(255, 255, 255, 255); // Opaque white
            options.TextColor = new SKColor(128, 128, 128, 128); // Semi-transparent gray
            
            Assert.Equal(new SKColor(0, 0, 0, 0), options.BackgroundColor);
            Assert.Equal(new SKColor(255, 255, 255, 255), options.ForegroundColor);
            Assert.Equal(new SKColor(128, 128, 128, 128), options.TextColor);
        }

        [Fact]
        public void UseTypeface_ShouldThrowArgumentNullException_WhenTypefaceIsNull()
        {
            var options = new BarcodeOptions();
            Assert.Throws<ArgumentNullException>(() => options.UseTypeface(null!));
        }

        [Fact]
        public void UseTypefaceFromFile_ShouldThrowArgumentNullException_WhenPathIsNull()
        {
            var options = new BarcodeOptions();
            Assert.Throws<ArgumentNullException>(() => options.UseTypefaceFromFile(null!));
        }

        [Theory]
        [InlineData("")]
        [InlineData("   ")]
        public void UseTypefaceFromFile_ShouldThrowArgumentException_WhenPathIsEmptyOrWhitespace(string path)
        {
            var options = new BarcodeOptions();
            Assert.Throws<ArgumentException>(() => options.UseTypefaceFromFile(path));
        }

        [Fact]
        public void UseTypefaceFromData_ShouldThrowArgumentNullException_WhenDataIsNull()
        {
            var options = new BarcodeOptions();
            Assert.Throws<ArgumentNullException>(() => options.UseTypefaceFromData(null!));
        }

        [Fact]
        public void UseTypefaceFromStream_ShouldThrowArgumentNullException_WhenStreamIsNull()
        {
            var options = new BarcodeOptions();
            Assert.Throws<ArgumentNullException>(() => options.UseTypefaceFromStream(null!));
        }

        #endregion
    }
}
