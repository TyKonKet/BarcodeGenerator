# Barcode Validation and Check Digits

This guide explains the validation rules, check digit calculation, and error handling mechanisms in the BarcodeGenerator library. Understanding these concepts helps ensure data integrity and successful barcode generation.

## Overview

The BarcodeGenerator library automatically handles validation and check digit calculation for supported barcode types. This guide covers:

- Input validation rules for each barcode type
- Check digit calculation algorithms
- Error handling and recovery strategies
- Custom validation implementations
- Debugging validation issues

## Check Digit Calculation

### Understanding Check Digits

Check digits are mathematical validation mechanisms that help detect errors in barcode data. They are calculated using specific algorithms and appended to the data.

```csharp
// Example: EAN-13 check digit calculation
string input = "123456789012";    // 12 digits
string output = "1234567890128";  // 13 digits (last digit is check digit)

using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
string result = barcode.Encode(input);
Console.WriteLine($"Input: {input}");
Console.WriteLine($"Output: {result}");
Console.WriteLine($"Check digit: {result.Last()}");
```

### EAN-13 Check Digit Algorithm

The EAN-13 check digit is calculated using the modulo 10 algorithm:

```csharp
public static class Ean13CheckDigit
{
    public static int Calculate(string digits)
    {
        if (digits.Length != 12)
            throw new ArgumentException("EAN-13 requires exactly 12 digits");
        
        int sum = 0;
        for (int i = 0; i < 12; i++)
        {
            int digit = int.Parse(digits[i].ToString());
            // Multiply odd positions by 1, even positions by 3
            sum += (i % 2 == 0) ? digit : digit * 3;
        }
        
        int checkDigit = (10 - (sum % 10)) % 10;
        return checkDigit;
    }
    
    public static bool Validate(string ean13)
    {
        if (ean13.Length != 13 || !ean13.All(char.IsDigit))
            return false;
        
        string dataDigits = ean13.Substring(0, 12);
        int expectedCheckDigit = Calculate(dataDigits);
        int actualCheckDigit = int.Parse(ean13[12].ToString());
        
        return expectedCheckDigit == actualCheckDigit;
    }
    
    public static string AddCheckDigit(string twelveDigits)
    {
        int checkDigit = Calculate(twelveDigits);
        return twelveDigits + checkDigit.ToString();
    }
}

// Usage examples
string dataDigits = "123456789012";
int checkDigit = Ean13CheckDigit.Calculate(dataDigits);        // Returns: 8
string fullCode = Ean13CheckDigit.AddCheckDigit(dataDigits);   // Returns: "1234567890128"
bool isValid = Ean13CheckDigit.Validate("1234567890128");      // Returns: true
```

### UPC-A Check Digit Algorithm

UPC-A uses a similar modulo 10 algorithm with different weightings:

```csharp
public static class UpcaCheckDigit
{
    public static int Calculate(string digits)
    {
        if (digits.Length != 11)
            throw new ArgumentException("UPC-A requires exactly 11 digits");
        
        int sum = 0;
        for (int i = 0; i < 11; i++)
        {
            int digit = int.Parse(digits[i].ToString());
            // Multiply odd positions by 3, even positions by 1
            sum += (i % 2 == 0) ? digit * 3 : digit;
        }
        
        int checkDigit = (10 - (sum % 10)) % 10;
        return checkDigit;
    }
    
    public static bool Validate(string upca)
    {
        if (upca.Length != 12 || !upca.All(char.IsDigit))
            return false;
        
        string dataDigits = upca.Substring(0, 11);
        int expectedCheckDigit = Calculate(dataDigits);
        int actualCheckDigit = int.Parse(upca[11].ToString());
        
        return expectedCheckDigit == actualCheckDigit;
    }
}

// Example
string upcData = "12345678901";
int checkDigit = UpcaCheckDigit.Calculate(upcData);  // Returns: 2
```

### EAN-8 Check Digit Algorithm

EAN-8 uses the same modulo 10 algorithm as EAN-13, but with 7 data digits:

```csharp
public static class Ean8CheckDigit
{
    public static int Calculate(string digits)
    {
        if (digits.Length != 7)
            throw new ArgumentException("EAN-8 requires exactly 7 digits");
        
        int sum = 0;
        for (int i = 0; i < 7; i++)
        {
            int digit = int.Parse(digits[i].ToString());
            // Multiply odd positions by 3, even positions by 1
            sum += (i % 2 == 0) ? digit * 3 : digit;
        }
        
        int checkDigit = (10 - (sum % 10)) % 10;
        return checkDigit;
    }
}

// Example
string ean8Data = "1234567";
int checkDigit = Ean8CheckDigit.Calculate(ean8Data);  // Returns: 0
```

## Input Validation

### Comprehensive Validation Helper

```csharp
public static class BarcodeValidator
{
    public static ValidationResult ValidateInput(string input, BarcodeTypes type)
    {
        var result = new ValidationResult { Input = input, Type = type };
        
        if (string.IsNullOrEmpty(input))
        {
            result.IsValid = false;
            result.ErrorMessage = "Input cannot be null or empty";
            return result;
        }
        
        try
        {
            switch (type)
            {
                case BarcodeTypes.Ean13:
                    result = ValidateEan13(input);
                    break;
                case BarcodeTypes.Upca:
                    result = ValidateUpca(input);
                    break;
                case BarcodeTypes.Isbn13:
                    result = ValidateIsbn13(input);
                    break;
                case BarcodeTypes.Ean8:
                    result = ValidateEan8(input);
                    break;
                case BarcodeTypes.Code93:
                    result = ValidateCode93(input);
                    break;
                default:
                    result.IsValid = false;
                    result.ErrorMessage = $"Validation not implemented for {type}";
                    break;
            }
        }
        catch (Exception ex)
        {
            result.IsValid = false;
            result.ErrorMessage = $"Validation error: {ex.Message}";
        }
        
        return result;
    }
    
    private static ValidationResult ValidateEan13(string input)
    {
        var result = new ValidationResult { Input = input, Type = BarcodeTypes.Ean13 };
        
        if (input.Length != 12)
        {
            result.IsValid = false;
            result.ErrorMessage = $"EAN-13 requires exactly 12 digits, got {input.Length}";
            result.ExpectedLength = 12;
            return result;
        }
        
        if (!input.All(char.IsDigit))
        {
            result.IsValid = false;
            result.ErrorMessage = "EAN-13 can only contain numeric digits (0-9)";
            result.InvalidCharacters = input.Where(c => !char.IsDigit(c)).ToList();
            return result;
        }
        
        result.IsValid = true;
        result.ValidationMessage = "Valid EAN-13 input";
        result.PredictedOutput = Ean13CheckDigit.AddCheckDigit(input);
        return result;
    }
    
    private static ValidationResult ValidateUpca(string input)
    {
        var result = new ValidationResult { Input = input, Type = BarcodeTypes.Upca };
        
        if (input.Length != 11)
        {
            result.IsValid = false;
            result.ErrorMessage = $"UPC-A requires exactly 11 digits, got {input.Length}";
            result.ExpectedLength = 11;
            return result;
        }
        
        if (!input.All(char.IsDigit))
        {
            result.IsValid = false;
            result.ErrorMessage = "UPC-A can only contain numeric digits (0-9)";
            result.InvalidCharacters = input.Where(c => !char.IsDigit(c)).ToList();
            return result;
        }
        
        result.IsValid = true;
        result.ValidationMessage = "Valid UPC-A input";
        result.PredictedOutput = input + UpcaCheckDigit.Calculate(input).ToString();
        return result;
    }
    
    private static ValidationResult ValidateIsbn13(string input)
    {
        var result = new ValidationResult { Input = input, Type = BarcodeTypes.Isbn13 };
        
        if (input.Length != 12)
        {
            result.IsValid = false;
            result.ErrorMessage = $"ISBN-13 requires exactly 12 digits, got {input.Length}";
            result.ExpectedLength = 12;
            return result;
        }
        
        if (!input.All(char.IsDigit))
        {
            result.IsValid = false;
            result.ErrorMessage = "ISBN-13 can only contain numeric digits (0-9)";
            result.InvalidCharacters = input.Where(c => !char.IsDigit(c)).ToList();
            return result;
        }
        
        if (!input.StartsWith("978") && !input.StartsWith("979"))
        {
            result.IsValid = false;
            result.ErrorMessage = "ISBN-13 must start with 978 or 979";
            result.Suggestions.Add("Ensure the ISBN starts with a valid prefix (978 or 979)");
            return result;
        }
        
        result.IsValid = true;
        result.ValidationMessage = "Valid ISBN-13 input";
        result.PredictedOutput = Ean13CheckDigit.AddCheckDigit(input);
        return result;
    }
    
    private static ValidationResult ValidateEan8(string input)
    {
        var result = new ValidationResult { Input = input, Type = BarcodeTypes.Ean8 };
        
        if (input.Length != 7)
        {
            result.IsValid = false;
            result.ErrorMessage = $"EAN-8 requires exactly 7 digits, got {input.Length}";
            result.ExpectedLength = 7;
            return result;
        }
        
        if (!input.All(char.IsDigit))
        {
            result.IsValid = false;
            result.ErrorMessage = "EAN-8 can only contain numeric digits (0-9)";
            result.InvalidCharacters = input.Where(c => !char.IsDigit(c)).ToList();
            return result;
        }
        
        result.IsValid = true;
        result.ValidationMessage = "Valid EAN-8 input";
        result.PredictedOutput = input + Ean8CheckDigit.Calculate(input).ToString();
        return result;
    }
    
    private static ValidationResult ValidateCode93(string input)
    {
        var result = new ValidationResult { Input = input, Type = BarcodeTypes.Code93 };
        const string validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 $%+-./ ";
        
        var invalidChars = input.Where(c => !validChars.Contains(c)).ToList();
        if (invalidChars.Any())
        {
            result.IsValid = false;
            result.ErrorMessage = $"CODE-93 contains invalid characters: {string.Join(", ", invalidChars.Distinct())}";
            result.InvalidCharacters = invalidChars;
            result.Suggestions.Add("CODE-93 supports: A-Z, 0-9, space, $, %, +, -, ., /");
            return result;
        }
        
        if (input.Length == 0)
        {
            result.IsValid = false;
            result.ErrorMessage = "CODE-93 input cannot be empty";
            return result;
        }
        
        result.IsValid = true;
        result.ValidationMessage = "Valid CODE-93 input";
        result.PredictedOutput = input; // CODE-93 doesn't modify the input
        return result;
    }
}

public class ValidationResult
{
    public string Input { get; set; }
    public BarcodeTypes Type { get; set; }
    public bool IsValid { get; set; }
    public string ErrorMessage { get; set; }
    public string ValidationMessage { get; set; }
    public string PredictedOutput { get; set; }
    public int? ExpectedLength { get; set; }
    public List<char> InvalidCharacters { get; set; } = new();
    public List<string> Suggestions { get; set; } = new();
}
```

### Usage Examples

```csharp
// Validate before encoding
string input = "12345678901";  // Too short for EAN-13
var validation = BarcodeValidator.ValidateInput(input, BarcodeTypes.Ean13);

if (validation.IsValid)
{
    using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
    string result = barcode.Encode(input);
    Console.WriteLine($"Generated: {result}");
}
else
{
    Console.WriteLine($"Validation failed: {validation.ErrorMessage}");
    if (validation.ExpectedLength.HasValue)
    {
        Console.WriteLine($"Expected length: {validation.ExpectedLength}");
    }
    foreach (string suggestion in validation.Suggestions)
    {
        Console.WriteLine($"Suggestion: {suggestion}");
    }
}
```

## Error Handling Strategies

### Robust Error Handling

```csharp
public static class SafeBarcodeGenerator
{
    public static BarcodeGenerationResult TryGenerateBarcode(
        string input,
        BarcodeTypes type,
        string outputPath = null,
        Action<BarcodeOptions> configureOptions = null)
    {
        var result = new BarcodeGenerationResult
        {
            Input = input,
            Type = type,
            RequestedPath = outputPath
        };
        
        try
        {
            // Step 1: Validate input
            var validation = BarcodeValidator.ValidateInput(input, type);
            if (!validation.IsValid)
            {
                result.Success = false;
                result.ErrorType = BarcodeErrorType.ValidationError;
                result.ErrorMessage = validation.ErrorMessage;
                result.ValidationDetails = validation;
                return result;
            }
            
            // Step 2: Generate barcode
            using var barcode = new Barcode(options =>
            {
                options.Type = type;
                configureOptions?.Invoke(options);
            });
            
            string encoded = barcode.Encode(input);
            result.EncodedValue = encoded;
            
            // Step 3: Export if path provided
            if (!string.IsNullOrEmpty(outputPath))
            {
                try
                {
                    // Ensure directory exists
                    string directory = Path.GetDirectoryName(outputPath);
                    if (!string.IsNullOrEmpty(directory))
                    {
                        Directory.CreateDirectory(directory);
                    }
                    
                    barcode.Export(outputPath);
                    result.OutputPath = outputPath;
                }
                catch (Exception exportEx)
                {
                    result.Success = false;
                    result.ErrorType = BarcodeErrorType.ExportError;
                    result.ErrorMessage = $"Export failed: {exportEx.Message}";
                    result.EncodedValue = encoded; // Still return encoded value
                    return result;
                }
            }
            
            result.Success = true;
            result.ProcessingTime = DateTime.UtcNow - result.StartTime;
        }
        catch (ArgumentException argEx)
        {
            result.Success = false;
            result.ErrorType = BarcodeErrorType.InvalidArgument;
            result.ErrorMessage = argEx.Message;
        }
        catch (InvalidOperationException opEx)
        {
            result.Success = false;
            result.ErrorType = BarcodeErrorType.InvalidOperation;
            result.ErrorMessage = opEx.Message;
        }
        catch (Exception ex)
        {
            result.Success = false;
            result.ErrorType = BarcodeErrorType.UnexpectedError;
            result.ErrorMessage = $"Unexpected error: {ex.Message}";
            result.Exception = ex;
        }
        
        result.ProcessingTime = DateTime.UtcNow - result.StartTime;
        return result;
    }
}

public class BarcodeGenerationResult
{
    public DateTime StartTime { get; } = DateTime.UtcNow;
    public string Input { get; set; }
    public BarcodeTypes Type { get; set; }
    public bool Success { get; set; }
    public string EncodedValue { get; set; }
    public string RequestedPath { get; set; }
    public string OutputPath { get; set; }
    public BarcodeErrorType? ErrorType { get; set; }
    public string ErrorMessage { get; set; }
    public ValidationResult ValidationDetails { get; set; }
    public Exception Exception { get; set; }
    public TimeSpan ProcessingTime { get; set; }
}

public enum BarcodeErrorType
{
    ValidationError,
    InvalidArgument,
    InvalidOperation,
    ExportError,
    UnexpectedError
}
```

### Retry Logic with Correction

```csharp
public static class BarcodeRetryLogic
{
    public static BarcodeGenerationResult GenerateWithRetry(
        string input,
        BarcodeTypes type,
        int maxAttempts = 3)
    {
        var attempts = new List<BarcodeGenerationResult>();
        
        for (int attempt = 1; attempt <= maxAttempts; attempt++)
        {
            var result = SafeBarcodeGenerator.TryGenerateBarcode(input, type);
            attempts.Add(result);
            
            if (result.Success)
            {
                result.AttemptsRequired = attempt;
                return result;
            }
            
            // Try to correct the input for next attempt
            if (attempt < maxAttempts)
            {
                string correctedInput = TryCorrectInput(input, type, result);
                if (correctedInput != input)
                {
                    Console.WriteLine($"Attempt {attempt} failed, trying correction: '{input}' -> '{correctedInput}'");
                    input = correctedInput;
                }
                else
                {
                    // No correction possible, break early
                    break;
                }
            }
        }
        
        // Return the last attempt result with all attempts history
        var finalResult = attempts.Last();
        finalResult.AttemptsRequired = attempts.Count;
        return finalResult;
    }
    
    private static string TryCorrectInput(string input, BarcodeTypes type, BarcodeGenerationResult failedResult)
    {
        if (failedResult.ValidationDetails == null)
            return input;
        
        switch (type)
        {
            case BarcodeTypes.Ean13:
                return CorrectEan13Input(input, failedResult.ValidationDetails);
            case BarcodeTypes.Upca:
                return CorrectUpcaInput(input, failedResult.ValidationDetails);
            case BarcodeTypes.Code93:
                return CorrectCode93Input(input, failedResult.ValidationDetails);
            default:
                return input;
        }
    }
    
    private static string CorrectEan13Input(string input, ValidationResult validation)
    {
        // Remove non-digits
        string digitsOnly = new string(input.Where(char.IsDigit).ToArray());
        
        // Pad or truncate to 12 digits
        if (digitsOnly.Length < 12)
        {
            return digitsOnly.PadLeft(12, '0');
        }
        else if (digitsOnly.Length > 12)
        {
            return digitsOnly.Substring(0, 12);
        }
        
        return digitsOnly;
    }
    
    private static string CorrectUpcaInput(string input, ValidationResult validation)
    {
        // Similar to EAN-13 but for 11 digits
        string digitsOnly = new string(input.Where(char.IsDigit).ToArray());
        
        if (digitsOnly.Length < 11)
        {
            return digitsOnly.PadLeft(11, '0');
        }
        else if (digitsOnly.Length > 11)
        {
            return digitsOnly.Substring(0, 11);
        }
        
        return digitsOnly;
    }
    
    private static string CorrectCode93Input(string input, ValidationResult validation)
    {
        // Remove invalid characters and convert to uppercase
        const string validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 $%+-./ ";
        return new string(input.ToUpper().Where(c => validChars.Contains(c)).ToArray());
    }
}
```

## Debugging Validation Issues

### Validation Debugger

```csharp
public static class ValidationDebugger
{
    public static void DebugValidation(string input, BarcodeTypes type)
    {
        Console.WriteLine($"=== Debugging Validation for {type} ===");
        Console.WriteLine($"Input: '{input}'");
        Console.WriteLine($"Length: {input?.Length ?? 0}");
        
        if (string.IsNullOrEmpty(input))
        {
            Console.WriteLine("❌ Input is null or empty");
            return;
        }
        
        switch (type)
        {
            case BarcodeTypes.Ean13:
                DebugEan13(input);
                break;
            case BarcodeTypes.Upca:
                DebugUpca(input);
                break;
            case BarcodeTypes.Code93:
                DebugCode93(input);
                break;
            default:
                Console.WriteLine($"❓ Debug not implemented for {type}");
                break;
        }
        
        Console.WriteLine("=== End Debug ===\n");
    }
    
    private static void DebugEan13(string input)
    {
        Console.WriteLine("EAN-13 Requirements:");
        Console.WriteLine("- Exactly 12 digits");
        Console.WriteLine("- Only numeric characters (0-9)");
        Console.WriteLine();
        
        Console.WriteLine($"Length check: {input.Length} == 12? {(input.Length == 12 ? "✅" : "❌")}");
        
        var nonDigits = input.Where(c => !char.IsDigit(c)).ToList();
        Console.WriteLine($"Character check: All digits? {(nonDigits.Count == 0 ? "✅" : "❌")}");
        
        if (nonDigits.Count > 0)
        {
            Console.WriteLine($"Invalid characters: {string.Join(", ", nonDigits.Select(c => $"'{c}'"))}");
        }
        
        if (input.Length == 12 && nonDigits.Count == 0)
        {
            int checkDigit = Ean13CheckDigit.Calculate(input);
            Console.WriteLine($"✅ Valid input! Check digit will be: {checkDigit}");
            Console.WriteLine($"Complete barcode: {input}{checkDigit}");
        }
    }
    
    private static void DebugUpca(string input)
    {
        Console.WriteLine("UPC-A Requirements:");
        Console.WriteLine("- Exactly 11 digits");
        Console.WriteLine("- Only numeric characters (0-9)");
        Console.WriteLine();
        
        Console.WriteLine($"Length check: {input.Length} == 11? {(input.Length == 11 ? "✅" : "❌")}");
        
        var nonDigits = input.Where(c => !char.IsDigit(c)).ToList();
        Console.WriteLine($"Character check: All digits? {(nonDigits.Count == 0 ? "✅" : "❌")}");
        
        if (nonDigits.Count > 0)
        {
            Console.WriteLine($"Invalid characters: {string.Join(", ", nonDigits.Select(c => $"'{c}'"))}");
        }
        
        if (input.Length == 11 && nonDigits.Count == 0)
        {
            int checkDigit = UpcaCheckDigit.Calculate(input);
            Console.WriteLine($"✅ Valid input! Check digit will be: {checkDigit}");
            Console.WriteLine($"Complete barcode: {input}{checkDigit}");
        }
    }
    
    private static void DebugCode93(string input)
    {
        Console.WriteLine("CODE-93 Requirements:");
        Console.WriteLine("- A-Z, 0-9, space, $, %, +, -, ., /");
        Console.WriteLine("- Non-empty string");
        Console.WriteLine();
        
        Console.WriteLine($"Length check: {input.Length} > 0? {(input.Length > 0 ? "✅" : "❌")}");
        
        const string validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 $%+-./ ";
        var invalidChars = input.Where(c => !validChars.Contains(c)).ToList();
        
        Console.WriteLine($"Character check: All valid? {(invalidChars.Count == 0 ? "✅" : "❌")}");
        
        if (invalidChars.Count > 0)
        {
            Console.WriteLine($"Invalid characters: {string.Join(", ", invalidChars.Distinct().Select(c => $"'{c}'"))}");
            Console.WriteLine("Valid characters: A-Z, 0-9, space, $, %, +, -, ., /");
        }
        
        if (input.Length > 0 && invalidChars.Count == 0)
        {
            Console.WriteLine($"✅ Valid input! Output will be: {input}");
        }
    }
}

// Usage
ValidationDebugger.DebugValidation("12345678901", BarcodeTypes.Ean13);  // Too short
ValidationDebugger.DebugValidation("hello@world", BarcodeTypes.Code93);  // Invalid chars
```

## Production Validation Patterns

### Validation Middleware for Web APIs

```csharp
public class BarcodeValidationMiddleware
{
    public static IResult ValidateAndGenerate(
        [FromRoute] string code,
        [FromQuery] string type = "ean13",
        [FromQuery] string format = "png")
    {
        // Parse barcode type
        if (!Enum.TryParse<BarcodeTypes>(type, true, out var barcodeType))
        {
            return Results.BadRequest(new { error = $"Invalid barcode type: {type}" });
        }
        
        // Validate input
        var validation = BarcodeValidator.ValidateInput(code, barcodeType);
        if (!validation.IsValid)
        {
            return Results.BadRequest(new
            {
                error = validation.ErrorMessage,
                input = validation.Input,
                type = validation.Type.ToString(),
                expectedLength = validation.ExpectedLength,
                invalidCharacters = validation.InvalidCharacters,
                suggestions = validation.Suggestions
            });
        }
        
        // Generate barcode
        var result = SafeBarcodeGenerator.TryGenerateBarcode(code, barcodeType);
        if (!result.Success)
        {
            return Results.BadRequest(new
            {
                error = result.ErrorMessage,
                errorType = result.ErrorType?.ToString()
            });
        }
        
        // Return barcode
        using var barcode = new Barcode(options => options.Type = barcodeType);
        string encodedValue = barcode.Encode(code);
        
        using var stream = new MemoryStream();
        var imageFormat = format.ToLower() switch
        {
            "png" => SKEncodedImageFormat.Png,
            "jpg" or "jpeg" => SKEncodedImageFormat.Jpeg,
            _ => SKEncodedImageFormat.Png
        };
        
        barcode.Export(stream, imageFormat, 100);
        stream.Position = 0;
        
        string mimeType = format.ToLower() switch
        {
            "png" => "image/png",
            "jpg" or "jpeg" => "image/jpeg",
            _ => "image/png"
        };
        
        return Results.File(stream.ToArray(), mimeType, $"{encodedValue}.{format}");
    }
}
```

## Related Documentation

- [Barcode Types](../api/barcode-types.md) - Format specifications and requirements
- [Basic Usage](../examples/basic-usage.md) - Error handling in basic scenarios
- [Supported Types](../examples/supported-types.md) - Type-specific validation examples
- [Export Options](export-options.md) - Validation in batch operations