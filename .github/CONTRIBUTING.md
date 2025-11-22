# 🤝 Contributing to BarcodeGenerator

Thank you for your interest in contributing to BarcodeGenerator! 🎉 We're excited to have you join our community of developers building the best .NET barcode library.

## 🚀 Quick Start for Contributors

1. **Fork & Clone** the repository
2. **Install .NET 10.x SDK** (required for tests)
3. **Run initial build** to ensure everything works:
   ```bash
   cd TyKonKet.BarcodeGenerator
   dotnet build --configuration Release
   ```
4. **Run tests** to verify your setup:
   ```bash
   cd Tests/TyKonKet.BarcodeGenerator.Tests
   dotnet test --configuration Release
   ```

Ready to contribute? Let's go! 🚀

---

## 🎯 Ways to Contribute

### 🐛 Bug Reports
Found a bug? Help us squash it!
- **Search existing issues** first to avoid duplicates
- **Use the bug report template** when creating new issues
- **Include minimal reproduction steps** and environment details
- **Add sample code** that demonstrates the issue

### ✨ Feature Requests
Have an idea to make BarcodeGenerator even better?
- **Check our roadmap** in the README to see planned features
- **Open a discussion** before implementing large features
- **Consider backward compatibility** for API changes
- **Think about cross-platform** implications

### 📚 Documentation
Help make our docs amazing!
- **Fix typos** and improve clarity
- **Add examples** for common use cases
- **Update API documentation** for new features
- **Translate** content (future enhancement)

### 🔧 Code Contributions
Ready to dive into the code?
- **Start with "good first issue"** labels
- **Follow our coding standards** (enforced by 13+ analyzers!)
- **Write tests** for new functionality (80% coverage required)
- **Update documentation** for any API changes

---

## 🛠️ Development Setup

### Prerequisites
- **.NET 10.x SDK** (critical for test projects)
- **Git** for version control
- **IDE**: Visual Studio, VS Code, or JetBrains Rider

### Repository Structure
```
├── TyKonKet.BarcodeGenerator/     # 📦 Main library
│   ├── Barcode.cs                 # 🏠 Main entry point
│   ├── Encoders/                  # 🔧 Barcode type implementations
│   └── Utils/                     # 🛠️ Helper utilities
├── Tests/                         # 🧪 All test projects
│   ├── *.Tests/                   # Unit tests (xUnit)
│   ├── *.Benchmarks/              # Performance tests
│   └── *.Playground/              # Development sandbox
└── docs/                          # 📖 Documentation
```

### Key Architecture Patterns
- **Factory Pattern**: Dynamic encoder creation via reflection
- **Options Pattern**: Fluent configuration with immutable state
- **Template Method**: Abstract base encoders with shared logic
- **Export Templating**: Dynamic file naming with placeholders

---

## 💻 Development Workflow

### 1. 🍴 Fork & Setup
```bash
# Fork the repo on GitHub, then:
git clone https://github.com/YOUR_USERNAME/BarcodeGenerator.git
cd BarcodeGenerator
git remote add upstream https://github.com/TyKonKet/BarcodeGenerator.git
```

### 2. 🌿 Create Feature Branch
```bash
git checkout -b feature/awesome-new-feature
# or
git checkout -b fix/bug-description
```

### 3. 💡 Make Your Changes
- **Build frequently**: `dotnet build --configuration Release`
- **Run tests**: `dotnet test --configuration Release`
- **Check coverage**: `./tools/run-coverage.sh`
- **Follow naming conventions**: `{BarcodeType}Encoder` for new encoders

### 4. ✅ Quality Checks
Before committing, ensure:
```bash
# Build passes (with all analyzers)
dotnet build --configuration Release

# Tests pass
cd Tests/TyKonKet.BarcodeGenerator.Tests
dotnet test --configuration Release

# Coverage meets threshold (80%+)
./tools/run-coverage.sh
```

### 5. 📝 Commit & Push
```bash
git add .
git commit -m "feat: add support for CODE-128 encoder"
git push origin feature/awesome-new-feature
```

### 6. 🔄 Create Pull Request
- **Use our PR template** (auto-populated)
- **Link related issues** with `Fixes #123`
- **Describe your changes** clearly
- **Include screenshots** for visual changes

---

## 🧪 Testing Guidelines

### Testing Philosophy
We believe in **comprehensive, fast, and reliable tests**. Every contribution should maintain our high testing standards.

### Test Requirements
- **80% minimum coverage** (enforced automatically)
- **Parameterized tests** using `[Theory]` and `[InlineData]`
- **Both positive and negative** test cases
- **Performance regression** testing for core functionality

### Test Organization
```
Tests/TyKonKet.BarcodeGenerator.Tests/
├── Encoders/                    # Encoder-specific tests
├── Integration/                 # End-to-end scenarios
├── Utils/                       # Helper utility tests
└── Fonts/                       # Font system tests
```

### Writing Great Tests
```csharp
[Theory]
[InlineData("123456789012", "1234567890128")]  // Valid input
[InlineData("000000000000", "0000000000007")]  // Edge case
public void Encode_ValidInput_ReturnsCorrectCheckDigit(string input, string expected)
{
    // Arrange
    using var barcode = new Barcode(opt => opt.Type = BarcodeTypes.Ean13);
    
    // Act
    string result = barcode.Encode(input);
    
    // Assert
    Assert.Equal(expected, result);
}
```

---

## 📊 Performance Considerations

### Benchmarking
We use **BenchmarkDotNet** to catch performance regressions:
- **200% degradation threshold** triggers alerts
- **Memory allocation** tracking for efficiency
- **Cross-framework** comparison (.NET 6/8/10)

### Performance Guidelines
- **Avoid allocations** in hot paths
- **Use `Span<T>`** for memory-efficient operations
- **Cache reflection** results (see `EncodersFactory`)
- **Profile before optimizing** with BenchmarkDotNet

---

## 🎨 Code Style & Standards

### Automated Enforcement
We use **13 analyzers** to maintain code quality:
- Microsoft.CodeAnalysis.NetAnalyzers
- SonarAnalyzer.CSharp
- StyleCop.Analyzers
- Roslynator suite
- And more!

### Key Conventions
- **C# 12 features** encouraged where appropriate
- **Nullable reference types** enabled
- **XML documentation** for public APIs
- **Consistent naming**: `{BarcodeType}Encoder` pattern

### Example: Adding a New Encoder
```csharp
namespace TyKonKet.BarcodeGenerator.Encoders
{
    /// <summary>
    /// Encoder implementation for CODE-128 barcodes.
    /// </summary>
    internal sealed class Code128Encoder : Encoder
    {
        public Code128Encoder(BarcodeOptions options) : base(options) { }
        
        protected override Regex AllowedCharsetPattern => 
            RegexCache.GetOrAdd(@"^[\x00-\x7F]+$"); // ASCII only
            
        public override string Encode(string barcode)
        {
            // Implementation here...
        }
    }
}
```

---

## 🚀 Release Process

### Versioning
We follow **Semantic Versioning (SemVer)**:
- **Major** (1.0.0): Breaking changes
- **Minor** (0.1.0): New features, backward compatible
- **Patch** (0.0.1): Bug fixes

### Release Checklist
- [ ] All tests pass
- [ ] Coverage threshold met
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] Version numbers bumped
- [ ] NuGet package tested

---

## 🏆 Recognition

### Contributors Hall of Fame
Every contributor gets recognition in our README and release notes!

### Ways We Celebrate Contributions
- 🎉 **Shoutouts** in release notes
- 📢 **Social media** recognition
- 🏅 **Contributor badges** (coming soon)
- 💝 **Swag** for significant contributions (future)

---

## 🆘 Getting Help

### Community Support
- **GitHub Discussions**: Ask questions, share ideas
- **Issues**: Bug reports and feature requests
- **Code Reviews**: Learn from maintainer feedback

### Maintainer Contact
- **Response time**: Usually within 24-48 hours
- **Timezone**: CET (Central European Time)
- **Availability**: Weekdays preferred, but we check weekends too

---

## 📜 Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold this code. Please report unacceptable behavior to project maintainers.

---

## 🎊 Thank You!

Your contributions make BarcodeGenerator better for everyone. Whether you're fixing a typo, adding a feature, or improving performance, every contribution matters.

**Happy coding!** 💻✨

---

*Ready to start? Check out our [good first issues](https://github.com/TyKonKet/BarcodeGenerator/labels/good%20first%20issue) and dive in!*
