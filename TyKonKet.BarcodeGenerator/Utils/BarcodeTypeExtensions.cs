// Copyright (c) 2020-2025 TyKonKet and contributors
// Licensed under the MIT License. See LICENSE in the repository root for full license information.

using System.Collections.Concurrent;
using System.Reflection;
using TyKonKet.BarcodeGenerator.Attributes;

namespace TyKonKet.BarcodeGenerator.Utils
{
    /// <summary>
    /// Provides extension methods for the <see cref="BarcodeTypes"/> enum.
    /// </summary>
    public static class BarcodeTypeExtensions
    {
        private static readonly ConcurrentDictionary<BarcodeTypes, string> DisplayNameCache = new();

        /// <summary>
        /// Retrieves the display name of the specified barcode encoding.
        /// </summary>
        /// <param name="e">The barcode encoding type.</param>
        /// <returns>The display name of the barcode encoding, or the enum name if no display name is found.</returns>
        public static string GetDisplayName(this BarcodeTypes e)
        {
            return DisplayNameCache.GetOrAdd(e, key =>
            {
                var enumName = key.ToString();

                var info = typeof(BarcodeTypes).GetRuntimeField(enumName);
                if (info == null)
                {
                    return enumName;
                }

                var attribute = info.GetCustomAttribute<BarcodeEncodingAttribute>(inherit: false);
                return attribute?.Name ?? enumName;
            });
        }
    }
}
