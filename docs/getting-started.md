# Getting Started with BarcodeGenerator

This guide will help you get up and running with the BarcodeGenerator library in just a few minutes.

## Installation

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

## Different Barcode Types

The library supports several barcode types:

### EAN-13 (European Article Number)
```csharp
using var ean13 = new Barcode(options => options.Type = BarcodeTypes.Ean13);
string result = ean13.Encode("123456789012"); // 12 digits + check digit
ean13.Export("ean13.png");
```

### UPC-A (Universal Product Code)
```csharp
using var upca = new Barcode(options => options.Type = BarcodeTypes.Upca);
string result = upca.Encode("12345678901"); // 11 digits + check digit
upca.Export("upca.png");
```

### ISBN-13 (Book Identification)
```csharp
using var isbn = new Barcode(options => options.Type = BarcodeTypes.Isbn13);
string result = isbn.Encode("978012345678"); // 12 digits + check digit
isbn.Export("isbn.png");
```

### EAN-8 (Compact version)
```csharp
using var ean8 = new Barcode(options => options.Type = BarcodeTypes.Ean8);
string result = ean8.Encode("1234567"); // 7 digits + check digit
ean8.Export("ean8.png");
```

### CODE-93 (Alphanumeric)
```csharp
using var code93 = new Barcode(options => options.Type = BarcodeTypes.Code93);
string result = code93.Encode("HELLO-WORLD");
code93.Export("code93.png");
```

## Export Options

### Different Image Formats
```csharp
// PNG (default)
barcode.Export("barcode.png", SKEncodedImageFormat.Png, 100);

// JPEG with 85% quality
barcode.Export("barcode.jpg", SKEncodedImageFormat.Jpeg, 85);

// WEBP format
barcode.Export("barcode.webp", SKEncodedImageFormat.Webp, 90);
```

### Dynamic File Naming
The export method supports keyword substitution:

```csharp
barcode.Encode("123456789012");
// Available keywords: {barcode}, {format}, {quality}
barcode.Export("products/{barcode}_q{quality}.{format}", SKEncodedImageFormat.Png, 100);
// Results in: products/1234567890128_q100.png
```

### Export to Stream
```csharp
using var memoryStream = new MemoryStream();
barcode.Export(memoryStream, SKEncodedImageFormat.Png, 100);
byte[] imageBytes = memoryStream.ToArray();
```

## Font Customization

### Using Predefined Fonts
```csharp
using var barcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.UseTypeface(FontFamilies.Arial); // Using enum
    // or
    options.UseTypeface("Verdana");          // Using string
});
```

### Custom Font Styling
```csharp
using var barcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.UseTypeface("Times New Roman", SKFontStyle.Bold);
});
```

## Error Handling

The library throws exceptions for invalid input. Always wrap in try-catch:

```csharp
try
{
    using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
    string result = barcode.Encode("invalid-length"); // Will throw exception
}
catch (ArgumentException ex)
{
    Console.WriteLine($"Invalid barcode data: {ex.Message}");
}
catch (InvalidOperationException ex)
{
    Console.WriteLine($"Operation error: {ex.Message}");
}
```

## Next Steps

Now that you have the basics down, explore more advanced topics:

- [API Reference](api/barcode.md) - Complete method documentation
- [Customization Examples](examples/customization.md) - Advanced styling options
- [Custom Fonts](advanced/custom-fonts.md) - Loading fonts from files
- [Export Options](advanced/export-options.md) - Advanced export scenarios
- [Validation](advanced/validation.md) - Understanding check digits and validation

## Common Patterns

### Fluent Configuration
```csharp
using var barcode = new Barcode(options => options
    .Type = BarcodeTypes.Ean13)
    .Height = 60)
    .Scaling = 2)
    .RenderText = true)
    .UseTypeface("Arial", SKFontStyle.Normal));
```

### Reusable Configuration
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
```csharp
string[] productCodes = { "123456789012", "987654321098", "456789012345" };

foreach (string code in productCodes)
{
    using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
    string validatedCode = barcode.Encode(code);
    barcode.Export($"product_{validatedCode}.png");
}
```