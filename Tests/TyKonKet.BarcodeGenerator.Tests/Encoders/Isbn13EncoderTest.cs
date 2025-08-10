using System;
using TyKonKet.BarcodeGenerator.Encoders;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests.Encoders
{
    public class Isbn13EncoderTest
    {
        [Theory]
        [InlineData("9781234567897", "978123456789")]
        [InlineData("978123456789", "978123456789")]
        [InlineData("9781234567897532", "978123456789")]
        [InlineData("978345678975", "978345678975")]
        [InlineData("978567894567", "978567894567")]
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
            Assert.Throws<FormatException>(() => { new Isbn13Encoder().EnsureValidCharset(barcode); });
        }

        [Theory]
        [InlineData("90361012")]
        [InlineData("9781234567897")]
        [InlineData("978123456789")]
        [InlineData("978123456786")]
        public void ValidateCharset_ShouldReturnTrue_ForValidCharset(string barcode)
        {
            Assert.True(new Isbn13Encoder().EnsureValidCharset(barcode));
        }

        [Theory]
        [InlineData("123456789")]        // Missing prefix - too short
        [InlineData("12")]               // Very short input
        [InlineData("")]                 // Empty string
        [InlineData("977123456789")]     // Invalid prefix 977
        [InlineData("980123456789")]     // Invalid prefix 980
        [InlineData("876123456789")]     // Invalid prefix 876
        [InlineData("123123456789")]     // Invalid prefix 123
        [InlineData("abc123456789")]     // Non-numeric prefix
        [InlineData("97X123456789")]     // Invalid character in prefix
        public void FormatBarcode_ShouldThrowFormatException_ForInvalidPrefix(string barcode)
        {
            var exception = Assert.Throws<FormatException>(() => Isbn13Encoder.FormatBarcode(barcode));
            Assert.Equal("Invalid ISBN-13 prefix. Only '978' or '979' are allowed.", exception.Message);
        }
    }
}
