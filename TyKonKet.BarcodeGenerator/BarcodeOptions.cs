using System;
using SixLabors.Fonts;
using SixLabors.ImageSharp;

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// Barcode options.
    /// </summary>
    public class BarcodeOptions
    {
        /// <summary>
        /// Enconding type.
        /// </summary>
        public Encodes Encode { get; set; } = Encodes.Ean8;

        /// <summary>
        /// Output image height.
        /// </summary>
        public int Height { get; set; } = 30;

        /// <summary>
        /// Output image height.
        /// </summary>
        private int _scale = 5;
        public int Scale { get => _scale; set => _scale = Math.Abs(value); }

        /// <summary>
        /// Output image background color.
        /// </summary>
        public Rgba32 BackgroundColor { get; set; } = Rgba32.White;

        /// <summary>
        /// Output image color.
        /// </summary>
        public Rgba32 Color { get; set; } = Rgba32.Black;

        /// <summary>
        /// Output text font (eg. Arial, Calibri, Helvetica).
        /// </summary>
        public string Font { get; set; } = "Arial";

        /// <summary>
        /// Output text font style.
        /// </summary>
        public FontStyle FontStyle { get; set; } = FontStyle.Regular;

        /// <summary>
        /// Show or hide image text.
        /// </summary>
        public bool ShowText { get; set; } = true;
    }
}
