﻿using System;

namespace TyKonKet.BarcodeGenerator.Utils
{
    /// <summary>
    /// Provides extension methods for various types.
    /// </summary>
    internal static class Extensions
    {
        /// <summary>
        /// Converts a numeric character to its integer representation.
        /// </summary>
        /// <param name="digitChar">The numeric character to convert. Must be between '0' and '9'.</param>
        /// <returns>The integer representation of the character.</returns>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the character is not a numeric digit.</exception>
        internal static int ToInt(this char digitChar)
        {
            if (digitChar < '0' || digitChar > '9')
            {
                throw new ArgumentOutOfRangeException(nameof(digitChar), "The character must be a numeric digit between '0' and '9'.");
            }

            return digitChar - '0';
        }
    }
}