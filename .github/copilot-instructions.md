# Copilot Instructions for BarcodeGenerator

These instructions are for GitHub Copilot and other LLM-based assistants working in this repo. Follow them to produce correct, high-quality changes that match project conventions.

## Overview

BarcodeGenerator is a **.NET barcode library** using SkiaSharp. It supports:

- EAN-13, UPC-A, UPC-E, ISBN-13, EAN-8
- CODE-39, CODE-93, CODE-128, CODABAR
- Interleaved 2 of 5 (ITF)

The library targets multiple frameworks: **.NET Standard 2.0**, **.NET Framework 4.6.2**, **.NET 8/10**.

When in doubt, prefer modern C# features that are compatible with these targets.

## How to Build & Test

When proposing or making changes, always ensure commands below stay valid and keep paths correct.

```bash
# Main library (any .NET SDK)
cd src/TyKonKet.BarcodeGenerator
dotnet build --configuration Release

# Full solution (requires .NET 10.x)
cd ../..
dotnet build --configuration Release

# Tests (requires .NET 10.x)
cd test/TyKonKet.BarcodeGenerator.Tests
dotnet test --configuration Release

# Coverage report (from repo root)
cd ../..
./tools/run-coverage.sh
```

**Important for LLMs**

- Do **not** change these commands lightly; many docs and scripts depend on them.
- If you must change paths or commands, update **all** references (docs, tools, CI configs, contributors guide).
- Test projects require the **.NET 10.x SDK**. If you only update the main library, ensure commands still work on older SDKs where possible.

## Architecture Patterns (for reasoning)

When generating or editing code, keep these patterns intact:

- **Factory**: `EncodersFactory.Create()` uses reflection + caching to resolve `{BarcodeType}Encoder` classes. New encoders must follow the `{BarcodeType}Encoder` naming pattern and live under `Encoders/`.
- **Options**: `BarcodeOptions` is configured fluently, then **locked** via `BarcodeOptions.Lock()` before encoding. Do not mutate options after locking.
- **Template Method**: All encoders inherit from the abstract `Encoder` base class and override its virtual methods instead of reimplementing common logic.
- **Export Templating**: Export paths can include placeholders like `{barcode}`, `{format}`, `{quality}`. Preserve this behavior when touching export-related code.

If you introduce new behaviors, align them with these patterns instead of bypassing them.

## Core API (usage model)

LLMs should treat this as the canonical high-level usage pattern:

```csharp
using var barcode = new Barcode(options =>
{
        options.Type = BarcodeTypes.Code93;
        options.Height = 30;
        options.Scaling = 10;
        options.RenderText = true;
});

string validated = barcode.Encode("THE-BARCODE");
barcode.Export("path/{barcode}.png", SKEncodedImageFormat.Png, 100);
```

When generating examples or tests:

- Prefer this style (using `Barcode` with options lambda).
- Use realistic barcodes and types.
- Avoid hard-coding file system paths that are platform-specific—use simple relative paths.

## Key Files & Layout

Use these paths when searching or proposing edits:

- **Entry point**: `src/TyKonKet.BarcodeGenerator/Barcode.cs`
- **Factory**: `src/TyKonKet.BarcodeGenerator/EncodersFactory.cs` or `src/TyKonKet.BarcodeGenerator/Utils/EncodersFactory.cs` (check actual location before editing)
- **Encoders**: `src/TyKonKet.BarcodeGenerator/Encoders/`
- **Options & types**: `src/TyKonKet.BarcodeGenerator/BarcodeOptions.cs`, `BarcodeTypes.cs`, `BarcodeValidator.cs`
- **Tests**: `test/TyKonKet.BarcodeGenerator.Tests/`
- **Benchmarks**: `benchmark/TyKonKet.BarcodeGenerator.Benchmarks/`
- **InternalsVisibleTo**: `src/TyKonKet.BarcodeGenerator/AssemblyInfo.cs` exposes internals to test projects

When adding new encoders or helpers, place them in the most appropriate existing folder rather than creating new top-level areas.

## Testing Expectations

LLMs must assume **strict testing requirements**:

- Use **xUnit** with `[Theory]` and `[InlineData]` where parameterization makes sense.
- Maintain at least **80% code coverage**; new code should arrive with tests.
- Prefer **small, focused tests** over large integration-only tests.

Current projects of interest:

- **Unit tests**: `test/TyKonKet.BarcodeGenerator.Tests/`
- **Benchmarks**: `benchmark/TyKonKet.BarcodeGenerator.Benchmarks/`
- **Playground** (manual experiments): `test/TyKonKet.BarcodeGenerator.Playground/`

### Benchmarks (development & CI)

- The `benchmark/TyKonKet.BarcodeGenerator.Benchmarks/` project is used for **both development and CI benchmarks**.
- CI-specific benchmark classes are **marked with a benchmark category** so they can be filtered out during local runs.
- When adding benchmarks, always:
    - Reuse existing patterns and attributes.
    - Avoid excessive allocations and unnecessary work in setup.
    - Keep benchmark names descriptive and stable (CI relies on them).

## Code Quality & Analyzers

This repo has **13+ analyzers** enabled with `EnforceCodeStyleInBuild=True`. When generating code:

- Prefer **explicit** access modifiers and types where clarity helps.
- Respect existing **StyleCop**, **Roslynator**, and other analyzer rules (look at nearby code for patterns).
- Keep methods small and cohesive; avoid deeply nested logic.

Before suggesting large refactors, consider analyzer noise and test impact. When in doubt, prefer **minimal, targeted changes** that solve the issue.

## Dependencies & Constraints

Key runtime dependencies:

- **SkiaSharp 3.119.0** – barcode rendering.
- **PolySharp 1.15.0** – compatibility with older frameworks.
- **System.Memory / System.Buffers / ValueTuple** – compatibility shims.

Guidelines for LLMs:

- Do **not** introduce new heavy dependencies without explicit instruction.
- Prefer using **BCL** and existing utilities in `Utils/` before adding helpers.
- Ensure any new APIs are compatible with all targeted frameworks.

## LLM-Specific Do & Don't

**Do:**

- Align new encoders with the `{BarcodeType}Encoder` naming and placement.
- Use existing validation helpers (e.g., `BarcodeValidator`) instead of re-implementing logic.
- Keep public API changes **backwards compatible**, unless the user explicitly requests a breaking change.
- Update docs and tests together with behavior changes.

**Don’t:**

- Don’t rename public types, methods, or enums casually.
- Don’t move files between projects unless you also update namespaces, tests, and all call sites.
- Don’t add global state or singletons that conflict with current design.
- Don’t change build or test commands without updating CONTRIBUTING and other docs.

Following these guidelines will help LLMs generate changes that compile cleanly, satisfy analyzers, respect performance constraints, and fit naturally into the existing design.

## Conditional compilation policy

When adding or updating code that relies on newer framework features, prefer using `NET8_0_OR_GREATER` to gate .NET 8+ functionality. This repository targets .NET 8 and .NET 10 for modern features; use the following guidance:

- Use `#if NET8_0_OR_GREATER` when the code requires APIs or behaviors introduced in .NET 8.
- Avoid adding `NET6_0_OR_GREATER` checks now that .NET 6 support has been removed — prefer the newer symbol for clarity.
- When dropping a target framework in the future, update `TargetFrameworks` in project files and replace conditional symbols accordingly (e.g., update `NET8_0_OR_GREATER` to `NET10_0_OR_GREATER` only when you require .NET 10-specific APIs).
- Document any symbol changes in the repo's CONTRIBUTING or release notes so contributors and CI understand the supported TFMs.

If a sub-agent or automation is used to manage these changes, ensure it updates all references across source, docs, and CI configuration.
