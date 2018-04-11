using System.Linq;
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Attributes.Columns;
using BenchmarkDotNet.Attributes.Jobs;
using TyKonKet.BarcodeGenerator.Encoders;

namespace TyKonKet.BarcodeGenerator.Benchmark.Common
{
    [MemoryDiagnoser]
    [CoreJob]
    [RankColumn]
    public class Code93EncodeBars
    {
        [Benchmark(Baseline = true, Description = "Linq")]
        public string EncodeBarsLinq()
        {
            var barcode = "ABC-1234-ABC92736182345ANDJEOW918273EHEHCIA-.-SSS /$+%$+/ $ VARNAME PHPVAR VARNAME CSHARP";
            barcode = $"*{barcode}*";
            var bars = barcode.Aggregate("", (current, b) => current + Code93Encoder.EncodingTable[b]);
            return $"{bars}1";
        }

        [Benchmark(Description = "Foreach")]
        public string EncodeBarsForeach()
        {
            var barcode = "ABC-1234-ABC92736182345ANDJEOW918273EHEHCIA-.-SSS /$+%$+/ $ VARNAME PHPVAR VARNAME CSHARP";
            barcode = $"*{barcode}*";
            var bars = "";
            foreach (var b in barcode) bars += Code93Encoder.EncodingTable[b];
            return $"{bars}1";
        }
    }
}