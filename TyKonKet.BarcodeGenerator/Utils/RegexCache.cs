using System;
using System.Text.RegularExpressions;

namespace TyKonKet.BarcodeGenerator.Utils
{
    internal static partial class RegexCache
    {
        private const string EanAllowedCharsetPattern = "^[0-9]+$";

#if NET8_0_OR_GREATER
        [GeneratedRegex(EanAllowedCharsetPattern, RegexOptions.None, 1000)]
        private static partial Regex GetEanAllowedCharsetRegex();

        public static Regex EanAllowedCharsetRegex => GetEanAllowedCharsetRegex();
#else
        public static Regex EanAllowedCharsetRegex { get; } = new Regex(EanAllowedCharsetPattern, RegexOptions.Compiled, TimeSpan.FromSeconds(1));
#endif

        private const string Code93AllowedCharsetPattern = "^[A-Z0-9 .$+%\\-\\/]+$";

#if NET8_0_OR_GREATER
        [GeneratedRegex(Code93AllowedCharsetPattern, RegexOptions.None, 1000)]
        private static partial Regex GetCode93AllowedCharsetRegex();

        public static Regex Code93AllowedCharsetRegex => GetCode93AllowedCharsetRegex();
#else
        public static Regex Code93AllowedCharsetRegex { get; } = new Regex(Code93AllowedCharsetPattern, RegexOptions.Compiled, TimeSpan.FromSeconds(1));
#endif

    }
}
