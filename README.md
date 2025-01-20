# Barcode Generator

[![NuGet](https://img.shields.io/nuget/v/TyKonKet.BarcodeGenerator.svg)](https://www.nuget.org/packages/TyKonKet.BarcodeGenerator/)
[![NuGet](https://img.shields.io/nuget/dt/TyKonKet.BarcodeGenerator.svg)](https://www.nuget.org/packages/TyKonKet.BarcodeGenerator/)  
[![.NET Test Runner](https://github.com/TyKonKet/BarcodeGenerator/actions/workflows/dotnet_test_runner.yml/badge.svg)](https://github.com/TyKonKet/BarcodeGenerator/actions/workflows/dotnet_test_runner.yml)  
[![.NET Benchmark Runner](https://github.com/TyKonKet/BarcodeGenerator/actions/workflows/dotnet_benchmark_runner.yml/badge.svg)](https://github.com/TyKonKet/BarcodeGenerator/actions/workflows/dotnet_benchmark_runner.yml)  


Barcode generator based on [SkiaSharp](https://github.com/mono/SkiaSharp) library, supports the following encoders:
- EAN-13
- UPC-A
- ISBN
- EAN-8
- CODE93


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Getting Started](#getting-started)
- [Breaking Changes](#breaking-changes)
- [Roadmap](#roadmap)

## Installation

BarcodeGenerator is available as a convenient [NuGet package](https://www.nuget.org/packages/TyKonKet.BarcodeGenerator/).  
To install the package, use one of the following commands:
```` powershell
PM> Install-Package TyKonKet.BarcodeGenerator
````
````
nuget install TyKonKet.BarcodeGenerator
````


## Usage

You can generate all the barcodes using the `Barcode` class. The `Barcode` class has a constructor that accepts an `Action<BarcodeOptions>` delegate to set the barcode options. The `BarcodeOptions` class has the following properties:

- `Type`: Specifies the encoding type (e.g., `BarcodeTypes.Ean8`).
- `Height`: Sets the height of the barcode bars.
- `Scaling`: Sets the scale of the barcode image.
- `Margins`: Sets the margins around the barcode.
- `BackgroundColor`: Sets the background color of the barcode.
- `ForegroundColor`: Sets the color of the barcode.
- `RenderText`: Specifies whether to draw text below the barcode.

The `BarcodeOptions` class also provides several methods to configure the font used for the barcode text:

- `UseTypeface(SKTypeface typeface)`: Sets the `SKTypeface` for the barcode text.
- `UseTypeface(FontFamily fontFamily)`: Sets the font family for the barcode text, this can be either a string representing the font family name or a `FontFamilies` enum value.
- `UseTypeface(FontFamily fontFamily, SKFontStyle fontStyle)`: Sets the font family and style for the barcode text.
- `UseTypeface(FontFamily fontFamily, int weight, int width, SKFontStyleSlant fontStyleSlant)`: Sets the font family, weight, width, and style slant for the barcode text.
- `UseTypeface(FontFamily fontFamily, SKFontStyleWeight weight, SKFontStyleWidth width, SKFontStyleSlant fontStyleSlant)`: Sets the font family, weight, width, and style slant for the barcode text using `SKFontStyleWeight` and `SKFontStyleWidth`.
- `UseTypefaceFromFile(string path, int index = 0)`: Sets the typeface from a font file.
- `UseTypefaceFromData(SKData data, int index = 0)`: Sets the typeface from font data.
- `UseTypefaceFromStream(SKStreamAsset stream, int index = 0)`: Sets the typeface from a font stream.
- `UseTypefaceFromStream(Stream stream, int index = 0)`: Sets the typeface from a font stream.

These methods allow you to customize the font used for rendering text in the barcode, providing flexibility in font selection and styling.

## Getting Started

Here is an example of how to generate a barcode using the `Barcode` class:

```csharp
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
```

## Breaking Changes

- Starting with version 2.0.0, the library is no longer compatible with .NET Standard 1.3 since it uses SkiaSharp 3.116.1, which requires .NET Standard 2.0.
- Starting with version 2.0.0, the API has been changed to be more user-friendly and to allow more customization. Follow the examples in the README.md file to see how to use the new API.

## Roadmap

- [ ] Update the README.md documentation
- [ ] Add support for CODE39 and CODE128 encoders
- [ ] Add support for more barcode types
- [ ] Add an API to validate the barcode
