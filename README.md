# BarcodeGenerator

[![NuGet](https://img.shields.io/nuget/v/TyKonKet.BarcodeGenerator.svg)](https://www.nuget.org/packages/TyKonKet.BarcodeGenerator/)
[![NuGet](https://img.shields.io/nuget/dt/TyKonKet.BarcodeGenerator.svg)](https://www.nuget.org/packages/TyKonKet.BarcodeGenerator/)  
[![.NET Test Runner](https://github.com/TyKonKet/BarcodeGenerator/actions/workflows/dotnet_test_runner.yml/badge.svg)](https://github.com/TyKonKet/BarcodeGenerator/actions/workflows/dotnet_test_runner.yml)  
[![.NET Benchmark Runner](https://github.com/TyKonKet/BarcodeGenerator/actions/workflows/dotnet_benchmark_runner.yml/badge.svg)](https://github.com/TyKonKet/BarcodeGenerator/actions/workflows/dotnet_benchmark_runner.yml)  

A high-performance .NET library for generating barcodes using [SkiaSharp](https://github.com/mono/SkiaSharp). Create professional-quality barcodes with customizable appearance, cross-platform compatibility, and support for multiple barcode types.

---

## 📖 Documentation

**👉 [Complete Documentation](docs/README.md)** - Comprehensive guides, API reference, and examples

### Quick Links

- **[Getting Started Guide](docs/getting-started.md)** - Generate your first barcode in minutes
- **[API Reference](docs/README.md#api-reference)** - Complete class and method documentation  
- **[Code Examples](docs/README.md#examples)** - Common usage patterns and scenarios
- **[Advanced Topics](docs/README.md#advanced-topics)** - Custom fonts, validation, and optimization

---

## 🚀 Supported Barcode Types

BarcodeGenerator supports five major barcode formats commonly used across different industries:

- **EAN-13** - European Article Number, 13 digits
- **UPC-A** - Universal Product Code, widely used in North America  
- **ISBN-13** - International Standard Book Number for books
- **EAN-8** - Compact version of EAN-13 for small packages
- **CODE-93** - Alphanumeric barcode used in logistics

---

## ✨ Key Features

Designed for performance, flexibility, and ease of use across all .NET platforms:

- 🎯 **High Performance** - Optimized for speed and memory efficiency
- 🎨 **Customizable** - Colors, fonts, scaling, margins fully configurable
- 📱 **Cross-Platform** - Works on Windows, macOS, Linux, and mobile platforms
- 🔧 **Action Delegate Configuration** - Intuitive configuration with lambda expressions
- 📸 **Multiple Export Formats** - PNG, JPEG, and other image formats
- ✅ **Validation** - Automatic check digit calculation and validation
- 🔌 **Framework Support** - .NET Standard 2.0, .NET Framework 4.6.2, .NET 6.0, .NET 8.0, .NET 10.0

---

## 📦 Installation

Choose your preferred installation method:

**Package Manager Console:**
```powershell
Install-Package TyKonKet.BarcodeGenerator
```

**CLI Command:**
```bash
dotnet add package TyKonKet.BarcodeGenerator
```

---

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

**NEW: Independent Text Color Control**

```csharp
// Create a barcode with custom text color
using var customBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.Height = 50;
    options.Scaling = 3;
    options.ForegroundColor = SKColors.Black;    // Bar color
    options.TextColor = SKColors.Red;           // Text color (NEW!)
    options.RenderText = true;
});

string result = customBarcode.Encode("123456789012");
customBarcode.Export("custom-text-color.png", SKEncodedImageFormat.Png, 100);
```

> **💡 Need more help?** Check out our [Getting Started Guide](docs/getting-started.md) for step-by-step tutorials and examples.

---

## 📋 Configuration Options

The `BarcodeOptions` class provides extensive customization capabilities:

| Option | Description | Default |
|--------|-------------|---------|
| **Type** | Barcode encoding type (EAN-13, UPC-A, ISBN-13, EAN-8, CODE-93) | EAN-8 |
| **Height** | Height of barcode bars | 30 pixels |
| **Scaling** | Scale factor for the entire image | 5x |
| **Margins** | Spacing around the barcode | 2 pixels |
| **Colors** | Background, foreground, and text colors (independent control) | White/Black |
| **Text Rendering** | Show/hide text below barcode | Enabled |
| **Font Options** | Custom fonts, styles, and loading methods | System default |

> **📚 Detailed Configuration:** See our [BarcodeOptions API Reference](docs/api/barcode-options.md) for complete documentation.

---

## 🔧 Framework Compatibility

BarcodeGenerator supports multiple .NET framework versions for maximum compatibility:

| Framework | Version | Target Scenario |
|-----------|---------|-----------------|
| **.NET Standard 2.0** | 2.0+ | Core compatibility for most scenarios |
| **.NET Framework** | 4.6.2+ | Legacy Windows applications |
| **.NET 6.0** | 6.0+ | Long-term support version |
| **.NET 8.0** | 8.0+ | Latest stable version |
| **.NET 10.0** | 10.0+ | Future-ready version |

---

## 🔄 Breaking Changes

### Version 2.1.0

- **PolySharp Integration:** The library now includes the `PolySharp` package to enhance compatibility. If you encounter any issues, please report them by opening an issue on our GitHub repository. For more details, visit the [PolySharp GitHub repository](https://github.com/Sergio0694/PolySharp).

### Version 2.0.0

- **Framework Requirement:** No longer supports .NET Standard 1.3 (requires .NET Standard 2.0+).
- **API Changes:** Redesigned for improved usability and customization.
- **SkiaSharp Update:** Updated to SkiaSharp 3.116.1 for better performance.

> **📖 Migration Guide:** See our [Getting Started documentation](docs/getting-started.md) for updated API usage patterns.

---

## 🗺️ Roadmap

### Planned Features and Improvements

- [ ] Add support for CODE39 encoder
- [ ] Add support for CODE128 encoder
- [ ] Add support for more barcode types  
- [ ] Add an API to validate the barcode

---

## 🤝 Contributing

We welcome contributions from the community! 🎉

**👉 [Full Contributing Guide](CONTRIBUTING.md)** - Complete guide to contributing with setup, workflows, and guidelines

**Quick Start:**
- 🐛 **Found a bug?** [Report it here](https://github.com/TyKonKet/BarcodeGenerator/issues/new)
- ✨ **Have an idea?** [Start a discussion](https://github.com/TyKonKet/BarcodeGenerator/discussions)
- 🚀 **Ready to code?** Check out [good first issues](https://github.com/TyKonKet/BarcodeGenerator/labels/good%20first%20issue)

**Essential Checks:**
- Run tests: `dotnet test --configuration Release`
- Check coverage: `./scripts/run-coverage.sh`
- Follow our [Code of Conduct](CODE_OF_CONDUCT.md)

*Every contribution matters - from typo fixes to new features!* ✨

---

## 📄 License

This library is released under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**📚 [Explore Full Documentation](docs/README.md)** | **🚀 [Getting Started Guide](docs/getting-started.md)** | **🔧 [API Reference](docs/README.md#api-reference)**
