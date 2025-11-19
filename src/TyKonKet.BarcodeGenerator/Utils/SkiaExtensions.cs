// Copyright (c) 2020-2025 TyKonKet and contributors
// Licensed under the MIT License. See LICENSE in the repository root for full license information.

using SkiaSharp;
using System.Globalization;

namespace TyKonKet.BarcodeGenerator.Utils
{
    /// <summary>
    /// Provides extension methods for SkiaSharp types.
    /// </summary>
    public static class SkiaExtensions
    {
        /// <summary>
        /// Gets the file extension associated with the given <see cref="SKEncodedImageFormat"/>.
        /// </summary>
        /// <param name="format">The image format.</param>
        /// <returns>The file extension for the image format.</returns>
        /// <example>
        /// <code>
        /// SKEncodedImageFormat format = SKEncodedImageFormat.Png;
        /// string extension = format.ToFileExtension(); // returns "png"
        /// </code>
        /// </example>
        public static string ToFileExtension(this SKEncodedImageFormat format)
        {
            return format switch
            {
                SKEncodedImageFormat.Jpegxl => "jxl",
                SKEncodedImageFormat.Avif => "avif",
                SKEncodedImageFormat.Dng => "dng",
                SKEncodedImageFormat.Astc => "astc",
                SKEncodedImageFormat.Ktx => "ktx",
                SKEncodedImageFormat.Pkm => "pkm",
                SKEncodedImageFormat.Jpeg => "jpg",
                SKEncodedImageFormat.Png => "png",
                SKEncodedImageFormat.Webp => "webp",
                SKEncodedImageFormat.Wbmp => "wbmp",
                SKEncodedImageFormat.Ico => "ico",
                SKEncodedImageFormat.Bmp => "bmp",
                SKEncodedImageFormat.Gif => "gif",
                SKEncodedImageFormat.Heif => "heif",
                _ => format.ToString().ToLower(CultureInfo.CurrentCulture),
            };
        }
    }
}
