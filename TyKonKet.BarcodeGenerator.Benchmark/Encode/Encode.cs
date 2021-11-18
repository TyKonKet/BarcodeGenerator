using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Jobs;

namespace TyKonKet.BarcodeGenerator.Benchmark.Encode
{
    [MemoryDiagnoser]
    [SimpleJob(runtimeMoniker: RuntimeMoniker.Net462)]
    [SimpleJob(runtimeMoniker: RuntimeMoniker.Net48, baseline: true)]
    //[SimpleJob(runtimeMoniker: RuntimeMoniker.NetCoreApp31)]
    //[SimpleJob(runtimeMoniker: RuntimeMoniker.Net50)]
    [SimpleJob(runtimeMoniker: RuntimeMoniker.Net60)]
    public abstract class Encode
    {
        public abstract Barcode DoInstance();

        public abstract void DoEncoding();

        public abstract void DoExport();
    }
}