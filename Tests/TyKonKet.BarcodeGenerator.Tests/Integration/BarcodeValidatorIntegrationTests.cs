using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests.Integration
{
    /// <summary>
    /// Integration tests that verify the BarcodeValidator works correctly with the Barcode encoder.
    /// These tests ensure that validation and encoding produce consistent results.
    /// </summary>
    public class BarcodeValidatorIntegrationTests
    {
        [Theory]
        [InlineData("123456789012", BarcodeTypes.Ean13)]
        [InlineData("1234567", BarcodeTypes.Ean8)]
        [InlineData("12345678905", BarcodeTypes.Upca)]
        [InlineData("0123456", BarcodeTypes.Upce)]
        [InlineData("978014300723", BarcodeTypes.Isbn13)]
        public void ValidatedBarcode_ShouldMatchEncodedBarcode_ForNumericTypes(string input, BarcodeTypes type)
        {
            // Validate the barcode
            var validationResult = BarcodeValidator.Validate(input, type);

            // Encode the barcode
            using var barcode = new Barcode(opt => opt.Type = type);
            var encodedResult = barcode.Encode(input);

            // The validated barcode should match the encoded barcode
            Assert.True(validationResult.IsValid);
            Assert.Equal(encodedResult, validationResult.ValidatedBarcode);
        }

        [Theory]
        [InlineData("ABC-1234-ABC", BarcodeTypes.Code93)]
        [InlineData("HELLO-WORLD", BarcodeTypes.Code39)]
        [InlineData("A123456A", BarcodeTypes.Codabar)]
        public void ValidatedBarcode_ShouldMatchEncodedBarcode_ForAlphanumericTypes(string input, BarcodeTypes type)
        {
            // Validate the barcode
            var validationResult = BarcodeValidator.Validate(input, type);

            // Encode the barcode
            using var barcode = new Barcode(opt => opt.Type = type);
            var encodedResult = barcode.Encode(input);

            // The validated barcode should match the encoded barcode
            Assert.True(validationResult.IsValid);
            Assert.Equal(encodedResult, validationResult.ValidatedBarcode);
        }

        [Theory]
        [InlineData("ABC123", BarcodeTypes.Ean13)]
        [InlineData("INVALID", BarcodeTypes.Ean8)]
        [InlineData("NOT-A-NUMBER", BarcodeTypes.Upca)]
        public void Validation_ShouldFail_WhenEncodingWouldFail(string input, BarcodeTypes type)
        {
            // Validate the barcode
            var validationResult = BarcodeValidator.Validate(input, type);

            // Validation should fail
            Assert.False(validationResult.IsValid);

            // Encoding should also fail
            using var barcode = new Barcode(opt => opt.Type = type);
            Assert.Throws<System.FormatException>(() => barcode.Encode(input));
        }

        [Fact]
        public void Validation_ShouldBeMorePerformant_ThanEncoding()
        {
            const int iterations = 1000;
            var testBarcode = "123456789012";

            // Measure validation time
            var validationWatch = System.Diagnostics.Stopwatch.StartNew();
            for (int i = 0; i < iterations; i++)
            {
                var result = BarcodeValidator.Validate(testBarcode, BarcodeTypes.Ean13);
                Assert.True(result.IsValid);
            }
            validationWatch.Stop();

            // Measure encoding time
            var encodingWatch = System.Diagnostics.Stopwatch.StartNew();
            for (int i = 0; i < iterations; i++)
            {
                using var barcode = new Barcode(opt => opt.Type = BarcodeTypes.Ean13);
                barcode.Encode(testBarcode);
            }
            encodingWatch.Stop();

            // Validation should be significantly faster than encoding
            // We expect validation to be at least 50% faster (encoding includes rendering)
            Assert.True(validationWatch.ElapsedMilliseconds < encodingWatch.ElapsedMilliseconds / 2,
                $"Validation ({validationWatch.ElapsedMilliseconds}ms) should be faster than encoding ({encodingWatch.ElapsedMilliseconds}ms)");
        }
    }
}
