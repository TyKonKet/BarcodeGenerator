# Performance Improvements Timeline

This document tracks the performance improvements made to the BarcodeGenerator library over time, including benchmark results and optimization details.

## Timeline


### August 16, 2025
- **Optimized Method**: `EncodersFactory.Create`
- **Description**: Replaced Activator.CreateInstance reflection calls with pre-populated factory delegate cache for direct constructor invocation.
- **Performance Results**:
  - **Before Optimization (Create_Old)**: Mean = 208.61 ns, Allocated = 544 B
  - **After Optimization (Create)**: Mean = 47.38 ns, Allocated = 200 B
- **Improvement**: 
  - **340% faster execution** (4.4x speed improvement)
  - **63% memory reduction** (2.7x less allocation)
  - **Technical Impact**: Eliminated reflection overhead for all known encoder types while maintaining extensibility through fallback pattern

### August 13, 2025
- **Optimized Method**: `EncodesExtensions.GetDisplayName`
- **Description**: Introduced caching and optimized attribute lookup to significantly improve performance.
- **Performance Results**:
  - **Before Optimization**: Mean = 370.7 ns, Allocated = 264 B
  - **After Optimization**: Mean = 1.931 ns, Allocated = 0 B
- **Improvement**: ~99.5% faster execution time and eliminated memory allocation.

---

Future improvements will be added to this timeline as they are implemented and benchmarked.
