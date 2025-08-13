using System;
using TyKonKet.BarcodeGenerator.Encoders;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests.Encoders
{
    public class UpcaEncoderTests
    {
        [Theory]
        [InlineData("978123456786", "978123456786")]
        [InlineData("97812345678", "978123456786")]
        [InlineData("12345678", "000123456784")]
        [InlineData("97812345678975", "978123456786")]
        public void FormatBarcode_ShouldReturnExpectedFormattedBarcode(string input, string expected)
        {
            Assert.Equal(expected, UpcaEncoder.FormatBarcode(input));
        }

        [Theory]
        [InlineData("6461524a")]
        [InlineData("6461A524")]
        [InlineData("646-1524")]
        [InlineData("64.61524")]
        public void ValidateCharset_ShouldThrowFormatException_ForInvalidCharset(string barcode)
        {
            Assert.Throws<FormatException>(() => { new UpcaEncoder().EnsureValidCharset(barcode); });
        }

        [Theory]
        [InlineData("90361012")]
        [InlineData("9781234567897")]
        [InlineData("978123456789")]
        [InlineData("978123456786")]
        public void ValidateCharset_ShouldReturnTrue_ForValidCharset(string barcode)
        {
            Assert.True(new UpcaEncoder().EnsureValidCharset(barcode));
        }

        [Theory]
        [InlineData("725272730706", "10101110110010011011000100100110111011001001101010100010010000101110010100010011100101010000101")]
        [InlineData("827364192833", "10101101110010011011101101111010101111010001101010110011011101001101100100100010000101000010101")]
        [InlineData("192748273645", "10100110010001011001001101110110100011011011101010110110010001001000010101000010111001001110101")]
        [InlineData("112233445562", "10100110010011001001001100100110111101011110101010101110010111001001110100111010100001101100101")]
        [InlineData("998877665548", "10100010110001011011011101101110111011011101101010101000010100001001110100111010111001001000101")]
        public void EncodeBars_ShouldReturnExpectedEncodedBars(string input, string expected)
        {
            Assert.Equal(expected, UpcaEncoder.EncodeBars(input));
        }
    }
}
