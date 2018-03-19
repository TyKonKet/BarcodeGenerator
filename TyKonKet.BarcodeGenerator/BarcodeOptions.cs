using SixLabors.Fonts;
using SixLabors.ImageSharp;

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// Barcode options
    /// </summary>
    public class BarcodeOptions
    {
        /// <summary>
        /// 
        /// </summary>
        public int Height { get; set; } = 30;

        /// <summary>
        /// 
        /// </summary>
        public int Scale { get; set; } = 5;

        /// <summary>
        /// 
        /// </summary>
        public Encodes Encode { get; set; } = Encodes.EAN8;

        /// <summary>
        /// 
        /// </summary>
        public Rgba32 BgColor { get; set; } = Rgba32.White;

        /// <summary>
        /// 
        /// </summary>
        public Rgba32 Color { get; set; } = Rgba32.Black;

        /// <summary>
        /// 
        /// </summary>
        public string Font { get; set; } = "Arial";

        /// <summary>
        /// 
        /// </summary>
        public FontStyle FontStyle { get; set; } = FontStyle.Regular;
    }
}
