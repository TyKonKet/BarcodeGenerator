using TyKonKet.BarcodeGenerator.Encoders.Abstract;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests.Encoders.Abstract
{
    public class EanEncoderTests
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
        public void EanGetCheckDigit(string input, string expected)
        {
            Assert.Equal(expected, EanEncoder.GetCheckDigit(input));
        }
    }
}