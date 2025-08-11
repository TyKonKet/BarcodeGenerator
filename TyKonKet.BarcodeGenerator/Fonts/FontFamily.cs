using System;

namespace TyKonKet.BarcodeGenerator.Fonts
{
    /// <summary>
    /// Represents a font family used for barcode generation.
    /// </summary>
    public sealed class FontFamily
    {
        /// <summary>
        /// The name of the font family.
        /// </summary>
        private readonly string familyName;

        /// <summary>
        /// Initializes a new instance of the <see cref="FontFamily"/> class with the specified family name.
        /// </summary>
        /// <param name="familyName">The name of the font family.</param>
        private FontFamily(string familyName)
        {
            this.familyName = familyName;
        }

        /// <summary>
        /// Converts a <see cref="FontFamilies"/> enum value to its corresponding font family name.
        /// </summary>
        /// <param name="fontFamily">The <see cref="FontFamilies"/> enum value.</param>
        /// <returns>The name of the font family.</returns>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the <paramref name="fontFamily"/> is not a valid <see cref="FontFamilies"/> value.</exception>
        internal static string FromFontFamilies(FontFamilies fontFamily)
        {
            return fontFamily switch
            {
                FontFamilies.Arial => "Arial",
                FontFamilies.Calibri => "Calibri",
                FontFamilies.Cambria => "Cambria",
                FontFamilies.ComicSans => "Comic Sans MS",
                FontFamilies.Consolas => "Consolas",
                FontFamilies.CourierNew => "Courier New",
                FontFamilies.FranklinGothic => "Franklin Gothic",
                FontFamilies.Georgia => "Georgia",
                FontFamilies.Impact => "Impact",
                FontFamilies.LucidaConsole => "Lucida Console",
                FontFamilies.PalatinoLinotype => "Palatino Linotype",
                FontFamilies.SegoeUI => "Segoe UI",
                FontFamilies.Tahoma => "Tahoma",
                FontFamilies.TimesNewRoman => "Times New Roman",
                FontFamilies.TrebuchetMS => "Trebuchet MS",
                FontFamilies.Verdana => "Verdana",
                FontFamilies.DejaVuSerif => "DejaVu Serif",
                _ => throw new ArgumentOutOfRangeException(nameof(fontFamily), fontFamily, message: null),
            };
        }

        /// <summary>
        /// Returns the name of the font family.
        /// </summary>
        /// <returns>The name of the font family.</returns>
        public override string ToString()
        {
            return this.familyName;
        }

        /// <summary>
        /// Implicitly converts a <see cref="FontFamilies"/> enum value to a <see cref="FontFamily"/> instance.
        /// </summary>
        /// <param name="fontFamily">The <see cref="FontFamilies"/> enum value.</param>
        public static implicit operator FontFamily(FontFamilies fontFamily)
        {
            return new FontFamily(FromFontFamilies(fontFamily));
        }

        /// <summary>
        /// Implicitly converts a string to a <see cref="FontFamily"/> instance.
        /// </summary>
        /// <param name="fontFamily">The name of the font family.</param>
        public static implicit operator FontFamily(string fontFamily)
        {
            return new FontFamily(fontFamily);
        }
    }
}
