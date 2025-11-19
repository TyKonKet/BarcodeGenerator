// Copyright (c) 2020-2025 TyKonKet and contributors
// Licensed under the MIT License. See LICENSE in the repository root for full license information.

using SkiaSharp;
using System;
using System.Diagnostics;
using System.IO;
using TyKonKet.BarcodeGenerator.Fonts;
using TyKonKet.BarcodeGenerator.Utils;

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// Represents the options for generating barcodes.
    /// </summary>
    [DebuggerDisplay("Encode = {EncodingName}, Height = {Height}, Scaling = {Scaling}, RenderText = {RenderText}, TextColor = {EffectiveTextColor}")]
    public sealed class BarcodeOptions
    {
        /// <summary>
        /// The default typeface used for rendering text in barcodes.
        /// </summary>
        public static readonly SKTypeface DefaultTypeface = SKTypeface.Default;

        private bool locked = false;

        private int scalingFactor = 5;

        private SKTypeface? typeface;

        /// <summary>
        /// Gets the name of the encoding used for the barcode.
        /// </summary>
        internal string EncodingName => this.Type.GetDisplayName();

        /// <summary>
        /// Gets the typeface used for rendering text in the barcode.
        /// </summary>
        public SKTypeface Typeface
        {
            get
            {
                return this.typeface ?? DefaultTypeface;
            }
        }

        /// <summary>
        /// Gets or sets the margins around the barcode.
        /// </summary>
        public int Margins { get; set; } = 2;

        /// <summary>
        /// Gets or sets the type of barcode to generate.
        /// </summary>
        public BarcodeTypes Type { get; set; } = BarcodeTypes.Ean8;

        /// <summary>
        /// Gets or sets the height of the barcode.
        /// </summary>
        public int Height { get; set; } = 30;

        /// <summary>
        /// Gets or sets the scaling factor for the barcode.
        /// </summary>
        public int Scaling
        {
            get => this.scalingFactor;
            set => this.scalingFactor = Math.Max(value, 1);
        }

        /// <summary>
        /// Gets or sets the background color of the barcode.
        /// </summary>
        public SKColor BackgroundColor { get; set; } = SKColors.White;

        /// <summary>
        /// Gets or sets the foreground color of the barcode.
        /// </summary>
        public SKColor ForegroundColor { get; set; } = SKColors.Black;

        /// <summary>
        /// Gets or sets the text color of the barcode. If not specified, uses the foreground color.
        /// </summary>
        public SKColor? TextColor { get; set; } = null;

        /// <summary>
        /// Gets the effective text color to use for rendering. This internal property provides
        /// a computed value that returns TextColor if set, otherwise falls back to ForegroundColor.
        /// Used by encoders to determine the appropriate color for text rendering.
        /// </summary>
        internal SKColor EffectiveTextColor => this.TextColor ?? this.ForegroundColor;

        /// <summary>
        /// Gets or sets a value indicating whether to render text below the barcode.
        /// </summary>
        public bool RenderText { get; set; } = true;

        /// <summary>
        /// Sets the typeface used for rendering text in the barcode.
        /// </summary>
        /// <param name="typeface">The typeface to use.</param>
        /// <exception cref="InvalidOperationException">Thrown when the options are locked and cannot be modified.</exception>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="typeface"/> is null.</exception>
        public void UseTypeface(SKTypeface typeface)
        {
            if (this.locked)
            {
                throw new InvalidOperationException("Options are locked and cannot be modified.");
            }

            if (typeface is null)
            {
                throw new ArgumentNullException(nameof(typeface), "Typeface cannot be null.");
            }

            this.typeface = typeface;
        }

        /// <summary>
        /// Sets the typeface used for rendering text in the barcode.
        /// </summary>
        /// <param name="fontFamily">
        /// The font family to use. This can be either a string representing the font family name
        /// or a <see cref="FontFamilies"/> enum value.
        /// </param>
        /// <exception cref="InvalidOperationException">Thrown when the options are locked and cannot be modified.</exception>
        public void UseTypeface(FontFamily fontFamily)
        {
            if (this.locked)
            {
                throw new InvalidOperationException("Options are locked and cannot be modified.");
            }

            this.typeface = SKTypeface.FromFamilyName(fontFamily.ToString());
        }

        /// <summary>
        /// Sets the typeface used for rendering text in the barcode.
        /// </summary>
        /// <param name="fontFamily">
        /// The font family to use. This can be either a string representing the font family name
        /// or a <see cref="FontFamilies"/> enum value.
        /// </param>
        /// <param name="fontStyle">The font style to use.</param>
        /// <exception cref="InvalidOperationException">Thrown when the options are locked and cannot be modified.</exception>
        public void UseTypeface(FontFamily fontFamily, SKFontStyle fontStyle)
        {
            if (this.locked)
            {
                throw new InvalidOperationException("Options are locked and cannot be modified.");
            }

            this.typeface = SKTypeface.FromFamilyName(fontFamily.ToString(), fontStyle);
        }

        /// <summary>
        /// Sets the typeface used for rendering text in the barcode.
        /// </summary>
        /// <param name="fontFamily">
        /// The font family to use. This can be either a string representing the font family name
        /// or a <see cref="FontFamilies"/> enum value.
        /// </param>
        /// <param name="weight">The font weight to use.</param>
        /// <param name="width">The font width to use.</param>
        /// <param name="fontStyleSlant">The font style slant to use.</param>
        /// <exception cref="InvalidOperationException">Thrown when the options are locked and cannot be modified.</exception>
        public void UseTypeface(FontFamily fontFamily, int weight, int width, SKFontStyleSlant fontStyleSlant)
        {
            if (this.locked)
            {
                throw new InvalidOperationException("Options are locked and cannot be modified.");
            }

            this.typeface = SKTypeface.FromFamilyName(fontFamily.ToString(), weight, width, fontStyleSlant);
        }

        /// <summary>
        /// Sets the typeface used for rendering text in the barcode.
        /// </summary>
        /// <param name="fontFamily">
        /// The font family to use. This can be either a string representing the font family name
        /// or a <see cref="FontFamilies"/> enum value.
        /// </param>
        /// <param name="weight">The font weight to use.</param>
        /// <param name="width">The font width to use.</param>
        /// <param name="fontStyleSlant">The font style slant to use.</param>
        /// <exception cref="InvalidOperationException">Thrown when the options are locked and cannot be modified.</exception>
        public void UseTypeface(FontFamily fontFamily, SKFontStyleWeight weight, SKFontStyleWidth width, SKFontStyleSlant fontStyleSlant)
        {
            if (this.locked)
            {
                throw new InvalidOperationException("Options are locked and cannot be modified.");
            }

            this.typeface = SKTypeface.FromFamilyName(fontFamily.ToString(), weight, width, fontStyleSlant);
        }

        /// <summary>
        /// Sets the typeface used for rendering text in the barcode from a file.
        /// </summary>
        /// <param name="path">The path to the font file.</param>
        /// <param name="index">The index of the font in the file.</param>
        /// <exception cref="InvalidOperationException">Thrown when the options are locked and cannot be modified.</exception>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="path"/> is null.</exception>
        /// <exception cref="ArgumentException">Thrown when <paramref name="path"/> is empty or whitespace.</exception>
        public void UseTypefaceFromFile(string path, int index = 0)
        {
            if (this.locked)
            {
                throw new InvalidOperationException("Options are locked and cannot be modified.");
            }

            if (path is null)
            {
                throw new ArgumentNullException(nameof(path), "Font file path cannot be null.");
            }

            if (string.IsNullOrWhiteSpace(path))
            {
                throw new ArgumentException("Font file path cannot be null or whitespace.", nameof(path));
            }

            this.typeface = SKTypeface.FromFile(path, index);
        }

        /// <summary>
        /// Sets the typeface used for rendering text in the barcode from data.
        /// </summary>
        /// <param name="data">The font data.</param>
        /// <param name="index">The index of the font in the data.</param>
        /// <exception cref="InvalidOperationException">Thrown when the options are locked and cannot be modified.</exception>
        public void UseTypefaceFromData(SKData data, int index = 0)
        {
            if (this.locked)
            {
                throw new InvalidOperationException("Options are locked and cannot be modified.");
            }

            this.typeface = SKTypeface.FromData(data, index);
        }

        /// <summary>
        /// Sets the typeface used for rendering text in the barcode from a stream.
        /// </summary>
        /// <param name="stream">The font stream.</param>
        /// <param name="index">The index of the font in the stream.</param>
        /// <exception cref="InvalidOperationException">Thrown when the options are locked and cannot be modified.</exception>
        public void UseTypefaceFromStream(SKStreamAsset stream, int index = 0)
        {
            if (this.locked)
            {
                throw new InvalidOperationException("Options are locked and cannot be modified.");
            }

            this.typeface = SKTypeface.FromStream(stream, index);
        }

        /// <summary>
        /// Sets the typeface used for rendering text in the barcode from a stream.
        /// </summary>
        /// <param name="stream">The font stream.</param>
        /// <param name="index">The index of the font in the stream.</param>
        /// <exception cref="InvalidOperationException">Thrown when the options are locked and cannot be modified.</exception>
        public void UseTypefaceFromStream(Stream stream, int index = 0)
        {
            if (this.locked)
            {
                throw new InvalidOperationException("Options are locked and cannot be modified.");
            }

            this.typeface = SKTypeface.FromStream(stream, index);
        }

        /// <summary>
        /// Locks the options, preventing further modifications.
        /// </summary>
        internal void Lock()
        {
            this.locked = true;
        }
    }
}
