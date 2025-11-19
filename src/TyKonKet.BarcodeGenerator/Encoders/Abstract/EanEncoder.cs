// Copyright (c) 2020-2025 TyKonKet and contributors
// Licensed under the MIT License. See LICENSE in the repository root for full license information.

using System;
using System.Globalization;
using System.Text.RegularExpressions;
using TyKonKet.BarcodeGenerator.Utils;

namespace TyKonKet.BarcodeGenerator.Encoders.Abstract
{
    /// <summary>
    /// Abstract base class for encoding EAN barcodes.
    /// </summary>
    internal abstract class EanEncoder : Encoder
    {
        /// <summary>
        /// Encoding patterns for digits 0-9 using encoding set A.
        /// </summary>
        protected static readonly string[] EncodingA =
        [
                    "0001101", "0011001", "0010011", "0111101", "0100011",
                    "0110001", "0101111", "0111011", "0110111", "0001011",
        ];

        /// <summary>
        /// Encoding patterns for digits 0-9 using encoding set B.
        /// </summary>
        protected static readonly string[] EncodingB =
        [
                    "0100111", "0110011", "0011011", "0100001", "0011101",
                    "0111001", "0000101", "0010001", "0001001", "0010111",
        ];

        /// <summary>
        /// Encoding patterns for digits 0-9 using encoding set C.
        /// </summary>
        protected static readonly string[] EncodingC =
        [
                    "1110010", "1100110", "1101100", "1000010", "1011100",
                    "1001110", "1010000", "1000100", "1001000", "1110100",
        ];

        /// <summary>
        /// Encoding table for the first digit of EAN-13 barcodes.
        /// </summary>
        protected static readonly string[] EncodingTable =
        [
                    "000000", "001011", "001101", "001110", "010011",
                    "011001", "011100", "010101", "010110", "011010",
        ];

        /// <summary>
        /// Guard patterns used in EAN barcodes.
        /// </summary>
        protected static readonly string[] Guards = ["101", "01010", "101"];

        /// <summary>
        /// Gets the accepted character set for the barcode.
        /// </summary>
        protected override Regex AllowedCharsetPattern => RegexCache.EanAllowedCharsetRegex;

        /// <summary>
        /// Initializes a new instance of the <see cref="EanEncoder"/> class.
        /// </summary>
        protected EanEncoder()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="EanEncoder"/> class with the specified options.
        /// </summary>
        /// <param name="options">The barcode options.</param>
        protected EanEncoder(BarcodeOptions options)
            : base(options)
        {
        }

        /// <summary>
        /// Validates the barcode and appends the check digit following EAN rules.
        /// </summary>
        /// <param name="barcode">The barcode digits to validate.</param>
        /// <param name="length">The required length of the barcode, including the check digit.</param>
        /// <returns>The validated barcode with the check digit appended.</returns>
        internal static string FormatBarcode(string barcode, int length)
        {
            var targetLength = length - 1; // Length without check digit

            // Handle cases where padding and truncation can be optimized
            if (barcode.Length == targetLength)
            {
                // Perfect length - just append check digit directly
                return barcode + GetCheckDigit(barcode);
            }

            if (barcode.Length < targetLength)
            {
                // Need padding - optimize for common cases
                var paddingNeeded = targetLength - barcode.Length;
                var paddedBarcode = new string('0', paddingNeeded) + barcode;

                return paddedBarcode + GetCheckDigit(paddedBarcode);
            }

            // Need truncation
            var truncated = barcode[..targetLength];
            return truncated + GetCheckDigit(truncated);
        }

        /// <summary>
        /// Calculates the EAN check digit for the given barcode digits.
        /// </summary>
        /// <param name="barcode">The barcode digits.</param>
        /// <returns>The calculated check digit as a string.</returns>
        internal static char GetCheckDigit(string barcode)
        {
            var checkSumValue = 0;
            for (var i = 1; i <= barcode.Length; i++)
            {
                checkSumValue += (((i % 2) * 2) + 1) * barcode[^i].ToInt();
            }

            checkSumValue %= 10;

            var checkDigit = checkSumValue != 0 ? 10 - checkSumValue : checkSumValue;
            return (char)('0' + checkDigit);
        }
    }
}
