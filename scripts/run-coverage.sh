#!/bin/bash

# Code Coverage Script for BarcodeGenerator Tests
# This script runs tests with code coverage and generates HTML reports

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🧪 Running BarcodeGenerator Tests with Code Coverage${NC}"
echo "=============================================="

# Navigate to test directory
SCRIPT_DIR="$(dirname "$0")"
TEST_DIR="$SCRIPT_DIR/../Tests/TyKonKet.BarcodeGenerator.Tests"
cd "$TEST_DIR" || { echo -e "${RED}❌ Failed to navigate to test directory${NC}"; exit 1; }

# Clean previous coverage results
echo -e "${YELLOW}🧹 Cleaning previous coverage results...${NC}"
if [ -d "coverage" ]; then
    rm -rf coverage/ || { echo -e "${RED}❌ Failed to clean coverage directory${NC}"; exit 1; }
fi
if [ -d "TestResults" ]; then
    rm -rf TestResults/ || { echo -e "${RED}❌ Failed to clean TestResults directory${NC}"; exit 1; }
fi

# Run tests with coverage
echo -e "${YELLOW}🚀 Running tests with coverage collection...${NC}"
dotnet test \
    --configuration Release \
    --collect:"XPlat Code Coverage" \
    --results-directory ./coverage \
    --logger "console;verbosity=minimal" \
    -- DataCollectionRunSettings.DataCollectors.DataCollector.Configuration.Format=opencover

# Check if reportgenerator is installed
if ! command -v reportgenerator &> /dev/null; then
    echo -e "${YELLOW}📦 Installing ReportGenerator global tool...${NC}"
    dotnet tool install -g dotnet-reportgenerator-globaltool || { echo -e "${RED}❌ Failed to install ReportGenerator${NC}"; exit 1; }
fi

# Generate HTML report
echo -e "${YELLOW}📊 Generating HTML coverage report...${NC}"
reportgenerator \
    -reports:"coverage/**/coverage.opencover.xml" \
    -targetdir:"coverage/report" \
    -reporttypes:"Html;Badges;TextSummary" \
    -verbosity:Info || { echo -e "${RED}❌ Failed to generate coverage report${NC}"; exit 1; }

# Display summary
echo -e "${GREEN}✅ Coverage report generated successfully!${NC}"
echo ""
echo "📁 Report location: $(pwd)/coverage/report/index.html"
echo "🏷️  Coverage badges: $(pwd)/coverage/report/badge_*.svg"
echo ""

# Try to open the report (cross-platform)
if command -v xdg-open &> /dev/null; then
    echo -e "${YELLOW}🌐 Opening coverage report in browser...${NC}"
    xdg-open "coverage/report/index.html"
elif command -v open &> /dev/null; then
    echo -e "${YELLOW}🌐 Opening coverage report in browser...${NC}"
    open "coverage/report/index.html"
elif command -v start &> /dev/null; then
    echo -e "${YELLOW}🌐 Opening coverage report in browser...${NC}"
    start "coverage/report/index.html"
else
    echo -e "${YELLOW}💡 Open this file in your browser to view the report:${NC}"
    echo "   file://$(pwd)/coverage/report/index.html"
fi

echo ""
echo -e "${GREEN}🎉 Done! Check the coverage report for detailed analysis.${NC}"