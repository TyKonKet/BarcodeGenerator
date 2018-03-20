using System;
using System.Linq;
using System.Reflection;
using TyKonKet.BarcodeGenerator.Generators;

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// Available barcode encoding types
    /// </summary>
    public enum Encodes
    {
        [Encode("EAN-13", typeof(Ean13Generator))]
        Ean13 = 1,
        [Encode("UPC-A")]
        Upca = 2,
        [Encode("ISBN")]
        Isbn = 3,
        [Encode("EAN-8", typeof(Ean8Generator))]
        Ean8 = 4,
        [Encode("UPC-E")]
        Upce = 5,
        [Encode("S205")]
        S205 = 6,
        [Encode("I2O5")]
        I2O5 = S205,
        [Encode("I25")]
        I25 = 7,
        [Encode("INTERLEAVED")]
        Interleaved = I25,
        [Encode("POSTNET")]
        Postnet = 8,
        [Encode("CODABAR")]
        Codabar = 9,
        [Encode("CODE128")]
        Code128 = 10,
        [Encode("CODE39")]
        Code39 = 11,
        [Encode("CODE93")]
        Code93 = 12
    }

    [AttributeUsage(AttributeTargets.Field)]
    internal class EncodeAttribute : Attribute
    {
        public string Name { get; }
        public Type Generator { get; }

        public EncodeAttribute(string name)
        {
            Name = name;
        }

        public EncodeAttribute(string name, Type generator)
        {
            Name = name;
            Generator = generator;
        }
    }

    internal static class EncodesExtensions
    {
        /// <summary>
        /// Returns name of the encoding
        /// </summary>
        /// <param name="e"></param>
        /// <returns></returns>
        public static string ToName(this Encodes e)
        {
            var info = e.GetType().GetRuntimeField(e.ToString());
            var attributes = info.GetCustomAttributes(typeof(EncodeAttribute), false);
            if (attributes != null)
            {
                foreach (var item in attributes)
                {
                    if (item is EncodeAttribute)
                        return (item as EncodeAttribute).Name;
                }
            }
            return e.ToString();
        }

        /// <summary>
        /// Returns whether or not the generator is implemented
        /// </summary>
        /// <param name="e"></param>
        /// <returns></returns>
        public static bool IsImplemented(this Encodes e)
        {
            var info = e.GetType().GetRuntimeField(e.ToString());
            var attributes = info.GetCustomAttributes(typeof(EncodeAttribute), false);
            return attributes != null && attributes.OfType<EncodeAttribute>().Select(item => item.Generator != null).FirstOrDefault();
        }

        internal static IGenerator GetGenerator(this Encodes e)
        {
            var info = e.GetType().GetRuntimeField(e.ToString());
            var attributes = info.GetCustomAttributes(typeof(EncodeAttribute), false);
            if (attributes == null) throw new Exception($"The field {e.ToString()} has no {nameof(EncodeAttribute)}.");
            foreach (var item in attributes)
            {
                if (!(item is EncodeAttribute)) continue;
                var attribute = item as EncodeAttribute;
                if (attribute.Generator == null)
                    throw new NotImplementedException($"The {e.ToName()} generator isn't implemented yet.");
                if (typeof(IGenerator).GetTypeInfo().IsAssignableFrom(attribute.Generator.GetTypeInfo()))
                {
                    return Activator.CreateInstance(attribute.Generator) as IGenerator;
                }

                throw new TypeLoadException($"The { e.ToName() } generator isn't of type {nameof(IGenerator)}");
            }
            throw new Exception($"The field {e.ToString()} has no {nameof(EncodeAttribute)}.");
        }
    }
}
