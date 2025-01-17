using System;

namespace TyKonKet.BarcodeGenerator.Attributes
{
    /// <summary>
    /// Attribute to specify the encoding name for a barcode field.
    /// This attribute can be applied to fields to indicate the type of barcode encoding used.
    /// </summary>
    [AttributeUsage(AttributeTargets.Field)]
    internal sealed class BarcodeEncodingAttribute : Attribute
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BarcodeEncodingAttribute"/> class
        /// with the specified barcode encoding name.
        /// </summary>
        /// <param name="name">The name of the barcode encoding.</param>
        public BarcodeEncodingAttribute(string name)
        {
            this.Name = name;
        }

        /// <summary>
        /// Gets the name of the barcode encoding.
        /// </summary>
        /// <value>
        /// A <see cref="string"/> representing the name of the barcode encoding.
        /// </value>
        public string Name { get; }
    }
}
