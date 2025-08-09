# Font System

The BarcodeGenerator library provides a flexible font system for customizing the appearance of text rendered below barcodes. The system includes predefined font families and supports loading custom fonts from files or streams.

## Overview

The font system consists of two main components:

- **FontFamily** - A wrapper class that handles font family names with implicit conversions
- **FontFamilies** - An enumeration of predefined, commonly available font families

## FontFamily Class

### Namespace

```csharp
TyKonKet.BarcodeGenerator.Fonts
```

### Declaration

```csharp
public sealed class FontFamily
```

### Description

The `FontFamily` class provides a type-safe way to work with font families. It supports implicit conversions from both strings and the `FontFamilies` enumeration, making it easy to use in configuration scenarios.

### Implicit Conversions

#### From String
```csharp
FontFamily family = "Arial";           // Implicit conversion from string
FontFamily custom = "My Custom Font";  // Any font family name
```

#### From FontFamilies Enum
```csharp
FontFamily family = FontFamilies.TimesNewRoman;  // Implicit conversion from enum
```

### Usage Examples

```csharp
// Direct assignment from string
options.UseTypeface("Helvetica");

// Using FontFamily variable
FontFamily family = "Comic Sans MS";
options.UseTypeface(family);

// Using enum value
options.UseTypeface(FontFamilies.Consolas);
```

### ToString() Method

Returns the actual font family name as a string:

```csharp
FontFamily family = FontFamilies.Arial;
Console.WriteLine(family.ToString()); // Output: "Arial"

FontFamily custom = "My Custom Font";
Console.WriteLine(custom.ToString()); // Output: "My Custom Font"
```

## FontFamilies Enum

### Namespace

```csharp
TyKonKet.BarcodeGenerator.Fonts
```

### Declaration

```csharp
public enum FontFamilies
```

### Available Font Families

| Enum Value | Font Name | Description |
|------------|-----------|-------------|
| `Arial` | Arial | Clean, widely available sans-serif font |
| `Calibri` | Calibri | Modern sans-serif, default in many Microsoft products |
| `Cambria` | Cambria | Serif font designed for on-screen reading |
| `ComicSans` | Comic Sans MS | Casual, comic-style font |
| `Consolas` | Consolas | Monospaced font ideal for code and technical text |
| `CourierNew` | Courier New | Classic monospaced typewriter-style font |
| `FranklinGothic` | Franklin Gothic | Bold, condensed sans-serif font |
| `Georgia` | Georgia | Serif font optimized for screen display |
| `Impact` | Impact | Heavy, compressed sans-serif font |
| `LucidaConsole` | Lucida Console | Monospaced font with good readability |
| `PalatinoLinotype` | Palatino Linotype | Classic serif font with elegant appearance |
| `SegoeUI` | Segoe UI | Modern sans-serif, Windows system font |
| `Tahoma` | Tahoma | Compact sans-serif font |
| `TimesNewRoman` | Times New Roman | Traditional serif font, widely used |
| `TrebuchetMS` | Trebuchet MS | Humanist sans-serif font |
| `Verdana` | Verdana | Sans-serif font designed for screen legibility |
| `DejaVuSerif` | DejaVu Serif | Open-source serif font, good Linux compatibility |

### Usage Examples

```csharp
// Using enum values directly
options.UseTypeface(FontFamilies.Arial);
options.UseTypeface(FontFamilies.ConsoleFont);
options.UseTypeface(FontFamilies.TimesNewRoman);

// With font styles
options.UseTypeface(FontFamilies.Arial, SKFontStyle.Bold);
options.UseTypeface(FontFamilies.Georgia, SKFontStyle.Italic);
```

## Font Configuration Methods

The font system is primarily used through the `BarcodeOptions.UseTypeface` methods:

### Basic Font Family

```csharp
// Using string
options.UseTypeface("Arial");

// Using enum
options.UseTypeface(FontFamilies.Verdana);
```

### Font with Style

```csharp
options.UseTypeface("Times New Roman", SKFontStyle.Bold);
options.UseTypeface(FontFamilies.Georgia, SKFontStyle.Italic);
```

### Custom Font Weight and Style

```csharp
// Using integer values
options.UseTypeface("Helvetica", 600, 5, SKFontStyleSlant.Upright);

// Using enum values
options.UseTypeface(FontFamilies.Arial, 
    SKFontStyleWeight.SemiBold, 
    SKFontStyleWidth.Normal, 
    SKFontStyleSlant.Italic);
```

### Loading Custom Fonts

#### From File
```csharp
options.UseTypefaceFromFile("fonts/custom-barcode-font.ttf");
options.UseTypefaceFromFile("fonts/font-collection.ttc", 1); // Second font in collection
```

#### From Data
```csharp
byte[] fontData = LoadFontFromResource();
using var skData = SKData.CreateCopy(fontData);
options.UseTypefaceFromData(skData);
```

#### From Stream
```csharp
using var fileStream = File.OpenRead("fonts/custom.otf");
options.UseTypefaceFromStream(fileStream);
```

## Font Selection Guidelines

### For Different Barcode Types

#### Numeric Barcodes (EAN-13, UPC-A, ISBN-13, EAN-8)
```csharp
// Clean, readable fonts work best
options.UseTypeface(FontFamilies.Arial);
options.UseTypeface(FontFamilies.Calibri);
options.UseTypeface(FontFamilies.Segoe);
```

#### Alphanumeric Barcodes (CODE-93)
```csharp
// Monospaced fonts ensure consistent character spacing
options.UseTypeface(FontFamilies.Consolas);
options.UseTypeface(FontFamilies.CourierNew);
options.UseTypeface(FontFamilies.LucidaConsole);
```

### For Different Use Cases

#### High-Quality Printing
```csharp
// Serif fonts for professional documents
options.UseTypeface(FontFamilies.TimesNewRoman, SKFontStyle.Normal);
options.UseTypeface(FontFamilies.Georgia, SKFontStyle.Normal);
```

#### Screen Display
```csharp
// Sans-serif fonts for better screen readability
options.UseTypeface(FontFamilies.Verdana);
options.UseTypeface(FontFamilies.Arial);
options.UseTypeface(FontFamilies.SegoeUI);
```

#### Industrial/Technical Applications
```csharp
// Monospaced fonts for technical precision
options.UseTypeface(FontFamilies.Consolas, SKFontStyle.Bold);
options.UseTypeface(FontFamilies.CourierNew);
```

## Platform Considerations

### Windows
Most predefined fonts are available. System fonts like Segoe UI work well:
```csharp
options.UseTypeface(FontFamilies.SegoeUI);
options.UseTypeface(FontFamilies.Calibri);
```

### macOS
Use cross-platform fonts or specify alternatives:
```csharp
// Good cross-platform choices
options.UseTypeface(FontFamilies.Arial);
options.UseTypeface(FontFamilies.Verdana);
options.UseTypeface(FontFamilies.TimesNewRoman);
```

### Linux
DejaVu fonts are commonly available, or load custom fonts:
```csharp
options.UseTypeface(FontFamilies.DejaVuSerif);
// or load custom fonts
options.UseTypefaceFromFile("/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf");
```

## Advanced Font Usage

### Font Fallback Strategy
```csharp
public void ConfigureFontWithFallback(BarcodeOptions options)
{
    try
    {
        // Try preferred font
        options.UseTypeface("Roboto");
    }
    catch
    {
        try
        {
            // Fallback to common font
            options.UseTypeface(FontFamilies.Arial);
        }
        catch
        {
            // Use system default
            // (BarcodeOptions.DefaultTypeface will be used)
        }
    }
}
```

### Loading Embedded Fonts
```csharp
public void UseEmbeddedFont(BarcodeOptions options)
{
    // Load font from embedded resource
    var assembly = Assembly.GetExecutingAssembly();
    using var stream = assembly.GetManifestResourceStream("MyApp.Fonts.CustomFont.ttf");
    if (stream != null)
    {
        options.UseTypefaceFromStream(stream);
    }
    else
    {
        // Fallback to system font
        options.UseTypeface(FontFamilies.Arial);
    }
}
```

### Font Weight Examples
```csharp
// Light weight
options.UseTypeface("Helvetica", 300, 5, SKFontStyleSlant.Upright);

// Normal weight  
options.UseTypeface("Helvetica", 400, 5, SKFontStyleSlant.Upright);

// Bold weight
options.UseTypeface("Helvetica", 700, 5, SKFontStyleSlant.Upright);

// Extra bold
options.UseTypeface("Helvetica", 800, 5, SKFontStyleSlant.Upright);
```

### Font Width Examples
```csharp
// Condensed
options.UseTypeface("Arial", 400, 3, SKFontStyleSlant.Upright);

// Normal
options.UseTypeface("Arial", 400, 5, SKFontStyleSlant.Upright);

// Expanded  
options.UseTypeface("Arial", 400, 7, SKFontStyleSlant.Upright);
```

## Common Font Configurations

### Professional Document Style
```csharp
options.UseTypeface(FontFamilies.TimesNewRoman, SKFontStyle.Normal);
options.ForegroundColor = SKColors.Black;
options.BackgroundColor = SKColors.White;
```

### Modern Clean Style
```csharp
options.UseTypeface(FontFamilies.Calibri, SKFontStyle.Normal);
options.ForegroundColor = SKColor.Parse("#2C3E50");
options.BackgroundColor = SKColors.White;
```

### Technical/Monospace Style
```csharp
options.UseTypeface(FontFamilies.Consolas, SKFontStyle.Bold);
options.ForegroundColor = SKColors.Black;
options.BackgroundColor = SKColor.Parse("#F8F8F8");
```

### High-Contrast Style
```csharp
options.UseTypeface(FontFamilies.Arial, SKFontStyle.Bold);
options.ForegroundColor = SKColors.White;
options.BackgroundColor = SKColors.Black;
```

## Error Handling

```csharp
public void SafeConfigureFont(BarcodeOptions options, string fontName)
{
    try
    {
        options.UseTypeface(fontName);
    }
    catch (Exception ex) when (ex is ArgumentException || ex is FileNotFoundException)
    {
        Console.WriteLine($"Font '{fontName}' not available, using default");
        // BarcodeOptions.DefaultTypeface will be used automatically
    }
}
```

## Related Documentation

- [BarcodeOptions Class](barcode-options.md) - Font configuration methods
- [Customization Examples](../examples/customization.md) - Font styling examples
- [Custom Fonts Guide](../advanced/custom-fonts.md) - Advanced font loading techniques