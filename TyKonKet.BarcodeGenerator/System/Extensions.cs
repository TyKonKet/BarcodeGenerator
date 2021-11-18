// ReSharper disable once CheckNamespace
namespace TyKonKet.BarcodeGenerator
{
    /// <summary>
    /// 
    /// </summary>
    public static class Extensions
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="c"></param>
        /// <returns></returns>
        public static int ToInt(this char c)
        {
            return c - '0';
        }
    }
}