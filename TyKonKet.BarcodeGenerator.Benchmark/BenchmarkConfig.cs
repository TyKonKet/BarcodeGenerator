using BenchmarkDotNet.Configs;
using BenchmarkDotNet.Diagnosers;
using BenchmarkDotNet.Environments;
using BenchmarkDotNet.Exporters.Json;
using BenchmarkDotNet.Jobs;
using BenchmarkDotNet.Loggers;

namespace TyKonKet.BarcodeGenerator.Benchmark
{
    public class BenchmarkConfig : ManualConfig
    {
        public BenchmarkConfig()
        {
            // Configure your benchmarks, see for more details: https://benchmarkdotnet.org/articles/configs/configs.html.
            AddJob(Job.ShortRun.WithIterationCount(10).WithRuntime(ClrRuntime.Net481).AsBaseline());
            //AddJob(Job.ShortRun.WithIterationCount(10).WithRuntime(MonoRuntime.Default));
            //AddJob(Job.ShortRun.WithIterationCount(10).WithRuntime(new WasmRuntime()));
            AddJob(Job.ShortRun.WithIterationCount(10).WithRuntime(CoreRuntime.Core50));
            AddJob(Job.ShortRun.WithIterationCount(10).WithRuntime(CoreRuntime.Core80));
            AddJob(Job.ShortRun.WithIterationCount(10).WithRuntime(CoreRuntime.Core90));
            AddLogger(ConsoleLogger.Default);
            AddExporter(JsonExporter.Default);
            AddDiagnoser(MemoryDiagnoser.Default);
        }
    }
}
