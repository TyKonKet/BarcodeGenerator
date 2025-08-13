using BenchmarkDotNet.Configs;
using BenchmarkDotNet.Diagnosers;
using BenchmarkDotNet.Environments;
using BenchmarkDotNet.Exporters.Json;
using BenchmarkDotNet.Jobs;
using BenchmarkDotNet.Loggers;

namespace TyKonKet.BarcodeGenerator.Benchmarks
{
    public class BenchmarkConfig : ManualConfig
    {
        public BenchmarkConfig()
        {
            AddJob(Job.MediumRun.WithRuntime(CoreRuntime.Core10_0));
            AddLogger(ConsoleLogger.Default);
            AddExporter(JsonExporter.Default);
            AddDiagnoser(MemoryDiagnoser.Default);
        }
    }
}
