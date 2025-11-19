using System;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests
{
    public class BarcodeValidatorTests
    {
        [Theory]
        [InlineData("123456789012", BarcodeTypes.Ean13, "1234567890128")]
        [InlineData("1234567890128", BarcodeTypes.Ean13, "1234567890128")]
        [InlineData("978014300723", BarcodeTypes.Isbn13, "9780143007234")]
        [InlineData("9780143007234", BarcodeTypes.Isbn13, "9780143007234")]
        [InlineData("1234567", BarcodeTypes.Ean8, "12345670")]
        [InlineData("12345670", BarcodeTypes.Ean8, "12345670")]
        [InlineData("12345678905", BarcodeTypes.Upca, "123456789050")]
        [InlineData("012345678905", BarcodeTypes.Upca, "012345678905")]
        [InlineData("01234565", BarcodeTypes.Upce, "01234565")]
        [InlineData("0123456", BarcodeTypes.Upce, "01234565")]
        public void Validate_ShouldReturnValidResult_ForValidBarcodes(string input, BarcodeTypes type, string expected)
        {
            var result = BarcodeValidator.Validate(input, type);

            Assert.True(result.IsValid);
            Assert.Equal(expected, result.ValidatedBarcode);
            Assert.Empty(result.Errors);
            Assert.Equal(type, result.Type);
        }

        [Theory]
        [InlineData("ABC-1234-ABC", BarcodeTypes.Code93, "ABC-1234-ABCDX")]
        [InlineData("92736182345", BarcodeTypes.Code93, "92736182345%/")]
        [InlineData("ANDJEOW918273", BarcodeTypes.Code93, "ANDJEOW918273W+")]
        public void Validate_ShouldReturnValidResult_ForCode93Barcodes(string input, BarcodeTypes type, string expected)
        {
            var result = BarcodeValidator.Validate(input, type);

            Assert.True(result.IsValid);
            Assert.Equal(expected, result.ValidatedBarcode);
            Assert.Empty(result.Errors);
            Assert.Equal(type, result.Type);
        }

        [Theory]
        [InlineData("ABC-123", BarcodeTypes.Code39, "ABC-123")]
        [InlineData("HELLO WORLD", BarcodeTypes.Code39, "HELLO WORLD")]
        [InlineData("abc-123", BarcodeTypes.Code39, "ABC-123")]
        public void Validate_ShouldReturnValidResult_ForCode39Barcodes(string input, BarcodeTypes type, string expected)
        {
            var result = BarcodeValidator.Validate(input, type);

            Assert.True(result.IsValid);
            Assert.Equal(expected, result.ValidatedBarcode);
            Assert.Empty(result.Errors);
            Assert.Equal(type, result.Type);
        }

        [Theory]
        [InlineData("ABC123", BarcodeTypes.Code128, "ABC123")]
        [InlineData("Hello World!", BarcodeTypes.Code128, "Hello World!")]
        public void Validate_ShouldReturnValidResult_ForCode128Barcodes(string input, BarcodeTypes type, string expected)
        {
            var result = BarcodeValidator.Validate(input, type);

            Assert.True(result.IsValid);
            Assert.Equal(expected, result.ValidatedBarcode);
            Assert.Empty(result.Errors);
            Assert.Equal(type, result.Type);
        }

        [Theory]
        [InlineData("A123456A", BarcodeTypes.Codabar, "A123456A")]
        [InlineData("a123456a", BarcodeTypes.Codabar, "A123456A")]
        [InlineData("B1234B", BarcodeTypes.Codabar, "B1234B")]
        public void Validate_ShouldReturnValidResult_ForCodabarBarcodes(string input, BarcodeTypes type, string expected)
        {
            var result = BarcodeValidator.Validate(input, type);

            Assert.True(result.IsValid);
            Assert.Equal(expected, result.ValidatedBarcode);
            Assert.Empty(result.Errors);
            Assert.Equal(type, result.Type);
        }

        [Theory]
        [InlineData("ABC123", BarcodeTypes.Ean13)]
        [InlineData("12345ABCDE", BarcodeTypes.Ean8)]
        [InlineData("NOTANUMBER", BarcodeTypes.Upca)]
        [InlineData("INVALID", BarcodeTypes.Upce)]
        public void Validate_ShouldReturnInvalidResult_ForInvalidCharset(string input, BarcodeTypes type)
        {
            var result = BarcodeValidator.Validate(input, type);

            Assert.False(result.IsValid);
            Assert.Null(result.ValidatedBarcode);
            Assert.NotEmpty(result.Errors);
            Assert.Equal(type, result.Type);
        }

        [Theory]
        [InlineData("ABC-1234-aBC", BarcodeTypes.Code93)]
        [InlineData("$VARNAME PHP?", BarcodeTypes.Code39)]
        public void Validate_ShouldReturnInvalidResult_ForInvalidCode39And93Charset(string input, BarcodeTypes type)
        {
            var result = BarcodeValidator.Validate(input, type);

            Assert.False(result.IsValid);
            Assert.Null(result.ValidatedBarcode);
            Assert.NotEmpty(result.Errors);
            Assert.Equal(type, result.Type);
        }

        [Theory]
        [InlineData("879014300723", BarcodeTypes.Isbn13)]
        [InlineData("8780143007234", BarcodeTypes.Isbn13)]
        [InlineData("123014300723", BarcodeTypes.Isbn13)]
        public void Validate_ShouldReturnInvalidResult_ForInvalidIsbn13Prefix(string input, BarcodeTypes type)
        {
            var result = BarcodeValidator.Validate(input, type);

            Assert.False(result.IsValid);
            Assert.Null(result.ValidatedBarcode);
            Assert.NotEmpty(result.Errors);
            Assert.Equal(type, result.Type);
            Assert.Contains("prefix", result.Errors[0], StringComparison.OrdinalIgnoreCase);
        }

        [Fact]
        public void Validate_ShouldThrowArgumentNullException_ForNullBarcode()
        {
            Assert.Throws<ArgumentNullException>(() => BarcodeValidator.Validate(null!, BarcodeTypes.Ean13));
        }

        [Theory]
        [InlineData("")]
        [InlineData("   ")]
        public void Validate_ShouldHandleEmptyOrWhitespaceInput(string input)
        {
            var result = BarcodeValidator.Validate(input, BarcodeTypes.Ean13);

            Assert.False(result.IsValid);
            Assert.Null(result.ValidatedBarcode);
            Assert.NotEmpty(result.Errors);
        }

        [Theory]
        [InlineData("ABC123", BarcodeTypes.Ean13)] // Should suggest Code39, Code93, Code128
        [InlineData("123456", BarcodeTypes.Ean13)] // Should suggest numeric types like Ean8, Upca, etc.
        public void Validate_ShouldProvideSuggestedTypes_WhenValidationFails(string input, BarcodeTypes type)
        {
            var result = BarcodeValidator.Validate(input, type, includeSuggestions: true);

            Assert.False(result.IsValid);
            Assert.NotNull(result.SuggestedTypes);
            // Should have at least one suggestion
            Assert.NotEmpty(result.SuggestedTypes);
            // Should not suggest the failed type
            Assert.DoesNotContain(type, result.SuggestedTypes);
        }

        [Fact]
        public void Validate_ShouldSuggestCode128_ForAlphanumericInput()
        {
            var result = BarcodeValidator.Validate("ABC123", BarcodeTypes.Ean13, includeSuggestions: true);

            Assert.False(result.IsValid);
            Assert.Contains(BarcodeTypes.Code128, result.SuggestedTypes);
        }

        [Fact]
        public void Validate_ShouldNotHaveSuggestedTypes_WhenValidationSucceeds()
        {
            var result = BarcodeValidator.Validate("123456789012", BarcodeTypes.Ean13, includeSuggestions: true);

            Assert.True(result.IsValid);
            Assert.Empty(result.SuggestedTypes);
        }

        [Fact]
        public void Validate_ShouldSuggestNumericTypes_ForNumericInput()
        {
            // Input that's numeric but fails for Code39
            var result = BarcodeValidator.Validate("123456", BarcodeTypes.Code39, includeSuggestions: true);

            Assert.True(result.IsValid); // Code39 accepts digits
            // But let's test with a pure numeric that might fail length checks
            result = BarcodeValidator.Validate("12", BarcodeTypes.Ean13, includeSuggestions: true);

            Assert.False(result.IsValid);
            // Should suggest other numeric types
            var hasNumericSuggestion = result.SuggestedTypes.Count > 0;
            Assert.True(hasNumericSuggestion);
        }

        [Fact]
        public void Validate_ShouldNotProvideSuggestions_WhenNotRequested()
        {
            var result = BarcodeValidator.Validate("ABC123", BarcodeTypes.Ean13);

            Assert.False(result.IsValid);
            Assert.Empty(result.SuggestedTypes);
        }

        [Fact]
        public void Validate_ShouldDefaultToNoSuggestions_ForPerformance()
        {
            // Default behavior should not compute suggestions
            var result = BarcodeValidator.Validate("INVALID", BarcodeTypes.Upca);

            Assert.False(result.IsValid);
            Assert.Empty(result.SuggestedTypes);
        }
    }
}
