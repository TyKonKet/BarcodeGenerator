# Export Formats and Options

This guide covers all the export options available in the BarcodeGenerator library, including file formats, quality settings, naming conventions, and stream handling.

## Supported Image Formats

The library supports all image formats provided by SkiaSharp through the `SKEncodedImageFormat` enumeration.

### PNG Format (Recommended)

PNG is the default and recommended format for barcodes due to its lossless compression and sharp edges.

```csharp
using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
barcode.Encode("123456789012");

// PNG with maximum quality (default)
barcode.Export("barcode.png", SKEncodedImageFormat.Png, 100);

// PNG is always lossless, quality parameter doesn't affect PNG
barcode.Export("barcode.png", SKEncodedImageFormat.Png, 50);  // Same quality as 100
```

**Advantages:**
- Lossless compression
- Perfect for sharp barcode lines
- Supports transparency
- Web-compatible

**Best for:** Web display, high-quality printing, when file size is not critical

### JPEG Format

JPEG uses lossy compression and is suitable when smaller file sizes are needed.

```csharp
// High quality JPEG
barcode.Export("barcode-high.jpg", SKEncodedImageFormat.Jpeg, 95);

// Medium quality JPEG
barcode.Export("barcode-medium.jpg", SKEncodedImageFormat.Jpeg, 80);

// Low quality JPEG (not recommended for barcodes)
barcode.Export("barcode-low.jpg", SKEncodedImageFormat.Jpeg, 60);
```

**Quality Guidelines:**
- 95-100: High quality, larger files
- 80-94: Good quality, balanced size
- 60-79: Acceptable quality, smaller files
- Below 60: Poor quality, may affect scanning

**Best for:** Email attachments, web thumbnails, when transparency is not needed

### WEBP Format

Modern format with excellent compression and quality.

```csharp
// High quality WEBP
barcode.Export("barcode.webp", SKEncodedImageFormat.Webp, 90);

// Compressed WEBP
barcode.Export("barcode-compressed.webp", SKEncodedImageFormat.Webp, 75);
```

**Best for:** Modern web applications, mobile apps, when both quality and size matter

### Other Supported Formats

```csharp
// BMP (uncompressed, large files)
barcode.Export("barcode.bmp", SKEncodedImageFormat.Bmp, 100);

// GIF (limited color palette)
barcode.Export("barcode.gif", SKEncodedImageFormat.Gif, 100);

// ICO (for icons)
barcode.Export("barcode.ico", SKEncodedImageFormat.Ico, 100);

// PDF (vector format)
barcode.Export("barcode.pdf", SKEncodedImageFormat.Pdf, 100);
```

## File Export Options

### Basic File Export

```csharp
using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
string result = barcode.Encode("123456789012");

// Simple filename
barcode.Export("output.png");

// With full path
barcode.Export("/path/to/barcodes/output.png");

// Relative path
barcode.Export("../images/barcode.png");
```

### Dynamic File Naming

The export method supports keyword substitution for dynamic file naming:

#### Available Keywords

- `{barcode}` - The encoded barcode string
- `{format}` - The image format (png, jpg, webp, etc.)
- `{quality}` - The quality setting (1-100)

```csharp
barcode.Encode("123456789012");

// Use all keywords
barcode.Export("output/{barcode}_q{quality}.{format}", 
    SKEncodedImageFormat.Png, 100);
// Result: output/1234567890128_q100.png

// Custom pattern
barcode.Export("products/product_{barcode}.{format}", 
    SKEncodedImageFormat.Jpeg, 90);
// Result: products/product_1234567890128.jpg

// Date-based naming
string timestamp = DateTime.Now.ToString("yyyyMMdd_HHmmss");
barcode.Export($"archive/{timestamp}_{{{barcode}}}.png");
// Result: archive/20240115_143022_1234567890128.png
```

### Directory Management

```csharp
// Ensure directory exists before export
string outputDir = "generated/barcodes";
Directory.CreateDirectory(outputDir);
barcode.Export($"{outputDir}/{{barcode}}.png");

// Create nested directories
barcode.Export("products/electronics/{barcode}.png");  // Creates directories if needed
```

### File Naming Best Practices

```csharp
public static class FileNamingHelper
{
    public static string SanitizeFilename(string filename)
    {
        var invalidChars = Path.GetInvalidFileNameChars();
        return string.Join("_", filename.Split(invalidChars, StringSplitOptions.RemoveEmptyEntries));
    }
    
    public static string GenerateBarcodeFilename(string barcode, string format = "png", int quality = 100)
    {
        string sanitized = SanitizeFilename(barcode);
        return $"barcode_{sanitized}_q{quality}.{format}";
    }
}

// Usage
string filename = FileNamingHelper.GenerateBarcodeFilename("ITEM-001", "png", 100);
barcode.Export($"output/{filename}");
```

## Stream Export

### Memory Stream Export

Useful for in-memory processing, web APIs, and database storage.

```csharp
using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
barcode.Encode("123456789012");

using var memoryStream = new MemoryStream();
barcode.Export(memoryStream, SKEncodedImageFormat.Png, 100);

// Get image as byte array
byte[] imageBytes = memoryStream.ToArray();

// Convert to base64 for web use
string base64Image = Convert.ToBase64String(imageBytes);
string dataUrl = $"data:image/png;base64,{base64Image}";
```

### File Stream Export

Direct file writing for large files or specific file handling requirements.

```csharp
using var fileStream = new FileStream("large-barcode.png", FileMode.Create, FileAccess.Write);
barcode.Export(fileStream, SKEncodedImageFormat.Png, 100);
// File is automatically written and closed
```

### Network Stream Export

For network transmission or cloud storage.

```csharp
// Example: Upload to cloud storage
public async Task UploadBarcodeToCloud(Barcode barcode, string fileName)
{
    using var uploadStream = new MemoryStream();
    barcode.Export(uploadStream, SKEncodedImageFormat.Png, 100);
    uploadStream.Position = 0;
    
    // Upload to cloud service (pseudo-code)
    await cloudService.UploadAsync(fileName, uploadStream);
}
```

## Web API Integration

### ASP.NET Core Examples

#### Return Barcode as File Response

```csharp
[HttpGet("barcode/{code}")]
public IActionResult GetBarcode(string code, string format = "png", int quality = 100)
{
    using var barcode = new Barcode(options =>
    {
        options.Type = BarcodeTypes.Ean13;
        options.Height = 50;
        options.Scaling = 2;
    });
    
    try
    {
        string validatedCode = barcode.Encode(code);
        
        var stream = new MemoryStream();
        var imageFormat = ParseImageFormat(format);
        barcode.Export(stream, imageFormat, quality);
        stream.Position = 0;
        
        string mimeType = GetMimeType(format);
        string fileName = $"{validatedCode}.{format}";
        
        return File(stream, mimeType, fileName);
    }
    catch (ArgumentException)
    {
        return BadRequest("Invalid barcode format");
    }
}

private SKEncodedImageFormat ParseImageFormat(string format)
{
    return format.ToLower() switch
    {
        "png" => SKEncodedImageFormat.Png,
        "jpg" or "jpeg" => SKEncodedImageFormat.Jpeg,
        "webp" => SKEncodedImageFormat.Webp,
        _ => SKEncodedImageFormat.Png
    };
}

private string GetMimeType(string format)
{
    return format.ToLower() switch
    {
        "png" => "image/png",
        "jpg" or "jpeg" => "image/jpeg",
        "webp" => "image/webp",
        _ => "image/png"
    };
}
```

#### Return Base64 Encoded Image

```csharp
[HttpGet("barcode/{code}/base64")]
public IActionResult GetBarcodeBase64(string code)
{
    using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
    
    try
    {
        string validatedCode = barcode.Encode(code);
        
        using var stream = new MemoryStream();
        barcode.Export(stream, SKEncodedImageFormat.Png, 100);
        
        string base64 = Convert.ToBase64String(stream.ToArray());
        string dataUrl = $"data:image/png;base64,{base64}";
        
        return Ok(new { barcode = validatedCode, image = dataUrl });
    }
    catch (ArgumentException ex)
    {
        return BadRequest(new { error = ex.Message });
    }
}
```

#### Bulk Export Endpoint

```csharp
[HttpPost("barcodes/export")]
public async Task<IActionResult> ExportBarcodes([FromBody] BulkExportRequest request)
{
    var zipStream = new MemoryStream();
    using var archive = new ZipArchive(zipStream, ZipArchiveMode.Create, true);
    
    foreach (var item in request.Barcodes)
    {
        using var barcode = new Barcode(options =>
        {
            options.Type = item.Type;
            options.Height = request.Height;
            options.Scaling = request.Scaling;
        });
        
        try
        {
            string validatedCode = barcode.Encode(item.Code);
            
            var entry = archive.CreateEntry($"{validatedCode}.png");
            using var entryStream = entry.Open();
            barcode.Export(entryStream, SKEncodedImageFormat.Png, 100);
        }
        catch (ArgumentException)
        {
            // Skip invalid barcodes or handle as needed
            continue;
        }
    }
    
    zipStream.Position = 0;
    return File(zipStream, "application/zip", "barcodes.zip");
}

public class BulkExportRequest
{
    public List<BarcodeItem> Barcodes { get; set; }
    public int Height { get; set; } = 50;
    public int Scaling { get; set; } = 2;
}

public class BarcodeItem
{
    public string Code { get; set; }
    public BarcodeTypes Type { get; set; }
}
```

## Quality and Optimization

### Quality Settings by Format

```csharp
public static class QualitySettings
{
    public static readonly Dictionary<SKEncodedImageFormat, int[]> RecommendedQualities = new()
    {
        [SKEncodedImageFormat.Png] = new[] { 100 },           // PNG is always lossless
        [SKEncodedImageFormat.Jpeg] = new[] { 95, 85, 70 },   // High, Medium, Low
        [SKEncodedImageFormat.Webp] = new[] { 90, 80, 70 },   // High, Medium, Low
    };
    
    public static int GetOptimalQuality(SKEncodedImageFormat format, string useCase)
    {
        return useCase.ToLower() switch
        {
            "print" => format == SKEncodedImageFormat.Jpeg ? 95 : 100,
            "web" => format == SKEncodedImageFormat.Jpeg ? 85 : 90,
            "thumbnail" => format == SKEncodedImageFormat.Jpeg ? 70 : 80,
            _ => 100
        };
    }
}
```

### File Size Optimization

```csharp
public void ExportOptimized(Barcode barcode, string basePath, long maxFileSizeKB = 100)
{
    var formats = new[]
    {
        (SKEncodedImageFormat.Webp, 90),
        (SKEncodedImageFormat.Jpeg, 85),
        (SKEncodedImageFormat.Png, 100)
    };
    
    foreach (var (format, quality) in formats)
    {
        using var stream = new MemoryStream();
        barcode.Export(stream, format, quality);
        
        if (stream.Length <= maxFileSizeKB * 1024)
        {
            string extension = format.ToString().ToLower();
            File.WriteAllBytes($"{basePath}.{extension}", stream.ToArray());
            Console.WriteLine($"Exported as {extension}: {stream.Length} bytes");
            break;
        }
    }
}
```

## Batch Export Operations

### Export Multiple Formats

```csharp
public void ExportMultipleFormats(Barcode barcode, string basePath)
{
    var exports = new[]
    {
        ("png", SKEncodedImageFormat.Png, 100),
        ("jpg", SKEncodedImageFormat.Jpeg, 90),
        ("webp", SKEncodedImageFormat.Webp, 85)
    };
    
    foreach (var (extension, format, quality) in exports)
    {
        barcode.Export($"{basePath}.{extension}", format, quality);
    }
}
```

### Batch Processing with Progress

```csharp
public async Task<List<ExportResult>> BatchExportAsync(
    List<string> barcodeCodes, 
    BarcodeTypes type,
    string outputDirectory,
    IProgress<int> progress = null)
{
    var results = new List<ExportResult>();
    
    for (int i = 0; i < barcodeCodes.Count; i++)
    {
        try
        {
            using var barcode = new Barcode(options => options.Type = type);
            string validatedCode = barcode.Encode(barcodeCodes[i]);
            
            string filePath = Path.Combine(outputDirectory, $"{validatedCode}.png");
            barcode.Export(filePath);
            
            results.Add(new ExportResult 
            { 
                OriginalCode = barcodeCodes[i],
                ValidatedCode = validatedCode,
                FilePath = filePath,
                Success = true 
            });
        }
        catch (Exception ex)
        {
            results.Add(new ExportResult 
            { 
                OriginalCode = barcodeCodes[i],
                Success = false,
                Error = ex.Message 
            });
        }
        
        progress?.Report((i + 1) * 100 / barcodeCodes.Count);
        await Task.Delay(1); // Allow UI updates
    }
    
    return results;
}

public class ExportResult
{
    public string OriginalCode { get; set; }
    public string ValidatedCode { get; set; }
    public string FilePath { get; set; }
    public bool Success { get; set; }
    public string Error { get; set; }
}
```

## Error Handling and Validation

### Export Error Handling

```csharp
public bool TryExportBarcode(Barcode barcode, string filePath, out string error)
{
    error = null;
    
    try
    {
        // Validate directory exists
        string directory = Path.GetDirectoryName(filePath);
        if (!string.IsNullOrEmpty(directory) && !Directory.Exists(directory))
        {
            Directory.CreateDirectory(directory);
        }
        
        // Check if file is writable
        string tempFile = filePath + ".tmp";
        File.WriteAllText(tempFile, "test");
        File.Delete(tempFile);
        
        // Export barcode
        barcode.Export(filePath);
        return true;
    }
    catch (UnauthorizedAccessException)
    {
        error = "Access denied to output path";
        return false;
    }
    catch (DirectoryNotFoundException)
    {
        error = "Output directory not found";
        return false;
    }
    catch (PathTooLongException)
    {
        error = "File path is too long";
        return false;
    }
    catch (IOException ex)
    {
        error = $"IO error: {ex.Message}";
        return false;
    }
    catch (Exception ex)
    {
        error = $"Unexpected error: {ex.Message}";
        return false;
    }
}
```

### Stream Validation

```csharp
public bool TryExportToStream(Barcode barcode, Stream stream, SKEncodedImageFormat format, int quality, out string error)
{
    error = null;
    
    try
    {
        if (!stream.CanWrite)
        {
            error = "Stream is not writable";
            return false;
        }
        
        barcode.Export(stream, format, quality);
        return true;
    }
    catch (Exception ex)
    {
        error = ex.Message;
        return false;
    }
}
```

## Performance Considerations

### Memory Management

```csharp
// Efficient memory usage for large batches
public void ExportLargeBatch(List<string> codes, BarcodeTypes type)
{
    foreach (string code in codes)
    {
        using var barcode = new Barcode(options => options.Type = type);
        string result = barcode.Encode(code);
        barcode.Export($"output/{result}.png");
        
        // Barcode is automatically disposed here, freeing memory
    }
}
```

### Parallel Processing

```csharp
public async Task ExportInParallel(List<string> codes, BarcodeTypes type)
{
    var tasks = codes.Select(async code =>
    {
        using var barcode = new Barcode(options => options.Type = type);
        string result = barcode.Encode(code);
        barcode.Export($"output/{result}.png");
        return result;
    });
    
    var results = await Task.WhenAll(tasks);
    Console.WriteLine($"Exported {results.Length} barcodes");
}
```

## Related Documentation

- [Basic Usage Examples](basic-usage.md) - Fundamental export operations
- [Customization Examples](customization.md) - Styling and appearance options
- [Barcode Class](../api/barcode.md) - Export method reference
- [Advanced Export Options](../advanced/export-options.md) - Complex export scenarios