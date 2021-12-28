// ReSharper disable once CheckNamespace
namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// 
    /// </summary>
    internal static class Extensions
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="c"></param>
        /// <returns></returns>
        internal static int ToInt(this char c)
        {
            return c - '0';
        }
    }
}