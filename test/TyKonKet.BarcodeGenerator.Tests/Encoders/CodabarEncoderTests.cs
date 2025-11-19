using System;
using TyKonKet.BarcodeGenerator.Encoders;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests.Encoders
{
    public class CodabarEncoderTests
    {
        [Theory]
        [InlineData("A123456A")]
        [InlineData("B123456B")]
        [InlineData("C123456C")]
        [InlineData("D123456D")]
        [InlineData("A12345678901234567890A")]
        [InlineData("A0000A")]
        [InlineData("A9999A")]
        [InlineData("A123-456B")]
        [InlineData("A$10.50C")]
        [InlineData("A1/2D")]
        [InlineData("A1+2B")]
        [InlineData("A1:2C")]
        public void ValidateCharset_ShouldReturnTrue_ForValidCharset(string barcode)
        {
            Assert.True(new CodabarEncoder().EnsureValidCharset(barcode));
        }

        [Theory]
        [InlineData("123456")] // No start/stop characters
        [InlineData("A123456")] // Missing stop character
        [InlineData("123456A")] // Missing start character
        [InlineData("E123456E")] // Invalid start/stop character E
        [InlineData("A123ABC456A")] // Contains invalid letters in data
        [InlineData("A123@456A")] // Contains invalid symbol @
        [InlineData("A123#456A")] // Contains invalid symbol #
        [InlineData("A123!456A")] // Contains invalid symbol !
        [InlineData("A ABC A")] // Contains space (not allowed in Codabar data)
        public void ValidateCharset_ShouldThrowFormatException_ForInvalidCharset(string barcode)
        {
            Assert.Throws<FormatException>(() => { new CodabarEncoder().EnsureValidCharset(barcode); });
        }

        [Theory]
        [InlineData("a123456a", "A123456A")]
        [InlineData("b123456b", "B123456B")]
        [InlineData("c123456c", "C123456C")]
        [InlineData("d123456d", "D123456D")]
        [InlineData("A123456A", "A123456A")]
        public void FormatBarcode_ShouldConvertToUppercase(string input, string expected)
        {
            Assert.Equal(expected, CodabarEncoder.FormatBarcode(input));
        }

        [Theory]
        [InlineData("A0A")]
        [InlineData("B1B")]
        [InlineData("C123C")]
        [InlineData("D9999D")]
        public void EncodeBars_ShouldReturnBinaryString(string input)
        {
            var encoded = CodabarEncoder.EncodeBars(input);
            
            // Verify the encoded string is all 0s and 1s
            Assert.NotNull(encoded);
            Assert.NotEmpty(encoded);
            Assert.Matches("^[01]+$", encoded);
        }

        [Theory]
        [InlineData("A123A")]
        [InlineData("B456B")]
        [InlineData("C789C")]
        [InlineData("D000D")]
        public void EncodeBars_ShouldIncludeStartStopCharacters(string input)
        {
            var encoded = CodabarEncoder.EncodeBars(input);
            
            // Verify the pattern includes all characters
            Assert.NotNull(encoded);
            Assert.NotEmpty(encoded);
            
            // The encoded string should be all 0s and 1s
            Assert.Matches("^[01]+$", encoded);
        }

        [Fact]
        public void EncodingTable_ShouldContainAllValidCharacters()
        {
            // Digits 0-9
            for (char c = '0'; c <= '9'; c++)
            {
                Assert.True(CodabarEncoder.EncodingTable.ContainsKey(c), $"Encoding table should contain '{c}'");
            }

            // Special symbols
            Assert.True(CodabarEncoder.EncodingTable.ContainsKey('-'));
            Assert.True(CodabarEncoder.EncodingTable.ContainsKey('$'));
            Assert.True(CodabarEncoder.EncodingTable.ContainsKey(':'));
            Assert.True(CodabarEncoder.EncodingTable.ContainsKey('/'));
            Assert.True(CodabarEncoder.EncodingTable.ContainsKey('.'));
            Assert.True(CodabarEncoder.EncodingTable.ContainsKey('+'));

            // Start/stop characters
            Assert.True(CodabarEncoder.EncodingTable.ContainsKey('A'));
            Assert.True(CodabarEncoder.EncodingTable.ContainsKey('B'));
            Assert.True(CodabarEncoder.EncodingTable.ContainsKey('C'));
            Assert.True(CodabarEncoder.EncodingTable.ContainsKey('D'));
        }

        [Theory]
        [InlineData("A123456A")]
        [InlineData("B987654B")]
        [InlineData("C111111C")]
        [InlineData("D000000D")]
        public void Encode_ShouldReturnValidatedBarcode(string input)
        {
            var options = new BarcodeOptions { Type = BarcodeTypes.Codabar };
            options.Lock();
            using var encoder = new CodabarEncoder(options);
            encoder.LoadOptions();
            var result = encoder.Encode(input);
            Assert.Equal(input.ToUpper(System.Globalization.CultureInfo.CurrentCulture), result);
        }

        [Theory]
        [InlineData("a123456a")]
        [InlineData("b987654b")]
        public void Encode_ShouldConvertToUppercase(string input)
        {
            var options = new BarcodeOptions { Type = BarcodeTypes.Codabar };
            options.Lock();
            using var encoder = new CodabarEncoder(options);
            encoder.LoadOptions();
            var result = encoder.Encode(input);
            Assert.Equal(input.ToUpper(System.Globalization.CultureInfo.CurrentCulture), result);
        }

        [Fact]
        public void Encode_ShouldThrowArgumentNullException_WhenBarcodeIsNull()
        {
            var options = new BarcodeOptions { Type = BarcodeTypes.Codabar };
            options.Lock();
            using var encoder = new CodabarEncoder(options);
            encoder.LoadOptions();
            Assert.Throws<ArgumentNullException>(() => encoder.Encode(null!));
        }

        [Theory]
        [InlineData("123456")] // No start/stop
        [InlineData("A123ABC456A")] // Invalid letters
        public void Encode_ShouldThrowFormatException_ForInvalidCharset(string barcode)
        {
            var options = new BarcodeOptions { Type = BarcodeTypes.Codabar };
            options.Lock();
            using var encoder = new CodabarEncoder(options);
            encoder.LoadOptions();
            Assert.Throws<FormatException>(() => encoder.Encode(barcode));
        }

        [Theory]
        [InlineData("A0A")]
        [InlineData("B1234567890B")]
        [InlineData("C$10.50C")]
        [InlineData("D1-2+3:4/5D")]
        public void Encode_ShouldGenerateImageWithCorrectDimensions(string barcode)
        {
            var options = new BarcodeOptions
            {
                Type = BarcodeTypes.Codabar,
                Height = 30,
                Scaling = 2,
                Margins = 4,
            };
            options.Lock();

            using var encoder = new CodabarEncoder(options);
            encoder.LoadOptions();
            encoder.Encode(barcode);

            Assert.NotNull(encoder.Image);
            Assert.True(encoder.Image.Width > 0);
            Assert.True(encoder.Image.Height > 0);
        }

        [Fact]
        public void Encode_WithTextRendering_ShouldIncreaseImageHeight()
        {
            var barcode = "A123456A";

            var optionsWithoutText = new BarcodeOptions
            {
                Type = BarcodeTypes.Codabar,
                Height = 30,
                Scaling = 2,
                RenderText = false,
            };
            optionsWithoutText.Lock();

            var optionsWithText = new BarcodeOptions
            {
                Type = BarcodeTypes.Codabar,
                Height = 30,
                Scaling = 2,
                RenderText = true,
            };
            optionsWithText.Lock();

            using var encoderWithoutText = new CodabarEncoder(optionsWithoutText);
            encoderWithoutText.LoadOptions();
            encoderWithoutText.Encode(barcode);
            var heightWithoutText = encoderWithoutText.Image!.Height;

            using var encoderWithText = new CodabarEncoder(optionsWithText);
            encoderWithText.LoadOptions();
            encoderWithText.Encode(barcode);
            var heightWithText = encoderWithText.Image!.Height;

            Assert.True(heightWithText > heightWithoutText);
        }
    }
}
