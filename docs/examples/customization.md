# Customization Examples

This guide demonstrates advanced customization options for creating visually appealing and functional barcodes with the BarcodeGenerator library.

## Visual Customization

### Colors and Styling

#### Custom Color Schemes

```csharp
// Professional blue theme
using var professionalBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.Height = 50;
    options.Scaling = 3;
    options.BackgroundColor = SKColor.Parse("#F8F9FA");      // Light gray background
    options.ForegroundColor = SKColor.Parse("#2C3E50");      // Dark blue bars
    options.UseTypeface("Arial", SKFontStyle.Normal);
});

// High contrast theme
using var highContrastBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Code93;
    options.Height = 60;
    options.Scaling = 4;
    options.BackgroundColor = SKColors.Black;
    options.ForegroundColor = SKColors.White;
    options.UseTypeface("Consolas", SKFontStyle.Bold);
});

// Transparent background for overlays
using var transparentBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.Height = 45;
    options.Scaling = 2;
    options.BackgroundColor = SKColors.Transparent;
    options.ForegroundColor = SKColors.Black;
});
```

#### Brand Color Integration

```csharp
public static class BrandColors
{
    public static readonly SKColor Primary = SKColor.Parse("#1E88E5");     // Blue
    public static readonly SKColor Secondary = SKColor.Parse("#FFC107");   // Amber
    public static readonly SKColor Dark = SKColor.Parse("#263238");        // Blue Gray
    public static readonly SKColor Light = SKColor.Parse("#ECEFF1");       // Light Gray
}

using var brandedBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.Height = 55;
    options.Scaling = 3;
    options.BackgroundColor = BrandColors.Light;
    options.ForegroundColor = BrandColors.Dark;
    options.UseTypeface("Arial", SKFontStyle.Normal);
});
```

### Size and Scaling Options

#### Different Size Configurations

```csharp
// Tiny barcode for labels
using var tinyBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean8;
    options.Height = 20;
    options.Scaling = 1;
    options.Margins = 1;
    options.RenderText = false;  // Save space
});

// Medium barcode for standard use
using var mediumBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.Height = 50;
    options.Scaling = 2;
    options.Margins = 5;
});

// Large barcode for high-resolution printing
using var largeBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.Height = 100;
    options.Scaling = 6;
    options.Margins = 20;
});

// Extra large for posters/banners
using var extraLargeBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Code93;
    options.Height = 150;
    options.Scaling = 10;
    options.Margins = 30;
});
```

#### Responsive Sizing

```csharp
public Barcode CreateResponsiveBarcode(BarcodeTypes type, string sizeCategory)
{
    return sizeCategory.ToLower() switch
    {
        "xs" => new Barcode(options => ConfigureSize(options, type, 15, 1, 1)),
        "sm" => new Barcode(options => ConfigureSize(options, type, 25, 1, 2)),
        "md" => new Barcode(options => ConfigureSize(options, type, 40, 2, 5)),
        "lg" => new Barcode(options => ConfigureSize(options, type, 60, 3, 10)),
        "xl" => new Barcode(options => ConfigureSize(options, type, 80, 4, 15)),
        _ => new Barcode(options => ConfigureSize(options, type, 40, 2, 5))
    };
}

private void ConfigureSize(BarcodeOptions options, BarcodeTypes type, int height, int scaling, int margins)
{
    options.Type = type;
    options.Height = height;
    options.Scaling = scaling;
    options.Margins = margins;
}
```

## Font Customization

### Typography Styles

#### Modern Sans-Serif

```csharp
using var modernBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.Height = 50;
    options.Scaling = 3;
    options.UseTypeface("Segoe UI", SKFontStyle.Normal);
    options.ForegroundColor = SKColor.Parse("#333333");
});
```

#### Classic Serif

```csharp
using var classicBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Isbn13;
    options.Height = 45;
    options.Scaling = 2;
    options.UseTypeface("Times New Roman", SKFontStyle.Normal);
    options.BackgroundColor = SKColor.Parse("#FFF8DC");  // Cream background
});
```

#### Technical Monospace

```csharp
using var technicalBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Code93;
    options.Height = 55;
    options.Scaling = 3;
    options.UseTypeface("Consolas", SKFontStyle.Normal);
    options.BackgroundColor = SKColor.Parse("#F5F5F5");
    options.ForegroundColor = SKColor.Parse("#1A1A1A");
});
```

#### Bold and Impact Fonts

```csharp
using var boldBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Upca;
    options.Height = 60;
    options.Scaling = 3;
    options.UseTypeface("Arial", SKFontStyle.Bold);
    options.ForegroundColor = SKColors.Black;
});

using var impactBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Code93;
    options.Height = 50;
    options.Scaling = 3;
    options.UseTypeface(FontFamilies.Impact);
});
```

### Custom Font Weights and Styles

#### Fine-Tuned Typography

```csharp
// Light weight font
using var lightBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.UseTypeface("Helvetica", 300, 5, SKFontStyleSlant.Upright);  // Light weight
});

// Semi-bold font
using var semiBoldBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.UseTypeface("Arial", 600, 5, SKFontStyleSlant.Upright);  // Semi-bold
});

// Condensed font
using var condensedBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Code93;
    options.UseTypeface("Arial", 400, 3, SKFontStyleSlant.Upright);  // Condensed width
});

// Italic style
using var italicBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.UseTypeface("Georgia", 400, 5, SKFontStyleSlant.Italic);
});
```

## Use Case-Specific Configurations

### E-commerce Product Barcodes

```csharp
public static void ConfigureEcommerce(BarcodeOptions options)
{
    options.Type = BarcodeTypes.Ean13;
    options.Height = 45;
    options.Scaling = 2;
    options.Margins = 8;
    options.BackgroundColor = SKColors.White;
    options.ForegroundColor = SKColors.Black;
    options.RenderText = true;
    options.UseTypeface("Arial", SKFontStyle.Normal);
}

// Usage
using var productBarcode = new Barcode(ConfigureEcommerce);
string result = productBarcode.Encode("123456789012");
productBarcode.Export("product_{barcode}.png", SKEncodedImageFormat.Png, 100);
```

### Library Book Labels

```csharp
public static void ConfigureLibrary(BarcodeOptions options)
{
    options.Type = BarcodeTypes.Isbn13;
    options.Height = 35;
    options.Scaling = 2;
    options.Margins = 5;
    options.BackgroundColor = SKColor.Parse("#F9F9F9");
    options.ForegroundColor = SKColor.Parse("#2C3E50");
    options.RenderText = true;
    options.UseTypeface("Times New Roman", SKFontStyle.Normal);
}
```

### Industrial Inventory

```csharp
public static void ConfigureIndustrial(BarcodeOptions options)
{
    options.Type = BarcodeTypes.Code93;
    options.Height = 60;
    options.Scaling = 4;
    options.Margins = 10;
    options.BackgroundColor = SKColors.White;
    options.ForegroundColor = SKColors.Black;
    options.RenderText = true;
    options.UseTypeface("Consolas", SKFontStyle.Bold);
}
```

### Small Package Labels

```csharp
public static void ConfigureSmallPackage(BarcodeOptions options)
{
    options.Type = BarcodeTypes.Ean8;
    options.Height = 25;
    options.Scaling = 2;
    options.Margins = 3;
    options.BackgroundColor = SKColors.Transparent;
    options.ForegroundColor = SKColors.Black;
    options.RenderText = true;
    options.UseTypeface("Arial", SKFontStyle.Normal);
}
```

## Print-Optimized Configurations

### High-DPI Printing

```csharp
using var printBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.Height = 120;           // Taller for better scanning
    options.Scaling = 8;            // High resolution
    options.Margins = 25;           // Adequate quiet zone
    options.BackgroundColor = SKColors.White;
    options.ForegroundColor = SKColors.Black;
    options.RenderText = true;
    options.UseTypeface("Arial", SKFontStyle.Normal);
});

// Export at maximum quality
printBarcode.Encode("123456789012");
printBarcode.Export("print-ready.png", SKEncodedImageFormat.Png, 100);
```

### Newspaper/Magazine Printing

```csharp
using var newspaperBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.Height = 40;
    options.Scaling = 3;
    options.Margins = 8;
    options.BackgroundColor = SKColors.White;
    options.ForegroundColor = SKColors.Black;
    options.RenderText = true;
    options.UseTypeface("Arial", SKFontStyle.Bold);  // Bold for better print quality
});
```

### Thermal Printer Optimization

```csharp
using var thermalBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Code93;
    options.Height = 50;
    options.Scaling = 2;
    options.Margins = 5;
    options.BackgroundColor = SKColors.White;
    options.ForegroundColor = SKColors.Black;
    options.RenderText = true;
    options.UseTypeface("Consolas", SKFontStyle.Normal);  // Monospace for clarity
});
```

## Web and Digital Display

### Website Integration

```csharp
public static void ConfigureWebDisplay(BarcodeOptions options)
{
    options.Height = 40;
    options.Scaling = 2;
    options.Margins = 5;
    options.BackgroundColor = SKColors.Transparent;  // Blend with website
    options.ForegroundColor = SKColors.Black;
    options.RenderText = true;
    options.UseTypeface("Verdana", SKFontStyle.Normal);  // Web-safe font
}

// Usage for web API
[HttpGet("barcode/{code}")]
public IActionResult GetWebBarcode(string code)
{
    using var barcode = new Barcode(ConfigureWebDisplay);
    barcode.Type = BarcodeTypes.Ean13;
    
    string result = barcode.Encode(code);
    var stream = new MemoryStream();
    barcode.Export(stream, SKEncodedImageFormat.Png, 95);  // Slightly compressed
    stream.Position = 0;
    
    return File(stream, "image/png");
}
```

### Mobile App Optimization

```csharp
public static void ConfigureMobile(BarcodeOptions options)
{
    options.Height = 35;
    options.Scaling = 2;
    options.Margins = 4;
    options.BackgroundColor = SKColors.Transparent;
    options.ForegroundColor = SKColors.Black;
    options.RenderText = true;
    options.UseTypeface("Arial", SKFontStyle.Normal);
}
```

### Dark Mode Support

```csharp
public static void ConfigureDarkMode(BarcodeOptions options)
{
    options.Height = 45;
    options.Scaling = 2;
    options.Margins = 8;
    options.BackgroundColor = SKColor.Parse("#1E1E1E");  // Dark background
    options.ForegroundColor = SKColors.White;           // White bars
    options.RenderText = true;
    options.UseTypeface("Segoe UI", SKFontStyle.Normal);
}

public static void ConfigureLightMode(BarcodeOptions options)
{
    options.Height = 45;
    options.Scaling = 2;
    options.Margins = 8;
    options.BackgroundColor = SKColors.White;
    options.ForegroundColor = SKColors.Black;
    options.RenderText = true;
    options.UseTypeface("Segoe UI", SKFontStyle.Normal);
}
```

## Advanced Styling Techniques

### Gradient-Like Effects (Using Solid Colors)

```csharp
// Simulated gradient effect with subtle color variation
using var gradientBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.Height = 60;
    options.Scaling = 3;
    options.BackgroundColor = SKColor.Parse("#F0F4F8");  // Very light blue
    options.ForegroundColor = SKColor.Parse("#1A365D");  // Dark blue
    options.UseTypeface("Arial", SKFontStyle.Normal);
});
```

### Retro/Vintage Style

```csharp
using var vintageBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Code93;
    options.Height = 50;
    options.Scaling = 3;
    options.BackgroundColor = SKColor.Parse("#FDF6E3");  // Sepia background
    options.ForegroundColor = SKColor.Parse("#8B4513");  // Brown bars
    options.UseTypeface("Times New Roman", SKFontStyle.Normal);
});
```

### Minimalist Design

```csharp
using var minimalistBarcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.Height = 40;
    options.Scaling = 1;
    options.Margins = 0;
    options.BackgroundColor = SKColors.Transparent;
    options.ForegroundColor = SKColor.Parse("#333333");
    options.RenderText = false;  // Clean, bars only
});
```

## Configuration Validation

### Validate Configuration Settings

```csharp
public static bool ValidateConfiguration(BarcodeOptions options)
{
    // Check basic requirements
    if (options.Height <= 0 || options.Scaling <= 0 || options.Margins < 0)
        return false;
    
    // Check color contrast (simple luminance check)
    if (GetLuminance(options.BackgroundColor) == GetLuminance(options.ForegroundColor))
        return false;  // No contrast
    
    return true;
}

private static double GetLuminance(SKColor color)
{
    return 0.299 * color.Red + 0.587 * color.Green + 0.114 * color.Blue;
}
```

### Auto-Optimize for Contrast

```csharp
public static void EnsureContrast(BarcodeOptions options)
{
    double bgLuminance = GetLuminance(options.BackgroundColor);
    double fgLuminance = GetLuminance(options.ForegroundColor);
    
    // If contrast is too low, adjust colors
    if (Math.Abs(bgLuminance - fgLuminance) < 50)
    {
        if (bgLuminance > 128)
        {
            options.ForegroundColor = SKColors.Black;
        }
        else
        {
            options.ForegroundColor = SKColors.White;
        }
    }
}
```

## Template System

### Configuration Templates

```csharp
public static class BarcodeTemplates
{
    public static readonly Dictionary<string, Action<BarcodeOptions>> Templates = new()
    {
        ["retail"] = options => {
            options.Height = 50;
            options.Scaling = 2;
            options.Margins = 8;
            options.UseTypeface("Arial", SKFontStyle.Normal);
        },
        
        ["industrial"] = options => {
            options.Height = 60;
            options.Scaling = 4;
            options.Margins = 10;
            options.UseTypeface("Consolas", SKFontStyle.Bold);
            options.ForegroundColor = SKColors.Black;
            options.BackgroundColor = SKColors.White;
        },
        
        ["compact"] = options => {
            options.Height = 25;
            options.Scaling = 1;
            options.Margins = 2;
            options.RenderText = false;
        },
        
        ["premium"] = options => {
            options.Height = 80;
            options.Scaling = 5;
            options.Margins = 20;
            options.UseTypeface("Times New Roman", SKFontStyle.Normal);
            options.BackgroundColor = SKColor.Parse("#F8F9FA");
            options.ForegroundColor = SKColor.Parse("#2C3E50");
        }
    };
    
    public static Barcode CreateFromTemplate(string templateName, BarcodeTypes type)
    {
        return new Barcode(options =>
        {
            options.Type = type;
            if (Templates.TryGetValue(templateName, out var template))
            {
                template(options);
            }
        });
    }
}

// Usage
using var retailBarcode = BarcodeTemplates.CreateFromTemplate("retail", BarcodeTypes.Ean13);
using var industrialBarcode = BarcodeTemplates.CreateFromTemplate("industrial", BarcodeTypes.Code93);
```

## Related Documentation

- [Basic Usage Examples](basic-usage.md) - Fundamental barcode generation
- [Export Formats](export-formats.md) - Output format options
- [Font System](../api/fonts.md) - Font family and typeface details
- [Custom Fonts](../advanced/custom-fonts.md) - Loading custom fonts
- [BarcodeOptions API](../api/barcode-options.md) - Complete options reference