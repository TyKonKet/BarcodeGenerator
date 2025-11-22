using SkiaSharp;
using TyKonKet.BarcodeGenerator;

internal static class Example
{
    private static void CreateBarcodeImage()
    {
        // Set up the barcode generator with specific options
        using var barcodeGenerator = new Barcode(options =>
        {
            // Set the type of barcode to Code93
            options.Type = BarcodeTypes.Code93;
            // Set the height of the barcode
            options.Height = 30;
            // Set the scaling factor for the barcode
            options.Scaling = 10;
            // Set the margins around the barcode
            options.Margins = 2;
            // Set the background color of the barcode to transparent
            options.BackgroundColor = SKColors.Transparent;
            // Set the foreground color of the barcode to black
            options.ForegroundColor = SKColors.Black;
            // Enable rendering of text below the barcode
            options.RenderText = true;
            // Use the specified font family and style for the text
            options.UseTypeface("Arial", SKFontStyle.Normal);
        });

        // Encode the barcode with the specified string
        barcodeGenerator.Encode("THE-BARCODE");

        // Export the barcode image to a file
        // The file path can include the following keywords:
        // - {barcode}: The barcode string.
        // - {format}: The image format (e.g., png, jpg).
        // - {quality}: The image quality (1-100).
        barcodeGenerator.Export("path/{barcode}_{quality}.{format}", SKEncodedImageFormat.Png, 100);
    }
}
