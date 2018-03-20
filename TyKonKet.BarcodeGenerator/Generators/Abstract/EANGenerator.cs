﻿using TyKonKet.BarcodeGenerator.System;

namespace TyKonKet.BarcodeGenerator.Generators
{
    internal abstract class EanGenerator
    {
        protected string[] EncodingA { get; } = { "0001101", "0011001", "0010011", "0111101", "0100011", "0110001", "0101111", "0111011", "0110111", "0001011" };

        protected string[] EncodingB { get; } = { "0100111", "0110011", "0011011", "0100001", "0011101", "0111001", "0000101", "0010001", "0001001", "0010111" };

        protected string[] EncodingC { get; } = { "1110010", "1100110", "1101100", "1000010", "1011100", "1001110", "1010000", "1000100", "1001000", "1110100" };

        protected string[] EncodingTable { get; } = { "000000", "001011", "001101", "001110", "010011", "011001", "011100", "010101", "010110", "011010" };

        protected string[] Guards { get; } = { "bab", "ababa", "bab" };

        protected static string _checkDigit(string barcode, int length)
        {
            length -= 1;
            if (barcode.Length < length)
            {
                barcode = barcode.PadLeft(length, '0');
            }
            barcode = barcode.Substring(0, length);
            var csumTotal = 0;
            for (var i = barcode.Length; i > 0; i--)
            {
                csumTotal += i % 2 * 2 + 1 * barcode[i - 1].ToInt();
            }
            return $"{barcode}{10 - csumTotal % 10}";
        }
    }
}
