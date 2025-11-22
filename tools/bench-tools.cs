#:package System.CommandLine@2.0.0
#:package CliWrap@3.10.0

using CliWrap;
using CliWrap.Buffered;
using System.CommandLine;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;

Argument<string> pathArgument = new("path")
{
    Description = "Path to a benchmark project file or directory to search for benchmark projects. Defaults to current directory.",
    DefaultValueFactory = _ => Directory.GetCurrentDirectory()
};

Option<bool> listOption = new("--list")
{
    Description = "Run benchmark projects to get a list of runnable benchmarks."
};

Option<string[]?> filterAllOption = new("--filterAll")
{
    Description = "Filter benchmarks by categories (all categories must match). Maps to BenchmarkDotNet --allCategories.",
    AllowMultipleArgumentsPerToken = true
};

Option<string[]?> filterAnyOption = new("--filterAny")
{
    Description = "Filter benchmarks by categories (any category must match). Maps to BenchmarkDotNet --anyCategories.",
    AllowMultipleArgumentsPerToken = true
};

Option<OutputFormat> formatOption = new("--format")
{
    Description = "Output format: plain-text, json, or github-matrix.",
    DefaultValueFactory = _ => OutputFormat.PlainText
};

Option<bool> includeFailuresInMatrixOption = new("--includeFailuresInMatrix")
{
    Description = "When outputting GitHub matrix for --list, include failed projects as dedicated rows (failed=true) instead of failing immediately."
};

Option<MatrixBenchmarkNameKind> matrixNameOption = new("--matrixBenchmarkName")
{
    Description = "Choose benchmarkName source in GitHub matrix: friendly (default) or class.",
    Arity = ArgumentArity.ZeroOrOne
};

Option<string?> workspaceRootOption = new("--workspaceRoot")
{
    Description = "Absolute path of the repository root; used to emit projectDirRelative/projectPathRelative fields in the GitHub matrix."
};

RootCommand rootCommand = new("BenchmarkTools - A CLI tool for BenchmarkDotNet interactions in CI/CD pipelines.")
{
    pathArgument,
    listOption,
    filterAllOption,
    filterAnyOption,
    formatOption,
    includeFailuresInMatrixOption,
    matrixNameOption,
    workspaceRootOption
};

rootCommand.SetAction(async (parseResult, cancellationToken) =>
{
    try
    {
        string path = parseResult.GetValue(pathArgument)!;
        bool list = parseResult.GetValue(listOption);
        string[]? filterAll = parseResult.GetValue(filterAllOption);
        string[]? filterAny = parseResult.GetValue(filterAnyOption);
        OutputFormat format = parseResult.GetValue(formatOption);
        bool includeFailuresInMatrix = parseResult.GetValue(includeFailuresInMatrixOption);
        MatrixBenchmarkNameKind matrixNameKind = parseResult.GetValue(matrixNameOption);
        bool matrixNameUseClassName = matrixNameKind == MatrixBenchmarkNameKind.Class;
        string? workspaceRoot = parseResult.GetValue(workspaceRootOption);

        var projects = FindBenchmarkProjects(path);

        if (projects.Count == 0)
        {
            Console.WriteLine("No benchmark projects found.");
            return 0;
        }

        if (!list)
        {
            // Just list the projects found
            OutputProjects(projects, format);
        }
        else
        {
            // Run benchmarks to get the list of runnable benchmarks
            var (benchmarks, failures) = await GetBenchmarkListAsync(projects, filterAll, filterAny);
            OutputBenchmarks(
                benchmarks,
                failures,
                format,
                includeFailuresInMatrix,
                matrixNameUseClassName,
                workspaceRoot
            );
            if (!includeFailuresInMatrix && failures.Count > 0)
            {
                Console.Error.WriteLine("One or more benchmark projects failed to build or run. Failing.");
                return 1;
            }
        }

        return 0;
    }
    catch (Exception ex)
    {
        Console.Error.WriteLine($"Error: {ex.Message}");
        return 1;
    }
});

return await rootCommand.Parse(args).InvokeAsync();

List<string> FindBenchmarkProjects(string path)
{
    var projects = new List<string>();

    if (File.Exists(path))
    {
        // Single project file
        if (path.EndsWith(".csproj", StringComparison.OrdinalIgnoreCase))
        {
            projects.Add(Path.GetFullPath(path));
        }
        else
        {
            throw new InvalidOperationException($"File '{path}' is not a .csproj file.");
        }
    }
    else if (Directory.Exists(path))
    {
        // Search directory recursively for benchmark projects
        var csprojFiles = Directory.GetFiles(path, "*.csproj", SearchOption.AllDirectories);

        foreach (var csproj in csprojFiles)
        {
            // Check if the project references BenchmarkDotNet
            bool isBenchmark = IsBenchmarkProject(csproj);
            if (isBenchmark)
            {
                projects.Add(Path.GetFullPath(csproj));
            }
        }
    }
    else
    {
        throw new InvalidOperationException($"Path '{path}' does not exist.");
    }

    return projects;
}

bool IsBenchmarkProject(string projectPath)
{
    try
    {
        var content = File.ReadAllText(projectPath);
        // Check if project references BenchmarkDotNet package
        return content.Contains("BenchmarkDotNet", StringComparison.OrdinalIgnoreCase);
    }
    catch
    {
        return false;
    }
}

string StripAnsiCodes(string input)
{
    return Regexes.AnsiCodes().Replace(input, "");
}

async Task<(List<BenchmarkInfo> Benchmarks, List<ProjectFailure> Failures)> GetBenchmarkListAsync(List<string> projects, string[]? filterAll, string[]? filterAny)
{
    var allBenchmarks = new List<BenchmarkInfo>();
    var failures = new List<ProjectFailure>();

    foreach (var project in projects)
    {
        var result = await RunBenchmarkListAsync(project, filterAll, filterAny);
        if (!result.Success)
        {
            failures.Add(new ProjectFailure(project, result.ErrorSnippet ?? "Unknown error"));
            continue;
        }

        allBenchmarks.AddRange(result.Benchmarks);
    }

    return (allBenchmarks, failures);
}

async Task<ProjectRunResult> RunBenchmarkListAsync(string projectPath, string[]? filterAll, string[]? filterAny)
{
    var projectDir = Path.GetDirectoryName(projectPath)!;
    var arguments = new List<string> { "run", "--project", projectPath, "--", "--list", "flat" };

    if (filterAll is { Length: > 0 })
    {
        arguments.Add("--allCategories");
        arguments.AddRange(filterAll);
    }

    if (filterAny is { Length: > 0 })
    {
        arguments.Add("--anyCategories");
        arguments.AddRange(filterAny);
    }

    try
    {
        var result = await Cli.Wrap("dotnet")
            .WithArguments(arguments)
            .WithWorkingDirectory(projectDir)
            .WithValidation(CommandResultValidation.None)
            .ExecuteBufferedAsync();

        if (result.ExitCode != 0)
        {
            // Build or run failed; warn and skip this project
            var err = string.IsNullOrWhiteSpace(result.StandardError) ? result.StandardOutput : result.StandardError;
            var firstLines = string.Join(Environment.NewLine, err.Split(['\r','\n'], StringSplitOptions.RemoveEmptyEntries).Take(5));
            Console.Error.WriteLine($"Warning: Skipping project '{projectPath}' due to build/run failure (exit code {result.ExitCode}).\n{firstLines}");
            return new ProjectRunResult(false, [], firstLines);
        }

        var parsed = ParseBenchmarkList(StripAnsiCodes(result.StandardOutput), projectPath);
        return new ProjectRunResult(true, parsed, null);
    }
    catch (Exception ex)
    {
        Console.Error.WriteLine($"Warning: Failed to run benchmarks for project '{projectPath}': {ex.Message}");
        return new ProjectRunResult(false, [], ex.Message);
    }
}

List<BenchmarkInfo> ParseBenchmarkList(string output, string projectPath)
{
    var benchmarks = new List<BenchmarkInfo>();
    var lines = output.Split('\n', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);

    // BenchmarkDotNet --list flat outputs lines like: Namespace.ClassName.MethodName
    // We want to extract unique class names
    var classNames = new HashSet<string>();

    foreach (var line in lines)
    {
        // Skip header/footer lines
        if (line.StartsWith("//") || line.Contains("BenchmarkDotNet") || string.IsNullOrWhiteSpace(line))
            continue;

        // Only accept well-formed benchmark identifiers: Namespace.Type[+Nested]`.Method
        // Avoid picking up compiler error lines like paths with ':' '(' or directory separators
        if (line.IndexOf(':') >= 0 || line.IndexOf('(') >= 0 || line.IndexOf('\\') >= 0 || line.IndexOf('/') >= 0 || line.IndexOf(' ') >= 0)
            continue;

        var match = Regexes.BenchmarkLine().Match(line);
        if (match.Success)
        {
            var fullTypeName = match.Groups["type"].Value; // e.g., Namespace.ClassName
            classNames.Add(fullTypeName);
        }
    }

    foreach (var className in classNames.OrderBy(c => c))
    {
        // Extract friendly name (class name without namespace)
        var lastDotIndex = className.LastIndexOf('.');
        var friendlyName = lastDotIndex >= 0 ? className[(lastDotIndex + 1)..] : className;

        benchmarks.Add(new BenchmarkInfo(projectPath, className, friendlyName));
    }

    return benchmarks;
}


void OutputProjects(List<string> projects, OutputFormat format)
{
    if (format == OutputFormat.Json)
    {
        var json = JsonSerializer.Serialize(projects, AppJsonContext.Default.ListString);
        Console.WriteLine(json);
    }
    else if (format == OutputFormat.GitHubMatrix)
    {
        var matrixData = new ProjectMatrixData(projects.Select(p => new ProjectMatrixItem(p)).ToArray());
        var json = JsonSerializer.Serialize(matrixData, AppJsonContext.Default.ProjectMatrixData);
        Console.WriteLine(json);
    }
    else
    {
        Console.WriteLine($"Found {projects.Count} benchmark project(s):");
        foreach (var project in projects)
        {
            Console.WriteLine($"  {project}");
        }
    }
}

void OutputBenchmarks(
    List<BenchmarkInfo> benchmarks,
    List<ProjectFailure> failures,
    OutputFormat format,
    bool includeFailuresInMatrix,
    bool matrixNameUseClassName,
    string? workspaceRoot
)
{
    if (format == OutputFormat.Json)
    {
        var json = JsonSerializer.Serialize(benchmarks, AppJsonContext.Default.ListBenchmarkInfo);
        Console.WriteLine(json);
    }
    else if (format == OutputFormat.GitHubMatrix)
    {
        var rows = new List<BenchmarkMatrixItem>(benchmarks.Count + (includeFailuresInMatrix ? failures.Count : 0));

        string? ToRelative(string? path)
        {
            if (string.IsNullOrWhiteSpace(path) || string.IsNullOrWhiteSpace(workspaceRoot))
            {
                return null;
            }

            try
            {
                var fullPath = Path.GetFullPath(path);
                var fullRoot = Path.GetFullPath(workspaceRoot);

                if (!fullRoot.EndsWith(Path.DirectorySeparatorChar))
                {
                    fullRoot += Path.DirectorySeparatorChar;
                }

                if (fullPath.StartsWith(fullRoot, StringComparison.OrdinalIgnoreCase))
                {
                    return fullPath[fullRoot.Length..];
                }
            }
            catch
            {
                // Fall back to null if we cannot compute the relative path
            }

            return null;
        }

        string? TrimBenchmarkSuffix(string? friendly)
        {
            if (string.IsNullOrEmpty(friendly))
            {
                return friendly;
            }

            if (friendly.EndsWith("Benchmarks", StringComparison.Ordinal))
            {
                return friendly[..^"Benchmarks".Length];
            }

            if (friendly.EndsWith("Benchmark", StringComparison.Ordinal))
            {
                return friendly[..^"Benchmark".Length];
            }

            return friendly;
        }

        foreach (var b in benchmarks)
        {
            var projectDir = Path.GetDirectoryName(b.ProjectPath)!;
            var projectDirRelative = ToRelative(projectDir);
            var projectPathRelative = ToRelative(b.ProjectPath);
            var benchmarkName = matrixNameUseClassName ? b.ClassName : TrimBenchmarkSuffix(b.FriendlyName);

            rows.Add(new BenchmarkMatrixItem(
                b.ProjectPath,
                projectDir,
                projectPathRelative,
                projectDirRelative,
                b.ClassName,
                b.FriendlyName,
                benchmarkName,
                false,
                null
            ));
        }
        if (includeFailuresInMatrix)
        {
            foreach (var f in failures)
            {
                var projectDir = Path.GetDirectoryName(f.ProjectPath)!;
                var benchmarkName = Path.GetFileName(f.ProjectPath);
                var friendlyName = Path.GetFileNameWithoutExtension(f.ProjectPath);
                rows.Add(new BenchmarkMatrixItem(
                    f.ProjectPath,
                    projectDir,
                    ToRelative(f.ProjectPath),
                    ToRelative(projectDir),
                    f.ProjectPath,
                    friendlyName,
                    benchmarkName,
                    true,
                    f.ErrorSnippet
                ));
            }
        }
        var matrixData = new BenchmarkMatrixData(rows.ToArray());
        var json = JsonSerializer.Serialize(matrixData, AppJsonContext.Default.BenchmarkMatrixData);
        Console.WriteLine(json);
    }
    else
    {
        Console.WriteLine($"Found {benchmarks.Count} benchmark class(es):");
        foreach (var benchmark in benchmarks)
        {
            Console.WriteLine($"  {benchmark.ProjectPath} -> {benchmark.ClassName} ({benchmark.FriendlyName})");
        }
        if (failures.Count > 0)
        {
            Console.Error.WriteLine($"{failures.Count} project(s) failed (not listed above). Use --includeFailuresInMatrix to surface them in matrix.");
        }
    }
}

enum OutputFormat
{
    PlainText,
    Json,
    GitHubMatrix
}

enum MatrixBenchmarkNameKind
{
    Friendly,
    Class
}

record BenchmarkInfo(string ProjectPath, string ClassName, string FriendlyName);

record ProjectMatrixData(ProjectMatrixItem[] include);
record ProjectMatrixItem(string project);

record BenchmarkMatrixData(BenchmarkMatrixItem[] include);
record BenchmarkMatrixItem(
    string projectPath,
    string projectDir,
    string? projectPathRelative,
    string? projectDirRelative,
    string? className,
    string? friendlyName,
    string? benchmarkName,
    bool failed,
    string? error
);
record ProjectRunResult(bool Success, List<BenchmarkInfo> Benchmarks, string? ErrorSnippet);
record ProjectFailure(string ProjectPath, string ErrorSnippet);

// Regex source generation for Native AOT
partial class Regexes
{
    // Matches lines like Namespace1.Namespace2.TypeName+NestedType`1.MethodName
    // - namespace segments: letters/underscore, digits allowed after first char
    // - type segments: may include nested types with '+' and generic arity with backticks
    // - method: C# identifier
    [GeneratedRegex(@"^(?<type>.+)\.(?<method>[A-Za-z_][A-Za-z0-9_]*)$")]
    public static partial Regex BenchmarkLine();

    [GeneratedRegex(@"\x1B\[[0-9;]*[mG]")]
    public static partial Regex AnsiCodes();
}

// JSON source generation context for Native AOT
[JsonSerializable(typeof(List<string>))]
[JsonSerializable(typeof(List<BenchmarkInfo>))]
[JsonSerializable(typeof(ProjectMatrixData))]
[JsonSerializable(typeof(BenchmarkMatrixData))]
[JsonSerializable(typeof(List<BenchmarkMatrixItem>))]
[JsonSourceGenerationOptions(WriteIndented = true)]
partial class AppJsonContext : JsonSerializerContext
{
}

