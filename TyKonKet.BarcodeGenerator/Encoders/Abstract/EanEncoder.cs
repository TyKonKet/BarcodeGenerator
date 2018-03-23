using System.Text.RegularExpressions;
using TyKonKet.BarcodeGenerator.System;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    internal abstract class EanEncoder : Encoder
    {
        protected static string[] EncodingA { get; } =
        {
            "0001101", "0011001", "0010011", "0111101", "0100011", "0110001", "0101111", "0111011", "0110111", "0001011"
        };

        protected static string[] EncodingB { get; } =
        {
            "0100111", "0110011", "0011011", "0100001", "0011101", "0111001", "0000101", "0010001", "0001001", "0010111"
        };

        protected static string[] EncodingC { get; } =
        {
            "1110010", "1100110", "1101100", "1000010", "1011100", "1001110", "1010000", "1000100", "1001000", "1110100"
        };

        protected static string[] EncodingTable { get; } =
            {"000000", "001011", "001101", "001110", "010011", "011001", "011100", "010101", "010110", "011010"};

        protected static string[] Guards { get; } = { "101", "01010", "101" };

        protected override Regex AcceptedCharset => new Regex("^[0-9]+$");

        protected EanEncoder(BarcodeOptions options) : base(options)
        {
        }

        protected EanEncoder()
        {
        }

        internal static string _validate(string barcode, int length)
        {
            // validate barcode following EAN rules
            length = length - 1;
            barcode = barcode.PadLeft(length, '0');
            barcode = barcode.Substring(0, length);
            return $"{barcode}{_checkDigit(barcode)}";
        }

        internal static string _checkDigit(string barcode)
        {
            // calculate check digit following EAN rules
            var check = 0;
            var odd = true;
            for (var i = barcode.Length - 1; i >= 0; i--)
            {
                var n = barcode[i].ToInt();
                var m = odd ? 3 : 1;
                check += n * m;
                odd = !odd;
            }
            return $"{((check %= 10) != 0 ? 10 - check : check)}";
        }
    }
}
