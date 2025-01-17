using System.Reflection;
using TyKonKet.BarcodeGenerator.Attributes;

namespace TyKonKet.BarcodeGenerator.Utils
{
    /// <summary>
    /// Provides extension methods for the <see cref="BarcodeEncodings"/> enum.
    /// </summary>
    public static class EncodesExtensions
    {
        /// <summary>
        /// Retrieves the display name of the specified barcode encoding.
        /// </summary>
        /// <param name="e">The barcode encoding type.</param>
        /// <returns>The display name of the barcode encoding, or the enum name if no display name is found.</returns>
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