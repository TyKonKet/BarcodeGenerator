using System;
using TyKonKet.BarcodeGenerator.Encoders;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests.Encoders
{
    /// <summary>
    /// Contains unit tests for the <see cref="Ean13Encoder"/> class.
    /// Tests barcode formatting, validation, encoding, and error handling for EAN-13 barcodes.
    /// </summary>
    public class Ean13EncoderTests
    {
        [Theory]
        [InlineData("9781234567897", "9781234567897")]
        [InlineData("978123456789", "9781234567897")]
        [InlineData("123456789", "0001234567895")]
        [InlineData("9781234567897532", "9781234567897")]
        public void FormatBarcode_ShouldReturnExpectedFormattedBarcode(string input, string expected)
        {
            Assert.Equal(expected, Ean13Encoder.FormatBarcode(input));
        }

        [Theory]
        [InlineData("6461524a")]
        [InlineData("6461A524")]
        [InlineData("646-1524")]
        [InlineData("64.61524")]
        public void ValidateCharset_ShouldThrowFormatException_ForInvalidCharset(string barcode)
        {
            Assert.Throws<FormatException>(() => { new Ean13Encoder().EnsureValidCharset(barcode); });
        }

        [Theory]
        [InlineData("90361012")]
        [InlineData("9781234567897")]
        [InlineData("978123456789")]
        [InlineData("978123456786")]
        public void ValidateCharset_ShouldReturnTrue_ForValidCharset(string barcode)
        {
            Assert.True(new Ean13Encoder().EnsureValidCharset(barcode));
        }

        [Theory]
        [InlineData("9780201379624", "10101110110001001010011100100110100111001100101010100001010001001110100101000011011001011100101")]
        [InlineData("2837491746340", "10101101110111101001000100111010001011011001101010100010010111001010000100001010111001110010101")]
        [InlineData("8829647458294", "10101101110011011000101100001010011101011101101010101110010011101001000110110011101001011100101")]
        [InlineData("1234567891231", "10100100110111101001110101100010000101001000101010100100011101001100110110110010000101100110101")]
        [InlineData("7352837294767", "10101111010111001001001100010010111101001000101010110110011101001011100100010010100001000100101")]
        public void EncodeBars_ShouldReturnExpectedEncodedBars(string input, string expected)
        {
            Assert.Equal(expected, Ean13Encoder.EncodeBars(input));
        }

        #region Boundary and Negative Tests

        [Fact]
        public void FormatBarcode_ShouldThrowArgumentNullException_WhenInputIsNull()
        {
            Assert.Throws<ArgumentNullException>(() => Ean13Encoder.FormatBarcode(null!));
        }

        [Theory]
        [InlineData("")]
        [InlineData("   ")]
        public void FormatBarcode_ShouldThrowArgumentException_WhenInputIsEmptyOrWhitespace(string input)
        {
            Assert.Throws<ArgumentException>(() => Ean13Encoder.FormatBarcode(input));
        }

        [Theory]
        [InlineData("abc")]
        [InlineData("12a456")]
        [InlineData("!@#$%")]
        [InlineData("123-456")]
        [InlineData("123.456.789")]
        public void ValidateCharset_ShouldThrowFormatException_ForVariousInvalidInputs(string barcode)
        {
            Assert.Throws<FormatException>(() => new Ean13Encoder().EnsureValidCharset(barcode));
        }

        [Theory]
        [InlineData("0")]
        [InlineData("12")]
        [InlineData("123")]
        [InlineData("1234")]
        [InlineData("12345")]
        [InlineData("123456")]
        [InlineData("1234567")]
        [InlineData("12345678")]
        [InlineData("123456789")]
        [InlineData("1234567890")]
        [InlineData("12345678901")]
        [InlineData("123456789012")]
        [InlineData("1234567890123")]
        public void FormatBarcode_ShouldHandleVariousLengths(string input)
        {
            // Should not throw for numeric inputs of various lengths
            var result = Ean13Encoder.FormatBarcode(input);
            
            // Result should always be 13 digits
            Assert.Equal(13, result.Length);
            Assert.All(result, c => Assert.True(char.IsDigit(c)));
        }

        [Theory]
        [InlineData("0000000000000")]
        [InlineData("9999999999999")]
        [InlineData("1111111111111")]
        public void FormatBarcode_ShouldHandleRepeatingDigits(string input)
        {
            var result = Ean13Encoder.FormatBarcode(input);
            Assert.Equal(13, result.Length);
            Assert.All(result, c => Assert.True(char.IsDigit(c)));
        }

        [Fact]
        public void EncodeBars_ShouldThrowArgumentNullException_WhenInputIsNull()
        {
            Assert.Throws<ArgumentNullException>(() => Ean13Encoder.EncodeBars(null!));
        }

        [Theory]
        [InlineData("")]
        [InlineData("123456789012")] // 12 digits instead of 13
        [InlineData("12345678901234")] // 14 digits instead of 13
        public void EncodeBars_ShouldThrowArgumentException_ForInvalidLength(string input)
        {
            Assert.Throws<ArgumentException>(() => Ean13Encoder.EncodeBars(input));
        }

        [Fact]
        public void Constructor_ShouldCreateInstanceWithoutException()
        {
            // Test that the encoder can be instantiated
            var encoder = new Ean13Encoder();
            Assert.NotNull(encoder);
        }

        #endregion
    }
}
