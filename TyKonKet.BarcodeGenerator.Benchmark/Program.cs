﻿using System.Reflection;
using BenchmarkDotNet.Running;

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