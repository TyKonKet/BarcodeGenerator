using BenchmarkDotNet.Configs;
using BenchmarkDotNet.Running;
using System;
using System.IO;

namespace TyKonKet.BarcodeGenerator.CB
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var config = DefaultConfig.Instance;

            Console.WriteLine("");
            Console.WriteLine($"Artifacts Directory: {config.ArtifactsPath}");
            Console.WriteLine("");
            Console.WriteLine("");

            _ = BenchmarkSwitcher.FromAssembly(typeof(Program).Assembly).Run(args, config);
        }
    }
}