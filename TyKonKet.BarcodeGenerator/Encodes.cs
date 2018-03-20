using System;
using System.Reflection;

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// Available barcode encoding types
    /// </summary>
    public enum Encodes
    {
        [Encode("EAN-13")]
        Ean13 = 1,
        [Encode("UPC-A")]
        Upca = 2,
        [Encode("ISBN-13")]
        Isbn13 = 3,
        [Encode("EAN-8")]
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

        public EncodeAttribute(string name)
        {
            Name = name;
        }
    }

    public static class EncodesExtensions
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
    }
}
