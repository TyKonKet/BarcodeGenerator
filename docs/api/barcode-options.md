# BarcodeOptions Class

The `BarcodeOptions` class provides configuration options for customizing barcode appearance, behavior, and font settings. It uses a fluent API pattern for easy configuration.

## Namespace

```csharp
TyKonKet.BarcodeGenerator
```

## Inheritance

```csharp
public sealed class BarcodeOptions
```

## Static Fields

### DefaultTypeface

The default typeface used for rendering text in barcodes when no custom typeface is specified.

```csharp
public static readonly SKTypeface DefaultTypeface
```

#### Example

```csharp
// Check if using default typeface
if (options.Typeface == BarcodeOptions.DefaultTypeface)
{
    Console.WriteLine("Using default system font");
}
```

## Properties

### Type

Gets or sets the type of barcode to generate.

```csharp
public BarcodeTypes Type { get; set; }
```

#### Default Value

`BarcodeTypes.Ean8`

#### Example

```csharp
var options = new BarcodeOptions
{
    Type = BarcodeTypes.Ean13
};
```

### Height

Gets or sets the height of the barcode bars in pixels.

```csharp
public int Height { get; set; }
```

#### Default Value

`30`

#### Example

```csharp
options.Height = 50; // Taller bars for better scanning
```

### Scaling

Gets or sets the scaling factor for the barcode. Minimum value is 1.

```csharp
public int Scaling { get; set; }
```

#### Default Value

`5`

#### Behavior

- Values less than 1 are automatically adjusted to 1
- Negative values are converted to their absolute value

#### Example

```csharp
options.Scaling = 3; // 3x scale for larger output
```

### Margins

Gets or sets the margins around the barcode in pixels.

```csharp
public int Margins { get; set; }
```

#### Default Value

`2`

#### Example

```csharp
options.Margins = 10; // More white space around barcode
```

### BackgroundColor

Gets or sets the background color of the barcode.

```csharp
public SKColor BackgroundColor { get; set; }
```

#### Default Value

`SKColors.White`

#### Example

```csharp
options.BackgroundColor = SKColors.Transparent; // Transparent background
options.BackgroundColor = SKColor.Parse("#F0F0F0"); // Light gray
```

### ForegroundColor

Gets or sets the color of the barcode bars and text.

```csharp
public SKColor ForegroundColor { get; set; }
```

#### Default Value

`SKColors.Black`

#### Example

```csharp
options.ForegroundColor = SKColors.DarkBlue;
options.ForegroundColor = SKColor.Parse("#FF0000"); // Red bars
```

### RenderText

Gets or sets a value indicating whether to render text below the barcode.

```csharp
public bool RenderText { get; set; }
```

#### Default Value

`true`

#### Example

```csharp
options.RenderText = false; // Bars only, no text
```

### Typeface

Gets the typeface used for rendering text in the barcode. This is read-only; use the `UseTypeface` methods to set it.

```csharp
public SKTypeface Typeface { get; }
```

#### Example

```csharp
Console.WriteLine($"Current font: {options.Typeface.FamilyName}");
```

## Methods

### UseTypeface(SKTypeface)

Sets the typeface used for rendering text in the barcode.

```csharp
public void UseTypeface(SKTypeface typeface)
```

#### Parameters

- `typeface` (SKTypeface) - The typeface to use.

#### Exceptions

- `InvalidOperationException` - Thrown when the options are locked and cannot be modified.

#### Example

```csharp
var customTypeface = SKTypeface.FromFamilyName("Arial");
options.UseTypeface(customTypeface);
```

### UseTypeface(FontFamily)

Sets the typeface used for rendering text using a FontFamily.

```csharp
public void UseTypeface(FontFamily fontFamily)
```

#### Parameters

- `fontFamily` ([FontFamily](fonts.md#fontfamily)) - The font family to use. Can be a string or FontFamilies enum value.

#### Examples

**Using string:**
```csharp
options.UseTypeface("Times New Roman");
```

**Using FontFamilies enum:**
```csharp
options.UseTypeface(FontFamilies.Arial);
```

**Implicit conversion from string:**
```csharp
FontFamily family = "Verdana"; // Implicit conversion
options.UseTypeface(family);
```

### UseTypeface(FontFamily, SKFontStyle)

Sets the typeface with a specific font style.

```csharp
public void UseTypeface(FontFamily fontFamily, SKFontStyle fontStyle)
```

#### Parameters

- `fontFamily` ([FontFamily](fonts.md#fontfamily)) - The font family to use.
- `fontStyle` (SKFontStyle) - The font style to apply.

#### Example

```csharp
options.UseTypeface("Arial", SKFontStyle.Bold);
options.UseTypeface(FontFamilies.TimesNewRoman, SKFontStyle.Italic);
```

### UseTypeface(FontFamily, int, int, SKFontStyleSlant)

Sets the typeface with custom weight, width, and slant.

```csharp
public void UseTypeface(FontFamily fontFamily, int weight, int width, SKFontStyleSlant fontStyleSlant)
```

#### Parameters

- `fontFamily` ([FontFamily](fonts.md#fontfamily)) - The font family to use.
- `weight` (int) - The font weight (100-900, where 400 is normal, 700 is bold).
- `width` (int) - The font width (1-9, where 5 is normal).
- `fontStyleSlant` (SKFontStyleSlant) - The font slant (upright, italic, or oblique).

#### Example

```csharp
options.UseTypeface("Roboto", 600, 5, SKFontStyleSlant.Upright); // Semi-bold
options.UseTypeface("Open Sans", 300, 3, SKFontStyleSlant.Italic); // Light, condensed, italic
```

### UseTypeface(FontFamily, SKFontStyleWeight, SKFontStyleWidth, SKFontStyleSlant)

Sets the typeface using strongly-typed weight and width enums.

```csharp
public void UseTypeface(FontFamily fontFamily, SKFontStyleWeight weight, SKFontStyleWidth width, SKFontStyleSlant fontStyleSlant)
```

#### Parameters

- `fontFamily` ([FontFamily](fonts.md#fontfamily)) - The font family to use.
- `weight` (SKFontStyleWeight) - The font weight enum value.
- `width` (SKFontStyleWidth) - The font width enum value.
- `fontStyleSlant` (SKFontStyleSlant) - The font slant.

#### Example

```csharp
options.UseTypeface("Helvetica", 
    SKFontStyleWeight.SemiBold, 
    SKFontStyleWidth.Condensed, 
    SKFontStyleSlant.Upright);
```

### UseTypefaceFromFile(string, int)

Sets the typeface from a font file.

```csharp
public void UseTypefaceFromFile(string path, int index = 0)
```

#### Parameters

- `path` (string) - The path to the font file (TTF, OTF, etc.).
- `index` (int) - The index of the font in the file (for font collections). Default is 0.

#### Example

```csharp
options.UseTypefaceFromFile("fonts/custom-font.ttf");
options.UseTypefaceFromFile("fonts/font-collection.ttc", 2); // Third font in collection
```

### UseTypefaceFromData(SKData, int)

Sets the typeface from font data in memory.

```csharp
public void UseTypefaceFromData(SKData data, int index = 0)
```

#### Parameters

- `data` (SKData) - The font data.
- `index` (int) - The index of the font in the data. Default is 0.

#### Example

```csharp
byte[] fontBytes = File.ReadAllBytes("custom-font.ttf");
using var fontData = SKData.CreateCopy(fontBytes);
options.UseTypefaceFromData(fontData);
```

### UseTypefaceFromStream(SKStreamAsset, int)

Sets the typeface from an SKStreamAsset.

```csharp
public void UseTypefaceFromStream(SKStreamAsset stream, int index = 0)
```

#### Parameters

- `stream` (SKStreamAsset) - The font stream.
- `index` (int) - The index of the font in the stream. Default is 0.

#### Example

```csharp
using var fontStream = SKStreamAsset.OpenFromFile("fonts/custom.ttf");
options.UseTypefaceFromStream(fontStream);
```

### UseTypefaceFromStream(Stream, int)

Sets the typeface from a .NET Stream.

```csharp
public void UseTypefaceFromStream(Stream stream, int index = 0)
```

#### Parameters

- `stream` (Stream) - The font stream.
- `index` (int) - The index of the font in the stream. Default is 0.

#### Example

```csharp
using var fileStream = File.OpenRead("fonts/custom.ttf");
options.UseTypefaceFromStream(fileStream);
```

## Configuration Examples

### Basic Configuration
```csharp
var options = new BarcodeOptions
{
    Type = BarcodeTypes.Ean13,
    Height = 50,
    Scaling = 3,
    RenderText = true
};
```

### Custom Colors and Margins
```csharp
options.BackgroundColor = SKColors.White;
options.ForegroundColor = SKColor.Parse("#2C3E50"); // Dark blue-gray
options.Margins = 15; // Generous margins for printing
```

### Font Configuration
```csharp
// Simple font family
options.UseTypeface("Arial");

// Font with style
options.UseTypeface("Times New Roman", SKFontStyle.Bold);

// Custom font file
options.UseTypefaceFromFile("assets/fonts/barcode-font.ttf");
```

### High-Quality Print Configuration
```csharp
var printOptions = new BarcodeOptions
{
    Type = BarcodeTypes.Ean13,
    Height = 100,           // Taller for better scanning
    Scaling = 6,            // Larger scale for high DPI
    Margins = 20,           // Adequate white space
    BackgroundColor = SKColors.White,
    ForegroundColor = SKColors.Black,
    RenderText = true
};
printOptions.UseTypeface("Arial", SKFontStyle.Normal);
```

### Minimal Barcode Configuration
```csharp
var minimalOptions = new BarcodeOptions
{
    Type = BarcodeTypes.Code93,
    Height = 25,            // Compact height
    Scaling = 1,            // Minimal scale
    Margins = 0,            // No margins
    RenderText = false,     // No text
    BackgroundColor = SKColors.Transparent
};
```

### Web-Optimized Configuration
```csharp
var webOptions = new BarcodeOptions
{
    Type = BarcodeTypes.Ean13,
    Height = 40,
    Scaling = 2,
    Margins = 5,
    BackgroundColor = SKColors.Transparent,
    ForegroundColor = SKColors.Black,
    RenderText = true
};
webOptions.UseTypeface("Arial", SKFontStyle.Normal);
```

## Usage Patterns

### Fluent Configuration with Action
```csharp
using var barcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Code93;
    options.Height = 60;
    options.Scaling = 4;
    options.UseTypeface("Consolas", SKFontStyle.Bold);
});
```

### Reusable Configuration
```csharp
public static void ConfigureForPrint(BarcodeOptions options)
{
    options.Height = 80;
    options.Scaling = 5;
    options.Margins = 20;
    options.BackgroundColor = SKColors.White;
    options.ForegroundColor = SKColors.Black;
    options.UseTypeface("Arial", SKFontStyle.Normal);
}

// Use the configuration
using var barcode = new Barcode(ConfigureForPrint);
```

### Options Validation
```csharp
public static bool ValidateOptions(BarcodeOptions options)
{
    return options.Height > 0 
        && options.Scaling > 0 
        && options.Margins >= 0;
}
```

## Related Documentation

- [Barcode Class](barcode.md) - Main barcode generation class
- [BarcodeTypes Enum](barcode-types.md) - Available barcode types
- [Font System](fonts.md) - Font family and typeface details
- [Customization Examples](../examples/customization.md) - Advanced styling examples