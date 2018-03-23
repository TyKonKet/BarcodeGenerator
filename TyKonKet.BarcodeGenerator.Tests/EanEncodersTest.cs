using System;
using TyKonKet.BarcodeGenerator.Encoders;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests
{
    public class EncodersTest
    {
        [Theory]
        // Random
        [InlineData("978123456789", "7")]
        [InlineData("9036101", "2")]
        [InlineData("978020137964", "8")]
        [InlineData("9092306", "7")]
        [InlineData("273420131962", "0")]
        [InlineData("273420781962", "9")]
        [InlineData("9092218", "3")]
        [InlineData("978156216789", "9")]
        [InlineData("978156216162", "0")]
        // All kind of result with 12 chars
        [InlineData("978323456773", "0")]
        [InlineData("978323455773", "1")]
        [InlineData("979303455773", "2")]
        [InlineData("979303455073", "3")]
        [InlineData("660303455071", "4")]
        [InlineData("660141452071", "5")]
        [InlineData("470141452080", "6")]
        [InlineData("660141452080", "7")]
        [InlineData("660141452070", "8")]
        [InlineData("460141452080", "9")]
        // All kind of result with 7 chars
        [InlineData("6461524", "0")]
        [InlineData("4128314", "1")]
        [InlineData("6461520", "2")]
        [InlineData("6491520", "3")]
        [InlineData("9037324", "4")]
        [InlineData("4123324", "5")]
        [InlineData("6491529", "6")]
        [InlineData("4628304", "7")]
        [InlineData("4628394", "8")]
        [InlineData("4628384", "9")]
        public void EanCheckDigit(string input, string expected)
        {
            Assert.Equal(expected, EanEncoder._checkDigit(input));
        }

        [Theory]
        [InlineData("28384", "00283847")]
        [InlineData("9036101", "90361012")]
        [InlineData("90361012", "90361012")]
        [InlineData("90361012456", "90361012")]
        public void Ean8Validate(string input, string expected)
        {
            Assert.Equal(expected, EanEncoder._validate(input, 8));
        }

        [Theory]
        [InlineData("9781234567897", "9781234567897")]
        [InlineData("978123456789", "9781234567897")]
        [InlineData("123456789", "0001234567895")]
        [InlineData("9781234567897532", "9781234567897")]
        public void Ean13Validate(string input, string expected)
        {
            Assert.Equal(expected, EanEncoder._validate(input, 13));
        }

        [Theory]
        [InlineData("9781234567897", "978123456789")]
        [InlineData("978123456789", "978123456789")]
        [InlineData("123456789", "978123456789")]
        [InlineData("9781234567897532", "978123456789")]
        [InlineData("34567897532", "978345678975")]
        [InlineData("567894567897532", "978567894567")]
        public void Iasb13Validate(string input, string expected)
        {
            Assert.Equal(expected, Isbn13Encoder._isbnValidate(input));
        }

        [Theory]
        [InlineData("978123456786", "978123456786")]
        [InlineData("97812345678", "978123456786")]
        [InlineData("12345678", "000123456784")]
        [InlineData("97812345678975", "978123456786")]
        public void UpcaValidate(string input, string expected)
        {
            Assert.Equal(expected, EanEncoder._validate(input, 12));
        }

        [Theory]
        [InlineData("6461524a")]
        [InlineData("6461A524")]
        [InlineData("646-1524")]
        [InlineData("64.61524")]
        public void EanCharsetCheckExceptions(string barcode)
        {
            Assert.Throws<FormatException>(() => { EanEncoder._checkCharset(barcode); });
        }

        [Theory]
        [InlineData("90361012")]
        [InlineData("9781234567897")]
        [InlineData("978123456789")]
        [InlineData("978123456786")]
        public void EanCharsetCheck(string barcode)
        {
            Assert.True(EanEncoder._checkCharset(barcode));
        }

        [Theory]
        [InlineData("90311017", "1010001011000110101111010011001010101100110111001011001101000100101")]
        [InlineData("28374121", "1010010011011011101111010111011010101011100110011011011001100110101")]
        [InlineData("81274635", "1010110111001100100100110111011010101011100101000010000101001110101")]
        [InlineData("83928345", "1010110111011110100010110010011010101001000100001010111001001110101")]
        [InlineData("12345670", "1010011001001001101111010100011010101001110101000010001001110010101")]
        public void Ean8EncodeBars(string input, string expected)
        {
            Assert.Equal(expected, Ean8Encoder._encodeBars(input));
        }

        [Theory]
        [InlineData("9780201379624",
            "10101110110001001010011100100110100111001100101010100001010001001110100101000011011001011100101")]
        [InlineData("2837491746340",
            "10101101110111101001000100111010001011011001101010100010010111001010000100001010111001110010101")]
        [InlineData("8829647458294",
            "10101101110011011000101100001010011101011101101010101110010011101001000110110011101001011100101")]
        [InlineData("1234567891231",
            "10100100110111101001110101100010000101001000101010100100011101001100110110110010000101100110101")]
        [InlineData("7352837294767",
            "10101111010111001001001100010010111101001000101010110110011101001011100100010010100001000100101")]
        public void Ean13EncodeBars(string input, string expected)
        {
            Assert.Equal(expected, Ean13Encoder._encodeBars(input));
        }

        [Theory]
        [InlineData("725272730706",
            "10101110110010011011000100100110111011001001101010100010010000101110010100010011100101010000101")]
        [InlineData("827364192833",
            "10101101110010011011101101111010101111010001101010110011011101001101100100100010000101000010101")]
        [InlineData("192748273645",
            "10100110010001011001001101110110100011011011101010110110010001001000010101000010111001001110101")]
        [InlineData("112233445562",
            "10100110010011001001001100100110111101011110101010101110010111001001110100111010100001101100101")]
        [InlineData("998877665548",
            "10100010110001011011011101101110111011011101101010101000010100001001110100111010111001001000101")]
        public void UpcaEncodeBars(string input, string expected)
        {
            Assert.Equal(expected, UpcaEncoder._encodeBars(input));
        }
    }
}
