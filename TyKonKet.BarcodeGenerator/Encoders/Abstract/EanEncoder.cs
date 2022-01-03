using System.Text.RegularExpressions;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    internal abstract class EanEncoder : Encoder
    {
        protected static readonly string[] EncodingA =
        {
            "0001101", "0011001", "0010011", "0111101", "0100011", "0110001", "0101111", "0111011", "0110111", "0001011"
        };

        protected static readonly string[] EncodingB =
        {
            "0100111", "0110011", "0011011", "0100001", "0011101", "0111001", "0000101", "0010001", "0001001", "0010111"
        };

        protected static readonly string[] EncodingC =
        {
            "1110010", "1100110", "1101100", "1000010", "1011100", "1001110", "1010000", "1000100", "1001000", "1110100"
        };

        protected static readonly string[] EncodingTable =
        {
            "000000", "001011", "001101", "001110", "010011", "011001", "011100", "010101", "010110", "011010"
        };

        protected static readonly string[] Guards = { "101", "01010", "101" };

        protected EanEncoder(BarcodeOptions options) : base(options)
        {
        }

        protected EanEncoder()
        {
        }

#if NET6_0_OR_GREATER
        protected override Regex AcceptedCharset => new("^[0-9]+$");
#else
        protected override Regex AcceptedCharset => new Regex("^[0-9]+$");
#endif

        internal static string Validate(string barcode, int length)
        {
            // validate barcode following EAN rules
            length--;
            barcode = barcode.PadLeft(length, '0');
#if NET6_0_OR_GREATER
            barcode = barcode[..length];
#else
            barcode = barcode.Substring(0, length);
#endif

            return $"{barcode}{CheckDigit(barcode)}";
        }

        internal static string CheckDigit(string barcode)
        {
            // calculate check digit following EAN rules
            var check = 0;
#if NET6_0_OR_GREATER
            for (var i = 1; i <= barcode.Length; i++) check += (i % 2 * 2 + 1) * barcode[^i].ToInt();
#else
            for (var i = 1; i <= barcode.Length; i++) check += (i % 2 * 2 + 1) * barcode[barcode.Length - i].ToInt();
#endif 
            return $"{((check %= 10) != 0 ? 10 - check : check)}";
        }
    }
}