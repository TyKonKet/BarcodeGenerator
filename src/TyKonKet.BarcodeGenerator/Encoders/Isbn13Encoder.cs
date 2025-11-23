// Copyright (c) 2020-2025 TyKonKet and contributors
// Licensed under the MIT License. See LICENSE in the repository root for full license information.

using System;

namespace TyKonKet.BarcodeGenerator.Encoders
{
    /// <summary>
    /// Encoder for ISBN-13 barcodes.
    /// </summary>
    internal sealed class Isbn13Encoder : Ean13Encoder
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Isbn13Encoder"/> class.
        /// </summary>
        public Isbn13Encoder()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="Isbn13Encoder"/> class with the specified options.
        /// </summary>
        /// <param name="options">The barcode options.</param>
        public Isbn13Encoder(BarcodeOptions options) : base(options)
        {
        }

        /// <summary>
        /// Encodes the specified barcode.
        /// </summary>
        /// <param name="barcode">The barcode to encode.</param>
        /// <returns>The encoded barcode string.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="barcode"/> is <see langword="null"/>.</exception>
        /// <exception cref="FormatException">Thrown when the resulting ISBN-13 barcode contains characters not allowed by EAN charset (only digits 0–9).</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when a numeric character falls outside the valid range during internal conversion (documented for forward compatibility).</exception>
        public override string Encode(string barcode)
        {
            barcode = FormatBarcode(barcode);
            return base.Encode(barcode);
        }

        /// <summary>
        /// Formats the barcode according to ISBN-13 rules.
        /// </summary>
        /// <param name="barcode">The barcode to format.</param>
        /// <returns>The formatted barcode string.</returns>
        /// <exception cref="FormatException">Thrown when the barcode prefix is invalid.</exception>
        internal static new string FormatBarcode(string barcode)
        {
            // Quick validation - must have at least 3 characters for prefix
            if (barcode.Length < 3)
            {
                throw new FormatException("Invalid ISBN-13 prefix. Only '978' or '979' are allowed.");
            }

            // Validate prefix directly to avoid span copying warnings
            bool isValid978 = barcode[0] == '9' && barcode[1] == '7' && barcode[2] == '8';
            bool isValid979 = barcode[0] == '9' && barcode[1] == '7' && barcode[2] == '9';

            if (!isValid978 && !isValid979)
            {
                throw new FormatException("Invalid ISBN-13 prefix. Only '978' or '979' are allowed.");
            }

            // Use spans for the rest of the processing
            ReadOnlySpan<char> barcodeSpan = barcode.AsSpan();
            ReadOnlySpan<char> prefix = barcodeSpan[..3];
            ReadOnlySpan<char> afterPrefix = barcodeSpan[3..];

            // Calculate body length
            int bodyLength = Math.Min(9, afterPrefix.Length);
            const int totalLength = 12; // Always 12 characters total (3 prefix + 9 body)

            // Use stackalloc for small buffer (safe for 12 chars)
            Span<char> result = totalLength <= 128 ? stackalloc char[totalLength] : new char[totalLength];

            // Copy prefix (always 3 chars)
            prefix.CopyTo(result);

            // Handle padding and body in one operation
            if (bodyLength < 9)
            {
                // Need to pad with zeros
                int zerosNeeded = 9 - bodyLength;

                // Fill with zeros first
                for (int i = 0; i < zerosNeeded; i++)
                {
                    result[3 + i] = '0';
                }

                // Then copy the actual digits
                afterPrefix.CopyTo(result[(3 + zerosNeeded)..]);
            }
            else
            {
                // Copy exactly 9 characters (truncate if longer)
                afterPrefix[..9].CopyTo(result[3..]);
            }

#if NET8_0_OR_GREATER
            return new string(result);
#else
            return new string(result.ToArray());
#endif
        }
    }
}
