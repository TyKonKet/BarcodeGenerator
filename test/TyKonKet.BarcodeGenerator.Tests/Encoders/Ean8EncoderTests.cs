using System;
using TyKonKet.BarcodeGenerator.Encoders;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests.Encoders
{
    public class Ean8EncoderTests
    {

        [Theory]
        [InlineData("90311017", "1010001011000110101111010011001010101100110111001011001101000100101")]
        [InlineData("28374121", "1010010011011011101111010111011010101011100110011011011001100110101")]
        [InlineData("81274635", "1010110111001100100100110111011010101011100101000010000101001110101")]
        [InlineData("83928345", "1010110111011110100010110010011010101001000100001010111001001110101")]
        [InlineData("12345670", "1010011001001001101111010100011010101001110101000010001001110010101")]
        public void EncodeBars_ShouldReturnExpectedEncodedString(string input, string expected)
        {
            Assert.Equal(expected, Ean8Encoder.EncodeBars(input));
        }

        [Theory]
        [InlineData("28384", "00283847")]
        [InlineData("9036101", "90361012")]
        [InlineData("90361012", "90361012")]
        [InlineData("90361012456", "90361012")]
        public void FormatBarcode_ShouldReturnFormattedBarcode(string input, string expected)
        {
            Assert.Equal(expected, Ean8Encoder.FormatBarcode(input));
        }

        [Theory]
        [InlineData("6461524a")]
        [InlineData("6461A524")]
        [InlineData("646-1524")]
        [InlineData("64.61524")]
        public void ValidateCharset_ShouldThrowFormatExceptionForInvalidCharset(string barcode)
        {
            Assert.Throws<FormatException>(() => { new Ean8Encoder().EnsureValidCharset(barcode); });
        }

        [Theory]
        [InlineData("90361012")]
        [InlineData("9781234567897")]
        [InlineData("978123456789")]
        [InlineData("978123456786")]
        public void ValidateCharset_ShouldReturnTrueForValidCharset(string barcode)
        {
            Assert.True(new Ean8Encoder().EnsureValidCharset(barcode));
        }
    }
}
