﻿using System;
using TyKonKet.BarcodeGenerator.Encoders;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests.Encoders
{
    public class Code93EncoderTest
    {
        [Theory]
        [InlineData("ABC-1234-ABC", "DX")]
        [InlineData("92736182345", "%/")]
        [InlineData("ANDJEOW918273", "W+")]
        [InlineData("EHEHCIA-.-SSS", "6P")]
        [InlineData(" /$+%$+/ ", "2X")]
        [InlineData("$ VARNAME PHP", "$L")]
        [InlineData("VAR VARNAME CSHARP", "Z8")]
        [InlineData("ABC-1234-ABC-. $/+%", ">P")]
        [InlineData("$ VARNAME PHP$L", "OU")]
        [InlineData("JD28-222", "S?")]
        [InlineData("GWUMS$%KAJSU", "6?")]
        [InlineData("918273736482-3838382", "0A")]
        [InlineData("120.87F", "W/")]
        [InlineData("ABC.1234.ABC", "QE")]
        [InlineData("CODE93CHECKDIGIT", "GI")]
        [InlineData("BARCODE", "9Z")]
        [InlineData("JDJEUMNA.38347230", "J7")]
        [InlineData("GITHUB", "1T")]
        [InlineData("VISUALSTUDIO2017", "8+")]
        [InlineData("0123456789ABCDEFGHIJKLMNOP", "/=")]
        public void CheckDigits_ShouldReturnExpectedCheckDigits(string input, string expected)
        {
            Assert.Equal(expected, Code93Encoder.GetCheckDigits(input));
        }

        [Theory]
        [InlineData("ABC-1234-aBC")]
        [InlineData("EHEHCIA-._SSS")]
        [InlineData("$VARNAME PHP?")]
        [InlineData("@ANDJEOW918273")]
        public void ValidateCharset_ShouldThrowFormatException_ForInvalidCharset(string barcode)
        {
            Assert.Throws<FormatException>(() => { new Code93Encoder().EnsureValidCharset(barcode); });
        }

        [Theory]
        [InlineData("ABC-1234-ABC")]
        [InlineData("92736182345")]
        [InlineData("ANDJEOW918273")]
        [InlineData("EHEHCIA-.-SSS")]
        [InlineData(" /$+%$+/ ")]
        [InlineData("$ VARNAME PHP")]
        [InlineData("VAR VARNAME CSHARP")]
        public void ValidateCharset_ShouldReturnTrue_ForValidCharset(string barcode)
        {
            Assert.True(new Code93Encoder().EnsureValidCharset(barcode));
        }

        [Theory]
        [InlineData("ABC-1234-ABC", "1010111101101010001101001001101000101001011101010010001010001001010000101001010001001011101101010001101001001101000101010111101")]
        [InlineData("92736182345", "1010111101000010101010001001010100001010000101001000101010010001000100101010001001010000101001010001001001001010111101")]
        [InlineData("ANDJEOW918273", "1010111101101010001010001101100101001001101001100100101001011001011011001000010101010010001000100101010001001010100001010000101010111101")]
        [InlineData("EHEHCIA-.-7728", "1010111101100100101011001001100100101011001001101000101011000101101010001001011101110101001001011101010100001010100001010001001000100101010111101")]
        [InlineData(" /$+%$+/ ", "1010111101110100101011011101110010101011101101101011101110010101011101101011011101110100101010111101")]
        [InlineData("$ VARNAME PHP", "1010111101110010101110100101100110101101010001101100101010001101101010001010011001100100101110100101000101101011001001000101101010111101")]
        [InlineData("VAR VARNAME CSHARP", "1010111101100110101101010001101100101110100101100110101101010001101100101010001101101010001010011001100100101110100101101000101101011001011001001101010001101100101000101101010111101")]
        public void EncodeBars_ShouldReturnExpectedEncodedBars(string input, string expected)
        {
            Assert.Equal(expected, Code93Encoder.EncodeBars(input));
        }

        [Theory]
        [InlineData("ABC-1234-ABC", "1010111101101010001101001001101000101001011101010010001010001001010000101001010001001011101101010001101001001101000101010111101")]
        [InlineData("92736182345", "1010111101000010101010001001010100001010000101001000101010010001000100101010001001010000101001010001001001001010111101")]
        public void EncodeBars_ShouldReturnExpectedEncodedBars_Additional(string input, string expected)
        {
            Assert.Equal(expected, Code93Encoder.EncodeBars(input));
        }

        [Theory]
        [InlineData("ABC-1234-ABC", "DX")]
        [InlineData("92736182345", "%/")]
        public void CheckDigits_ShouldReturnExpectedCheckDigits_Additional(string input, string expected)
        {
            Assert.Equal(expected, Code93Encoder.GetCheckDigits(input));
        }

        [Theory]
        [InlineData("ABC-1234-ABC")]
        [InlineData("92736182345")]
        public void ValidateCharset_ShouldReturnTrue_ForValidCharset_Additional(string barcode)
        {
            Assert.True(new Code93Encoder().EnsureValidCharset(barcode));
        }

        [Theory]
        [InlineData("ABC-1234-aBC")]
        [InlineData("EHEHCIA-._SSS")]
        public void ValidateCharset_ShouldThrowFormatException_ForInvalidCharset_Additional(string barcode)
        {
            Assert.Throws<FormatException>(() => { new Code93Encoder().EnsureValidCharset(barcode); });
        }
        [Theory]
        [InlineData("ABC-1234-ABC", 20, "D")]
        [InlineData("92736182345", 20, "%")]
        [InlineData("ANDJEOW918273", 20, "W")]
        [InlineData("EHEHCIA-.-SSS", 20, "6")]
        [InlineData(" /$+%$+/ ", 20, "2")]
        [InlineData("$ VARNAME PHP", 20, "$")]
        [InlineData("VAR VARNAME CSHARP", 20, "Z")]
        [InlineData("ABC-1234-ABC-. $/+%", 20, ">")]
        [InlineData("$ VARNAME PHP$L", 20, "O")]
        [InlineData("JD28-222", 20, "S")]
        [InlineData("GWUMS$%KAJSU", 20, "6")]
        [InlineData("918273736482-3838382", 20, "0")]
        [InlineData("120.87F", 20, "W")]
        [InlineData("ABC.1234.ABC", 20, "Q")]
        [InlineData("CODE93CHECKDIGIT", 20, "G")]
        [InlineData("BARCODE", 20, "9")]
        [InlineData("JDJEUMNA.38347230", 20, "J")]
        [InlineData("GITHUB", 20, "1")]
        [InlineData("VISUALSTUDIO2017", 20, "8")]
        [InlineData("0123456789ABCDEFGHIJKLMNOP", 20, "/")]
        public void GetCheckDigit_ShouldReturnExpectedCheckDigit(string input, int maxWeight, string expected)
        {
            Assert.Equal(expected, Code93Encoder.GetCheckDigit(input, maxWeight));
        }
        [Theory]
        [InlineData("ABC-1234-ABC", "ABC-1234-ABCDX")]
        [InlineData("92736182345", "92736182345%/")]
        [InlineData("ANDJEOW918273", "ANDJEOW918273W+")]
        [InlineData("EHEHCIA-.-SSS", "EHEHCIA-.-SSS6P")]
        [InlineData(" /$+%$+/ ", " /$+%$+/ 2X")]
        [InlineData("$ VARNAME PHP", "$ VARNAME PHP$L")]
        [InlineData("VAR VARNAME CSHARP", "VAR VARNAME CSHARPZ8")]
        [InlineData("ABC-1234-ABC-. $/+%", "ABC-1234-ABC-. $/+%>P")]
        [InlineData("$ VARNAME PHP$L", "$ VARNAME PHP$LOU")]
        [InlineData("JD28-222", "JD28-222S?")]
        [InlineData("GWUMS$%KAJSU", "GWUMS$%KAJSU6?")]
        [InlineData("918273736482-3838382", "918273736482-38383820A")]
        [InlineData("120.87F", "120.87FW/")]
        [InlineData("ABC.1234.ABC", "ABC.1234.ABCQE")]
        [InlineData("CODE93CHECKDIGIT", "CODE93CHECKDIGITGI")]
        [InlineData("BARCODE", "BARCODE9Z")]
        [InlineData("JDJEUMNA.38347230", "JDJEUMNA.38347230J7")]
        [InlineData("GITHUB", "GITHUB1T")]
        [InlineData("VISUALSTUDIO2017", "VISUALSTUDIO20178+")]
        [InlineData("0123456789ABCDEFGHIJKLMNOP", "0123456789ABCDEFGHIJKLMNOP/=")]
        public void FormatBarcode_ShouldReturnFormattedBarcode(string input, string expected)
        {
            Assert.Equal(expected, Code93Encoder.FormatBarcode(input));
        }
    }
}