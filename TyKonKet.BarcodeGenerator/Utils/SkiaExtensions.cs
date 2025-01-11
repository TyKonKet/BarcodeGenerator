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
        public static string ToFileExtension(this SKEncodedImageFormat format)
        {
            switch (format)
            {
                case SKEncodedImageFormat.Jpegxl:
                    return "jxl";
                case SKEncodedImageFormat.Avif:
                    return "avif";
                case SKEncodedImageFormat.Dng:
                    return "dng";
                case SKEncodedImageFormat.Astc:
                    return "astc";
                case SKEncodedImageFormat.Ktx:
                    return "ktx";
                case SKEncodedImageFormat.Pkm:
                    return "pkm";
                case SKEncodedImageFormat.Jpeg:
                    return "jpg";
                case SKEncodedImageFormat.Png:
                    return "png";
                case SKEncodedImageFormat.Webp:
                    return "webp";
                case SKEncodedImageFormat.Wbmp:
                    return "wbmp";
                case SKEncodedImageFormat.Ico:
                    return "ico";
                case SKEncodedImageFormat.Bmp:
                    return "bmp";
                case SKEncodedImageFormat.Gif:
                    return "gif";
                case SKEncodedImageFormat.Heif:
                    return "heif";
                default:
                    return format.ToString().ToLower(CultureInfo.CurrentCulture);
            }
        }
    }
}
