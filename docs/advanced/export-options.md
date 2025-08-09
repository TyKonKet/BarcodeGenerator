# Export Options and Advanced Export Scenarios

This guide covers advanced export scenarios, batch processing, optimization techniques, and specialized export configurations for the BarcodeGenerator library.

## Advanced File Naming Strategies

### Dynamic Path Generation

```csharp
public static class AdvancedFileNaming
{
    public static string GenerateOrganizedPath(string barcode, BarcodeTypes type, DateTime timestamp)
    {
        string year = timestamp.Year.ToString();
        string month = timestamp.Month.ToString("D2");
        string day = timestamp.Day.ToString("D2");
        string typeName = type.ToString().ToLower();
        
        return $"barcodes/{year}/{month}/{day}/{typeName}/{barcode}.png";
    }
    
    public static string GenerateCategorizedPath(string barcode, string category, string subcategory = null)
    {
        string basePath = $"output/{category}";
        
        if (!string.IsNullOrEmpty(subcategory))
        {
            basePath += $"/{subcategory}";
        }
        
        return $"{basePath}/{barcode}.png";
    }
    
    public static string GenerateVersionedPath(string barcode, int version = 1)
    {
        return version == 1 
            ? $"barcodes/{barcode}.png"
            : $"barcodes/{barcode}_v{version}.png";
    }
}

// Usage examples
using var barcode = new Barcode(options => options.Type = BarcodeTypes.Ean13);
string result = barcode.Encode("123456789012");

// Organized by date
string datePath = AdvancedFileNaming.GenerateOrganizedPath(result, BarcodeTypes.Ean13, DateTime.Now);
// Result: barcodes/2024/01/15/ean13/1234567890128.png

// Categorized by business logic
string categoryPath = AdvancedFileNaming.GenerateCategorizedPath(result, "products", "electronics");
// Result: output/products/electronics/1234567890128.png

// Versioned exports
string versionPath = AdvancedFileNaming.GenerateVersionedPath(result, 2);
// Result: barcodes/1234567890128_v2.png
```

### Template-Based Naming

```csharp
public static class FileNamingTemplates
{
    private static readonly Dictionary<string, Func<string, BarcodeTypes, DateTime, string>> Templates = new()
    {
        ["simple"] = (barcode, type, date) => $"{barcode}.png",
        ["typed"] = (barcode, type, date) => $"{type}_{barcode}.png",
        ["dated"] = (barcode, type, date) => $"{date:yyyyMMdd}_{barcode}.png",
        ["organized"] = (barcode, type, date) => $"{date:yyyy/MM/dd}/{type}/{barcode}.png",
        ["timestamped"] = (barcode, type, date) => $"{barcode}_{date:yyyyMMdd_HHmmss}.png",
        ["business"] = (barcode, type, date) => $"generated/{type}/{date:yyyy}/{barcode}.png"
    };
    
    public static string ApplyTemplate(string templateName, string barcode, BarcodeTypes type, DateTime? date = null)
    {
        date ??= DateTime.Now;
        
        if (Templates.TryGetValue(templateName, out var template))
        {
            return template(barcode, type, date.Value);
        }
        
        return Templates["simple"](barcode, type, date.Value);
    }
}

// Usage
string path1 = FileNamingTemplates.ApplyTemplate("organized", result, BarcodeTypes.Ean13);
string path2 = FileNamingTemplates.ApplyTemplate("timestamped", result, BarcodeTypes.Ean13);
```

## Batch Export Operations

### High-Performance Batch Processing

```csharp
public class BatchExporter
{
    private readonly BarcodeOptions _baseOptions;
    
    public BatchExporter(Action<BarcodeOptions> configureOptions = null)
    {
        _baseOptions = new BarcodeOptions();
        configureOptions?.Invoke(_baseOptions);
    }
    
    public async Task<BatchExportResult> ExportBatchAsync(
        IEnumerable<BatchExportItem> items,
        string outputDirectory,
        ExportSettings settings = null,
        IProgress<BatchProgress> progress = null,
        CancellationToken cancellationToken = default)
    {
        settings ??= new ExportSettings();
        var result = new BatchExportResult();
        var itemList = items.ToList();
        
        // Ensure output directory exists
        Directory.CreateDirectory(outputDirectory);
        
        var semaphore = new SemaphoreSlim(settings.MaxConcurrency);
        var tasks = itemList.Select(async (item, index) =>
        {
            await semaphore.WaitAsync(cancellationToken);
            try
            {
                return await ProcessItemAsync(item, outputDirectory, settings);
            }
            finally
            {
                semaphore.Release();
                progress?.Report(new BatchProgress
                {
                    Completed = Interlocked.Increment(ref result.ProcessedCount),
                    Total = itemList.Count,
                    CurrentItem = item.Code
                });
            }
        });
        
        var results = await Task.WhenAll(tasks);
        
        result.SuccessfulExports = results.Where(r => r.Success).ToList();
        result.FailedExports = results.Where(r => !r.Success).ToList();
        result.TotalProcessed = itemList.Count;
        
        return result;
    }
    
    private async Task<ExportItemResult> ProcessItemAsync(
        BatchExportItem item, 
        string outputDirectory, 
        ExportSettings settings)
    {
        try
        {
            using var barcode = new Barcode(options =>
            {
                // Copy base options
                options.Type = item.Type ?? _baseOptions.Type;
                options.Height = item.Height ?? _baseOptions.Height;
                options.Scaling = item.Scaling ?? _baseOptions.Scaling;
                options.Margins = item.Margins ?? _baseOptions.Margins;
                options.BackgroundColor = item.BackgroundColor ?? _baseOptions.BackgroundColor;
                options.ForegroundColor = item.ForegroundColor ?? _baseOptions.ForegroundColor;
                options.RenderText = item.RenderText ?? _baseOptions.RenderText;
            });
            
            string validatedCode = barcode.Encode(item.Code);
            
            string fileName = string.IsNullOrEmpty(item.FileName)
                ? $"{validatedCode}.{settings.Format.ToString().ToLower()}"
                : item.FileName;
                
            string filePath = Path.Combine(outputDirectory, fileName);
            
            // Ensure subdirectory exists
            string directory = Path.GetDirectoryName(filePath);
            if (!string.IsNullOrEmpty(directory) && directory != outputDirectory)
            {
                Directory.CreateDirectory(directory);
            }
            
            barcode.Export(filePath, settings.Format, settings.Quality);
            
            // Simulate async I/O if needed
            if (settings.SimulateDelay)
            {
                await Task.Delay(Random.Shared.Next(10, 50));
            }
            
            return new ExportItemResult
            {
                Success = true,
                OriginalCode = item.Code,
                ValidatedCode = validatedCode,
                FilePath = filePath
            };
        }
        catch (Exception ex)
        {
            return new ExportItemResult
            {
                Success = false,
                OriginalCode = item.Code,
                Error = ex.Message
            };
        }
    }
}

public class BatchExportItem
{
    public string Code { get; set; }
    public BarcodeTypes? Type { get; set; }
    public string FileName { get; set; }
    public int? Height { get; set; }
    public int? Scaling { get; set; }
    public int? Margins { get; set; }
    public SKColor? BackgroundColor { get; set; }
    public SKColor? ForegroundColor { get; set; }
    public bool? RenderText { get; set; }
}

public class ExportSettings
{
    public SKEncodedImageFormat Format { get; set; } = SKEncodedImageFormat.Png;
    public int Quality { get; set; } = 100;
    public int MaxConcurrency { get; set; } = Environment.ProcessorCount;
    public bool SimulateDelay { get; set; } = false;
}

public class BatchExportResult
{
    public List<ExportItemResult> SuccessfulExports { get; set; } = new();
    public List<ExportItemResult> FailedExports { get; set; } = new();
    public int TotalProcessed { get; set; }
    public int ProcessedCount;
    
    public double SuccessRate => TotalProcessed > 0 ? (double)SuccessfulExports.Count / TotalProcessed : 0;
}

public class ExportItemResult
{
    public bool Success { get; set; }
    public string OriginalCode { get; set; }
    public string ValidatedCode { get; set; }
    public string FilePath { get; set; }
    public string Error { get; set; }
}

public class BatchProgress
{
    public int Completed { get; set; }
    public int Total { get; set; }
    public string CurrentItem { get; set; }
    public double PercentageComplete => Total > 0 ? (double)Completed / Total * 100 : 0;
}
```

### Usage Example

```csharp
public async Task DemonstrateBatchExport()
{
    var exporter = new BatchExporter(options =>
    {
        options.Height = 50;
        options.Scaling = 2;
        options.Margins = 5;
    });
    
    var items = new List<BatchExportItem>
    {
        new() { Code = "123456789012", Type = BarcodeTypes.Ean13, FileName = "products/product1.png" },
        new() { Code = "12345678901", Type = BarcodeTypes.Upca, FileName = "products/product2.png" },
        new() { Code = "978012345678", Type = BarcodeTypes.Isbn13, FileName = "books/book1.png" },
        new() { Code = "ITEM-001", Type = BarcodeTypes.Code93, FileName = "inventory/item1.png" }
    };
    
    var progress = new Progress<BatchProgress>(p =>
    {
        Console.WriteLine($"Progress: {p.PercentageComplete:F1}% ({p.Completed}/{p.Total}) - {p.CurrentItem}");
    });
    
    var settings = new ExportSettings
    {
        Format = SKEncodedImageFormat.Png,
        Quality = 100,
        MaxConcurrency = 4
    };
    
    var result = await exporter.ExportBatchAsync(items, "output", settings, progress);
    
    Console.WriteLine($"Batch complete: {result.SuccessfulExports.Count} successful, {result.FailedExports.Count} failed");
    Console.WriteLine($"Success rate: {result.SuccessRate:P}");
}
```

## Archive and Compression

### ZIP Archive Export

```csharp
public static class ArchiveExporter
{
    public static void ExportToZip(
        IEnumerable<(string code, BarcodeTypes type)> barcodes,
        string zipPath,
        Action<BarcodeOptions> configureOptions = null)
    {
        using var fileStream = new FileStream(zipPath, FileMode.Create);
        using var archive = new ZipArchive(fileStream, ZipArchiveMode.Create);
        
        foreach (var (code, type) in barcodes)
        {
            using var barcode = new Barcode(options =>
            {
                options.Type = type;
                configureOptions?.Invoke(options);
            });
            
            try
            {
                string validatedCode = barcode.Encode(code);
                string entryName = $"{type}/{validatedCode}.png";
                
                var entry = archive.CreateEntry(entryName);
                using var entryStream = entry.Open();
                barcode.Export(entryStream, SKEncodedImageFormat.Png, 100);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Failed to add {code} to archive: {ex.Message}");
            }
        }
    }
    
    public static async Task ExportToZipAsync(
        IEnumerable<BatchExportItem> items,
        string zipPath,
        IProgress<int> progress = null)
    {
        var itemList = items.ToList();
        
        using var fileStream = new FileStream(zipPath, FileMode.Create);
        using var archive = new ZipArchive(fileStream, ZipArchiveMode.Create);
        
        int processed = 0;
        foreach (var item in itemList)
        {
            using var barcode = new Barcode(options =>
            {
                options.Type = item.Type ?? BarcodeTypes.Ean13;
                if (item.Height.HasValue) options.Height = item.Height.Value;
                if (item.Scaling.HasValue) options.Scaling = item.Scaling.Value;
            });
            
            try
            {
                string validatedCode = barcode.Encode(item.Code);
                string entryName = item.FileName ?? $"{validatedCode}.png";
                
                var entry = archive.CreateEntry(entryName);
                using var entryStream = entry.Open();
                barcode.Export(entryStream, SKEncodedImageFormat.Png, 100);
                
                processed++;
                progress?.Report(processed * 100 / itemList.Count);
                
                // Allow other tasks to run
                await Task.Yield();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Failed to add {item.Code}: {ex.Message}");
            }
        }
    }
}
```

## Database Integration

### Export to Database with Metadata

```csharp
public class DatabaseExporter
{
    private readonly string _connectionString;
    
    public DatabaseExporter(string connectionString)
    {
        _connectionString = connectionString;
    }
    
    public async Task<int> ExportToDatabase(
        IEnumerable<BatchExportItem> items,
        string tableName = "BarcodeImages")
    {
        int insertedCount = 0;
        
        using var connection = new SqlConnection(_connectionString);
        await connection.OpenAsync();
        
        foreach (var item in items)
        {
            using var barcode = new Barcode(options =>
            {
                options.Type = item.Type ?? BarcodeTypes.Ean13;
                if (item.Height.HasValue) options.Height = item.Height.Value;
                if (item.Scaling.HasValue) options.Scaling = item.Scaling.Value;
            });
            
            try
            {
                string validatedCode = barcode.Encode(item.Code);
                
                using var memoryStream = new MemoryStream();
                barcode.Export(memoryStream, SKEncodedImageFormat.Png, 100);
                byte[] imageData = memoryStream.ToArray();
                
                var command = new SqlCommand($@"
                    INSERT INTO {tableName} 
                    (OriginalCode, ValidatedCode, BarcodeType, ImageData, ImageSize, CreatedAt)
                    VALUES 
                    (@originalCode, @validatedCode, @barcodeType, @imageData, @imageSize, @createdAt)",
                    connection);
                
                command.Parameters.AddWithValue("@originalCode", item.Code);
                command.Parameters.AddWithValue("@validatedCode", validatedCode);
                command.Parameters.AddWithValue("@barcodeType", item.Type?.ToString() ?? "Ean13");
                command.Parameters.AddWithValue("@imageData", imageData);
                command.Parameters.AddWithValue("@imageSize", imageData.Length);
                command.Parameters.AddWithValue("@createdAt", DateTime.UtcNow);
                
                await command.ExecuteNonQueryAsync();
                insertedCount++;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Failed to insert {item.Code}: {ex.Message}");
            }
        }
        
        return insertedCount;
    }
}
```

## Cloud Storage Integration

### Azure Blob Storage Export

```csharp
public class AzureBlobExporter
{
    private readonly BlobServiceClient _blobServiceClient;
    private readonly string _containerName;
    
    public AzureBlobExporter(string connectionString, string containerName)
    {
        _blobServiceClient = new BlobServiceClient(connectionString);
        _containerName = containerName;
    }
    
    public async Task<List<string>> ExportToBlob(
        IEnumerable<BatchExportItem> items,
        string pathPrefix = "barcodes")
    {
        var containerClient = _blobServiceClient.GetBlobContainerClient(_containerName);
        await containerClient.CreateIfNotExistsAsync(PublicAccessType.None);
        
        var uploadedBlobs = new List<string>();
        
        foreach (var item in items)
        {
            using var barcode = new Barcode(options =>
            {
                options.Type = item.Type ?? BarcodeTypes.Ean13;
                if (item.Height.HasValue) options.Height = item.Height.Value;
                if (item.Scaling.HasValue) options.Scaling = item.Scaling.Value;
            });
            
            try
            {
                string validatedCode = barcode.Encode(item.Code);
                string blobName = $"{pathPrefix}/{item.Type}/{validatedCode}.png";
                
                using var memoryStream = new MemoryStream();
                barcode.Export(memoryStream, SKEncodedImageFormat.Png, 100);
                memoryStream.Position = 0;
                
                var blobClient = containerClient.GetBlobClient(blobName);
                await blobClient.UploadAsync(memoryStream, overwrite: true);
                
                uploadedBlobs.Add(blobName);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Failed to upload {item.Code}: {ex.Message}");
            }
        }
        
        return uploadedBlobs;
    }
}
```

## Performance Optimization

### Memory-Efficient Large Batch Processing

```csharp
public static class OptimizedBatchProcessor
{
    public static async Task ProcessLargeBatch(
        IEnumerable<string> codes,
        BarcodeTypes type,
        string outputDirectory,
        int batchSize = 100)
    {
        var codesList = codes.ToList();
        var totalBatches = (int)Math.Ceiling((double)codesList.Count / batchSize);
        
        for (int batchIndex = 0; batchIndex < totalBatches; batchIndex++)
        {
            var batch = codesList
                .Skip(batchIndex * batchSize)
                .Take(batchSize)
                .ToList();
            
            await ProcessBatch(batch, type, outputDirectory, batchIndex);
            
            // Force garbage collection between batches
            GC.Collect();
            GC.WaitForPendingFinalizers();
            
            Console.WriteLine($"Completed batch {batchIndex + 1}/{totalBatches}");
        }
    }
    
    private static async Task ProcessBatch(
        List<string> codes,
        BarcodeTypes type,
        string outputDirectory,
        int batchIndex)
    {
        var tasks = codes.Select(async code =>
        {
            using var barcode = new Barcode(options => options.Type = type);
            
            try
            {
                string validatedCode = barcode.Encode(code);
                string filePath = Path.Combine(outputDirectory, $"batch_{batchIndex}", $"{validatedCode}.png");
                
                Directory.CreateDirectory(Path.GetDirectoryName(filePath));
                barcode.Export(filePath);
                
                return validatedCode;
            }
            catch
            {
                return null;
            }
        });
        
        await Task.WhenAll(tasks);
    }
}
```

### Parallel Processing with Resource Management

```csharp
public class ResourceManagedExporter
{
    private readonly SemaphoreSlim _semaphore;
    private readonly int _maxConcurrency;
    
    public ResourceManagedExporter(int maxConcurrency = Environment.ProcessorCount)
    {
        _maxConcurrency = maxConcurrency;
        _semaphore = new SemaphoreSlim(maxConcurrency);
    }
    
    public async Task<ExportStatistics> ExportWithResourceManagement(
        IEnumerable<BatchExportItem> items,
        string outputDirectory)
    {
        var statistics = new ExportStatistics();
        var startTime = DateTime.UtcNow;
        
        var tasks = items.Select(async item =>
        {
            await _semaphore.WaitAsync();
            try
            {
                return await ExportSingleItem(item, outputDirectory, statistics);
            }
            finally
            {
                _semaphore.Release();
            }
        });
        
        await Task.WhenAll(tasks);
        
        statistics.TotalTime = DateTime.UtcNow - startTime;
        statistics.ItemsPerSecond = statistics.TotalItems / statistics.TotalTime.TotalSeconds;
        
        return statistics;
    }
    
    private async Task<bool> ExportSingleItem(
        BatchExportItem item,
        string outputDirectory,
        ExportStatistics statistics)
    {
        var itemStartTime = DateTime.UtcNow;
        
        try
        {
            using var barcode = new Barcode(options =>
            {
                options.Type = item.Type ?? BarcodeTypes.Ean13;
                if (item.Height.HasValue) options.Height = item.Height.Value;
                if (item.Scaling.HasValue) options.Scaling = item.Scaling.Value;
            });
            
            string validatedCode = barcode.Encode(item.Code);
            string fileName = item.FileName ?? $"{validatedCode}.png";
            string filePath = Path.Combine(outputDirectory, fileName);
            
            Directory.CreateDirectory(Path.GetDirectoryName(filePath) ?? outputDirectory);
            barcode.Export(filePath);
            
            var processingTime = DateTime.UtcNow - itemStartTime;
            
            lock (statistics)
            {
                statistics.SuccessfulItems++;
                statistics.TotalItems++;
                statistics.TotalProcessingTime += processingTime;
                
                if (processingTime > statistics.MaxProcessingTime)
                    statistics.MaxProcessingTime = processingTime;
                    
                if (statistics.MinProcessingTime == TimeSpan.Zero || processingTime < statistics.MinProcessingTime)
                    statistics.MinProcessingTime = processingTime;
            }
            
            return true;
        }
        catch (Exception ex)
        {
            lock (statistics)
            {
                statistics.FailedItems++;
                statistics.TotalItems++;
                statistics.Errors.Add(ex.Message);
            }
            
            return false;
        }
    }
    
    public void Dispose()
    {
        _semaphore?.Dispose();
    }
}

public class ExportStatistics
{
    public int TotalItems { get; set; }
    public int SuccessfulItems { get; set; }
    public int FailedItems { get; set; }
    public TimeSpan TotalTime { get; set; }
    public TimeSpan TotalProcessingTime { get; set; }
    public TimeSpan MaxProcessingTime { get; set; }
    public TimeSpan MinProcessingTime { get; set; }
    public double ItemsPerSecond { get; set; }
    public List<string> Errors { get; set; } = new();
    
    public TimeSpan AverageProcessingTime => 
        TotalItems > 0 ? TimeSpan.FromTicks(TotalProcessingTime.Ticks / TotalItems) : TimeSpan.Zero;
        
    public double SuccessRate => 
        TotalItems > 0 ? (double)SuccessfulItems / TotalItems : 0;
}
```

## Export Monitoring and Logging

### Detailed Export Logging

```csharp
public class LoggingExporter
{
    private readonly ILogger<LoggingExporter> _logger;
    
    public LoggingExporter(ILogger<LoggingExporter> logger)
    {
        _logger = logger;
    }
    
    public async Task<ExportResult> ExportWithLogging(
        BatchExportItem item,
        string outputDirectory)
    {
        var stopwatch = Stopwatch.StartNew();
        var result = new ExportResult { OriginalCode = item.Code };
        
        _logger.LogInformation("Starting export for code: {Code}, Type: {Type}", 
            item.Code, item.Type);
        
        try
        {
            using var barcode = new Barcode(options =>
            {
                options.Type = item.Type ?? BarcodeTypes.Ean13;
                _logger.LogDebug("Configured barcode with type: {Type}", options.Type);
            });
            
            string validatedCode = barcode.Encode(item.Code);
            _logger.LogDebug("Encoded barcode: {Original} -> {Validated}", 
                item.Code, validatedCode);
            
            string filePath = Path.Combine(outputDirectory, $"{validatedCode}.png");
            barcode.Export(filePath);
            
            var fileInfo = new FileInfo(filePath);
            
            result.Success = true;
            result.ValidatedCode = validatedCode;
            result.FilePath = filePath;
            result.FileSizeBytes = fileInfo.Length;
            result.ProcessingTimeMs = stopwatch.ElapsedMilliseconds;
            
            _logger.LogInformation("Successfully exported {Code} to {FilePath} ({FileSize} bytes) in {ProcessingTime}ms",
                validatedCode, filePath, fileInfo.Length, stopwatch.ElapsedMilliseconds);
        }
        catch (Exception ex)
        {
            result.Success = false;
            result.Error = ex.Message;
            result.ProcessingTimeMs = stopwatch.ElapsedMilliseconds;
            
            _logger.LogError(ex, "Failed to export code: {Code} after {ProcessingTime}ms", 
                item.Code, stopwatch.ElapsedMilliseconds);
        }
        
        return result;
    }
}

public class ExportResult
{
    public string OriginalCode { get; set; }
    public string ValidatedCode { get; set; }
    public string FilePath { get; set; }
    public bool Success { get; set; }
    public string Error { get; set; }
    public long ProcessingTimeMs { get; set; }
    public long FileSizeBytes { get; set; }
}
```

## Related Documentation

- [Export Formats](../examples/export-formats.md) - Basic export operations and formats
- [Basic Usage](../examples/basic-usage.md) - Simple export examples
- [Customization](../examples/customization.md) - Styling and appearance options
- [Custom Fonts](custom-fonts.md) - Font loading and management