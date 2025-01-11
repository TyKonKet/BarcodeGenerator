using BenchmarkDotNet.Attributes;

namespace TyKonKet.BarcodeGenerator.Benchmarks.Common
{
    [Config(typeof(BenchmarkConfig))]
    public abstract class EncodeBenchmark
    {
        public abstract Barcode DoInstance();

        public abstract void DoEncoding();

        public abstract void DoExport();
    }
}