// Copyright (c) 2020-2025 TyKonKet and contributors
// Licensed under the MIT License. See LICENSE in the repository root for full license information.

using System.Diagnostics.CodeAnalysis;
using TyKonKet.BarcodeGenerator.Attributes;

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// Represents the available barcode encoding types.
    /// </summary>
    [SuppressMessage("ApiDesign", "SS039:An enum should specify a default value", Justification = "NotThisTime")]
    public enum BarcodeTypes
    {
        /// <summary>
        /// European Article Number (EAN) 13. Used for marking products often sold at retail point of sale.
        /// </summary>
        [BarcodeEncoding("EAN-13")]
        Ean13 = 1,

        /// <summary>
        /// Universal Product Code (UPC) A. Widely used in the United States for tracking trade items in stores.
        /// </summary>
        [BarcodeEncoding("UPC-A")]
        Upca = 2,

        /// <summary>
        /// International Standard Book Number (ISBN) 13. Used to identify books and similar publications.
        /// </summary>
        [BarcodeEncoding("ISBN-13")]
        Isbn13 = 3,

        /// <summary>
        /// European Article Number (EAN) 8. A shorter version of the EAN-13 barcode, used on small packages.
        /// </summary>
        [BarcodeEncoding("EAN-8")]
        Ean8 = 4,

        /// <summary>
        /// Code 128. A high-density barcode symbology used for alphanumeric or numeric-only barcodes.
        /// </summary>
        [BarcodeEncoding("CODE-128")]
        Code128 = 5,

        /// <summary>
        /// Code 39. An alphanumeric barcode used in various industries including automotive and defense.
        /// </summary>
        [BarcodeEncoding("CODE-39")]
        Code39 = 6,

        /// <summary>
        /// Code 93. A more compact version of Code 39, used in logistics and inventory management.
        /// </summary>
        [BarcodeEncoding("CODE-93")]
        Code93 = 7,

        /// <summary>
        /// Codabar. Used in libraries, blood banks, and logistics for serial number tracking and labeling.
        /// </summary>
        [BarcodeEncoding("CODABAR")]
        Codabar = 8,

        /// <summary>
        /// Universal Product Code (UPC) E. A compact version of UPC-A for small packages where space is limited.
        /// </summary>
        [BarcodeEncoding("UPC-E")]
        Upce = 9,

        /// <summary>
        /// Interleaved 2 of 5 (ITF). A high-density numeric barcode used in distribution and warehouse management.
        /// </summary>
        [BarcodeEncoding("ITF")]
        Interleaved2of5 = 10,
    }
}
