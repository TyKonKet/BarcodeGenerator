using System.Reflection;
using TyKonKet.BarcodeGenerator.Attributes;

namespace TyKonKet.BarcodeGenerator.Utils
{
    /// <summary>
    /// Extension methods for the Encodes enum
    /// </summary>
    public static class EncodesExtensions
    {
        /// <summary>
        /// Get the name of the encoding.
        /// </summary>
        /// <param name="e">The encoding type</param>
        /// <returns>The name of the encoding</returns>
        public static string GetDisplayName(this BarcodeEncodings e)
        {
            var info = typeof(BarcodeEncodings).GetRuntimeField(e.ToString());
            var attributes = info.GetCustomAttributes(typeof(BarcodeEncodingAttribute), inherit: false);
            if (attributes == null)
            {
                return e.ToString();
            }

            foreach (var item in attributes)
            {
                if (item is BarcodeEncodingAttribute encodeAttribute)
                {
                    return encodeAttribute.Name;
                }
            }

            return e.ToString();
        }
    }
}