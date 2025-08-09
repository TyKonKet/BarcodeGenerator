# Supported Barcode Types Examples

This guide provides comprehensive examples for each barcode type supported by the BarcodeGenerator library, including format specifications, validation rules, and practical usage scenarios.

## EAN-13 (European Article Number)

EAN-13 is the most widely used barcode for retail products worldwide.

### Format Specifications
- **Length**: 13 digits (12 data + 1 check digit)
- **Input**: 12 digits (check digit calculated automatically)
- **Character Set**: Numeric only (0-9)
- **Applications**: Retail products, groceries, general merchandise

### Basic Usage

```csharp
using var ean13 = new Barcode(options => options.Type = BarcodeTypes.Ean13);

// Standard product code
string result = ean13.Encode("123456789012");  // Returns: "1234567890128"
ean13.Export("ean13-product.png");

// Real-world example: Coca-Cola
string colaCode = ean13.Encode("049000028911");  // Returns: "0490000289118"
ean13.Export("coca-cola-{barcode}.png");
```

### Country Code Examples

EAN-13 codes contain country information in the first 2-3 digits:

```csharp
// United States and Canada (00-13)
ean13.Encode("012345678901");  // US/Canada product

// Germany (40-44)
ean13.Encode("400123456789");  // German product

// United Kingdom (50)
ean13.Encode("501234567890");  // UK product

// France (30-37)
ean13.Encode("301234567890");  // French product

// Japan (45-49)
ean13.Encode("451234567890");  // Japanese product
```

### Validation Examples

```csharp
public bool IsValidEan13Input(string input)
{
    return input != null && 
           input.Length == 12 && 
           input.All(char.IsDigit);
}

// Valid inputs
Console.WriteLine(IsValidEan13Input("123456789012"));  // True
Console.WriteLine(IsValidEan13Input("999888777666"));  // True

// Invalid inputs
Console.WriteLine(IsValidEan13Input("12345678901"));   // False (too short)
Console.WriteLine(IsValidEan13Input("1234567890123")); // False (too long)
Console.WriteLine(IsValidEan13Input("12345678901A"));  // False (contains letter)
```

### Styling for Retail

```csharp
using var retailEan13 = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.Height = 50;
    options.Scaling = 2;
    options.Margins = 8;
    options.BackgroundColor = SKColors.White;
    options.ForegroundColor = SKColors.Black;
    options.RenderText = true;
    options.UseTypeface("Arial", SKFontStyle.Normal);
});
```

## UPC-A (Universal Product Code)

UPC-A is the standard barcode for retail products in North America.

### Format Specifications
- **Length**: 12 digits (11 data + 1 check digit)
- **Input**: 11 digits (check digit calculated automatically)
- **Character Set**: Numeric only (0-9)
- **Applications**: North American retail, grocery stores

### Basic Usage

```csharp
using var upca = new Barcode(options => options.Type = BarcodeTypes.Upca);

// Standard UPC
string result = upca.Encode("12345678901");  // Returns: "123456789012"
upca.Export("upca-product.png");

// Real-world example: General Mills Cheerios
string cheerios = upca.Encode("01600027528");  // Returns: "016000275287"
upca.Export("cheerios-{barcode}.png");
```

### Manufacturer Code Examples

UPC-A codes contain manufacturer information:

```csharp
// Coca-Cola Company (04900)
upca.Encode("04900028911");

// General Mills (01600)
upca.Encode("01600027528");

// Kellogg Company (03800)
upca.Encode("03800014810");

// Procter & Gamble (03700)
upca.Encode("03700026470");
```

### UPC-A vs EAN-13 Conversion

UPC-A codes can be converted to EAN-13 by adding a leading zero:

```csharp
string upcCode = "123456789012";
string eanEquivalent = "0" + upcCode.Substring(0, 11);  // "012345678901"

using var upca = new Barcode(options => options.Type = BarcodeTypes.Upca);
using var ean13 = new Barcode(options => options.Type = BarcodeTypes.Ean13);

string upcResult = upca.Encode(upcCode.Substring(0, 11));    // "123456789012"
string eanResult = ean13.Encode(eanEquivalent);              // "0123456789013"
```

### North American Retail Styling

```csharp
using var northAmericanUpca = new Barcode(options =>
{
    options.Type = BarcodeTypes.Upca;
    options.Height = 45;
    options.Scaling = 2;
    options.Margins = 6;
    options.UseTypeface("Arial", SKFontStyle.Normal);
});
```

## ISBN-13 (International Standard Book Number)

ISBN-13 is used to identify books and related publications.

### Format Specifications
- **Length**: 13 digits (12 data + 1 check digit)
- **Input**: 12 digits (check digit calculated automatically)
- **Character Set**: Numeric only (0-9)
- **Prefix**: Usually starts with 978 or 979
- **Applications**: Books, e-books, audiobooks, periodicals

### Basic Usage

```csharp
using var isbn = new Barcode(options => options.Type = BarcodeTypes.Isbn13);

// Standard ISBN
string result = isbn.Encode("978012345678");  // Returns: "9780123456786"
isbn.Export("book-isbn.png");

// Real-world example: "The Great Gatsby"
string gatsby = isbn.Encode("978074327356");  // Returns: "9780743273565"
isbn.Export("great-gatsby-{barcode}.png");
```

### ISBN Prefix Examples

```csharp
// Books published before 2007 (978 prefix)
isbn.Encode("978123456789");  // Standard book

// Books published after 2007 (979 prefix)  
isbn.Encode("979123456789");  // Newer book

// Educational materials
isbn.Encode("978014243724");  // Penguin Classics

// Technical books
isbn.Encode("978013110362");  // Computer science textbook
```

### Publisher Identification

```csharp
// Major publishers have recognizable patterns
// Penguin Random House (often 014, 067, etc.)
isbn.Encode("978014243724");

// McGraw-Hill Education (often 007, 125, etc.)
isbn.Encode("978007802186");

// Wiley (often 047, 111, etc.)
isbn.Encode("978111842878");

// O'Reilly Media (often 059, 144, etc.)
isbn.Encode("978059610149");
```

### Book Industry Styling

```csharp
using var bookIsbn = new Barcode(options =>
{
    options.Type = BarcodeTypes.Isbn13;
    options.Height = 40;
    options.Scaling = 2;
    options.Margins = 8;
    options.BackgroundColor = SKColor.Parse("#F9F9F9");
    options.ForegroundColor = SKColor.Parse("#2C3E50");
    options.UseTypeface("Times New Roman", SKFontStyle.Normal);
});
```

### ISBN Validation Helper

```csharp
public static class IsbnValidator
{
    public static bool IsValidIsbn13Input(string input)
    {
        if (string.IsNullOrEmpty(input) || input.Length != 12)
            return false;
            
        if (!input.All(char.IsDigit))
            return false;
            
        // Check for valid ISBN prefix
        return input.StartsWith("978") || input.StartsWith("979");
    }
    
    public static string FormatIsbn(string isbn13)
    {
        if (isbn13.Length != 13) return isbn13;
        
        // Format as 978-0-123-45678-6
        return $"{isbn13.Substring(0, 3)}-{isbn13.Substring(3, 1)}-{isbn13.Substring(4, 3)}-{isbn13.Substring(7, 5)}-{isbn13.Substring(12, 1)}";
    }
}
```

## EAN-8 (Compact EAN)

EAN-8 is a shortened version of EAN-13 for small packages.

### Format Specifications
- **Length**: 8 digits (7 data + 1 check digit)
- **Input**: 7 digits (check digit calculated automatically)
- **Character Set**: Numeric only (0-9)
- **Applications**: Small packages, cosmetics, pharmaceuticals

### Basic Usage

```csharp
using var ean8 = new Barcode(options => options.Type = BarcodeTypes.Ean8);

// Standard EAN-8
string result = ean8.Encode("1234567");  // Returns: "12345670"
ean8.Export("ean8-small-package.png");

// Cosmetics example
string lipstick = ean8.Encode("9876543");  // Returns: "98765438"
ean8.Export("lipstick-{barcode}.png");
```

### Small Package Applications

```csharp
// Pharmaceuticals
ean8.Encode("2345678");  // Medicine package

// Cosmetics
ean8.Encode("3456789");  // Makeup item

// Cigarettes
ean8.Encode("4567890");  // Tobacco product

// Small food items
ean8.Encode("5678901");  // Candy bar
```

### Compact Styling

```csharp
using var compactEan8 = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean8;
    options.Height = 30;        // Smaller height for small packages
    options.Scaling = 2;        // Adequate scaling for readability
    options.Margins = 4;        // Minimal margins
    options.UseTypeface("Arial", SKFontStyle.Normal);
});
```

### Size Optimization for Labels

```csharp
// Extra compact for tiny labels
using var tinyEan8 = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean8;
    options.Height = 20;
    options.Scaling = 1;
    options.Margins = 2;
    options.RenderText = true;  // Keep text for verification
});

// High-density for quality printing
using var hdEan8 = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean8;
    options.Height = 40;
    options.Scaling = 4;
    options.Margins = 8;
});
```

## CODE-93 (Alphanumeric Barcode)

CODE-93 supports alphanumeric characters and is used in logistics and inventory management.

### Format Specifications
- **Length**: Variable
- **Input**: Any length with supported characters
- **Character Set**: A-Z, 0-9, space, $, %, +, -, ., /
- **Applications**: Logistics, inventory, postal services, industrial

### Basic Usage

```csharp
using var code93 = new Barcode(options => options.Type = BarcodeTypes.Code93);

// Simple alphanumeric
string result = code93.Encode("HELLO123");  // Returns: "HELLO123"
code93.Export("code93-basic.png");

// Product code with special characters
string productCode = code93.Encode("ITEM-001");  // Returns: "ITEM-001"
code93.Export("product-{barcode}.png");
```

### Character Set Examples

```csharp
// Letters and numbers
code93.Encode("ABC123");
code93.Encode("PRODUCT789");

// With hyphens (common in part numbers)
code93.Encode("PART-001");
code93.Encode("SKU-ABC-123");

// With plus signs
code93.Encode("VERSION+2");
code93.Encode("MODEL+PLUS");

// With slashes (date formats, fractions)
code93.Encode("2024/01/15");
code93.Encode("SIZE/LARGE");

// With dots (version numbers, decimals)
code93.Encode("VERSION.2.1");
code93.Encode("WEIGHT.12.5");

// With dollar signs (pricing codes)
code93.Encode("PRICE$99");
code93.Encode("COST$12.99");

// With percent signs (discounts, concentrations)
code93.Encode("DISCOUNT%25");
code93.Encode("SOLUTION%50");

// With spaces
code93.Encode("HELLO WORLD");
code93.Encode("PART NUMBER");
```

### Industrial Applications

```csharp
// Inventory management
code93.Encode("INV-2024-001");
code93.Encode("WAREHOUSE/A/SHELF/B");

// Shipping and logistics
code93.Encode("SHIP-TO-NYC");
code93.Encode("ROUTE-66/STOP-5");

// Manufacturing
code93.Encode("BATCH-20240115");
code93.Encode("QC-PASS-001");

// Asset tracking
code93.Encode("ASSET/LAPTOP/001");
code93.Encode("EQUIP-PRINTER-HP");
```

### Validation Helper

```csharp
public static class Code93Validator
{
    private const string ValidChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 $%+-./ ";
    
    public static bool IsValidCode93Input(string input)
    {
        if (string.IsNullOrEmpty(input))
            return false;
            
        return input.All(c => ValidChars.Contains(c));
    }
    
    public static string SanitizeInput(string input)
    {
        if (string.IsNullOrEmpty(input))
            return string.Empty;
            
        return new string(input.Where(c => ValidChars.Contains(c)).ToArray());
    }
}

// Usage
string userInput = "hello@world!123";  // Contains invalid characters
string sanitized = Code93Validator.SanitizeInput(userInput.ToUpper());  // "HELLOWORLD123"
code93.Encode(sanitized);
```

### Industrial Styling

```csharp
using var industrialCode93 = new Barcode(options =>
{
    options.Type = BarcodeTypes.Code93;
    options.Height = 60;
    options.Scaling = 3;
    options.Margins = 10;
    options.BackgroundColor = SKColors.White;
    options.ForegroundColor = SKColors.Black;
    options.UseTypeface("Consolas", SKFontStyle.Bold);  // Monospace for clarity
});
```

## Comparison and Selection Guide

### When to Use Each Type

```csharp
public static BarcodeTypes SelectBarcodeType(string useCase, string region = "international")
{
    return (useCase.ToLower(), region.ToLower()) switch
    {
        ("retail", "usa" or "canada" or "north-america") => BarcodeTypes.Upca,
        ("retail", _) => BarcodeTypes.Ean13,
        ("book" or "publication", _) => BarcodeTypes.Isbn13,
        ("small-package" or "cosmetics" or "pharmaceutical", _) => BarcodeTypes.Ean8,
        ("logistics" or "inventory" or "industrial", _) => BarcodeTypes.Code93,
        _ => BarcodeTypes.Ean13  // Default to most common
    };
}
```

### Format Compatibility

```csharp
public static class BarcodeCompatibility
{
    public static bool CanConvert(BarcodeTypes from, BarcodeTypes to)
    {
        return (from, to) switch
        {
            (BarcodeTypes.Upca, BarcodeTypes.Ean13) => true,  // Add leading zero
            (BarcodeTypes.Ean13, BarcodeTypes.Upca) => true,  // If starts with 0
            _ => false
        };
    }
    
    public static string ConvertUpcaToEan13(string upcaCode)
    {
        if (upcaCode.Length == 12)
            return "0" + upcaCode.Substring(0, 11);  // Remove check digit, add leading 0
        throw new ArgumentException("Invalid UPC-A format");
    }
}
```

### Multi-Type Batch Processing

```csharp
public void ProcessMixedBarcodeTypes()
{
    var barcodeData = new[]
    {
        ("123456789012", BarcodeTypes.Ean13, "European retail product"),
        ("12345678901", BarcodeTypes.Upca, "US retail product"),
        ("978012345678", BarcodeTypes.Isbn13, "Book publication"),
        ("1234567", BarcodeTypes.Ean8, "Small cosmetic item"),
        ("ITEM-001", BarcodeTypes.Code93, "Inventory item"),
        ("PART+ABC/123", BarcodeTypes.Code93, "Industrial part")
    };
    
    foreach (var (data, type, description) in barcodeData)
    {
        using var barcode = new Barcode(options =>
        {
            options.Type = type;
            ConfigureForType(options, type);
        });
        
        try
        {
            string result = barcode.Encode(data);
            barcode.Export($"{type}_{result}.png");
            Console.WriteLine($"Generated {type}: {result} ({description})");
        }
        catch (ArgumentException ex)
        {
            Console.WriteLine($"Failed to generate {type} for '{data}': {ex.Message}");
        }
    }
}

private void ConfigureForType(BarcodeOptions options, BarcodeTypes type)
{
    switch (type)
    {
        case BarcodeTypes.Ean13:
        case BarcodeTypes.Upca:
        case BarcodeTypes.Isbn13:
        case BarcodeTypes.Ean8:
            options.Height = 50;
            options.Scaling = 2;
            options.UseTypeface("Arial", SKFontStyle.Normal);
            break;
            
        case BarcodeTypes.Code93:
            options.Height = 60;
            options.Scaling = 3;
            options.UseTypeface("Consolas", SKFontStyle.Normal);
            break;
    }
}
```

## Testing and Validation

### Comprehensive Validation Suite

```csharp
public static class BarcodeTestSuite
{
    public static void RunValidationTests()
    {
        TestEan13();
        TestUpca();
        TestIsbn13();
        TestEan8();
        TestCode93();
    }
    
    private static void TestEan13()
    {
        using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
        
        // Valid cases
        Assert.AreEqual("1234567890128", barcode.Encode("123456789012"));
        Assert.AreEqual("0490000289118", barcode.Encode("049000028911"));
        
        // Invalid cases should throw
        Assert.ThrowsException<ArgumentException>(() => barcode.Encode("12345678901"));   // Too short
        Assert.ThrowsException<ArgumentException>(() => barcode.Encode("1234567890123")); // Too long
        Assert.ThrowsException<ArgumentException>(() => barcode.Encode("12345678901A"));  // Non-numeric
    }
    
    private static void TestCode93()
    {
        using var barcode = new Barcode(options => options.Type = BarcodeTypes.Code93);
        
        // Valid cases
        Assert.AreEqual("HELLO123", barcode.Encode("HELLO123"));
        Assert.AreEqual("ITEM-001", barcode.Encode("ITEM-001"));
        Assert.AreEqual("PART+ABC/123", barcode.Encode("PART+ABC/123"));
        
        // Invalid cases should throw
        Assert.ThrowsException<ArgumentException>(() => barcode.Encode("hello123"));    // Lowercase
        Assert.ThrowsException<ArgumentException>(() => barcode.Encode("ITEM@001"));    // Invalid char @
        Assert.ThrowsException<ArgumentException>(() => barcode.Encode("PART_ABC"));    // Invalid char _
    }
}
```

## Related Documentation

- [Basic Usage Examples](basic-usage.md) - Getting started with barcode generation
- [BarcodeTypes API](../api/barcode-types.md) - Complete enum reference
- [Customization Examples](customization.md) - Styling for different use cases
- [Validation Guide](../advanced/validation.md) - Input validation and error handling