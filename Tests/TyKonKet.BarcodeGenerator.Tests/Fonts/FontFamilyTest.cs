using SkiaSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TyKonKet.BarcodeGenerator.Fonts;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests.Fonts
{
    public class UpcaEncoderTest
    {
        [Theory]
        [InlineData(FontFamilies.Arial)]
        [InlineData(FontFamilies.Calibri)]
        [InlineData(FontFamilies.Cambria)]
        [InlineData(FontFamilies.ComicSans)]
        [InlineData(FontFamilies.Consolas)]
        [InlineData(FontFamilies.CourierNew)]
        [InlineData(FontFamilies.FranklinGothic)]
        [InlineData(FontFamilies.Georgia)]
        [InlineData(FontFamilies.Impact)]
        [InlineData(FontFamilies.LucidaConsole)]
        [InlineData(FontFamilies.PalatinoLinotype)]
        [InlineData(FontFamilies.SegoeUI)]
        [InlineData(FontFamilies.Tahoma)]
        [InlineData(FontFamilies.TimesNewRoman)]
        [InlineData(FontFamilies.TrebuchetMS)]
        [InlineData(FontFamilies.Verdana)]
        public void ValidateFontFamily_ShouldReturnExpectedFamilyName(FontFamilies family)
        {
            var expected = FontFamily.FromFontFamilies(family);
            var typeface = SKTypeface.FromFamilyName(expected);
            Assert.Equal(expected, typeface.FamilyName);
        }

        [Theory]
        [InlineData("Arial")]
        [InlineData("Calibri")]
        [InlineData("Cambria")]
        [InlineData("Comic Sans MS")]
        [InlineData("Consolas")]
        [InlineData("Courier New")]
        [InlineData("Franklin Gothic")]
        [InlineData("Georgia")]
        [InlineData("Impact")]
        [InlineData("Lucida Console")]
        [InlineData("Palatino Linotype")]
        [InlineData("Segoe UI")]
        [InlineData("Tahoma")]
        [InlineData("Times New Roman")]
        [InlineData("Trebuchet MS")]
        [InlineData("Verdana")]
        public void ImplicitConversionFromString_ShouldReturnFontFamilyInstance(string familyName)
        {
            FontFamily fontFamily = familyName;
            Assert.Equal(familyName, fontFamily.ToString());
        }

        [Theory]
        [InlineData(FontFamilies.Arial)]
        [InlineData(FontFamilies.Calibri)]
        [InlineData(FontFamilies.Cambria)]
        [InlineData(FontFamilies.ComicSans)]
        [InlineData(FontFamilies.Consolas)]
        [InlineData(FontFamilies.CourierNew)]
        [InlineData(FontFamilies.FranklinGothic)]
        [InlineData(FontFamilies.Georgia)]
        [InlineData(FontFamilies.Impact)]
        [InlineData(FontFamilies.LucidaConsole)]
        [InlineData(FontFamilies.PalatinoLinotype)]
        [InlineData(FontFamilies.SegoeUI)]
        [InlineData(FontFamilies.Tahoma)]
        [InlineData(FontFamilies.TimesNewRoman)]
        [InlineData(FontFamilies.TrebuchetMS)]
        [InlineData(FontFamilies.Verdana)]
        public void ImplicitConversionFromEnum_ShouldReturnFontFamilyInstance(FontFamilies family)
        {
            FontFamily fontFamily = family;
            var expected = FontFamily.FromFontFamilies(family);
            Assert.Equal(expected, fontFamily.ToString());
        }
    }
}
