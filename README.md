# 📊 BarcodeGenerator

[![NuGet](https://img.shields.io/nuget/v/TyKonKet.BarcodeGenerator.svg)](https://www.nuget.org/packages/TyKonKet.BarcodeGenerator/)
[![NuGet Downloads](https://img.shields.io/nuget/dt/TyKonKet.BarcodeGenerator.svg)](https://www.nuget.org/packages/TyKonKet.BarcodeGenerator/)
[![Build Status](https://github.com/TyKonKet/BarcodeGenerator/actions/workflows/dotnet_test_runner.yml/badge.svg)](https://github.com/TyKonKet/BarcodeGenerator/actions/workflows/dotnet_test_runner.yml)
[![Benchmarks](https://github.com/TyKonKet/BarcodeGenerator/actions/workflows/dotnet_benchmark_runner.yml/badge.svg)](https://github.com/TyKonKet/BarcodeGenerator/actions/workflows/dotnet_benchmark_runner.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **The fastest, most reliable .NET barcode library.** Generate professional-quality barcodes in milliseconds with [SkiaSharp](https://github.com/mono/SkiaSharp)-powered rendering.

**🚀 From zero to barcode in 3 lines of code** • **📱 Cross-platform** • **⚡ High-performance** • **🎨 Fully customizable**

```csharp
using var barcode = new Barcode(opt => opt.Type = BarcodeTypes.Ean13);
string validated = barcode.Encode("123456789012");
barcode.Export("barcode.png");  // Done! 🎉
```

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

**8 industry-standard formats** for every use case:

| Type | Use Case | Example |
|------|----------|---------|
| **EAN-13** | 🛒 Retail products, European standard | `1234567890128` |
| **UPC-A** | 🇺🇸 North American retail, grocery | `012345678905` |
| **ISBN-13** | 📚 Books and publications | `9781234567897` |
| **EAN-8** | 📦 Small packages, compact spaces | `12345670` |
| **CODE-39** | 🏭 Industrial, automotive, defense | `ABC-123` |
| **CODE-93** | 📋 Logistics, inventory management | `ABC123` |
| **CODE-128** | 📊 High-density alphanumeric encoding | `ABC123xyz` |
| **CODABAR** | 🏥 Libraries, blood banks, logistics | `A123456A` |

---

## ⚡ Why Choose BarcodeGenerator?

### 🎯 **Performance That Matters**
- **<50ms generation time** for typical barcodes
- **Memory efficient** with proper disposal patterns
- **200% performance regression protection** via automated benchmarks
- **Optimized for high-throughput** scenarios

### 🎨 **Pixel-Perfect Quality**
- **Vector-based rendering** with SkiaSharp
- **Crisp output** at any scale or DPI
- **Professional formatting** with automatic check digits
- **Custom colors, fonts, and styling**

### 🔧 **Developer Experience**
- **Fluent API** with lambda configuration
- **Comprehensive validation** with helpful error messages
- **Export templating** with `{barcode}`, `{format}` placeholders
- **80%+ test coverage** for reliability

### 🌍 **Universal Compatibility**
- **5 .NET frameworks** supported (.NET Standard 2.0 to .NET 10.0)
- **Cross-platform** (Windows, macOS, Linux, mobile)
- **Multiple export formats** (PNG, JPEG, WebP, and more)
- **Zero external dependencies** beyond SkiaSharp

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

**Get up and running in 30 seconds:**

### 1️⃣ Install
```bash
dotnet add package TyKonKet.BarcodeGenerator
```

### 2️⃣ Generate
```csharp
using SkiaSharp;
using TyKonKet.BarcodeGenerator;

// Simple barcode generation
using var barcode = new Barcode(options => {
    options.Type = BarcodeTypes.Ean13;
    options.Height = 50;
    options.Scaling = 3;
});

string validatedCode = barcode.Encode("123456789012");
barcode.Export("my-barcode.png");
```

### 3️⃣ Customize
```csharp
// Advanced styling with custom colors and fonts
using var styledBarcode = new Barcode(options => {
    options.Type = BarcodeTypes.Ean13;
    options.ForegroundColor = SKColors.DarkBlue;
    options.TextColor = SKColors.Red;           // 🆕 Independent text color!
    options.BackgroundColor = SKColors.LightGray;
    options.UseTypeface("Arial", SKFontStyle.Bold);
    options.Margins = 10;
});

string result = styledBarcode.Encode("123456789012");
styledBarcode.Export("styled-barcode.png", SKEncodedImageFormat.Png, 100);
```

### 🔥 **Pro Tip: Export Templating**
```csharp
// Dynamic file naming with placeholders
barcode.Export("output/{barcode}_{quality}.{format}", SKEncodedImageFormat.Png, 95);
// Creates: output/1234567890128_95.png
```

> **💡 Need more help?** Check out our [Getting Started Guide](docs/getting-started.md) for step-by-step tutorials and examples.

---

## 🏭 Real-World Use Cases

**Trusted by developers building:**

- 🛒 **E-commerce platforms** - Product catalog barcodes
- 📦 **Inventory systems** - Asset tracking and management  
- 🏪 **POS applications** - Retail checkout integration
- 📚 **Library systems** - ISBN barcode generation
- 🚚 **Logistics software** - Package tracking codes
- 📱 **Mobile apps** - QR alternatives for simple data
- 🖨️ **Label printing** - Batch barcode generation

---

## 📋 Configuration Options

The `BarcodeOptions` class provides extensive customization capabilities:

| Option | Description | Default |
|--------|-------------|---------|
| **Type** | Barcode encoding type (EAN-13, UPC-A, ISBN-13, EAN-8, CODE-93, CODE-128) | EAN-8 |
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

### ✅ **Recently Completed**
- [x] **CODE-39** encoder - Automotive and defense industry standard

### 🚧 **Coming Soon**
- [ ] **QR Code** support - 2D barcode generation
- [ ] **Validation API** - Standalone barcode validation without generation
- [ ] **Batch processing** - Generate multiple barcodes efficiently
- [ ] **SVG export** - Vector format support

### 💡 **Future Enhancements**
- [ ] **Custom symbologies** - Plugin architecture for new formats
- [ ] **Web API** - RESTful barcode generation service
- [ ] **Blazor components** - Ready-to-use UI components

> **Have an idea?** [Start a discussion](https://github.com/TyKonKet/BarcodeGenerator/discussions) or [vote on features](https://github.com/TyKonKet/BarcodeGenerator/discussions/categories/ideas)!

---

## 📊 Project Health

![GitHub stars](https://img.shields.io/github/stars/TyKonKet/BarcodeGenerator?style=social)
![GitHub forks](https://img.shields.io/github/forks/TyKonKet/BarcodeGenerator?style=social)
![GitHub issues](https://img.shields.io/github/issues/TyKonKet/BarcodeGenerator)
![GitHub pull requests](https://img.shields.io/github/issues-pr/TyKonKet/BarcodeGenerator)

- **🔄 Active development** - Regular updates and improvements
- **🐛 Responsive support** - Issues typically resolved within 48h
- **📈 Growing community** - Join our discussions and contribute
- **🏆 Production ready** - Used in commercial applications worldwide

---

## 🤝 Contributing

We welcome contributions from the community! 🎉

**👉 [Full Contributing Guide](CONTRIBUTING.md)** - Complete guide to contributing with setup, workflows, and guidelines

**Quick Start:**
- 🐛 **Found a bug?** [Report it here](https://github.com/TyKonKet/BarcodeGenerator/issues/new?template=bug_report.yml)
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
