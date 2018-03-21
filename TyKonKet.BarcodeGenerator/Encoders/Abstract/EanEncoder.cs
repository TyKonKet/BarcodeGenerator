using TyKonKet.BarcodeGenerator.System;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    internal abstract class EanEncoder : Encoder
    {
        protected string[] EncodingA { get; } = { "0001101", "0011001", "0010011", "0111101", "0100011", "0110001", "0101111", "0111011", "0110111", "0001011" };

        protected string[] EncodingB { get; } = { "0100111", "0110011", "0011011", "0100001", "0011101", "0111001", "0000101", "0010001", "0001001", "0010111" };

        protected string[] EncodingC { get; } = { "1110010", "1100110", "1101100", "1000010", "1011100", "1001110", "1010000", "1000100", "1001000", "1110100" };

        protected string[] EncodingTable { get; } = { "000000", "001011", "001101", "001110", "010011", "011001", "011100", "010101", "010110", "011010" };

        protected string[] Guards { get; } = { "bab", "ababa", "bab" };

        protected EanEncoder(BarcodeOptions options) : base(options)
        {
        }

        protected static string _validate(string barcode, int length)
        {
            length = length - 1;
            barcode = barcode.PadLeft(length, '0');
            barcode = barcode.Substring(0, length);
            return $"{barcode}{_checkDigit(barcode)}";
        }

        private static string _checkDigit(string barcode)
        {
            var check = 0;
            var odd = true;
            for (var i = barcode.Length - 1; i >= 0; i--)
            {
                var n = barcode[i].ToInt();
                var m = odd ? 3 : 1;
                check += n * m;
                odd = !odd;
            }
            return $"{10 - check % 10}";
        }
    }
}
