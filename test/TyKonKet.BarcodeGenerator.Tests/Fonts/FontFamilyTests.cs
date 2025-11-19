using SkiaSharp;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using TyKonKet.BarcodeGenerator.Fonts;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests.Fonts
{
    /// <summary>
    /// Contains unit tests for the <see cref="FontFamily"/> class and <see cref="FontFamilies"/> enum.
    /// Tests font family implicit conversions, platform-specific behavior, and enum mappings.
    /// </summary>
    public class FontFamilyTests
    {
        public static TheoryData<FontFamilies> ValidateFontFamily_ShouldReturnExpectedFamilyName_Data()
        {
            var data = new TheoryData<FontFamilies>();

            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                data.Add(FontFamilies.Arial);
                data.Add(FontFamilies.Calibri);
                data.Add(FontFamilies.Cambria);
                data.Add(FontFamilies.ComicSans);
                data.Add(FontFamilies.Consolas);
                data.Add(FontFamilies.CourierNew);
                data.Add(FontFamilies.FranklinGothic);
                data.Add(FontFamilies.Georgia);
                data.Add(FontFamilies.Impact);
                data.Add(FontFamilies.LucidaConsole);
                data.Add(FontFamilies.PalatinoLinotype);
                data.Add(FontFamilies.SegoeUI);
                data.Add(FontFamilies.Tahoma);
                data.Add(FontFamilies.TimesNewRoman);
                data.Add(FontFamilies.TrebuchetMS);
                data.Add(FontFamilies.Verdana);
            }
            else
            {
                data.Add(FontFamilies.DejaVuSerif);
            }

            return data;
        }

        [Theory]
        [MemberData(nameof(ValidateFontFamily_ShouldReturnExpectedFamilyName_Data))]
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
