using System;
using BenchmarkDotNet.Attributes;
using TyKonKet.BarcodeGenerator.Utils;
using TyKonKet.BarcodeGenerator;

namespace TyKonKet.BarcodeGenerator.Benchmarks
{
    [MemoryDiagnoser]
    public class EncodersFactoryBenchmark
    {
        private BarcodeOptions _options;

        [GlobalSetup]
        public void Setup()
        {
            _options = new BarcodeOptions
            {
                Type = BarcodeTypes.Ean13,
                Height = 50,
                Scaling = 2,
                RenderText = true
            };
        }

        [Benchmark]
        public void CreateBenchmark()
        {
            var encoder = EncodersFactory.Create(_options);
        }
    }
}
