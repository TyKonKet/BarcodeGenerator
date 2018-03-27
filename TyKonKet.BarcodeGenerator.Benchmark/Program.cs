using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Attributes.Jobs;
using BenchmarkDotNet.Running;
using SixLabors.Fonts;
using SixLabors.ImageSharp;
using System.IO;
using System.Reflection;

namespace TyKonKet.BarcodeGenerator.Benchmark
{
    public class Program
    {
        public static void Main(string[] args)
        {
            new BenchmarkSwitcher(typeof(Program).GetTypeInfo().Assembly).Run(args);
        }
    }
}
