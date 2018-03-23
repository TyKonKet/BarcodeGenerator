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
        [Encode("UPC-E")] //delayed
        Upce = 5,
        [Encode("I25")] //delayed
        I25 = 6,
        [Encode("I25INTERLEAVED")] //delayed
        I25Interleaved = 7,
        [Encode("CODE128")]
        Code128 = 8,
        [Encode("CODE39")]
        Code39 = 9,
        [Encode("CODE93")]
        Code93 = 10
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
