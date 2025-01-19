using BenchmarkDotNet.Configs;
using BenchmarkDotNet.Running;

namespace TyKonKet.BarcodeGenerator.CB
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var config = DefaultConfig.Instance;
            _ = BenchmarkSwitcher.FromAssembly(typeof(Program).Assembly).Run(args, config);
        }
    }
}