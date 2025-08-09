# Basic Usage Examples

This guide provides practical examples for the most common barcode generation scenarios using the BarcodeGenerator library.

## Simple Barcode Generation

### Minimal Example

The simplest way to generate a barcode with default settings:

```csharp
using SkiaSharp;
using TyKonKet.BarcodeGenerator;

// Generate EAN-8 barcode (default type)
using var barcode = new Barcode();
string result = barcode.Encode("1234567");  // Returns: "12345670" (with check digit)
barcode.Export("simple-barcode.png");
```

### Specific Barcode Type

Generate a specific barcode type:

```csharp
// EAN-13 barcode
using var ean13 = new Barcode(options => options.Type = BarcodeTypes.Ean13);
string result = ean13.Encode("123456789012");  // Returns: "1234567890128"
ean13.Export("ean13-barcode.png");
```

## Configuration Examples

### Basic Configuration

Set the most common options:

```csharp
using var barcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.Height = 50;        // Bar height in pixels
    options.Scaling = 3;        // Scale factor (3x larger)
    options.RenderText = true;  // Show text below bars
});

string result = barcode.Encode("123456789012");
barcode.Export("configured-barcode.png");
```

### Complete Configuration

All available options configured:

```csharp
using var barcode = new Barcode(options =>
{
    // Barcode type and dimensions
    options.Type = BarcodeTypes.Code93;
    options.Height = 60;
    options.Scaling = 4;
    options.Margins = 10;
    
    // Colors
    options.BackgroundColor = SKColors.White;
    options.ForegroundColor = SKColors.Black;
    
    // Text rendering
    options.RenderText = true;
    options.UseTypeface("Arial", SKFontStyle.Normal);
});

string result = barcode.Encode("PRODUCT-001");
barcode.Export("complete-barcode.png");
```

## Different Barcode Types

### EAN-13 (Retail Products)

```csharp
using var ean13 = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.Height = 50;
    options.Scaling = 2;
});

// 12 digits input, check digit added automatically
string result = ean13.Encode("123456789012");  // Returns: "1234567890128"
ean13.Export("product-{barcode}.png");         // Saves as: product-1234567890128.png
```

### UPC-A (North American Retail)

```csharp
using var upca = new Barcode(options =>
{
    options.Type = BarcodeTypes.Upca;
    options.Height = 45;
    options.Scaling = 2;
});

// 11 digits input, check digit added automatically
string result = upca.Encode("12345678901");  // Returns: "123456789012"
upca.Export("upc-{barcode}.png");
```

### ISBN-13 (Books)

```csharp
using var isbn = new Barcode(options =>
{
    options.Type = BarcodeTypes.Isbn13;
    options.Height = 40;
    options.Scaling = 2;
    options.UseTypeface("Times New Roman");  // Professional font for books
});

// ISBN without check digit
string result = isbn.Encode("978012345678");  // Returns: "9780123456786"
isbn.Export("book-isbn-{barcode}.png");
```

### EAN-8 (Small Packages)

```csharp
using var ean8 = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean8;
    options.Height = 35;    // Smaller height for compact packages
    options.Scaling = 3;    // Higher scaling to maintain readability
});

// 7 digits input, check digit added automatically
string result = ean8.Encode("1234567");  // Returns: "12345670"
ean8.Export("small-package-{barcode}.png");
```

### CODE-93 (Logistics and Inventory)

```csharp
using var code93 = new Barcode(options =>
{
    options.Type = BarcodeTypes.Code93;
    options.Height = 55;
    options.Scaling = 3;
    options.UseTypeface("Consolas");  // Monospace font for technical use
});

// Alphanumeric input
string result = code93.Encode("ITEM-001");    // Returns: "ITEM-001"
code93.Export("inventory-{barcode}.png");

// Can contain various characters
code93.Encode("PART+123");
code93.Encode("REF/456");
code93.Encode("QTY$789");
```

## Export Examples

### Different Image Formats

```csharp
using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
string result = barcode.Encode("123456789012");

// PNG (default, best quality)
barcode.Export("barcode.png", SKEncodedImageFormat.Png, 100);

// JPEG (smaller file size)
barcode.Export("barcode.jpg", SKEncodedImageFormat.Jpeg, 90);

// WEBP (modern format)
barcode.Export("barcode.webp", SKEncodedImageFormat.Webp, 85);
```

### Quality Settings

```csharp
// Maximum quality (larger file)
barcode.Export("high-quality.jpg", SKEncodedImageFormat.Jpeg, 100);

// Balanced quality/size
barcode.Export("medium-quality.jpg", SKEncodedImageFormat.Jpeg, 85);

// Compressed (smaller file)
barcode.Export("compressed.jpg", SKEncodedImageFormat.Jpeg, 60);
```

### File Naming with Keywords

```csharp
barcode.Encode("123456789012");

// Use all available keywords
barcode.Export("output/{barcode}_q{quality}.{format}", 
    SKEncodedImageFormat.Png, 100);
// Result: output/1234567890128_q100.png

// Custom naming pattern
barcode.Export("products/product_{barcode}_high.{format}", 
    SKEncodedImageFormat.Png, 100);
// Result: products/product_1234567890128_high.png
```

## Stream Export Examples

### Memory Stream

```csharp
using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
barcode.Encode("123456789012");

using var memoryStream = new MemoryStream();
barcode.Export(memoryStream, SKEncodedImageFormat.Png, 100);

// Get image as byte array
byte[] imageBytes = memoryStream.ToArray();
Console.WriteLine($"Image size: {imageBytes.Length} bytes");

// Save byte array to file
File.WriteAllBytes("from-stream.png", imageBytes);
```

### File Stream

```csharp
using var fileStream = new FileStream("output.png", FileMode.Create);
barcode.Export(fileStream, SKEncodedImageFormat.Png, 100);
// File is automatically written and closed
```

### HTTP Response Stream (ASP.NET Core)

```csharp
[HttpGet("barcode/{code}")]
public IActionResult GenerateBarcode(string code)
{
    using var barcode = new Barcode(options =>
    {
        options.Type = BarcodeTypes.Ean13;
        options.Height = 50;
        options.Scaling = 2;
    });
    
    try
    {
        string validatedCode = barcode.Encode(code);
        
        var stream = new MemoryStream();
        barcode.Export(stream, SKEncodedImageFormat.Png, 100);
        stream.Position = 0;
        
        return File(stream, "image/png", $"{validatedCode}.png");
    }
    catch (ArgumentException)
    {
        return BadRequest("Invalid barcode format");
    }
}
```

## Error Handling Examples

### Basic Error Handling

```csharp
public void GenerateBarcodeWithErrorHandling(string input)
{
    try
    {
        using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
        string result = barcode.Encode(input);
        barcode.Export($"output/{result}.png");
        Console.WriteLine($"Successfully generated: {result}");
    }
    catch (ArgumentException ex)
    {
        Console.WriteLine($"Invalid input '{input}': {ex.Message}");
    }
    catch (InvalidOperationException ex)
    {
        Console.WriteLine($"Operation failed: {ex.Message}");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Unexpected error: {ex.Message}");
    }
}
```

### Validation Before Encoding

```csharp
public bool TryGenerateBarcode(string input, BarcodeTypes type, out string result)
{
    result = null;
    
    // Pre-validate input
    if (!IsValidInput(input, type))
    {
        return false;
    }
    
    try
    {
        using var barcode = new Barcode(options => options.Type = type);
        result = barcode.Encode(input);
        barcode.Export($"output/{result}.png");
        return true;
    }
    catch
    {
        return false;
    }
}

private bool IsValidInput(string input, BarcodeTypes type)
{
    if (string.IsNullOrEmpty(input)) return false;
    
    return type switch
    {
        BarcodeTypes.Ean13 => input.Length == 12 && input.All(char.IsDigit),
        BarcodeTypes.Upca => input.Length == 11 && input.All(char.IsDigit),
        BarcodeTypes.Isbn13 => input.Length == 12 && input.All(char.IsDigit),
        BarcodeTypes.Ean8 => input.Length == 7 && input.All(char.IsDigit),
        BarcodeTypes.Code93 => IsValidCode93(input),
        _ => false
    };
}

private bool IsValidCode93(string input)
{
    const string validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 $%+-./ ";
    return input.All(c => validChars.Contains(c));
}
```

## Batch Processing Examples

### Process Multiple Barcodes

```csharp
public void GenerateMultipleBarcodes()
{
    var productCodes = new[]
    {
        "123456789012",
        "987654321098", 
        "456789012345",
        "789012345678"
    };
    
    foreach (string code in productCodes)
    {
        using var barcode = new Barcode(options =>
        {
            options.Type = BarcodeTypes.Ean13;
            options.Height = 50;
            options.Scaling = 2;
        });
        
        try
        {
            string result = barcode.Encode(code);
            barcode.Export($"products/product_{result}.png");
            Console.WriteLine($"Generated: {result}");
        }
        catch (ArgumentException ex)
        {
            Console.WriteLine($"Failed to generate barcode for '{code}': {ex.Message}");
        }
    }
}
```

### Different Types in Batch

```csharp
public void GenerateMixedBarcodes()
{
    var barcodeData = new[]
    {
        ("123456789012", BarcodeTypes.Ean13, "product"),
        ("12345678901", BarcodeTypes.Upca, "upc"),
        ("978123456789", BarcodeTypes.Isbn13, "book"),
        ("1234567", BarcodeTypes.Ean8, "small"),
        ("ITEM-001", BarcodeTypes.Code93, "inventory")
    };
    
    foreach (var (data, type, category) in barcodeData)
    {
        using var barcode = new Barcode(options =>
        {
            options.Type = type;
            options.Height = 50;
            options.Scaling = 2;
        });
        
        try
        {
            string result = barcode.Encode(data);
            barcode.Export($"{category}/{result}.png");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error processing {data}: {ex.Message}");
        }
    }
}
```

## Reusable Configuration

### Configuration Helper Methods

```csharp
public static void ConfigureForPrint(BarcodeOptions options)
{
    options.Height = 80;
    options.Scaling = 4;
    options.Margins = 15;
    options.BackgroundColor = SKColors.White;
    options.ForegroundColor = SKColors.Black;
    options.UseTypeface("Arial", SKFontStyle.Normal);
}

public static void ConfigureForWeb(BarcodeOptions options)
{
    options.Height = 40;
    options.Scaling = 2;
    options.Margins = 5;
    options.BackgroundColor = SKColors.Transparent;
    options.ForegroundColor = SKColors.Black;
    options.UseTypeface("Verdana", SKFontStyle.Normal);
}

// Usage
using var printBarcode = new Barcode(ConfigureForPrint);
using var webBarcode = new Barcode(ConfigureForWeb);
```

### Configuration Classes

```csharp
public static class BarcodeConfigurations
{
    public static readonly Action<BarcodeOptions> HighQuality = options =>
    {
        options.Height = 100;
        options.Scaling = 6;
        options.Margins = 20;
        options.UseTypeface("Arial", SKFontStyle.Normal);
    };
    
    public static readonly Action<BarcodeOptions> Compact = options =>
    {
        options.Height = 25;
        options.Scaling = 1;
        options.Margins = 2;
        options.RenderText = false;
    };
    
    public static readonly Action<BarcodeOptions> Professional = options =>
    {
        options.Height = 60;
        options.Scaling = 3;
        options.Margins = 10;
        options.UseTypeface("Times New Roman", SKFontStyle.Normal);
        options.ForegroundColor = SKColor.Parse("#2C3E50");
    };
}

// Usage
using var barcode = new Barcode(BarcodeConfigurations.Professional);
```

## Next Steps

Now that you understand the basic usage patterns, explore more advanced topics:

- [Customization Examples](customization.md) - Advanced styling and appearance options
- [Export Formats](export-formats.md) - Detailed export options and file handling
- [Supported Types](supported-types.md) - Comprehensive examples for each barcode type
- [Custom Fonts](../advanced/custom-fonts.md) - Loading and using custom fonts
- [Validation](../advanced/validation.md) - Input validation and error handling