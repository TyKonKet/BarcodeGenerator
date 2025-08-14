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
        public static IEnumerable<object[]> ValidateFontFamily_ShouldReturnExpectedFamilyName_Data()
        {
            var allData = new List<object[]>();

            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                allData.Add([FontFamilies.Arial]);
                allData.Add([FontFamilies.Calibri]);
                allData.Add([FontFamilies.Cambria]);
                allData.Add([FontFamilies.ComicSans]);
                allData.Add([FontFamilies.Consolas]);
                allData.Add([FontFamilies.CourierNew]);
                allData.Add([FontFamilies.FranklinGothic]);
                allData.Add([FontFamilies.Georgia]);
                allData.Add([FontFamilies.Impact]);
                allData.Add([FontFamilies.LucidaConsole]);
                allData.Add([FontFamilies.PalatinoLinotype]);
                allData.Add([FontFamilies.SegoeUI]);
                allData.Add([FontFamilies.Tahoma]);
                allData.Add([FontFamilies.TimesNewRoman]);
                allData.Add([FontFamilies.TrebuchetMS]);
                allData.Add([FontFamilies.Verdana]);
            }
            else
            {
                allData.Add([FontFamilies.DejaVuSerif]);
            }

            return allData;
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
