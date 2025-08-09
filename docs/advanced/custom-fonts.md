# Custom Font Loading

This guide demonstrates advanced font loading techniques for the BarcodeGenerator library, including loading fonts from files, embedded resources, streams, and handling cross-platform font scenarios.

## Overview

The BarcodeGenerator library supports multiple ways to load custom fonts:

1. **System fonts** - Using predefined or system-available fonts
2. **Font files** - Loading from TTF, OTF, or font collection files
3. **Embedded resources** - Fonts packaged within your application
4. **Streams** - Loading from byte arrays, network streams, or other sources
5. **Cross-platform fonts** - Ensuring consistency across different operating systems

## Loading Fonts from Files

### Basic File Loading

```csharp
using var barcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    options.UseTypefaceFromFile("fonts/custom-barcode-font.ttf");
});
```

### Font Collection Files

Some font files contain multiple typefaces. Use the index parameter to select specific fonts:

```csharp
// Load the first font from a collection (index 0, default)
options.UseTypefaceFromFile("fonts/font-family.ttc", 0);

// Load the second font from the collection
options.UseTypefaceFromFile("fonts/font-family.ttc", 1);

// Load the third font from the collection
options.UseTypefaceFromFile("fonts/font-family.ttc", 2);
```

### Error Handling for File Loading

```csharp
public void LoadFontSafely(BarcodeOptions options, string fontPath)
{
    try
    {
        if (File.Exists(fontPath))
        {
            options.UseTypefaceFromFile(fontPath);
            Console.WriteLine($"Successfully loaded font: {fontPath}");
        }
        else
        {
            Console.WriteLine($"Font file not found: {fontPath}, using default");
            options.UseTypeface("Arial"); // Fallback
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Failed to load font {fontPath}: {ex.Message}");
        options.UseTypeface("Arial"); // Fallback
    }
}
```

### Font Discovery and Validation

```csharp
public static class FontLoader
{
    public static List<string> FindFontFiles(string directory)
    {
        var fontExtensions = new[] { "*.ttf", "*.otf", "*.ttc", "*.woff", "*.woff2" };
        var fontFiles = new List<string>();
        
        foreach (string extension in fontExtensions)
        {
            fontFiles.AddRange(Directory.GetFiles(directory, extension, SearchOption.AllDirectories));
        }
        
        return fontFiles;
    }
    
    public static bool IsValidFontFile(string filePath)
    {
        try
        {
            using var data = SKData.CreateFromFile(filePath);
            using var typeface = SKTypeface.FromData(data);
            return typeface != null;
        }
        catch
        {
            return false;
        }
    }
}

// Usage
var fontFiles = FontLoader.FindFontFiles("fonts/");
foreach (string fontFile in fontFiles)
{
    if (FontLoader.IsValidFontFile(fontFile))
    {
        Console.WriteLine($"Valid font: {fontFile}");
    }
}
```

## Loading Embedded Fonts

### Embedding Fonts as Resources

First, add fonts to your project as embedded resources:

```xml
<!-- In your .csproj file -->
<ItemGroup>
    <EmbeddedResource Include="Fonts\CustomFont.ttf" />
    <EmbeddedResource Include="Fonts\BarcodeFont.otf" />
</ItemGroup>
```

### Loading from Embedded Resources

```csharp
public static class EmbeddedFontLoader
{
    public static void LoadEmbeddedFont(BarcodeOptions options, string resourceName)
    {
        try
        {
            var assembly = Assembly.GetExecutingAssembly();
            using var stream = assembly.GetManifestResourceStream(resourceName);
            
            if (stream != null)
            {
                options.UseTypefaceFromStream(stream);
                Console.WriteLine($"Loaded embedded font: {resourceName}");
            }
            else
            {
                throw new FileNotFoundException($"Embedded resource not found: {resourceName}");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed to load embedded font: {ex.Message}");
            options.UseTypeface("Arial"); // Fallback
        }
    }
}

// Usage
using var barcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Code93;
    EmbeddedFontLoader.LoadEmbeddedFont(options, "MyApp.Fonts.CustomFont.ttf");
});
```

### Generic Embedded Font Helper

```csharp
public static class FontResourceHelper
{
    public static Stream GetFontStream(string fontFileName)
    {
        var assembly = Assembly.GetExecutingAssembly();
        var resourceNames = assembly.GetManifestResourceNames();
        
        // Find resource that ends with the font file name
        var resourceName = resourceNames.FirstOrDefault(r => r.EndsWith(fontFileName));
        
        if (resourceName != null)
        {
            return assembly.GetManifestResourceStream(resourceName);
        }
        
        throw new FileNotFoundException($"Font resource '{fontFileName}' not found");
    }
}

// Usage
using var barcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    
    try
    {
        using var fontStream = FontResourceHelper.GetFontStream("CustomFont.ttf");
        options.UseTypefaceFromStream(fontStream);
    }
    catch
    {
        options.UseTypeface("Arial"); // Fallback
    }
});
```

## Loading from Data and Streams

### Loading from Byte Array

```csharp
public void LoadFontFromByteArray(BarcodeOptions options, byte[] fontData)
{
    try
    {
        using var skData = SKData.CreateCopy(fontData);
        options.UseTypefaceFromData(skData);
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Failed to load font from byte array: {ex.Message}");
        options.UseTypeface("Arial");
    }
}

// Usage
byte[] fontBytes = File.ReadAllBytes("custom-font.ttf");
LoadFontFromByteArray(options, fontBytes);
```

### Loading from Memory Stream

```csharp
public void LoadFontFromMemoryStream(BarcodeOptions options, MemoryStream fontStream)
{
    try
    {
        fontStream.Position = 0; // Ensure we're at the beginning
        options.UseTypefaceFromStream(fontStream);
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Failed to load font from memory stream: {ex.Message}");
        options.UseTypeface("Arial");
    }
}
```

### Loading from Network

```csharp
public async Task<bool> LoadFontFromUrlAsync(BarcodeOptions options, string fontUrl)
{
    try
    {
        using var httpClient = new HttpClient();
        byte[] fontData = await httpClient.GetByteArrayAsync(fontUrl);
        
        using var skData = SKData.CreateCopy(fontData);
        options.UseTypefaceFromData(skData);
        
        Console.WriteLine($"Successfully loaded font from: {fontUrl}");
        return true;
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Failed to load font from URL {fontUrl}: {ex.Message}");
        options.UseTypeface("Arial");
        return false;
    }
}

// Usage
await LoadFontFromUrlAsync(options, "https://example.com/fonts/custom-font.ttf");
```

## Cross-Platform Font Management

### Platform-Specific Font Paths

```csharp
public static class PlatformFontPaths
{
    public static string[] GetSystemFontDirectories()
    {
        if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
        {
            return new[]
            {
                @"C:\Windows\Fonts",
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "Microsoft", "Windows", "Fonts")
            };
        }
        else if (RuntimeInformation.IsOSPlatform(OSPlatform.OSX))
        {
            return new[]
            {
                "/System/Library/Fonts",
                "/Library/Fonts",
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.UserProfile), "Library", "Fonts")
            };
        }
        else if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
        {
            return new[]
            {
                "/usr/share/fonts",
                "/usr/local/share/fonts",
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.UserProfile), ".fonts"),
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.UserProfile), ".local", "share", "fonts")
            };
        }
        
        return Array.Empty<string>();
    }
}
```

### Cross-Platform Font Loading

```csharp
public static class CrossPlatformFontLoader
{
    private static readonly Dictionary<string, string[]> FontAliases = new()
    {
        ["Arial"] = new[] { "Arial", "Liberation Sans", "Helvetica", "DejaVu Sans" },
        ["Times"] = new[] { "Times New Roman", "Liberation Serif", "Times", "DejaVu Serif" },
        ["Courier"] = new[] { "Courier New", "Liberation Mono", "Courier", "DejaVu Sans Mono" }
    };
    
    public static bool TryLoadFont(BarcodeOptions options, string preferredFont)
    {
        // Try exact font name first
        try
        {
            options.UseTypeface(preferredFont);
            return true;
        }
        catch
        {
            // Font not available
        }
        
        // Try aliases
        if (FontAliases.TryGetValue(preferredFont, out string[] aliases))
        {
            foreach (string alias in aliases)
            {
                try
                {
                    options.UseTypeface(alias);
                    Console.WriteLine($"Using font alias '{alias}' for '{preferredFont}'");
                    return true;
                }
                catch
                {
                    continue;
                }
            }
        }
        
        // Try loading from system font directories
        return TryLoadFromSystemDirectories(options, preferredFont);
    }
    
    private static bool TryLoadFromSystemDirectories(BarcodeOptions options, string fontName)
    {
        var fontDirectories = PlatformFontPaths.GetSystemFontDirectories();
        var possibleExtensions = new[] { ".ttf", ".otf", ".ttc" };
        
        foreach (string directory in fontDirectories)
        {
            if (!Directory.Exists(directory)) continue;
            
            foreach (string extension in possibleExtensions)
            {
                string fontPath = Path.Combine(directory, fontName + extension);
                if (File.Exists(fontPath))
                {
                    try
                    {
                        options.UseTypefaceFromFile(fontPath);
                        Console.WriteLine($"Loaded system font: {fontPath}");
                        return true;
                    }
                    catch
                    {
                        continue;
                    }
                }
            }
        }
        
        return false;
    }
}

// Usage
using var barcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Ean13;
    
    if (!CrossPlatformFontLoader.TryLoadFont(options, "Arial"))
    {
        Console.WriteLine("Could not load preferred font, using default");
        // BarcodeOptions.DefaultTypeface will be used
    }
});
```

## Font Caching and Management

### Font Cache Implementation

```csharp
public static class FontCache
{
    private static readonly ConcurrentDictionary<string, SKTypeface> _cache = new();
    
    public static SKTypeface GetOrLoadFont(string fontPath)
    {
        return _cache.GetOrAdd(fontPath, path =>
        {
            try
            {
                return SKTypeface.FromFile(path);
            }
            catch
            {
                return null;
            }
        });
    }
    
    public static void PreloadFonts(params string[] fontPaths)
    {
        Parallel.ForEach(fontPaths, fontPath =>
        {
            GetOrLoadFont(fontPath);
        });
    }
    
    public static void ClearCache()
    {
        foreach (var typeface in _cache.Values)
        {
            typeface?.Dispose();
        }
        _cache.Clear();
    }
}

// Usage
// Preload fonts at application startup
FontCache.PreloadFonts(
    "fonts/barcode-font.ttf",
    "fonts/label-font.ttf",
    "fonts/industrial-font.ttf"
);

// Use cached font
using var barcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Code93;
    var typeface = FontCache.GetOrLoadFont("fonts/barcode-font.ttf");
    if (typeface != null)
    {
        options.UseTypeface(typeface);
    }
});

// Clear cache on application shutdown
FontCache.ClearCache();
```

### Font Manager Service

```csharp
public interface IFontService
{
    bool LoadFont(BarcodeOptions options, string fontName, FontWeight weight = FontWeight.Normal);
    void RegisterFontDirectory(string directory);
    List<string> GetAvailableFonts();
}

public class FontService : IFontService
{
    private readonly List<string> _fontDirectories = new();
    private readonly Dictionary<string, string> _fontPaths = new();
    
    public FontService()
    {
        // Register system font directories
        foreach (string dir in PlatformFontPaths.GetSystemFontDirectories())
        {
            RegisterFontDirectory(dir);
        }
    }
    
    public void RegisterFontDirectory(string directory)
    {
        if (Directory.Exists(directory))
        {
            _fontDirectories.Add(directory);
            IndexFontsInDirectory(directory);
        }
    }
    
    private void IndexFontsInDirectory(string directory)
    {
        var fontFiles = Directory.GetFiles(directory, "*.ttf")
            .Concat(Directory.GetFiles(directory, "*.otf"))
            .Concat(Directory.GetFiles(directory, "*.ttc"));
            
        foreach (string fontFile in fontFiles)
        {
            string fontName = Path.GetFileNameWithoutExtension(fontFile);
            _fontPaths[fontName.ToLower()] = fontFile;
        }
    }
    
    public bool LoadFont(BarcodeOptions options, string fontName, FontWeight weight = FontWeight.Normal)
    {
        // Try exact match
        if (_fontPaths.TryGetValue(fontName.ToLower(), out string fontPath))
        {
            try
            {
                options.UseTypefaceFromFile(fontPath);
                return true;
            }
            catch
            {
                // Fall through to other attempts
            }
        }
        
        // Try system font
        try
        {
            var fontStyle = weight switch
            {
                FontWeight.Light => SKFontStyle.FromOldStyle(300, 5, false),
                FontWeight.Bold => SKFontStyle.Bold,
                FontWeight.ExtraBold => SKFontStyle.FromOldStyle(800, 5, false),
                _ => SKFontStyle.Normal
            };
            
            options.UseTypeface(fontName, fontStyle);
            return true;
        }
        catch
        {
            return false;
        }
    }
    
    public List<string> GetAvailableFonts()
    {
        return _fontPaths.Keys.ToList();
    }
}

public enum FontWeight
{
    Light,
    Normal,
    Bold,
    ExtraBold
}

// Usage
var fontService = new FontService();
fontService.RegisterFontDirectory("assets/fonts");

using var barcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Code93;
    
    if (!fontService.LoadFont(options, "CustomBarcodeFont", FontWeight.Bold))
    {
        // Fallback to default
        Console.WriteLine("Custom font not available, using default");
    }
});
```

## Advanced Font Scenarios

### Dynamic Font Selection

```csharp
public static class DynamicFontSelector
{
    public static void SelectOptimalFont(BarcodeOptions options, BarcodeTypes barcodeType)
    {
        var fontPreferences = barcodeType switch
        {
            BarcodeTypes.Code93 => new[] { "Consolas", "Courier New", "Monaco", "Liberation Mono" },
            BarcodeTypes.Ean13 or BarcodeTypes.Ean8 or BarcodeTypes.Upca => new[] { "Arial", "Helvetica", "Liberation Sans" },
            BarcodeTypes.Isbn13 => new[] { "Times New Roman", "Georgia", "Liberation Serif" },
            _ => new[] { "Arial", "sans-serif" }
        };
        
        foreach (string font in fontPreferences)
        {
            try
            {
                options.UseTypeface(font);
                Console.WriteLine($"Selected font: {font}");
                return;
            }
            catch
            {
                continue;
            }
        }
        
        Console.WriteLine("Using default font");
    }
}
```

### Font Fallback Chain

```csharp
public static class FontFallbackChain
{
    public static void ConfigureWithFallback(BarcodeOptions options, params string[] fontNames)
    {
        foreach (string fontName in fontNames)
        {
            if (TrySetFont(options, fontName))
            {
                Console.WriteLine($"Successfully set font: {fontName}");
                return;
            }
        }
        
        Console.WriteLine("All fonts failed, using system default");
    }
    
    private static bool TrySetFont(BarcodeOptions options, string fontName)
    {
        try
        {
            // Try as system font
            options.UseTypeface(fontName);
            return true;
        }
        catch
        {
            try
            {
                // Try as file path
                if (File.Exists(fontName))
                {
                    options.UseTypefaceFromFile(fontName);
                    return true;
                }
            }
            catch
            {
                // Continue to next fallback
            }
        }
        
        return false;
    }
}

// Usage
using var barcode = new Barcode(options =>
{
    options.Type = BarcodeTypes.Code93;
    
    FontFallbackChain.ConfigureWithFallback(options,
        "fonts/custom-barcode.ttf",     // Custom font file
        "Consolas",                     // Preferred system font
        "Courier New",                  // Fallback system font
        "monospace"                     // Generic fallback
    );
});
```

## Web Font Integration

### Loading Web Fonts

```csharp
public static class WebFontLoader
{
    private static readonly HttpClient _httpClient = new();
    
    public static async Task<bool> LoadWebFontAsync(BarcodeOptions options, string fontUrl)
    {
        try
        {
            byte[] fontData = await _httpClient.GetByteArrayAsync(fontUrl);
            using var skData = SKData.CreateCopy(fontData);
            options.UseTypefaceFromData(skData);
            return true;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed to load web font: {ex.Message}");
            return false;
        }
    }
    
    public static async Task<bool> LoadGoogleFontAsync(BarcodeOptions options, string fontFamily, FontWeight weight = FontWeight.Normal)
    {
        string weightParam = weight switch
        {
            FontWeight.Light => "300",
            FontWeight.Bold => "700",
            FontWeight.ExtraBold => "800",
            _ => "400"
        };
        
        string url = $"https://fonts.googleapis.com/css2?family={fontFamily}:wght@{weightParam}&display=swap";
        
        // This is a simplified example - in practice, you'd need to parse the CSS
        // and extract the actual font file URLs
        return await LoadWebFontAsync(options, url);
    }
}
```

## Best Practices

### Font Loading Guidelines

1. **Always have fallbacks**: Never rely on a single custom font
2. **Cache loaded fonts**: Avoid reloading the same font multiple times
3. **Validate font files**: Check if fonts are valid before using them
4. **Handle exceptions**: Font loading can fail for various reasons
5. **Consider file size**: Large font files impact startup time
6. **Test cross-platform**: Ensure fonts work on all target platforms

### Performance Tips

```csharp
// Good: Load font once, reuse for multiple barcodes
var fontOptions = new BarcodeOptions();
fontOptions.UseTypefaceFromFile("custom-font.ttf");

for (int i = 0; i < 1000; i++)
{
    using var barcode = new Barcode(options =>
    {
        options.Type = BarcodeTypes.Code93;
        options.UseTypeface(fontOptions.Typeface); // Reuse loaded font
    });
    // Generate barcode...
}

// Bad: Load font for each barcode
for (int i = 0; i < 1000; i++)
{
    using var barcode = new Barcode(options =>
    {
        options.Type = BarcodeTypes.Code93;
        options.UseTypefaceFromFile("custom-font.ttf"); // Loads font each time
    });
    // Generate barcode...
}
```

## Related Documentation

- [Font System](../api/fonts.md) - Font API reference
- [BarcodeOptions](../api/barcode-options.md) - Font configuration methods
- [Customization Examples](../examples/customization.md) - Font styling examples
- [Export Options](export-options.md) - Output considerations with custom fonts