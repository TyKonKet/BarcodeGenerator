# BarcodeGenerator

[![NuGet](https://img.shields.io/nuget/v/TyKonKet.BarcodeGenerator.svg)](https://www.nuget.org/packages/TyKonKet.BarcodeGenerator/)
[![NuGet](https://img.shields.io/nuget/dt/TyKonKet.BarcodeGenerator.svg)](https://www.nuget.org/packages/TyKonKet.BarcodeGenerator/)  
[![.NET Test Runner](https://github.com/TyKonKet/BarcodeGenerator/actions/workflows/dotnet_test_runner.yml/badge.svg)](https://github.com/TyKonKet/BarcodeGenerator/actions/workflows/dotnet_test_runner.yml)  
[![.NET Benchmark Runner](https://github.com/TyKonKet/BarcodeGenerator/actions/workflows/dotnet_benchmark_runner.yml/badge.svg)](https://github.com/TyKonKet/BarcodeGenerator/actions/workflows/dotnet_benchmark_runner.yml)  

A high-performance .NET library for generating barcodes using [SkiaSharp](https://github.com/mono/SkiaSharp). Create professional-quality barcodes with customizable appearance, cross-platform compatibility, and support for multiple barcode types.

## 📖 Documentation

**👉 [Complete Documentation](docs/README.md)** - Comprehensive guides, API reference, and examples

### Quick Links

- **[Getting Started Guide](docs/getting-started.md)** - Generate your first barcode in minutes
- **[API Reference](docs/README.md#api-reference)** - Complete class and method documentation  
- **[Code Examples](docs/README.md#examples)** - Common usage patterns and scenarios
- **[Advanced Topics](docs/README.md#advanced-topics)** - Custom fonts, validation, and optimization

## 🚀 Supported Barcode Types

- **EAN-13** - European Article Number, 13 digits
- **UPC-A** - Universal Product Code, widely used in North America  
- **ISBN-13** - International Standard Book Number for books
- **EAN-8** - Compact version of EAN-13 for small packages
- **CODE-93** - Alphanumeric barcode used in logistics

## ✨ Key Features

- 🎯 **High Performance** - Optimized for speed and memory efficiency
- 🎨 **Customizable** - Colors, fonts, scaling, margins fully configurable
- 📱 **Cross-Platform** - Works on Windows, macOS, Linux, and mobile platforms
- 🔧 **Action Delegate Configuration** - Intuitive configuration with lambda expressions
- 📸 **Multiple Export Formats** - PNG, JPEG, and other image formats
- ✅ **Validation** - Automatic check digit calculation and validation
- 🔌 **Framework Support** - .NET Standard 2.0, .NET Framework 4.6.2, .NET 6.0, .NET 8.0

## 📦 Installation

Install BarcodeGenerator via NuGet Package Manager:

```powershell
Install-Package TyKonKet.BarcodeGenerator
```

Or via .NET CLI:

```bash
dotnet add package TyKonKet.BarcodeGenerator
```

## 🎯 Quick Start

Generate your first barcode in just a few lines of code:

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

> **💡 Need more help?** Check out our [Getting Started Guide](docs/getting-started.md) for step-by-step tutorials and examples.

## 📋 Configuration Options

The `BarcodeOptions` class provides extensive customization:

- **Type** - Barcode encoding type (EAN-13, UPC-A, ISBN-13, EAN-8, CODE-93)
- **Height** - Height of barcode bars  
- **Scaling** - Scale factor for the entire image
- **Margins** - Spacing around the barcode
- **Colors** - Background and foreground colors
- **Text Rendering** - Show/hide text below barcode
- **Font Options** - Custom fonts, styles, and loading methods

> **📚 Detailed Configuration:** See our [BarcodeOptions API Reference](docs/api/barcode-options.md) for complete documentation.

## 🔧 Framework Compatibility

- **.NET Standard 2.0** - Core compatibility for most scenarios
- **.NET Framework 4.6.2** - Legacy Windows applications  
- **.NET 6.0** - Long-term support version
- **.NET 8.0** - Latest stable version

## 🔄 Breaking Changes

### Version 2.0.0+

- **Framework Requirement:** No longer supports .NET Standard 1.3 (requires .NET Standard 2.0+)
- **API Changes:** Redesigned for improved usability and customization
- **SkiaSharp Update:** Updated to SkiaSharp 3.116.1 for better performance

> **📖 Migration Guide:** See our [Getting Started documentation](docs/getting-started.md) for updated API usage patterns.

## 🗺️ Roadmap

- [x] ~~Update the README.md documentation~~ ✅ **Completed**
- [ ] Add support for CODE39 and CODE128 encoders
- [ ] Add support for more barcode types  
- [ ] Add an API to validate the barcode

## 🤝 Contributing

Contributions are welcome! Please read our [Code of Conduct](CODE_OF_CONDUCT.md) and check the project's [GitHub repository](https://github.com/TyKonKet/BarcodeGenerator) for contribution guidelines.

## 📄 License

This library is released under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**📚 [Explore Full Documentation](docs/README.md)** | **🚀 [Getting Started Guide](docs/getting-started.md)** | **🔧 [API Reference](docs/README.md#api-reference)**
