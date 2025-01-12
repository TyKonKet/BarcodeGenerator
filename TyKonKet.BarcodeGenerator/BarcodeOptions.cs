using System;
using System.Diagnostics;
using SkiaSharp;
using TyKonKet.BarcodeGenerator.Utils;

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// Barcode options.
    /// </summary>
    [DebuggerDisplay("Encode = {EncodeDisplayName}, Height = {Height}, Scale = {Scale}, RenderText = {RenderText}")]
    public sealed class BarcodeOptions
    {
        private int scale = 5;

        internal string EncodeDisplayName => this.Encode.GetDisplayName();

        /// <summary>
        /// Gets or sets the barcode margins.
        /// </summary>
        /// <value>The margins of the barcode.</value>
        public int Margins { get; set; } = 5;

        /// <summary>
        /// Gets or sets the encoding type.
        /// </summary>
        /// <value>The encoding type of the barcode.</value>
        public BarcodeEncodings Encode { get; set; } = BarcodeEncodings.Ean8;

        /// <summary>
        /// Gets or sets the output image height.
        /// </summary>
        /// <value>The height of the output image.</value>
        public int Height { get; set; } = 30;

        /// <summary>
        /// Gets or sets the output image width scale.
        /// </summary>
        /// <value>The scale of the output image width.</value>
        public int Scale
        {
            get => this.scale;
            set => this.scale = Math.Abs(value);
        }

        /// <summary>
        /// Gets or sets the output image background color.
        /// </summary>
        /// <value>The background color of the output image.</value>
        public SKColor BackgroundColor { get; set; } = SKColors.White;

        /// <summary>
        /// Gets or sets the output image color.
        /// </summary>
        /// <value>The color of the output image.</value>
        public SKColor Color { get; set; } = SKColors.Black;

        /// <summary>
        /// Gets or sets the output text font.
        /// </summary>
        /// <value>The font of the output text (e.g., Arial, Calibri, Helvetica).</value>
        public string Font { get; set; } = "Arial";

        /// <summary>
        /// Gets or sets the output text font style.
        /// </summary>
        /// <value>The font style of the output text.</value>
        public SKFontStyle FontStyle { get; set; } = SKFontStyle.Normal;

        /// <summary>
        /// Gets or sets a value indicating whether to render the barcode text.
        /// </summary>
        /// <value><see langword="true"/> if the barcode text should be rendered; otherwise, <see langword="false"/>.</value>
        public bool RenderText { get; set; } = true;
    }
}