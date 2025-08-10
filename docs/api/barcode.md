# Barcode Class

The `Barcode` class is the main entry point for barcode generation in the BarcodeGenerator library. It provides a simple API for creating and exporting barcodes using action delegate configuration.

## Namespace

```csharp
TyKonKet.BarcodeGenerator
```

## Inheritance

```csharp
public sealed class Barcode : IDisposable
```

## Constructor

### Barcode(Action<BarcodeOptions>)

Initializes a new instance of the Barcode class with custom options.

```csharp
public Barcode(Action<BarcodeOptions> options = null)
```

#### Parameters

- `options` (Action<[BarcodeOptions](barcode-options.md)>) - An action to configure the barcode options. If null, default options are used.

#### Exceptions

- `InvalidOperationException` - Thrown when the encoder type is not known or does not inherit from the Encoder base class.

#### Examples

**Basic usage with default options:**
```csharp
using var barcode = new Barcode();
```

**With custom configuration:**
```csharp
using var barcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.Height = 50;
    options.Scaling = 3;
    options.RenderText = true;
});
```

**Using a configuration method:**
```csharp
void ConfigureBarcode(BarcodeOptions options)
{
    options.Type = BarcodeTypes.Code93;
    options.BackgroundColor = SKColors.Transparent;
    options.ForegroundColor = SKColors.DarkBlue;
}

using var barcode = new Barcode(ConfigureBarcode);
```

## Properties

### Image

Gets the generated barcode image as an SKImage.

```csharp
public SKImage Image { get; }
```

#### Returns

`SKImage` - The barcode image. This property is null until `Encode()` has been called successfully.

#### Example

```csharp
using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
barcode.Encode("123456789012");

// Access the generated image
SKImage image = barcode.Image;
if (image != null)
{
    Console.WriteLine($"Image size: {image.Width}x{image.Height}");
}
```

## Methods

### Encode(string)

Encodes the barcode based on the specified options and renders the image.

```csharp
public string Encode(string barcode)
```

#### Parameters

- `barcode` (string) - The alphanumeric barcode to encode. Format requirements depend on the barcode type.

#### Returns

`string` - The validated barcode string with added check digits if the encoding requires them.

#### Exceptions

- `ArgumentNullException` - Thrown when the barcode parameter is null.
- `FormatException` - Thrown when the barcode contains characters not allowed by the selected encoder's charset.
- `ArgumentOutOfRangeException` - Thrown when a numeric character falls outside the valid range during internal conversion.

#### Examples

**EAN-13 with automatic check digit:**
```csharp
using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
string result = barcode.Encode("123456789012"); // Input: 12 digits
Console.WriteLine(result); // Output: "1234567890128" (13 digits with check digit)
```

**CODE-93 with alphanumeric data:**
```csharp
using var barcode = new Barcode(options => options.Type = BarcodeTypes.Code93);
string result = barcode.Encode("HELLO-WORLD");
Console.WriteLine(result); // Output: "HELLO-WORLD3L"
```

**Error handling:**
```csharp
try
{
    using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
    string result = barcode.Encode("invalid@chars"); // Invalid characters for EAN-13
}
catch (FormatException ex)
{
    Console.WriteLine($"Invalid barcode format: {ex.Message}");
}
```

### Export(string, SKEncodedImageFormat, int)

Exports the barcode image to a file with the specified format and quality.

```csharp
public void Export(string fileName, SKEncodedImageFormat format = SKEncodedImageFormat.Png, int quality = 100)
```

#### Parameters

- `fileName` (string) - The name of the file to export the image to. Supports keyword substitution (see below).
- `format` (SKEncodedImageFormat) - The image export format. Default is PNG.
- `quality` (int) - The image export quality (1-100). Default is 100. Only affects JPEG and WEBP formats.

#### Available Keywords in fileName

- `{barcode}` - The barcode string
- `{format}` - The image format (e.g., "png", "jpg")
- `{quality}` - The image quality (1-100)

#### Exceptions

- `InvalidOperationException` - Thrown when the barcode has not been encoded before export.
- `ArgumentNullException` - Thrown when filePath is null.
- `DirectoryNotFoundException` - Thrown when the directory for the file path does not exist and cannot be created.
- `IOException` - Thrown when an I/O error occurs during file operations.

**Note**: The directory will be automatically created if it doesn't exist.
- `DirectoryNotFoundException` - Thrown when the specified directory doesn't exist.

#### Examples

**Basic file export:**
```csharp
using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
barcode.Encode("123456789012");
barcode.Export("output.png");
```

**Different formats and quality:**
```csharp
barcode.Export("high-quality.png", SKEncodedImageFormat.Png, 100);
barcode.Export("compressed.jpg", SKEncodedImageFormat.Jpeg, 85);
barcode.Export("modern.webp", SKEncodedImageFormat.Webp, 90);
```

**Using keyword substitution:**
```csharp
barcode.Encode("123456789012");
barcode.Export("products/{barcode}_q{quality}.{format}", SKEncodedImageFormat.Png, 100);
// Results in: products/1234567890128_q100.png
```

**Directory structure:**
```csharp
// Directory is automatically created if it doesn't exist
barcode.Export("output/barcodes/product-{barcode}.png");
```

### Export(Stream, SKEncodedImageFormat, int)

Exports the barcode image to a stream with the specified format and quality.

```csharp
public void Export(Stream stream, SKEncodedImageFormat format = SKEncodedImageFormat.Png, int quality = 100)
```

#### Parameters

- `stream` (Stream) - The stream to export the image to.
- `format` (SKEncodedImageFormat) - The image export format. Default is PNG.
- `quality` (int) - The image export quality (1-100). Default is 100.

#### Exceptions

- `InvalidOperationException` - Thrown when the barcode has not been encoded before export.
- `ArgumentNullException` - Thrown when stream is null.
- `IOException` - Thrown when an I/O error occurs during stream operations.

#### Examples

**Export to memory stream:**
```csharp
using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
barcode.Encode("123456789012");

using var memoryStream = new MemoryStream();
barcode.Export(memoryStream, SKEncodedImageFormat.Png, 100);

byte[] imageBytes = memoryStream.ToArray();
Console.WriteLine($"Image size: {imageBytes.Length} bytes");
```

**Export to file stream:**
```csharp
using var fileStream = new FileStream("output.png", FileMode.Create);
barcode.Export(fileStream, SKEncodedImageFormat.Png, 100);
```

**Export to HTTP response stream (ASP.NET Core):**
```csharp
[HttpGet("barcode/{code}")]
public IActionResult GetBarcode(string code)
{
    using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
    barcode.Encode(code);
    
    var stream = new MemoryStream();
    barcode.Export(stream, SKEncodedImageFormat.Png, 100);
    stream.Position = 0;
    
    return File(stream, "image/png", $"{code}.png");
}
```

### Dispose()

Releases all resources used by the Barcode class.

```csharp
public void Dispose()
```

#### Examples

**Manual disposal:**
```csharp
var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
try
{
    barcode.Encode("123456789012");
    barcode.Export("output.png");
}
finally
{
    barcode.Dispose();
}
```

**Using statement (recommended):**
```csharp
using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
barcode.Encode("123456789012");
barcode.Export("output.png");
// Automatically disposed at end of scope
```

## Usage Patterns

### Simple Usage
```csharp
using var barcode = new Barcode();
string result = barcode.Encode("1234567");
barcode.Export("barcode.png");
```

### Advanced Configuration
```csharp
using var barcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Code93;
    options.Height = 60;
    options.Scaling = 4;
    options.Margins = 10;
    options.BackgroundColor = SKColors.LightGray;
    options.ForegroundColor = SKColors.DarkBlue;
    options.RenderText = true;
    options.UseTypeface("Courier New", SKFontStyle.Bold);
});

string validatedCode = barcode.Encode("PRODUCT-001");
barcode.Export("products/{barcode}.png", SKEncodedImageFormat.Png, 100);
```

### Batch Processing
```csharp
string[] productCodes = { "123456789012", "987654321098" };

using var barcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.Height = 50;
    options.Scaling = 2;
});

foreach (string code in productCodes)
{
    string validatedCode = barcode.Encode(code);
    barcode.Export($"output/{validatedCode}.png");
}
```

### Error Handling Best Practices
```csharp
public void GenerateBarcode(string input, string outputPath)
{
    try
    {
        using var barcode = new Barcode(options =>
        {
            options.Type = BarcodeTypes.Ean13;
            options.RenderText = true;
        });
        
        string validatedCode = barcode.Encode(input);
        barcode.Export(outputPath);
        
        Console.WriteLine($"Successfully generated barcode: {validatedCode}");
    }
    catch (ArgumentNullException ex)
    {
        Console.WriteLine($"Null argument: {ex.Message}");
    }
    catch (FormatException ex)
    {
        Console.WriteLine($"Invalid format: {ex.Message}");
    }
    catch (ArgumentOutOfRangeException ex)
    {
        Console.WriteLine($"Argument out of range: {ex.Message}");
    }
    catch (InvalidOperationException ex)
    {
        Console.WriteLine($"Operation failed: {ex.Message}");
    }
    catch (IOException ex)
    {
        Console.WriteLine($"I/O error: {ex.Message}");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Unexpected error: {ex.Message}");
    }
}
```

## Related Documentation

- [BarcodeOptions Class](barcode-options.md) - Configuration options
- [BarcodeTypes Enum](barcode-types.md) - Supported barcode types
- [Font System](fonts.md) - Font customization
- [Examples](../examples/basic-usage.md) - More usage examples