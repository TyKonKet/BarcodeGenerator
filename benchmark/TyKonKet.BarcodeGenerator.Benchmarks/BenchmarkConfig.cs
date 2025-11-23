using BenchmarkDotNet.Configs;
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
            AddJob(Job.Default.WithRuntime(CoreRuntime.Core90));
            AddLogger(ConsoleLogger.Default);
            AddExporter(JsonExporter.Default);
        }
    }
}