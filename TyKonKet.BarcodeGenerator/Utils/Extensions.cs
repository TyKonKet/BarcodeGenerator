namespace TyKonKet.BarcodeGenerator.Utils
{
    /// <summary>
    /// Provides extension methods for various types.
    /// </summary>
    internal static class Extensions
    {
        /// <summary>
        /// Converts a numeric character to its integer representation.
        /// </summary>
        /// <param name="digitChar">The character to convert.</param>
        /// <returns>The integer representation of the character.</returns>
        internal static int ToInt(this char digitChar)
        {
            return digitChar - '0';
        }
    }
}