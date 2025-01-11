using System;
using System.Reflection;
using TyKonKet.BarcodeGenerator.Encoders.Abstract;

namespace TyKonKet.BarcodeGenerator.Utils
{
    /// <summary>
    /// Factory class for creating instances of <see cref="Encoder"/>.
    /// </summary>
    internal static class EncodersFactory
    {
        /// <summary>
        /// Creates an instance of an <see cref="Encoder"/> based on the provided <see cref="BarcodeOptions"/>.
        /// </summary>
        /// <param name="options">The barcode options used to determine the type of encoder to create.</param>
        /// <returns>An instance of the appropriate <see cref="Encoder"/>.</returns>
        /// <exception cref="InvalidOperationException">Thrown when the encoder type is not known or does not inherit from <see cref="Encoder"/>.</exception>
        internal static Encoder Create(BarcodeOptions options)
        {
            var className = $"{options.Encode}Encoder";

            var type = Type.GetType($"{typeof(Encoder).Namespace}.{className}", throwOnError: false) ?? throw new InvalidOperationException($"{className} isn't a known {nameof(Encoder)} type");

            if (!typeof(Encoder).GetTypeInfo().IsAssignableFrom(type.GetTypeInfo()))
            {
                throw new InvalidOperationException($"{type.Name} doesn't inherit from {nameof(Encoder)}");
            }

            return (Encoder)Activator.CreateInstance(type, options);
        }
    }
}