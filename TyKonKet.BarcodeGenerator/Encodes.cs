using System;
using System.Reflection;

namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// Available barcode encoding types
    /// </summary>
    public enum Encodes
    {
        /// <summary>
        /// 
        /// </summary>
        [Encode("EAN-13")]
        Ean13 = 1,
        /// <summary>
        /// 
        /// </summary>
        [Encode("UPC-A")]
        Upca = 2,
        /// <summary>
        /// 
        /// </summary>
        [Encode("ISBN-13")]
        Isbn13 = 3,
        /// <summary>
        /// 
        /// </summary>
        [Encode("EAN-8")] 
        Ean8 = 4,
        /// <summary>
        /// 
        /// </summary>
        [Encode("CODE-128")]
        Code128 = 5,
        /// <summary>
        /// 
        /// </summary>
        [Encode("CODE-39")]
        Code39 = 6,
        /// <summary>
        /// 
        /// </summary>
        [Encode("CODE-93")]
        Code93 = 7
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

    /// <summary>
    /// 
    /// </summary>
    public static class EncodesExtensions
    {
        /// <summary>
        /// Get the name of the encoding.
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