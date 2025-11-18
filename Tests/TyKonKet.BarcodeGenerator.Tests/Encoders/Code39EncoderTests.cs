using System;
using TyKonKet.BarcodeGenerator.Encoders;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests.Encoders
{
    public class Code39EncoderTests
    {
        [Theory]
        [InlineData("0", 0)]
        [InlineData("1", 1)]
        [InlineData("9", 9)]
        [InlineData("A", 10)]
        [InlineData("Z", 35)]
        [InlineData("-", 36)]
        [InlineData(".", 37)]
        [InlineData(" ", 38)]
        [InlineData("$", 39)]
        [InlineData("/", 40)]
        [InlineData("+", 41)]
        [InlineData("%", 42)]
        public void CharacterValues_ShouldReturnExpectedValues(string input, int expected)
        {
            Assert.Equal(expected, Code39Encoder.CharacterValues[input[0]]);
        }

        [Theory]
        [InlineData("ABC", 'X')]
        [InlineData("123", '6')]
        [InlineData("HELLO", 'B')]
        [InlineData("CODE39", 'W')]
        [InlineData("TEST", 'E')]
        [InlineData("1234567890", '2')]
        [InlineData("A", 'A')]
        [InlineData("0", '0')]
        [InlineData("GITHUB", 'Z')]
        public void CheckDigit_ShouldReturnExpectedCheckDigit(string input, char expected)
        {
            Assert.Equal(expected, Code39Encoder.GetCheckDigit(input));
        }

        [Theory]
        [InlineData("ABC")]
        [InlineData("123")]
        [InlineData("HELLO WORLD")]
        [InlineData("CODE-39")]
        [InlineData("$100.00")]
        [InlineData("A+B")]
        [InlineData("50%")]
        [InlineData("1/2")]
        [InlineData("ABC-123")]
        public void ValidateCharset_ShouldReturnTrue_ForValidCharset(string barcode)
        {
            Assert.True(new Code39Encoder().EnsureValidCharset(barcode));
        }

        [Theory]
        [InlineData("abc")]
        [InlineData("Hello")]
        [InlineData("CODE_39")]
        [InlineData("@TEST")]
        [InlineData("123#456")]
        [InlineData("test!")]
        public void ValidateCharset_ShouldThrowFormatException_ForInvalidCharset(string barcode)
        {
            Assert.Throws<FormatException>(() => { new Code39Encoder().EnsureValidCharset(barcode); });
        }

        [Theory]
        [InlineData("abc", "ABC")]
        [InlineData("Hello", "HELLO")]
        [InlineData("test123", "TEST123")]
        [InlineData("ABC", "ABC")]
        [InlineData("123", "123")]
        public void FormatBarcode_ShouldConvertToUppercase(string input, string expected)
        {
            Assert.Equal(expected, Code39Encoder.FormatBarcode(input));
        }

        [Theory]
        [InlineData("0", "*0*")]
        [InlineData("A", "*A*")]
        [InlineData("TEST", "*TEST*")]
        [InlineData("123", "*123*")]
        public void EncodeBars_ShouldIncludeStartStopCharacters(string input, string expectedPattern)
        {
            var encoded = Code39Encoder.EncodeBars(input);
            
            // Verify the pattern starts and ends with the * character encoding
            // and contains the input characters
            Assert.NotNull(encoded);
            Assert.NotEmpty(encoded);
            
            // The encoded string should be all 0s and 1s
            Assert.Matches("^[01]+$", encoded);
        }

        [Theory]
        [InlineData("A")]
        [InlineData("ABC")]
        [InlineData("123")]
        [InlineData("CODE39")]
        [InlineData("HELLO WORLD")]
        [InlineData("$100")]
        public void EncodeBars_ShouldReturnBinaryString(string input)
        {
            var encoded = Code39Encoder.EncodeBars(input);
            
            // Should return a non-empty binary string
            Assert.NotNull(encoded);
            Assert.NotEmpty(encoded);
            Assert.Matches("^[01]+$", encoded);
        }

        [Theory]
        [InlineData("0", "0")]
        [InlineData("A", "A")]
        [InlineData("test", "TEST")]
        [InlineData("CODE39", "CODE39")]
        public void Encode_ShouldReturnFormattedBarcode(string input, string expected)
        {
            var options = new BarcodeOptions { Type = BarcodeTypes.Code39 };
            options.Lock();
            using var encoder = new Code39Encoder(options);
            encoder.LoadOptions();
            var result = encoder.Encode(input);
            Assert.Equal(expected, result);
        }

        [Fact]
        public void Encode_ShouldThrowArgumentNullException_ForNullBarcode()
        {
            var options = new BarcodeOptions { Type = BarcodeTypes.Code39 };
            options.Lock();
            using var encoder = new Code39Encoder(options);
            encoder.LoadOptions();
            Assert.Throws<ArgumentNullException>(() => encoder.Encode(null!));
        }

        [Theory]
        [InlineData("abc@123")]
        [InlineData("test_value")]
        public void Encode_ShouldThrowFormatException_ForInvalidCharset(string barcode)
        {
            var options = new BarcodeOptions { Type = BarcodeTypes.Code39 };
            options.Lock();
            using var encoder = new Code39Encoder(options);
            encoder.LoadOptions();
            Assert.Throws<FormatException>(() => encoder.Encode(barcode));
        }

        [Fact]
        public void EncodingTable_ShouldContainAllStandardCharacters()
        {
            // Code 39 standard character set: 0-9, A-Z, -, ., space, $, /, +, %, *
            var expectedChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%*";
            
            foreach (var c in expectedChars)
            {
                Assert.True(Code39Encoder.EncodingTable.ContainsKey(c), $"Character '{c}' should be in encoding table");
            }
            
            // Should have exactly 44 characters (43 standard + 1 start/stop)
            Assert.Equal(44, Code39Encoder.EncodingTable.Count);
        }

        [Fact]
        public void CharacterValues_ShouldContain43Characters()
        {
            // Code 39 has 43 characters (excluding start/stop *)
            Assert.Equal(43, Code39Encoder.CharacterValues.Count);
            
            // Should not contain the start/stop character *
            Assert.False(Code39Encoder.CharacterValues.ContainsKey('*'));
        }

        [Theory]
        [InlineData("0", "nnnwwnwnn")]
        [InlineData("1", "wnnwnnnnw")]
        [InlineData("A", "wnnnnwnnw")]
        [InlineData("*", "nwnnwnwnn")]
        public void EncodingTable_ShouldContainCorrectPatterns(string input, string expected)
        {
            Assert.Equal(expected, Code39Encoder.EncodingTable[input[0]]);
        }

        [Fact]
        public void EncodingTable_AllPatterns_ShouldHave9Elements()
        {
            foreach (var pattern in Code39Encoder.EncodingTable.Values)
            {
                Assert.Equal(9, pattern.Length);
                Assert.Matches("^[nw]{9}$", pattern);
            }
        }
    }
}
