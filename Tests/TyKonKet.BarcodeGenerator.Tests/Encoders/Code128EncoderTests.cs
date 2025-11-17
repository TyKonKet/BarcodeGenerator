using System;
using System.Collections.Generic;
using TyKonKet.BarcodeGenerator.Encoders;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests.Encoders
{
    public class Code128EncoderTests
    {
        [Theory]
        [InlineData("ABC123")]
        [InlineData("Hello World")]
        [InlineData("12345678")]
        [InlineData("CODE128")]
        [InlineData("Test-123")]
        [InlineData("MIXED123abc")]
        public void ValidateCharset_ShouldReturnTrue_ForValidCharset(string barcode)
        {
            Assert.True(new Code128Encoder().EnsureValidCharset(barcode));
        }

        [Theory]
        [InlineData("Hello\u0200World")] // Contains non-ASCII character
        [InlineData("Test\u0300")] // Contains extended ASCII
        public void ValidateCharset_ShouldThrowFormatException_ForInvalidCharset(string barcode)
        {
            Assert.Throws<FormatException>(() => { new Code128Encoder().EnsureValidCharset(barcode); });
        }

        [Fact]
        public void EncodeData_ShouldEncodeNumericData_UsingCodeC()
        {
            var result = Code128Encoder.EncodeData("123456");
            
            // Should start with Code C (105)
            Assert.Equal(105, result[0]);
            
            // Should encode as pairs: 12, 34, 56
            Assert.Equal(12, result[1]);
            Assert.Equal(34, result[2]);
            Assert.Equal(56, result[3]);
        }

        [Fact]
        public void EncodeData_ShouldEncodeAlphanumericData_UsingCodeB()
        {
            var result = Code128Encoder.EncodeData("ABC");
            
            // Should start with Code B (104)
            Assert.Equal(104, result[0]);
            
            // 'A' in Code B is 33 (65-32)
            Assert.Equal(33, result[1]);
            // 'B' in Code B is 34 (66-32)
            Assert.Equal(34, result[2]);
            // 'C' in Code B is 35 (67-32)
            Assert.Equal(35, result[3]);
        }

        [Fact]
        public void EncodeData_ShouldSwitchBetweenCodeSets()
        {
            var result = Code128Encoder.EncodeData("AB1234CD");
            
            // Should start with Code B for letters
            Assert.Equal(104, result[0]);
            
            // 'A' and 'B'
            Assert.Equal(33, result[1]);
            Assert.Equal(34, result[2]);
            
            // Switch to Code C for digits (99)
            Assert.Equal(99, result[3]);
            
            // Encode 12 and 34 as pairs
            Assert.Equal(12, result[4]);
            Assert.Equal(34, result[5]);
            
            // Switch back to Code B for letters (100)
            Assert.Equal(100, result[6]);
            
            // 'C' and 'D'
            Assert.Equal(35, result[7]);
            Assert.Equal(36, result[8]);
        }

        [Fact]
        public void CalculateCheckDigit_ShouldReturnCorrectCheckDigit()
        {
            // Simple test: Start Code B (104) + 'A' (33)
            var encodedData = new List<int> { 104, 33 };
            var checkDigit = Code128Encoder.CalculateCheckDigit(encodedData);
            
            // Check digit = (104 * 1 + 33 * 1) % 103 = 137 % 103 = 34
            Assert.Equal(34, checkDigit);
        }

        [Fact]
        public void CalculateCheckDigit_ShouldHandleComplexData()
        {
            // Start Code C (105) + pairs 12, 34, 56
            var encodedData = new List<int> { 105, 12, 34, 56 };
            var checkDigit = Code128Encoder.CalculateCheckDigit(encodedData);
            
            // Check digit = (105 + 12*1 + 34*2 + 56*3) % 103
            // = (105 + 12 + 68 + 168) % 103
            // = 353 % 103 = 44
            Assert.Equal(44, checkDigit);
        }

        [Fact]
        public void EncodeBars_ShouldReturnCorrectPattern()
        {
            // Start Code B (104) + Stop (106)
            var encodedData = new List<int> { 104, 106 };
            var result = Code128Encoder.EncodeBars(encodedData);
            
            // Pattern for 104: "11010010000"
            // Pattern for 106: "1100011101011"
            var expected = "110100100001100011101011";
            
            Assert.Equal(expected, result);
        }

        [Theory]
        [InlineData("0123456789")]
        [InlineData("00112233")]
        [InlineData("987654")]
        public void EncodeData_ShouldOptimizeForCodeC_WhenStartingWithDigits(string data)
        {
            var result = Code128Encoder.EncodeData(data);
            
            // Should start with Code C (105) for numeric data
            Assert.Equal(105, result[0]);
        }

        [Theory]
        [InlineData("A")]
        [InlineData("Hello")]
        [InlineData("WORLD")]
        public void EncodeData_ShouldUseCodeB_ForAlphabeticData(string data)
        {
            var result = Code128Encoder.EncodeData(data);
            
            // Should start with Code B (104)
            Assert.Equal(104, result[0]);
        }

        [Fact]
        public void EncodeData_ShouldHandleEmptyString()
        {
            var result = Code128Encoder.EncodeData(string.Empty);
            
            // Should at least have a start code
            Assert.Single(result);
            Assert.Equal(104, result[0]); // Default to Code B
        }

        [Theory]
        [InlineData("ABC123")]
        [InlineData("12345678")]
        [InlineData("CODE128")]
        [InlineData("Test Data 123")]
        public void Encode_ShouldReturnOriginalBarcode(string barcode)
        {
            using var encoder = new Code128Encoder();
            encoder.LoadOptions();
            var result = encoder.Encode(barcode);
            
            Assert.Equal(barcode, result);
        }

        [Fact]
        public void Encode_ShouldThrowArgumentNullException_WhenBarcodeIsNull()
        {
            using var encoder = new Code128Encoder();
            encoder.LoadOptions();
            
            Assert.Throws<ArgumentNullException>(() => encoder.Encode(null!));
        }

        [Theory]
        [InlineData("123")]
        [InlineData("1234")]
        [InlineData("12345")]
        public void EncodeData_ShouldHandleOddNumberOfDigits(string data)
        {
            var result = Code128Encoder.EncodeData(data);
            
            // Should still be able to encode
            Assert.NotEmpty(result);
            
            // For data with less than 4 digits, might not start with Code C
            // Just ensure it encodes successfully
            Assert.True(result.Count > 0);
        }

        [Fact]
        public void EncodeData_ShouldHandleMixedCase()
        {
            var result = Code128Encoder.EncodeData("AbC123xYz");
            
            // Should successfully encode mixed case alphanumeric
            Assert.NotEmpty(result);
            
            // Should start with Code B for mixed case
            Assert.Equal(104, result[0]);
        }

        [Theory]
        [InlineData(" ")]
        [InlineData("  ")]
        [InlineData("A B C")]
        public void EncodeData_ShouldHandleSpaces(string data)
        {
            var result = Code128Encoder.EncodeData(data);
            
            // Should successfully encode spaces
            Assert.NotEmpty(result);
            
            // Spaces are in Code B (32-32 = 0)
            if (data == " ")
            {
                Assert.Equal(104, result[0]); // Code B
                Assert.Equal(0, result[1]); // Space character
            }
        }

        [Theory]
        [InlineData("!@#$%")]
        [InlineData("()*+")]
        [InlineData("[]{}")]
        public void EncodeData_ShouldHandleSpecialCharacters(string data)
        {
            var result = Code128Encoder.EncodeData(data);
            
            // Should successfully encode special characters
            Assert.NotEmpty(result);
            
            // Special characters are in Code B
            Assert.Equal(104, result[0]);
        }

        [Fact]
        public void EncodeBars_ShouldHandleAllStandardCodes()
        {
            // Test that all standard codes (0-106) can be encoded
            for (int i = 0; i <= 106; i++)
            {
                var encodedData = new List<int> { i };
                var result = Code128Encoder.EncodeBars(encodedData);
                
                // Each code should produce a non-empty pattern
                Assert.NotEmpty(result);
            }
        }

        [Theory]
        [InlineData("00")]
        [InlineData("01")]
        [InlineData("99")]
        public void EncodeData_ShouldHandleLeadingZeros(string data)
        {
            var result = Code128Encoder.EncodeData(data);
            
            // Should use Code C for pairs of digits
            Assert.Equal(105, result[0]);
            
            // Should encode the pair correctly
            int expectedValue = int.Parse(data, System.Globalization.CultureInfo.InvariantCulture);
            Assert.Equal(expectedValue, result[1]);
        }

        [Fact]
        public void EncodeData_ShouldMinimizeCodeSetSwitches()
        {
            var result = Code128Encoder.EncodeData("ABCD1234EFGH");
            
            // Should start with Code B for letters
            Assert.Equal(104, result[0]);
            
            // Count code set switches - should be minimal
            int switchCount = 0;
            for (int i = 1; i < result.Count; i++)
            {
                if (result[i] == 99 || result[i] == 100 || result[i] == 101)
                {
                    switchCount++;
                }
            }
            
            // Should switch to Code C for digits and back to Code B
            Assert.Equal(2, switchCount);
        }

        [Fact]
        public void EncodeData_ShouldHandleControlCharacters()
        {
            // Test with a control character (ASCII < 32)
            var data = "\u0001ABC"; // SOH (Start of Heading) + ABC
            var result = Code128Encoder.EncodeData(data);
            
            // Should start with Code A for control characters
            Assert.Equal(103, result[0]);
            
            // Should successfully encode
            Assert.NotEmpty(result);
        }

        [Theory]
        [InlineData("123")]
        [InlineData("1234567")]
        [InlineData("999999999")]
        public void EncodeData_ShouldHandleLongNumericStrings(string data)
        {
            var result = Code128Encoder.EncodeData(data);
            
            // Should start with Code C for numeric data
            Assert.Equal(105, result[0]);
            
            // Should successfully encode
            Assert.NotEmpty(result);
        }

        [Fact]
        public void EncodeData_ShouldHandleMixedControlAndPrintable()
        {
            // Mix of control and printable characters
            var data = "\u0001\u0002ABC";
            var result = Code128Encoder.EncodeData(data);
            
            // Should start with Code A
            Assert.Equal(103, result[0]);
            Assert.NotEmpty(result);
        }

        [Theory]
        [InlineData("A1B2C3")]
        [InlineData("X9Y8Z7")]
        public void EncodeData_ShouldHandleAlternatingAlphaNumeric(string data)
        {
            var result = Code128Encoder.EncodeData(data);
            
            // Should use Code B (not enough consecutive digits for Code C)
            Assert.Equal(104, result[0]);
            Assert.NotEmpty(result);
        }

        [Fact]
        public void EncodeData_ShouldHandleLongDigitSequence()
        {
            var data = "12345678901234567890";
            var result = Code128Encoder.EncodeData(data);
            
            // Should start with Code C
            Assert.Equal(105, result[0]);
            
            // Should encode all as pairs
            Assert.NotEmpty(result);
        }

        [Fact]
        public void CalculateCheckDigit_ShouldHandleEmptyList()
        {
            var encodedData = new List<int>();
            var checkDigit = Code128Encoder.CalculateCheckDigit(encodedData);
            
            Assert.Equal(0, checkDigit);
        }

        [Fact]
        public void EncodeBars_ShouldHandleEmptyList()
        {
            var encodedData = new List<int>();
            var result = Code128Encoder.EncodeBars(encodedData);
            
            Assert.Equal(string.Empty, result);
        }

        [Fact]
        public void EncodeBars_ShouldHandleSingleCode()
        {
            var encodedData = new List<int> { 0 };
            var result = Code128Encoder.EncodeBars(encodedData);
            
            // Pattern for code 0
            Assert.Equal("11011001100", result);
        }

        [Theory]
        [InlineData(0, "11011001100")]
        [InlineData(1, "11001101100")]
        [InlineData(50, "11000101110")]
        [InlineData(100, "10111101110")]
        public void EncodeBars_ShouldReturnCorrectPatternForSpecificCodes(int code, string expectedPattern)
        {
            var encodedData = new List<int> { code };
            var result = Code128Encoder.EncodeBars(encodedData);
            
            Assert.Equal(expectedPattern, result);
        }

        [Fact]
        public void EncodeData_ShouldHandleOddDigitsFollowedByLetters()
        {
            var data = "12ABC"; // 2 digits can use Code C
            var result = Code128Encoder.EncodeData(data);
            
            // Should start with Code C for the pair of digits
            Assert.Equal(105, result[0]);
            Assert.NotEmpty(result);
        }

        [Fact]
        public void Encode_ShouldCreateValidImage()
        {
            using var encoder = new Code128Encoder(new BarcodeOptions
            {
                Type = BarcodeTypes.Code128,
                Height = 50,
                Scaling = 2,
            });
            encoder.LoadOptions();
            
            var result = encoder.Encode("TEST123");
            
            Assert.Equal("TEST123", result);
            Assert.NotNull(encoder.Image);
        }
    }
}
