# Copilot Instructions for BarcodeGenerator Repository

## Repository Overview

**BarcodeGenerator** is a .NET library for generating barcodes using SkiaSharp. The library supports multiple barcode types (EAN-13, UPC-A, ISBN-13, EAN-8, CODE-93) and provides a fluent API for configuration and export. It's distributed as a NuGet package and targets multiple .NET frameworks.

**Repository Size**: Medium (~50 source files)  
**Project Type**: .NET Class Library  
**Languages**: C# (.NET Standard 2.0, .NET 6.0, .NET 8.0, .NET Framework 4.6.2)  
**Main Dependencies**: SkiaSharp 3.116.1, System.ValueTuple  
**Test Framework**: xUnit with BenchmarkDotNet for performance testing

## Build Instructions

### Prerequisites
- **.NET SDK 9.x** is required for full solution build (test projects target .NET 9.0)
- If only .NET 8.x is available, you can build the main library individually
- Linux: SkiaSharp.NativeAssets.Linux.NoDependencies provides native dependencies

### Working Build Commands

**Build main library only** (works with .NET 8.x):
```bash
cd TyKonKet.BarcodeGenerator
dotnet restore
dotnet build --configuration Release
```

**Full solution build** (requires .NET 9.x):
```bash
dotnet restore
dotnet build --configuration Release
```

**Run tests** (requires .NET 9.x):
```bash
cd Tests/TyKonKet.BarcodeGenerator.Tests
dotnet test --configuration Release --logger "GitHubActions;summary.includePassedTests=true;summary.includeSkippedTests=true"
```

**Run benchmarks** (requires .NET 9.x):
```bash
cd Tests/TyKonKet.BarcodeGenerator.CB
dotnet run --configuration Release --exporters json --filter '*'
```

### Known Build Issues
- **CRITICAL**: Test projects target .NET 9.0 and will fail with earlier SDK versions
- Solution-level `dotnet restore` fails with .NET 8.x due to targeting conflicts
- **Workaround**: Build main library individually or upgrade to .NET 9.x SDK
- Build warnings are expected from static analyzers (not errors)

### Build Time Expectations
- Main library build: ~20 seconds
- Full solution build: ~45 seconds  
- Test execution: ~30 seconds
- Benchmark run: ~2-5 minutes

## Validation Pipeline

### Continuous Integration
The repository uses GitHub Actions with two main workflows:

**Test Runner** (`.github/workflows/dotnet_test_runner.yml`):
- Triggers: Push to master, manual dispatch
- Environment: Ubuntu latest with .NET 9.x
- Command: `dotnet test --configuration Release` in test directory
- Always run tests before committing changes

**Benchmark Runner** (`.github/workflows/dotnet_benchmark_runner.yml`):
- Triggers: Push to master, manual dispatch  
- Runs performance regression checks
- Publishes results to GitHub Pages
- Alerts on >200% performance degradation

### Code Quality Checks
The project enforces strict code quality with multiple analyzers:

**Always run before committing**:
```bash
dotnet build --configuration Release
```

**Enabled Analyzers**:
- Microsoft.CodeAnalysis.NetAnalyzers (built-in .NET analyzers)
- SonarAnalyzer.CSharp (code quality)
- StyleCop.Analyzers (style consistency) 
- Meziantou.Analyzer (additional rules)
- Roslynator.Analyzers (refactoring suggestions)
- Multiple specialized analyzers (IDisposableAnalyzers, ErrorProne.NET, etc.)

**Configuration**: `.editorconfig` disables some StyleCop rules, `EnforceCodeStyleInBuild=True` is enabled

## Project Layout and Architecture

### Solution Structure
```
TyKonKet.BarcodeGenerator.sln          # Main solution file
├── TyKonKet.BarcodeGenerator/         # Main library project
│   ├── Barcode.cs                     # Main API entry point
│   ├── BarcodeOptions.cs              # Configuration options
│   ├── BarcodeTypes.cs               # Supported barcode types enum
│   ├── Encoders/                     # Encoder implementations
│   │   ├── Abstract/                 # Base classes and interfaces
│   │   ├── Ean13Encoder.cs          # EAN-13 implementation
│   │   ├── UpcaEncoder.cs           # UPC-A implementation
│   │   ├── Ean8Encoder.cs           # EAN-8 implementation
│   │   ├── Isbn13Encoder.cs         # ISBN-13 implementation
│   │   └── Code93Encoder.cs         # CODE-93 implementation
│   ├── Fonts/                       # Font handling utilities
│   ├── Utils/                       # Helper utilities
│   └── TyKonKet.BarcodeGenerator.csproj # Project file
├── Tests/                           # Test projects folder
│   ├── TyKonKet.BarcodeGenerator.Tests/     # Unit tests (xUnit)
│   ├── TyKonKet.BarcodeGenerator.Benchmarks/ # Performance tests
│   ├── TyKonKet.BarcodeGenerator.Playground/ # Development testing
│   └── TyKonKet.BarcodeGenerator.CB/        # CI benchmarks
└── Directory.Build.props            # MSBuild properties
```

### Key Configuration Files
- `Directory.Build.props`: Defines artifacts path for build output
- `.editorconfig`: Code style configuration, disables some StyleCop rules
- `.gitignore`: Standard Visual Studio ignore patterns + artifacts/ folder
- `TyKonKet.BarcodeGenerator.csproj`: Multi-targeting, NuGet package configuration

### Architectural Patterns
**Factory Pattern**: `EncodersFactory.Create()` instantiates encoders based on barcode type  
**Options Pattern**: `BarcodeOptions` class with fluent configuration API  
**Template Method**: Abstract `Encoder` base class with virtual methods  
**Dependency Injection**: Options injected into encoders via constructor

### Core API Usage
```csharp
using var barcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Code93;
    options.Height = 30;
    options.Scaling = 10;
    options.RenderText = true;
});
string validatedBarcode = barcode.Encode("THE-BARCODE");
barcode.Export("path/{barcode}.png", SKEncodedImageFormat.Png, 100);
```

## Important Dependencies and Constraints

### Framework Targeting
- **.NET Standard 2.0**: Core compatibility target
- **.NET Framework 4.6.2**: Legacy Windows support  
- **.NET 6.0**: LTS version support
- **.NET 8.0**: Current stable version

### Runtime Dependencies
- **SkiaSharp 3.116.1**: Cross-platform 2D graphics (core dependency)
- **SkiaSharp.NativeAssets.Linux.NoDependencies**: Linux native support
- **System.ValueTuple 4.5.0**: Compatibility for older frameworks

### Breaking Changes (v2.0.0+)
- No longer supports .NET Standard 1.3 (requires 2.0+)
- API redesigned for better usability and customization
- SkiaSharp updated to 3.116.1

## Testing Guidelines

### Unit Tests Structure
Tests are organized by encoder type using xUnit framework:
```
Tests/TyKonKet.BarcodeGenerator.Tests/Encoders/
├── Abstract/EncoderTest.cs          # Base encoder tests
├── Ean13EncoderTest.cs             # EAN-13 specific tests
├── UpcaEncoderTest.cs              # UPC-A specific tests
└── [other encoder tests]
```

**Test Patterns**:
- Use `[Theory]` with `[InlineData]` for parametrized tests
- Test both valid and invalid input scenarios
- Validate barcode formatting and check digit calculations
- Use `Assert.Throws<ExceptionType>()` for error conditions

### Performance Testing
BenchmarkDotNet tests in `TyKonKet.BarcodeGenerator.CB` measure:
- Encoding performance per barcode type
- Memory allocation patterns
- Regression detection (200% threshold)

## Key File Locations

**Build Configuration**:
- Solution file: `TyKonKet.BarcodeGenerator.sln`
- Main project: `TyKonKet.BarcodeGenerator/TyKonKet.BarcodeGenerator.csproj`
- Build properties: `Directory.Build.props`

**Core Source Files**:
- Entry point: `TyKonKet.BarcodeGenerator/Barcode.cs`
- Options: `TyKonKet.BarcodeGenerator/BarcodeOptions.cs`
- Encoders: `TyKonKet.BarcodeGenerator/Encoders/`

**Testing**:
- Unit tests: `Tests/TyKonKet.BarcodeGenerator.Tests/`
- Test config: `Tests/TyKonKet.BarcodeGenerator.Tests/TyKonKet.BarcodeGenerator.Tests.csproj`

**CI/CD**:
- Test workflow: `.github/workflows/dotnet_test_runner.yml`
- Benchmark workflow: `.github/workflows/dotnet_benchmark_runner.yml`

## Recommended Workflow for Code Changes

1. **Before making changes**: Run `dotnet build --configuration Release` in `TyKonKet.BarcodeGenerator/` to ensure clean build
2. **Making changes**: Focus on single encoder or core functionality to minimize impact
3. **Testing changes**: If .NET 9.x available, run full test suite; otherwise validate with manual testing
4. **Before committing**: Ensure build completes without NEW warnings/errors (existing analyzer warnings are acceptable)
5. **Documentation updates**: Any changes to the library API, behavior, exceptions, or functionality **must** be reflected in the documentation found in the `docs/` folder to keep it accurate and up to date
6. **Trust these instructions**: Only search for additional information if the instructions are incomplete or incorrect

The repository is well-structured and builds reliably when using the correct .NET SDK version. Focus on the main library for most changes, as the test projects have additional version requirements.