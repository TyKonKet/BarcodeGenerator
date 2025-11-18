# BarcodeGenerator API Documentation

Welcome to the comprehensive API documentation for the BarcodeGenerator .NET library. This library provides high-performance barcode generation capabilities using SkiaSharp for cross-platform graphics rendering.

---

## Quick Links

- [Getting Started](getting-started.md) - Your first barcode in minutes
- [API Reference](#api-reference) - Complete class and method documentation
- [Examples](#examples) - Code samples for common scenarios
- [Advanced Topics](#advanced-topics) - In-depth customization guides

---

## Overview

BarcodeGenerator is a .NET library that supports multiple barcode types with a fluent, easy-to-use API. Built on SkiaSharp, it provides consistent rendering across Windows, macOS, and Linux platforms.

### Supported Barcode Types

| Type | Description | Format |
|------|-------------|--------|
| **EAN-13** | European Article Number | 13 digits |
| **UPC-A** | Universal Product Code | 12 digits, North American retail |
| **UPC-E** | Compact UPC | 8 digits, small packages |
| **ISBN-13** | International Standard Book Number | For books |
| **EAN-8** | Compact EAN version | For small packages |
| **CODE-39** | Alphanumeric barcode | Industrial, automotive |
| **CODE-93** | Alphanumeric barcode | Used in logistics |
| **CODE-128** | High-density barcode | Alphanumeric encoding |
| **CODABAR** | Numeric barcode | Libraries, blood banks |

### Key Features

🚀 **Performance & Quality**
- High-performance optimization for speed and memory efficiency
- Professional-quality output suitable for commercial use
- Consistent rendering across all supported platforms

🎨 **Customization & Flexibility**
- Fully configurable colors, fonts, scaling, and margins
- Intuitive configuration with lambda expressions
- Support for custom font loading and styling

📱 **Cross-Platform Compatibility**
- Works seamlessly on Windows, macOS, Linux, and mobile platforms
- Multiple export formats: PNG, JPEG, WEBP, and more
- Framework support: .NET Standard 2.0, .NET Framework 4.6.2, .NET 6.0, .NET 8.0

✅ **Validation & Reliability**
- Automatic check digit calculation and validation
- Comprehensive error handling and informative exceptions
- Input validation for all supported barcode types

---

## Quick Example

Get started with a simple barcode generation example:

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

---

## API Reference

### Core Classes

| Class | Description | Documentation |
|-------|-------------|---------------|
| [Barcode](api/barcode.md) | Main entry point for barcode generation | Complete API reference |
| [BarcodeOptions](api/barcode-options.md) | Configuration options for barcode appearance | All properties and methods |
| [BarcodeTypes](api/barcode-types.md) | Enumeration of supported barcode types | Type definitions |

### Font System

| Class/Enum | Description | Documentation |
|------------|-------------|---------------|
| [FontFamily](api/fonts.md#fontfamily) | Font family wrapper with implicit conversions | Usage examples |
| [FontFamilies](api/fonts.md#fontfamilies) | Predefined font family enumeration | Available fonts |

---

## Examples

### Basic Usage
- [Simple Barcode Generation](examples/basic-usage.md) - Get started with basic barcode creation
- [Configuration Options](examples/customization.md) - Customize appearance and behavior
- [Export Formats](examples/export-formats.md) - Different output formats and quality settings

### Barcode Types
- [Supported Barcode Types](examples/supported-types.md) - Examples for each supported format

---

## Advanced Topics

Explore advanced features and customization options:

- [Custom Font Loading](advanced/custom-fonts.md) - Load fonts from files, streams, and embedded resources
- [Export Options and File Naming](advanced/export-options.md) - Advanced export scenarios and dynamic naming
- [Barcode Validation](advanced/validation.md) - Input validation, check digits, and error handling

---

## Installation

### Package Manager Console
```powershell
Install-Package TyKonKet.BarcodeGenerator
```

### .NET CLI
```bash
dotnet add package TyKonKet.BarcodeGenerator
```

---

## Framework Compatibility

| Framework | Version | Target Scenario |
|-----------|---------|-----------------|
| **.NET Standard 2.0** | 2.0+ | Core compatibility for most scenarios |
| **.NET Framework** | 4.6.2+ | Legacy Windows applications |
| **.NET 6.0** | 6.0+ | Long-term support version |
| **.NET 8.0** | 8.0+ | Latest stable version |
| **.NET 10.0** | 10.0+ | Future-ready version |

---

## License

This library is released under the MIT License. See the [LICENSE](../LICENSE) file for details.

## Contributing

Contributions are welcome! Please read our [Code of Conduct](../CODE_OF_CONDUCT.md) and check the project's [GitHub repository](https://github.com/TyKonKet/BarcodeGenerator) for contribution guidelines.