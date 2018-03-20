# Barcode Generator
Barcode generator on .NET Standard 1.3
  
# NuGet:
[![NuGet](https://img.shields.io/nuget/v/TyKonKet.BarcodeGenerator.svg)](https://www.nuget.org/packages/TyKonKet.BarcodeGenerator/)
  
# Usage:
Include the [BarcodeGenerator NuGet package](https://www.nuget.org/packages/TyKonKet.BarcodeGenerator/) in your app:  
````
PM> Install-Package TyKonKet.BarcodeGenerator
````
## Program.cs
Now you can generates all the barcodes you want as you wish:  
```csharp
internal static class Program
{
    private static void Main()
    {
        var bc = new Barcode(o =>
        {
            o.Encode = Encodes.Ean13;
            o.Height = 30;
            o.Scale = 5;
            o.BgColor = Rgba32.Transparent;
            o.Color = Rgba32.Black;
            o.Font = "Arial";
            o.FontStyle = FontStyle.Regular;
            o.ShowText = false;
        });
        bc.GenerateBarcode("barcode", "path/filename.extension");
    }
}
```

# Encoders
- [x] EAN-13
- [ ] UPC-A
- [ ] ISBN
- [x] EAN-8
- [ ] UPC-E
- [ ] S205
- [ ] I2O5
- [ ] I25
- [ ] INTERLEAVED
- [ ] POSTNET
- [ ] CODABAR
- [ ] CODE128
- [ ] CODE39
- [ ] CODE93
