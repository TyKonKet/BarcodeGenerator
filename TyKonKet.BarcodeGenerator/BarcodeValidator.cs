// Copyright (c) 2020-2025 TyKonKet and contributors
// Licensed under the MIT License. See LICENSE in the repository root for full license information.

using System;
using System.Collections.Generic;
using TyKonKet.BarcodeGenerator.Encoders;
using TyKonKet.BarcodeGenerator.Encoders.Abstract;
using TyKonKet.BarcodeGenerator.Utils;

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// Provides methods for validating barcode data without encoding or rendering.
    /// </summary>
    public static class BarcodeValidator
    {
        /// <summary>
        /// Validates the specified barcode string for the given barcode type.
        /// </summary>
        /// <param name="barcode">The barcode string to validate.</param>
        /// <param name="type">The barcode type to validate against.</param>
        /// <param name="includeSuggestions">When true, suggests compatible barcode types if validation fails. Default is false for optimal performance.</param>
        /// <returns>A <see cref="BarcodeValidationResult"/> containing validation status and details.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="barcode"/> is null.</exception>
        public static BarcodeValidationResult Validate(string barcode, BarcodeTypes type, bool includeSuggestions = false)
        {
            if (barcode == null)
            {
                throw new ArgumentNullException(nameof(barcode));
            }

            var errors = new List<string>();

            try
            {
                // Validate charset based on barcode type
                if (!ValidateCharset(barcode, type))
                {
                    var allowedCharset = GetAllowedCharsetDescription(type);
                    errors.Add($"Invalid character set. Only {allowedCharset} are allowed for {type.GetDisplayName()}.");
                    
                    // Find compatible barcode types only if requested
                    var suggestedTypes = includeSuggestions ? FindCompatibleTypes(barcode, type) : Array.Empty<BarcodeTypes>();
                    return new BarcodeValidationResult(errors, type, suggestedTypes);
                }

                // Compute the validated barcode with check digits
                var validatedBarcode = ComputeValidatedBarcode(barcode, type);

                return new BarcodeValidationResult(validatedBarcode, type);
            }
            catch (FormatException ex)
            {
                errors.Add(ex.Message);
                var suggestedTypes = includeSuggestions ? FindCompatibleTypes(barcode, type) : Array.Empty<BarcodeTypes>();
                return new BarcodeValidationResult(errors, type, suggestedTypes);
            }
            catch (ArgumentException ex)
            {
                errors.Add(ex.Message);
                var suggestedTypes = includeSuggestions ? FindCompatibleTypes(barcode, type) : Array.Empty<BarcodeTypes>();
                return new BarcodeValidationResult(errors, type, suggestedTypes);
            }
        }

        /// <summary>
        /// Validates the charset of the barcode string for the given barcode type.
        /// </summary>
        /// <param name="barcode">The barcode string to validate.</param>
        /// <param name="type">The barcode type to validate against.</param>
        /// <returns>True if the charset is valid; otherwise, false.</returns>
        private static bool ValidateCharset(string barcode, BarcodeTypes type)
        {
            var pattern = type switch
            {
                BarcodeTypes.Ean13 => RegexCache.EanAllowedCharsetRegex,
                BarcodeTypes.Ean8 => RegexCache.EanAllowedCharsetRegex,
                BarcodeTypes.Upca => RegexCache.EanAllowedCharsetRegex,
                BarcodeTypes.Upce => RegexCache.EanAllowedCharsetRegex,
                BarcodeTypes.Isbn13 => RegexCache.EanAllowedCharsetRegex,
                BarcodeTypes.Code39 => RegexCache.Code39AllowedCharsetRegex,
                BarcodeTypes.Code93 => RegexCache.Code93AllowedCharsetRegex,
                BarcodeTypes.Code128 => RegexCache.Code128AllowedCharsetRegex,
                BarcodeTypes.Codabar => RegexCache.CodabarAllowedCharsetRegex,
                _ => throw new InvalidOperationException($"Unknown barcode type: {type}")
            };

            return pattern.IsMatch(barcode);
        }

        /// <summary>
        /// Gets a description of the allowed character set for the given barcode type.
        /// </summary>
        /// <param name="type">The barcode type.</param>
        /// <returns>A description of the allowed character set.</returns>
        private static string GetAllowedCharsetDescription(BarcodeTypes type)
        {
            return type switch
            {
                BarcodeTypes.Ean13 => "digits (0-9)",
                BarcodeTypes.Ean8 => "digits (0-9)",
                BarcodeTypes.Upca => "digits (0-9)",
                BarcodeTypes.Upce => "digits (0-9)",
                BarcodeTypes.Isbn13 => "digits (0-9)",
                BarcodeTypes.Code39 => "uppercase letters (A-Z), digits (0-9), and symbols (- . $ / + % space)",
                BarcodeTypes.Code93 => "uppercase letters (A-Z), digits (0-9), and symbols (- . $ / + % space)",
                BarcodeTypes.Code128 => "all ASCII printable characters (space to DEL)",
                BarcodeTypes.Codabar => "digits (0-9) and symbols (- $ : / . +)",
                _ => "unknown"
            };
        }

        /// <summary>
        /// Computes the validated barcode with check digits for the given barcode type.
        /// </summary>
        /// <param name="barcode">The barcode string to validate.</param>
        /// <param name="type">The barcode type.</param>
        /// <returns>The validated barcode with check digits.</returns>
        private static string ComputeValidatedBarcode(string barcode, BarcodeTypes type)
        {
            return type switch
            {
                BarcodeTypes.Ean13 => Ean13Encoder.FormatBarcode(barcode),
                BarcodeTypes.Ean8 => Ean8Encoder.FormatBarcode(barcode),
                BarcodeTypes.Upca => UpcaEncoder.FormatBarcode(barcode),
                BarcodeTypes.Upce => UpceEncoder.FormatBarcode(barcode),
                BarcodeTypes.Isbn13 => Isbn13Encoder.FormatBarcode(barcode),
                BarcodeTypes.Code39 => Code39Encoder.FormatBarcode(barcode),
                BarcodeTypes.Code93 => Code93Encoder.FormatBarcode(barcode),
                BarcodeTypes.Code128 => barcode, // Code128 doesn't format barcode, returns as-is
                BarcodeTypes.Codabar => CodabarEncoder.FormatBarcode(barcode),
                _ => throw new InvalidOperationException($"Unknown barcode type: {type}")
            };
        }

        /// <summary>
        /// Finds compatible barcode types that would accept the given barcode string.
        /// </summary>
        /// <param name="barcode">The barcode string to check.</param>
        /// <param name="requestedType">The originally requested barcode type (to exclude from suggestions).</param>
        /// <returns>A list of compatible barcode types.</returns>
        private static IReadOnlyList<BarcodeTypes> FindCompatibleTypes(string barcode, BarcodeTypes requestedType)
        {
            var compatibleTypes = new List<BarcodeTypes>();

            // Check all barcode types except the one that failed
            var allTypes = new[]
            {
                BarcodeTypes.Ean13,
                BarcodeTypes.Ean8,
                BarcodeTypes.Upca,
                BarcodeTypes.Upce,
                BarcodeTypes.Isbn13,
                BarcodeTypes.Code39,
                BarcodeTypes.Code93,
                BarcodeTypes.Code128,
                BarcodeTypes.Codabar,
            };

            foreach (var type in allTypes)
            {
                // Skip the requested type that already failed
                if (type == requestedType)
                {
                    continue;
                }

                try
                {
                    // Try to validate with this type
                    if (ValidateCharset(barcode, type))
                    {
                        // Try to format the barcode to ensure it's fully valid
                        var _ = ComputeValidatedBarcode(barcode, type);
                        compatibleTypes.Add(type);
                    }
                }
                catch
                {
                    // This type is not compatible, continue to the next one
                }
            }

            return compatibleTypes;
        }
    }
}
