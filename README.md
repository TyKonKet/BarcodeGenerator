# Barcode Generator

Barcode generator on .NET Standard 1.3
  
## NuGet

[![NuGet](https://img.shields.io/nuget/v/TyKonKet.BarcodeGenerator.svg)](https://www.nuget.org/packages/TyKonKet.BarcodeGenerator/)
  
## Usage

Include the [BarcodeGenerator NuGet package](https://www.nuget.org/packages/TyKonKet.BarcodeGenerator/) in your app:  

```` powershell
PM> Install-Package TyKonKet.BarcodeGenerator
````

## Program.cs

Now you can generates all the barcodes you want as you wish:  

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

## Encoders

- [x] EAN-13
- [x] UPC-A
- [x] ISBN
- [x] EAN-8
- [ ] CODE39
- [x] CODE93
- [ ] CODE128
