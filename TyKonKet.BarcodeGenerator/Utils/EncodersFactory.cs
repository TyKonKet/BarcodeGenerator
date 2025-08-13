using System;
using System.Collections.Concurrent;
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

        /// <summary>
        /// Creates an instance of an <see cref="Encoder"/> based on the provided <see cref="BarcodeOptions"/>.
        /// </summary>
        /// <param name="options">The barcode options used to determine the type of encoder to create.</param>
        /// <returns>An instance of the appropriate <see cref="Encoder"/>.</returns>
        /// <exception cref="InvalidOperationException">Thrown when the encoder type is not known or does not inherit from <see cref="Encoder"/>.</exception>
        internal static Encoder Create(BarcodeOptions options)
        {
            var className = $"{options.Type}Encoder";

            if (!TypeCache.TryGetValue(className, out var type))
            {
                type = Assembly.GetTypes()
                    .FirstOrDefault(t => string.Equals(t.Name, className, StringComparison.OrdinalIgnoreCase) && EncoderType.IsAssignableFrom(t));

                if (type == null)
                {
                    throw new InvalidOperationException($"{className} isn't a known {nameof(Encoder)} type");
                }

                TypeCache[className] = type;
            }

            var instance = Activator.CreateInstance(type, options);
            if (instance is not Encoder encoder)
            {
                throw new InvalidOperationException($"Failed to create encoder instance for type '{type.FullName}'.");
            }

            return encoder;
        }
    }
}