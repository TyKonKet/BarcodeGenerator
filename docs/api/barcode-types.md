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

// Invalid inputs - will throw ArgumentException
barcode.Encode("12345678901");      // Too short (11 digits)
barcode.Encode("1234567890123");    // Too long (13 digits)
barcode.Encode("12345678901A");     // Contains letter
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

// Invalid inputs
barcode.Encode("1234567890");       // Too short (10 digits)
barcode.Encode("123456789012");     // Too long (12 digits)
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

#### Common ISBN Prefixes
```csharp
// Books published before 2007 (978 prefix)
barcode.Encode("978123456789");

// Books published after 2007 (979 prefix)
barcode.Encode("979123456789");

// Any valid 12-digit sequence works
barcode.Encode("980123456789");
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

// Invalid inputs
barcode.Encode("123456");           // Too short (6 digits)
barcode.Encode("12345678");         // Too long (8 digits)
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
string result = barcode.Encode("HELLO-WORLD"); // Returns: "HELLO-WORLD"
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

// Invalid inputs - will throw ArgumentException
barcode.Encode("hello");            // Lowercase letters not supported
barcode.Encode("item@123");         // @ symbol not supported
barcode.Encode("test_case");        // Underscore not supported
```

## Future Types (Not Yet Implemented)

The following barcode types are defined in the enum but not yet implemented:

### Code128 = 5
Code 128 - A high-density barcode symbology for alphanumeric or numeric-only barcodes.

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
        _ => false
    };
}

private static bool IsValidCode93(string input)
{
    if (string.IsNullOrEmpty(input)) return false;
    
    const string validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 $%+-./ ";
    return input.All(c => validChars.Contains(c));
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
        ("PRODUCT-001", BarcodeTypes.Code93)
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

For numeric barcode types (EAN-13, UPC-A, ISBN-13, EAN-8), the library automatically calculates and appends the check digit:

```csharp
// Input: 12 digits, Output: 13 digits with check digit
using var ean13 = new Barcode(options => options.Type = BarcodeTypes.Ean13);
string result = ean13.Encode("123456789012"); // Returns: "1234567890128"

// Input: 11 digits, Output: 12 digits with check digit  
using var upca = new Barcode(options => options.Type = BarcodeTypes.Upca);
string result2 = upca.Encode("12345678901"); // Returns: "123456789012"
```

## Error Handling

```csharp
public string SafeEncode(string data, BarcodeTypes type)
{
    try
    {
        using var barcode = new Barcode(options => options.Type = type);
        return barcode.Encode(data);
    }
    catch (ArgumentException ex)
    {
        Console.WriteLine($"Invalid data for {type}: {ex.Message}");
        return null;
    }
}
```

## Related Documentation

- [Barcode Class](barcode.md) - Main barcode generation class
- [BarcodeOptions Class](barcode-options.md) - Configuration options
- [Supported Types Examples](../examples/supported-types.md) - Detailed examples for each type
- [Validation Guide](../advanced/validation.md) - Input validation and check digits