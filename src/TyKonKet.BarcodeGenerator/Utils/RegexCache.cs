// Copyright (c) 2020-2025 TyKonKet and contributors
// Licensed under the MIT License. See LICENSE in the repository root for full license information.

using System;
using System.Diagnostics;
using System.Text.RegularExpressions;

namespace TyKonKet.BarcodeGenerator.Utils
{
    /// <summary>
    /// Provides cached regular expressions for barcode validation.
    /// </summary>
    [DebuggerDisplay("RegexCache")]
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

        // Pattern for validating Code 128 barcodes (all ASCII printable characters 0-127 are allowed).
        private const string Code128AllowedCharsetPattern = "^[\x00-\x7F]+$";

#if NET8_0_OR_GREATER
        /// <summary>
        /// Gets the compiled regular expression for validating Code 128 barcodes.
        /// </summary>
        /// <returns>A compiled Regex object for Code 128 barcode validation.</returns>
        [GeneratedRegex(Code128AllowedCharsetPattern, RegexOptions.None, 1000)]
        private static partial Regex GetCode128AllowedCharsetRegex();

        /// <summary>
        /// Gets the cached regular expression for validating Code 128 barcodes.
        /// </summary>
        public static Regex Code128AllowedCharsetRegex => GetCode128AllowedCharsetRegex();
#else
        /// <summary>
        /// Gets the cached regular expression for validating Code 128 barcodes.
        /// </summary>
        public static Regex Code128AllowedCharsetRegex { get; } = new Regex(Code128AllowedCharsetPattern, RegexOptions.Compiled, TimeSpan.FromSeconds(1));
#endif

        // Pattern for validating Code 39 barcodes (uppercase letters, digits, and specific symbols are allowed).
        private const string Code39AllowedCharsetPattern = "^[A-Z0-9 .$+%\\-\\/]+$";

#if NET8_0_OR_GREATER
        /// <summary>
        /// Gets the compiled regular expression for validating Code 39 barcodes.
        /// </summary>
        /// <returns>A compiled Regex object for Code 39 barcode validation.</returns>
        [GeneratedRegex(Code39AllowedCharsetPattern, RegexOptions.None, 1000)]
        private static partial Regex GetCode39AllowedCharsetRegex();

        /// <summary>
        /// Gets the cached regular expression for validating Code 39 barcodes.
        /// </summary>
        public static Regex Code39AllowedCharsetRegex => GetCode39AllowedCharsetRegex();
#else
        /// <summary>
        /// Gets the cached regular expression for validating Code 39 barcodes.
        /// </summary>
        public static Regex Code39AllowedCharsetRegex { get; } = new Regex(Code39AllowedCharsetPattern, RegexOptions.Compiled, TimeSpan.FromSeconds(1));
#endif

        // Pattern for validating Codabar barcodes (digits, specific symbols, and start/stop characters A-D are allowed).
        private const string CodabarAllowedCharsetPattern = "^[A-D][0-9$:\\-\\/.+]+[A-D]$";

#if NET8_0_OR_GREATER
        /// <summary>
        /// Gets the compiled regular expression for validating Codabar barcodes.
        /// </summary>
        /// <returns>A compiled Regex object for Codabar barcode validation.</returns>
        [GeneratedRegex(CodabarAllowedCharsetPattern, RegexOptions.None, 1000)]
        private static partial Regex GetCodabarAllowedCharsetRegex();

        /// <summary>
        /// Gets the cached regular expression for validating Codabar barcodes.
        /// </summary>
        public static Regex CodabarAllowedCharsetRegex => GetCodabarAllowedCharsetRegex();
#else
        /// <summary>
        /// Gets the cached regular expression for validating Codabar barcodes.
        /// </summary>
        public static Regex CodabarAllowedCharsetRegex { get; } = new Regex(CodabarAllowedCharsetPattern, RegexOptions.Compiled, TimeSpan.FromSeconds(1));
#endif

        // Pattern for validating Interleaved 2 of 5 barcodes (only digits are allowed).
        private const string Interleaved2of5AllowedCharsetPattern = "^[0-9]+$";

#if NET8_0_OR_GREATER
        /// <summary>
        /// Gets the compiled regular expression for validating Interleaved 2 of 5 barcodes.
        /// </summary>
        /// <returns>A compiled Regex object for Interleaved 2 of 5 barcode validation.</returns>
        [GeneratedRegex(Interleaved2of5AllowedCharsetPattern, RegexOptions.None, 1000)]
        private static partial Regex GetInterleaved2of5AllowedCharsetRegex();

        /// <summary>
        /// Gets the cached regular expression for validating Interleaved 2 of 5 barcodes.
        /// </summary>
        public static Regex Interleaved2of5AllowedCharsetRegex => GetInterleaved2of5AllowedCharsetRegex();
#else
        /// <summary>
        /// Gets the cached regular expression for validating Interleaved 2 of 5 barcodes.
        /// </summary>
        public static Regex Interleaved2of5AllowedCharsetRegex { get; } = new Regex(Interleaved2of5AllowedCharsetPattern, RegexOptions.Compiled, TimeSpan.FromSeconds(1));
#endif

    }
}
