using System;
using TyKonKet.BarcodeGenerator.Encoders;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests.Encoders
{
    public class UpceEncoderTests
    {
        [Theory]
        [InlineData("0123456", "01234565")]
        [InlineData("123456", "01234565")]
        [InlineData("012345", "00123457")]
        [InlineData("0425261", "04252610")]
        [InlineData("04252610", "04252610")]
        [InlineData("042526109999", "04252610")]
        public void FormatBarcode_ShouldReturnExpectedFormattedBarcode(string input, string expected)
        {
            Assert.Equal(expected, UpceEncoder.FormatBarcode(input));
        }

        [Theory]
        [InlineData("6461524a")]
        [InlineData("6461A524")]
        [InlineData("646-1524")]
        [InlineData("64.61524")]
        public void ValidateCharset_ShouldThrowFormatException_ForInvalidCharset(string barcode)
        {
            Assert.Throws<FormatException>(() => { new UpceEncoder().EnsureValidCharset(barcode); });
        }

        [Theory]
        [InlineData("0123456")]
        [InlineData("01234565")]
        [InlineData("0425261")]
        [InlineData("04252610")]
        public void ValidateCharset_ShouldReturnTrue_ForValidCharset(string barcode)
        {
            Assert.True(new UpceEncoder().EnsureValidCharset(barcode));
        }

        [Theory]
        [InlineData("01234565", "101011001100100110111101001110101110010101111010101")]
        [InlineData("04252610", "101001110100110110111001001001101011110011001010101")]
        [InlineData("12345670", "101001001101111010100011011100100001010010001010101")]
        public void EncodeBars_ShouldReturnExpectedEncodedBars(string input, string expected)
        {
            Assert.Equal(expected, UpceEncoder.EncodeBars(input));
        }
    }
}
