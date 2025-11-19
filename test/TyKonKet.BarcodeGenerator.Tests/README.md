# BarcodeGenerator Test Suite Documentation

## Overview

This document describes the testing approach, conventions, and organization for the BarcodeGenerator library test suite.

## Test Structure and Organization

### File Naming Convention
All test files follow the `<ClassName>Tests.cs` naming convention:
- `BarcodeOptionsTests.cs` - Tests for `BarcodeOptions` class
- `Ean13EncoderTests.cs` - Tests for `Ean13Encoder` class
- `FontFamilyTests.cs` - Tests for `FontFamily` class

### Directory Structure
```
Tests/TyKonKet.BarcodeGenerator.Tests/
├── BarcodeOptionsTests.cs               # Core options configuration tests
├── EncodesExtensionsTests.cs            # Extension methods tests
├── Integration/
│   └── BarcodeIntegrationTests.cs       # End-to-end workflow tests
├── Encoders/
│   ├── Abstract/
│   │   ├── EncoderTests.cs              # Base encoder functionality tests
│   │   └── EanEncoderTests.cs           # Common EAN encoder tests
│   ├── Code93EncoderTests.cs            # CODE-93 specific tests
│   ├── Ean13EncoderTests.cs            # EAN-13 specific tests
│   ├── Ean8EncoderTests.cs             # EAN-8 specific tests
│   ├── Isbn13EncoderTests.cs           # ISBN-13 specific tests
│   └── UpcaEncoderTests.cs             # UPC-A specific tests
└── Fonts/
    └── FontFamilyTests.cs              # Font system tests
```

## Test Categories

### 1. Unit Tests
- **Location**: Individual encoder test files and options tests
- **Purpose**: Test individual components in isolation
- **Coverage**: Core functionality, validation, formatting, encoding

### 2. Integration Tests  
- **Location**: `Integration/BarcodeIntegrationTests.cs`
- **Purpose**: Test complete workflows end-to-end
- **Coverage**: Full barcode generation, image export, file validation

### 3. Boundary and Negative Tests
- **Location**: Embedded within relevant test files using `#region` sections
- **Purpose**: Test edge cases, invalid inputs, and error conditions
- **Coverage**: Null values, empty strings, extreme values, invalid formats

## Test Method Naming Conventions

### Pattern: `Should_<ExpectedBehavior>_When_<Condition>`
- `DefaultValues_ShouldBeCorrect()` - Tests default value initialization
- `FormatBarcode_ShouldReturnExpectedFormattedBarcode()` - Tests formatting behavior
- `ValidateCharset_ShouldThrowFormatException_ForInvalidCharset()` - Tests error conditions

### Pattern: `<Method>_<Scenario>`
- `Encode_ShouldThrowArgumentNullException_WhenBarcodeIsNull()` - Specific method scenario testing

## Test Data and Parameterization

### Theory Tests with InlineData
Preferred for testing multiple scenarios with the same logic:
```csharp
[Theory]
[InlineData("1234567890123", "1234567890128")]
[InlineData("978123456789", "9781234567897")]
public void FormatBarcode_ShouldReturnExpectedFormattedBarcode(string input, string expected)
```

### MemberData for Complex Test Cases
Used when test data requires complex setup or when data is reused:
```csharp
[Theory]
[MemberData(nameof(GetTestData))]
public void ComplexTest(ComplexType data)
```

## Code Coverage

### Configuration
- **Tool**: Coverlet with multiple output formats (OpenCover, Cobertura, JSON, LCOV)
- **Threshold**: 80% minimum for line, branch, and method coverage
- **Reports**: Generated in `$(OutputPath)coverage/` directory
- **CI Integration**: Coverage data collected automatically during test runs

### Coverage Areas
1. **Core Library**: All public APIs and critical internal logic
2. **Encoders**: All barcode type implementations
3. **Options**: Configuration and validation logic
4. **Error Handling**: Exception paths and edge cases

## Error Handling Test Patterns

### Null Parameter Tests
```csharp
[Fact]
public void Method_ShouldThrowArgumentNullException_WhenParameterIsNull()
{
    Assert.Throws<ArgumentNullException>(() => Method(null!));
}
```

### Invalid Input Tests
```csharp
[Theory]
[InlineData("")]
[InlineData("   ")]
public void Method_ShouldThrowArgumentException_WhenInputIsInvalid(string input)
{
    Assert.Throws<ArgumentException>(() => Method(input));
}
```

### Format Validation Tests
```csharp
[Theory]
[InlineData("abc")]
[InlineData("123-456")]
public void ValidateCharset_ShouldThrowFormatException_ForInvalidCharset(string barcode)
{
    Assert.Throws<FormatException>(() => encoder.EnsureValidCharset(barcode));
}
```

## Integration Test Patterns

### File System Tests
- Use temporary directories for all file operations
- Implement `IDisposable` to clean up test artifacts
- Validate actual file contents, not just existence

### Image Validation
- Verify file headers for correct format (PNG, JPEG)
- Check file size and dimensions
- Validate metadata when applicable

### End-to-End Workflows
- Test complete barcode generation pipeline
- Include encoding, rendering, and export steps
- Verify both input validation and output correctness

## Best Practices

### 1. Test Independence
- Each test should be able to run in isolation
- No dependencies between test methods
- Use `IDisposable` for cleanup when needed

### 2. Descriptive Assertions
- Use specific assertion messages when helpful
- Prefer multiple specific asserts over single complex ones
- Test both positive and negative cases

### 3. Performance Considerations
- Keep individual tests fast (< 100ms typically)
- Use `[Theory]` to reduce test method count
- Group related assertions in single test methods

### 4. Documentation
- Add XML documentation to test classes describing their purpose
- Use regions to organize related test methods
- Comment complex test setups or unusual scenarios

## Running Tests

### Local Development
```bash
# Run all tests
dotnet test --configuration Release

# Run with coverage
dotnet test --configuration Release --collect:"XPlat Code Coverage"

# Run specific test class
dotnet test --filter "ClassName=BarcodeOptionsTests"
```

### CI/CD Integration
Tests are automatically run in GitHub Actions with:
- Code coverage collection
- Test result reporting
- Performance regression detection (via benchmarks)

## Future Improvements

### Planned Enhancements
1. **Mocking**: Add mocking for external dependencies (file system, graphics)
2. **Property-Based Testing**: Add property-based tests for encoder validation
3. **Visual Regression Testing**: Add image comparison tests for barcode output
4. **Performance Testing**: Expand benchmark coverage for all encoders
5. **Mutation Testing**: Add mutation testing to validate test quality

### Coverage Goals
- Maintain 90%+ line coverage
- 85%+ branch coverage  
- 100% coverage of public APIs
- Full error path coverage for validation logic