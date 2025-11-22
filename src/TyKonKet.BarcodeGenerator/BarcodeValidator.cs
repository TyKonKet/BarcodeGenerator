// Copyright (c) 2020-2025 TyKonKet and contributors
// Licensed under the MIT License. See LICENSE in the repository root for full license information.

using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
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
        [SuppressMessage("Design", "Wintellect014:Catch blocks should rethrow or throw", Justification = "Design choice to capture validation errors in result.")]
        public static BarcodeValidationResult Validate(string barcode, BarcodeTypes type, bool includeSuggestions = false)
        {
            if (barcode == null)
            {
                throw new ArgumentNullException(nameof(barcode));
            }

            var errors = new List<string>();

            try
            {
                // Normalize input for case-insensitive symbologies before charset validation
                var normalized = NormalizeInput(barcode, type);

                // Validate charset based on barcode type
                if (!ValidateCharset(normalized, type))
                {
                    var allowedCharset = GetAllowedCharsetDescription(type);
                    errors.Add($"Invalid character set. Only {allowedCharset} are allowed for {type.GetDisplayName()}.");

                    // Find compatible barcode types only if requested
                    var suggestedTypes = includeSuggestions ? FindCompatibleTypes(normalized, type) : [];
                    return new BarcodeValidationResult(errors, type, suggestedTypes);
                }

                // Enforce per-type length rules before formatting (avoids silent pad/truncate)
                if (!ValidateLength(normalized, type, out string? lengthError))
                {
                    if (!string.IsNullOrEmpty(lengthError))
                    {
                        errors.Add(lengthError!);
                    }

                    var suggestedTypes = includeSuggestions ? FindCompatibleTypes(normalized, type) : [];
                    return new BarcodeValidationResult(errors, type, suggestedTypes);
                }

                // Compute the validated barcode with check digits
                var validatedBarcode = ComputeValidatedBarcodeWithTypeRules(normalized, type);

                return new BarcodeValidationResult(validatedBarcode, type);
            }
            catch (FormatException ex)
            {
                errors.Add(ex.Message);
                var suggestedTypes = includeSuggestions ? FindCompatibleTypes(barcode, type) : [];
                return new BarcodeValidationResult(errors, type, suggestedTypes);
            }
            catch (ArgumentException ex)
            {
                errors.Add(ex.Message);
                var suggestedTypes = includeSuggestions ? FindCompatibleTypes(barcode, type) : [];
                return new BarcodeValidationResult(errors, type, suggestedTypes);
            }
        }

        /// <summary>
        /// Normalizes the raw input according to type-specific casing rules.
        /// </summary>
        private static string NormalizeInput(string barcode, BarcodeTypes type)
        {
            return type switch
            {
                BarcodeTypes.Code39 => barcode.ToUpper(CultureInfo.CurrentCulture),
                BarcodeTypes.Codabar => barcode.ToUpper(CultureInfo.CurrentCulture),
                _ => barcode,
            };
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
                BarcodeTypes.Interleaved2of5 => RegexCache.Interleaved2of5AllowedCharsetRegex,
                _ => throw new InvalidOperationException($"Unknown barcode type: {type}"),
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
                BarcodeTypes.Interleaved2of5 => "digits (0-9)",
                _ => "unknown",
            };
        }

        // Removed legacy ComputeValidatedBarcode method in favor of ComputeValidatedBarcodeWithTypeRules

        /// <summary>
        /// Applies type-specific validation/normalization and returns the final validated barcode string.
        /// </summary>
        private static string ComputeValidatedBarcodeWithTypeRules(string barcode, BarcodeTypes type)
        {
            switch (type)
            {
                case BarcodeTypes.Isbn13:
                    // Normalize to 12-digit ISBN body (validates 978/979 prefix), then append EAN check digit
                    var body12 = Isbn13Encoder.FormatBarcode(barcode);
                    return EanEncoder.FormatBarcode(body12, 13);

                case BarcodeTypes.Upca:
                    // Normalize via formatter (keeps same value if already valid). For 11-digit input, compute check digit from 11 digits.
                    return UpcaEncoder.FormatBarcode(barcode);

                case BarcodeTypes.Ean13:
                    return Ean13Encoder.FormatBarcode(barcode);

                case BarcodeTypes.Ean8:
                    return Ean8Encoder.FormatBarcode(barcode);

                case BarcodeTypes.Upce:
                    return UpceEncoder.FormatBarcode(barcode);

                case BarcodeTypes.Code39:
                    return Code39Encoder.FormatBarcode(barcode);

                case BarcodeTypes.Code93:
                    return Code93Encoder.FormatBarcode(barcode);

                case BarcodeTypes.Code128:
                    return barcode;

                case BarcodeTypes.Codabar:
                    return CodabarEncoder.FormatBarcode(barcode);

                case BarcodeTypes.Interleaved2of5:
                    return barcode;

                default:
                    throw new InvalidOperationException($"Unknown barcode type: {type}");
            }
        }

        /// <summary>
        /// Validates the input length rules for the given barcode type.
        /// Returns false and sets an error message when input length is unsupported.
        /// </summary>
        private static bool ValidateLength(string barcode, BarcodeTypes type, out string? error)
        {
            error = null;
            switch (type)
            {
                case BarcodeTypes.Ean13:
                    if (barcode.Length is not 12 and not 13)
                    {
                        error = "EAN-13 requires 12 or 13 digits.";
                        return false;
                    }

                    return true;

                case BarcodeTypes.Ean8:
                    if (barcode.Length is not 7 and not 8)
                    {
                        error = "EAN-8 requires 7 or 8 digits.";
                        return false;
                    }

                    return true;

                case BarcodeTypes.Upca:
                    if (barcode.Length is not 11 and not 12)
                    {
                        error = "UPC-A requires 11 or 12 digits.";
                        return false;
                    }

                    return true;

                case BarcodeTypes.Upce:
                    if (barcode.Length is not 7 and not 8)
                    {
                        error = "UPC-E requires 7 or 8 digits.";
                        return false;
                    }

                    return true;

                case BarcodeTypes.Isbn13:
                    if (barcode.Length is not 12 and not 13)
                    {
                        error = "ISBN-13 requires 12 or 13 digits (including prefix 978/979).";
                        return false;
                    }

                    return true;

                case BarcodeTypes.Interleaved2of5:
                    if (barcode.Length % 2 != 0)
                    {
                        error = "Interleaved 2 of 5 requires even-length numeric data.";
                        return false;
                    }

                    return true;

                // Non-numeric symbologies have no fixed length constraints
                case BarcodeTypes.Code39:
                case BarcodeTypes.Code93:
                case BarcodeTypes.Code128:
                case BarcodeTypes.Codabar:
                    return true;

                default:
                    return true;
            }
        }

        /// <summary>
        /// Finds compatible barcode types that would accept the given barcode string.
        /// </summary>
        /// <param name="barcode">The barcode string to check.</param>
        /// <param name="requestedType">The originally requested barcode type (to exclude from suggestions).</param>
        /// <returns>A list of compatible barcode types.</returns>
        [SuppressMessage("Design", "Wintellect014:Catch blocks should rethrow or throw", Justification = "Design choice to continue searching on validation failures.")]
        private static List<BarcodeTypes> FindCompatibleTypes(string barcode, BarcodeTypes requestedType)
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
                BarcodeTypes.Interleaved2of5,
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
                    // Try to validate with this type (apply normalization per type)
                    var normalized = NormalizeInput(barcode, type);
                    if (ValidateCharset(normalized, type) && ValidateLength(normalized, type, out _))
                    {
                        // Try to format the barcode to ensure it's fully valid
                        ComputeValidatedBarcodeWithTypeRules(normalized, type);
                        compatibleTypes.Add(type);
                    }
                }
                catch (FormatException)
                {
                    // Expected: barcode format is not compatible with this type, continue to next.
                }
                catch (ArgumentException)
                {
                    // Expected: barcode argument is not valid for this type, continue to next.
                }
            }

            return compatibleTypes;
        }
    }
}
