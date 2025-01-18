using System.Diagnostics.CodeAnalysis;

namespace TyKonKet.BarcodeGenerator.Fonts
{
    /// <summary>
    /// Represents the font families available for barcode generation.
    /// </summary>
    [SuppressMessage("ApiDesign", "SS039:An enum should specify a default value", Justification = "NotNeeded")]
    public enum FontFamilies
    {
        /// <summary>
        /// Arial font family.
        /// </summary>
        Arial = 0,

        /// <summary>
        /// Calibri font family.
        /// </summary>
        Calibri = 1,

        /// <summary>
        /// Cambria font family.
        /// </summary>
        Cambria = 2,

        /// <summary>
        /// Comic Sans font family.
        /// </summary>
        ComicSans = 3,

        /// <summary>
        /// Consolas font family.
        /// </summary>
        Consolas = 4,

        /// <summary>
        /// Courier New font family.
        /// </summary>
        CourierNew = 5,

        /// <summary>
        /// Franklin Gothic font family.
        /// </summary>
        FranklinGothic = 6,

        /// <summary>
        /// Georgia font family.
        /// </summary>
        Georgia = 7,

        /// <summary>
        /// Impact font family.
        /// </summary>
        Impact = 8,

        /// <summary>
        /// Lucida Console font family.
        /// </summary>
        LucidaConsole = 9,

        /// <summary>
        /// Palatino Linotype font family.
        /// </summary>
        PalatinoLinotype = 10,

        /// <summary>
        /// Segoe UI font family.
        /// </summary>
        SegoeUI = 11,

        /// <summary>
        /// Tahoma font family.
        /// </summary>
        Tahoma = 12,

        /// <summary>
        /// Times New Roman font family.
        /// </summary>
        TimesNewRoman = 13,

        /// <summary>
        /// Trebuchet MS font family.
        /// </summary>
        TrebuchetMS = 14,

        /// <summary>
        /// Verdana font family.
        /// </summary>
        Verdana = 15,
    }
}
