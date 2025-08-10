# Getting Started with BarcodeGenerator

This guide will help you get up and running with the BarcodeGenerator library in just a few minutes.

---

## Installation

Choose your preferred installation method:

### Package Manager Console
```powershell
Install-Package TyKonKet.BarcodeGenerator
```

### .NET CLI
```bash
dotnet add package TyKonKet.BarcodeGenerator
```

### PackageReference (in .csproj)
```xml
<PackageReference Include="TyKonKet.BarcodeGenerator" Version="2.0.0" />
```

---

## Your First Barcode

Let's create a simple EAN-13 barcode:

```csharp
using SkiaSharp;
using TyKonKet.BarcodeGenerator;

class Program
{
    static void Main()
    {
        // Create a barcode with default settings
        using var barcode = new Barcode(options =>
        {
            options.Type = BarcodeTypes.Ean13;
        });

        // Encode the barcode (check digit will be automatically calculated)
        string validatedCode = barcode.Encode("123456789012");
        Console.WriteLine($"Generated barcode: {validatedCode}"); // Output: 1234567890128

        // Export to PNG file
        barcode.Export("my-first-barcode.png");
    }
}
```

**What happened here?**
- Created a barcode instance with EAN-13 type
- Encoded 12 digits (check digit added automatically to make 13)
- Exported the barcode as a PNG image

---

## Basic Customization

Here's how to customize the barcode appearance:

```csharp
using var barcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.Height = 50;                           // Bar height in pixels
    options.Scaling = 3;                           // Scale factor for the entire barcode
    options.Margins = 5;                           // Margin around the barcode
    options.BackgroundColor = SKColors.White;      // Background color
    options.ForegroundColor = SKColors.Black;      // Bar color
    options.RenderText = true;                     // Show text below bars
});

string result = barcode.Encode("123456789012");
barcode.Export("customized-barcode.png", SKEncodedImageFormat.Png, 100);
```

**Configuration Options Explained:**

| Option | Purpose | Effect |
|--------|---------|--------|
| `Height` | Controls bar height | Taller bars = easier scanning |
| `Scaling` | Overall size multiplier | Higher values = larger image |
| `Margins` | White space around barcode | Prevents clipping and aids scanning |
| `RenderText` | Shows human-readable text | Useful for manual verification |

---

## Different Barcode Types

The library supports several barcode types, each optimized for specific use cases:

### EAN-13 (European Article Number)

**Use Case:** Retail products, international commerce

```csharp
using var ean13 = new Barcode(options => options.Type = BarcodeTypes.Ean13);
string result = ean13.Encode("123456789012"); // 12 digits + check digit
ean13.Export("ean13.png");
```

### UPC-A (Universal Product Code)

**Use Case:** North American retail products

```csharp
using var upca = new Barcode(options => options.Type = BarcodeTypes.Upca);
string result = upca.Encode("12345678901"); // 11 digits + check digit
upca.Export("upca.png");
```

### ISBN-13 (Book Identification)

**Use Case:** Book publishing and library systems

```csharp
using var isbn = new Barcode(options => options.Type = BarcodeTypes.Isbn13);
string result = isbn.Encode("978012345678"); // 12 digits + check digit
isbn.Export("isbn.png");
```

### EAN-8 (Compact version)

**Use Case:** Small packages with limited space

```csharp
using var ean8 = new Barcode(options => options.Type = BarcodeTypes.Ean8);
string result = ean8.Encode("1234567"); // 7 digits + check digit
ean8.Export("ean8.png");
```

### CODE-93 (Alphanumeric)

**Use Case:** Logistics, inventory management, shipping

```csharp
using var code93 = new Barcode(options => options.Type = BarcodeTypes.Code93);
string result = code93.Encode("HELLO-WORLD");
code93.Export("code93.png");
```

---

## Export Options

### Different Image Formats

Choose the best format for your use case:

```csharp
// PNG (default) - Best quality, lossless compression
barcode.Export("barcode.png", SKEncodedImageFormat.Png, 100);

// JPEG - Smaller file size, good for web
barcode.Export("barcode.jpg", SKEncodedImageFormat.Jpeg, 85);

// WEBP - Modern format, excellent compression
barcode.Export("barcode.webp", SKEncodedImageFormat.Webp, 90);
```

**Format Comparison:**

| Format | Best For | Quality | File Size |
|--------|----------|---------|-----------|
| **PNG** | Print, archival | Lossless | Larger |
| **JPEG** | Web, email | Good | Medium |
| **WEBP** | Modern web | Excellent | Smallest |

### Dynamic File Naming

The export method supports keyword substitution for dynamic file naming:

```csharp
barcode.Encode("123456789012");

// Available keywords: {barcode}, {format}, {quality}
barcode.Export("products/{barcode}_q{quality}.{format}", SKEncodedImageFormat.Png, 100);
// Results in: products/1234567890128_q100.png
```

**Available Keywords:**
- `{barcode}` - The encoded barcode value
- `{format}` - The image format (png, jpg, webp)
- `{quality}` - The quality setting (0-100)

### Export to Stream

For scenarios where you need the image data in memory:

```csharp
using var memoryStream = new MemoryStream();
barcode.Export(memoryStream, SKEncodedImageFormat.Png, 100);
byte[] imageBytes = memoryStream.ToArray();
```

---

## Font Customization

### Using Predefined Fonts

Choose from built-in font families:

```csharp
using var barcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.UseTypeface(FontFamilies.Arial); // Using enum
    // or
    options.UseTypeface("Verdana");          // Using string
});
```

**Available Predefined Fonts:**
- Arial
- Times New Roman  
- Verdana
- Helvetica
- Consolas (monospace)

### Custom Font Styling

Apply specific font styles for enhanced appearance:

```csharp
using var barcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.UseTypeface("Times New Roman", SKFontStyle.Bold);
});
```

**Available Font Styles:**
- `SKFontStyle.Normal` - Regular weight
- `SKFontStyle.Bold` - Bold weight
- `SKFontStyle.Italic` - Italic style
- `SKFontStyle.BoldItalic` - Bold and italic combined

---

## Error Handling

The library throws exceptions for invalid input. Always wrap barcode operations in try-catch blocks:

```csharp
try
{
    using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
    string result = barcode.Encode("invalid-chars!@#"); // Will throw exception
}
catch (InvalidOperationException ex)
{
    Console.WriteLine($"Barcode initialization error: {ex.Message}");
}
catch (ArgumentNullException ex)
{
    Console.WriteLine($"Null argument: {ex.Message}");
}
catch (FormatException ex)
{
    Console.WriteLine($"Invalid barcode format: {ex.Message}");
}
catch (ArgumentOutOfRangeException ex)
{
    Console.WriteLine($"Argument out of range: {ex.Message}");
}
```

**Common Exception Types:**

| Exception | When It Occurs | How to Prevent |
|-----------|----------------|----------------|
| `InvalidOperationException` | Configuration errors | Validate options before use |
| `ArgumentNullException` | Null input provided | Check for null values |
| `FormatException` | Invalid barcode format | Validate input format |
| `ArgumentOutOfRangeException` | Values outside valid range | Check input ranges |

---

## Next Steps

Now that you have the basics down, explore more advanced topics:

**📚 Deep Dive Documentation:**
- [API Reference](api/barcode.md) - Complete method documentation
- [Customization Examples](examples/customization.md) - Advanced styling options
- [Custom Fonts](advanced/custom-fonts.md) - Loading fonts from files
- [Export Options](advanced/export-options.md) - Advanced export scenarios
- [Validation](advanced/validation.md) - Understanding check digits and validation

**🏃‍♂️ Quick Reference:**
- [Basic Usage Examples](examples/basic-usage.md) - Copy-paste code samples
- [Supported Types](examples/supported-types.md) - Examples for each barcode type

---

## Common Patterns

### Reusable Configuration

Create reusable configuration functions to maintain consistency:

```csharp
void ConfigureOptions(BarcodeOptions options)
{
    options.Height = 50;
    options.Scaling = 3;
    options.BackgroundColor = SKColors.Transparent;
    options.ForegroundColor = SKColors.DarkBlue;
    options.UseTypeface("Consolas");
}

// Use the configuration
using var barcode = new Barcode(ConfigureOptions);
```

### Batch Processing

Efficiently process multiple barcodes:

```csharp
string[] productCodes = { "123456789012", "987654321098", "456789012345" };

using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
foreach (string code in productCodes)
{
    string validatedCode = barcode.Encode(code);
    barcode.Export($"product_{validatedCode}.png");
}
```

**💡 Pro Tips:**
- Reuse `Barcode` instances for better performance when processing multiple codes
- Use meaningful file naming patterns for easier organization
- Consider using `using` statements to ensure proper resource disposal