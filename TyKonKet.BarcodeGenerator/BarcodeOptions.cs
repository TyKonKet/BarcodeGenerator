using SixLabors.Fonts;
using SixLabors.ImageSharp;
using System;

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
        private int _Scale = 5;
        public int Scale { get => _Scale; set => _Scale = Math.Abs(value); }

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
        public string Font { get; set; } = "Arial"; //TODO: Implement some kind of caching 'cause seems it takes long time to load

        /// <summary>
        /// 
        /// </summary>
        public FontStyle FontStyle { get; set; } = FontStyle.Regular;

        /// <summary>
        /// 
        /// </summary>
        public bool ShowText { get; set; } = true;
    }
}
