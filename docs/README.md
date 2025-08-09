# BarcodeGenerator API Documentation

Welcome to the comprehensive API documentation for the BarcodeGenerator .NET library. This library provides high-performance barcode generation capabilities using SkiaSharp for cross-platform graphics rendering.

## Quick Links

- [Getting Started](getting-started.md) - Your first barcode in minutes
- [API Reference](#api-reference) - Complete class and method documentation
- [Examples](#examples) - Code samples for common scenarios
- [Advanced Topics](#advanced-topics) - In-depth customization guides

## Overview

BarcodeGenerator is a .NET library that supports multiple barcode types with a fluent, easy-to-use API. Built on SkiaSharp, it provides consistent rendering across Windows, macOS, and Linux platforms.

### Supported Barcode Types

- **EAN-13** - European Article Number, 13 digits
- **UPC-A** - Universal Product Code, widely used in North America
- **ISBN-13** - International Standard Book Number for books
- **EAN-8** - Compact version of EAN-13 for small packages
- **CODE-93** - Alphanumeric barcode used in logistics

### Key Features

- 🚀 **High Performance** - Optimized for speed and memory efficiency
- 🎨 **Customizable** - Colors, fonts, scaling, margins fully configurable
- 📱 **Cross-Platform** - Works on Windows, macOS, Linux, and mobile platforms
- 🔧 **Fluent API** - Intuitive configuration with method chaining
- 📸 **Multiple Export Formats** - PNG, JPEG, and other image formats
- ✅ **Validation** - Automatic check digit calculation and validation
- 🎯 **Framework Support** - .NET Standard 2.0, .NET Framework 4.6.2, .NET 6.0, .NET 8.0

## Quick Example

```csharp
using SkiaSharp;
using TyKonKet.BarcodeGenerator;

// Create and configure a barcode
using var barcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.Height = 50;
    options.Scaling = 3;
    options.RenderText = true;
    options.UseTypeface("Arial", SKFontStyle.Normal);
});

// Generate and export
string validatedCode = barcode.Encode("123456789012");
barcode.Export("my-barcode.png", SKEncodedImageFormat.Png, 100);
```

## API Reference

### Core Classes

| Class | Description |
|-------|-------------|
| [Barcode](api/barcode.md) | Main entry point for barcode generation |
| [BarcodeOptions](api/barcode-options.md) | Configuration options for barcode appearance |
| [BarcodeTypes](api/barcode-types.md) | Enumeration of supported barcode types |

### Font System

| Class/Enum | Description |
|------------|-------------|
| [FontFamily](api/fonts.md#fontfamily) | Font family wrapper with implicit conversions |
| [FontFamilies](api/fonts.md#fontfamilies) | Predefined font family enumeration |

## Examples

### Basic Usage
- [Simple Barcode Generation](examples/basic-usage.md)
- [Configuration Options](examples/customization.md)
- [Export Formats](examples/export-formats.md)

### Barcode Types
- [Supported Barcode Types](examples/supported-types.md)

## Advanced Topics

- [Custom Font Loading](advanced/custom-fonts.md)
- [Export Options and File Naming](advanced/export-options.md)
- [Barcode Validation](advanced/validation.md)

## Installation

Install via NuGet Package Manager:

```powershell
Install-Package TyKonKet.BarcodeGenerator
```

Or via .NET CLI:

```bash
dotnet add package TyKonKet.BarcodeGenerator
```

## Framework Compatibility

- **.NET Standard 2.0** - Core compatibility for most scenarios
- **.NET Framework 4.6.2** - Legacy Windows applications
- **.NET 6.0** - Long-term support version
- **.NET 8.0** - Latest stable version

## License

This library is released under the MIT License. See the [LICENSE](../LICENSE) file for details.

## Contributing

Contributions are welcome! Please read our [Code of Conduct](../CODE_OF_CONDUCT.md) and check the project's [GitHub repository](https://github.com/TyKonKet/BarcodeGenerator) for contribution guidelines.