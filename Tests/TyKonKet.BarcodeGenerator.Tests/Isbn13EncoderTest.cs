using System;
using TyKonKet.BarcodeGenerator.Encoders;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests
{
    public class Isbn13EncoderTest
    {
        [Theory]
        [InlineData("9781234567897", "978123456789")]
        [InlineData("978123456789", "978123456789")]
        [InlineData("123456789", "978123456789")]
        [InlineData("9781234567897532", "978123456789")]
        [InlineData("34567897532", "978345678975")]
        [InlineData("567894567897532", "978567894567")]
        public void Isbn13Validate_ShouldReturnExpectedResult(string input, string expected)
        {
            Assert.Equal(expected, Isbn13Encoder.FormatBarcode(input));
        }

        [Theory]
        [InlineData("6461524a")]
        [InlineData("6461A524")]
        [InlineData("646-1524")]
        [InlineData("64.61524")]
        public void ValidateCharset_ShouldThrowFormatException_ForInvalidCharset(string barcode)
        {
            Assert.Throws<FormatException>(() => { new Isbn13Encoder().ValidateCharset(barcode); });
        }

        [Theory]
        [InlineData("90361012")]
        [InlineData("9781234567897")]
        [InlineData("978123456789")]
        [InlineData("978123456786")]
        public void ValidateCharset_ShouldReturnTrue_ForValidCharset(string barcode)
        {
            Assert.True(new Isbn13Encoder().ValidateCharset(barcode));
        }
    }
}
