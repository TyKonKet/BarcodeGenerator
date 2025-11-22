using BenchmarkDotNet.Attributes;

namespace TyKonKet.BarcodeGenerator.Benchmarks.Benchmarks
{
    [BenchmarkCategory("CI")]
    [Config(typeof(BenchmarkConfig))]
    public class ValidationBenchmarks
    {
        // Valid inputs (body length without check digit or full length)
        private const string Ean13Body = "123456789012";      // 12 digits
        private const string Ean13Full = "1234567890128";     // 13 digits
        private const string UpcaBody = "12345678905";        // 11 digits
        private const string UpceBody = "0123456";            // 7 digits
        private const string Isbn13Body = "978014300723";     // 12 digits with valid prefix
        private const string Code93Valid = "ABC-1234-ABC";    // Will compute check digits
        private const string Code39Valid = "HELLO-WORLD";     // Uppercase & allowed charset
        private const string Code128Valid = "AbC123xyz!";     // Mixed case + symbol
        private const string CodabarValid = "A123456A";       // Start/stop A .. A

        // Invalid inputs
        private const string Ean13InvalidLength = "123456";      // Too short
        private const string Ean13InvalidCharset = "ABC123";     // Non numeric
        private const string Isbn13InvalidPrefix = "977014300723"; // Bad prefix
        private const string Code93InvalidCharset = "ABC-1234-aBC"; // Lowercase + invalid
        private const string CodabarInvalid = "123456";          // Missing start/stop

        [Benchmark] public BarcodeValidationResult Ean13_Valid_Body() => BarcodeValidator.Validate(Ean13Body, BarcodeTypes.Ean13);
        [Benchmark] public BarcodeValidationResult Ean13_Valid_Full() => BarcodeValidator.Validate(Ean13Full, BarcodeTypes.Ean13);
        [Benchmark] public BarcodeValidationResult Ean13_Invalid_Length() => BarcodeValidator.Validate(Ean13InvalidLength, BarcodeTypes.Ean13);
        [Benchmark] public BarcodeValidationResult Ean13_Invalid_Charset() => BarcodeValidator.Validate(Ean13InvalidCharset, BarcodeTypes.Ean13);

        [Benchmark] public BarcodeValidationResult Ean13_Invalid_WithSuggestions() => BarcodeValidator.Validate(Ean13InvalidCharset, BarcodeTypes.Ean13, includeSuggestions: true);
        [Benchmark] public BarcodeValidationResult Ean13_Invalid_WithoutSuggestions() => BarcodeValidator.Validate(Ean13InvalidCharset, BarcodeTypes.Ean13, includeSuggestions: false);

        [Benchmark] public BarcodeValidationResult Upca_Valid_Body() => BarcodeValidator.Validate(UpcaBody, BarcodeTypes.Upca);
        [Benchmark] public BarcodeValidationResult Upce_Valid_Body() => BarcodeValidator.Validate(UpceBody, BarcodeTypes.Upce);
        [Benchmark] public BarcodeValidationResult Isbn13_Valid_Body() => BarcodeValidator.Validate(Isbn13Body, BarcodeTypes.Isbn13);
        [Benchmark] public BarcodeValidationResult Isbn13_Invalid_Prefix() => BarcodeValidator.Validate(Isbn13InvalidPrefix, BarcodeTypes.Isbn13);

        [Benchmark] public BarcodeValidationResult Code93_Valid() => BarcodeValidator.Validate(Code93Valid, BarcodeTypes.Code93);
        [Benchmark] public BarcodeValidationResult Code93_InvalidCharset() => BarcodeValidator.Validate(Code93InvalidCharset, BarcodeTypes.Code93);

        [Benchmark] public BarcodeValidationResult Code39_Valid() => BarcodeValidator.Validate(Code39Valid, BarcodeTypes.Code39);
        [Benchmark] public BarcodeValidationResult Code128_Valid() => BarcodeValidator.Validate(Code128Valid, BarcodeTypes.Code128);

        [Benchmark] public BarcodeValidationResult Codabar_Valid() => BarcodeValidator.Validate(CodabarValid, BarcodeTypes.Codabar);
        [Benchmark] public BarcodeValidationResult Codabar_Invalid() => BarcodeValidator.Validate(CodabarInvalid, BarcodeTypes.Codabar);
    }
}
