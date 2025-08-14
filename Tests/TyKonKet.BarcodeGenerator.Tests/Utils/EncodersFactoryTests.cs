using System;
using TyKonKet.BarcodeGenerator.Encoders;
using TyKonKet.BarcodeGenerator.Utils;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests.Utils
{
    public class EncodersFactoryTests
    {
        [Theory]
        [InlineData(BarcodeTypes.Ean13, typeof(Ean13Encoder))]
        [InlineData(BarcodeTypes.Ean8, typeof(Ean8Encoder))]
        [InlineData(BarcodeTypes.Upca, typeof(UpcaEncoder))]
        [InlineData(BarcodeTypes.Isbn13, typeof(Isbn13Encoder))]
        [InlineData(BarcodeTypes.Code93, typeof(Code93Encoder))]
        public void Create_ShouldReturnCorrectEncoderInstance(BarcodeTypes barcodeType, Type expectedEncoderType)
        {
            // Arrange
            var options = new BarcodeOptions { Type = barcodeType };

            // Act
            var encoder = EncodersFactory.Create(options);

            // Assert
            Assert.NotNull(encoder);
            Assert.IsAssignableFrom(expectedEncoderType, encoder);
        }

        [Fact]
        public void Create_ShouldThrowInvalidOperationException_ForUnknownEncoderType()
        {
            // Arrange
            var options = new BarcodeOptions { Type = (BarcodeTypes)999 }; // An invalid enum value

            // Act & Assert
            var exception = Assert.Throws<InvalidOperationException>(() => EncodersFactory.Create(options));
            Assert.Contains("isn't a known Encoder type", exception.Message);
        }

        [Fact]
        public void Create_ShouldUseCacheForRepeatedCalls()
        {
            // Arrange
            var options = new BarcodeOptions { Type = BarcodeTypes.Ean13 };

            // Act
            var encoder1 = EncodersFactory.Create(options);
            var encoder2 = EncodersFactory.Create(options);

            // Assert
            Assert.NotNull(encoder1);
            Assert.NotNull(encoder2);
            Assert.IsType<Ean13Encoder>(encoder1);
            Assert.IsType<Ean13Encoder>(encoder2);
            Assert.NotSame(encoder1, encoder2); // Should be new instances
        }
    }
}
