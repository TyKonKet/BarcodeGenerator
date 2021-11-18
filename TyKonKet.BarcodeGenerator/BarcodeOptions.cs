using System;
using SkiaSharp;

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// Barcode options.
    /// </summary>
    public class BarcodeOptions
    {
        private int _scale = 5;

        /// <summary>
        /// Barcode margins.
        /// </summary>
        public int Margins { get; set; } = 5;

        /// <summary>
        /// Enconding type.
        /// </summary>
        public Encodes Encode { get; set; } = Encodes.Ean8;

        /// <summary>
        /// Output image height.
        /// </summary>
        public int Height { get; set; } = 30;

        /// <summary>
        /// Output image width scale.
        /// </summary>
        public int Scale
        {
            get => _scale;
            set => _scale = Math.Abs(value);
        }

        /// <summary>
        /// Output image background color.
        /// </summary>
        public SKColor BackgroundColor { get; set; } = SKColors.White;

        /// <summary>
        /// Output image color.
        /// </summary>
        public SKColor Color { get; set; } = SKColors.Black;

        /// <summary>
        /// Output text font (eg. Arial, Calibri, Helvetica).
        /// </summary>
        public string Font { get; set; } = "Arial";

        /// <summary>
        /// Output text font style.
        /// </summary>
        public SKFontStyle FontStyle { get; set; } = SKFontStyle.Normal;

        /// <summary>
        /// Draw or not the image text.
        /// </summary>
        public bool DrawText { get; set; } = true;
    }
}