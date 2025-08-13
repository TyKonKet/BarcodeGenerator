using System;
using BenchmarkDotNet.Attributes;
using TyKonKet.BarcodeGenerator.Utils;
using TyKonKet.BarcodeGenerator;

namespace TyKonKet.BarcodeGenerator.Benchmarks
{
    [MemoryDiagnoser]
    public class EncodesExtensionsBenchmark
    {
        private BarcodeTypes _barcodeType;

        [GlobalSetup]
        public void Setup()
        {
            _barcodeType = BarcodeTypes.Ean13;
        }

        [Benchmark]
        public void GetDisplayNameBenchmark()
        {
            var displayName = _barcodeType.GetDisplayName();
        }
    }
}
