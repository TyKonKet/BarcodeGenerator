using System;
using TyKonKet.BarcodeGenerator.Utils;
using TyKonKet.BarcodeGenerator;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests
{
    public class EncodesExtensionsTests
    {
        [Fact]
        public void GetDisplayName_ShouldReturnCorrectDisplayName()
        {
            // Arrange
            var barcodeType = BarcodeTypes.Ean13;

            // Act
            var displayName = barcodeType.GetDisplayName();

            // Assert
            Assert.Equal("EAN-13", displayName); // Replace "EAN-13" with the actual display name if different
        }

        [Fact]
        public void GetDisplayName_ShouldReturnEnumNameIfNoAttribute()
        {
            // Arrange
            var barcodeType = (BarcodeTypes)999; // Invalid enum value

            // Act
            var displayName = barcodeType.GetDisplayName();

            // Assert
            Assert.Equal("999", displayName);
        }
    }
}
