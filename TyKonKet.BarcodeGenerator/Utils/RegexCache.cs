// Copyright (c) 2020-2025 TyKonKet and contributors
// Licensed under the MIT License. See LICENSE in the repository root for full license information.

using System;
using System.Text.RegularExpressions;

namespace TyKonKet.BarcodeGenerator.Utils
{
    /// <summary>
    /// Provides cached regular expressions for barcode validation.
    /// </summary>
    public static partial class RegexCache
    {
        // Pattern for validating EAN barcodes (only digits are allowed).
        private const string EanAllowedCharsetPattern = "^[0-9]+$";

#if NET8_0_OR_GREATER
        /// <summary>
        /// Gets the compiled regular expression for validating EAN barcodes.
        /// </summary>
        /// <returns>A compiled Regex object for EAN barcode validation.</returns>
        [GeneratedRegex(EanAllowedCharsetPattern, RegexOptions.None, 1000)]
        private static partial Regex GetEanAllowedCharsetRegex();

        /// <summary>
        /// Gets the cached regular expression for validating EAN barcodes.
        /// </summary>
        public static Regex EanAllowedCharsetRegex => GetEanAllowedCharsetRegex();
#else
        /// <summary>
        /// Gets the cached regular expression for validating EAN barcodes.
        /// </summary>
        public static Regex EanAllowedCharsetRegex { get; } = new Regex(EanAllowedCharsetPattern, RegexOptions.Compiled, TimeSpan.FromSeconds(1));
#endif

        // Pattern for validating Code 93 barcodes (uppercase letters, digits, and specific symbols are allowed).
        private const string Code93AllowedCharsetPattern = "^[A-Z0-9 .$+%\\-\\/]+$";

#if NET8_0_OR_GREATER
        /// <summary>
        /// Gets the compiled regular expression for validating Code 93 barcodes.
        /// </summary>
        /// <returns>A compiled Regex object for Code 93 barcode validation.</returns>
        [GeneratedRegex(Code93AllowedCharsetPattern, RegexOptions.None, 1000)]
        private static partial Regex GetCode93AllowedCharsetRegex();

        /// <summary>
        /// Gets the cached regular expression for validating Code 93 barcodes.
        /// </summary>
        public static Regex Code93AllowedCharsetRegex => GetCode93AllowedCharsetRegex();
#else
        /// <summary>
        /// Gets the cached regular expression for validating Code 93 barcodes.
        /// </summary>
        public static Regex Code93AllowedCharsetRegex { get; } = new Regex(Code93AllowedCharsetPattern, RegexOptions.Compiled, TimeSpan.FromSeconds(1));
#endif

    }
}
