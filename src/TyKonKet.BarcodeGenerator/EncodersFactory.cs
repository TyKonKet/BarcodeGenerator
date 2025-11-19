// Copyright (c) 2020-2025 TyKonKet and contributors
// Licensed under the MIT License. See LICENSE in the repository root for full license information.

using System;
using System.Collections.Concurrent;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using TyKonKet.BarcodeGenerator.Encoders.Abstract;

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// Factory class for creating instances of <see cref="Encoder"/>.
    /// </summary>
    internal static class EncodersFactory
    {
        private static readonly Assembly Assembly = Assembly.GetExecutingAssembly();
        private static readonly Type EncoderType = typeof(Encoder);

        // Factory delegate cache for direct instantiation (performance optimization)
        private static readonly ConcurrentDictionary<string, Func<BarcodeOptions, Encoder>> FactoryCache = new(StringComparer.OrdinalIgnoreCase);

        // Static constructor to pre-populate cache with known encoders
        static EncodersFactory()
        {
            // Pre-populate factory delegate cache for direct instantiation (eliminates Activator.CreateInstance overhead)
            FactoryCache["Code93Encoder"] = options => new Encoders.Code93Encoder(options);
            FactoryCache["Code128Encoder"] = options => new Encoders.Code128Encoder(options);
            FactoryCache["Ean13Encoder"] = options => new Encoders.Ean13Encoder(options);
            FactoryCache["Ean8Encoder"] = options => new Encoders.Ean8Encoder(options);
            FactoryCache["Isbn13Encoder"] = options => new Encoders.Isbn13Encoder(options);
            FactoryCache["UpcaEncoder"] = options => new Encoders.UpcaEncoder(options);
            FactoryCache["UpceEncoder"] = options => new Encoders.UpceEncoder(options);
            FactoryCache["CodabarEncoder"] = options => new Encoders.CodabarEncoder(options);
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
            var type = Assembly.GetTypes().FirstOrDefault(t => string.Equals(t.Name, className, StringComparison.OrdinalIgnoreCase) && EncoderType.IsAssignableFrom(t)) ?? throw new InvalidOperationException($"{className} isn't a known {nameof(Encoder)} type");

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
        [SuppressMessage("Roslynator", "RCS1075:Avoid empty catch clause that catches System.Exception", Justification = "Deliberately catching all exceptions to provide failsafe behavior")]
        [SuppressMessage("Design", "Wintellect014:Catch blocks should rethrow or throw", Justification = "Deliberately catching all exceptions to provide failsafe behavior")]
        [SuppressMessage("CodeSmell", "ERP022:Unobserved exception in generic exception handler", Justification = "Deliberately catching all exceptions to provide failsafe behavior")]
        internal static Func<BarcodeOptions, Encoder> CreateFactoryDelegate(Type encoderType)
        {
            try
            {
                // Create parameter expression for BarcodeOptions
                var optionsParameter = Expression.Parameter(typeof(BarcodeOptions), "options");

                // Find constructor that takes BarcodeOptions parameter
                var constructor = encoderType.GetConstructor([typeof(BarcodeOptions)]);

                if (constructor != null)
                {
                    // Create constructor call expression: new EncoderType(options)
                    var constructorCall = Expression.New(constructor, optionsParameter);

                    // Convert to base Encoder type if needed
                    var convert = Expression.Convert(constructorCall, typeof(Encoder));

                    // Create and compile lambda expression: options => (Encoder)new EncoderType(options)
                    var lambda = Expression.Lambda<Func<BarcodeOptions, Encoder>>(convert, optionsParameter);

                    return lambda.Compile();
                }
            }
            catch (Exception)
            {
                // Fallback to Activator.CreateInstance if expression compilation fails
                // This ensures backward compatibility and graceful handling of edge cases
                // Deliberately catching all exceptions to provide failsafe behavior
            }

            // Fallback for types without appropriate constructor or if expression compilation fails
            return options => (Encoder)Activator.CreateInstance(encoderType, options)!;
        }
    }
}
