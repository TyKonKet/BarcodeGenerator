using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Attributes.Jobs;

namespace TyKonKet.BarcodeGenerator.Benchmark.Encode
{
    [MemoryDiagnoser]
    [CoreJob]
    [ClrJob]
    public abstract class Encode
    {
        [Benchmark]
        public abstract void DoEncoding();
    }
}
