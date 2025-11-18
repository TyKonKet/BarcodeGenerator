# Barcode Validation API

The BarcodeGenerator library now provides a standalone validation API that allows you to validate barcode data without encoding or rendering images.

## Overview

The validation API consists of two main components:

1. **`BarcodeValidator`** - A static class providing validation methods
2. **`BarcodeValidationResult`** - A class containing validation results and details

## Usage

### Basic Validation

```csharp
using TyKonKet.BarcodeGenerator;

// Validate a barcode
var result = BarcodeValidator.Validate("123456789012", BarcodeTypes.Ean13);

if (result.IsValid)
{
    // Validation succeeded
    Console.WriteLine($"Valid barcode: {result.ValidatedBarcode}");
    // Output: Valid barcode: 1234567890128 (with check digit)
}
else
{
    // Validation failed
    Console.WriteLine("Validation errors:");
    foreach (var error in result.Errors)
    {
        Console.WriteLine($"  - {error}");
    }
}
```

### Validation with Different Barcode Types

```csharp
// EAN-13 (European Article Number)
var ean13Result = BarcodeValidator.Validate("123456789012", BarcodeTypes.Ean13);
// Returns: IsValid=true, ValidatedBarcode="1234567890128"

// UPC-A (Universal Product Code)
var upcaResult = BarcodeValidator.Validate("12345678905", BarcodeTypes.Upca);
// Returns: IsValid=true, ValidatedBarcode="012345678905"

// ISBN-13 (International Standard Book Number)
var isbnResult = BarcodeValidator.Validate("978014300723", BarcodeTypes.Isbn13);
// Returns: IsValid=true, ValidatedBarcode="9780143007234"

// CODE-93 (Logistics and inventory)
var code93Result = BarcodeValidator.Validate("ABC-1234-ABC", BarcodeTypes.Code93);
// Returns: IsValid=true, ValidatedBarcode="ABC-1234-ABCDX" (with check digits)

// CODE-39 (Industrial use)
var code39Result = BarcodeValidator.Validate("HELLO-WORLD", BarcodeTypes.Code39);
// Returns: IsValid=true, ValidatedBarcode="HELLO-WORLD"

// CODE-128 (High-density encoding)
var code128Result = BarcodeValidator.Validate("ABC123xyz", BarcodeTypes.Code128);
// Returns: IsValid=true, ValidatedBarcode="ABC123xyz"

// CODABAR (Libraries, blood banks)
var codabarResult = BarcodeValidator.Validate("A123456A", BarcodeTypes.Codabar);
// Returns: IsValid=true, ValidatedBarcode="A123456A"
```

### Error Handling

```csharp
// Invalid character set
var invalidResult = BarcodeValidator.Validate("ABC123", BarcodeTypes.Ean13);
// Returns: IsValid=false, Errors=["Invalid character set. Only digits (0-9) are allowed for EAN-13."]

// Invalid ISBN prefix
var invalidIsbn = BarcodeValidator.Validate("123456789012", BarcodeTypes.Isbn13);
// Returns: IsValid=false, Errors=["Invalid ISBN-13 prefix. Only '978' or '979' are allowed."]

// Null barcode throws ArgumentNullException
try
{
    BarcodeValidator.Validate(null, BarcodeTypes.Ean13);
}
catch (ArgumentNullException ex)
{
    Console.WriteLine("Barcode cannot be null");
}
```

### Using Suggested Types (Opt-in)

For performance-sensitive scenarios, type suggestions are opt-in. Enable them by setting `includeSuggestions: true`:

```csharp
// Enable suggestions for better developer experience (with slight performance cost)
var result = BarcodeValidator.Validate("ABC123", BarcodeTypes.Ean13, includeSuggestions: true);

if (!result.IsValid)
{
    Console.WriteLine("Validation failed. Suggested compatible types:");
    foreach (var suggestedType in result.SuggestedTypes)
    {
        Console.WriteLine($"  - {suggestedType}");
        // Output might include: Code39, Code93, Code128
    }
    
    // Automatically retry with first suggested type
    if (result.SuggestedTypes.Count > 0)
    {
        var retryResult = BarcodeValidator.Validate("ABC123", result.SuggestedTypes[0]);
        if (retryResult.IsValid)
        {
            Console.WriteLine($"Success with {result.SuggestedTypes[0]}: {retryResult.ValidatedBarcode}");
        }
    }
}

// Default behavior (fastest, no suggestions)
var fastResult = BarcodeValidator.Validate("ABC123", BarcodeTypes.Ean13);
// fastResult.SuggestedTypes will be empty even on failure
```

## API Reference

### BarcodeValidator Class

#### Methods

##### `Validate(string barcode, BarcodeTypes type, bool includeSuggestions = false)`

Validates a barcode string for the specified barcode type.

**Parameters:**
- `barcode` (string) - The barcode string to validate
- `type` (BarcodeTypes) - The barcode type to validate against
- `includeSuggestions` (bool, optional) - When true, suggests compatible barcode types if validation fails. Default is false for optimal performance.

**Returns:**
- `BarcodeValidationResult` - The validation result

**Throws:**
- `ArgumentNullException` - When `barcode` is null

**Performance Note:**
Setting `includeSuggestions: true` will test the input against all barcode types when validation fails, which may impact performance in high-throughput scenarios. Use it only when you need type suggestions.

### BarcodeValidationResult Class

#### Properties

##### `IsValid` (bool)

Indicates whether the barcode is valid.

##### `ValidatedBarcode` (string?)

The validated barcode string with computed check digits if applicable. Returns `null` if validation failed.

##### `Errors` (IReadOnlyList<string>)

List of validation errors. Empty if validation succeeded.

##### `Type` (BarcodeTypes)

The barcode type that was validated.

##### `SuggestedTypes` (IReadOnlyList<BarcodeTypes>)

List of suggested compatible barcode types that would accept the input data. This property is populated when validation fails and contains barcode types that are compatible with the input string. Empty if validation succeeded or no compatible types were found.

## Supported Barcode Types

| Type | Character Set | Check Digit | Example |
|------|---------------|-------------|---------|
| **EAN-13** | Digits (0-9) | Auto-computed | `1234567890128` |
| **EAN-8** | Digits (0-9) | Auto-computed | `12345670` |
| **UPC-A** | Digits (0-9) | Auto-computed | `012345678905` |
| **UPC-E** | Digits (0-9) | Auto-computed | `01234565` |
| **ISBN-13** | Digits (0-9), must start with 978/979 | Auto-computed | `9780143007234` |
| **CODE-39** | A-Z, 0-9, space, .$+%-/ | None (optional) | `HELLO-WORLD` |
| **CODE-93** | A-Z, 0-9, space, .$+%-/ | Auto-computed | `ABC-1234-ABCDX` |
| **CODE-128** | All ASCII printable (space to DEL) | Internal | `ABC123xyz` |
| **CODABAR** | 0-9, -$:/.+, A-D start/stop | None | `A123456A` |

## Use Cases

1. **User Input Validation** - Validate barcode data before encoding
2. **Batch Processing** - Check barcode compliance in bulk operations
3. **Integration Testing** - Verify barcode data from external systems
4. **Pre-flight Checks** - Ensure data quality before expensive operations
5. **API Responses** - Return validation errors to API consumers

## Differences from Encoding

The validation API differs from the encoding API in several ways:

| Feature | Validation API | Encoding API |
|---------|----------------|--------------|
| **Purpose** | Check validity only | Generate barcode image |
| **Performance** | Lightweight | More resource-intensive |
| **Output** | Validation result | SKImage + file export |
| **Use Case** | Pre-validation | Final barcode generation |
| **Dependencies** | Minimal | SkiaSharp rendering |

## Migration from Encoding-based Validation

**Before (using encoding for validation):**
```csharp
try
{
    using var barcode = new Barcode(opt => opt.Type = BarcodeTypes.Ean13);
    var validated = barcode.Encode("123456789012");
    Console.WriteLine($"Valid: {validated}");
}
catch (FormatException ex)
{
    Console.WriteLine($"Invalid: {ex.Message}");
}
```

**After (using validation API):**
```csharp
var result = BarcodeValidator.Validate("123456789012", BarcodeTypes.Ean13);

if (result.IsValid)
{
    Console.WriteLine($"Valid: {result.ValidatedBarcode}");
}
else
{
    Console.WriteLine($"Invalid: {string.Join(", ", result.Errors)}");
}
```

## Performance

The validation API is optimized for performance:

- ✅ No image rendering overhead
- ✅ Reuses existing validation logic
- ✅ Minimal memory allocation
- ✅ Suitable for high-throughput scenarios

## Compatibility

- **Minimum .NET Version:** .NET Framework 4.6.2 / .NET Standard 2.0
- **Breaking Changes:** None - this is an additive API
- **Thread Safety:** All methods are thread-safe
