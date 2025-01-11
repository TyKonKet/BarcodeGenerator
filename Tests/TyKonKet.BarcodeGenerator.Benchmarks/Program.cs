using System.Reflection;
using BenchmarkDotNet.Configs;
using BenchmarkDotNet.Running;

namespace TyKonKet.BarcodeGenerator.Benchmarks
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var config = DefaultConfig.Instance;
            new BenchmarkSwitcher(typeof(Program).GetTypeInfo().Assembly).Run(args, config);
        }
    }
}