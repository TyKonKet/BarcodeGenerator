# Code Coverage Script for BarcodeGenerator Tests (PowerShell)
# This script runs tests with code coverage and generates HTML reports

param(
    [switch]$OpenReport = $true
)

Write-Host "🧪 Running BarcodeGenerator Tests with Code Coverage" -ForegroundColor Green
Write-Host "=============================================="

# Navigate to test directory
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$testPath = Join-Path (Split-Path -Parent $scriptPath) "Tests\TyKonKet.BarcodeGenerator.Tests"
Set-Location $testPath

# Clean previous coverage results
Write-Host "🧹 Cleaning previous coverage results..." -ForegroundColor Yellow
if (Test-Path "coverage") { Remove-Item -Recurse -Force "coverage" }
if (Test-Path "TestResults") { Remove-Item -Recurse -Force "TestResults" }

# Run tests with coverage
Write-Host "🚀 Running tests with coverage collection..." -ForegroundColor Yellow
dotnet test `
    --configuration Release `
    --collect:"XPlat Code Coverage" `
    --results-directory ./coverage `
    --logger "console;verbosity=minimal" `
    -- DataCollectionRunSettings.DataCollectors.DataCollector.Configuration.Format=opencover

# Check if reportgenerator is installed
$reportGeneratorInstalled = $false
try {
    $null = Get-Command reportgenerator -ErrorAction Stop
    $reportGeneratorInstalled = $true
}
catch {
    Write-Host "📦 Installing ReportGenerator global tool..." -ForegroundColor Yellow
    dotnet tool install -g dotnet-reportgenerator-globaltool
    $reportGeneratorInstalled = $true
}

if ($reportGeneratorInstalled) {
    # Generate HTML report
    Write-Host "📊 Generating HTML coverage report..." -ForegroundColor Yellow
    reportgenerator `
        -reports:"coverage/**/coverage.opencover.xml" `
        -targetdir:"coverage/report" `
        -reporttypes:"Html;Badges;TextSummary" `
        -verbosity:Info

    # Display summary
    Write-Host "✅ Coverage report generated successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📁 Report location: $(Get-Location)\coverage\report\index.html"
    Write-Host "🏷️  Coverage badges: $(Get-Location)\coverage\report\badge_*.svg"
    Write-Host ""

    # Open the report
    if ($OpenReport) {
        $reportPath = Join-Path (Get-Location) "coverage\report\index.html"
        if (Test-Path $reportPath) {
            Write-Host "🌐 Opening coverage report in browser..." -ForegroundColor Yellow
            Start-Process $reportPath
        }
    } else {
        Write-Host "💡 Open this file in your browser to view the report:" -ForegroundColor Yellow
        Write-Host "   file://$(Get-Location)\coverage\report\index.html"
    }

    Write-Host ""
    Write-Host "🎉 Done! Check the coverage report for detailed analysis." -ForegroundColor Green
} else {
    Write-Host "❌ Failed to install or find ReportGenerator tool." -ForegroundColor Red
    exit 1
}