# TyKonKet.BarcodeGenerator
Barcode generator on .NET Standard 1.3
  
# NuGet:
[![NuGet](https://img.shields.io/nuget/v/TyKonKet.BarcodeGenerator.svg)](https://www.nuget.org/packages/TyKonKet.BarcodeGenerator/)
  
# Usage:
Include the [BarcodeGenerator NuGet package](https://www.nuget.org/packages/TyKonKet.BarcodeGenerator/) in your app:  
```PM> Install-Package TyKonKet.BarcodeGenerator```
## Program.cs
Now you can generates all the barcodes you want as you wish:  
```csharp
class Program
{
    static void Main(string[] args)
    {
        var bc = new Barcode()
        {
            Encode = Encode.EAN8,
            Height = 30,
            Scale = 5,
        };
        bc.GenerateBarcode("barcode", "path/filename.extension");
    }
}
```

# Encoders
- [ ] EAN-13
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
