using System;

namespace TyKonKet.BarcodeGenerator.Generators
{
    internal abstract class EANUPCGenerator
    {
        protected string[] _encodingA = new string[] { "0001101", "0011001", "0010011", "0111101", "0100011", "0110001", "0101111", "0111011", "0110111", "0001011" };
        protected string[] _encodingB = new string[] { "0100111", "0110011", "0011011", "0100001", "0011101", "0111001", "0000101", "0010001", "0001001", "0010111" };
        protected string[] _encodingC = new string[] { "1110010", "1100110", "1101100", "1000010", "1011100", "1001110", "1010000", "1000100", "1001000", "1110100" };
        protected string[] _encodingTable = new string[] { "000000", "001011", "001101", "001110", "010011", "011001", "011100", "010101", "010110", "011010" };
        protected string[] _guards = new string[] { "bab", "ababa", "bab" };

        protected string _checkDigit(string barcode, int length)
        {
            length -= 1;
            if (barcode.Length < length)
            {
                barcode = barcode.PadLeft(length, '0');
            }
            barcode = barcode.Substring(0, length);
            var csumTotal = 0;
            for (int i = barcode.Length; i > 0; i--)
            {
                csumTotal += (i % 2) * 2 + 1 * barcode[i - 1].ToInt();
            }
            return $"{barcode}{(10 - (csumTotal % 10)).ToString()}";
        }
    }
}
