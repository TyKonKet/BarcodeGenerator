using BenchmarkDotNet.Running;
using System.Reflection;

namespace TyKonKet.BarcodeGenerator.Benchmarks
{
    public class Program
    {
        public static void Main(string[] args)
        {
            new BenchmarkSwitcher(typeof(Program).GetTypeInfo().Assembly).Run(args);
        }
    }
}