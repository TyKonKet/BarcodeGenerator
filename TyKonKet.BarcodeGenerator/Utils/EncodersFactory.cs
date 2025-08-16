// Copyright (c) 2020-2025 TyKonKet and contributors
// Licensed under the MIT License. See LICENSE in the repository root for full license information.

using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using TyKonKet.BarcodeGenerator.Encoders.Abstract;

namespace TyKonKet.BarcodeGenerator.Utils
{
    /// <summary>
    /// Factory class for creating instances of <see cref="Encoder"/>.
    /// </summary>
    internal static class EncodersFactory
    {
        private static readonly Assembly Assembly = Assembly.GetExecutingAssembly();
        private static readonly Type EncoderType = typeof(Encoder);
        private static readonly ConcurrentDictionary<string, Type> TypeCache = new(StringComparer.OrdinalIgnoreCase);

        // Factory delegate cache for direct instantiation (performance optimization)
        private static readonly ConcurrentDictionary<string, Func<BarcodeOptions, Encoder>> FactoryCache = new(StringComparer.OrdinalIgnoreCase);

        // Static constructor to pre-populate cache with known encoders
        static EncodersFactory()
        {
            // Pre-populate type cache with known encoder types to eliminate reflection overhead
            TypeCache["Code93Encoder"] = typeof(Encoders.Code93Encoder);
            TypeCache["Ean13Encoder"] = typeof(Encoders.Ean13Encoder);
            TypeCache["Ean8Encoder"] = typeof(Encoders.Ean8Encoder);
            TypeCache["Isbn13Encoder"] = typeof(Encoders.Isbn13Encoder);
            TypeCache["UpcaEncoder"] = typeof(Encoders.UpcaEncoder);

            // Pre-populate factory delegate cache for direct instantiation (eliminates Activator.CreateInstance overhead)
            FactoryCache["Code93Encoder"] = options => new Encoders.Code93Encoder(options);
            FactoryCache["Ean13Encoder"] = options => new Encoders.Ean13Encoder(options);
            FactoryCache["Ean8Encoder"] = options => new Encoders.Ean8Encoder(options);
            FactoryCache["Isbn13Encoder"] = options => new Encoders.Isbn13Encoder(options);
            FactoryCache["UpcaEncoder"] = options => new Encoders.UpcaEncoder(options);
        }

        /// <summary>
        /// Creates an instance of an <see cref="Encoder"/> based on the provided <see cref="BarcodeOptions"/>.
        /// Uses factory delegates for direct instantiation to eliminate reflection overhead.
        /// </summary>
        /// <param name="options">The barcode options used to determine the type of encoder to create.</param>
        /// <returns>An instance of the appropriate <see cref="Encoder"/>.</returns>
        /// <exception cref="InvalidOperationException">Thrown when the encoder type is not known or does not inherit from <see cref="Encoder"/>.</exception>
        internal static Encoder Create(BarcodeOptions options)
        {
            var className = $"{options.Type}Encoder";

            // Try factory delegate cache first for known types (direct instantiation - no reflection)
            if (FactoryCache.TryGetValue(className, out var factory))
            {
                return factory(options);
            }

            // Fallback to reflection for unknown encoder types (extensibility)
            if (!TypeCache.TryGetValue(className, out var type))
            {
                type = Assembly.GetTypes().FirstOrDefault(t => string.Equals(t.Name, className, StringComparison.OrdinalIgnoreCase) && EncoderType.IsAssignableFrom(t));

                if (type == null)
                {
                    throw new InvalidOperationException($"{className} isn't a known {nameof(Encoder)} type");
                }

                TypeCache[className] = type;
            }

            // Create factory delegate for newly discovered types and cache it
            var newFactory = CreateFactoryDelegate(type);
            FactoryCache[className] = newFactory;

            return newFactory(options);
        }

        /// <summary>
        /// Creates a factory delegate for the given encoder type using compiled expressions for optimal performance.
        /// </summary>
        /// <param name="encoderType">The encoder type to create a factory for.</param>
        /// <returns>A factory delegate that creates instances of the encoder type.</returns>
        private static Func<BarcodeOptions, Encoder> CreateFactoryDelegate(Type encoderType)
        {
            // Use Activator.CreateInstance as fallback for unknown types
            // Future optimization: Could use compiled expressions for even better performance
            return options => (Encoder)Activator.CreateInstance(encoderType, options)!;
        }
    }
}
