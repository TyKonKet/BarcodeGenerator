using System;
using TyKonKet.BarcodeGenerator.Encoders;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests
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
        public void Code93CheckDigits(string input, string expected)
        {
            Assert.Equal(expected, Code93Encoder.CheckDigits(input));
        }


        [Theory]
        [InlineData("ABC-1234-aBC")]
        [InlineData("EHEHCIA-._SSS")]
        [InlineData("$VARNAME PHP?")]
        [InlineData("@ANDJEOW918273")]
        public void Code93CharsetCheckExceptions(string barcode)
        {
            Assert.Throws<FormatException>(() => { new Code93Encoder().ValidateCharset(barcode); });
        }

        [Theory]
        [InlineData("ABC-1234-ABC")]
        [InlineData("92736182345")]
        [InlineData("ANDJEOW918273")]
        [InlineData("EHEHCIA-.-SSS")]
        [InlineData(" /$+%$+/ ")]
        [InlineData("$ VARNAME PHP")]
        [InlineData("VAR VARNAME CSHARP")]
        public void Code93CharsetCheck(string barcode)
        {
            Assert.True(new Code93Encoder().ValidateCharset(barcode));
        }

        [Theory]
        [InlineData("ABC-1234-ABC",
            "1010111101101010001101001001101000101001011101010010001010001001010000101001010001001011101101010001101001001101000101010111101")]
        [InlineData("92736182345",
            "1010111101000010101010001001010100001010000101001000101010010001000100101010001001010000101001010001001001001010111101")]
        [InlineData("ANDJEOW918273",
            "1010111101101010001010001101100101001001101001100100101001011001011011001000010101010010001000100101010001001010100001010000101010111101")]
        [InlineData("EHEHCIA-.-7728",
            "1010111101100100101011001001100100101011001001101000101011000101101010001001011101110101001001011101010100001010100001010001001000100101010111101")]
        [InlineData(" /$+%$+/ ",
            "1010111101110100101011011101110010101011101101101011101110010101011101101011011101110100101010111101")]
        [InlineData("$ VARNAME PHP",
            "1010111101110010101110100101100110101101010001101100101010001101101010001010011001100100101110100101000101101011001001000101101010111101")]
        [InlineData("VAR VARNAME CSHARP",
            "1010111101100110101101010001101100101110100101100110101101010001101100101010001101101010001010011001100100101110100101101000101101011001011001001101010001101100101000101101010111101")]
        public void Code93EncodeBars(string input, string expected)
        {
            Assert.Equal(expected, Code93Encoder.EncodeBars(input));
        }
    }
}