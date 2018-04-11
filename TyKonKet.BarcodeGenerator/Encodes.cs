using System;
using System.Reflection;

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    ///     Available barcode encoding types
    /// </summary>
    public enum Encodes
    {
        [Encode("EAN-13")] Ean13 = 1,
        [Encode("UPC-A")] Upca = 2,
        [Encode("ISBN-13")] Isbn13 = 3,
        [Encode("EAN-8")] Ean8 = 4,
        [Encode("CODE-128")] Code128 = 5,
        [Encode("CODE-39")] Code39 = 6,
        [Encode("CODE-93")] Code93 = 7
    }

    [AttributeUsage(AttributeTargets.Field)]
    internal class EncodeAttribute : Attribute
    {
        public EncodeAttribute(string name)
        {
            Name = name;
        }

        public string Name { get; }
    }

    public static class EncodesExtensions
    {
        /// <summary>
        ///     Get the name of the encoding.
        /// </summary>
        public static string ToName(this Encodes e)
        {
            var info = e.GetType().GetRuntimeField(e.ToString());
            var attributes = info.GetCustomAttributes(typeof(EncodeAttribute), false);
            if (attributes == null) return e.ToString();
            foreach (var item in attributes)
                if (item is EncodeAttribute)
                    return (item as EncodeAttribute).Name;
            return e.ToString();
        }
    }
}