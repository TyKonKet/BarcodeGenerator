# Method Optimization Todo List

This document outlines the steps to follow for optimizing methods in the BarcodeGenerator library. It includes best practices and lessons learned from previous optimizations.

## Todo List for Method Optimization

1. **Pre-Optimization Validation**:
   - Run tests and benchmarks on the current method to establish a baseline.
   - Document the baseline results.
   - **Checklist**:
     - [ ] Ensure all tests pass for the current method.
     - [ ] Run benchmarks to capture baseline performance metrics.

2. **Duplicate the Method**:
   - Create a duplicate of the current method (e.g., `MethodName_Old`) for benchmarking purposes.
   - Ensure the duplicate is clearly marked as the old implementation.
   - **Checklist**:
     - [ ] Verify the duplicate is functional and compiles without errors.
     - [ ] Add comments to indicate it is for benchmarking only.

3. **Validate Correctness**:
   - Run tests on the duplicated method to ensure it behaves identically to the original.
   - **Checklist**:
     - [ ] Ensure all tests pass for the duplicated method.
     - [ ] Add new test cases for edge scenarios uncovered during validation.

4. **Set Up and Run Benchmarks**:
   - Use BenchmarkDotNet to compare the original and duplicated methods.
   - Validate the benchmark setup by running it once before optimization.
   - **Critical**: Always run benchmarks with the latest .NET framework version flag.
   - **Critical**: Ensure the correct benchmark method is selected or use appropriate filters.
   - **Critical**: Use the `TyKonKet.BarcodeGenerator.Benchmarks` project for development benchmarks (NOT the CB project which is for CI).
   - **Checklist**:
     - [ ] Create benchmark classes in `Tests/TyKonKet.BarcodeGenerator.Benchmarks/` directory.
     - [ ] Include both the old and new methods in the benchmark.
     - [ ] Ensure benchmarks isolate the method being optimized.
     - [ ] Run with `--framework net10.0` (or latest available) flag.
     - [ ] Use method filters like `--filter *BenchmarkName*` to run specific benchmarks.

5. **Optimize the Method**:
   - Refactor the method iteratively, running benchmarks and tests after each change.
   - Focus on measurable improvements and document each iteration.
   - Common techniques include:
     - Reducing memory allocations.
     - Using spans (`Span<T>` or `ReadOnlySpan<T>`) for efficient memory access.
     - Caching results to avoid redundant computations.
     - Replacing LINQ with more efficient loops where necessary.
   - **Checklist**:
     - [ ] Ensure the optimized method passes all tests after each iteration.
     - [ ] Add comments explaining the changes and their expected impact.

6. **Document Results**:
   - Add detailed benchmark results, optimization techniques, and lessons learned to the documentation.
   - Include before/after metrics, a description of the changes, and the date of optimization.
   - **Checklist**:
     - [ ] Include detailed benchmark results.
     - [ ] Summarize the optimization techniques used.
     - [ ] Highlight lessons learned and potential future improvements.

7. **Remove the Old Method**:
   - Once validated and documented, remove the old method to clean up the codebase.
   - **Checklist**:
     - [ ] Ensure the old method is no longer referenced anywhere in the codebase.
     - [ ] Run the full test suite after removal to confirm no regressions.

8. **Final Validation**:
   - Run the full test suite and benchmarks to ensure no regressions.
   - **Checklist**:
     - [ ] Validate the optimized method against the baseline results.
     - [ ] Confirm the codebase is clean and all tests pass.

### Logging and Documentation Steps

1. **Code Changes**:
   - **Commit Messages**: Ensure every change is committed with a clear and descriptive message summarizing the update.
   - **Changelog**: If applicable, add an entry to the `CHANGELOG.md` file describing the change.
   - **Code Comments**: Add inline comments in the code to explain non-obvious changes or optimizations.

2. **Documentation Updates**:
   - **API Documentation**: Update relevant files in the `docs/api/` folder if the changes affect the public API.
   - **Examples**: Modify files in `docs/examples/` to reflect changes in usage or behavior.
   - **Optimization Procedure**: If the change involves optimization, ensure this file (`method-optimization-todo.md`) is updated to reflect the new steps or insights.

3. **Testing**:
   - **Unit Tests**: Add or update tests in `Tests/TyKonKet.BarcodeGenerator.Tests/` to validate the changes.
   - **Benchmark Results**: Log performance improvements in `docs/performance-improvements.md`.

4. **Release Notes**:
   - **NuGet Package**: If the change is significant, include it in the release notes for the next NuGet package version.

## Best Practices and Lessons Learned

- **Use the Latest .NET Version**:
  - Always run tests and benchmarks on the latest .NET version to leverage runtime optimizations.
  - Use `--framework net10.0` (or latest) when running BenchmarkDotNet projects.

- **Benchmark Execution Commands**:
  - For specific method benchmarks: `dotnet run --configuration Release --framework net10.0 -- --filter *BenchmarkName*`
  - For full benchmark suites: `dotnet run --configuration Release --framework net10.0`
  - Always use Release configuration for accurate performance measurements.
  - **Important**: Run benchmarks from `Tests/TyKonKet.BarcodeGenerator.Benchmarks/` directory (development benchmarks)
  - **Avoid**: Using `Tests/TyKonKet.BarcodeGenerator.CB/` directory (CI-specific benchmarks)

- **Focus on Hotspots**:
  - Use profiling tools to identify performance-critical areas before optimizing.

- **Benchmark in Isolation**:
  - Ensure benchmarks are not affected by external factors (e.g., disk I/O, network latency).

- **Validate Incrementally**:
  - Test and benchmark after each significant change to catch regressions early.

- **Communicate Changes**:
  - Document every change clearly to ensure future maintainers understand the rationale and impact.
