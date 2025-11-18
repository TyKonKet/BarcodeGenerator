// Copyright (c) 2020-2025 TyKonKet and contributors
// Licensed under the MIT License. See LICENSE in the repository root for full license information.

using System;
using System.Collections.Generic;
using System.Diagnostics;

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// Represents the result of a barcode validation operation.
    /// </summary>
    [DebuggerDisplay("IsValid = {IsValid}, Barcode = {ValidatedBarcode}")]
    public sealed class BarcodeValidationResult
    {
        /// <summary>
        /// Gets a value indicating whether the barcode is valid.
        /// </summary>
        public bool IsValid { get; }

        /// <summary>
        /// Gets the validated barcode string with computed check digits if applicable.
        /// Returns null if validation failed.
        /// </summary>
        public string? ValidatedBarcode { get; }

        /// <summary>
        /// Gets the list of validation errors.
        /// </summary>
        public IReadOnlyList<string> Errors { get; }

        /// <summary>
        /// Gets the barcode type that was validated.
        /// </summary>
        public BarcodeTypes Type { get; }

        /// <summary>
        /// Initializes a new instance of the <see cref="BarcodeValidationResult"/> class for a successful validation.
        /// </summary>
        /// <param name="validatedBarcode">The validated barcode string with check digits.</param>
        /// <param name="type">The barcode type.</param>
        internal BarcodeValidationResult(string validatedBarcode, BarcodeTypes type)
        {
            this.IsValid = true;
            this.ValidatedBarcode = validatedBarcode;
            this.Errors = Array.Empty<string>();
            this.Type = type;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="BarcodeValidationResult"/> class for a failed validation.
        /// </summary>
        /// <param name="errors">The list of validation errors.</param>
        /// <param name="type">The barcode type.</param>
        internal BarcodeValidationResult(IReadOnlyList<string> errors, BarcodeTypes type)
        {
            this.IsValid = false;
            this.ValidatedBarcode = null;
            this.Errors = errors;
            this.Type = type;
        }
    }
}
