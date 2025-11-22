#:package System.CommandLine@2.0.0

using System.CommandLine;
using System.Text.Json;
using System.Text.Json.Serialization;

Argument<string> pathArgument = new("path")
{
    Description = "Path to a directory to search for test projects. Defaults to current directory.",
    DefaultValueFactory = _ => Directory.GetCurrentDirectory()
};

Option<OutputFormat> formatOption = new("--format")
{
    Description = "Output format: plain-text, json, or github-matrix.",
    DefaultValueFactory = _ => OutputFormat.PlainText
};

Option<string> workspaceRootOption = new("--workspaceRoot")
{
    Description = "Absolute path of the repository root; used to emit projectDirRelative/projectPathRelative fields in the GitHub matrix. Defaults to the directory of the path argument if not provided."
};

RootCommand rootCommand = new("TestTools - A CLI tool for finding .NET test projects.")
{
    pathArgument,
    formatOption,
    workspaceRootOption
};

rootCommand.SetAction(async (parseResult, cancellationToken) =>
{
    try
    {
        string path = parseResult.GetValue(pathArgument)!;
        OutputFormat format = parseResult.GetValue(formatOption);
        string workspaceRoot = parseResult.GetValue(workspaceRootOption)!;

        if (string.IsNullOrEmpty(workspaceRoot))
        {
            workspaceRoot = File.Exists(path) ? Path.GetDirectoryName(path)! : path;
        }

        var projects = FindTestProjects(path, workspaceRoot);

        if (projects.Count == 0)
        {
            Console.WriteLine("No test projects found.");
            return 0;
        }

        OutputProjects(projects, format);

        return 0;
    }
    catch (Exception ex)
    {
        Console.Error.WriteLine($"Error: {ex.Message}");
        return 1;
    }
});

return await rootCommand.Parse(args).InvokeAsync();

List<ProjectInfo> FindTestProjects(string path, string workspaceRoot)
{
    var projects = new List<ProjectInfo>();

    string? ToRelative(string? fullPath)
    {
        if (string.IsNullOrWhiteSpace(fullPath))
        {
            return null;
        }

        try
        {
            var full = Path.GetFullPath(fullPath);
            var root = Path.GetFullPath(workspaceRoot);

            if (!root.EndsWith(Path.DirectorySeparatorChar))
            {
                root += Path.DirectorySeparatorChar;
            }

            if (full.StartsWith(root, StringComparison.OrdinalIgnoreCase))
            {
                return full[root.Length..];
            }
        }
        catch
        {
            // Fall back to null if we cannot compute the relative path
        }

        return null;
    }

    if (File.Exists(path))
    {
        // Single project file
        if (path.EndsWith(".csproj", StringComparison.OrdinalIgnoreCase))
        {
            var fullPath = Path.GetFullPath(path);
            var projectDir = Path.GetDirectoryName(fullPath)!;
            var projectName = Path.GetFileName(fullPath);
            var friendlyName = Path.GetFileNameWithoutExtension(fullPath);
            var projectPathRelative = ToRelative(fullPath);
            var projectDirRelative = ToRelative(projectDir);
            projects.Add(new ProjectInfo(fullPath, projectDir, projectPathRelative, projectDirRelative, projectName, friendlyName));
        }
        else
        {
            throw new InvalidOperationException($"File '{path}' is not a .csproj file.");
        }
    }
    else if (Directory.Exists(path))
    {
        // Search directory recursively for test projects
        var csprojFiles = Directory.GetFiles(path, "*.csproj", SearchOption.AllDirectories);

        foreach (var csproj in csprojFiles)
        {
            // Check if the project is a test project
            bool isTest = IsTestProject(csproj);
            if (isTest)
            {
                var fullPath = Path.GetFullPath(csproj);
                var projectDir = Path.GetDirectoryName(fullPath)!;
                var projectName = Path.GetFileName(fullPath);
                var friendlyName = Path.GetFileNameWithoutExtension(fullPath);
                var projectPathRelative = ToRelative(fullPath);
                var projectDirRelative = ToRelative(projectDir);
                projects.Add(new ProjectInfo(fullPath, projectDir, projectPathRelative, projectDirRelative, projectName, friendlyName));
            }
        }
    }
    else
    {
        throw new InvalidOperationException($"Path '{path}' does not exist.");
    }

    return projects;
}

bool IsTestProject(string projectPath)
{
    try
    {
        var content = File.ReadAllText(projectPath);
        // Check if project references Microsoft.NET.Test.Sdk package
        return content.Contains("Microsoft.NET.Test.Sdk", StringComparison.OrdinalIgnoreCase);
    }
    catch
    {
        return false;
    }
}

void OutputProjects(List<ProjectInfo> projects, OutputFormat format)
{
    if (format == OutputFormat.Json)
    {
        var json = JsonSerializer.Serialize(projects, AppJsonContext.Default.ListProjectInfo);
        Console.WriteLine(json);
    }
    else if (format == OutputFormat.GitHubMatrix)
    {
        var matrixData = new ProjectMatrixData(projects.Select(p => new ProjectMatrixItem(
            p.ProjectPath,
            p.ProjectDir,
            p.ProjectPathRelative,
            p.ProjectDirRelative,
            p.ProjectName,
            p.FriendlyName
        )).ToArray());
        var json = JsonSerializer.Serialize(matrixData, AppJsonContext.Default.ProjectMatrixData);
        Console.WriteLine(json);
    }
    else
    {
        Console.WriteLine($"Found {projects.Count} test project(s):");
        foreach (var project in projects)
        {
            Console.WriteLine($"  {project.ProjectPath} ({project.FriendlyName})");
        }
    }
}

enum OutputFormat
{
    PlainText,
    Json,
    GitHubMatrix
}

record ProjectInfo(string ProjectPath, string ProjectDir, string? ProjectPathRelative, string? ProjectDirRelative, string ProjectName, string FriendlyName);

record ProjectMatrixData(ProjectMatrixItem[] include);
record ProjectMatrixItem(string projectPath, string projectDir, string? projectPathRelative, string? projectDirRelative, string projectName, string friendlyName);

// JSON source generation context for Native AOT
[JsonSerializable(typeof(List<string>))]
[JsonSerializable(typeof(List<ProjectInfo>))]
[JsonSerializable(typeof(ProjectMatrixData))]
[JsonSerializable(typeof(ProjectMatrixItem))]
[JsonSourceGenerationOptions(WriteIndented = true)]
partial class AppJsonContext : JsonSerializerContext
{
}
