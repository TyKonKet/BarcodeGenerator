window.BENCHMARK_DATA = {
  "lastUpdate": 1755032312338,
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
          "id": "b07b13425036e7268db088c7259afc66b106ce59",
          "message": "Update feature_request.md",
          "timestamp": "2025-08-09T01:12:35+02:00",
          "tree_id": "b2d338551c6e2b28407a984cb8017fd6008c9330",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/b07b13425036e7268db088c7259afc66b106ce59"
        },
        "date": 1754695235551,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 17038.681075032553,
            "unit": "ns",
            "range": "± 311.9692744471236"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 18820.981217447916,
            "unit": "ns",
            "range": "± 266.0638209630062"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 20022.320086161297,
            "unit": "ns",
            "range": "± 42.88380019481885"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 27836.99877493722,
            "unit": "ns",
            "range": "± 255.16976164343612"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 550328.8302873884,
            "unit": "ns",
            "range": "± 1395.9476430186726"
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
          "id": "298ffc43c9ae5b62083fd0c817b1e1bcc5c888d3",
          "message": "Update bug_report.md",
          "timestamp": "2025-08-09T01:12:32+02:00",
          "tree_id": "dfd768635e402a7a90a56e605c8cfca1694b436f",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/298ffc43c9ae5b62083fd0c817b1e1bcc5c888d3"
        },
        "date": 1754695272665,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15063.848177396334,
            "unit": "ns",
            "range": "± 93.29660265660415"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16819.07084350586,
            "unit": "ns",
            "range": "± 286.3012436414188"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19198.21100792518,
            "unit": "ns",
            "range": "± 49.527555977804596"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26376.59273000864,
            "unit": "ns",
            "range": "± 76.29240596117393"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 537539.5410531851,
            "unit": "ns",
            "range": "± 1166.1556775034956"
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
          "id": "ea7715925c71a95ab471cc5df5517372b2439d3c",
          "message": "Update copilot-setup-steps.yml",
          "timestamp": "2025-08-09T01:55:09+02:00",
          "tree_id": "67284622ba696e021a141d7439db3c73d0d52ecb",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/ea7715925c71a95ab471cc5df5517372b2439d3c"
        },
        "date": 1754697817373,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 14862.16001180013,
            "unit": "ns",
            "range": "± 200.28698033128637"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16276.418077741351,
            "unit": "ns",
            "range": "± 125.12144770765596"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18967.951990763348,
            "unit": "ns",
            "range": "± 9.583508768433454"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26298.05119527181,
            "unit": "ns",
            "range": "± 273.2368591317408"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 538275.3431490385,
            "unit": "ns",
            "range": "± 1268.051546261453"
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
          "id": "3974f47b09316a6b9fbfc6949b850b75ddb2cdd3",
          "message": "Merge pull request #6 from TyKonKet/copilot/fix-f2a6515d-5f3e-4c27-9c4e-3c376a899d82\n\nAdd GitHub Actions workflow for Copilot environment setup",
          "timestamp": "2025-08-09T01:54:43+02:00",
          "tree_id": "670116623a5b2c2d7a17b3ef93b89aa170223106",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/3974f47b09316a6b9fbfc6949b850b75ddb2cdd3"
        },
        "date": 1754697852455,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 14843.898253220777,
            "unit": "ns",
            "range": "± 158.2109983082753"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16459.872800699868,
            "unit": "ns",
            "range": "± 81.67382365944297"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19206.718127441407,
            "unit": "ns",
            "range": "± 46.92763512761748"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26421.599272507887,
            "unit": "ns",
            "range": "± 48.85672309438333"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 536322.745718149,
            "unit": "ns",
            "range": "± 977.0689111155349"
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
          "id": "a5c84202060045ea67fd3c1d1fb754b998bf79a1",
          "message": "Update copilot-setup-steps.yml",
          "timestamp": "2025-08-09T01:57:15+02:00",
          "tree_id": "f01366795e51b5eb1b8f1a83424718aa644bc6b5",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/a5c84202060045ea67fd3c1d1fb754b998bf79a1"
        },
        "date": 1754697949772,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15306.64319742137,
            "unit": "ns",
            "range": "± 448.1512056107981"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16727.898120586688,
            "unit": "ns",
            "range": "± 152.49996715522008"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19108.359162550707,
            "unit": "ns",
            "range": "± 35.54334105328166"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26471.465249197823,
            "unit": "ns",
            "range": "± 102.5601966522031"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 539310.5406668527,
            "unit": "ns",
            "range": "± 585.1626814485726"
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
          "id": "311f9a41555a6091895a5f6a628c133d97a3902f",
          "message": "Update copilot-setup-steps.yml",
          "timestamp": "2025-08-09T02:04:05+02:00",
          "tree_id": "4b670ac1022c8bd7d20dd9da583b72c145e59395",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/311f9a41555a6091895a5f6a628c133d97a3902f"
        },
        "date": 1754698350009,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 14909.48216349284,
            "unit": "ns",
            "range": "± 120.57624117980697"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16611.199544270832,
            "unit": "ns",
            "range": "± 163.4393673753338"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18976.40526123047,
            "unit": "ns",
            "range": "± 40.39036519663554"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26027.242649958684,
            "unit": "ns",
            "range": "± 63.496679411867895"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 538893.6802455357,
            "unit": "ns",
            "range": "± 1217.5450003926046"
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
          "id": "57881e83d86ad2f3fd42ee2a3478d196b1b65fee",
          "message": "Refactor Export method to use filePath parameter\n\nUpdated the Export method in the BarcodeGenerator to change the parameter from fileName to filePath. Enhanced documentation to clarify that filePath can be relative or absolute, and included special keywords for dynamic path generation. Improved logic to ensure the directory exists before exporting, preventing errors related to missing directories.",
          "timestamp": "2025-08-09T15:22:05+02:00",
          "tree_id": "dc7a0f83d0f01a392dd905cf96c72935365fff5e",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/57881e83d86ad2f3fd42ee2a3478d196b1b65fee"
        },
        "date": 1754746258213,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 14805.55057634626,
            "unit": "ns",
            "range": "± 187.26785829398034"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16334.237591552734,
            "unit": "ns",
            "range": "± 248.9701307840453"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18903.44242248535,
            "unit": "ns",
            "range": "± 33.579535942152525"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25912.078443254744,
            "unit": "ns",
            "range": "± 87.48547497687758"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 535415.4454627404,
            "unit": "ns",
            "range": "± 1022.018306579172"
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
          "id": "9b663a09d61be856abe3d5a374bbf5a124a91a0f",
          "message": "Add exception documentation to Encode methods\n\nEnhanced the `Encode` method in multiple classes within the `TyKonKet.BarcodeGenerator` namespace by adding detailed exception documentation. Included `ArgumentNullException`, `FormatException`, and `ArgumentOutOfRangeException` to clarify potential errors during barcode encoding, improving error handling and developer guidance.",
          "timestamp": "2025-08-09T19:06:52+02:00",
          "tree_id": "2585b6f10bd712112511e3676ca40fbcb7469609",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/9b663a09d61be856abe3d5a374bbf5a124a91a0f"
        },
        "date": 1754759782290,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15625.430310930524,
            "unit": "ns",
            "range": "± 151.20206611230253"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16180.562173025948,
            "unit": "ns",
            "range": "± 122.56725313339591"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19007.337923322404,
            "unit": "ns",
            "range": "± 55.426513030656146"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26249.182877760668,
            "unit": "ns",
            "range": "± 60.42716695435621"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 538124.2067708333,
            "unit": "ns",
            "range": "± 1777.8615944907415"
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
          "id": "73bb4bb3d6480ea979663daf0dbed474f3a079bc",
          "message": "Enhance ISBN-13 prefix validation in Isbn13Encoder\n\nUpdated the `FormatBarcode` method to validate barcode prefixes, allowing only \"978\" or \"979\". Introduced a `FormatException` for invalid prefixes and modified the barcode formatting to use the extracted prefix instead of hardcoding \"978\". This improves error handling and flexibility in barcode processing.",
          "timestamp": "2025-08-10T14:18:13+02:00",
          "tree_id": "ddeda4ef701c4f9584b4e7c9157cd1cf66613e13",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/73bb4bb3d6480ea979663daf0dbed474f3a079bc"
        },
        "date": 1754828873400,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15807.692791748046,
            "unit": "ns",
            "range": "± 117.24605068317412"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16190.535721842449,
            "unit": "ns",
            "range": "± 102.54786279174019"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19283.431734720867,
            "unit": "ns",
            "range": "± 51.21351243184836"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25973.896028791154,
            "unit": "ns",
            "range": "± 90.95304857573441"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 536742.8171735491,
            "unit": "ns",
            "range": "± 886.5664124527983"
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
          "id": "623166c9f6e0c25e6eb8fd87e0e10132dd9b1667",
          "message": "Refactor Export method parameters and documentation\n\nUpdated the `Export` method in the `TyKonKet.BarcodeGenerator` namespace to change the parameter name from `fileName` to `filePath` for clarity. Enhanced documentation to include special keywords for `filePath` and added new exceptions for null values and directory issues.\n\nIn the `TyKonKet.BarcodeGenerator.Encoders.Abstract` namespace, updated the `Export` method documentation to include new exceptions for both `filePath` and `stream` parameters, improving robustness by clearly defining potential error conditions.",
          "timestamp": "2025-08-10T15:28:02+02:00",
          "tree_id": "cf01572fcf3d18a0daa4330edb69f43f5cf86009",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/623166c9f6e0c25e6eb8fd87e0e10132dd9b1667"
        },
        "date": 1754833178400,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15961.583164014315,
            "unit": "ns",
            "range": "± 806.4628956339313"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 17672.851141967774,
            "unit": "ns",
            "range": "± 699.6606216888143"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19785.79603068034,
            "unit": "ns",
            "range": "± 268.57536123261605"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 27194.313051350913,
            "unit": "ns",
            "range": "± 270.65912438875074"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 548744.2694661458,
            "unit": "ns",
            "range": "± 3665.835035947693"
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
          "id": "3fbbcd8c6735865ec9a6e848130abff2d7c87872",
          "message": "Merge pull request #10 from TyKonKet/copilot/fix-ab27eab2-8953-458e-8b11-703d006b4751\n\nAdd scheduled trigger to .NET Benchmark Runner workflow",
          "timestamp": "2025-08-10T22:13:59+02:00",
          "tree_id": "0fc33b563e6f03df721240703853bf4aef14146d",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/3fbbcd8c6735865ec9a6e848130abff2d7c87872"
        },
        "date": 1754857405536,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15555.023225911458,
            "unit": "ns",
            "range": "± 83.7755189918864"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16193.810405186245,
            "unit": "ns",
            "range": "± 128.49788235589736"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19084.189780099052,
            "unit": "ns",
            "range": "± 43.56215484372689"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 27277.14107622419,
            "unit": "ns",
            "range": "± 76.10906698353311"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 537261.6704852765,
            "unit": "ns",
            "range": "± 691.819866539529"
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
          "id": "7cbcc0faa91e6396d06de5eba37b414c5431c392",
          "message": "Merge pull request #9 from TyKonKet/copilot/fix-8\n\nAdd comprehensive API documentation with corrected exceptions, AI disclaimers, and modern repository presentation",
          "timestamp": "2025-08-11T00:05:25+02:00",
          "tree_id": "cb719e99ada38fac19462939c17e1e1d37fbca8a",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/7cbcc0faa91e6396d06de5eba37b414c5431c392"
        },
        "date": 1754864075594,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15136.68407389323,
            "unit": "ns",
            "range": "± 187.96072021643226"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16784.62358194987,
            "unit": "ns",
            "range": "± 312.59102125686616"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19368.203989664715,
            "unit": "ns",
            "range": "± 37.35030546702456"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26125.204315185547,
            "unit": "ns",
            "range": "± 26.71958765757721"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 538645.4585658482,
            "unit": "ns",
            "range": "± 3729.185581841313"
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
          "id": "0fba6a3ed14f25797dc1eddc209f37823b7f7080",
          "message": "Update README.md",
          "timestamp": "2025-08-11T00:24:31+02:00",
          "tree_id": "8f51017d8d1c1533b2d7b626d85f4eec5890bd51",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/0fba6a3ed14f25797dc1eddc209f37823b7f7080"
        },
        "date": 1754865273244,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 18999.45350816515,
            "unit": "ns",
            "range": "± 518.5427100818217"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 20378.539191109794,
            "unit": "ns",
            "range": "± 567.6872080145188"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19894.231288364954,
            "unit": "ns",
            "range": "± 85.71570876273658"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 27970.796889241537,
            "unit": "ns",
            "range": "± 114.44279565171252"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 550939.5668569711,
            "unit": "ns",
            "range": "± 893.6522343687694"
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
          "id": "9761664fa69d1b23408fe641fd0d9ae84c28d193",
          "message": "Merge pull request #16 from TyKonKet/copilot/fix-15\n\nImprove documentation formatting for better readability",
          "timestamp": "2025-08-11T00:51:50+02:00",
          "tree_id": "0b045b8c98491d0760dd1539b54bc33f7fbf2ab3",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/9761664fa69d1b23408fe641fd0d9ae84c28d193"
        },
        "date": 1754866808451,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15558.68710530599,
            "unit": "ns",
            "range": "± 101.5461869966609"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16045.513559977213,
            "unit": "ns",
            "range": "± 114.98045840484599"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18830.07875882662,
            "unit": "ns",
            "range": "± 18.849958377825374"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26482.55081830706,
            "unit": "ns",
            "range": "± 42.573413001580384"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 537188.8850446428,
            "unit": "ns",
            "range": "± 812.6586386954232"
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
          "id": "38f0d6e2550e0cd75fcb0cc4183e1f94461b23d2",
          "message": "Merge pull request #14 from TyKonKet/copilot/fix-11\n\nFix ISBN-13 encoder tests to use valid prefixes and add comprehensive exception tests",
          "timestamp": "2025-08-11T00:53:03+02:00",
          "tree_id": "b6a986dd83350643cda5564d4a85ce9432c1a4bc",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/38f0d6e2550e0cd75fcb0cc4183e1f94461b23d2"
        },
        "date": 1754866928984,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 14828.335752360026,
            "unit": "ns",
            "range": "± 163.62832289740078"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16650.47203572591,
            "unit": "ns",
            "range": "± 154.48280037580554"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18970.555283766527,
            "unit": "ns",
            "range": "± 19.04168833596268"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26115.743599446614,
            "unit": "ns",
            "range": "± 106.91289297228428"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 538009.9349190848,
            "unit": "ns",
            "range": "± 997.9343099020314"
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
          "id": "457554fb32cb3579097bf3f25185be1f1916f335",
          "message": "Update copilot-instructions.md",
          "timestamp": "2025-08-11T19:59:00+02:00",
          "tree_id": "2f31504fb8a23058bfbb708ad4f7030eb3852e61",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/457554fb32cb3579097bf3f25185be1f1916f335"
        },
        "date": 1754935672514,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15656.98783329555,
            "unit": "ns",
            "range": "± 86.36157173468085"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 15990.117795817057,
            "unit": "ns",
            "range": "± 230.61094507783537"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19656.303681593676,
            "unit": "ns",
            "range": "± 34.6581971569026"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25818.179048665366,
            "unit": "ns",
            "range": "± 49.12079937226205"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 537640.7734375,
            "unit": "ns",
            "range": "± 600.0946417408696"
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
          "id": "212a2127a5a3b257ad692e6b89bee214225c6600",
          "message": "Merge branch 'main' of https://github.com/TyKonKet/BarcodeGenerator",
          "timestamp": "2025-08-11T21:20:12+02:00",
          "tree_id": "52ed980be711ed6202c2d73a61980d6b29071e19",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/212a2127a5a3b257ad692e6b89bee214225c6600"
        },
        "date": 1754940576468,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15769.679806518554,
            "unit": "ns",
            "range": "± 130.75501788604458"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16450.375854492188,
            "unit": "ns",
            "range": "± 118.33165757488952"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18880.16383244441,
            "unit": "ns",
            "range": "± 25.78274254026112"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26254.958354404993,
            "unit": "ns",
            "range": "± 31.855509645079756"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 537705.8154296875,
            "unit": "ns",
            "range": "± 1170.9820195285884"
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
          "id": "af6d6c485c0ed3bceda0f729ecdc3ae97f29da6d",
          "message": "Update benchmark configuration to target .NET 10.0 runtime",
          "timestamp": "2025-08-12T21:37:42+02:00",
          "tree_id": "76506b6998d1bff7a13efa4349a2ef20bcea76ec",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/af6d6c485c0ed3bceda0f729ecdc3ae97f29da6d"
        },
        "date": 1755027875110,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15962.803906954252,
            "unit": "ns",
            "range": "± 217.51430859527142"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 17532.419468470984,
            "unit": "ns",
            "range": "± 257.7720585914332"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19299.280691964286,
            "unit": "ns",
            "range": "± 120.94375082721407"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26702.035137469953,
            "unit": "ns",
            "range": "± 80.89113595321045"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 574910.4910714285,
            "unit": "ns",
            "range": "± 871.2376550573317"
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
          "id": "c629b73587483110c40dcb5f759b2540089c147f",
          "message": "Update README.md",
          "timestamp": "2025-08-12T22:51:55+02:00",
          "tree_id": "2a990b212f778e6329455f3b4efec344dfdc979d",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/c629b73587483110c40dcb5f759b2540089c147f"
        },
        "date": 1755032311622,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15375.94930419922,
            "unit": "ns",
            "range": "± 284.7807277154709"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16493.498803710936,
            "unit": "ns",
            "range": "± 268.265179518658"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18965.586360051082,
            "unit": "ns",
            "range": "± 34.328853038424285"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26504.229502751277,
            "unit": "ns",
            "range": "± 95.81652255129674"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.ExportToFile",
            "value": 564780.5904296875,
            "unit": "ns",
            "range": "± 1904.0835173780447"
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
          "id": "b07b13425036e7268db088c7259afc66b106ce59",
          "message": "Update feature_request.md",
          "timestamp": "2025-08-09T01:12:35+02:00",
          "tree_id": "b2d338551c6e2b28407a984cb8017fd6008c9330",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/b07b13425036e7268db088c7259afc66b106ce59"
        },
        "date": 1754695236880,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 24361.29684651693,
            "unit": "ns",
            "range": "± 232.26555942469437"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 22536.226239885604,
            "unit": "ns",
            "range": "± 315.94712577904966"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 26845.400761195593,
            "unit": "ns",
            "range": "± 58.45434744599204"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 39822.000126429964,
            "unit": "ns",
            "range": "± 76.28620682641882"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 742733.8528180803,
            "unit": "ns",
            "range": "± 1289.8850511550554"
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
          "id": "298ffc43c9ae5b62083fd0c817b1e1bcc5c888d3",
          "message": "Update bug_report.md",
          "timestamp": "2025-08-09T01:12:32+02:00",
          "tree_id": "dfd768635e402a7a90a56e605c8cfca1694b436f",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/298ffc43c9ae5b62083fd0c817b1e1bcc5c888d3"
        },
        "date": 1754695273912,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18976.65053851788,
            "unit": "ns",
            "range": "± 247.4037577566273"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 21305.933232625324,
            "unit": "ns",
            "range": "± 188.1054576214346"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25584.296901157923,
            "unit": "ns",
            "range": "± 118.94356906351015"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 39028.20309448242,
            "unit": "ns",
            "range": "± 86.76365958597472"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 728909.5472237723,
            "unit": "ns",
            "range": "± 2000.1523647391982"
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
          "id": "ea7715925c71a95ab471cc5df5517372b2439d3c",
          "message": "Update copilot-setup-steps.yml",
          "timestamp": "2025-08-09T01:55:09+02:00",
          "tree_id": "67284622ba696e021a141d7439db3c73d0d52ecb",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/ea7715925c71a95ab471cc5df5517372b2439d3c"
        },
        "date": 1754697819196,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18373.666471041164,
            "unit": "ns",
            "range": "± 121.73000901021938"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 19977.845581054688,
            "unit": "ns",
            "range": "± 150.11117648907526"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25568.876342773438,
            "unit": "ns",
            "range": "± 59.43836131949294"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38773.42982584635,
            "unit": "ns",
            "range": "± 104.7170539688533"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 726246.0344050481,
            "unit": "ns",
            "range": "± 619.7565752538442"
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
          "id": "3974f47b09316a6b9fbfc6949b850b75ddb2cdd3",
          "message": "Merge pull request #6 from TyKonKet/copilot/fix-f2a6515d-5f3e-4c27-9c4e-3c376a899d82\n\nAdd GitHub Actions workflow for Copilot environment setup",
          "timestamp": "2025-08-09T01:54:43+02:00",
          "tree_id": "670116623a5b2c2d7a17b3ef93b89aa170223106",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/3974f47b09316a6b9fbfc6949b850b75ddb2cdd3"
        },
        "date": 1754697853492,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 19258.706647600447,
            "unit": "ns",
            "range": "± 209.7990910752964"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20839.695251464844,
            "unit": "ns",
            "range": "± 270.0230231151549"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25730.704360961914,
            "unit": "ns",
            "range": "± 40.17258853912468"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38874.17346191406,
            "unit": "ns",
            "range": "± 122.28178274621423"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 722156.9592285156,
            "unit": "ns",
            "range": "± 730.6914146230172"
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
          "id": "a5c84202060045ea67fd3c1d1fb754b998bf79a1",
          "message": "Update copilot-setup-steps.yml",
          "timestamp": "2025-08-09T01:57:15+02:00",
          "tree_id": "f01366795e51b5eb1b8f1a83424718aa644bc6b5",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/a5c84202060045ea67fd3c1d1fb754b998bf79a1"
        },
        "date": 1754697951611,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18559.44126586914,
            "unit": "ns",
            "range": "± 240.6210294576723"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20746.469306437175,
            "unit": "ns",
            "range": "± 386.3765497273272"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 26127.58111354283,
            "unit": "ns",
            "range": "± 27.00187888025655"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38723.8063659668,
            "unit": "ns",
            "range": "± 128.59909364285832"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 725827.7279897836,
            "unit": "ns",
            "range": "± 1053.1561213812436"
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
          "id": "311f9a41555a6091895a5f6a628c133d97a3902f",
          "message": "Update copilot-setup-steps.yml",
          "timestamp": "2025-08-09T02:04:05+02:00",
          "tree_id": "4b670ac1022c8bd7d20dd9da583b72c145e59395",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/311f9a41555a6091895a5f6a628c133d97a3902f"
        },
        "date": 1754698351209,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18900.661291503908,
            "unit": "ns",
            "range": "± 212.49842423192626"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 21212.62210736956,
            "unit": "ns",
            "range": "± 330.38463385307364"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25862.9052159236,
            "unit": "ns",
            "range": "± 69.58848079122197"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38134.30524117606,
            "unit": "ns",
            "range": "± 106.85121103737566"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 724592.7111816406,
            "unit": "ns",
            "range": "± 515.9122812573555"
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
          "id": "57881e83d86ad2f3fd42ee2a3478d196b1b65fee",
          "message": "Refactor Export method to use filePath parameter\n\nUpdated the Export method in the BarcodeGenerator to change the parameter from fileName to filePath. Enhanced documentation to clarify that filePath can be relative or absolute, and included special keywords for dynamic path generation. Improved logic to ensure the directory exists before exporting, preventing errors related to missing directories.",
          "timestamp": "2025-08-09T15:22:05+02:00",
          "tree_id": "dc7a0f83d0f01a392dd905cf96c72935365fff5e",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/57881e83d86ad2f3fd42ee2a3478d196b1b65fee"
        },
        "date": 1754746259269,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18600.115133534306,
            "unit": "ns",
            "range": "± 456.6080586581833"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 19903.87208811442,
            "unit": "ns",
            "range": "± 134.7584275678002"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25764.94099208287,
            "unit": "ns",
            "range": "± 66.03489205254215"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38403.5889444987,
            "unit": "ns",
            "range": "± 81.40448778752429"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 733703.9084123884,
            "unit": "ns",
            "range": "± 1931.1987554698799"
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
          "id": "9b663a09d61be856abe3d5a374bbf5a124a91a0f",
          "message": "Add exception documentation to Encode methods\n\nEnhanced the `Encode` method in multiple classes within the `TyKonKet.BarcodeGenerator` namespace by adding detailed exception documentation. Included `ArgumentNullException`, `FormatException`, and `ArgumentOutOfRangeException` to clarify potential errors during barcode encoding, improving error handling and developer guidance.",
          "timestamp": "2025-08-09T19:06:52+02:00",
          "tree_id": "2585b6f10bd712112511e3676ca40fbcb7469609",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/9b663a09d61be856abe3d5a374bbf5a124a91a0f"
        },
        "date": 1754759784116,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18832.684303977272,
            "unit": "ns",
            "range": "± 607.8979537275925"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20180.148095703124,
            "unit": "ns",
            "range": "± 192.14681938324145"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25432.810311453683,
            "unit": "ns",
            "range": "± 53.08533016654395"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38560.3147664388,
            "unit": "ns",
            "range": "± 112.9908959062392"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 726337.2473307292,
            "unit": "ns",
            "range": "± 858.9772480318741"
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
          "id": "73bb4bb3d6480ea979663daf0dbed474f3a079bc",
          "message": "Enhance ISBN-13 prefix validation in Isbn13Encoder\n\nUpdated the `FormatBarcode` method to validate barcode prefixes, allowing only \"978\" or \"979\". Introduced a `FormatException` for invalid prefixes and modified the barcode formatting to use the extracted prefix instead of hardcoding \"978\". This improves error handling and flexibility in barcode processing.",
          "timestamp": "2025-08-10T14:18:13+02:00",
          "tree_id": "ddeda4ef701c4f9584b4e7c9157cd1cf66613e13",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/73bb4bb3d6480ea979663daf0dbed474f3a079bc"
        },
        "date": 1754828874855,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18207.92659348708,
            "unit": "ns",
            "range": "± 140.7742621822267"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20019.15919494629,
            "unit": "ns",
            "range": "± 156.1792836904305"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25418.910369873047,
            "unit": "ns",
            "range": "± 71.1955239484043"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38368.240626743864,
            "unit": "ns",
            "range": "± 112.26444622368828"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 724427.8396935096,
            "unit": "ns",
            "range": "± 764.2204520486737"
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
          "id": "623166c9f6e0c25e6eb8fd87e0e10132dd9b1667",
          "message": "Refactor Export method parameters and documentation\n\nUpdated the `Export` method in the `TyKonKet.BarcodeGenerator` namespace to change the parameter name from `fileName` to `filePath` for clarity. Enhanced documentation to include special keywords for `filePath` and added new exceptions for null values and directory issues.\n\nIn the `TyKonKet.BarcodeGenerator.Encoders.Abstract` namespace, updated the `Export` method documentation to include new exceptions for both `filePath` and `stream` parameters, improving robustness by clearly defining potential error conditions.",
          "timestamp": "2025-08-10T15:28:02+02:00",
          "tree_id": "cf01572fcf3d18a0daa4330edb69f43f5cf86009",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/623166c9f6e0c25e6eb8fd87e0e10132dd9b1667"
        },
        "date": 1754833179460,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 20007.26649039132,
            "unit": "ns",
            "range": "± 858.3802056390077"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 21012.50441040039,
            "unit": "ns",
            "range": "± 1303.4854779360273"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 26799.777090454103,
            "unit": "ns",
            "range": "± 303.9691628161169"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38911.655318196616,
            "unit": "ns",
            "range": "± 489.878360784807"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 734508.5026692708,
            "unit": "ns",
            "range": "± 6640.362901384994"
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
          "id": "3fbbcd8c6735865ec9a6e848130abff2d7c87872",
          "message": "Merge pull request #10 from TyKonKet/copilot/fix-ab27eab2-8953-458e-8b11-703d006b4751\n\nAdd scheduled trigger to .NET Benchmark Runner workflow",
          "timestamp": "2025-08-10T22:13:59+02:00",
          "tree_id": "0fc33b563e6f03df721240703853bf4aef14146d",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/3fbbcd8c6735865ec9a6e848130abff2d7c87872"
        },
        "date": 1754857406824,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 19309.03838845958,
            "unit": "ns",
            "range": "± 1068.2698981581295"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20284.365307147687,
            "unit": "ns",
            "range": "± 88.72481468708773"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25421.169569749098,
            "unit": "ns",
            "range": "± 94.04252623932804"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38496.944056919645,
            "unit": "ns",
            "range": "± 62.48127266004123"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 723392.3836495535,
            "unit": "ns",
            "range": "± 1238.4545840571197"
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
          "id": "7cbcc0faa91e6396d06de5eba37b414c5431c392",
          "message": "Merge pull request #9 from TyKonKet/copilot/fix-8\n\nAdd comprehensive API documentation with corrected exceptions, AI disclaimers, and modern repository presentation",
          "timestamp": "2025-08-11T00:05:25+02:00",
          "tree_id": "cb719e99ada38fac19462939c17e1e1d37fbca8a",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/7cbcc0faa91e6396d06de5eba37b414c5431c392"
        },
        "date": 1754864076774,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 19160.169400896346,
            "unit": "ns",
            "range": "± 294.9268934344858"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20961.55577523368,
            "unit": "ns",
            "range": "± 270.83452931737384"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25456.904497419084,
            "unit": "ns",
            "range": "± 61.34307804293579"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 37791.20075276693,
            "unit": "ns",
            "range": "± 207.60463684703797"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 724817.394391741,
            "unit": "ns",
            "range": "± 1573.6686856960043"
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
          "id": "0fba6a3ed14f25797dc1eddc209f37823b7f7080",
          "message": "Update README.md",
          "timestamp": "2025-08-11T00:24:31+02:00",
          "tree_id": "8f51017d8d1c1533b2d7b626d85f4eec5890bd51",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/0fba6a3ed14f25797dc1eddc209f37823b7f7080"
        },
        "date": 1754865274296,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 22948.850306193035,
            "unit": "ns",
            "range": "± 757.1618696567102"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 24562.501162015476,
            "unit": "ns",
            "range": "± 645.21808336141"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 27204.95751953125,
            "unit": "ns",
            "range": "± 150.8385621628471"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 39979.1580851237,
            "unit": "ns",
            "range": "± 462.3195753093127"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 743060.5576869419,
            "unit": "ns",
            "range": "± 1047.475096755243"
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
          "id": "9761664fa69d1b23408fe641fd0d9ae84c28d193",
          "message": "Merge pull request #16 from TyKonKet/copilot/fix-15\n\nImprove documentation formatting for better readability",
          "timestamp": "2025-08-11T00:51:50+02:00",
          "tree_id": "0b045b8c98491d0760dd1539b54bc33f7fbf2ab3",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/9761664fa69d1b23408fe641fd0d9ae84c28d193"
        },
        "date": 1754866809819,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18197.31135457357,
            "unit": "ns",
            "range": "± 183.19852722076854"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 19929.99156842913,
            "unit": "ns",
            "range": "± 235.38807602414656"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25659.714752197266,
            "unit": "ns",
            "range": "± 48.87116947335201"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 37715.259911170375,
            "unit": "ns",
            "range": "± 58.60033364845091"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 724519.5934012277,
            "unit": "ns",
            "range": "± 565.0823718082347"
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
          "id": "38f0d6e2550e0cd75fcb0cc4183e1f94461b23d2",
          "message": "Merge pull request #14 from TyKonKet/copilot/fix-11\n\nFix ISBN-13 encoder tests to use valid prefixes and add comprehensive exception tests",
          "timestamp": "2025-08-11T00:53:03+02:00",
          "tree_id": "b6a986dd83350643cda5564d4a85ce9432c1a4bc",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/38f0d6e2550e0cd75fcb0cc4183e1f94461b23d2"
        },
        "date": 1754866930296,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 17657.444706217448,
            "unit": "ns",
            "range": "± 201.69676987918533"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20806.76830836705,
            "unit": "ns",
            "range": "± 183.94399410134727"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25744.87702505929,
            "unit": "ns",
            "range": "± 93.28425346361377"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 37744.02653151292,
            "unit": "ns",
            "range": "± 40.83614622404923"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 723493.1960100447,
            "unit": "ns",
            "range": "± 1217.977986696446"
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
          "id": "457554fb32cb3579097bf3f25185be1f1916f335",
          "message": "Update copilot-instructions.md",
          "timestamp": "2025-08-11T19:59:00+02:00",
          "tree_id": "2f31504fb8a23058bfbb708ad4f7030eb3852e61",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/457554fb32cb3579097bf3f25185be1f1916f335"
        },
        "date": 1754935674082,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18241.48670087542,
            "unit": "ns",
            "range": "± 216.23262951906082"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20014.850555419922,
            "unit": "ns",
            "range": "± 367.8663069385495"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25761.43128051758,
            "unit": "ns",
            "range": "± 101.37100791037022"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 37985.64099121094,
            "unit": "ns",
            "range": "± 69.02181356143497"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 722406.6735491072,
            "unit": "ns",
            "range": "± 575.4368965652487"
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
          "id": "212a2127a5a3b257ad692e6b89bee214225c6600",
          "message": "Merge branch 'main' of https://github.com/TyKonKet/BarcodeGenerator",
          "timestamp": "2025-08-11T21:20:12+02:00",
          "tree_id": "52ed980be711ed6202c2d73a61980d6b29071e19",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/212a2127a5a3b257ad692e6b89bee214225c6600"
        },
        "date": 1754940577794,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 19495.5922861735,
            "unit": "ns",
            "range": "± 563.1959147576429"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20530.696160452706,
            "unit": "ns",
            "range": "± 196.92095399935695"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25495.15189107259,
            "unit": "ns",
            "range": "± 102.11500128030357"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38020.2918308803,
            "unit": "ns",
            "range": "± 231.88766460926655"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 722664.1508091518,
            "unit": "ns",
            "range": "± 588.8247439467149"
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
          "id": "af6d6c485c0ed3bceda0f729ecdc3ae97f29da6d",
          "message": "Update benchmark configuration to target .NET 10.0 runtime",
          "timestamp": "2025-08-12T21:37:42+02:00",
          "tree_id": "76506b6998d1bff7a13efa4349a2ef20bcea76ec",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/af6d6c485c0ed3bceda0f729ecdc3ae97f29da6d"
        },
        "date": 1755027876212,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 19794.172228361433,
            "unit": "ns",
            "range": "± 417.3836689325928"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 21548.352774483817,
            "unit": "ns",
            "range": "± 364.79506623655703"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 26232.50178019206,
            "unit": "ns",
            "range": "± 51.1472807517729"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 39723.674560546875,
            "unit": "ns",
            "range": "± 246.732089505451"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.ExportToFile",
            "value": 765213.0161132812,
            "unit": "ns",
            "range": "± 1536.0650367130593"
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
          "id": "b07b13425036e7268db088c7259afc66b106ce59",
          "message": "Update feature_request.md",
          "timestamp": "2025-08-09T01:12:35+02:00",
          "tree_id": "b2d338551c6e2b28407a984cb8017fd6008c9330",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/b07b13425036e7268db088c7259afc66b106ce59"
        },
        "date": 1754695238011,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 19905.519299316406,
            "unit": "ns",
            "range": "± 95.89046741433653"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 23182.865848795573,
            "unit": "ns",
            "range": "± 217.18023267321368"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 26635.572200230188,
            "unit": "ns",
            "range": "± 65.27232601364776"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41969.841872151694,
            "unit": "ns",
            "range": "± 205.39716546148932"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 743553.0228097098,
            "unit": "ns",
            "range": "± 1419.3152423744427"
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
          "id": "298ffc43c9ae5b62083fd0c817b1e1bcc5c888d3",
          "message": "Update bug_report.md",
          "timestamp": "2025-08-09T01:12:32+02:00",
          "tree_id": "dfd768635e402a7a90a56e605c8cfca1694b436f",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/298ffc43c9ae5b62083fd0c817b1e1bcc5c888d3"
        },
        "date": 1754695274944,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 19119.893657139368,
            "unit": "ns",
            "range": "± 157.92184085698844"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20658.021209716797,
            "unit": "ns",
            "range": "± 84.75070729298847"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25547.761006673176,
            "unit": "ns",
            "range": "± 185.3475745679456"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41558.36095721905,
            "unit": "ns",
            "range": "± 89.22326013108871"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 728046.7835036058,
            "unit": "ns",
            "range": "± 593.697519045798"
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
          "id": "ea7715925c71a95ab471cc5df5517372b2439d3c",
          "message": "Update copilot-setup-steps.yml",
          "timestamp": "2025-08-09T01:55:09+02:00",
          "tree_id": "67284622ba696e021a141d7439db3c73d0d52ecb",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/ea7715925c71a95ab471cc5df5517372b2439d3c"
        },
        "date": 1754697820678,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18877.195991007487,
            "unit": "ns",
            "range": "± 220.11966831733264"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19787.864815848214,
            "unit": "ns",
            "range": "± 92.25148662287249"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25130.787280742938,
            "unit": "ns",
            "range": "± 41.20333989207172"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40822.33303833008,
            "unit": "ns",
            "range": "± 111.5105385069944"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 726088.1182391827,
            "unit": "ns",
            "range": "± 797.4139927650842"
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
          "id": "3974f47b09316a6b9fbfc6949b850b75ddb2cdd3",
          "message": "Merge pull request #6 from TyKonKet/copilot/fix-f2a6515d-5f3e-4c27-9c4e-3c376a899d82\n\nAdd GitHub Actions workflow for Copilot environment setup",
          "timestamp": "2025-08-09T01:54:43+02:00",
          "tree_id": "670116623a5b2c2d7a17b3ef93b89aa170223106",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/3974f47b09316a6b9fbfc6949b850b75ddb2cdd3"
        },
        "date": 1754697854386,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 21331.542670593262,
            "unit": "ns",
            "range": "± 1403.1087173131746"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20223.11751145583,
            "unit": "ns",
            "range": "± 71.2790904738019"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25428.16774573693,
            "unit": "ns",
            "range": "± 38.70656967865427"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41566.611643473305,
            "unit": "ns",
            "range": "± 215.85957075125586"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 725243.9672475961,
            "unit": "ns",
            "range": "± 852.2273774173391"
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
          "id": "a5c84202060045ea67fd3c1d1fb754b998bf79a1",
          "message": "Update copilot-setup-steps.yml",
          "timestamp": "2025-08-09T01:57:15+02:00",
          "tree_id": "f01366795e51b5eb1b8f1a83424718aa644bc6b5",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/a5c84202060045ea67fd3c1d1fb754b998bf79a1"
        },
        "date": 1754697953209,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18709.656219482422,
            "unit": "ns",
            "range": "± 283.95135490837276"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20075.50469563802,
            "unit": "ns",
            "range": "± 249.02056421226317"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 26037.0757359096,
            "unit": "ns",
            "range": "± 63.49972159161692"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41658.89492563101,
            "unit": "ns",
            "range": "± 54.46126444878795"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 727931.3998046875,
            "unit": "ns",
            "range": "± 730.3821246385957"
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
          "id": "311f9a41555a6091895a5f6a628c133d97a3902f",
          "message": "Update copilot-setup-steps.yml",
          "timestamp": "2025-08-09T02:04:05+02:00",
          "tree_id": "4b670ac1022c8bd7d20dd9da583b72c145e59395",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/311f9a41555a6091895a5f6a628c133d97a3902f"
        },
        "date": 1754698352113,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 19084.46702159535,
            "unit": "ns",
            "range": "± 585.5735789872324"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20198.167698451452,
            "unit": "ns",
            "range": "± 66.00129883242379"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25254.70463327261,
            "unit": "ns",
            "range": "± 38.48619716589108"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41416.210837227954,
            "unit": "ns",
            "range": "± 90.06367410963772"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 725486.2701590402,
            "unit": "ns",
            "range": "± 778.9255321673687"
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
          "id": "57881e83d86ad2f3fd42ee2a3478d196b1b65fee",
          "message": "Refactor Export method to use filePath parameter\n\nUpdated the Export method in the BarcodeGenerator to change the parameter from fileName to filePath. Enhanced documentation to clarify that filePath can be relative or absolute, and included special keywords for dynamic path generation. Improved logic to ensure the directory exists before exporting, preventing errors related to missing directories.",
          "timestamp": "2025-08-09T15:22:05+02:00",
          "tree_id": "dc7a0f83d0f01a392dd905cf96c72935365fff5e",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/57881e83d86ad2f3fd42ee2a3478d196b1b65fee"
        },
        "date": 1754746260184,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 19218.92619934082,
            "unit": "ns",
            "range": "± 319.5926208188633"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20455.505480957032,
            "unit": "ns",
            "range": "± 195.52962811975954"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25415.339991978235,
            "unit": "ns",
            "range": "± 45.82378226372988"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41197.52745408278,
            "unit": "ns",
            "range": "± 80.84164844392875"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 726128.7728097098,
            "unit": "ns",
            "range": "± 486.22828607391676"
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
          "id": "9b663a09d61be856abe3d5a374bbf5a124a91a0f",
          "message": "Add exception documentation to Encode methods\n\nEnhanced the `Encode` method in multiple classes within the `TyKonKet.BarcodeGenerator` namespace by adding detailed exception documentation. Included `ArgumentNullException`, `FormatException`, and `ArgumentOutOfRangeException` to clarify potential errors during barcode encoding, improving error handling and developer guidance.",
          "timestamp": "2025-08-09T19:06:52+02:00",
          "tree_id": "2585b6f10bd712112511e3676ca40fbcb7469609",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/9b663a09d61be856abe3d5a374bbf5a124a91a0f"
        },
        "date": 1754759785600,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18201.576791763306,
            "unit": "ns",
            "range": "± 233.00181924774978"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 21337.804923502605,
            "unit": "ns",
            "range": "± 286.52292418379966"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25757.478868924656,
            "unit": "ns",
            "range": "± 14.946170257509625"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41778.027012751656,
            "unit": "ns",
            "range": "± 67.14607850036764"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 728089.1271972656,
            "unit": "ns",
            "range": "± 930.1633604809219"
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
          "id": "73bb4bb3d6480ea979663daf0dbed474f3a079bc",
          "message": "Enhance ISBN-13 prefix validation in Isbn13Encoder\n\nUpdated the `FormatBarcode` method to validate barcode prefixes, allowing only \"978\" or \"979\". Introduced a `FormatException` for invalid prefixes and modified the barcode formatting to use the extracted prefix instead of hardcoding \"978\". This improves error handling and flexibility in barcode processing.",
          "timestamp": "2025-08-10T14:18:13+02:00",
          "tree_id": "ddeda4ef701c4f9584b4e7c9157cd1cf66613e13",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/73bb4bb3d6480ea979663daf0dbed474f3a079bc"
        },
        "date": 1754828876025,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18423.98422895159,
            "unit": "ns",
            "range": "± 190.3601095215903"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19573.523860051082,
            "unit": "ns",
            "range": "± 173.01550985083858"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25679.94034249442,
            "unit": "ns",
            "range": "± 63.053212431483786"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41172.644273024336,
            "unit": "ns",
            "range": "± 76.60209438806285"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 725434.9990234375,
            "unit": "ns",
            "range": "± 976.0900952617546"
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
          "id": "623166c9f6e0c25e6eb8fd87e0e10132dd9b1667",
          "message": "Refactor Export method parameters and documentation\n\nUpdated the `Export` method in the `TyKonKet.BarcodeGenerator` namespace to change the parameter name from `fileName` to `filePath` for clarity. Enhanced documentation to include special keywords for `filePath` and added new exceptions for null values and directory issues.\n\nIn the `TyKonKet.BarcodeGenerator.Encoders.Abstract` namespace, updated the `Export` method documentation to include new exceptions for both `filePath` and `stream` parameters, improving robustness by clearly defining potential error conditions.",
          "timestamp": "2025-08-10T15:28:02+02:00",
          "tree_id": "cf01572fcf3d18a0daa4330edb69f43f5cf86009",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/623166c9f6e0c25e6eb8fd87e0e10132dd9b1667"
        },
        "date": 1754833180463,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 19799.978388736123,
            "unit": "ns",
            "range": "± 675.5773451871116"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 21734.14163547092,
            "unit": "ns",
            "range": "± 996.5335707899452"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25819.842790730796,
            "unit": "ns",
            "range": "± 432.64840808442415"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41485.87768147786,
            "unit": "ns",
            "range": "± 325.0646823197668"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 732219.9375,
            "unit": "ns",
            "range": "± 2779.285412590589"
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
          "id": "3fbbcd8c6735865ec9a6e848130abff2d7c87872",
          "message": "Merge pull request #10 from TyKonKet/copilot/fix-ab27eab2-8953-458e-8b11-703d006b4751\n\nAdd scheduled trigger to .NET Benchmark Runner workflow",
          "timestamp": "2025-08-10T22:13:59+02:00",
          "tree_id": "0fc33b563e6f03df721240703853bf4aef14146d",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/3fbbcd8c6735865ec9a6e848130abff2d7c87872"
        },
        "date": 1754857407821,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18281.415769449868,
            "unit": "ns",
            "range": "± 204.11269734622576"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19459.931266276042,
            "unit": "ns",
            "range": "± 244.21769392478967"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25509.27548435756,
            "unit": "ns",
            "range": "± 42.00029170642545"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40985.7401570638,
            "unit": "ns",
            "range": "± 151.38759656379582"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 725795.773577009,
            "unit": "ns",
            "range": "± 1101.876065551494"
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
          "id": "7cbcc0faa91e6396d06de5eba37b414c5431c392",
          "message": "Merge pull request #9 from TyKonKet/copilot/fix-8\n\nAdd comprehensive API documentation with corrected exceptions, AI disclaimers, and modern repository presentation",
          "timestamp": "2025-08-11T00:05:25+02:00",
          "tree_id": "cb719e99ada38fac19462939c17e1e1d37fbca8a",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/7cbcc0faa91e6396d06de5eba37b414c5431c392"
        },
        "date": 1754864077649,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 17498.671325683594,
            "unit": "ns",
            "range": "± 181.93090491794743"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20386.732328217604,
            "unit": "ns",
            "range": "± 578.4835994264383"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25351.516353352865,
            "unit": "ns",
            "range": "± 184.48240175732474"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41495.3463297526,
            "unit": "ns",
            "range": "± 169.91682712786445"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 726079.65625,
            "unit": "ns",
            "range": "± 2982.286012394115"
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
          "id": "0fba6a3ed14f25797dc1eddc209f37823b7f7080",
          "message": "Update README.md",
          "timestamp": "2025-08-11T00:24:31+02:00",
          "tree_id": "8f51017d8d1c1533b2d7b626d85f4eec5890bd51",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/0fba6a3ed14f25797dc1eddc209f37823b7f7080"
        },
        "date": 1754865275160,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 23071.87498213605,
            "unit": "ns",
            "range": "± 831.3262799909844"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 26048.748586654663,
            "unit": "ns",
            "range": "± 780.1411179888906"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 26692.18932887486,
            "unit": "ns",
            "range": "± 40.172837351607726"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 43167.82938561073,
            "unit": "ns",
            "range": "± 92.67501150090203"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 744445.4054827009,
            "unit": "ns",
            "range": "± 1011.4279289528163"
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
          "id": "9761664fa69d1b23408fe641fd0d9ae84c28d193",
          "message": "Merge pull request #16 from TyKonKet/copilot/fix-15\n\nImprove documentation formatting for better readability",
          "timestamp": "2025-08-11T00:51:50+02:00",
          "tree_id": "0b045b8c98491d0760dd1539b54bc33f7fbf2ab3",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/9761664fa69d1b23408fe641fd0d9ae84c28d193"
        },
        "date": 1754866810684,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18350.961275373185,
            "unit": "ns",
            "range": "± 241.93095366708016"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19812.032666015624,
            "unit": "ns",
            "range": "± 209.34678083351554"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25568.79128265381,
            "unit": "ns",
            "range": "± 28.768785124733462"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41171.901803152905,
            "unit": "ns",
            "range": "± 82.16628633855149"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 726130.4160853794,
            "unit": "ns",
            "range": "± 672.429585646058"
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
          "id": "38f0d6e2550e0cd75fcb0cc4183e1f94461b23d2",
          "message": "Merge pull request #14 from TyKonKet/copilot/fix-11\n\nFix ISBN-13 encoder tests to use valid prefixes and add comprehensive exception tests",
          "timestamp": "2025-08-11T00:53:03+02:00",
          "tree_id": "b6a986dd83350643cda5564d4a85ce9432c1a4bc",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/38f0d6e2550e0cd75fcb0cc4183e1f94461b23d2"
        },
        "date": 1754866931375,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 19099.73095533583,
            "unit": "ns",
            "range": "± 399.0858739698387"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20353.54609781901,
            "unit": "ns",
            "range": "± 242.06308796273228"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25025.919895426432,
            "unit": "ns",
            "range": "± 24.811176925652497"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41509.01772635324,
            "unit": "ns",
            "range": "± 79.90520996057903"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 730996.9985351562,
            "unit": "ns",
            "range": "± 553.2502987019354"
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
          "id": "457554fb32cb3579097bf3f25185be1f1916f335",
          "message": "Update copilot-instructions.md",
          "timestamp": "2025-08-11T19:59:00+02:00",
          "tree_id": "2f31504fb8a23058bfbb708ad4f7030eb3852e61",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/457554fb32cb3579097bf3f25185be1f1916f335"
        },
        "date": 1754935675260,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 19072.8927330604,
            "unit": "ns",
            "range": "± 517.9981781426578"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19566.53895350865,
            "unit": "ns",
            "range": "± 190.32273579486665"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25418.972028096516,
            "unit": "ns",
            "range": "± 24.770658639466244"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41689.14923531668,
            "unit": "ns",
            "range": "± 163.20281466316004"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 724544.3169270833,
            "unit": "ns",
            "range": "± 1309.6513309976726"
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
          "id": "212a2127a5a3b257ad692e6b89bee214225c6600",
          "message": "Merge branch 'main' of https://github.com/TyKonKet/BarcodeGenerator",
          "timestamp": "2025-08-11T21:20:12+02:00",
          "tree_id": "52ed980be711ed6202c2d73a61980d6b29071e19",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/212a2127a5a3b257ad692e6b89bee214225c6600"
        },
        "date": 1754940578977,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18245.896756853377,
            "unit": "ns",
            "range": "± 168.34557598343488"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19534.568634033203,
            "unit": "ns",
            "range": "± 48.007163244529686"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25655.7237134661,
            "unit": "ns",
            "range": "± 71.94659492013989"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41143.47938654973,
            "unit": "ns",
            "range": "± 123.22296586939304"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 724956.5899564303,
            "unit": "ns",
            "range": "± 697.8267326051008"
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
          "id": "af6d6c485c0ed3bceda0f729ecdc3ae97f29da6d",
          "message": "Update benchmark configuration to target .NET 10.0 runtime",
          "timestamp": "2025-08-12T21:37:42+02:00",
          "tree_id": "76506b6998d1bff7a13efa4349a2ef20bcea76ec",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/af6d6c485c0ed3bceda0f729ecdc3ae97f29da6d"
        },
        "date": 1755027877161,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 19805.354424438476,
            "unit": "ns",
            "range": "± 516.9540041785157"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20743.67773803711,
            "unit": "ns",
            "range": "± 469.13182995194165"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 26313.022657121932,
            "unit": "ns",
            "range": "± 86.28712510842188"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 42174.86590140207,
            "unit": "ns",
            "range": "± 275.2065574351508"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.ExportToFile",
            "value": 779758.0412597656,
            "unit": "ns",
            "range": "± 559.8976806003004"
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
          "id": "b07b13425036e7268db088c7259afc66b106ce59",
          "message": "Update feature_request.md",
          "timestamp": "2025-08-09T01:12:35+02:00",
          "tree_id": "b2d338551c6e2b28407a984cb8017fd6008c9330",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/b07b13425036e7268db088c7259afc66b106ce59"
        },
        "date": 1754695239105,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 20150.736954752603,
            "unit": "ns",
            "range": "± 224.78164982111974"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 22217.076607259114,
            "unit": "ns",
            "range": "± 239.6818131441885"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 25523.77734273275,
            "unit": "ns",
            "range": "± 62.336426197640314"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 39151.43472726004,
            "unit": "ns",
            "range": "± 91.59934914879291"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 741403.583984375,
            "unit": "ns",
            "range": "± 995.0541034815686"
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
          "id": "298ffc43c9ae5b62083fd0c817b1e1bcc5c888d3",
          "message": "Update bug_report.md",
          "timestamp": "2025-08-09T01:12:32+02:00",
          "tree_id": "dfd768635e402a7a90a56e605c8cfca1694b436f",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/298ffc43c9ae5b62083fd0c817b1e1bcc5c888d3"
        },
        "date": 1754695275991,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 19075.408641270227,
            "unit": "ns",
            "range": "± 175.82063987363304"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 21222.66559753418,
            "unit": "ns",
            "range": "± 316.3903177459418"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24465.876819317156,
            "unit": "ns",
            "range": "± 34.01761561627818"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37557.89678548177,
            "unit": "ns",
            "range": "± 161.50067564610413"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 730987.3924278846,
            "unit": "ns",
            "range": "± 1045.1747206779633"
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
          "id": "ea7715925c71a95ab471cc5df5517372b2439d3c",
          "message": "Update copilot-setup-steps.yml",
          "timestamp": "2025-08-09T01:55:09+02:00",
          "tree_id": "67284622ba696e021a141d7439db3c73d0d52ecb",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/ea7715925c71a95ab471cc5df5517372b2439d3c"
        },
        "date": 1754697822171,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 19164.269602457684,
            "unit": "ns",
            "range": "± 482.3365420598254"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20303.351475016276,
            "unit": "ns",
            "range": "± 245.26582937490033"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24088.97477010091,
            "unit": "ns",
            "range": "± 53.617332074696044"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36643.45601947491,
            "unit": "ns",
            "range": "± 47.74527029717775"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 725167.1731520433,
            "unit": "ns",
            "range": "± 1106.432378603636"
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
          "id": "3974f47b09316a6b9fbfc6949b850b75ddb2cdd3",
          "message": "Merge pull request #6 from TyKonKet/copilot/fix-f2a6515d-5f3e-4c27-9c4e-3c376a899d82\n\nAdd GitHub Actions workflow for Copilot environment setup",
          "timestamp": "2025-08-09T01:54:43+02:00",
          "tree_id": "670116623a5b2c2d7a17b3ef93b89aa170223106",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/3974f47b09316a6b9fbfc6949b850b75ddb2cdd3"
        },
        "date": 1754697855267,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18781.570978800457,
            "unit": "ns",
            "range": "± 113.47423869304171"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20618.225896982047,
            "unit": "ns",
            "range": "± 85.8749934193751"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24290.71583322378,
            "unit": "ns",
            "range": "± 36.56382162664659"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37519.20128220778,
            "unit": "ns",
            "range": "± 75.3572137550954"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 724354.8820452009,
            "unit": "ns",
            "range": "± 585.6112188359407"
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
          "id": "a5c84202060045ea67fd3c1d1fb754b998bf79a1",
          "message": "Update copilot-setup-steps.yml",
          "timestamp": "2025-08-09T01:57:15+02:00",
          "tree_id": "f01366795e51b5eb1b8f1a83424718aa644bc6b5",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/a5c84202060045ea67fd3c1d1fb754b998bf79a1"
        },
        "date": 1754697954806,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18355.694987705774,
            "unit": "ns",
            "range": "± 180.8579026514161"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20844.304624769422,
            "unit": "ns",
            "range": "± 437.16965335034837"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24622.927001953125,
            "unit": "ns",
            "range": "± 92.40921106855514"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37303.62506539481,
            "unit": "ns",
            "range": "± 113.45394817484552"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 727203.57421875,
            "unit": "ns",
            "range": "± 540.582848214074"
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
          "id": "311f9a41555a6091895a5f6a628c133d97a3902f",
          "message": "Update copilot-setup-steps.yml",
          "timestamp": "2025-08-09T02:04:05+02:00",
          "tree_id": "4b670ac1022c8bd7d20dd9da583b72c145e59395",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/311f9a41555a6091895a5f6a628c133d97a3902f"
        },
        "date": 1754698353142,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18918.840242513023,
            "unit": "ns",
            "range": "± 230.06920935729397"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20875.02159336635,
            "unit": "ns",
            "range": "± 104.10210033845813"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24453.299193318686,
            "unit": "ns",
            "range": "± 101.30240403353989"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37411.7141418457,
            "unit": "ns",
            "range": "± 107.58939168347126"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 728873.800920759,
            "unit": "ns",
            "range": "± 695.9142439274918"
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
          "id": "57881e83d86ad2f3fd42ee2a3478d196b1b65fee",
          "message": "Refactor Export method to use filePath parameter\n\nUpdated the Export method in the BarcodeGenerator to change the parameter from fileName to filePath. Enhanced documentation to clarify that filePath can be relative or absolute, and included special keywords for dynamic path generation. Improved logic to ensure the directory exists before exporting, preventing errors related to missing directories.",
          "timestamp": "2025-08-09T15:22:05+02:00",
          "tree_id": "dc7a0f83d0f01a392dd905cf96c72935365fff5e",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/57881e83d86ad2f3fd42ee2a3478d196b1b65fee"
        },
        "date": 1754746261068,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18192.52299194336,
            "unit": "ns",
            "range": "± 293.5333992304781"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20440.02432047526,
            "unit": "ns",
            "range": "± 321.1469662172078"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24400.11008780343,
            "unit": "ns",
            "range": "± 49.04820255924516"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37146.974060058594,
            "unit": "ns",
            "range": "± 93.67694544786785"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 727132.828500601,
            "unit": "ns",
            "range": "± 771.798921809463"
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
          "id": "9b663a09d61be856abe3d5a374bbf5a124a91a0f",
          "message": "Add exception documentation to Encode methods\n\nEnhanced the `Encode` method in multiple classes within the `TyKonKet.BarcodeGenerator` namespace by adding detailed exception documentation. Included `ArgumentNullException`, `FormatException`, and `ArgumentOutOfRangeException` to clarify potential errors during barcode encoding, improving error handling and developer guidance.",
          "timestamp": "2025-08-09T19:06:52+02:00",
          "tree_id": "2585b6f10bd712112511e3676ca40fbcb7469609",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/9b663a09d61be856abe3d5a374bbf5a124a91a0f"
        },
        "date": 1754759787182,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18210.463701520646,
            "unit": "ns",
            "range": "± 205.8127497209675"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20352.62446975708,
            "unit": "ns",
            "range": "± 396.49072205064095"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24120.431091308594,
            "unit": "ns",
            "range": "± 34.84169800320175"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37102.275202433266,
            "unit": "ns",
            "range": "± 78.01497101392636"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 726329.6403245192,
            "unit": "ns",
            "range": "± 816.0959060464579"
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
          "id": "73bb4bb3d6480ea979663daf0dbed474f3a079bc",
          "message": "Enhance ISBN-13 prefix validation in Isbn13Encoder\n\nUpdated the `FormatBarcode` method to validate barcode prefixes, allowing only \"978\" or \"979\". Introduced a `FormatException` for invalid prefixes and modified the barcode formatting to use the extracted prefix instead of hardcoding \"978\". This improves error handling and flexibility in barcode processing.",
          "timestamp": "2025-08-10T14:18:13+02:00",
          "tree_id": "ddeda4ef701c4f9584b4e7c9157cd1cf66613e13",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/73bb4bb3d6480ea979663daf0dbed474f3a079bc"
        },
        "date": 1754828877162,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 19798.283606567384,
            "unit": "ns",
            "range": "± 1209.841011334754"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20315.47979736328,
            "unit": "ns",
            "range": "± 255.47727336711506"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24288.534770711263,
            "unit": "ns",
            "range": "± 87.39166347990813"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36933.81514078776,
            "unit": "ns",
            "range": "± 93.8454838056219"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 726291.9329927885,
            "unit": "ns",
            "range": "± 815.456057433534"
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
          "id": "623166c9f6e0c25e6eb8fd87e0e10132dd9b1667",
          "message": "Refactor Export method parameters and documentation\n\nUpdated the `Export` method in the `TyKonKet.BarcodeGenerator` namespace to change the parameter name from `fileName` to `filePath` for clarity. Enhanced documentation to include special keywords for `filePath` and added new exceptions for null values and directory issues.\n\nIn the `TyKonKet.BarcodeGenerator.Encoders.Abstract` namespace, updated the `Export` method documentation to include new exceptions for both `filePath` and `stream` parameters, improving robustness by clearly defining potential error conditions.",
          "timestamp": "2025-08-10T15:28:02+02:00",
          "tree_id": "cf01572fcf3d18a0daa4330edb69f43f5cf86009",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/623166c9f6e0c25e6eb8fd87e0e10132dd9b1667"
        },
        "date": 1754833181309,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18456.281946818035,
            "unit": "ns",
            "range": "± 985.3027263742968"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 22829.94510114954,
            "unit": "ns",
            "range": "± 880.0259705659962"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 25240.905092366538,
            "unit": "ns",
            "range": "± 414.8797682006964"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 38029.24580485026,
            "unit": "ns",
            "range": "± 550.2643179945408"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 732095.5887695312,
            "unit": "ns",
            "range": "± 3927.6698000116508"
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
          "id": "3fbbcd8c6735865ec9a6e848130abff2d7c87872",
          "message": "Merge pull request #10 from TyKonKet/copilot/fix-ab27eab2-8953-458e-8b11-703d006b4751\n\nAdd scheduled trigger to .NET Benchmark Runner workflow",
          "timestamp": "2025-08-10T22:13:59+02:00",
          "tree_id": "0fc33b563e6f03df721240703853bf4aef14146d",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/3fbbcd8c6735865ec9a6e848130abff2d7c87872"
        },
        "date": 1754857408851,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18512.620538330077,
            "unit": "ns",
            "range": "± 283.0496350475386"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 19978.988332895133,
            "unit": "ns",
            "range": "± 117.27193204731505"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24539.013478205754,
            "unit": "ns",
            "range": "± 76.75269342930986"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37178.02194448618,
            "unit": "ns",
            "range": "± 79.41884355142206"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 724394.3068498884,
            "unit": "ns",
            "range": "± 1017.0754919782826"
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
          "id": "7cbcc0faa91e6396d06de5eba37b414c5431c392",
          "message": "Merge pull request #9 from TyKonKet/copilot/fix-8\n\nAdd comprehensive API documentation with corrected exceptions, AI disclaimers, and modern repository presentation",
          "timestamp": "2025-08-11T00:05:25+02:00",
          "tree_id": "cb719e99ada38fac19462939c17e1e1d37fbca8a",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/7cbcc0faa91e6396d06de5eba37b414c5431c392"
        },
        "date": 1754864078570,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 20329.510659129348,
            "unit": "ns",
            "range": "± 1198.1322657858136"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 21088.845322672525,
            "unit": "ns",
            "range": "± 297.47312768859723"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24173.563622029622,
            "unit": "ns",
            "range": "± 67.39760816241444"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36745.95349993025,
            "unit": "ns",
            "range": "± 181.2205392526763"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 728375.7913643973,
            "unit": "ns",
            "range": "± 2268.6636850530926"
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
          "id": "0fba6a3ed14f25797dc1eddc209f37823b7f7080",
          "message": "Update README.md",
          "timestamp": "2025-08-11T00:24:31+02:00",
          "tree_id": "8f51017d8d1c1533b2d7b626d85f4eec5890bd51",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/0fba6a3ed14f25797dc1eddc209f37823b7f7080"
        },
        "date": 1754865276021,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 23400.263268004073,
            "unit": "ns",
            "range": "± 1362.3470038269957"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 25579.156158447266,
            "unit": "ns",
            "range": "± 558.876835516618"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 25661.93236365685,
            "unit": "ns",
            "range": "± 38.29684795087572"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 38815.606201171875,
            "unit": "ns",
            "range": "± 167.17246175443995"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 745844.598063151,
            "unit": "ns",
            "range": "± 1042.1147122261557"
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
          "id": "9761664fa69d1b23408fe641fd0d9ae84c28d193",
          "message": "Merge pull request #16 from TyKonKet/copilot/fix-15\n\nImprove documentation formatting for better readability",
          "timestamp": "2025-08-11T00:51:50+02:00",
          "tree_id": "0b045b8c98491d0760dd1539b54bc33f7fbf2ab3",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/9761664fa69d1b23408fe641fd0d9ae84c28d193"
        },
        "date": 1754866811572,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18179.96994488056,
            "unit": "ns",
            "range": "± 67.41181384603716"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20273.759229387557,
            "unit": "ns",
            "range": "± 237.2169352853589"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24076.221528273363,
            "unit": "ns",
            "range": "± 23.104130384698852"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36947.422236851286,
            "unit": "ns",
            "range": "± 167.77654869931254"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 726366.9108723958,
            "unit": "ns",
            "range": "± 573.2911411286569"
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
          "id": "38f0d6e2550e0cd75fcb0cc4183e1f94461b23d2",
          "message": "Merge pull request #14 from TyKonKet/copilot/fix-11\n\nFix ISBN-13 encoder tests to use valid prefixes and add comprehensive exception tests",
          "timestamp": "2025-08-11T00:53:03+02:00",
          "tree_id": "b6a986dd83350643cda5564d4a85ce9432c1a4bc",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/38f0d6e2550e0cd75fcb0cc4183e1f94461b23d2"
        },
        "date": 1754866932417,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 20200.552592713157,
            "unit": "ns",
            "range": "± 1056.1647636219143"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20670.2914452186,
            "unit": "ns",
            "range": "± 137.73557415838792"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24120.436814371744,
            "unit": "ns",
            "range": "± 38.71126502002303"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37098.44553484236,
            "unit": "ns",
            "range": "± 40.030412524389845"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 728335.1987630208,
            "unit": "ns",
            "range": "± 979.5587824177915"
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
          "id": "457554fb32cb3579097bf3f25185be1f1916f335",
          "message": "Update copilot-instructions.md",
          "timestamp": "2025-08-11T19:59:00+02:00",
          "tree_id": "2f31504fb8a23058bfbb708ad4f7030eb3852e61",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/457554fb32cb3579097bf3f25185be1f1916f335"
        },
        "date": 1754935676479,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18261.636295863562,
            "unit": "ns",
            "range": "± 273.6835916388315"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20463.11274937221,
            "unit": "ns",
            "range": "± 361.1131262899435"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24265.285821097237,
            "unit": "ns",
            "range": "± 50.77611166433283"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37046.05498395647,
            "unit": "ns",
            "range": "± 185.59701087933877"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 724862.0408528646,
            "unit": "ns",
            "range": "± 657.4734535675675"
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
          "id": "212a2127a5a3b257ad692e6b89bee214225c6600",
          "message": "Merge branch 'main' of https://github.com/TyKonKet/BarcodeGenerator",
          "timestamp": "2025-08-11T21:20:12+02:00",
          "tree_id": "52ed980be711ed6202c2d73a61980d6b29071e19",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/212a2127a5a3b257ad692e6b89bee214225c6600"
        },
        "date": 1754940580039,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 19607.010036258907,
            "unit": "ns",
            "range": "± 1098.739401241504"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20079.486602783203,
            "unit": "ns",
            "range": "± 112.70766030235833"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24140.718547276087,
            "unit": "ns",
            "range": "± 56.411281947970565"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36723.11905110677,
            "unit": "ns",
            "range": "± 153.4852332390613"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 724850.4604116586,
            "unit": "ns",
            "range": "± 616.8869783793662"
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
          "id": "af6d6c485c0ed3bceda0f729ecdc3ae97f29da6d",
          "message": "Update benchmark configuration to target .NET 10.0 runtime",
          "timestamp": "2025-08-12T21:37:42+02:00",
          "tree_id": "76506b6998d1bff7a13efa4349a2ef20bcea76ec",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/af6d6c485c0ed3bceda0f729ecdc3ae97f29da6d"
        },
        "date": 1755027878372,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 19861.135127766927,
            "unit": "ns",
            "range": "± 337.3866572070188"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 21533.892742580836,
            "unit": "ns",
            "range": "± 460.244646799292"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24544.090116060695,
            "unit": "ns",
            "range": "± 103.42599428319801"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 38011.529292179985,
            "unit": "ns",
            "range": "± 170.77209633593685"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.ExportToFile",
            "value": 766146.9314313616,
            "unit": "ns",
            "range": "± 1024.6969068815556"
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
        "date": 1754695046462,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 802.0931188719613,
            "unit": "ns",
            "range": "± 4.502614397837141"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2080.7279159545897,
            "unit": "ns",
            "range": "± 21.81149614332391"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 42284.029388427734,
            "unit": "ns",
            "range": "± 37.82798373205854"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55540.73960222517,
            "unit": "ns",
            "range": "± 84.0875911802594"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1014675.2904296875,
            "unit": "ns",
            "range": "± 6068.9102035950955"
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
          "id": "b07b13425036e7268db088c7259afc66b106ce59",
          "message": "Update feature_request.md",
          "timestamp": "2025-08-09T01:12:35+02:00",
          "tree_id": "b2d338551c6e2b28407a984cb8017fd6008c9330",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/b07b13425036e7268db088c7259afc66b106ce59"
        },
        "date": 1754695240183,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 794.6183557877174,
            "unit": "ns",
            "range": "± 5.424256474029895"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2305.2211771647135,
            "unit": "ns",
            "range": "± 23.856781659705284"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 43395.018861897785,
            "unit": "ns",
            "range": "± 124.33849691137429"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 56198.80470393254,
            "unit": "ns",
            "range": "± 401.2746106709554"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1036628.3239397322,
            "unit": "ns",
            "range": "± 2532.6404079173144"
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
          "id": "298ffc43c9ae5b62083fd0c817b1e1bcc5c888d3",
          "message": "Update bug_report.md",
          "timestamp": "2025-08-09T01:12:32+02:00",
          "tree_id": "dfd768635e402a7a90a56e605c8cfca1694b436f",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/298ffc43c9ae5b62083fd0c817b1e1bcc5c888d3"
        },
        "date": 1754695277033,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 844.99200963974,
            "unit": "ns",
            "range": "± 19.370615146391728"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2387.391689845494,
            "unit": "ns",
            "range": "± 37.15049322923649"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 42406.95305088588,
            "unit": "ns",
            "range": "± 102.64336364019883"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55130.02631319486,
            "unit": "ns",
            "range": "± 121.85017235950515"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1016131.89921875,
            "unit": "ns",
            "range": "± 1486.6287076374942"
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
          "id": "ea7715925c71a95ab471cc5df5517372b2439d3c",
          "message": "Update copilot-setup-steps.yml",
          "timestamp": "2025-08-09T01:55:09+02:00",
          "tree_id": "67284622ba696e021a141d7439db3c73d0d52ecb",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/ea7715925c71a95ab471cc5df5517372b2439d3c"
        },
        "date": 1754697823749,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 739.930770947383,
            "unit": "ns",
            "range": "± 2.264392620987712"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2100.1177689688548,
            "unit": "ns",
            "range": "± 35.25683678721903"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 42124.14719332181,
            "unit": "ns",
            "range": "± 47.423672749308786"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 56699.83333914621,
            "unit": "ns",
            "range": "± 137.3326503863344"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1017691.59765625,
            "unit": "ns",
            "range": "± 887.6467360568787"
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
          "id": "3974f47b09316a6b9fbfc6949b850b75ddb2cdd3",
          "message": "Merge pull request #6 from TyKonKet/copilot/fix-f2a6515d-5f3e-4c27-9c4e-3c376a899d82\n\nAdd GitHub Actions workflow for Copilot environment setup",
          "timestamp": "2025-08-09T01:54:43+02:00",
          "tree_id": "670116623a5b2c2d7a17b3ef93b89aa170223106",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/3974f47b09316a6b9fbfc6949b850b75ddb2cdd3"
        },
        "date": 1754697856381,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 776.5524687767029,
            "unit": "ns",
            "range": "± 17.03744790677208"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2147.7317271232605,
            "unit": "ns",
            "range": "± 39.34700772372314"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 42405.34637858073,
            "unit": "ns",
            "range": "± 165.78451541151054"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55559.97734656701,
            "unit": "ns",
            "range": "± 87.19080469903584"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1013556.3472055289,
            "unit": "ns",
            "range": "± 1675.2064238503965"
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
          "id": "a5c84202060045ea67fd3c1d1fb754b998bf79a1",
          "message": "Update copilot-setup-steps.yml",
          "timestamp": "2025-08-09T01:57:15+02:00",
          "tree_id": "f01366795e51b5eb1b8f1a83424718aa644bc6b5",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/a5c84202060045ea67fd3c1d1fb754b998bf79a1"
        },
        "date": 1754697956373,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 799.3398089408875,
            "unit": "ns",
            "range": "± 10.254158787546368"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1990.5498956952777,
            "unit": "ns",
            "range": "± 17.556410802945333"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 42318.86733136858,
            "unit": "ns",
            "range": "± 172.37106980077326"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 56874.90708269392,
            "unit": "ns",
            "range": "± 211.340424577012"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1018097.2705829327,
            "unit": "ns",
            "range": "± 3312.102961665144"
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
          "id": "311f9a41555a6091895a5f6a628c133d97a3902f",
          "message": "Update copilot-setup-steps.yml",
          "timestamp": "2025-08-09T02:04:05+02:00",
          "tree_id": "4b670ac1022c8bd7d20dd9da583b72c145e59395",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/311f9a41555a6091895a5f6a628c133d97a3902f"
        },
        "date": 1754698354043,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 878.4455085754395,
            "unit": "ns",
            "range": "± 10.299599261991588"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2264.426469930013,
            "unit": "ns",
            "range": "± 35.32660822190728"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 43085.163321940105,
            "unit": "ns",
            "range": "± 136.68293478998993"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55529.53675130208,
            "unit": "ns",
            "range": "± 171.0933101739768"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1018375.2533052885,
            "unit": "ns",
            "range": "± 1479.7147874069296"
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
          "id": "57881e83d86ad2f3fd42ee2a3478d196b1b65fee",
          "message": "Refactor Export method to use filePath parameter\n\nUpdated the Export method in the BarcodeGenerator to change the parameter from fileName to filePath. Enhanced documentation to clarify that filePath can be relative or absolute, and included special keywords for dynamic path generation. Improved logic to ensure the directory exists before exporting, preventing errors related to missing directories.",
          "timestamp": "2025-08-09T15:22:05+02:00",
          "tree_id": "dc7a0f83d0f01a392dd905cf96c72935365fff5e",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/57881e83d86ad2f3fd42ee2a3478d196b1b65fee"
        },
        "date": 1754746261987,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 794.3451994487217,
            "unit": "ns",
            "range": "± 3.766258742386329"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2317.821738393683,
            "unit": "ns",
            "range": "± 49.114977242112374"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 42259.86678842398,
            "unit": "ns",
            "range": "± 255.85192012985326"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55841.48212608924,
            "unit": "ns",
            "range": "± 175.2622816330622"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1012693.5461237981,
            "unit": "ns",
            "range": "± 946.0620336864857"
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
          "id": "9b663a09d61be856abe3d5a374bbf5a124a91a0f",
          "message": "Add exception documentation to Encode methods\n\nEnhanced the `Encode` method in multiple classes within the `TyKonKet.BarcodeGenerator` namespace by adding detailed exception documentation. Included `ArgumentNullException`, `FormatException`, and `ArgumentOutOfRangeException` to clarify potential errors during barcode encoding, improving error handling and developer guidance.",
          "timestamp": "2025-08-09T19:06:52+02:00",
          "tree_id": "2585b6f10bd712112511e3676ca40fbcb7469609",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/9b663a09d61be856abe3d5a374bbf5a124a91a0f"
        },
        "date": 1754759788737,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 761.8509225845337,
            "unit": "ns",
            "range": "± 4.497477487193475"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2062.9956151326496,
            "unit": "ns",
            "range": "± 17.049447929756926"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 42117.00949800931,
            "unit": "ns",
            "range": "± 60.64381493689805"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 56625.53304617746,
            "unit": "ns",
            "range": "± 150.62472389208455"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1015817.9185697115,
            "unit": "ns",
            "range": "± 1144.1645392629573"
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
          "id": "73bb4bb3d6480ea979663daf0dbed474f3a079bc",
          "message": "Enhance ISBN-13 prefix validation in Isbn13Encoder\n\nUpdated the `FormatBarcode` method to validate barcode prefixes, allowing only \"978\" or \"979\". Introduced a `FormatException` for invalid prefixes and modified the barcode formatting to use the extracted prefix instead of hardcoding \"978\". This improves error handling and flexibility in barcode processing.",
          "timestamp": "2025-08-10T14:18:13+02:00",
          "tree_id": "ddeda4ef701c4f9584b4e7c9157cd1cf66613e13",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/73bb4bb3d6480ea979663daf0dbed474f3a079bc"
        },
        "date": 1754828878322,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 811.330633799235,
            "unit": "ns",
            "range": "± 8.673799683651335"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2386.8843129475913,
            "unit": "ns",
            "range": "± 30.33745812113518"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 42174.19623741737,
            "unit": "ns",
            "range": "± 113.15755358314456"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55114.841208321704,
            "unit": "ns",
            "range": "± 177.13863784459252"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1014965.6932091346,
            "unit": "ns",
            "range": "± 915.9282331315543"
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
          "id": "623166c9f6e0c25e6eb8fd87e0e10132dd9b1667",
          "message": "Refactor Export method parameters and documentation\n\nUpdated the `Export` method in the `TyKonKet.BarcodeGenerator` namespace to change the parameter name from `fileName` to `filePath` for clarity. Enhanced documentation to include special keywords for `filePath` and added new exceptions for null values and directory issues.\n\nIn the `TyKonKet.BarcodeGenerator.Encoders.Abstract` namespace, updated the `Export` method documentation to include new exceptions for both `filePath` and `stream` parameters, improving robustness by clearly defining potential error conditions.",
          "timestamp": "2025-08-10T15:28:02+02:00",
          "tree_id": "cf01572fcf3d18a0daa4330edb69f43f5cf86009",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/623166c9f6e0c25e6eb8fd87e0e10132dd9b1667"
        },
        "date": 1754833182154,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 821.3439171200707,
            "unit": "ns",
            "range": "± 19.11678398452024"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2136.1547726222448,
            "unit": "ns",
            "range": "± 37.71549833886986"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 42125.00339617048,
            "unit": "ns",
            "range": "± 241.8959552122973"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55946.06893513997,
            "unit": "ns",
            "range": "± 693.2559298239861"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1018114.5309895833,
            "unit": "ns",
            "range": "± 6307.885491765964"
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
          "id": "3fbbcd8c6735865ec9a6e848130abff2d7c87872",
          "message": "Merge pull request #10 from TyKonKet/copilot/fix-ab27eab2-8953-458e-8b11-703d006b4751\n\nAdd scheduled trigger to .NET Benchmark Runner workflow",
          "timestamp": "2025-08-10T22:13:59+02:00",
          "tree_id": "0fc33b563e6f03df721240703853bf4aef14146d",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/3fbbcd8c6735865ec9a6e848130abff2d7c87872"
        },
        "date": 1754857409873,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 802.9017387798855,
            "unit": "ns",
            "range": "± 5.815849687489071"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2142.322145189558,
            "unit": "ns",
            "range": "± 30.065906361789867"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 42001.59120396205,
            "unit": "ns",
            "range": "± 139.490749220875"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55106.13247680664,
            "unit": "ns",
            "range": "± 128.60077946916024"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1010339.4903846154,
            "unit": "ns",
            "range": "± 999.6283698978084"
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
          "id": "7cbcc0faa91e6396d06de5eba37b414c5431c392",
          "message": "Merge pull request #9 from TyKonKet/copilot/fix-8\n\nAdd comprehensive API documentation with corrected exceptions, AI disclaimers, and modern repository presentation",
          "timestamp": "2025-08-11T00:05:25+02:00",
          "tree_id": "cb719e99ada38fac19462939c17e1e1d37fbca8a",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/7cbcc0faa91e6396d06de5eba37b414c5431c392"
        },
        "date": 1754864079441,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 753.6063307248629,
            "unit": "ns",
            "range": "± 5.982200718327475"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2149.052186693464,
            "unit": "ns",
            "range": "± 29.271442581851172"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 42552.941946847095,
            "unit": "ns",
            "range": "± 127.29080204110927"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55591.09141235352,
            "unit": "ns",
            "range": "± 452.9502425015707"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1014749.2924107143,
            "unit": "ns",
            "range": "± 5176.58065462451"
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
          "id": "0fba6a3ed14f25797dc1eddc209f37823b7f7080",
          "message": "Update README.md",
          "timestamp": "2025-08-11T00:24:31+02:00",
          "tree_id": "8f51017d8d1c1533b2d7b626d85f4eec5890bd51",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/0fba6a3ed14f25797dc1eddc209f37823b7f7080"
        },
        "date": 1754865276906,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 817.8598539352417,
            "unit": "ns",
            "range": "± 8.799094703975054"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2338.640982701228,
            "unit": "ns",
            "range": "± 80.95101456439056"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 44613.61791053185,
            "unit": "ns",
            "range": "± 123.38369550308738"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 57945.386991060695,
            "unit": "ns",
            "range": "± 230.58569849459212"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1041247.9211774553,
            "unit": "ns",
            "range": "± 2356.784115981286"
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
          "id": "9761664fa69d1b23408fe641fd0d9ae84c28d193",
          "message": "Merge pull request #16 from TyKonKet/copilot/fix-15\n\nImprove documentation formatting for better readability",
          "timestamp": "2025-08-11T00:51:50+02:00",
          "tree_id": "0b045b8c98491d0760dd1539b54bc33f7fbf2ab3",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/9761664fa69d1b23408fe641fd0d9ae84c28d193"
        },
        "date": 1754866812453,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 784.5196598688761,
            "unit": "ns",
            "range": "± 6.534157228344314"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2133.5632200974683,
            "unit": "ns",
            "range": "± 18.256190374348822"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 42354.762599400114,
            "unit": "ns",
            "range": "± 145.47931597306092"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 54601.254677908764,
            "unit": "ns",
            "range": "± 152.30611021016372"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1013227.5083705357,
            "unit": "ns",
            "range": "± 1229.839815544568"
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
          "id": "38f0d6e2550e0cd75fcb0cc4183e1f94461b23d2",
          "message": "Merge pull request #14 from TyKonKet/copilot/fix-11\n\nFix ISBN-13 encoder tests to use valid prefixes and add comprehensive exception tests",
          "timestamp": "2025-08-11T00:53:03+02:00",
          "tree_id": "b6a986dd83350643cda5564d4a85ce9432c1a4bc",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/38f0d6e2550e0cd75fcb0cc4183e1f94461b23d2"
        },
        "date": 1754866933466,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 750.5226298845731,
            "unit": "ns",
            "range": "± 3.8864334529948152"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2272.926147167499,
            "unit": "ns",
            "range": "± 6.442506118803325"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 42118.296630859375,
            "unit": "ns",
            "range": "± 219.9112990799471"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 56056.26750895182,
            "unit": "ns",
            "range": "± 595.0327693871208"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1014641.9839564732,
            "unit": "ns",
            "range": "± 1666.5872064859625"
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
          "id": "457554fb32cb3579097bf3f25185be1f1916f335",
          "message": "Update copilot-instructions.md",
          "timestamp": "2025-08-11T19:59:00+02:00",
          "tree_id": "2f31504fb8a23058bfbb708ad4f7030eb3852e61",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/457554fb32cb3579097bf3f25185be1f1916f335"
        },
        "date": 1754935677673,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 801.2988776156777,
            "unit": "ns",
            "range": "± 17.209265806853075"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2299.056150817871,
            "unit": "ns",
            "range": "± 38.57934478213735"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41875.08928629557,
            "unit": "ns",
            "range": "± 131.3198408198177"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 56999.10719953264,
            "unit": "ns",
            "range": "± 127.24951699718753"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1011728.6751802885,
            "unit": "ns",
            "range": "± 2056.375991506058"
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
          "id": "212a2127a5a3b257ad692e6b89bee214225c6600",
          "message": "Merge branch 'main' of https://github.com/TyKonKet/BarcodeGenerator",
          "timestamp": "2025-08-11T21:20:12+02:00",
          "tree_id": "52ed980be711ed6202c2d73a61980d6b29071e19",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/212a2127a5a3b257ad692e6b89bee214225c6600"
        },
        "date": 1754940581106,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 768.8295904795328,
            "unit": "ns",
            "range": "± 11.747829406631865"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2193.5719451904297,
            "unit": "ns",
            "range": "± 40.660113282046865"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 42192.89495145358,
            "unit": "ns",
            "range": "± 72.65634972756703"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55518.98128662109,
            "unit": "ns",
            "range": "± 622.0699108093245"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1012913.8786272322,
            "unit": "ns",
            "range": "± 1735.023438172084"
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
          "id": "af6d6c485c0ed3bceda0f729ecdc3ae97f29da6d",
          "message": "Update benchmark configuration to target .NET 10.0 runtime",
          "timestamp": "2025-08-12T21:37:42+02:00",
          "tree_id": "76506b6998d1bff7a13efa4349a2ef20bcea76ec",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/af6d6c485c0ed3bceda0f729ecdc3ae97f29da6d"
        },
        "date": 1755027879304,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 934.5527537663778,
            "unit": "ns",
            "range": "± 7.943093242903733"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2561.397942584494,
            "unit": "ns",
            "range": "± 63.56850449041294"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40777.17631312779,
            "unit": "ns",
            "range": "± 261.2125151966162"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55447.60448201498,
            "unit": "ns",
            "range": "± 93.01451200102876"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.ExportToFile",
            "value": 1074351.2752511161,
            "unit": "ns",
            "range": "± 5692.1249878468325"
          }
        ]
      }
    ]
  }
}