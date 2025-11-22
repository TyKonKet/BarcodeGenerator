using System;
using TyKonKet.BarcodeGenerator.Encoders;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests.Encoders
{
    public class Interleaved2of5EncoderTests
    {
        [Theory]
        [InlineData("12", '5')]
        [InlineData("1234", '2')]
        [InlineData("123456", '1')]
        [InlineData("12345678", '2')]
        [InlineData("00", '0')]
        [InlineData("99", '4')]
        [InlineData("135790", '5')]
        [InlineData("246802", '2')]
        public void CheckDigit_ShouldReturnExpectedCheckDigit(string input, char expected)
        {
            Assert.Equal(expected, Interleaved2of5Encoder.GetCheckDigit(input));
        }

        [Theory]
        [InlineData("12345678")]
        [InlineData("00000000")]
        [InlineData("99999999")]
        [InlineData("1234567890")]
        [InlineData("00")]
        [InlineData("135790")]
        public void ValidateCharset_ShouldReturnTrue_ForValidCharset(string barcode)
        {
            Assert.True(new Interleaved2of5Encoder().EnsureValidCharset(barcode));
        }

        [Theory]
        [InlineData("ABC123")]
        [InlineData("12-34")]
        [InlineData("12.34")]
        [InlineData("TEST")]
        [InlineData("12 34")]
        [InlineData("1234567a")]
        public void ValidateCharset_ShouldThrowFormatException_ForInvalidCharset(string barcode)
        {
            Assert.Throws<FormatException>(() => { new Interleaved2of5Encoder().EnsureValidCharset(barcode); });
        }

        [Theory]
        [InlineData("12", "10101101001010110011101")]
        [InlineData("00", "10101010110011001011101")]
        [InlineData("99", "10101011001011001011101")]
        public void EncodeBars_ShouldReturnExpectedPattern(string input, string expected)
        {
            Assert.Equal(expected, Interleaved2of5Encoder.EncodeBars(input));
        }

        [Fact]
        public void Encode_ShouldThrowArgumentNullException_WhenBarcodeIsNull()
        {
            var options = new BarcodeOptions { Type = BarcodeTypes.Interleaved2of5 };
            options.Lock();
            using var encoder = new Interleaved2of5Encoder(options);
            encoder.LoadOptions();
            Assert.Throws<ArgumentNullException>(() => encoder.Encode(null!));
        }

        [Theory]
        [InlineData("123")]
        [InlineData("12345")]
        [InlineData("1")]
        [InlineData("1234567")]
        public void Encode_ShouldThrowFormatException_ForOddLength(string barcode)
        {
            var options = new BarcodeOptions { Type = BarcodeTypes.Interleaved2of5 };
            options.Lock();
            using var encoder = new Interleaved2of5Encoder(options);
            encoder.LoadOptions();
            var ex = Assert.Throws<FormatException>(() => encoder.Encode(barcode));
            Assert.Contains("even-length", ex.Message);
        }

        [Theory]
        [InlineData("12345678")]
        [InlineData("00000000")]
        [InlineData("99999999")]
        [InlineData("1234567890123456")]
        public void Encode_ShouldReturnValidatedBarcode_ForEvenLengthInput(string barcode)
        {
            var options = new BarcodeOptions { Type = BarcodeTypes.Interleaved2of5 };
            options.Lock();
            using var encoder = new Interleaved2of5Encoder(options);
            encoder.LoadOptions();
            var result = encoder.Encode(barcode);
            Assert.Equal(barcode, result);
        }

        [Theory]
        [InlineData("12345678")]
        [InlineData("00000000")]
        [InlineData("135790")]
        public void Encode_ShouldGenerateImage_WhenValidBarcodeIsProvided(string barcode)
        {
            var options = new BarcodeOptions { Type = BarcodeTypes.Interleaved2of5 };
            options.Lock();
            using var encoder = new Interleaved2of5Encoder(options);
            encoder.LoadOptions();
            encoder.Encode(barcode);
            Assert.NotNull(encoder.Image);
        }
    }
}
