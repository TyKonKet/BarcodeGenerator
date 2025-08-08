---
name: Bug report
about: Report a reproducible bug to help us improve
title: "[Bug]: "
labels:
  - bug
  - needs triage
assignees: []
---

<!--
Thanks for filing a bug! Please fill out as much as possible.
Items marked with (required) help us triage faster.
-->

## Checklist (required)
- [ ] I searched existing issues to avoid duplicates.
- [ ] I can reproduce this with the latest version.
- [ ] I included clear reproduction steps and, if possible, a minimal reproducible example.
- [ ] This is a bug report (not a question or feature request).

## Summary (required)
A clear and concise description of the problem.

## Steps to Reproduce (required)
1. …
2. …
3. …
4. …

<!-- If possible, include a minimal, self-contained repro (code and exact options). If your repro shows all options used (Type, Height, Scaling, Margins, Colors, RenderText, Typeface, Export format/quality), you can skip the "Barcode Details" section below. -->
### Minimal Reproduction
```text
// .NET code demonstrating the issue (C#, VB.NET, F#, etc.)
// Include exact input data and the options used
```

## Expected Behavior (required)
What you expected to happen.

## Actual Behavior (required)
What actually happened. Include error messages and how it differs from expected.

## Environment (required)
- BarcodeGenerator version: [e.g., 1.2.3 or commit SHA]
- Install method: [NuGet (Package Manager Console / nuget.exe) / .NET CLI (dotnet add package) / source]
- Runtime/Language: [.NET 8/.NET 7 + C# 12/11]
- OS: [Windows/macOS/Linux + version]
- CPU arch: [x64/arm64/other]
- Container/CI (if any): [Docker image / GitHub Actions runner / etc.]

## Barcode Details
**Note:** Not required if your Minimal Reproduction above already shows these settings.
- Symbology/type: [EAN-13 / UPC-A / ISBN / EAN-8 / CODE93]
- Input data (small sample):
```
Your example data here
```
- Options and rendering used:
  - Height: [e.g., 30]
  - Scaling: [e.g., 10]
  - Margins: [e.g., 2]
  - BackgroundColor: [e.g., Transparent]
  - ForegroundColor: [e.g., Black]
  - RenderText: [true/false]
  - Typeface (if any): [e.g., "Arial", style/weight]
- Output format: [PNG / JPEG]
- Export quality (1-100): [e.g., 100]

## Screenshots / Output
**Important:** If applicable, add screenshots or attach generated images/files. This is especially critical for image rendering issues.

## Logs / Stack Traces
```
Paste relevant logs here
```

## Regression?
- Did this work in a previous version? [Yes/No]
- Last known good version: [e.g., 1.2.2]

## Severity / Impact
- Severity: [blocking / critical / high / medium / low]
- Impacted use case(s):

## Additional Context
Anything else we should know.

## Willing to contribute a fix?
- [ ] Yes, I'm willing to open a PR
- [ ] No
