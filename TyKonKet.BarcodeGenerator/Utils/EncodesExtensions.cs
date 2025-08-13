using System.Reflection;
using TyKonKet.BarcodeGenerator.Attributes;

namespace TyKonKet.BarcodeGenerator.Utils
{
    /// <summary>
    /// Provides extension methods for the <see cref="BarcodeTypes"/> enum.
    /// </summary>
    public static class EncodesExtensions
    {
        /// <summary>
        /// Retrieves the display name of the specified barcode encoding.
        /// </summary>
        /// <param name="e">The barcode encoding type.</param>
        /// <returns>The display name of the barcode encoding, or the enum name if no display name is found.</returns>
        public static string GetDisplayName(this BarcodeTypes e)
        {
            var enumName = e.ToString();

            var info = typeof(BarcodeTypes).GetRuntimeField(enumName);
            if (info == null)
            {
                return enumName;
            }

            var attributes = info.GetCustomAttributes(typeof(BarcodeEncodingAttribute), inherit: false);
            if (attributes == null)
            {
                return enumName;
            }

            foreach (var item in attributes)
            {
                if (item is BarcodeEncodingAttribute encodeAttribute)
                {
                    return encodeAttribute.Name;
                }
            }

            return enumName;
        }
    }
}