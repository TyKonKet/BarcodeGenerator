# Performance Improvements Timeline

This document tracks the performance improvements made to the BarcodeGenerator library over time, including benchmark results and optimization details.

## Timeline

### August 13, 2025
- **Optimized Method**: `EncodersFactory.Create`
- **Description**: Replaced inefficient array operations with a streamlined LINQ-based approach.
- **Performance Results**:
  - **Create_OldBenchmark**: Mean = 162.3 ns, Allocated = 648 B
  - **CreateBenchmark**: Mean = 151.9 ns, Allocated = 672 B
- **Improvement**: ~6.4% faster execution time.

### August 13, 2025
- **Optimized Method**: `EncodesExtensions.GetDisplayName`
- **Description**: Introduced caching and optimized attribute lookup to significantly improve performance.
- **Performance Results**:
  - **Before Optimization**: Mean = 370.7 ns, Allocated = 264 B
  - **After Optimization**: Mean = 1.931 ns, Allocated = 0 B
- **Improvement**: ~99.5% faster execution time and eliminated memory allocation.

---

Future improvements will be added to this timeline as they are implemented and benchmarked.
