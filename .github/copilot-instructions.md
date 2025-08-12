# Copilot Instructions for BarcodeGenerator Repository

## Repository Overview

**BarcodeGenerator** is a .NET library for generating barcodes using SkiaSharp. The library supports multiple barcode types (EAN-13, UPC-A, ISBN-13, EAN-8, CODE-93) and provides an action delegate configuration with lambda expressions. It's distributed as a NuGet package and targets multiple .NET frameworks.

**Repository Size**: Medium (~50 source files)  
**Project Type**: .NET Class Library  
**Languages**: C# (.NET Standard 2.0, .NET 6.0, .NET 8.0, .NET 10.0, .NET Framework 4.6.2)  
**Main Dependencies**: SkiaSharp 3.119.0, System.ValueTuple, PolySharp 1.15.0, System.Memory 4.5.5, System.Threading.Tasks.Extensions 4.5.4, System.Buffers 4.5.1  
**Test Framework**: xUnit and BenchmarkDotNet for performance testing and unit testing

## Build Instructions

### Prerequisites
- **.NET SDK 10.x** is required to build all targets, including .NET 10.0.
- Older SDK versions can only build targets compatible with their version or earlier. For example:
  - **.NET 8.x SDK** can build .NET 8.0, .NET 6.0, .NET Standard 2.0, and .NET Framework 4.6.2 targets but will skip .NET 10.0.
  - **.NET 6.x SDK** can build .NET 6.0, .NET Standard 2.0, and .NET Framework 4.6.2 targets but will skip .NET 8.0 and .NET 10.0.
- Linux: SkiaSharp.NativeAssets.Linux.NoDependencies provides native dependencies

### Working Build Commands

**Build main library only** (works with any compatible .NET SDK version that supports one of the targeted frameworks):
```bash
cd TyKonKet.BarcodeGenerator
dotnet restore
dotnet build --configuration Release
```

**Full solution build** (requires .NET 10.x to build all targets):
```bash
dotnet restore
dotnet build --configuration Release
```

**Run tests** (requires .NET 10.x):
```bash
cd Tests/TyKonKet.BarcodeGenerator.Tests
dotnet test --configuration Release --logger "GitHubActions;summary.includePassedTests=true;summary.includeSkippedTests=true"
```

**Run benchmarks** (requires .NET 10.x):
```bash
cd Tests/TyKonKet.BarcodeGenerator.CB
dotnet run --configuration Release --exporters json --filter '*'
```

### Known Build Issues
- **CRITICAL**: Test projects target .NET 10.0 and will fail with earlier SDK versions
- Solution-level `dotnet restore` fails with lower versions due to targeting conflicts
- **Workaround**: Build main library individually or upgrade to .NET 10.x SDK
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
- Triggers: Push to main, manual dispatch
- Environment: Ubuntu latest with .NET 10.x
- Command: `dotnet test --configuration Release --logger "GitHubActions;summary.includePassedTests=true;summary.includeSkippedTests=true" -- RunConfiguration.CollectSourceInformation=true`
- Always run tests before committing changes

**Benchmark Runner** (`.github/workflows/dotnet_benchmark_runner.yml`):
- Triggers: Push to main, manual dispatch, scheduled every Sunday at 00:00 UTC
- Environment: Ubuntu latest with .NET 10.x
- Command: `dotnet run --configuration Release --exporters json --filter '*'`
- Stores benchmark results for Ean8Encoder, Ean13Encoder, UpcaEncoder, Isbn13Encoder, and Code93Encoder
- Alerts on >200% performance degradation and comments on alerts, tagging `@TyKonKet`

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
- Roslynator.Formatting.Analyzers (formatting rules)
- IDisposableAnalyzers (disposable pattern checks)
- ErrorProne.NET.CoreAnalyzers (error-prone code detection)
- ErrorProne.NET.Structs (struct usage checks)
- ReflectionAnalyzers (reflection usage checks)
- SharpSource (general code quality)
- Asyncify (async/await usage checks)
- Wintellect.Analyzers (performance and correctness)

**Configuration**: `EnforceCodeStyleInBuild=True` is enabled

## Project Layout and Architecture

### Solution Structure
```
TyKonKet.BarcodeGenerator.slnx         # Main solution file
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
- **.NET 10.0**: Future-ready version

### Runtime Dependencies
- **SkiaSharp 3.119.0**: Cross-platform 2D graphics (core dependency)
- **SkiaSharp.NativeAssets.Linux.NoDependencies 3.119.0**: Linux native support
- **System.ValueTuple 4.6.1**: Compatibility for older frameworks
- **System.Memory 4.5.5**: Memory management utilities for older frameworks
- **System.Threading.Tasks.Extensions 4.5.4**: Task-based asynchronous programming for older frameworks
- **System.Buffers 4.5.1**: Provides array pool and memory management utilities
- **PolySharp 1.15.0**: Enhances compatibility with older runtimes

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
- Solution file: `TyKonKet.BarcodeGenerator.slnx`
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

1. **Before making changes**: Run `dotnet build --configuration Release` in `TyKonKet.BarcodeGenerator/` to ensure clean build.
2. **Making changes**: Focus on single encoder or core functionality to minimize impact.
3. **Testing changes**: If .NET 10.x is available, run the full test suite; otherwise, validate with manual testing.
4. **Before committing**: Ensure the build completes without introducing any **new warnings or errors**. Existing analyzer warnings are acceptable.
   - Example: Run `dotnet build --configuration Release` and verify no new warnings/errors appear in the output.
5. **Documentation updates**: Reflect every change in the documentation files located in the `docs/` folder.
   - Example: If you add a new feature, update `docs/api/barcode-options.md` to include the new option.
6. **Update README.md**: Ensure all relevant changes are reflected in the `README.md` file.
   - Example: If you add a new barcode type, update the "Supported Barcode Types" section in `README.md`.
7. **Update copilot-instructions.md**: Ensure all relevant changes are reflected in the `copilot-instructions.md` file.
   - Example: If you change the target framework to .NET 11, update the "Framework Targeting" and "Build Instructions" sections in `copilot-instructions.md`.

The repository is well-structured and builds reliably when using the correct .NET SDK version. Focus on the main library for most changes, as the test projects have additional version requirements.
