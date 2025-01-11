//using BenchmarkDotNet.Attributes;

//namespace TyKonKet.BarcodeGenerator.Benchmark.Common
//{
//    [MemoryDiagnoser]
//    [CoreJob]
//    [RankColumn]
//    public class EanCheckDigit
//    {
//        [Benchmark(Description = "Original")]
//        public string CheckDigitOriginal()
//        {
//            var barcode = "978156216789";
//            var check = 0;
//            var odd = true;
//            for (var i = barcode.Length - 1; i >= 0; i--)
//            {
//                var n = barcode[i].ToInt();
//                var m = odd ? 3 : 1;
//                check += n * m;
//                odd = !odd;
//            }

//            return $"{((check %= 10) != 0 ? 10 - check : check)}";
//        }

//        [Benchmark(Baseline = true, Description = "Last")]
//        public string CheckDigitLast()
//        {
//            var barcode = "978156216789";
//            var check = 0;

//            for (var i = 1; i <= barcode.Length; i++) check += (i % 2 * 2 + 1) * barcode[barcode.Length - i].ToInt();

//            return $"{((check %= 10) != 0 ? 10 - check : check)}";
//        }

//        [Benchmark(Description = "Current")]
//        public string CheckDigitCurrent()
//        {
//            var barcode = "978156216789";
//            var check = 0;

//            for (var i = 1; i <= barcode.Length; i++) check += (i % 2 * 2 + 1) * barcode[barcode.Length - i].ToInt();

//            return $"{((check %= 10) != 0 ? 10 - check : check)}";
//        }
//    }
//}