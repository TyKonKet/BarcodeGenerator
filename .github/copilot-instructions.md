# Copilot Instructions for BarcodeGenerator

## Overview
**.NET barcode library** using SkiaSharp. Supports EAN-13, UPC-A, UPC-E, ISBN-13, EAN-8, CODE-39, CODE-93, CODE-128, CODABAR. Multi-framework targeting (.NET Standard 2.0, .NET Framework 4.6.2, .NET 6/8/10).

## Quick Build & Test
```bash
# Main library (any .NET SDK)
cd TyKonKet.BarcodeGenerator
dotnet build --configuration Release

# Full solution (requires .NET 10.x)
dotnet build --configuration Release

# Tests (requires .NET 10.x)
cd Tests/TyKonKet.BarcodeGenerator.Tests
dotnet test --configuration Release

# Coverage report
./scripts/run-coverage.sh
```

**Critical**: Test projects require .NET 10.x SDK. Build main library individually if using older SDK.

## Architecture Patterns
- **Factory**: `EncodersFactory.Create()` uses reflection + caching to find `{BarcodeType}Encoder` classes
- **Options**: `BarcodeOptions.Lock()` prevents modifications after encoder creation
- **Template Method**: Abstract `Encoder` base class with virtual methods
- **Export Templating**: Paths support `{barcode}`, `{format}`, `{quality}` placeholders

## Core API
```csharp
using var barcode = new Barcode(options => {
    options.Type = BarcodeTypes.Code93;
    options.Height = 30;
    options.Scaling = 10;
    options.RenderText = true;
});
string validated = barcode.Encode("THE-BARCODE");
barcode.Export("path/{barcode}.png", SKEncodedImageFormat.Png, 100);
```

## Key Files
- **Entry point**: `TyKonKet.BarcodeGenerator/Barcode.cs`
- **Factory**: `TyKonKet.BarcodeGenerator/Utils/EncodersFactory.cs`
- **Encoders**: `TyKonKet.BarcodeGenerator/Encoders/`
- **Tests**: `Tests/TyKonKet.BarcodeGenerator.Tests/`
- **InternalsVisibleTo**: `AssemblyInfo.cs` exposes internals to test projects

## Testing
- **xUnit** with `[Theory]`/`[InlineData]` for parameterized tests
- **80% coverage** threshold enforced
- **4 test projects**: Tests (unit), Benchmarks (development), CB (CI benchmarks), Playground
- **BenchmarkDotNet** for performance regression detection (200% threshold)
- **Performance Optimization**: Use `Tests/TyKonKet.BarcodeGenerator.Benchmarks/` for development benchmarks (NOT CB project)

## Code Quality
- **13 analyzers** enabled with `EnforceCodeStyleInBuild=True`
- **Always run**: `dotnet build --configuration Release` before committing
- **Expected warnings** from analyzers are acceptable (not errors)

## Dependencies
- **SkiaSharp 3.119.0**: Core graphics rendering
- **PolySharp 1.15.0**: Compatibility layer for older frameworks
- **System.Memory/ValueTuple/Buffers**: Framework compatibility packages
