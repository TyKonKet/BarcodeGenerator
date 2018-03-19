using System;
using TyKonKet.BarcodeGenerator.Generators;
using System.Reflection;

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// Available barcode encoding types
    /// </summary>
    public enum Encodes
    {
        [Encode("EAN-13")]
        EAN13 = 1,
        [Encode("UPC-A")]
        UPCA = 2,
        [Encode("ISBN")]
        ISBN = 3,
        [Encode("EAN-8", typeof(EAN8Generator))]
        EAN8 = 4,
        [Encode("UPC-E")]
        UPCE = 5,
        [Encode("S205")]
        S205 = 6,
        [Encode("I2O5")]
        I2O5 = S205,
        [Encode("I25")]
        I25 = 7,
        [Encode("INTERLEAVED")]
        INTERLEAVED = I25,
        [Encode("POSTNET")]
        POSTNET = 8,
        [Encode("CODABAR")]
        CODABAR = 9,
        [Encode("CODE128")]
        CODE128 = 10,
        [Encode("CODE39")]
        CODE39 = 11,
        [Encode("CODE93")]
        CODE93 = 12
    }

    [AttributeUsage(AttributeTargets.Field)]
    internal class EncodeAttribute : Attribute
    {
        public string Name { get; set; }
        public Type Generator { get; set; }

        public EncodeAttribute()
        {

        }

        public EncodeAttribute(string name)
        {
            Name = name;
        }

        public EncodeAttribute(Type generator)
        {
            Generator = generator;
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
                foreach (Attribute item in attributes)
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
            if (attributes != null)
            {
                foreach (Attribute item in attributes)
                {
                    if (item is EncodeAttribute)
                        return (item as EncodeAttribute).Generator != null;
                }
            }
            return false;
        }

        internal static IGenerator GetGenerator(this Encodes e)
        {
            var info = e.GetType().GetRuntimeField(e.ToString());
            var attributes = info.GetCustomAttributes(typeof(EncodeAttribute), false);
            if (attributes != null)
            {
                foreach (Attribute item in attributes)
                {
                    if (item is EncodeAttribute)
                    {
                        var attribute = item as EncodeAttribute;
                        if (attribute.Generator != null)
                        {
                            if (typeof(IGenerator).GetTypeInfo().IsAssignableFrom(attribute.Generator.GetTypeInfo()))
                            {
                                return Activator.CreateInstance(attribute.Generator) as IGenerator;
                            }
                            else
                            {
                                throw new TypeLoadException($"The { e.ToName() } generator isn't of type {nameof(IGenerator)}");
                            }
                        }
                        else
                        {
                            throw new NotImplementedException($"The {e.ToName()} generator isn't implemented yet.");
                        }
                    }
                }
            }
            throw new Exception($"The field {e.ToString()} has no {nameof(EncodeAttribute)}.");
        }
    }
}
