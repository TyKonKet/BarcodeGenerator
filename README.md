# Barcode Generator
Barcode generator based on [SkiaSharp](https://github.com/mono/SkiaSharp) library.
  
[![NuGet](https://img.shields.io/nuget/v/TyKonKet.BarcodeGenerator.svg)](https://www.nuget.org/packages/TyKonKet.BarcodeGenerator/)
  
## Usage
BarcodeGenerator is available as a convenient [NuGet package](https://www.nuget.org/packages/TyKonKet.BarcodeGenerator/), to use install the package like this:

```` powershell
PM> Install-Package TyKonKet.BarcodeGenerator
````
````
nuget install TyKonKet.BarcodeGenerator
````

## Getting started

You can generate all the barcodes using the `Barcode` class. The `Barcode` class has a constructor that accepts an `Action<BarcodeOptions>` delegate to set the barcode options. The `BarcodeOptions` class has the following properties:  

```csharp
using TyKonKet.BarcodeGenerator;

internal static class Program
{
    private static void Main()
    {
        var bc = new Barcode(o =>
        {
            o.Encode = Encodes.Code93;
            o.Height = 30;
            o.Scale = 10;
            o.Margins = 2;
            o.BackgroundColor = SKColors.Transparent;
            o.Color = SKColors.Black;
            o.Font = "Arial";
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

## Breaking changes
- Starting with version 2.0.0, the library is no more compatible with .NET Standard 1.3 since it uses SkiaSharp 3.116.1 which requires .NET Standard 2.0
- Starting with version 2.0.0, the API has been changed to be more user-friendly and to allow more customization, follow the examples in the README.md file to see how to use the new API


## Supported encoders

- [x] EAN-13
- [x] UPC-A
- [x] ISBN
- [x] EAN-8
- [ ] CODE39
- [x] CODE93
- [ ] CODE128


## Roadmap
- [ ] Update the README.md documentation
- [ ] Add support for CODE39 and CODE128 encoders
- [ ] Add support for more barcode types
- [ ] Add an API to validate the barcode