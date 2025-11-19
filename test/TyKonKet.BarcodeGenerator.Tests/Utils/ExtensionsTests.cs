using System;
using TyKonKet.BarcodeGenerator.Utils;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests.Utils
{
    public class ExtensionsTests
    {
        [Theory]
        [InlineData('0', 0)]
        [InlineData('1', 1)]
        [InlineData('2', 2)]
        [InlineData('3', 3)]
        [InlineData('4', 4)]
        [InlineData('5', 5)]
        [InlineData('6', 6)]
        [InlineData('7', 7)]
        [InlineData('8', 8)]
        [InlineData('9', 9)]
        public void ToInt_ShouldConvertNumericCharToInteger(char input, int expected)
        {
            // Act
            var result = input.ToInt();

            // Assert
            Assert.Equal(expected, result);
        }

#if DEBUG
        [Theory]
        [InlineData('a')]
        [InlineData('Z')]
        [InlineData(' ')]
        [InlineData('-')]
        [InlineData('!')]
        public void ToInt_ShouldThrowArgumentOutOfRangeException_ForNonNumericChar(char input)
        {
            // Act & Assert
            var exception = Assert.Throws<ArgumentOutOfRangeException>(() => input.ToInt());
            Assert.Equal("digitChar", exception.ParamName);
        }
#endif
    }
}
