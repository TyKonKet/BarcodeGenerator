# Barcode Generator

[![NuGet](https://img.shields.io/nuget/v/TyKonKet.BarcodeGenerator.svg)](https://www.nuget.org/packages/TyKonKet.BarcodeGenerator/)
[![NuGet](https://img.shields.io/nuget/dt/TyKonKet.BarcodeGenerator.svg)](https://www.nuget.org/packages/TyKonKet.BarcodeGenerator/)


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

- `Encode`: Specifies the encoding type (e.g., `Encodes.Code93`).
- `Height`: Sets the height of the barcode.
- `Scale`: Sets the scale of the barcode.
- `Margins`: Sets the margins around the barcode.
- `BackgroundColor`: Sets the background color of the barcode.
- `Color`: Sets the color of the barcode.
- `Font`: Sets the font for the barcode text.
- `FontStyle`: Sets the font style for the barcode text.
- `DrawText`: Specifies whether to draw text below the barcode.

## Getting Started

Here is an example of how to generate a barcode using the `Barcode` class:

```csharp
using TyKonKet.BarcodeGenerator;

internal static class Program
{
    private static void Main()
    {
        var bc = new Barcode(o =>
        {
            o.Encode = Encodes.Code93;
            o.Height = 30; o.Scale = 10;
            o.Margins = 2;
            o.BackgroundColor = SKColors.Transparent;
            o.Color = SKColors.Black; o.Font = "Arial";
            o.FontStyle = SKFontStyle.Normal;
            o.DrawText = false;
        });
        bc.Encode("THE-BARCODE");
        // you can use {barcode} keyword in the file path
        bc.Export("barcodes_path/bc_{barcode}.png");
        bc.Dispose();
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