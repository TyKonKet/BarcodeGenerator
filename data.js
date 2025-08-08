window.BENCHMARK_DATA = {
  "lastUpdate": 1754695050769,
  "repoUrl": "https://github.com/TyKonKet/BarcodeGenerator",
  "entries": {
    "Ean8Encoder": [
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "2cb89ab33c59ddb261a47fe5c6f37054c27af364",
          "message": "Update benchmark configurations and clean up code\n\n- Changed output file path for Ean8Encoder benchmark results in `dotnet_benchmark_runner.yml` to improve organization.\n- Updated job configuration in `BenchmarkConfig.cs` from `Job.ShortRun` to `Job.Default` for a more comprehensive benchmarking environment.\n- Removed unused `using System.IO;` directive in `Program.cs` for code cleanliness.",
          "timestamp": "2025-01-19T18:59:49+01:00",
          "tree_id": "6da8885261bc945e90dd166439e46b4b1cb86cc6",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/2cb89ab33c59ddb261a47fe5c6f37054c27af364"
        },
        "date": 1737309728908,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15485.51596069336,
            "unit": "ns",
            "range": "± 154.269807367098"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 15501.210107421875,
            "unit": "ns",
            "range": "± 192.6767850709541"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18588.873911539715,
            "unit": "ns",
            "range": "± 220.37816373067108"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25688.44629313151,
            "unit": "ns",
            "range": "± 207.68607199647292"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 531231.4305338542,
            "unit": "ns",
            "range": "± 6439.157378778705"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "2a64e397e911ed9008dea047f674e1050862ef16",
          "message": "Add Ean13Encoder class for barcode performance benchmarking\n\nIntroduces the `Ean13Encoder` class in the\n`TyKonKet.BarcodeGenerator.CB.Benchmarks` namespace.\nThis class benchmarks EAN-13 barcode encoding operations\nusing BenchmarkDotNet and SkiaSharp. It includes methods\nfor creating barcode instances, encoding, and exporting\nto a file, along with setup and cleanup methods for\nbenchmarking.",
          "timestamp": "2025-01-19T19:15:35+01:00",
          "tree_id": "27325f6f6b60ab4e98576262196a84825b9fd5fa",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/2a64e397e911ed9008dea047f674e1050862ef16"
        },
        "date": 1737310804939,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15221.030217488607,
            "unit": "ns",
            "range": "± 194.92506929803966"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16573.155604771204,
            "unit": "ns",
            "range": "± 158.0416400286915"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19170.622161865234,
            "unit": "ns",
            "range": "± 75.30292002936982"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26742.74525756836,
            "unit": "ns",
            "range": "± 139.30580764388228"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 537160.6462239583,
            "unit": "ns",
            "range": "± 1816.8948731355295"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "446f58b7fc4acd8d22a14ea54ccc16ea7f0575c1",
          "message": "Add Ean13Encoder benchmark result storage to GitHub Actions workflow",
          "timestamp": "2025-01-19T20:12:49+01:00",
          "tree_id": "6ef34e5df2d4f91c2b12dc4b3affc3b0dcf60c2d",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/446f58b7fc4acd8d22a14ea54ccc16ea7f0575c1"
        },
        "date": 1737314212981,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15451.048557535807,
            "unit": "ns",
            "range": "± 243.02349416624205"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 15802.271416297326,
            "unit": "ns",
            "range": "± 228.91233374501027"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19161.374662272134,
            "unit": "ns",
            "range": "± 176.03354539003146"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25957.6183497111,
            "unit": "ns",
            "range": "± 108.4572204787267"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 537750.0522786458,
            "unit": "ns",
            "range": "± 3412.011923469711"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "323ccb63544e6366985e0c03552ca64692a92e08",
          "message": "Add UpcaEncoder benchmark class and CI configuration\n\nIntroduce a new benchmarking class `UpcaEncoder` using BenchmarkDotNet to measure barcode encoding performance. The class includes methods for encoding with and without text, and for exporting the encoded barcode to a file. Update `dotnet_benchmark_runner.yml` to configure the benchmark action with alert comments and GitHub token authentication.",
          "timestamp": "2025-01-19T20:30:04+01:00",
          "tree_id": "abc474fee5719c7eebb4c8cb27a85a8c300e33d7",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/323ccb63544e6366985e0c03552ca64692a92e08"
        },
        "date": 1737315352109,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 14715.714804513114,
            "unit": "ns",
            "range": "± 112.56597434671035"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16252.818714686802,
            "unit": "ns",
            "range": "± 198.27827116091547"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19034.339963640487,
            "unit": "ns",
            "range": "± 91.06582856533338"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26416.60712843675,
            "unit": "ns",
            "range": "± 114.86742572034082"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 540173.2554408482,
            "unit": "ns",
            "range": "± 2666.405592895706"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "30538055206d4e664a4cf38f10bf5d6c0080d500",
          "message": "Add Isbn13Encoder benchmarks and update CI configuration\n\nIntroduce a new benchmark class `Isbn13Encoder` using BenchmarkDotNet to measure barcode encoding performance. The class includes methods for encoding with and without text, as well as exporting to a file. Update `dotnet_benchmark_runner.yml` to configure benchmark actions and specify output file paths.",
          "timestamp": "2025-01-19T20:37:16+01:00",
          "tree_id": "46aae9c473041fb47cf96e17505daceca3de0e19",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/30538055206d4e664a4cf38f10bf5d6c0080d500"
        },
        "date": 1737315860117,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 14213.764663696289,
            "unit": "ns",
            "range": "± 275.3141371718549"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 15685.298016357421,
            "unit": "ns",
            "range": "± 148.54568492910664"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18960.710124424524,
            "unit": "ns",
            "range": "± 80.22582212054823"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26066.355817522322,
            "unit": "ns",
            "range": "± 77.43106299259819"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 584670.0451171875,
            "unit": "ns",
            "range": "± 1802.9365296751093"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "eacc8dc0473d6d87920de88f929554051f060587",
          "message": "Add Code93Encoder benchmark class and update config\n\nIntroduce a new `Code93Encoder` class for benchmarking barcode encoding using BenchmarkDotNet. This class includes methods for encoding with and without text, as well as exporting to a file. Update `dotnet_benchmark_runner.yml` to configure benchmark actions and alert settings.",
          "timestamp": "2025-01-19T20:39:18+01:00",
          "tree_id": "05d89d089fce28b7e8c12c1ef29edf4d2a7c28c5",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/eacc8dc0473d6d87920de88f929554051f060587"
        },
        "date": 1737316810118,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15459.921204703194,
            "unit": "ns",
            "range": "± 131.4215792920354"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 15756.410717303936,
            "unit": "ns",
            "range": "± 113.91183719209327"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19097.351908365887,
            "unit": "ns",
            "range": "± 143.99016473537483"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25760.8744140625,
            "unit": "ns",
            "range": "± 101.13079658697261"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 537500.6487862723,
            "unit": "ns",
            "range": "± 1427.7834007276801"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "TyKonKet",
            "username": "TyKonKet",
            "email": "matteoautieri@live.it"
          },
          "committer": {
            "name": "TyKonKet",
            "username": "TyKonKet",
            "email": "matteoautieri@live.it"
          },
          "id": "eacc8dc0473d6d87920de88f929554051f060587",
          "message": "Add Code93Encoder benchmark class and update config\n\nIntroduce a new `Code93Encoder` class for benchmarking barcode encoding using BenchmarkDotNet. This class includes methods for encoding with and without text, as well as exporting to a file. Update `dotnet_benchmark_runner.yml` to configure benchmark actions and alert settings.",
          "timestamp": "2025-01-19T19:39:18Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/eacc8dc0473d6d87920de88f929554051f060587"
        },
        "date": 1737317648763,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15419.974380493164,
            "unit": "ns",
            "range": "± 224.58228087438394"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 15940.432020060221,
            "unit": "ns",
            "range": "± 263.84963053414776"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18924.64568481445,
            "unit": "ns",
            "range": "± 118.5531977345662"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26055.94486287435,
            "unit": "ns",
            "range": "± 123.13101423377529"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 536988.7414362981,
            "unit": "ns",
            "range": "± 1108.9269842535746"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "5060498f4400eb32e3cb11466a6de5f18e8ca7e6",
          "message": "Change barcode type to Code93 in Code93Encoder.cs\n\nUpdated the `barcodeType` variable from `BarcodeTypes.Code39` to `BarcodeTypes.Code93` to reflect the new barcode type being utilized in the encoder.",
          "timestamp": "2025-01-19T21:36:58+01:00",
          "tree_id": "68159f434e90188e0c68a023deedbdcccf66e4b3",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/5060498f4400eb32e3cb11466a6de5f18e8ca7e6"
        },
        "date": 1737319545569,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15605.064520263672,
            "unit": "ns",
            "range": "± 250.60922718566053"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16378.225816853841,
            "unit": "ns",
            "range": "± 305.4896165210405"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18931.8719136556,
            "unit": "ns",
            "range": "± 89.18732498973635"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26018.012093098958,
            "unit": "ns",
            "range": "± 106.53304066997032"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 537754.0449869792,
            "unit": "ns",
            "range": "± 2107.241463655702"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "TyKonKet",
            "username": "TyKonKet",
            "email": "matteoautieri@live.it"
          },
          "committer": {
            "name": "TyKonKet",
            "username": "TyKonKet",
            "email": "matteoautieri@live.it"
          },
          "id": "5060498f4400eb32e3cb11466a6de5f18e8ca7e6",
          "message": "Change barcode type to Code93 in Code93Encoder.cs\n\nUpdated the `barcodeType` variable from `BarcodeTypes.Code39` to `BarcodeTypes.Code93` to reflect the new barcode type being utilized in the encoder.",
          "timestamp": "2025-01-19T20:36:58Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/5060498f4400eb32e3cb11466a6de5f18e8ca7e6"
        },
        "date": 1737361496620,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 14356.668284824917,
            "unit": "ns",
            "range": "± 220.55452245733528"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 15734.904767717633,
            "unit": "ns",
            "range": "± 152.80952921000946"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19027.413000488283,
            "unit": "ns",
            "range": "± 77.22604493798858"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25883.198174031575,
            "unit": "ns",
            "range": "± 99.55315322250141"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 537364.5171223958,
            "unit": "ns",
            "range": "± 1771.325813259534"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2db2916f2b841fe77c8a7483a6b3634fd1156f3",
          "message": "Update README.md",
          "timestamp": "2025-01-20T11:25:26+01:00",
          "tree_id": "3c68fcd50010c009d4943d616b74adfcc4f322f4",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/f2db2916f2b841fe77c8a7483a6b3634fd1156f3"
        },
        "date": 1737369268629,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15395.130147298178,
            "unit": "ns",
            "range": "± 170.56268252992905"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 15931.160658772786,
            "unit": "ns",
            "range": "± 235.45272370868602"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18950.917846679688,
            "unit": "ns",
            "range": "± 87.48750955164262"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25956.54774240347,
            "unit": "ns",
            "range": "± 109.40653691601503"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 535876.535563151,
            "unit": "ns",
            "range": "± 718.0000119010607"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24608eb6e60951a8ee6a435a6c64998ec231bb85",
          "message": "Merge pull request #3 from TyKonKet/copilot/fix-7ca2238d-bf54-4ab3-ac32-1dcff0360c78\n\nAdd comprehensive .github/copilot-instructions.md to onboard coding agents",
          "timestamp": "2025-08-08T22:35:51+02:00",
          "tree_id": "2c46eaa8b21abcd6e1df7d8998546a05dc997a4a",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/24608eb6e60951a8ee6a435a6c64998ec231bb85"
        },
        "date": 1754685843967,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 14527.843505859375,
            "unit": "ns",
            "range": "± 107.68368023956323"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16338.552411760602,
            "unit": "ns",
            "range": "± 202.86642315808774"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18914.88246506911,
            "unit": "ns",
            "range": "± 12.330814791109468"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26129.66055094401,
            "unit": "ns",
            "range": "± 43.05345236515323"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 536307.2486746652,
            "unit": "ns",
            "range": "± 584.4447051702172"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "1de459c17a23185b3f4c18d5993471d84792c603",
          "message": "Update branch reference from 'master' to 'main' in workflow files",
          "timestamp": "2025-08-08T22:53:06+02:00",
          "tree_id": "ac8bd802af4fc6893132968ac826d63231605338",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/1de459c17a23185b3f4c18d5993471d84792c603"
        },
        "date": 1754687025100,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15471.380889044867,
            "unit": "ns",
            "range": "± 478.2347697655904"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16663.124150202824,
            "unit": "ns",
            "range": "± 277.1259951951923"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18939.671570997973,
            "unit": "ns",
            "range": "± 27.412289468454905"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26235.007322184243,
            "unit": "ns",
            "range": "± 55.862691297860586"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 536108.6976143973,
            "unit": "ns",
            "range": "± 554.0787747646835"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fffda0ed364a4c53793fd53fe280760fc93bb8c1",
          "message": "Merge pull request #4 from TyKonKet/copilot/fix-8fc91e55-9463-4ac4-b567-fb08b5ec21e9\n\nUpdate bug report templates to be library-focused for .NET BarcodeGenerator",
          "timestamp": "2025-08-09T00:15:05+02:00",
          "tree_id": "c6de7560f8f17c6fa691afd853751980dee4b71c",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/fffda0ed364a4c53793fd53fe280760fc93bb8c1"
        },
        "date": 1754691864657,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15634.638169352214,
            "unit": "ns",
            "range": "± 137.96257489823785"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16082.478733317057,
            "unit": "ns",
            "range": "± 126.59503943744333"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19347.194974263508,
            "unit": "ns",
            "range": "± 28.59292564370843"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26075.448827107746,
            "unit": "ns",
            "range": "± 40.604470026184615"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 535586.8519005409,
            "unit": "ns",
            "range": "± 398.3392794718939"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6d6c95c4431655230d795a8a6cd1d1510665be0",
          "message": "Merge pull request #5 from TyKonKet/copilot/fix-6dad0733-93cf-4758-b0b8-9c5cdf727419\n\nAdd GitHub Issue Forms for feature requests with multi-language .NET support",
          "timestamp": "2025-08-09T00:50:52+02:00",
          "tree_id": "38621987e62c3dae3cbd05ef66570cf4415a5a5a",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/a6d6c95c4431655230d795a8a6cd1d1510665be0"
        },
        "date": 1754693972145,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15611.383989461263,
            "unit": "ns",
            "range": "± 151.2256299449211"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 15948.657063802084,
            "unit": "ns",
            "range": "± 117.13472155986037"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19176.928803507486,
            "unit": "ns",
            "range": "± 285.4484152893486"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25942.496826171875,
            "unit": "ns",
            "range": "± 57.56337889375034"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 536052.6669170673,
            "unit": "ns",
            "range": "± 900.524327737406"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc870c059b6fd4812cb188594d7943388b0e56b6",
          "message": "Update feature_request.yml",
          "timestamp": "2025-08-09T00:56:40+02:00",
          "tree_id": "148636ce1f97f1b8ff172f79167a66f14f0279a6",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/bc870c059b6fd4812cb188594d7943388b0e56b6"
        },
        "date": 1754694320009,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15200.170145670572,
            "unit": "ns",
            "range": "± 149.5987442366551"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16813.97051188151,
            "unit": "ns",
            "range": "± 162.8584939007505"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19144.57551574707,
            "unit": "ns",
            "range": "± 225.7524111458179"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25966.839708600724,
            "unit": "ns",
            "range": "± 82.39819095270164"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 536610.765764509,
            "unit": "ns",
            "range": "± 1307.7181336241015"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1b21ab76eed77ba76ed3d4cd641606876b434dc",
          "message": "Update bug_report.yml",
          "timestamp": "2025-08-09T01:04:08+02:00",
          "tree_id": "8910dae4205218ae123c9b270ee6cbb41ccd2ae8",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/d1b21ab76eed77ba76ed3d4cd641606876b434dc"
        },
        "date": 1754694777767,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15463.63623046875,
            "unit": "ns",
            "range": "± 79.83541574668621"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16023.6998046875,
            "unit": "ns",
            "range": "± 94.72068465274396"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19023.911407470703,
            "unit": "ns",
            "range": "± 28.090553393160587"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26285.848765781946,
            "unit": "ns",
            "range": "± 36.38686282989764"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 535935.9443359375,
            "unit": "ns",
            "range": "± 499.3125771997082"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47a43e6e572ec9f1d0c5777d31158e299a67bc10",
          "message": "Update bug_report.yml",
          "timestamp": "2025-08-09T01:09:17+02:00",
          "tree_id": "db4d3ad65f4d21a77b968cd2ce9532e445e663aa",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/47a43e6e572ec9f1d0c5777d31158e299a67bc10"
        },
        "date": 1754695039774,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 14386.706205240886,
            "unit": "ns",
            "range": "± 84.95045063095337"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16080.163142903646,
            "unit": "ns",
            "range": "± 114.71727977181517"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19286.934374128068,
            "unit": "ns",
            "range": "± 41.608373459479445"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26633.421279907227,
            "unit": "ns",
            "range": "± 107.17666277843215"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 536621.1458333334,
            "unit": "ns",
            "range": "± 411.65474540888096"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7764b318e2ef66dcbacbd8fedbca75218f0036ac",
          "message": "Update feature_request.yml",
          "timestamp": "2025-08-09T01:09:00+02:00",
          "tree_id": "df7415d590ec55bb3ce3402fdf0b355ec0e0ea6f",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/7764b318e2ef66dcbacbd8fedbca75218f0036ac"
        },
        "date": 1754695046000,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 14384.328877040318,
            "unit": "ns",
            "range": "± 105.82394884142927"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16067.485706035908,
            "unit": "ns",
            "range": "± 148.82015678831695"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18916.03279231145,
            "unit": "ns",
            "range": "± 29.87160618392947"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26179.007016863143,
            "unit": "ns",
            "range": "± 64.06093950076546"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 536695.6820591518,
            "unit": "ns",
            "range": "± 687.7416411730691"
          }
        ]
      }
    ],
    "Ean13Encoder": [
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "446f58b7fc4acd8d22a14ea54ccc16ea7f0575c1",
          "message": "Add Ean13Encoder benchmark result storage to GitHub Actions workflow",
          "timestamp": "2025-01-19T20:12:49+01:00",
          "tree_id": "6ef34e5df2d4f91c2b12dc4b3affc3b0dcf60c2d",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/446f58b7fc4acd8d22a14ea54ccc16ea7f0575c1"
        },
        "date": 1737314213761,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18439.84530843099,
            "unit": "ns",
            "range": "± 315.41508385495155"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 19962.48114827474,
            "unit": "ns",
            "range": "± 317.545273804595"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25226.14046427409,
            "unit": "ns",
            "range": "± 165.2520967644789"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38422.52017211914,
            "unit": "ns",
            "range": "± 117.32239997942864"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 723317.2261067708,
            "unit": "ns",
            "range": "± 1616.8623273424532"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "323ccb63544e6366985e0c03552ca64692a92e08",
          "message": "Add UpcaEncoder benchmark class and CI configuration\n\nIntroduce a new benchmarking class `UpcaEncoder` using BenchmarkDotNet to measure barcode encoding performance. The class includes methods for encoding with and without text, and for exporting the encoded barcode to a file. Update `dotnet_benchmark_runner.yml` to configure the benchmark action with alert comments and GitHub token authentication.",
          "timestamp": "2025-01-19T20:30:04+01:00",
          "tree_id": "abc474fee5719c7eebb4c8cb27a85a8c300e33d7",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/323ccb63544e6366985e0c03552ca64692a92e08"
        },
        "date": 1737315353860,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18795.344069631476,
            "unit": "ns",
            "range": "± 411.12226670894677"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20879.4090423584,
            "unit": "ns",
            "range": "± 460.7139191283784"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25572.69973144531,
            "unit": "ns",
            "range": "± 116.01320556570266"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38344.58363560268,
            "unit": "ns",
            "range": "± 232.86825801009158"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 723766.0440755208,
            "unit": "ns",
            "range": "± 1865.451445367533"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "30538055206d4e664a4cf38f10bf5d6c0080d500",
          "message": "Add Isbn13Encoder benchmarks and update CI configuration\n\nIntroduce a new benchmark class `Isbn13Encoder` using BenchmarkDotNet to measure barcode encoding performance. The class includes methods for encoding with and without text, as well as exporting to a file. Update `dotnet_benchmark_runner.yml` to configure benchmark actions and specify output file paths.",
          "timestamp": "2025-01-19T20:37:16+01:00",
          "tree_id": "46aae9c473041fb47cf96e17505daceca3de0e19",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/30538055206d4e664a4cf38f10bf5d6c0080d500"
        },
        "date": 1737315861186,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18245.740310668945,
            "unit": "ns",
            "range": "± 496.6947556832549"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20201.024666341145,
            "unit": "ns",
            "range": "± 341.048591499051"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25324.977118937175,
            "unit": "ns",
            "range": "± 165.26841686252743"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 37861.52638026646,
            "unit": "ns",
            "range": "± 164.18227195740747"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 724067.0674525669,
            "unit": "ns",
            "range": "± 2065.7429615871524"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "eacc8dc0473d6d87920de88f929554051f060587",
          "message": "Add Code93Encoder benchmark class and update config\n\nIntroduce a new `Code93Encoder` class for benchmarking barcode encoding using BenchmarkDotNet. This class includes methods for encoding with and without text, as well as exporting to a file. Update `dotnet_benchmark_runner.yml` to configure benchmark actions and alert settings.",
          "timestamp": "2025-01-19T20:39:18+01:00",
          "tree_id": "05d89d089fce28b7e8c12c1ef29edf4d2a7c28c5",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/eacc8dc0473d6d87920de88f929554051f060587"
        },
        "date": 1737316811012,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 19691.025418395995,
            "unit": "ns",
            "range": "± 1551.974399945301"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20011.181907145183,
            "unit": "ns",
            "range": "± 280.6674943876308"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25023.257219587053,
            "unit": "ns",
            "range": "± 150.2454007499981"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38540.288186209546,
            "unit": "ns",
            "range": "± 161.6798207699137"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 723967.4229910715,
            "unit": "ns",
            "range": "± 4755.287237065345"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "TyKonKet",
            "username": "TyKonKet",
            "email": "matteoautieri@live.it"
          },
          "committer": {
            "name": "TyKonKet",
            "username": "TyKonKet",
            "email": "matteoautieri@live.it"
          },
          "id": "eacc8dc0473d6d87920de88f929554051f060587",
          "message": "Add Code93Encoder benchmark class and update config\n\nIntroduce a new `Code93Encoder` class for benchmarking barcode encoding using BenchmarkDotNet. This class includes methods for encoding with and without text, as well as exporting to a file. Update `dotnet_benchmark_runner.yml` to configure benchmark actions and alert settings.",
          "timestamp": "2025-01-19T19:39:18Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/eacc8dc0473d6d87920de88f929554051f060587"
        },
        "date": 1737317649999,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18655.440720621744,
            "unit": "ns",
            "range": "± 552.7747044496979"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20167.965452194214,
            "unit": "ns",
            "range": "± 379.98915205685256"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25541.893310546875,
            "unit": "ns",
            "range": "± 119.4229307629794"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38129.726407877606,
            "unit": "ns",
            "range": "± 90.5038200577473"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 728495.3243489583,
            "unit": "ns",
            "range": "± 1893.9491386199606"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "5060498f4400eb32e3cb11466a6de5f18e8ca7e6",
          "message": "Change barcode type to Code93 in Code93Encoder.cs\n\nUpdated the `barcodeType` variable from `BarcodeTypes.Code39` to `BarcodeTypes.Code93` to reflect the new barcode type being utilized in the encoder.",
          "timestamp": "2025-01-19T21:36:58+01:00",
          "tree_id": "68159f434e90188e0c68a023deedbdcccf66e4b3",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/5060498f4400eb32e3cb11466a6de5f18e8ca7e6"
        },
        "date": 1737319546399,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18738.04557132721,
            "unit": "ns",
            "range": "± 582.9937819272062"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20348.38435727074,
            "unit": "ns",
            "range": "± 471.3667790272537"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25017.129454392652,
            "unit": "ns",
            "range": "± 76.21125514290647"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38352.570861816406,
            "unit": "ns",
            "range": "± 230.27347633115124"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 725066.2390485491,
            "unit": "ns",
            "range": "± 3094.5960716650166"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "TyKonKet",
            "username": "TyKonKet",
            "email": "matteoautieri@live.it"
          },
          "committer": {
            "name": "TyKonKet",
            "username": "TyKonKet",
            "email": "matteoautieri@live.it"
          },
          "id": "5060498f4400eb32e3cb11466a6de5f18e8ca7e6",
          "message": "Change barcode type to Code93 in Code93Encoder.cs\n\nUpdated the `barcodeType` variable from `BarcodeTypes.Code39` to `BarcodeTypes.Code93` to reflect the new barcode type being utilized in the encoder.",
          "timestamp": "2025-01-19T20:36:58Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/5060498f4400eb32e3cb11466a6de5f18e8ca7e6"
        },
        "date": 1737361497792,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 17910.57119532994,
            "unit": "ns",
            "range": "± 245.2500238401647"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20057.300138854982,
            "unit": "ns",
            "range": "± 456.0773342724812"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25165.553288386418,
            "unit": "ns",
            "range": "± 53.19808464373428"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 37980.559765625,
            "unit": "ns",
            "range": "± 173.06484156973767"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 725700.7102864584,
            "unit": "ns",
            "range": "± 2559.336804153177"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2db2916f2b841fe77c8a7483a6b3634fd1156f3",
          "message": "Update README.md",
          "timestamp": "2025-01-20T11:25:26+01:00",
          "tree_id": "3c68fcd50010c009d4943d616b74adfcc4f322f4",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/f2db2916f2b841fe77c8a7483a6b3634fd1156f3"
        },
        "date": 1737369271120,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 17989.892944335938,
            "unit": "ns",
            "range": "± 365.9481014549086"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20081.137648010255,
            "unit": "ns",
            "range": "± 447.40187209793163"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25738.256048349234,
            "unit": "ns",
            "range": "± 70.16525948627667"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38095.02457838792,
            "unit": "ns",
            "range": "± 137.8525662497637"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 727538.1430989583,
            "unit": "ns",
            "range": "± 2381.5806088636464"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24608eb6e60951a8ee6a435a6c64998ec231bb85",
          "message": "Merge pull request #3 from TyKonKet/copilot/fix-7ca2238d-bf54-4ab3-ac32-1dcff0360c78\n\nAdd comprehensive .github/copilot-instructions.md to onboard coding agents",
          "timestamp": "2025-08-08T22:35:51+02:00",
          "tree_id": "2c46eaa8b21abcd6e1df7d8998546a05dc997a4a",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/24608eb6e60951a8ee6a435a6c64998ec231bb85"
        },
        "date": 1754685845773,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18029.666604849008,
            "unit": "ns",
            "range": "± 79.13785281732778"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20228.68397057575,
            "unit": "ns",
            "range": "± 507.4783569587962"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25281.539291381836,
            "unit": "ns",
            "range": "± 63.70998259607559"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38187.009373256136,
            "unit": "ns",
            "range": "± 175.99363126633762"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 724897.4307338169,
            "unit": "ns",
            "range": "± 902.1948849476003"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "1de459c17a23185b3f4c18d5993471d84792c603",
          "message": "Update branch reference from 'master' to 'main' in workflow files",
          "timestamp": "2025-08-08T22:53:06+02:00",
          "tree_id": "ac8bd802af4fc6893132968ac826d63231605338",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/1de459c17a23185b3f4c18d5993471d84792c603"
        },
        "date": 1754687026172,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 17237.967684232273,
            "unit": "ns",
            "range": "± 62.06129300808032"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 21545.3199412028,
            "unit": "ns",
            "range": "± 770.4653504466613"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25676.4271371024,
            "unit": "ns",
            "range": "± 49.25465702182037"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38715.03581891741,
            "unit": "ns",
            "range": "± 121.63974401023621"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 724254.4716796875,
            "unit": "ns",
            "range": "± 544.2412761283432"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fffda0ed364a4c53793fd53fe280760fc93bb8c1",
          "message": "Merge pull request #4 from TyKonKet/copilot/fix-8fc91e55-9463-4ac4-b567-fb08b5ec21e9\n\nUpdate bug report templates to be library-focused for .NET BarcodeGenerator",
          "timestamp": "2025-08-09T00:15:05+02:00",
          "tree_id": "c6de7560f8f17c6fa691afd853751980dee4b71c",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/fffda0ed364a4c53793fd53fe280760fc93bb8c1"
        },
        "date": 1754691866107,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 17833.310713704428,
            "unit": "ns",
            "range": "± 161.1408492876046"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 19941.064603533065,
            "unit": "ns",
            "range": "± 230.6262573776673"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25693.90097263881,
            "unit": "ns",
            "range": "± 61.89555737690324"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38589.705998011996,
            "unit": "ns",
            "range": "± 97.22048957086602"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 721888.0539899553,
            "unit": "ns",
            "range": "± 616.812312659665"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6d6c95c4431655230d795a8a6cd1d1510665be0",
          "message": "Merge pull request #5 from TyKonKet/copilot/fix-6dad0733-93cf-4758-b0b8-9c5cdf727419\n\nAdd GitHub Issue Forms for feature requests with multi-language .NET support",
          "timestamp": "2025-08-09T00:50:52+02:00",
          "tree_id": "38621987e62c3dae3cbd05ef66570cf4415a5a5a",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/a6d6c95c4431655230d795a8a6cd1d1510665be0"
        },
        "date": 1754693973317,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18427.794767107283,
            "unit": "ns",
            "range": "± 122.8688079229695"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20450.136182512557,
            "unit": "ns",
            "range": "± 246.82592429183106"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25564.815004475913,
            "unit": "ns",
            "range": "± 64.2996653466544"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 37950.36783071665,
            "unit": "ns",
            "range": "± 104.66582156394774"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 723557.678125,
            "unit": "ns",
            "range": "± 994.5641403887305"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc870c059b6fd4812cb188594d7943388b0e56b6",
          "message": "Update feature_request.yml",
          "timestamp": "2025-08-09T00:56:40+02:00",
          "tree_id": "148636ce1f97f1b8ff172f79167a66f14f0279a6",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/bc870c059b6fd4812cb188594d7943388b0e56b6"
        },
        "date": 1754694321295,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 19175.33853556315,
            "unit": "ns",
            "range": "± 235.8795097209185"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 21121.30764579773,
            "unit": "ns",
            "range": "± 389.2216243969995"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25682.841897817758,
            "unit": "ns",
            "range": "± 92.95787056706584"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 37826.53712565104,
            "unit": "ns",
            "range": "± 198.10342441426099"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 722356.2283528646,
            "unit": "ns",
            "range": "± 1106.3391187376992"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1b21ab76eed77ba76ed3d4cd641606876b434dc",
          "message": "Update bug_report.yml",
          "timestamp": "2025-08-09T01:04:08+02:00",
          "tree_id": "8910dae4205218ae123c9b270ee6cbb41ccd2ae8",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/d1b21ab76eed77ba76ed3d4cd641606876b434dc"
        },
        "date": 1754694779575,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18952.84641156878,
            "unit": "ns",
            "range": "± 540.1600518846648"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20085.451758829753,
            "unit": "ns",
            "range": "± 86.94876945273784"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25286.14735060472,
            "unit": "ns",
            "range": "± 30.778665433584717"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 37809.846165248324,
            "unit": "ns",
            "range": "± 79.77819852848434"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 723888.6503155048,
            "unit": "ns",
            "range": "± 1058.3460190215571"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47a43e6e572ec9f1d0c5777d31158e299a67bc10",
          "message": "Update bug_report.yml",
          "timestamp": "2025-08-09T01:09:17+02:00",
          "tree_id": "db4d3ad65f4d21a77b968cd2ce9532e445e663aa",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/47a43e6e572ec9f1d0c5777d31158e299a67bc10"
        },
        "date": 1754695041592,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18406.6703619706,
            "unit": "ns",
            "range": "± 396.5874610376718"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20027.179962158203,
            "unit": "ns",
            "range": "± 219.43736468545694"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25761.792293003626,
            "unit": "ns",
            "range": "± 155.11475587067156"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38230.351172814,
            "unit": "ns",
            "range": "± 62.20798256535698"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 723784.1743164062,
            "unit": "ns",
            "range": "± 956.2582841651271"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7764b318e2ef66dcbacbd8fedbca75218f0036ac",
          "message": "Update feature_request.yml",
          "timestamp": "2025-08-09T01:09:00+02:00",
          "tree_id": "df7415d590ec55bb3ce3402fdf0b355ec0e0ea6f",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/7764b318e2ef66dcbacbd8fedbca75218f0036ac"
        },
        "date": 1754695047213,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18372.92680867513,
            "unit": "ns",
            "range": "± 321.2943353803148"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20438.76411873954,
            "unit": "ns",
            "range": "± 182.1719614091716"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25401.313235473634,
            "unit": "ns",
            "range": "± 70.15488922755756"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 37838.10674176897,
            "unit": "ns",
            "range": "± 63.831488442611914"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 722627.251171875,
            "unit": "ns",
            "range": "± 1287.283168453891"
          }
        ]
      }
    ],
    "UpcaEncoder": [
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "323ccb63544e6366985e0c03552ca64692a92e08",
          "message": "Add UpcaEncoder benchmark class and CI configuration\n\nIntroduce a new benchmarking class `UpcaEncoder` using BenchmarkDotNet to measure barcode encoding performance. The class includes methods for encoding with and without text, and for exporting the encoded barcode to a file. Update `dotnet_benchmark_runner.yml` to configure the benchmark action with alert comments and GitHub token authentication.",
          "timestamp": "2025-01-19T20:30:04+01:00",
          "tree_id": "abc474fee5719c7eebb4c8cb27a85a8c300e33d7",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/323ccb63544e6366985e0c03552ca64692a92e08"
        },
        "date": 1737315355699,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18966.918579101562,
            "unit": "ns",
            "range": "± 525.5179309766835"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20433.968104771204,
            "unit": "ns",
            "range": "± 572.7698495197127"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25314.850504948543,
            "unit": "ns",
            "range": "± 93.38246272168993"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40844.69263712565,
            "unit": "ns",
            "range": "± 218.7914730005403"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 730117.4622628348,
            "unit": "ns",
            "range": "± 2329.709206920336"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "30538055206d4e664a4cf38f10bf5d6c0080d500",
          "message": "Add Isbn13Encoder benchmarks and update CI configuration\n\nIntroduce a new benchmark class `Isbn13Encoder` using BenchmarkDotNet to measure barcode encoding performance. The class includes methods for encoding with and without text, as well as exporting to a file. Update `dotnet_benchmark_runner.yml` to configure benchmark actions and specify output file paths.",
          "timestamp": "2025-01-19T20:37:16+01:00",
          "tree_id": "46aae9c473041fb47cf96e17505daceca3de0e19",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/30538055206d4e664a4cf38f10bf5d6c0080d500"
        },
        "date": 1737315862083,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18016.556382242838,
            "unit": "ns",
            "range": "± 237.02493272572377"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19830.468894264915,
            "unit": "ns",
            "range": "± 622.8397932585452"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25314.61745561872,
            "unit": "ns",
            "range": "± 88.73388560982734"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 39732.094364420576,
            "unit": "ns",
            "range": "± 205.3785468953175"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 724946.925641741,
            "unit": "ns",
            "range": "± 1983.3468325201702"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "eacc8dc0473d6d87920de88f929554051f060587",
          "message": "Add Code93Encoder benchmark class and update config\n\nIntroduce a new `Code93Encoder` class for benchmarking barcode encoding using BenchmarkDotNet. This class includes methods for encoding with and without text, as well as exporting to a file. Update `dotnet_benchmark_runner.yml` to configure benchmark actions and alert settings.",
          "timestamp": "2025-01-19T20:39:18+01:00",
          "tree_id": "05d89d089fce28b7e8c12c1ef29edf4d2a7c28c5",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/eacc8dc0473d6d87920de88f929554051f060587"
        },
        "date": 1737316811840,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 17990.782858041617,
            "unit": "ns",
            "range": "± 239.84533199648604"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20273.608007992014,
            "unit": "ns",
            "range": "± 969.1980386236229"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25574.20485511193,
            "unit": "ns",
            "range": "± 134.25076906978592"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40146.72788783482,
            "unit": "ns",
            "range": "± 216.0587437846472"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 727744.9460286458,
            "unit": "ns",
            "range": "± 1553.6880759873045"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "TyKonKet",
            "username": "TyKonKet",
            "email": "matteoautieri@live.it"
          },
          "committer": {
            "name": "TyKonKet",
            "username": "TyKonKet",
            "email": "matteoautieri@live.it"
          },
          "id": "eacc8dc0473d6d87920de88f929554051f060587",
          "message": "Add Code93Encoder benchmark class and update config\n\nIntroduce a new `Code93Encoder` class for benchmarking barcode encoding using BenchmarkDotNet. This class includes methods for encoding with and without text, as well as exporting to a file. Update `dotnet_benchmark_runner.yml` to configure benchmark actions and alert settings.",
          "timestamp": "2025-01-19T19:39:18Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/eacc8dc0473d6d87920de88f929554051f060587"
        },
        "date": 1737317651182,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18091.203851609003,
            "unit": "ns",
            "range": "± 352.9541286483278"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20662.357208251953,
            "unit": "ns",
            "range": "± 235.54799670993026"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25480.2635345459,
            "unit": "ns",
            "range": "± 146.88559507081206"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40818.9112941197,
            "unit": "ns",
            "range": "± 91.78268654963493"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 728145.6283365885,
            "unit": "ns",
            "range": "± 725.550468417474"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "5060498f4400eb32e3cb11466a6de5f18e8ca7e6",
          "message": "Change barcode type to Code93 in Code93Encoder.cs\n\nUpdated the `barcodeType` variable from `BarcodeTypes.Code39` to `BarcodeTypes.Code93` to reflect the new barcode type being utilized in the encoder.",
          "timestamp": "2025-01-19T21:36:58+01:00",
          "tree_id": "68159f434e90188e0c68a023deedbdcccf66e4b3",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/5060498f4400eb32e3cb11466a6de5f18e8ca7e6"
        },
        "date": 1737319547159,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 17994.60443436472,
            "unit": "ns",
            "range": "± 378.9462227866166"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19163.206939697266,
            "unit": "ns",
            "range": "± 131.53075915722712"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25381.475219726562,
            "unit": "ns",
            "range": "± 95.48361839155037"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41143.61023763021,
            "unit": "ns",
            "range": "± 145.61068308601708"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 728355.0440104167,
            "unit": "ns",
            "range": "± 3041.930811793828"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "TyKonKet",
            "username": "TyKonKet",
            "email": "matteoautieri@live.it"
          },
          "committer": {
            "name": "TyKonKet",
            "username": "TyKonKet",
            "email": "matteoautieri@live.it"
          },
          "id": "5060498f4400eb32e3cb11466a6de5f18e8ca7e6",
          "message": "Change barcode type to Code93 in Code93Encoder.cs\n\nUpdated the `barcodeType` variable from `BarcodeTypes.Code39` to `BarcodeTypes.Code93` to reflect the new barcode type being utilized in the encoder.",
          "timestamp": "2025-01-19T20:36:58Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/5060498f4400eb32e3cb11466a6de5f18e8ca7e6"
        },
        "date": 1737361498637,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18059.348813143642,
            "unit": "ns",
            "range": "± 406.7684051771327"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19897.62610735212,
            "unit": "ns",
            "range": "± 567.7366802400652"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25132.49098641532,
            "unit": "ns",
            "range": "± 67.03002577535389"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 39629.97029215495,
            "unit": "ns",
            "range": "± 173.03278881843036"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 727339.2903878348,
            "unit": "ns",
            "range": "± 2216.9137712094866"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2db2916f2b841fe77c8a7483a6b3634fd1156f3",
          "message": "Update README.md",
          "timestamp": "2025-01-20T11:25:26+01:00",
          "tree_id": "3c68fcd50010c009d4943d616b74adfcc4f322f4",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/f2db2916f2b841fe77c8a7483a6b3634fd1156f3"
        },
        "date": 1737369272651,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 17984.846171787805,
            "unit": "ns",
            "range": "± 211.10023339415562"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20978.614668782553,
            "unit": "ns",
            "range": "± 348.25927262961216"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25450.29053243001,
            "unit": "ns",
            "range": "± 107.50121671247136"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41012.66944231306,
            "unit": "ns",
            "range": "± 133.8845720232684"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 722587.083577474,
            "unit": "ns",
            "range": "± 564.7128499411953"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24608eb6e60951a8ee6a435a6c64998ec231bb85",
          "message": "Merge pull request #3 from TyKonKet/copilot/fix-7ca2238d-bf54-4ab3-ac32-1dcff0360c78\n\nAdd comprehensive .github/copilot-instructions.md to onboard coding agents",
          "timestamp": "2025-08-08T22:35:51+02:00",
          "tree_id": "2c46eaa8b21abcd6e1df7d8998546a05dc997a4a",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/24608eb6e60951a8ee6a435a6c64998ec231bb85"
        },
        "date": 1754685847317,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18273.567969185966,
            "unit": "ns",
            "range": "± 289.3418364695449"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19741.943432617187,
            "unit": "ns",
            "range": "± 233.63072108673927"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25551.3878712972,
            "unit": "ns",
            "range": "± 51.84776643158833"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41121.33154296875,
            "unit": "ns",
            "range": "± 183.17387387236184"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 725499.0302734375,
            "unit": "ns",
            "range": "± 698.6257016686269"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "1de459c17a23185b3f4c18d5993471d84792c603",
          "message": "Update branch reference from 'master' to 'main' in workflow files",
          "timestamp": "2025-08-08T22:53:06+02:00",
          "tree_id": "ac8bd802af4fc6893132968ac826d63231605338",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/1de459c17a23185b3f4c18d5993471d84792c603"
        },
        "date": 1754687027141,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18052.146379743303,
            "unit": "ns",
            "range": "± 682.2354781658212"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 21434.938273861535,
            "unit": "ns",
            "range": "± 1222.463553854248"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25691.060216267902,
            "unit": "ns",
            "range": "± 74.76163599909034"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41181.3697672526,
            "unit": "ns",
            "range": "± 478.45477451342214"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 725393.9515625,
            "unit": "ns",
            "range": "± 1179.7263722764355"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fffda0ed364a4c53793fd53fe280760fc93bb8c1",
          "message": "Merge pull request #4 from TyKonKet/copilot/fix-8fc91e55-9463-4ac4-b567-fb08b5ec21e9\n\nUpdate bug report templates to be library-focused for .NET BarcodeGenerator",
          "timestamp": "2025-08-09T00:15:05+02:00",
          "tree_id": "c6de7560f8f17c6fa691afd853751980dee4b71c",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/fffda0ed364a4c53793fd53fe280760fc93bb8c1"
        },
        "date": 1754691867257,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 21156.39690702705,
            "unit": "ns",
            "range": "± 1200.3122420115242"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19525.35836995443,
            "unit": "ns",
            "range": "± 200.65210136610975"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25662.143652779716,
            "unit": "ns",
            "range": "± 62.24794340904351"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41343.75513102214,
            "unit": "ns",
            "range": "± 157.66044360531387"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 723887.585797991,
            "unit": "ns",
            "range": "± 957.3672837724234"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6d6c95c4431655230d795a8a6cd1d1510665be0",
          "message": "Merge pull request #5 from TyKonKet/copilot/fix-6dad0733-93cf-4758-b0b8-9c5cdf727419\n\nAdd GitHub Issue Forms for feature requests with multi-language .NET support",
          "timestamp": "2025-08-09T00:50:52+02:00",
          "tree_id": "38621987e62c3dae3cbd05ef66570cf4415a5a5a",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/a6d6c95c4431655230d795a8a6cd1d1510665be0"
        },
        "date": 1754693974379,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18164.85103900616,
            "unit": "ns",
            "range": "± 62.29743538906868"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19897.889174241285,
            "unit": "ns",
            "range": "± 102.36549438097487"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25061.943871634347,
            "unit": "ns",
            "range": "± 38.82686256185426"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40719.523001534595,
            "unit": "ns",
            "range": "± 43.55681303715039"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 724640.0467447917,
            "unit": "ns",
            "range": "± 1458.563031591116"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc870c059b6fd4812cb188594d7943388b0e56b6",
          "message": "Update feature_request.yml",
          "timestamp": "2025-08-09T00:56:40+02:00",
          "tree_id": "148636ce1f97f1b8ff172f79167a66f14f0279a6",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/bc870c059b6fd4812cb188594d7943388b0e56b6"
        },
        "date": 1754694322408,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 19455.68607788086,
            "unit": "ns",
            "range": "± 100.77258939057891"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20490.71095784505,
            "unit": "ns",
            "range": "± 175.28792734930354"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25176.004686991375,
            "unit": "ns",
            "range": "± 56.68933946019589"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41254.43351963588,
            "unit": "ns",
            "range": "± 83.93912590095529"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 725686.9987229567,
            "unit": "ns",
            "range": "± 1008.1885468027716"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1b21ab76eed77ba76ed3d4cd641606876b434dc",
          "message": "Update bug_report.yml",
          "timestamp": "2025-08-09T01:04:08+02:00",
          "tree_id": "8910dae4205218ae123c9b270ee6cbb41ccd2ae8",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/d1b21ab76eed77ba76ed3d4cd641606876b434dc"
        },
        "date": 1754694781105,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18147.8910446167,
            "unit": "ns",
            "range": "± 88.62158666721653"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19533.67950032552,
            "unit": "ns",
            "range": "± 98.82184671658388"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25160.873661921574,
            "unit": "ns",
            "range": "± 21.055405048616972"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40583.714935302734,
            "unit": "ns",
            "range": "± 71.7270645358893"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 725736.1500901442,
            "unit": "ns",
            "range": "± 993.5819186823135"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47a43e6e572ec9f1d0c5777d31158e299a67bc10",
          "message": "Update bug_report.yml",
          "timestamp": "2025-08-09T01:09:17+02:00",
          "tree_id": "db4d3ad65f4d21a77b968cd2ce9532e445e663aa",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/47a43e6e572ec9f1d0c5777d31158e299a67bc10"
        },
        "date": 1754695043333,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18099.39882014348,
            "unit": "ns",
            "range": "± 102.16705817635403"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19467.7583984375,
            "unit": "ns",
            "range": "± 196.2953118387438"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25580.762447102865,
            "unit": "ns",
            "range": "± 59.24302820652117"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41151.48545328776,
            "unit": "ns",
            "range": "± 81.71975352307727"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 723894.1530949519,
            "unit": "ns",
            "range": "± 538.2765767155147"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7764b318e2ef66dcbacbd8fedbca75218f0036ac",
          "message": "Update feature_request.yml",
          "timestamp": "2025-08-09T01:09:00+02:00",
          "tree_id": "df7415d590ec55bb3ce3402fdf0b355ec0e0ea6f",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/7764b318e2ef66dcbacbd8fedbca75218f0036ac"
        },
        "date": 1754695048398,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18629.853550502234,
            "unit": "ns",
            "range": "± 186.1509586527829"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20652.87277018229,
            "unit": "ns",
            "range": "± 306.49097407000266"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25830.384507242838,
            "unit": "ns",
            "range": "± 70.80498465907176"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40319.13485514323,
            "unit": "ns",
            "range": "± 164.02568714717586"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 724240.8560221355,
            "unit": "ns",
            "range": "± 755.5044760468629"
          }
        ]
      }
    ],
    "Isbn13Encoder": [
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "30538055206d4e664a4cf38f10bf5d6c0080d500",
          "message": "Add Isbn13Encoder benchmarks and update CI configuration\n\nIntroduce a new benchmark class `Isbn13Encoder` using BenchmarkDotNet to measure barcode encoding performance. The class includes methods for encoding with and without text, as well as exporting to a file. Update `dotnet_benchmark_runner.yml` to configure benchmark actions and specify output file paths.",
          "timestamp": "2025-01-19T20:37:16+01:00",
          "tree_id": "46aae9c473041fb47cf96e17505daceca3de0e19",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/30538055206d4e664a4cf38f10bf5d6c0080d500"
        },
        "date": 1737315863089,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 17993.74953613281,
            "unit": "ns",
            "range": "± 261.15528938828925"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20323.88980102539,
            "unit": "ns",
            "range": "± 448.84880043031416"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23800.48056248256,
            "unit": "ns",
            "range": "± 107.71075571647717"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36565.34263916015,
            "unit": "ns",
            "range": "± 233.16173522587803"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 731300.8453776041,
            "unit": "ns",
            "range": "± 2055.3668915060284"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "eacc8dc0473d6d87920de88f929554051f060587",
          "message": "Add Code93Encoder benchmark class and update config\n\nIntroduce a new `Code93Encoder` class for benchmarking barcode encoding using BenchmarkDotNet. This class includes methods for encoding with and without text, as well as exporting to a file. Update `dotnet_benchmark_runner.yml` to configure benchmark actions and alert settings.",
          "timestamp": "2025-01-19T20:39:18+01:00",
          "tree_id": "05d89d089fce28b7e8c12c1ef29edf4d2a7c28c5",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/eacc8dc0473d6d87920de88f929554051f060587"
        },
        "date": 1737316812615,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 19432.59971282959,
            "unit": "ns",
            "range": "± 1216.6349535864704"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20015.982076644897,
            "unit": "ns",
            "range": "± 385.8261005572548"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24204.71090044294,
            "unit": "ns",
            "range": "± 102.08810167470031"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36725.01529744466,
            "unit": "ns",
            "range": "± 103.11918733020937"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 727445.9087239583,
            "unit": "ns",
            "range": "± 3430.2710914925706"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "TyKonKet",
            "username": "TyKonKet",
            "email": "matteoautieri@live.it"
          },
          "committer": {
            "name": "TyKonKet",
            "username": "TyKonKet",
            "email": "matteoautieri@live.it"
          },
          "id": "eacc8dc0473d6d87920de88f929554051f060587",
          "message": "Add Code93Encoder benchmark class and update config\n\nIntroduce a new `Code93Encoder` class for benchmarking barcode encoding using BenchmarkDotNet. This class includes methods for encoding with and without text, as well as exporting to a file. Update `dotnet_benchmark_runner.yml` to configure benchmark actions and alert settings.",
          "timestamp": "2025-01-19T19:39:18Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/eacc8dc0473d6d87920de88f929554051f060587"
        },
        "date": 1737317652472,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18220.459895542688,
            "unit": "ns",
            "range": "± 177.47141858753594"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20160.2124546596,
            "unit": "ns",
            "range": "± 476.2713681913372"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24333.14577593122,
            "unit": "ns",
            "range": "± 125.28917404290665"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36748.4954693134,
            "unit": "ns",
            "range": "± 141.21832228289568"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 728617.8016183035,
            "unit": "ns",
            "range": "± 2424.521011530781"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "5060498f4400eb32e3cb11466a6de5f18e8ca7e6",
          "message": "Change barcode type to Code93 in Code93Encoder.cs\n\nUpdated the `barcodeType` variable from `BarcodeTypes.Code39` to `BarcodeTypes.Code93` to reflect the new barcode type being utilized in the encoder.",
          "timestamp": "2025-01-19T21:36:58+01:00",
          "tree_id": "68159f434e90188e0c68a023deedbdcccf66e4b3",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/5060498f4400eb32e3cb11466a6de5f18e8ca7e6"
        },
        "date": 1737319547948,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18364.999397277832,
            "unit": "ns",
            "range": "± 337.2733155318657"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 19825.53107561384,
            "unit": "ns",
            "range": "± 250.51376446219592"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23998.547485351562,
            "unit": "ns",
            "range": "± 98.88803941608876"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37232.74894932338,
            "unit": "ns",
            "range": "± 258.95939454354243"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 726430.6097005209,
            "unit": "ns",
            "range": "± 2520.5690685317113"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "TyKonKet",
            "username": "TyKonKet",
            "email": "matteoautieri@live.it"
          },
          "committer": {
            "name": "TyKonKet",
            "username": "TyKonKet",
            "email": "matteoautieri@live.it"
          },
          "id": "5060498f4400eb32e3cb11466a6de5f18e8ca7e6",
          "message": "Change barcode type to Code93 in Code93Encoder.cs\n\nUpdated the `barcodeType` variable from `BarcodeTypes.Code39` to `BarcodeTypes.Code93` to reflect the new barcode type being utilized in the encoder.",
          "timestamp": "2025-01-19T20:36:58Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/5060498f4400eb32e3cb11466a6de5f18e8ca7e6"
        },
        "date": 1737361499672,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18094.85526784261,
            "unit": "ns",
            "range": "± 226.97704579701607"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20172.000326538087,
            "unit": "ns",
            "range": "± 462.083775650909"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24062.67888700045,
            "unit": "ns",
            "range": "± 48.94448995149919"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37273.91782052176,
            "unit": "ns",
            "range": "± 179.8641586983824"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 726564.234765625,
            "unit": "ns",
            "range": "± 2163.4668745001536"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2db2916f2b841fe77c8a7483a6b3634fd1156f3",
          "message": "Update README.md",
          "timestamp": "2025-01-20T11:25:26+01:00",
          "tree_id": "3c68fcd50010c009d4943d616b74adfcc4f322f4",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/f2db2916f2b841fe77c8a7483a6b3634fd1156f3"
        },
        "date": 1737369273837,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 19099.428899816565,
            "unit": "ns",
            "range": "± 639.3146680696236"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 19840.5120320638,
            "unit": "ns",
            "range": "± 152.44781686514335"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24310.22036273663,
            "unit": "ns",
            "range": "± 51.93859911622906"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36856.0178894043,
            "unit": "ns",
            "range": "± 130.7497311124149"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 724508.2970252404,
            "unit": "ns",
            "range": "± 496.6321786383339"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24608eb6e60951a8ee6a435a6c64998ec231bb85",
          "message": "Merge pull request #3 from TyKonKet/copilot/fix-7ca2238d-bf54-4ab3-ac32-1dcff0360c78\n\nAdd comprehensive .github/copilot-instructions.md to onboard coding agents",
          "timestamp": "2025-08-08T22:35:51+02:00",
          "tree_id": "2c46eaa8b21abcd6e1df7d8998546a05dc997a4a",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/24608eb6e60951a8ee6a435a6c64998ec231bb85"
        },
        "date": 1754685848874,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18229.88059779576,
            "unit": "ns",
            "range": "± 185.21300605931256"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 19960.90749652569,
            "unit": "ns",
            "range": "± 122.49016586654918"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24105.399185180664,
            "unit": "ns",
            "range": "± 82.56195761448089"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37696.648384602864,
            "unit": "ns",
            "range": "± 157.4201248618169"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 731038.1723257211,
            "unit": "ns",
            "range": "± 1750.7055136673937"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "1de459c17a23185b3f4c18d5993471d84792c603",
          "message": "Update branch reference from 'master' to 'main' in workflow files",
          "timestamp": "2025-08-08T22:53:06+02:00",
          "tree_id": "ac8bd802af4fc6893132968ac826d63231605338",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/1de459c17a23185b3f4c18d5993471d84792c603"
        },
        "date": 1754687028082,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 19817.057956197987,
            "unit": "ns",
            "range": "± 746.4629921239281"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 21959.328487998562,
            "unit": "ns",
            "range": "± 948.0110225167515"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24353.45537508451,
            "unit": "ns",
            "range": "± 30.82650929742821"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37346.01671055385,
            "unit": "ns",
            "range": "± 90.31285685973256"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 726499.9493489583,
            "unit": "ns",
            "range": "± 1689.2911393913255"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fffda0ed364a4c53793fd53fe280760fc93bb8c1",
          "message": "Merge pull request #4 from TyKonKet/copilot/fix-8fc91e55-9463-4ac4-b567-fb08b5ec21e9\n\nUpdate bug report templates to be library-focused for .NET BarcodeGenerator",
          "timestamp": "2025-08-09T00:15:05+02:00",
          "tree_id": "c6de7560f8f17c6fa691afd853751980dee4b71c",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/fffda0ed364a4c53793fd53fe280760fc93bb8c1"
        },
        "date": 1754691868437,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 17964.709001813615,
            "unit": "ns",
            "range": "± 221.9171524838333"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 19943.32432774135,
            "unit": "ns",
            "range": "± 258.74709867723965"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24247.718174861027,
            "unit": "ns",
            "range": "± 46.84654642583539"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36898.34506225586,
            "unit": "ns",
            "range": "± 141.49874410362855"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 724967.2580915178,
            "unit": "ns",
            "range": "± 903.9358458424432"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6d6c95c4431655230d795a8a6cd1d1510665be0",
          "message": "Merge pull request #5 from TyKonKet/copilot/fix-6dad0733-93cf-4758-b0b8-9c5cdf727419\n\nAdd GitHub Issue Forms for feature requests with multi-language .NET support",
          "timestamp": "2025-08-09T00:50:52+02:00",
          "tree_id": "38621987e62c3dae3cbd05ef66570cf4415a5a5a",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/a6d6c95c4431655230d795a8a6cd1d1510665be0"
        },
        "date": 1754693975430,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18634.703676663914,
            "unit": "ns",
            "range": "± 102.09902248921087"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20220.71604332557,
            "unit": "ns",
            "range": "± 122.34976363308687"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24021.513409423827,
            "unit": "ns",
            "range": "± 80.16941500099806"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37081.70877075195,
            "unit": "ns",
            "range": "± 107.18588667085524"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 725491.6450892857,
            "unit": "ns",
            "range": "± 1072.0797816047432"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc870c059b6fd4812cb188594d7943388b0e56b6",
          "message": "Update feature_request.yml",
          "timestamp": "2025-08-09T00:56:40+02:00",
          "tree_id": "148636ce1f97f1b8ff172f79167a66f14f0279a6",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/bc870c059b6fd4812cb188594d7943388b0e56b6"
        },
        "date": 1754694323470,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 19454.12399495443,
            "unit": "ns",
            "range": "± 245.32942240650232"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 21346.185556265023,
            "unit": "ns",
            "range": "± 208.65902899100075"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24261.467873709542,
            "unit": "ns",
            "range": "± 88.04671518368407"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36902.50814383371,
            "unit": "ns",
            "range": "± 168.32876020842804"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 726931.7300180289,
            "unit": "ns",
            "range": "± 1890.621726516606"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1b21ab76eed77ba76ed3d4cd641606876b434dc",
          "message": "Update bug_report.yml",
          "timestamp": "2025-08-09T01:04:08+02:00",
          "tree_id": "8910dae4205218ae123c9b270ee6cbb41ccd2ae8",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/d1b21ab76eed77ba76ed3d4cd641606876b434dc"
        },
        "date": 1754694782710,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18142.8160269601,
            "unit": "ns",
            "range": "± 152.11674446382634"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20178.63543802897,
            "unit": "ns",
            "range": "± 125.28579568198599"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23996.524921962195,
            "unit": "ns",
            "range": "± 35.06329040226179"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37156.65245643029,
            "unit": "ns",
            "range": "± 78.66053643501485"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 724712.98046875,
            "unit": "ns",
            "range": "± 1230.0989161512525"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47a43e6e572ec9f1d0c5777d31158e299a67bc10",
          "message": "Update bug_report.yml",
          "timestamp": "2025-08-09T01:09:17+02:00",
          "tree_id": "db4d3ad65f4d21a77b968cd2ce9532e445e663aa",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/47a43e6e572ec9f1d0c5777d31158e299a67bc10"
        },
        "date": 1754695044923,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18032.083561823918,
            "unit": "ns",
            "range": "± 123.77872929600109"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20026.24431254069,
            "unit": "ns",
            "range": "± 168.15792870073682"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24333.8559047154,
            "unit": "ns",
            "range": "± 50.76271751264677"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37280.152317592074,
            "unit": "ns",
            "range": "± 69.48653577700375"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 725248.336344401,
            "unit": "ns",
            "range": "± 536.4741594156554"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7764b318e2ef66dcbacbd8fedbca75218f0036ac",
          "message": "Update feature_request.yml",
          "timestamp": "2025-08-09T01:09:00+02:00",
          "tree_id": "df7415d590ec55bb3ce3402fdf0b355ec0e0ea6f",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/7764b318e2ef66dcbacbd8fedbca75218f0036ac"
        },
        "date": 1754695049434,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 19151.751462887496,
            "unit": "ns",
            "range": "± 659.2572789532401"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20622.762392316545,
            "unit": "ns",
            "range": "± 150.76271790161817"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24231.262858072918,
            "unit": "ns",
            "range": "± 105.6664397151561"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36835.78512137277,
            "unit": "ns",
            "range": "± 73.44630873859731"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 725044.8171037947,
            "unit": "ns",
            "range": "± 791.1776790413443"
          }
        ]
      }
    ],
    "Code93Encoder": [
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "5060498f4400eb32e3cb11466a6de5f18e8ca7e6",
          "message": "Change barcode type to Code93 in Code93Encoder.cs\n\nUpdated the `barcodeType` variable from `BarcodeTypes.Code39` to `BarcodeTypes.Code93` to reflect the new barcode type being utilized in the encoder.",
          "timestamp": "2025-01-19T21:36:58+01:00",
          "tree_id": "68159f434e90188e0c68a023deedbdcccf66e4b3",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/5060498f4400eb32e3cb11466a6de5f18e8ca7e6"
        },
        "date": 1737319548718,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 838.811295332732,
            "unit": "ns",
            "range": "± 22.792347812727826"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2250.9588950020925,
            "unit": "ns",
            "range": "± 53.499284037699844"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41561.457539876305,
            "unit": "ns",
            "range": "± 86.51121518094146"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 54596.20518798828,
            "unit": "ns",
            "range": "± 180.13194529157843"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1014171.4723958333,
            "unit": "ns",
            "range": "± 4041.5347614568136"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "TyKonKet",
            "username": "TyKonKet",
            "email": "matteoautieri@live.it"
          },
          "committer": {
            "name": "TyKonKet",
            "username": "TyKonKet",
            "email": "matteoautieri@live.it"
          },
          "id": "5060498f4400eb32e3cb11466a6de5f18e8ca7e6",
          "message": "Change barcode type to Code93 in Code93Encoder.cs\n\nUpdated the `barcodeType` variable from `BarcodeTypes.Code39` to `BarcodeTypes.Code93` to reflect the new barcode type being utilized in the encoder.",
          "timestamp": "2025-01-19T20:36:58Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/5060498f4400eb32e3cb11466a6de5f18e8ca7e6"
        },
        "date": 1737361500561,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 756.0929532732282,
            "unit": "ns",
            "range": "± 8.634031909700779"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1949.8919339861188,
            "unit": "ns",
            "range": "± 18.94619659194084"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41382.433157784595,
            "unit": "ns",
            "range": "± 155.24181198461153"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 56158.2901570638,
            "unit": "ns",
            "range": "± 287.7415795056396"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1013399.4016927084,
            "unit": "ns",
            "range": "± 1137.2717958554938"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2db2916f2b841fe77c8a7483a6b3634fd1156f3",
          "message": "Update README.md",
          "timestamp": "2025-01-20T11:25:26+01:00",
          "tree_id": "3c68fcd50010c009d4943d616b74adfcc4f322f4",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/f2db2916f2b841fe77c8a7483a6b3634fd1156f3"
        },
        "date": 1737369274691,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 790.512216934791,
            "unit": "ns",
            "range": "± 5.1702978063462"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2018.370923868815,
            "unit": "ns",
            "range": "± 21.098210437306196"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41219.26183268229,
            "unit": "ns",
            "range": "± 214.2981867792972"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55457.4416788737,
            "unit": "ns",
            "range": "± 490.99104332837993"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1012429.1183035715,
            "unit": "ns",
            "range": "± 3536.541866920834"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24608eb6e60951a8ee6a435a6c64998ec231bb85",
          "message": "Merge pull request #3 from TyKonKet/copilot/fix-7ca2238d-bf54-4ab3-ac32-1dcff0360c78\n\nAdd comprehensive .github/copilot-instructions.md to onboard coding agents",
          "timestamp": "2025-08-08T22:35:51+02:00",
          "tree_id": "2c46eaa8b21abcd6e1df7d8998546a05dc997a4a",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/24608eb6e60951a8ee6a435a6c64998ec231bb85"
        },
        "date": 1754685850395,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 764.6218479474386,
            "unit": "ns",
            "range": "± 16.027201612430478"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2075.457294209798,
            "unit": "ns",
            "range": "± 36.313755283190396"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41926.333516438805,
            "unit": "ns",
            "range": "± 47.800676703322495"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 56026.482267252606,
            "unit": "ns",
            "range": "± 450.11921972055916"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1015462.7872596154,
            "unit": "ns",
            "range": "± 587.6328220278048"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "1de459c17a23185b3f4c18d5993471d84792c603",
          "message": "Update branch reference from 'master' to 'main' in workflow files",
          "timestamp": "2025-08-08T22:53:06+02:00",
          "tree_id": "ac8bd802af4fc6893132968ac826d63231605338",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/1de459c17a23185b3f4c18d5993471d84792c603"
        },
        "date": 1754687028958,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 762.161978340149,
            "unit": "ns",
            "range": "± 9.021468807536383"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2071.439683180589,
            "unit": "ns",
            "range": "± 23.662657789498535"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 42492.769761305586,
            "unit": "ns",
            "range": "± 103.0970362867656"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 56698.76042292668,
            "unit": "ns",
            "range": "± 112.86402746657693"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1011712.0217633928,
            "unit": "ns",
            "range": "± 1001.1696790370759"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fffda0ed364a4c53793fd53fe280760fc93bb8c1",
          "message": "Merge pull request #4 from TyKonKet/copilot/fix-8fc91e55-9463-4ac4-b567-fb08b5ec21e9\n\nUpdate bug report templates to be library-focused for .NET BarcodeGenerator",
          "timestamp": "2025-08-09T00:15:05+02:00",
          "tree_id": "c6de7560f8f17c6fa691afd853751980dee4b71c",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/fffda0ed364a4c53793fd53fe280760fc93bb8c1"
        },
        "date": 1754691869592,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 770.4376419703166,
            "unit": "ns",
            "range": "± 11.286182072996908"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2075.044896443685,
            "unit": "ns",
            "range": "± 33.115322737945704"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 42199.31862095424,
            "unit": "ns",
            "range": "± 139.81619811858567"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55236.82371403621,
            "unit": "ns",
            "range": "± 91.91945366257657"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1012419.1547526042,
            "unit": "ns",
            "range": "± 2023.232430331427"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6d6c95c4431655230d795a8a6cd1d1510665be0",
          "message": "Merge pull request #5 from TyKonKet/copilot/fix-6dad0733-93cf-4758-b0b8-9c5cdf727419\n\nAdd GitHub Issue Forms for feature requests with multi-language .NET support",
          "timestamp": "2025-08-09T00:50:52+02:00",
          "tree_id": "38621987e62c3dae3cbd05ef66570cf4415a5a5a",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/a6d6c95c4431655230d795a8a6cd1d1510665be0"
        },
        "date": 1754693976435,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 754.3837049007416,
            "unit": "ns",
            "range": "± 2.732724832989325"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2039.801255907331,
            "unit": "ns",
            "range": "± 13.156363093592475"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41930.31142953726,
            "unit": "ns",
            "range": "± 102.02962781984183"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 56775.90298461914,
            "unit": "ns",
            "range": "± 317.9054762565217"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1010176.0690104166,
            "unit": "ns",
            "range": "± 1891.7320521571776"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc870c059b6fd4812cb188594d7943388b0e56b6",
          "message": "Update feature_request.yml",
          "timestamp": "2025-08-09T00:56:40+02:00",
          "tree_id": "148636ce1f97f1b8ff172f79167a66f14f0279a6",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/bc870c059b6fd4812cb188594d7943388b0e56b6"
        },
        "date": 1754694324531,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 826.3599820503822,
            "unit": "ns",
            "range": "± 7.82551878017885"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2322.322083234787,
            "unit": "ns",
            "range": "± 43.46653422487821"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41840.622423444474,
            "unit": "ns",
            "range": "± 76.57247536903502"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 56409.33391927083,
            "unit": "ns",
            "range": "± 779.8069964421258"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1014880.396484375,
            "unit": "ns",
            "range": "± 1039.9048171224779"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1b21ab76eed77ba76ed3d4cd641606876b434dc",
          "message": "Update bug_report.yml",
          "timestamp": "2025-08-09T01:04:08+02:00",
          "tree_id": "8910dae4205218ae123c9b270ee6cbb41ccd2ae8",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/d1b21ab76eed77ba76ed3d4cd641606876b434dc"
        },
        "date": 1754694784246,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 766.9473366737366,
            "unit": "ns",
            "range": "± 6.46531845312107"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2222.205500368212,
            "unit": "ns",
            "range": "± 97.81723480756793"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 42166.95966012137,
            "unit": "ns",
            "range": "± 93.74811214812263"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55255.769118088945,
            "unit": "ns",
            "range": "± 87.83849377147291"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1011829.7769252232,
            "unit": "ns",
            "range": "± 1653.1852200604374"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "Matteo Autieri",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7764b318e2ef66dcbacbd8fedbca75218f0036ac",
          "message": "Update feature_request.yml",
          "timestamp": "2025-08-09T01:09:00+02:00",
          "tree_id": "df7415d590ec55bb3ce3402fdf0b355ec0e0ea6f",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/7764b318e2ef66dcbacbd8fedbca75218f0036ac"
        },
        "date": 1754695050432,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 768.7365608851115,
            "unit": "ns",
            "range": "± 2.811647685445429"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2020.9791684831891,
            "unit": "ns",
            "range": "± 20.264663682549116"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41855.50997690054,
            "unit": "ns",
            "range": "± 49.616747624316"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55610.56223707933,
            "unit": "ns",
            "range": "± 82.99969105599656"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1013055.3270089285,
            "unit": "ns",
            "range": "± 1898.0958562809399"
          }
        ]
      }
    ]
  }
}