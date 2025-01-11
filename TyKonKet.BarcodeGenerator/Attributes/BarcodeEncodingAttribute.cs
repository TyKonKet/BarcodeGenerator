using System;

namespace TyKonKet.BarcodeGenerator.Attributes
{
    /// <summary>
    /// Attribute to specify the encoding name for a barcode field.
    /// </summary>
    [AttributeUsage(AttributeTargets.Field)]
    internal sealed class BarcodeEncodingAttribute : Attribute
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BarcodeEncodingAttribute"/> class.
        /// </summary>
        /// <param name="name">The name of the barcode encoding.</param>
        public BarcodeEncodingAttribute(string name)
        {
            this.Name = name;
        }

        /// <summary>
        /// Gets the name of the barcode encoding.
        /// </summary>
        public string Name { get; }
    }
}
