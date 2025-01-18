using SkiaSharp;
using System;
using System.IO;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests
{
    public class BarcodeOptionsTest
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
            Assert.True(options.RenderText);
            Assert.Equal(SKTypeface.Default, options.Typeface);
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
            using (var stream = new MemoryStream(new byte[] { 0 }))
            {
                options.UseTypefaceFromStream(stream);
                Assert.NotNull(options.Typeface);
            }
        }

        [Fact]
        public void UseTypefaceFromStream_ShouldThrowException_WhenLocked()
        {
            var options = new BarcodeOptions();
            options.Lock();
            using (var stream = new MemoryStream(new byte[] { 0 }))
            {
                Assert.Throws<InvalidOperationException>(() => options.UseTypefaceFromStream(stream));
            }
        }

        [Fact]
        public void Lock_ShouldPreventModifications()
        {
            var options = new BarcodeOptions();
            options.Lock();
            Assert.Throws<InvalidOperationException>(() => options.UseTypeface(SKTypeface.FromFamilyName("Arial")));
            Assert.Throws<InvalidOperationException>(() => options.UseTypefaceFromFile("path/to/font.ttf"));
            Assert.Throws<InvalidOperationException>(() => options.UseTypefaceFromData(SKData.Create(1)));
            using (var stream = new MemoryStream(new byte[] { 0 }))
            {
                Assert.Throws<InvalidOperationException>(() => options.UseTypefaceFromStream(stream));
            }
        }
    }
}
