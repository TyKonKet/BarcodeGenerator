using System.Diagnostics.CodeAnalysis;
using TyKonKet.BarcodeGenerator.Attributes;

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// Available barcode encoding types
    /// </summary>
    [SuppressMessage("ApiDesign", "SS039:An enum should specify a default value", Justification = "NotThisTime")]
    public enum BarcodeEncodings
    {
        /// <summary>
        /// European Article Number (EAN) 13
        /// </summary>
        [BarcodeEncoding("EAN-13")]
        Ean13 = 1,

        /// <summary>
        /// Universal Product Code (UPC) A
        /// </summary>
        [BarcodeEncoding("UPC-A")]
        Upca = 2,

        /// <summary>
        /// International Standard Book Number (ISBN) 13
        /// </summary>
        [BarcodeEncoding("ISBN-13")]
        Isbn13 = 3,

        /// <summary>
        /// European Article Number (EAN) 8
        /// </summary>
        [BarcodeEncoding("EAN-8")]
        Ean8 = 4,

        /// <summary>
        /// Code 128
        /// </summary>
        [BarcodeEncoding("CODE-128")]
        Code128 = 5,

        /// <summary>
        /// Code 39
        /// </summary>
        [BarcodeEncoding("CODE-39")]
        Code39 = 6,

        /// <summary>
        /// Code 93
        /// </summary>
        [BarcodeEncoding("CODE-93")]
        Code93 = 7,
    }
}