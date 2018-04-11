using System;
using System.Reflection;
using TyKonKet.BarcodeGenerator.Encoders;

namespace TyKonKet.BarcodeGenerator
{
    internal static class EncodersFactory
    {
        internal static Encoder Create(BarcodeOptions options)
        {
            var className = $"{options.Encode.ToString()}Encoder";
            var type = Type.GetType($"{typeof(Encoder).Namespace}.{className}", false);
            if (type == null) throw new InvalidOperationException($"{className} isn't a known {nameof(Encoder)} type");
            if (!typeof(Encoder).GetTypeInfo().IsAssignableFrom(type.GetTypeInfo()))
                throw new InvalidOperationException($"{type.Name} doesn't inherit from {nameof(Encoder)}");
            return (Encoder) Activator.CreateInstance(type, options);
        }
    }
}