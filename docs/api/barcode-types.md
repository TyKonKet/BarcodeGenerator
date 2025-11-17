# BarcodeTypes Enum

The `BarcodeTypes` enumeration defines the supported barcode symbologies in the BarcodeGenerator library. Each type has specific formatting requirements and use cases.

## Namespace

```csharp
TyKonKet.BarcodeGenerator
```

## Declaration

```csharp
public enum BarcodeTypes
```

## Values

### Ean13 = 1

European Article Number (EAN-13) barcode used for marking products sold at retail point of sale.

#### Specifications
- **Encoding**: 13 digits total (12 data digits + 1 check digit)
- **Input Format**: 12 digits (check digit calculated automatically)
- **Character Set**: Numeric only (0-9)
- **Applications**: Retail products, grocery items, books

#### Example
```csharp
using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
string result = barcode.Encode("123456789012"); // Returns: "1234567890128"
```

#### Input Validation
```csharp
// Valid inputs
barcode.Encode("123456789012");     // 12 digits
barcode.Encode("999888777666");     // Any 12 digits

// Automatic handling
barcode.Encode("12345678901");      // Too short - auto-padded with leading zeros
barcode.Encode("1234567890123");    // Too long - end-truncated to 12 digits

// Invalid inputs - will throw FormatException
barcode.Encode("12345678901A");     // Contains invalid characters
```

### Upca = 2

Universal Product Code (UPC-A) widely used in the United States for tracking trade items in stores.

#### Specifications
- **Encoding**: 12 digits total (11 data digits + 1 check digit)
- **Input Format**: 11 digits (check digit calculated automatically)
- **Character Set**: Numeric only (0-9)
- **Applications**: North American retail products

#### Example
```csharp
using var barcode = new Barcode(options => options.Type = BarcodeTypes.Upca);
string result = barcode.Encode("12345678901"); // Returns: "123456789012"
```

#### Input Validation
```csharp
// Valid inputs
barcode.Encode("12345678901");      // 11 digits
barcode.Encode("03600029145");      // Example UPC

// Automatic handling
barcode.Encode("1234567890");       // Too short - auto-padded with leading zeros
barcode.Encode("123456789012");     // Too long - end-truncated to 11 digits

// Invalid inputs - will throw FormatException
barcode.Encode("1234567890A");      // Contains invalid characters
```

### Isbn13 = 3

International Standard Book Number (ISBN-13) used to identify books and similar publications.

#### Specifications
- **Encoding**: 13 digits total (12 data digits + 1 check digit)
- **Input Format**: 12 digits (check digit calculated automatically)
- **Character Set**: Numeric only (0-9)
- **Prefix**: Typically starts with 978 or 979
- **Applications**: Books, e-books, audiobooks

#### Example
```csharp
using var barcode = new Barcode(options => options.Type = BarcodeTypes.Isbn13);
string result = barcode.Encode("978012345678"); // Returns: "9780123456786"
```

#### Allowed ISBN Prefixes
```csharp
// Books published before 2007 (978 prefix)
barcode.Encode("978123456789");

// Books published after 2007 (979 prefix)
barcode.Encode("979123456789");

// Invalid prefix - will throw FormatException
barcode.Encode("980123456789");  // 980 is not a valid ISBN prefix
```

### Ean8 = 4

European Article Number (EAN-8) is a shorter version of EAN-13, used on small packages where space is limited.

#### Specifications
- **Encoding**: 8 digits total (7 data digits + 1 check digit)
- **Input Format**: 7 digits (check digit calculated automatically)
- **Character Set**: Numeric only (0-9)
- **Applications**: Small packages, cosmetics, cigarettes

#### Example
```csharp
using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean8);
string result = barcode.Encode("1234567"); // Returns: "12345670"
```

#### Input Validation
```csharp
// Valid inputs
barcode.Encode("1234567");          // 7 digits
barcode.Encode("9876543");          // Any 7 digits

// Automatic handling
barcode.Encode("123456");           // Too short - auto-padded with leading zeros
barcode.Encode("12345678");         // Too long - end-truncated to 7 digits

// Invalid inputs - will throw FormatException
barcode.Encode("123456A");          // Contains invalid characters
```

### Code93 = 7

Code 93 is a more compact version of Code 39, used in logistics and inventory management for alphanumeric data.

#### Specifications
- **Encoding**: Variable length alphanumeric
- **Input Format**: Any length string with supported characters
- **Character Set**: 
  - Uppercase letters (A-Z)
  - Digits (0-9)
  - Special characters: space, $, %, +, -, ., /
- **Applications**: Logistics, inventory management, postal services

#### Example
```csharp
using var barcode = new Barcode(options => options.Type = BarcodeTypes.Code93);
string result = barcode.Encode("HELLO-WORLD"); // Returns: "HELLO-WORLD3L"
```

#### Character Set Examples
```csharp
// Alphanumeric
barcode.Encode("PRODUCT123");

// With special characters
barcode.Encode("ITEM-001");
barcode.Encode("PART+ABC");
barcode.Encode("CODE/123");
barcode.Encode("REF$456");
barcode.Encode("QTY%789");
barcode.Encode("VER.2.1");

// With spaces
barcode.Encode("HELLO WORLD");
```

#### Input Validation
```csharp
// Valid inputs
barcode.Encode("ABC123");           // Alphanumeric
barcode.Encode("ITEM-001");         // With hyphen
barcode.Encode("A B C");            // With spaces

// Invalid inputs - will throw FormatException
barcode.Encode("hello");            // Lowercase letters not supported
barcode.Encode("item@123");         // @ symbol not supported
barcode.Encode("test_case");        // Underscore not supported
```

### Code128 = 5

Code 128 is a high-density barcode symbology for alphanumeric or numeric-only barcodes, widely used in logistics, shipping, and inventory management.

#### Specifications
- **Encoding**: Variable length alphanumeric
- **Input Format**: Any length string with ASCII characters (0-127)
- **Character Set**: 
  - Full ASCII character set (0-127)
  - Automatic code set switching (Code A, B, C)
  - Optimized for numeric pairs (Code C)
- **Applications**: Shipping labels, product tracking, retail barcodes, inventory systems

#### Example
```csharp
using var barcode = new Barcode(options => options.Type = BarcodeTypes.Code128);
string result = barcode.Encode("ABC123xyz"); // Returns: "ABC123xyz"
```

#### Character Set Examples
```csharp
// Alphanumeric
barcode.Encode("PRODUCT123");

// Mixed case
barcode.Encode("MixedCase123");

// Numeric sequences (optimized using Code C)
barcode.Encode("1234567890");

// Special characters
barcode.Encode("Item-001");
barcode.Encode("Price:$12.99");
barcode.Encode("Qty>5");

// With spaces
barcode.Encode("Hello World 123");
```

#### Code Set Optimization
Code 128 automatically selects the optimal code set for maximum efficiency:

- **Code A**: Control characters and uppercase
- **Code B**: Standard printable ASCII characters (default for most text)
- **Code C**: Numeric pairs (00-99) - most compact for numbers

```csharp
// Numeric data uses Code C for efficiency
barcode.Encode("12345678");      // Optimized as pairs: 12,34,56,78

// Mixed data switches between code sets automatically
barcode.Encode("ABC1234XYZ");    // Code B → Code C → Code B

// Text data uses Code B
barcode.Encode("Hello World");   // Code B throughout
```

#### Input Validation
```csharp
// Valid inputs (all ASCII 0-127)
barcode.Encode("ABC123");           // Alphanumeric
barcode.Encode("test@example.com"); // With symbols
barcode.Encode("Price: $9.99");     // With special chars
barcode.Encode("Line1\nLine2");     // With control chars (Code A)

// Invalid inputs - will throw FormatException
barcode.Encode("Hello™");           // Extended ASCII not supported
barcode.Encode("Test\u0200");       // Unicode beyond ASCII not supported
```

## Future Types (Not Yet Implemented)

The following barcode types are defined in the enum but not yet implemented:

### Code39 = 6
Code 39 - An alphanumeric barcode used in various industries including automotive and defense.

## Usage Examples

### Type Selection Based on Use Case

```csharp
public Barcode CreateBarcodeForUseCase(string data, string useCase)
{
    return useCase.ToLower() switch
    {
        "retail" => new Barcode(options => options.Type = BarcodeTypes.Ean13),
        "book" => new Barcode(options => options.Type = BarcodeTypes.Isbn13),
        "small-package" => new Barcode(options => options.Type = BarcodeTypes.Ean8),
        "logistics" => new Barcode(options => options.Type = BarcodeTypes.Code93),
        "usa-retail" => new Barcode(options => options.Type = BarcodeTypes.Upca),
        "shipping" => new Barcode(options => options.Type = BarcodeTypes.Code128),
        "inventory" => new Barcode(options => options.Type = BarcodeTypes.Code128),
        _ => new Barcode(options => options.Type = BarcodeTypes.Ean13)
    };
}
```

### Validation Helper
```csharp
public static bool IsValidForBarcodeType(string input, BarcodeTypes type)
{
    return type switch
    {
        BarcodeTypes.Ean13 => input?.Length == 12 && input.All(char.IsDigit),
        BarcodeTypes.Upca => input?.Length == 11 && input.All(char.IsDigit),
        BarcodeTypes.Isbn13 => input?.Length == 12 && input.All(char.IsDigit),
        BarcodeTypes.Ean8 => input?.Length == 7 && input.All(char.IsDigit),
        BarcodeTypes.Code93 => IsValidCode93(input),
        BarcodeTypes.Code128 => IsValidCode128(input),
        _ => false
    };
}

private static bool IsValidCode93(string input)
{
    if (string.IsNullOrEmpty(input)) return false;
    
    const string validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 $%+-./ ";
    return input.All(c => validChars.Contains(c));
}

private static bool IsValidCode128(string input)
{
    if (string.IsNullOrEmpty(input)) return false;
    
    // Code 128 supports all ASCII characters (0-127)
    return input.All(c => c >= 0 && c <= 127);
}
```

### Type-Specific Configuration
```csharp
public static void ConfigureForBarcodeType(BarcodeOptions options, BarcodeTypes type)
{
    options.Type = type;
    
    switch (type)
    {
        case BarcodeTypes.Ean13:
        case BarcodeTypes.Ean8:
        case BarcodeTypes.Upca:
        case BarcodeTypes.Isbn13:
            // Numeric barcodes - clean, standard appearance
            options.Height = 50;
            options.Scaling = 2;
            options.UseTypeface("Arial", SKFontStyle.Normal);
            break;
            
        case BarcodeTypes.Code93:
        case BarcodeTypes.Code128:
            // Alphanumeric - may need more height for readability
            options.Height = 60;
            options.Scaling = 3;
            options.UseTypeface("Courier New", SKFontStyle.Normal);
            break;
    }
}
```

### Batch Processing Different Types
```csharp
public void ProcessMixedBarcodes()
{
    var barcodeData = new[]
    {
        ("123456789012", BarcodeTypes.Ean13),
        ("12345678901", BarcodeTypes.Upca),
        ("978123456789", BarcodeTypes.Isbn13),
        ("1234567", BarcodeTypes.Ean8),
        ("PRODUCT-001", BarcodeTypes.Code93),
        ("ABC123xyz", BarcodeTypes.Code128)
    };
    
    foreach (var (data, type) in barcodeData)
    {
        using var barcode = new Barcode(options => options.Type = type);
        string result = barcode.Encode(data);
        barcode.Export($"{type}_{result}.png");
    }
}
```

## Check Digit Calculation

For all supported barcode types, the library automatically calculates and appends check digits when required:

**Numeric types** (EAN-13, UPC-A, ISBN-13, EAN-8): Use standard check digit algorithms
**Alphanumeric types** (CODE-93): Use modulo-47 check digit calculation
**CODE-128**: Uses modulo-103 check digit calculation with weighted sum

```csharp
// Input: 12 digits, Output: 13 digits with check digit
using var ean13 = new Barcode(options => options.Type = BarcodeTypes.Ean13);
string result = ean13.Encode("123456789012"); // Returns: "1234567890128"

// Input: 11 digits, Output: 12 digits with check digit  
using var upca = new Barcode(options => options.Type = BarcodeTypes.Upca);
string result2 = upca.Encode("12345678901"); // Returns: "123456789012"

// Input: variable length, Output: same data (check digit encoded in barcode)
using var code128 = new Barcode(options => options.Type = BarcodeTypes.Code128);
string result3 = code128.Encode("ABC123xyz"); // Returns: "ABC123xyz"
```

## Related Documentation

- [Barcode Class](barcode.md) - Main barcode generation class
- [BarcodeOptions Class](barcode-options.md) - Configuration options
- [Supported Types Examples](../examples/supported-types.md) - Detailed examples for each type
- [Validation Guide](../advanced/validation.md) - Input validation and check digits