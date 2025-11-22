using System.Runtime.InteropServices;
using System.Text.Json;
using System.Text.Json.Serialization;

string dotnetVersion = GetRuntimeVersion();
string timestamp = DateTime.UtcNow.ToString("yyyy-MM-dd'T'HH:mm:ss'Z'");

const string filePath = "dotnet-versions.json";

DotNetVersions data = File.Exists(filePath) ? JsonSerializer.Deserialize(File.ReadAllText(filePath), AppJsonContext.Default.DotNetVersions) ?? new([]) : new([]);

data.runs.Add(new Run(timestamp, dotnetVersion));

string updatedJson = JsonSerializer.Serialize(data, AppJsonContext.Default.DotNetVersions);
File.WriteAllText(filePath, updatedJson);

Console.WriteLine($"Updated {filePath} with .NET version {dotnetVersion} at {timestamp}.");

static string GetRuntimeVersion()
{
    string framework = RuntimeInformation.FrameworkDescription?.Trim() ?? string.Empty;
    const string prefix = ".NET ";

    if (framework.StartsWith(prefix, StringComparison.OrdinalIgnoreCase))
    {
        framework = framework[prefix.Length..];
    }

    // Fallback to Environment.Version if description is missing
    if (string.IsNullOrWhiteSpace(framework))
    {
        framework = Environment.Version.ToString();
    }

    return framework;
}

// Define the JSON structure
[JsonSerializable(typeof(DotNetVersions))]
[JsonSourceGenerationOptions(WriteIndented = true)]
partial class AppJsonContext : JsonSerializerContext { }

record DotNetVersions(List<Run> runs);

record Run(string Timestamp, string DotNetVersion);