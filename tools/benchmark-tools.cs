#:package System.CommandLine@2.0.0

using System.Diagnostics;
using System.Text;

var projectFolder = args.Length > 0 ? args[0] : "../";
var classFilter = args.Length > 1 ? args[1] : "*";

Console.WriteLine($"Listing benchmarks in project folder: {projectFolder} with filter: {classFilter}");

// Resolve project folder relative to script location
var scriptDir = AppContext.BaseDirectory;
var projectPath = Path.GetFullPath(Path.Combine(scriptDir, projectFolder));

if (!Directory.Exists(projectPath))
{
    await Console.Error.WriteLineAsync($"Error: Project folder not found: {projectPath}").ConfigureAwait(false);
    Environment.Exit(1);
}

var csprojFiles = Directory.GetFiles(projectPath, "*.csproj");
if (csprojFiles.Length == 0)
{
    await Console.Error.WriteLineAsync($"Error: No .csproj file found in {projectPath}").ConfigureAwait(false);
    Environment.Exit(1);
}

var csprojFile = csprojFiles[0];

// Build the project in Release mode
await Console.Error.WriteLineAsync($"Building project: {Path.GetFileName(csprojFile)}").ConfigureAwait(false);

using var buildProcess = Process.Start(new ProcessStartInfo
{
    FileName = "dotnet",
    Arguments = $"build \"{csprojFile}\" -c Release --nologo -v quiet",
    WorkingDirectory = projectPath,
    RedirectStandardOutput = true,
    RedirectStandardError = true,
    UseShellExecute = false,
});

if (buildProcess == null)
{
    await Console.Error.WriteLineAsync("Error: Failed to start build process").ConfigureAwait(false);
    Environment.Exit(1);
}
await buildProcess.WaitForExitAsync().ConfigureAwait(false);

if (buildProcess.ExitCode != 0)
{
    await Console.Error.WriteLineAsync("Error: Build failed").ConfigureAwait(false);
    Environment.Exit(1);
}

// Run benchmark with --list flat to get benchmark list
await Console.Error.WriteLineAsync($"Listing benchmarks (filter: {classFilter})").ConfigureAwait(false);

var listArgs = classFilter == "*" 
    ? "--list flat" 
    : $"--filter *{classFilter}* --list flat";

using var benchmarkProcess = Process.Start(new ProcessStartInfo
{
    FileName = "dotnet",
    Arguments = $"run --project \"{csprojFile}\" -c Release --no-build -- {listArgs}",
    WorkingDirectory = projectPath,
    RedirectStandardOutput = true,
    RedirectStandardError = true,
    UseShellExecute = false,
});

if (benchmarkProcess == null)
{
    await Console.Error.WriteLineAsync("Error: Failed to start benchmark process").ConfigureAwait(false);
    Environment.Exit(1);
}

var output = new StringBuilder();
var error = new StringBuilder();

benchmarkProcess.OutputDataReceived += (sender, e) => 
{
    if (!string.IsNullOrEmpty(e.Data))
    {
        output.AppendLine(e.Data);
    }
};

benchmarkProcess.ErrorDataReceived += (sender, e) => 
{
    if (!string.IsNullOrEmpty(e.Data))
    {
        error.AppendLine(e.Data);
    }
};

benchmarkProcess.Start();
benchmarkProcess.BeginOutputReadLine();
benchmarkProcess.BeginErrorReadLine();
await benchmarkProcess.WaitForExitAsync().ConfigureAwait(false);

var outputText = output.ToString();
var errorText = error.ToString();

// Parse and output benchmarks in a clean format
var lines = outputText.Split('\n', StringSplitOptions.RemoveEmptyEntries);
var benchmarks = new List<string>();

foreach (var line in lines)
{
    var trimmed = line.Trim();

    // BenchmarkDotNet outputs benchmark names in the format: Namespace.ClassName.MethodName
    if (!string.IsNullOrWhiteSpace(trimmed) && !trimmed.StartsWith("//", StringComparison.InvariantCulture) && !trimmed.Contains("BenchmarkDotNet", StringComparison.InvariantCulture) && !trimmed.Contains("====", StringComparison.InvariantCulture) && trimmed.Contains('.', StringComparison.InvariantCulture))
    {
        benchmarks.Add(trimmed);
    }
}

if (benchmarks.Count == 0)
{
    await Console.Error.WriteLineAsync("No benchmarks found matching the filter").ConfigureAwait(false);
    if (!string.IsNullOrEmpty(errorText))
    {
        await Console.Error.WriteLineAsync("Error output:").ConfigureAwait(false);
        await Console.Error.WriteLineAsync(errorText).ConfigureAwait(false);
    }

    Environment.Exit(1);
}

// Output benchmarks one per line for easy parsing by CLI tools
foreach (var benchmark in benchmarks.Distinct(StringComparer.Ordinal).Order(StringComparer.Ordinal))
{
    Console.WriteLine(benchmark);
}

await Console.Error.WriteLineAsync($"\nTotal: {benchmarks.Count} benchmark(s)").ConfigureAwait(false);
