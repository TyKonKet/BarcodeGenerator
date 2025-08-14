using TyKonKet.BarcodeGenerator.Utils;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests.Utils
{
    public class RegexCacheTests
    {
        [Theory]
        [InlineData("1234567890")]
        [InlineData("0")]
        [InlineData("9")]
        [InlineData("01234567890123456789")]
        public void EanAllowedCharsetRegex_ShouldMatch_ValidEanStrings(string input)
        {
            // Act
            var isMatch = RegexCache.EanAllowedCharsetRegex.IsMatch(input);

            // Assert
            Assert.True(isMatch);
        }

        [Theory]
        [InlineData("123a")]
        [InlineData("abc")]
        [InlineData("123-456")]
        [InlineData("123 456")]
        [InlineData("")]
        [InlineData(" ")]
        [InlineData(null)]
        public void EanAllowedCharsetRegex_ShouldNotMatch_InvalidEanStrings(string input)
        {
            // Act & Assert
            if (input is null)
            {
                Assert.Throws<System.ArgumentNullException>(() => RegexCache.EanAllowedCharsetRegex.IsMatch(input));
            }
            else
            {
                var isMatch = RegexCache.EanAllowedCharsetRegex.IsMatch(input);
                Assert.False(isMatch);
            }
        }

        [Theory]
        [InlineData("ABCDEFGHIJKLMNOPQRSTUVWXYZ")]
        [InlineData("0123456789")]
        [InlineData(" .$+%/-")]
        [InlineData("CODE 93 TEST")]
        [InlineData("TEST-1/A+B$C.")]
        public void Code93AllowedCharsetRegex_ShouldMatch_ValidCode93Strings(string input)
        {
            // Act
            var isMatch = RegexCache.Code93AllowedCharsetRegex.IsMatch(input);

            // Assert
            Assert.True(isMatch);
        }

        [Theory]
        [InlineData("abcdefghijklmnopqrstuvwxyz")] // Lowercase
        [InlineData("Test")] // Mixed case
        [InlineData("CODE_93")] // Underscore
        [InlineData("TEST!")] // Exclamation mark
        [InlineData(null)]
        public void Code93AllowedCharsetRegex_ShouldNotMatch_InvalidCode93Strings(string input)
        {
            // Act & Assert
            if (input is null)
            {
                Assert.Throws<System.ArgumentNullException>(() => RegexCache.Code93AllowedCharsetRegex.IsMatch(input));
            }
            else
            {
                var isMatch = RegexCache.Code93AllowedCharsetRegex.IsMatch(input);
                Assert.False(isMatch);
            }
        }
    }
}
