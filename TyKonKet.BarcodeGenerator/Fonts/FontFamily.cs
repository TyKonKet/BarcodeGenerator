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
            switch (fontFamily)
            {
                case FontFamilies.Arial:
                    return "Arial";
                case FontFamilies.Calibri:
                    return "Calibri";
                case FontFamilies.Cambria:
                    return "Cambria";
                case FontFamilies.ComicSans:
                    return "Comic Sans MS";
                case FontFamilies.Consolas:
                    return "Consolas";
                case FontFamilies.CourierNew:
                    return "Courier New";
                case FontFamilies.FranklinGothic:
                    return "Franklin Gothic";
                case FontFamilies.Georgia:
                    return "Georgia";
                case FontFamilies.Impact:
                    return "Impact";
                case FontFamilies.LucidaConsole:
                    return "Lucida Console";
                case FontFamilies.PalatinoLinotype:
                    return "Palatino Linotype";
                case FontFamilies.SegoeUI:
                    return "Segoe UI";
                case FontFamilies.Tahoma:
                    return "Tahoma";
                case FontFamilies.TimesNewRoman:
                    return "Times New Roman";
                case FontFamilies.TrebuchetMS:
                    return "Trebuchet MS";
                case FontFamilies.Verdana:
                    return "Verdana";
                case FontFamilies.DejaVuSerif:
                    return "DejaVu Serif";
                default:
                    throw new ArgumentOutOfRangeException(nameof(fontFamily), fontFamily, message: null);
            }
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
