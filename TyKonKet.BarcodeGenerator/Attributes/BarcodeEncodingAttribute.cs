using System;

namespace TyKonKet.BarcodeGenerator.Attributes
{
    /// <summary>
    /// Attribute to specify the encoding name for a barcode field.
    /// This attribute can be applied to fields to indicate the type of barcode encoding used.
    /// </summary>
    /// <remarks>
    /// Initializes a new instance of the <see cref="BarcodeEncodingAttribute"/> class
    /// with the specified barcode encoding name.
    /// </remarks>
    /// <param name="name">The name of the barcode encoding.</param>
    [AttributeUsage(AttributeTargets.Field)]
    internal sealed class BarcodeEncodingAttribute(string name) : Attribute
    {
        /// <summary>
        /// Gets the name of the barcode encoding.
        /// </summary>
        /// <value>
        /// A <see cref="string"/> representing the name of the barcode encoding.
        /// </value>
        public string Name { get; } = name;
    }
}
