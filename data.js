window.BENCHMARK_DATA = {
  "lastUpdate": 1757810047461,
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
          "id": "25ffb38bcc6184917c4cddab715b831842aaf4df",
          "message": "Merge pull request #24 from TyKonKet/copilot/fix-17\n\nAdd TextColor property for independent barcode text color control",
          "timestamp": "2025-08-12T23:55:32+02:00",
          "tree_id": "899e8029342be61f44e3de2941b3c5631e303ce4",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/25ffb38bcc6184917c4cddab715b831842aaf4df"
        },
        "date": 1755036135614,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15492.481015886578,
            "unit": "ns",
            "range": "± 227.2902802024721"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16532.43213704427,
            "unit": "ns",
            "range": "± 186.52647257681244"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18613.040570576984,
            "unit": "ns",
            "range": "± 23.875532797873376"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26037.98729177622,
            "unit": "ns",
            "range": "± 52.0390561911277"
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
          "id": "37d5d7338e0c1f6d301417f04dd7255cf22e999f",
          "message": "Refactor barcode encoder classes to use nullable types for properties and improve exception handling in EncodersFactory",
          "timestamp": "2025-08-13T22:00:39+02:00",
          "tree_id": "3b8936c2b2ae115957ebe1c5a81c4271edcb3dfd",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/37d5d7338e0c1f6d301417f04dd7255cf22e999f"
        },
        "date": 1755115735128,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 16371.845359802246,
            "unit": "ns",
            "range": "± 363.609483716744"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 17560.87677873884,
            "unit": "ns",
            "range": "± 409.89756722736064"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19035.013448079426,
            "unit": "ns",
            "range": "± 289.520102681353"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26228.420772298177,
            "unit": "ns",
            "range": "± 283.65246093756696"
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
          "id": "0eb016c5d87e38bb28299eb9eeb6368e08040b57",
          "message": "Refactor benchmarks and simplify TypeCache initialization\n\nComment out various benchmark jobs in BenchmarkConfig.cs, focusing on .NET 10.0.\nSimplify the initialization of TypeCache in EncodersFactory.cs using target-typed new expression for improved readability.",
          "timestamp": "2025-08-13T22:09:42+02:00",
          "tree_id": "e8d89d1dbf7cd0f17b70eb01df5ca86f1764c746",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/0eb016c5d87e38bb28299eb9eeb6368e08040b57"
        },
        "date": 1755116175158,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 16329.466873168945,
            "unit": "ns",
            "range": "± 272.0883415393739"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 17788.795094081335,
            "unit": "ns",
            "range": "± 274.2072850959074"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19159.911313374836,
            "unit": "ns",
            "range": "± 49.14406269355576"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26664.33484825721,
            "unit": "ns",
            "range": "± 159.42804499579705"
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
          "id": "8523f367cec2d0fa32462a9730e348ea848e143a",
          "message": "Improve encoder creation\n\n- Refactored encoder creation in `EncodersFactory.cs` to use LINQ, enhancing efficiency and error handling.\n- Added `performance-improvements.md` to document performance enhancements, starting with a 6.4% improvement in `EncodersFactory.Create`.\n- Introduced `EncodersFactoryBenchmark.cs` for benchmarking the encoder creation process using BenchmarkDotNet.",
          "timestamp": "2025-08-13T22:26:57+02:00",
          "tree_id": "2964a2d8acf3dfb1b744f38907f2aabeacd49e7e",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/8523f367cec2d0fa32462a9730e348ea848e143a"
        },
        "date": 1755117222513,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15594.23647257487,
            "unit": "ns",
            "range": "± 232.98369932377065"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16606.721914672853,
            "unit": "ns",
            "range": "± 287.8363476882353"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18620.235059298,
            "unit": "ns",
            "range": "± 60.02531166566031"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26255.17060139974,
            "unit": "ns",
            "range": "± 388.1586237554683"
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
          "id": "23aa334d7d9f6890fc39c3be071c2c7ecbfc3793",
          "message": "Optimize GetDisplayName method and add benchmarks\n\nUpdated project to target multiple frameworks.\nEnhanced GetDisplayName with caching for improved performance, reducing execution time from 370.7 ns to 1.931 ns.\nAdded performance improvement details to the documentation.\nIntroduced a benchmark class for performance measurement and added unit tests to validate functionality.",
          "timestamp": "2025-08-13T22:37:28+02:00",
          "tree_id": "56d53130d2537377d8a44e7a5c11b36219d798b4",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/23aa334d7d9f6890fc39c3be071c2c7ecbfc3793"
        },
        "date": 1755117824313,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15914.139988825871,
            "unit": "ns",
            "range": "± 214.57310004733253"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16217.962935227613,
            "unit": "ns",
            "range": "± 49.34665317682404"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18904.97174835205,
            "unit": "ns",
            "range": "± 24.018750593761705"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25966.838388061522,
            "unit": "ns",
            "range": "± 282.1117999897935"
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
          "id": "ff57471ddac43aa8c130d501741ffbfe4e0028c7",
          "message": "Add method optimization guidelines to documentation\n\nIntroduced a \"Method Optimization Todo List\" in the\n`method-optimization-todo.md` file. This includes a\nstructured approach for optimizing methods in the\nBarcodeGenerator library, covering steps for\nbenchmarking, code optimization, validation, and\ndocumentation. Best practices and lessons learned\nare also provided to assist developers in effective\nmethod optimizations.",
          "timestamp": "2025-08-13T22:45:33+02:00",
          "tree_id": "f83b1d2754b2e12ef5d46a6be9b5ac676d7a08ba",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/ff57471ddac43aa8c130d501741ffbfe4e0028c7"
        },
        "date": 1755118284357,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15835.465393066406,
            "unit": "ns",
            "range": "± 162.3112935610691"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16842.12497652494,
            "unit": "ns",
            "range": "± 117.8918581161984"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18892.792434692383,
            "unit": "ns",
            "range": "± 74.25028877477862"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25926.31931813558,
            "unit": "ns",
            "range": "± 58.95114098683025"
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
          "id": "b55d345f48268163c54277b0f9cbe97a501336af",
          "message": "Enhance method optimization documentation with detailed checklists and validation steps",
          "timestamp": "2025-08-13T23:42:55+02:00",
          "tree_id": "2cbf5d66d9aec210ef4791b5d6a67dae9bd50204",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/b55d345f48268163c54277b0f9cbe97a501336af"
        },
        "date": 1755121767320,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 17034.04774602254,
            "unit": "ns",
            "range": "± 437.4334145757194"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16951.879076639812,
            "unit": "ns",
            "range": "± 187.5529013143137"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18796.43908574031,
            "unit": "ns",
            "range": "± 103.47986987573775"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26121.224607195174,
            "unit": "ns",
            "range": "± 166.02929581218055"
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
          "id": "531d9e2bd4dd0674b7cd4176a6488ee77209a7a7",
          "message": "Merge pull request #26 from TyKonKet/copilot/fix-25\n\nComprehensive Improvements to Unit Test Suite: Coverage, Naming, Organization, and Code Quality",
          "timestamp": "2025-08-14T14:19:20+02:00",
          "tree_id": "71cf58680508458f562f81434f2abde5d3239f90",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/531d9e2bd4dd0674b7cd4176a6488ee77209a7a7"
        },
        "date": 1755174327530,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15457.06546674456,
            "unit": "ns",
            "range": "± 169.58554452105983"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16876.004209078274,
            "unit": "ns",
            "range": "± 74.60463602949284"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18656.457801818848,
            "unit": "ns",
            "range": "± 48.8198851535786"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26093.755041269156,
            "unit": "ns",
            "range": "± 142.55120082128988"
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
          "id": "7c56972ac49cdc002ee46a4f42b6fe64f2c0b56c",
          "message": "Refactor copilot instructions for clarity and conciseness; update build and testing sections",
          "timestamp": "2025-08-14T15:34:41+02:00",
          "tree_id": "4c63e781931a7b1f344ecf7fe5a5e10e90b4636b",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/7c56972ac49cdc002ee46a4f42b6fe64f2c0b56c"
        },
        "date": 1755179065441,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 17953.57124464247,
            "unit": "ns",
            "range": "± 1243.6299706533666"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 18291.77182067871,
            "unit": "ns",
            "range": "± 483.7436041867231"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19713.205165608724,
            "unit": "ns",
            "range": "± 289.99753178714474"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 27261.37113647461,
            "unit": "ns",
            "range": "± 334.3860303060818"
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
          "id": "2befe61d8781159d458d302fbba84975e2c1d53f",
          "message": "chore: update contributing guidelines for clarity and accessibility",
          "timestamp": "2025-08-14T15:43:39+02:00",
          "tree_id": "2ef2974b9aa4316c1da556254d4cf5c1f5de2d1a",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/2befe61d8781159d458d302fbba84975e2c1d53f"
        },
        "date": 1755179470683,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 16165.870730590821,
            "unit": "ns",
            "range": "± 274.92218855652334"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 17424.084798476277,
            "unit": "ns",
            "range": "± 300.8100873121406"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18785.021918160575,
            "unit": "ns",
            "range": "± 127.69411900793573"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26404.626408894856,
            "unit": "ns",
            "range": "± 57.88996950917295"
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
          "id": "bb8c1ebe47db01437e1ba57fdb2ea70f8cfe475c",
          "message": "chore: enhance documentation with improved security policy and reporting guidelines",
          "timestamp": "2025-08-14T15:52:07+02:00",
          "tree_id": "533f2339132c11b8d80133c4857f4cfe348a3776",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/bb8c1ebe47db01437e1ba57fdb2ea70f8cfe475c"
        },
        "date": 1755179918153,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15509.79944065639,
            "unit": "ns",
            "range": "± 145.9877563349174"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16531.040290323894,
            "unit": "ns",
            "range": "± 160.68963228404772"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19152.093677227313,
            "unit": "ns",
            "range": "± 59.26630171050764"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26355.8771878756,
            "unit": "ns",
            "range": "± 47.28138971665993"
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
          "id": "832779376fa86a0b76e80cc75833531106222113",
          "message": "Update project configuration and documentation standards\n\n- Enhanced `.editorconfig` for StyleCop diagnostics and naming styles.\n- Modified `.gitattributes` for proper diff handling of C# and image files.\n- Updated `Directory.Build.props` to include `stylecop.json` and improved build properties.\n- Added copyright and licensing information to multiple source files for standardization.\n- Restructured `TyKonKet.BarcodeGenerator.csproj` for better organization and added new dependencies.\n- Created `stylecop.json` to enforce coding standards with specific rules.\n- Ensured consistency in namespaces and documentation across various classes and methods.",
          "timestamp": "2025-08-15T22:42:37+02:00",
          "tree_id": "3566dce76cc6b2030def2be60493fd51288e601f",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/832779376fa86a0b76e80cc75833531106222113"
        },
        "date": 1755290965128,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15667.189401479867,
            "unit": "ns",
            "range": "± 98.0088356909916"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16682.681078397312,
            "unit": "ns",
            "range": "± 87.99000504629451"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18671.08871459961,
            "unit": "ns",
            "range": "± 12.954111001019408"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26044.72213236491,
            "unit": "ns",
            "range": "± 40.0694255642596"
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
          "id": "30468121833fd68d9331b038921c369fa1423143",
          "message": "chore: update README with roadmap link and bug report template",
          "timestamp": "2025-08-15T23:23:36+02:00",
          "tree_id": "cd78400d74a372c4015d5c5df3e65fde69d24589",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/30468121833fd68d9331b038921c369fa1423143"
        },
        "date": 1755293456467,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 16228.521087646484,
            "unit": "ns",
            "range": "± 93.39275788135969"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 17243.9695892334,
            "unit": "ns",
            "range": "± 151.2554789173263"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18985.520459856307,
            "unit": "ns",
            "range": "± 116.28846636119556"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26116.57698059082,
            "unit": "ns",
            "range": "± 84.08601246163022"
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
          "id": "e895e1f420f1612077a6a4a8709ad7ee74ae6fa7",
          "message": "Enhance performance optimization documentation\n\nUpdated `Perf.chatmode.md` to define the role of the performance optimization specialist for the BarcodeGenerator .NET library, emphasizing a strict 8-step optimization process, key performance areas, and response guidelines.\n\nRevised `Perf-Opt.prompt.md` to clarify the structure for optimizing method performance, including requirements for measuring performance baselines and maintaining API compatibility.\n\nModified `method-optimization-todo.md` to include critical reminders for benchmark setup, the importance of using the latest .NET framework, and best practices for isolating benchmarks.",
          "timestamp": "2025-08-16T17:02:25+02:00",
          "tree_id": "395f476e21e31a4a6f25bf03b442cb510de081ba",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/e895e1f420f1612077a6a4a8709ad7ee74ae6fa7"
        },
        "date": 1755356930188,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15724.678848266602,
            "unit": "ns",
            "range": "± 192.53398562218806"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16530.698438856336,
            "unit": "ns",
            "range": "± 344.99104687641426"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18856.789875575476,
            "unit": "ns",
            "range": "± 76.06242740851509"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26057.803592388445,
            "unit": "ns",
            "range": "± 116.19634506216767"
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
          "id": "8713363357770fe7be7ef909053d2d8c814cc2c0",
          "message": "Optimize EncodersFactory for performance by implementing factory delegate caching and reducing reflection overhead",
          "timestamp": "2025-08-16T17:36:49+02:00",
          "tree_id": "906bf6526771ea4c177b8d518177ba5c1f75ce8c",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/8713363357770fe7be7ef909053d2d8c814cc2c0"
        },
        "date": 1755358949650,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15599.388161977133,
            "unit": "ns",
            "range": "± 405.6357961542281"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16390.415701059195,
            "unit": "ns",
            "range": "± 111.58010128551328"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18700.188369750977,
            "unit": "ns",
            "range": "± 23.797879308058068"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25818.23745258038,
            "unit": "ns",
            "range": "± 81.89210318171651"
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
          "id": "87979799f6fb3504788a69400944a86efcbb4c0a",
          "message": "Enhance EncodersFactory with new tests and optimizations\n\nUpdated `EncodersFactoryTests.cs` to add tests for factory delegate creation, including handling null options and abstract types. Removed unused `using` directive in `Barcode.cs`. Rewrote `EncodersFactory.cs` to utilize compiled expressions for improved performance, with enhanced error handling and caching for encoder types.",
          "timestamp": "2025-08-16T21:00:00+02:00",
          "tree_id": "8cbe8fec96a052762a78a9efde5dd6156cdaf2c0",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/87979799f6fb3504788a69400944a86efcbb4c0a"
        },
        "date": 1755371192721,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 17060.568876953126,
            "unit": "ns",
            "range": "± 1364.68998967"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16603.329820632935,
            "unit": "ns",
            "range": "± 321.8451462734562"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18806.28325007512,
            "unit": "ns",
            "range": "± 112.95273592043472"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26189.931311471122,
            "unit": "ns",
            "range": "± 92.90717944702715"
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
          "id": "63872c34748216333c1d447d15c2467d9b092a5c",
          "message": "Refactor filename handling in Encoder class and enhance tests for placeholder replacements",
          "timestamp": "2025-08-16T21:26:39+02:00",
          "tree_id": "d6acc480b626c019e53689877b44a0dc6e6e912c",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/63872c34748216333c1d447d15c2467d9b092a5c"
        },
        "date": 1755372739004,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 14429.623772757393,
            "unit": "ns",
            "range": "± 87.30784616977137"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16570.882127028246,
            "unit": "ns",
            "range": "± 115.98705963962522"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18609.499710083008,
            "unit": "ns",
            "range": "± 27.145993246400167"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26099.845896794246,
            "unit": "ns",
            "range": "± 68.51836587626228"
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
          "id": "41e7a7df946025203f39bcdf6b042b110528a81e",
          "message": "Update filename validation tests for OS compatibility\n\nEnhanced `GetSafeFilename_ShouldRemoveAllInvalidCharacters`\nto support separate expected outputs for Windows and Linux.\nTest cases now reflect the appropriate expected values\nbased on the detected operating system at runtime.",
          "timestamp": "2025-08-16T21:43:50+02:00",
          "tree_id": "f2268eb9d256a9014c79773a34f73c8046a199ff",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/41e7a7df946025203f39bcdf6b042b110528a81e"
        },
        "date": 1755373780699,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15017.61386343149,
            "unit": "ns",
            "range": "± 223.6529330164958"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 15899.077869121846,
            "unit": "ns",
            "range": "± 100.2028878246816"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18807.788352379433,
            "unit": "ns",
            "range": "± 46.07304414208784"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25846.533611591047,
            "unit": "ns",
            "range": "± 66.93984585999556"
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
          "id": "d4a1b1381cdc727fc46301f446d5c819e3bdaf36",
          "message": "Update performance documentation to clarify benchmark usage and optimization processes",
          "timestamp": "2025-08-16T21:53:59+02:00",
          "tree_id": "3831719ed2487f5eb7bb03dbb5484a9dde7d3be9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/d4a1b1381cdc727fc46301f446d5c819e3bdaf36"
        },
        "date": 1755374378885,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15898.958461216518,
            "unit": "ns",
            "range": "± 176.58741268527734"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 15985.218965802875,
            "unit": "ns",
            "range": "± 241.6896185642937"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18805.783981323242,
            "unit": "ns",
            "range": "± 83.62722403235969"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25838.847041203426,
            "unit": "ns",
            "range": "± 39.43886879655471"
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
          "id": "67421de11ccb29af88d08929d11d332c5952fee4",
          "message": "Update filename tests for extreme quality values\n\nModified the `GetFinalFileName_ShouldHandleExtremeQualityValues` method by removing the test case for `\"test\\\\filename?.png\"` and adding a new case for `\"test\\\\file/name?.png\"`. This ensures better handling of invalid characters in file names across different operating systems.",
          "timestamp": "2025-08-16T21:58:37+02:00",
          "tree_id": "f50de7fe049a40ba10566b001c5d44209ea5b767",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/67421de11ccb29af88d08929d11d332c5952fee4"
        },
        "date": 1755374668135,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15824.17408650716,
            "unit": "ns",
            "range": "± 230.70497224489344"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16019.612584040715,
            "unit": "ns",
            "range": "± 115.92696576982016"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19082.246755746695,
            "unit": "ns",
            "range": "± 56.82692530404608"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26309.796657017298,
            "unit": "ns",
            "range": "± 124.5288266454241"
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
          "id": "35748ee44a2954455df985e0e34f7e6616582e7e",
          "message": "Refactor filename formatting for .NET 6 compatibility",
          "timestamp": "2025-08-16T22:56:15+02:00",
          "tree_id": "c64b4754eea962f55253b996dde1ecc7ecaf3dd9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/35748ee44a2954455df985e0e34f7e6616582e7e"
        },
        "date": 1755378171551,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 17796.250600891115,
            "unit": "ns",
            "range": "± 2000.026958596633"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16811.010628333457,
            "unit": "ns",
            "range": "± 119.87494143330115"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18972.650778634208,
            "unit": "ns",
            "range": "± 113.8578838574343"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25898.945251464844,
            "unit": "ns",
            "range": "± 100.34739360492952"
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
          "id": "46b45f85cea73fafd90a92e61ba715b2774d9998",
          "message": "Add global benchmark results and refactor encoders\n\n- Updated `dotnet_benchmark_runner.yml` to include a step for storing global benchmark results using `benchmark-action/github-action-benchmark@v1`.\n- Refactored multiple encoder classes to remove unused constants and change method return types from void to string.\n- Changed `RegexCache` class visibility from internal to public.\n- Introduced a new `Global` class in `Global.cs` for benchmark tests on barcode export functionalities and regex validation.",
          "timestamp": "2025-08-16T23:53:46+02:00",
          "tree_id": "5c401796ad6525b246cf49f829094aa44c2413de",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/46b45f85cea73fafd90a92e61ba715b2774d9998"
        },
        "date": 1755382873607,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 18378.08889526367,
            "unit": "ns",
            "range": "± 2047.255305309009"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16599.871060884914,
            "unit": "ns",
            "range": "± 92.87565916365709"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 19038.396006657527,
            "unit": "ns",
            "range": "± 48.1686047446075"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25995.676010131836,
            "unit": "ns",
            "range": "± 122.55411532898606"
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
          "id": "46b45f85cea73fafd90a92e61ba715b2774d9998",
          "message": "Add global benchmark results and refactor encoders\n\n- Updated `dotnet_benchmark_runner.yml` to include a step for storing global benchmark results using `benchmark-action/github-action-benchmark@v1`.\n- Refactored multiple encoder classes to remove unused constants and change method return types from void to string.\n- Changed `RegexCache` class visibility from internal to public.\n- Introduced a new `Global` class in `Global.cs` for benchmark tests on barcode export functionalities and regex validation.",
          "timestamp": "2025-08-16T21:53:46Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/46b45f85cea73fafd90a92e61ba715b2774d9998"
        },
        "date": 1755391014015,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15638.496165556066,
            "unit": "ns",
            "range": "± 317.4384835339687"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16798.04197692871,
            "unit": "ns",
            "range": "± 89.97825373326933"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18904.908542339617,
            "unit": "ns",
            "range": "± 78.74712880961762"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26368.55539057805,
            "unit": "ns",
            "range": "± 99.7475983737581"
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
          "id": "e2ec2ffe5d960fcb0f925f82403e74120d0b2fb2",
          "message": "Cleanup of Program.cs in Playground project",
          "timestamp": "2025-08-17T15:06:34+02:00",
          "tree_id": "f499e13126506d8706361f91fb5af112b579bfa9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/e2ec2ffe5d960fcb0f925f82403e74120d0b2fb2"
        },
        "date": 1755436376840,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 16512.54166848319,
            "unit": "ns",
            "range": "± 89.72195330445328"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16316.900529127855,
            "unit": "ns",
            "range": "± 113.86686146627213"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18936.764565604073,
            "unit": "ns",
            "range": "± 93.39765809959657"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26111.844826331504,
            "unit": "ns",
            "range": "± 110.93886450547996"
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
          "id": "315ef2c7cd5c5cc399a8d0f8aeeaa9d2ebda26be",
          "message": "Refactor EAN encoder tests to use char instead of string for expected check digits; optimize FormatBarcode method for performance improvements and update documentation with benchmark results.",
          "timestamp": "2025-08-17T16:28:27+02:00",
          "tree_id": "03e3f5f86aaa198f9d3fe93e7595457a884ad7f0",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/315ef2c7cd5c5cc399a8d0f8aeeaa9d2ebda26be"
        },
        "date": 1755441280752,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 16208.835780552456,
            "unit": "ns",
            "range": "± 264.9335686906782"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16536.78796745749,
            "unit": "ns",
            "range": "± 315.3978363636367"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18749.051821027482,
            "unit": "ns",
            "range": "± 75.7847215311022"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25826.157880342922,
            "unit": "ns",
            "range": "± 138.37920605881547"
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
          "id": "3df9a62edad191ed3d046ef07ac9cfa52178f137",
          "message": "Optimize EAN-8 barcode encoding for performance\n\nRefactored the `EncodeBars` method in `Ean8Encoder.cs` to replace `StringBuilder` with a stack-allocated `Span<char>`, eliminating heap allocations. This change enhances performance by directly copying encoded characters into a pre-allocated buffer. Performance improvements include a 107% increase in execution speed and a 72% reduction in memory allocation, as documented in `performance-improvements.md`.",
          "timestamp": "2025-08-17T17:13:29+02:00",
          "tree_id": "5a8abb78266c13bc9e96547f67492ad15f0b0ed9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/3df9a62edad191ed3d046ef07ac9cfa52178f137"
        },
        "date": 1755443984213,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15737.157796587262,
            "unit": "ns",
            "range": "± 446.20314119336433"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 15944.719566932092,
            "unit": "ns",
            "range": "± 63.06662066570677"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18796.255480448406,
            "unit": "ns",
            "range": "± 42.64947388857256"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26068.973959115836,
            "unit": "ns",
            "range": "± 90.17279799946822"
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
          "id": "873ba41654425b64cd1e78be4df5866c1da296d9",
          "message": "Refine optimization process documentation to clarify benchmarking steps and emphasize the importance of method duplication for baseline preservation.",
          "timestamp": "2025-08-17T17:21:08+02:00",
          "tree_id": "a4774b14c1ec647e8b7f5b9068c1764c3e88dc97",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/873ba41654425b64cd1e78be4df5866c1da296d9"
        },
        "date": 1755444445538,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 16361.984717814128,
            "unit": "ns",
            "range": "± 215.66385373211963"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16645.851318359375,
            "unit": "ns",
            "range": "± 137.30920545422237"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18650.946690486027,
            "unit": "ns",
            "range": "± 55.53053661012108"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25841.365978534406,
            "unit": "ns",
            "range": "± 112.98294842168825"
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
          "id": "f251453f416923819fdfce4ce1fc6ce838450e60",
          "message": "Optimize Ean13Encoder.EncodeBars for performance\n\nThe `EncodeBars` method in `Ean13Encoder.cs` has been refactored to eliminate allocations by replacing `StringBuilder` with a stack-allocated `Span<char>`. This allows for direct character copying into a pre-calculated buffer of 95 characters, streamlining the encoding process. The method now utilizes a single loop for both left and right digit groups, resulting in a performance improvement of approximately 213%, reducing the mean execution time from around 470 ns to about 150 ns per call.",
          "timestamp": "2025-08-17T17:35:44+02:00",
          "tree_id": "06575899d43310dab8f314045dbeac5d9e71fbeb",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/f251453f416923819fdfce4ce1fc6ce838450e60"
        },
        "date": 1755445312528,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 16716.526415143693,
            "unit": "ns",
            "range": "± 273.0229977385503"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16388.398338904746,
            "unit": "ns",
            "range": "± 142.17660921236254"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18723.480919471152,
            "unit": "ns",
            "range": "± 58.43051189420314"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25806.045427762547,
            "unit": "ns",
            "range": "± 123.51327911186365"
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
          "id": "e7269c582e3f0241af4a899d01002ae3e83975cd",
          "message": "Optimize UPC-A barcode encoding in UpcaEncoder.cs\n\nRefactored the `EncodeBars` method to eliminate `StringBuilder` usage, replacing it with a stack-allocated `Span<char>` for direct character copying. This change reduces dynamic memory allocations and simplifies the encoding logic. Performance improvements are significant, with execution time reduced from ~380 ns to ~130 ns per call, achieving a 192% speedup.",
          "timestamp": "2025-08-17T17:47:07+02:00",
          "tree_id": "f7de10bc5be421deb2603518cbb1eabb1da21756",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/e7269c582e3f0241af4a899d01002ae3e83975cd"
        },
        "date": 1755446001704,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15771.679483266977,
            "unit": "ns",
            "range": "± 236.70209149015224"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16351.199411245492,
            "unit": "ns",
            "range": "± 192.42691365856405"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18531.86339678083,
            "unit": "ns",
            "range": "± 87.80017860012465"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 26248.629676818848,
            "unit": "ns",
            "range": "± 117.25756683775178"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T17:58:14+02:00",
          "tree_id": "a33fbcf787984c6f0a003d25ada19c87b11302d8",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1755446669072,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 16438.613051350912,
            "unit": "ns",
            "range": "± 185.3819551397425"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16413.105823223406,
            "unit": "ns",
            "range": "± 177.6781781984689"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18873.379642193133,
            "unit": "ns",
            "range": "± 49.76425448074779"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25913.418021568887,
            "unit": "ns",
            "range": "± 85.95067020877717"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1755995768711,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15035.987419715295,
            "unit": "ns",
            "range": "± 110.04074860731573"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16071.84457045335,
            "unit": "ns",
            "range": "± 85.31187491028503"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18630.66392923991,
            "unit": "ns",
            "range": "± 79.93205496710999"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25880.221771240234,
            "unit": "ns",
            "range": "± 99.44696248350624"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1756600493024,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 14954.941885141227,
            "unit": "ns",
            "range": "± 103.31048111382627"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 17617.734270962803,
            "unit": "ns",
            "range": "± 428.1125082234025"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18794.699155535018,
            "unit": "ns",
            "range": "± 85.76279442839129"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25684.82158602201,
            "unit": "ns",
            "range": "± 88.96315408374043"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1757205257295,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 15983.253576660156,
            "unit": "ns",
            "range": "± 193.02420905967446"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16115.31874520438,
            "unit": "ns",
            "range": "± 190.19377729600458"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18557.01708330427,
            "unit": "ns",
            "range": "± 85.85892077875579"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25956.575948079426,
            "unit": "ns",
            "range": "± 109.52828315412877"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1757810044521,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.SimpleInstance",
            "value": 14380.255713326591,
            "unit": "ns",
            "range": "± 151.66987948425003"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.AdvancedInstance",
            "value": 16492.69953264509,
            "unit": "ns",
            "range": "± 212.60421488309996"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithoutText",
            "value": 18826.473771158853,
            "unit": "ns",
            "range": "± 136.85405202719022"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean8Encoder.EncodingWithText",
            "value": 25667.29398890904,
            "unit": "ns",
            "range": "± 159.90000561784194"
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
        "date": 1755032313211,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18859.98158826326,
            "unit": "ns",
            "range": "± 408.18043834236215"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20881.84686279297,
            "unit": "ns",
            "range": "± 392.91236123746774"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25329.37169236403,
            "unit": "ns",
            "range": "± 86.43800639336943"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38714.22441813151,
            "unit": "ns",
            "range": "± 379.38105180199767"
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
          "id": "25ffb38bcc6184917c4cddab715b831842aaf4df",
          "message": "Merge pull request #24 from TyKonKet/copilot/fix-17\n\nAdd TextColor property for independent barcode text color control",
          "timestamp": "2025-08-12T23:55:32+02:00",
          "tree_id": "899e8029342be61f44e3de2941b3c5631e303ce4",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/25ffb38bcc6184917c4cddab715b831842aaf4df"
        },
        "date": 1755036136834,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 19370.228066077598,
            "unit": "ns",
            "range": "± 182.3910086433936"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 21166.420054844446,
            "unit": "ns",
            "range": "± 338.9992051979056"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 26070.046545410158,
            "unit": "ns",
            "range": "± 174.0491068611825"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 39066.91463998648,
            "unit": "ns",
            "range": "± 293.7750871659455"
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
          "id": "37d5d7338e0c1f6d301417f04dd7255cf22e999f",
          "message": "Refactor barcode encoder classes to use nullable types for properties and improve exception handling in EncodersFactory",
          "timestamp": "2025-08-13T22:00:39+02:00",
          "tree_id": "3b8936c2b2ae115957ebe1c5a81c4271edcb3dfd",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/37d5d7338e0c1f6d301417f04dd7255cf22e999f"
        },
        "date": 1755115736576,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 19694.913477358612,
            "unit": "ns",
            "range": "± 483.49000373410223"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 22113.341774495442,
            "unit": "ns",
            "range": "± 651.7855104350958"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25904.20600789388,
            "unit": "ns",
            "range": "± 293.37186551963697"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 39243.59682791574,
            "unit": "ns",
            "range": "± 250.27198328589134"
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
          "id": "0eb016c5d87e38bb28299eb9eeb6368e08040b57",
          "message": "Refactor benchmarks and simplify TypeCache initialization\n\nComment out various benchmark jobs in BenchmarkConfig.cs, focusing on .NET 10.0.\nSimplify the initialization of TypeCache in EncodersFactory.cs using target-typed new expression for improved readability.",
          "timestamp": "2025-08-13T22:09:42+02:00",
          "tree_id": "e8d89d1dbf7cd0f17b70eb01df5ca86f1764c746",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/0eb016c5d87e38bb28299eb9eeb6368e08040b57"
        },
        "date": 1755116176352,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 20067.07769236845,
            "unit": "ns",
            "range": "± 395.2958091999193"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 22054.62499346052,
            "unit": "ns",
            "range": "± 320.0761751544486"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25739.701429094588,
            "unit": "ns",
            "range": "± 93.72229010847025"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 39766.94986833845,
            "unit": "ns",
            "range": "± 251.5158533103982"
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
          "id": "8523f367cec2d0fa32462a9730e348ea848e143a",
          "message": "Improve encoder creation\n\n- Refactored encoder creation in `EncodersFactory.cs` to use LINQ, enhancing efficiency and error handling.\n- Added `performance-improvements.md` to document performance enhancements, starting with a 6.4% improvement in `EncodersFactory.Create`.\n- Introduced `EncodersFactoryBenchmark.cs` for benchmarking the encoder creation process using BenchmarkDotNet.",
          "timestamp": "2025-08-13T22:26:57+02:00",
          "tree_id": "2964a2d8acf3dfb1b744f38907f2aabeacd49e7e",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/8523f367cec2d0fa32462a9730e348ea848e143a"
        },
        "date": 1755117224537,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 19053.257608347925,
            "unit": "ns",
            "range": "± 836.0515404319708"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20437.40502342811,
            "unit": "ns",
            "range": "± 169.79979834540907"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25506.610167283277,
            "unit": "ns",
            "range": "± 48.277741308639136"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 39501.5121882512,
            "unit": "ns",
            "range": "± 119.21772157916995"
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
          "id": "23aa334d7d9f6890fc39c3be071c2c7ecbfc3793",
          "message": "Optimize GetDisplayName method and add benchmarks\n\nUpdated project to target multiple frameworks.\nEnhanced GetDisplayName with caching for improved performance, reducing execution time from 370.7 ns to 1.931 ns.\nAdded performance improvement details to the documentation.\nIntroduced a benchmark class for performance measurement and added unit tests to validate functionality.",
          "timestamp": "2025-08-13T22:37:28+02:00",
          "tree_id": "56d53130d2537377d8a44e7a5c11b36219d798b4",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/23aa334d7d9f6890fc39c3be071c2c7ecbfc3793"
        },
        "date": 1755117825679,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18431.48972613995,
            "unit": "ns",
            "range": "± 154.53604682324055"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20253.171099149266,
            "unit": "ns",
            "range": "± 207.01827422306033"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25794.870917184013,
            "unit": "ns",
            "range": "± 102.26635992146382"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38210.757807804985,
            "unit": "ns",
            "range": "± 252.8906453830795"
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
          "id": "ff57471ddac43aa8c130d501741ffbfe4e0028c7",
          "message": "Add method optimization guidelines to documentation\n\nIntroduced a \"Method Optimization Todo List\" in the\n`method-optimization-todo.md` file. This includes a\nstructured approach for optimizing methods in the\nBarcodeGenerator library, covering steps for\nbenchmarking, code optimization, validation, and\ndocumentation. Best practices and lessons learned\nare also provided to assist developers in effective\nmethod optimizations.",
          "timestamp": "2025-08-13T22:45:33+02:00",
          "tree_id": "f83b1d2754b2e12ef5d46a6be9b5ac676d7a08ba",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/ff57471ddac43aa8c130d501741ffbfe4e0028c7"
        },
        "date": 1755118285863,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 19451.31039428711,
            "unit": "ns",
            "range": "± 219.39502797364716"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 19420.143146221453,
            "unit": "ns",
            "range": "± 105.28722096252675"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25928.378068033853,
            "unit": "ns",
            "range": "± 168.60048526090645"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38261.15106201172,
            "unit": "ns",
            "range": "± 173.33435494357377"
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
          "id": "b55d345f48268163c54277b0f9cbe97a501336af",
          "message": "Enhance method optimization documentation with detailed checklists and validation steps",
          "timestamp": "2025-08-13T23:42:55+02:00",
          "tree_id": "2cbf5d66d9aec210ef4791b5d6a67dae9bd50204",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/b55d345f48268163c54277b0f9cbe97a501336af"
        },
        "date": 1755121769391,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 19652.512389119467,
            "unit": "ns",
            "range": "± 359.43683681940223"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 21442.79230088454,
            "unit": "ns",
            "range": "± 314.30051505972756"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25975.308312552315,
            "unit": "ns",
            "range": "± 249.99270466583215"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38645.43497721354,
            "unit": "ns",
            "range": "± 128.27052260111026"
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
          "id": "531d9e2bd4dd0674b7cd4176a6488ee77209a7a7",
          "message": "Merge pull request #26 from TyKonKet/copilot/fix-25\n\nComprehensive Improvements to Unit Test Suite: Coverage, Naming, Organization, and Code Quality",
          "timestamp": "2025-08-14T14:19:20+02:00",
          "tree_id": "71cf58680508458f562f81434f2abde5d3239f90",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/531d9e2bd4dd0674b7cd4176a6488ee77209a7a7"
        },
        "date": 1755174328757,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 19166.122852870398,
            "unit": "ns",
            "range": "± 335.78248185228074"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20810.576298304968,
            "unit": "ns",
            "range": "± 310.5012905397649"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25844.170194353377,
            "unit": "ns",
            "range": "± 87.99523447943572"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38576.35637723483,
            "unit": "ns",
            "range": "± 127.68179147536534"
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
          "id": "7c56972ac49cdc002ee46a4f42b6fe64f2c0b56c",
          "message": "Refactor copilot instructions for clarity and conciseness; update build and testing sections",
          "timestamp": "2025-08-14T15:34:41+02:00",
          "tree_id": "4c63e781931a7b1f344ecf7fe5a5e10e90b4636b",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/7c56972ac49cdc002ee46a4f42b6fe64f2c0b56c"
        },
        "date": 1755179066776,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18975.755474543166,
            "unit": "ns",
            "range": "± 839.3348388044818"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 21430.69661192963,
            "unit": "ns",
            "range": "± 1031.861271738112"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25581.647620064872,
            "unit": "ns",
            "range": "± 171.35578967266107"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 39712.90919596354,
            "unit": "ns",
            "range": "± 262.3640152058131"
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
          "id": "2befe61d8781159d458d302fbba84975e2c1d53f",
          "message": "chore: update contributing guidelines for clarity and accessibility",
          "timestamp": "2025-08-14T15:43:39+02:00",
          "tree_id": "2ef2974b9aa4316c1da556254d4cf5c1f5de2d1a",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/2befe61d8781159d458d302fbba84975e2c1d53f"
        },
        "date": 1755179472406,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 19996.505687713623,
            "unit": "ns",
            "range": "± 390.0001184005362"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 22332.824498494465,
            "unit": "ns",
            "range": "± 451.63727957695966"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25778.034092203776,
            "unit": "ns",
            "range": "± 238.07790515359108"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38941.98452758789,
            "unit": "ns",
            "range": "± 552.3284834573817"
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
          "id": "bb8c1ebe47db01437e1ba57fdb2ea70f8cfe475c",
          "message": "chore: enhance documentation with improved security policy and reporting guidelines",
          "timestamp": "2025-08-14T15:52:07+02:00",
          "tree_id": "533f2339132c11b8d80133c4857f4cfe348a3776",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/bb8c1ebe47db01437e1ba57fdb2ea70f8cfe475c"
        },
        "date": 1755179919492,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18559.2435433524,
            "unit": "ns",
            "range": "± 433.90556329768793"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20360.135189819335,
            "unit": "ns",
            "range": "± 352.2314038263877"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25838.2021097819,
            "unit": "ns",
            "range": "± 145.77087824684688"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38855.13641357422,
            "unit": "ns",
            "range": "± 220.88773675396945"
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
          "id": "832779376fa86a0b76e80cc75833531106222113",
          "message": "Update project configuration and documentation standards\n\n- Enhanced `.editorconfig` for StyleCop diagnostics and naming styles.\n- Modified `.gitattributes` for proper diff handling of C# and image files.\n- Updated `Directory.Build.props` to include `stylecop.json` and improved build properties.\n- Added copyright and licensing information to multiple source files for standardization.\n- Restructured `TyKonKet.BarcodeGenerator.csproj` for better organization and added new dependencies.\n- Created `stylecop.json` to enforce coding standards with specific rules.\n- Ensured consistency in namespaces and documentation across various classes and methods.",
          "timestamp": "2025-08-15T22:42:37+02:00",
          "tree_id": "3566dce76cc6b2030def2be60493fd51288e601f",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/832779376fa86a0b76e80cc75833531106222113"
        },
        "date": 1755290966388,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 19143.461255754744,
            "unit": "ns",
            "range": "± 282.8026766371689"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20597.461512638973,
            "unit": "ns",
            "range": "± 165.88540639380122"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25453.80537062425,
            "unit": "ns",
            "range": "± 52.26004478616243"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38408.70451002855,
            "unit": "ns",
            "range": "± 127.56880795520675"
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
          "id": "30468121833fd68d9331b038921c369fa1423143",
          "message": "chore: update README with roadmap link and bug report template",
          "timestamp": "2025-08-15T23:23:36+02:00",
          "tree_id": "cd78400d74a372c4015d5c5df3e65fde69d24589",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/30468121833fd68d9331b038921c369fa1423143"
        },
        "date": 1755293457768,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 20158.74254803325,
            "unit": "ns",
            "range": "± 743.4759419335296"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 21646.550458635604,
            "unit": "ns",
            "range": "± 201.42304675198773"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25629.051712036133,
            "unit": "ns",
            "range": "± 63.494987989598656"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38860.6827545166,
            "unit": "ns",
            "range": "± 85.0249051401461"
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
          "id": "e895e1f420f1612077a6a4a8709ad7ee74ae6fa7",
          "message": "Enhance performance optimization documentation\n\nUpdated `Perf.chatmode.md` to define the role of the performance optimization specialist for the BarcodeGenerator .NET library, emphasizing a strict 8-step optimization process, key performance areas, and response guidelines.\n\nRevised `Perf-Opt.prompt.md` to clarify the structure for optimizing method performance, including requirements for measuring performance baselines and maintaining API compatibility.\n\nModified `method-optimization-todo.md` to include critical reminders for benchmark setup, the importance of using the latest .NET framework, and best practices for isolating benchmarks.",
          "timestamp": "2025-08-16T17:02:25+02:00",
          "tree_id": "395f476e21e31a4a6f25bf03b442cb510de081ba",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/e895e1f420f1612077a6a4a8709ad7ee74ae6fa7"
        },
        "date": 1755356932219,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18737.130845289965,
            "unit": "ns",
            "range": "± 173.5344242255467"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20730.805864774266,
            "unit": "ns",
            "range": "± 199.26475580687082"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 24999.4510944073,
            "unit": "ns",
            "range": "± 69.79065696578887"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38594.77393450056,
            "unit": "ns",
            "range": "± 284.72710770621177"
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
          "id": "8713363357770fe7be7ef909053d2d8c814cc2c0",
          "message": "Optimize EncodersFactory for performance by implementing factory delegate caching and reducing reflection overhead",
          "timestamp": "2025-08-16T17:36:49+02:00",
          "tree_id": "906bf6526771ea4c177b8d518177ba5c1f75ce8c",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/8713363357770fe7be7ef909053d2d8c814cc2c0"
        },
        "date": 1755358951774,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 17395.495234898157,
            "unit": "ns",
            "range": "± 157.22370373311523"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 18547.280259352465,
            "unit": "ns",
            "range": "± 92.46836063451111"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25569.527978515624,
            "unit": "ns",
            "range": "± 85.47739519949175"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38514.75833565848,
            "unit": "ns",
            "range": "± 251.84706366567008"
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
          "id": "87979799f6fb3504788a69400944a86efcbb4c0a",
          "message": "Enhance EncodersFactory with new tests and optimizations\n\nUpdated `EncodersFactoryTests.cs` to add tests for factory delegate creation, including handling null options and abstract types. Removed unused `using` directive in `Barcode.cs`. Rewrote `EncodersFactory.cs` to utilize compiled expressions for improved performance, with enhanced error handling and caching for encoder types.",
          "timestamp": "2025-08-16T21:00:00+02:00",
          "tree_id": "8cbe8fec96a052762a78a9efde5dd6156cdaf2c0",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/87979799f6fb3504788a69400944a86efcbb4c0a"
        },
        "date": 1755371194333,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 17199.038959209734,
            "unit": "ns",
            "range": "± 49.48859007270527"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 19221.179190499442,
            "unit": "ns",
            "range": "± 278.3180836550693"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25712.031685384114,
            "unit": "ns",
            "range": "± 289.75044777052176"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38430.487178257536,
            "unit": "ns",
            "range": "± 230.00559794176033"
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
          "id": "63872c34748216333c1d447d15c2467d9b092a5c",
          "message": "Refactor filename handling in Encoder class and enhance tests for placeholder replacements",
          "timestamp": "2025-08-16T21:26:39+02:00",
          "tree_id": "d6acc480b626c019e53689877b44a0dc6e6e912c",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/63872c34748216333c1d447d15c2467d9b092a5c"
        },
        "date": 1755372740277,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18142.354540143693,
            "unit": "ns",
            "range": "± 169.63084948611473"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 19206.76499938965,
            "unit": "ns",
            "range": "± 197.51934391256268"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25222.36142403739,
            "unit": "ns",
            "range": "± 109.7421740708214"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38575.66272442158,
            "unit": "ns",
            "range": "± 136.38086434238758"
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
          "id": "41e7a7df946025203f39bcdf6b042b110528a81e",
          "message": "Update filename validation tests for OS compatibility\n\nEnhanced `GetSafeFilename_ShouldRemoveAllInvalidCharacters`\nto support separate expected outputs for Windows and Linux.\nTest cases now reflect the appropriate expected values\nbased on the detected operating system at runtime.",
          "timestamp": "2025-08-16T21:43:50+02:00",
          "tree_id": "f2268eb9d256a9014c79773a34f73c8046a199ff",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/41e7a7df946025203f39bcdf6b042b110528a81e"
        },
        "date": 1755373782819,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 17354.36287144252,
            "unit": "ns",
            "range": "± 165.97782833367359"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 18300.646780160758,
            "unit": "ns",
            "range": "± 112.229184960686"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25271.765990037184,
            "unit": "ns",
            "range": "± 78.51059576131331"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38394.99666419396,
            "unit": "ns",
            "range": "± 211.34426074002795"
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
          "id": "d4a1b1381cdc727fc46301f446d5c819e3bdaf36",
          "message": "Update performance documentation to clarify benchmark usage and optimization processes",
          "timestamp": "2025-08-16T21:53:59+02:00",
          "tree_id": "3831719ed2487f5eb7bb03dbb5484a9dde7d3be9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/d4a1b1381cdc727fc46301f446d5c819e3bdaf36"
        },
        "date": 1755374380183,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 16467.681607759914,
            "unit": "ns",
            "range": "± 126.78810956480235"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 18182.83657328288,
            "unit": "ns",
            "range": "± 144.22599861709224"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25454.9723639855,
            "unit": "ns",
            "range": "± 70.98808283258553"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38186.8488507952,
            "unit": "ns",
            "range": "± 272.97640480470733"
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
          "id": "67421de11ccb29af88d08929d11d332c5952fee4",
          "message": "Update filename tests for extreme quality values\n\nModified the `GetFinalFileName_ShouldHandleExtremeQualityValues` method by removing the test case for `\"test\\\\filename?.png\"` and adding a new case for `\"test\\\\file/name?.png\"`. This ensures better handling of invalid characters in file names across different operating systems.",
          "timestamp": "2025-08-16T21:58:37+02:00",
          "tree_id": "f50de7fe049a40ba10566b001c5d44209ea5b767",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/67421de11ccb29af88d08929d11d332c5952fee4"
        },
        "date": 1755374669803,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 16462.063720703125,
            "unit": "ns",
            "range": "± 105.3646442657367"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 18598.008494059246,
            "unit": "ns",
            "range": "± 248.40002647263532"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25563.94551340739,
            "unit": "ns",
            "range": "± 39.449211170371676"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 39017.7242173415,
            "unit": "ns",
            "range": "± 262.4587526520479"
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
          "id": "35748ee44a2954455df985e0e34f7e6616582e7e",
          "message": "Refactor filename formatting for .NET 6 compatibility",
          "timestamp": "2025-08-16T22:56:15+02:00",
          "tree_id": "c64b4754eea962f55253b996dde1ecc7ecaf3dd9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/35748ee44a2954455df985e0e34f7e6616582e7e"
        },
        "date": 1755378173046,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18205.032376802883,
            "unit": "ns",
            "range": "± 97.60419855492042"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 19186.190836588543,
            "unit": "ns",
            "range": "± 63.506379838233464"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25656.984041486467,
            "unit": "ns",
            "range": "± 172.64405315632803"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38654.9040788923,
            "unit": "ns",
            "range": "± 289.72968952149694"
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
          "id": "46b45f85cea73fafd90a92e61ba715b2774d9998",
          "message": "Add global benchmark results and refactor encoders\n\n- Updated `dotnet_benchmark_runner.yml` to include a step for storing global benchmark results using `benchmark-action/github-action-benchmark@v1`.\n- Refactored multiple encoder classes to remove unused constants and change method return types from void to string.\n- Changed `RegexCache` class visibility from internal to public.\n- Introduced a new `Global` class in `Global.cs` for benchmark tests on barcode export functionalities and regex validation.",
          "timestamp": "2025-08-16T23:53:46+02:00",
          "tree_id": "5c401796ad6525b246cf49f829094aa44c2413de",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/46b45f85cea73fafd90a92e61ba715b2774d9998"
        },
        "date": 1755382874569,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18279.094131469727,
            "unit": "ns",
            "range": "± 25.06328561762056"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 19168.323622483473,
            "unit": "ns",
            "range": "± 118.40403042428474"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25852.70934706468,
            "unit": "ns",
            "range": "± 85.38070125538336"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 39294.85171072824,
            "unit": "ns",
            "range": "± 181.61175614625554"
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
          "id": "46b45f85cea73fafd90a92e61ba715b2774d9998",
          "message": "Add global benchmark results and refactor encoders\n\n- Updated `dotnet_benchmark_runner.yml` to include a step for storing global benchmark results using `benchmark-action/github-action-benchmark@v1`.\n- Refactored multiple encoder classes to remove unused constants and change method return types from void to string.\n- Changed `RegexCache` class visibility from internal to public.\n- Introduced a new `Global` class in `Global.cs` for benchmark tests on barcode export functionalities and regex validation.",
          "timestamp": "2025-08-16T21:53:46Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/46b45f85cea73fafd90a92e61ba715b2774d9998"
        },
        "date": 1755391015893,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18037.160596575057,
            "unit": "ns",
            "range": "± 255.3867170619762"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 19201.167096819197,
            "unit": "ns",
            "range": "± 138.82973425832967"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 26329.060995919364,
            "unit": "ns",
            "range": "± 134.49752337079914"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38134.32741800944,
            "unit": "ns",
            "range": "± 124.87680844338958"
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
          "id": "e2ec2ffe5d960fcb0f925f82403e74120d0b2fb2",
          "message": "Cleanup of Program.cs in Playground project",
          "timestamp": "2025-08-17T15:06:34+02:00",
          "tree_id": "f499e13126506d8706361f91fb5af112b579bfa9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/e2ec2ffe5d960fcb0f925f82403e74120d0b2fb2"
        },
        "date": 1755436377775,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 16882.32063645583,
            "unit": "ns",
            "range": "± 61.28394309102684"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 18908.499877929688,
            "unit": "ns",
            "range": "± 119.69286491142833"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25651.18498112605,
            "unit": "ns",
            "range": "± 120.52093640654856"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38547.2307434082,
            "unit": "ns",
            "range": "± 259.0833825555309"
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
          "id": "315ef2c7cd5c5cc399a8d0f8aeeaa9d2ebda26be",
          "message": "Refactor EAN encoder tests to use char instead of string for expected check digits; optimize FormatBarcode method for performance improvements and update documentation with benchmark results.",
          "timestamp": "2025-08-17T16:28:27+02:00",
          "tree_id": "03e3f5f86aaa198f9d3fe93e7595457a884ad7f0",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/315ef2c7cd5c5cc399a8d0f8aeeaa9d2ebda26be"
        },
        "date": 1755441281827,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18173.840659005302,
            "unit": "ns",
            "range": "± 194.83839281746745"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 19060.384002685547,
            "unit": "ns",
            "range": "± 233.75697395499245"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25409.12395477295,
            "unit": "ns",
            "range": "± 30.84318431146085"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38703.02135760967,
            "unit": "ns",
            "range": "± 177.65380188139082"
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
          "id": "3df9a62edad191ed3d046ef07ac9cfa52178f137",
          "message": "Optimize EAN-8 barcode encoding for performance\n\nRefactored the `EncodeBars` method in `Ean8Encoder.cs` to replace `StringBuilder` with a stack-allocated `Span<char>`, eliminating heap allocations. This change enhances performance by directly copying encoded characters into a pre-allocated buffer. Performance improvements include a 107% increase in execution speed and a 72% reduction in memory allocation, as documented in `performance-improvements.md`.",
          "timestamp": "2025-08-17T17:13:29+02:00",
          "tree_id": "5a8abb78266c13bc9e96547f67492ad15f0b0ed9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/3df9a62edad191ed3d046ef07ac9cfa52178f137"
        },
        "date": 1755443985156,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 17478.887657752402,
            "unit": "ns",
            "range": "± 138.22763761598992"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 18178.642354329426,
            "unit": "ns",
            "range": "± 154.793212222326"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25978.553325108118,
            "unit": "ns",
            "range": "± 114.43535268790541"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38973.26900373186,
            "unit": "ns",
            "range": "± 217.56657867046638"
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
          "id": "873ba41654425b64cd1e78be4df5866c1da296d9",
          "message": "Refine optimization process documentation to clarify benchmarking steps and emphasize the importance of method duplication for baseline preservation.",
          "timestamp": "2025-08-17T17:21:08+02:00",
          "tree_id": "a4774b14c1ec647e8b7f5b9068c1764c3e88dc97",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/873ba41654425b64cd1e78be4df5866c1da296d9"
        },
        "date": 1755444446593,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 17954.527951754055,
            "unit": "ns",
            "range": "± 96.28981421528191"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 19190.99702336238,
            "unit": "ns",
            "range": "± 174.43366306447774"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25754.045999145506,
            "unit": "ns",
            "range": "± 161.87569988909993"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38442.405198317305,
            "unit": "ns",
            "range": "± 160.71276894016404"
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
          "id": "f251453f416923819fdfce4ce1fc6ce838450e60",
          "message": "Optimize Ean13Encoder.EncodeBars for performance\n\nThe `EncodeBars` method in `Ean13Encoder.cs` has been refactored to eliminate allocations by replacing `StringBuilder` with a stack-allocated `Span<char>`. This allows for direct character copying into a pre-calculated buffer of 95 characters, streamlining the encoding process. The method now utilizes a single loop for both left and right digit groups, resulting in a performance improvement of approximately 213%, reducing the mean execution time from around 470 ns to about 150 ns per call.",
          "timestamp": "2025-08-17T17:35:44+02:00",
          "tree_id": "06575899d43310dab8f314045dbeac5d9e71fbeb",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/f251453f416923819fdfce4ce1fc6ce838450e60"
        },
        "date": 1755445314204,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 17999.090901692707,
            "unit": "ns",
            "range": "± 97.4596601975278"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 19170.273825509208,
            "unit": "ns",
            "range": "± 89.9877594898861"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25226.234243539664,
            "unit": "ns",
            "range": "± 61.10671382440769"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38492.188634236656,
            "unit": "ns",
            "range": "± 117.25689910337373"
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
          "id": "e7269c582e3f0241af4a899d01002ae3e83975cd",
          "message": "Optimize UPC-A barcode encoding in UpcaEncoder.cs\n\nRefactored the `EncodeBars` method to eliminate `StringBuilder` usage, replacing it with a stack-allocated `Span<char>` for direct character copying. This change reduces dynamic memory allocations and simplifies the encoding logic. Performance improvements are significant, with execution time reduced from ~380 ns to ~130 ns per call, achieving a 192% speedup.",
          "timestamp": "2025-08-17T17:47:07+02:00",
          "tree_id": "f7de10bc5be421deb2603518cbb1eabb1da21756",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/e7269c582e3f0241af4a899d01002ae3e83975cd"
        },
        "date": 1755446002657,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 16684.19083949498,
            "unit": "ns",
            "range": "± 143.58287604541508"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 18587.567611694336,
            "unit": "ns",
            "range": "± 224.62024690032607"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25489.79650224958,
            "unit": "ns",
            "range": "± 91.54233178374423"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 39073.351333618164,
            "unit": "ns",
            "range": "± 61.39233218787639"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T17:58:14+02:00",
          "tree_id": "a33fbcf787984c6f0a003d25ada19c87b11302d8",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1755446670182,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 18426.840299166164,
            "unit": "ns",
            "range": "± 67.10183125992381"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 19468.513554164343,
            "unit": "ns",
            "range": "± 131.0349922677489"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25385.98842562162,
            "unit": "ns",
            "range": "± 86.51767025399332"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38634.685013834634,
            "unit": "ns",
            "range": "± 273.886210869551"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1755995770595,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 17656.5745980399,
            "unit": "ns",
            "range": "± 114.45624423908001"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 18536.780024210613,
            "unit": "ns",
            "range": "± 86.97055922359623"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25544.739473470054,
            "unit": "ns",
            "range": "± 179.08884047721463"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38677.466247558594,
            "unit": "ns",
            "range": "± 144.61731408082397"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1756600494837,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 17902.11075768104,
            "unit": "ns",
            "range": "± 112.32053795129428"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 20221.76133647718,
            "unit": "ns",
            "range": "± 393.71643661632913"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25453.427422659737,
            "unit": "ns",
            "range": "± 115.96288436733028"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38814.70976155599,
            "unit": "ns",
            "range": "± 457.4370116072158"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1757205259275,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 16832.223811558313,
            "unit": "ns",
            "range": "± 109.96950413823166"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 19004.289192708333,
            "unit": "ns",
            "range": "± 347.34121492397554"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25381.735088094076,
            "unit": "ns",
            "range": "± 180.28150208609784"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38195.22861328125,
            "unit": "ns",
            "range": "± 288.5479161281966"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1757810046640,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.SimpleInstance",
            "value": 17974.07847243089,
            "unit": "ns",
            "range": "± 99.19258919226084"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.AdvancedInstance",
            "value": 18888.64859713041,
            "unit": "ns",
            "range": "± 84.28580515578281"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithoutText",
            "value": 25462.706388346352,
            "unit": "ns",
            "range": "± 124.13581239314381"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Ean13Encoder.EncodingWithText",
            "value": 38180.020150991586,
            "unit": "ns",
            "range": "± 131.02339545001004"
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
        "date": 1755032314397,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 20832.135162353516,
            "unit": "ns",
            "range": "± 443.86465300481484"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20063.397678920202,
            "unit": "ns",
            "range": "± 253.24520919069732"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25505.111825796273,
            "unit": "ns",
            "range": "± 79.5698588975739"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40440.93014526367,
            "unit": "ns",
            "range": "± 134.79925953899"
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
          "id": "25ffb38bcc6184917c4cddab715b831842aaf4df",
          "message": "Merge pull request #24 from TyKonKet/copilot/fix-17\n\nAdd TextColor property for independent barcode text color control",
          "timestamp": "2025-08-12T23:55:32+02:00",
          "tree_id": "899e8029342be61f44e3de2941b3c5631e303ce4",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/25ffb38bcc6184917c4cddab715b831842aaf4df"
        },
        "date": 1755036137783,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18963.456311907088,
            "unit": "ns",
            "range": "± 145.9450214241264"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20264.87563382662,
            "unit": "ns",
            "range": "± 82.24127318927394"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25765.464928260215,
            "unit": "ns",
            "range": "± 90.51238957844343"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40489.123084435094,
            "unit": "ns",
            "range": "± 201.54680274442552"
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
          "id": "37d5d7338e0c1f6d301417f04dd7255cf22e999f",
          "message": "Refactor barcode encoder classes to use nullable types for properties and improve exception handling in EncodersFactory",
          "timestamp": "2025-08-13T22:00:39+02:00",
          "tree_id": "3b8936c2b2ae115957ebe1c5a81c4271edcb3dfd",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/37d5d7338e0c1f6d301417f04dd7255cf22e999f"
        },
        "date": 1755115737750,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 23674.913396199543,
            "unit": "ns",
            "range": "± 179.97400249221147"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 21120.164334810695,
            "unit": "ns",
            "range": "± 166.54534038040734"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25492.327326847957,
            "unit": "ns",
            "range": "± 195.3927694703845"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40795.37873722957,
            "unit": "ns",
            "range": "± 377.73874608452275"
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
          "id": "0eb016c5d87e38bb28299eb9eeb6368e08040b57",
          "message": "Refactor benchmarks and simplify TypeCache initialization\n\nComment out various benchmark jobs in BenchmarkConfig.cs, focusing on .NET 10.0.\nSimplify the initialization of TypeCache in EncodersFactory.cs using target-typed new expression for improved readability.",
          "timestamp": "2025-08-13T22:09:42+02:00",
          "tree_id": "e8d89d1dbf7cd0f17b70eb01df5ca86f1764c746",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/0eb016c5d87e38bb28299eb9eeb6368e08040b57"
        },
        "date": 1755116177311,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 20193.232832845053,
            "unit": "ns",
            "range": "± 354.4095957046222"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 21144.557438777043,
            "unit": "ns",
            "range": "± 336.78814806042425"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25942.900911771336,
            "unit": "ns",
            "range": "± 75.3584890911134"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41299.19834391276,
            "unit": "ns",
            "range": "± 311.27493871268894"
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
          "id": "8523f367cec2d0fa32462a9730e348ea848e143a",
          "message": "Improve encoder creation\n\n- Refactored encoder creation in `EncodersFactory.cs` to use LINQ, enhancing efficiency and error handling.\n- Added `performance-improvements.md` to document performance enhancements, starting with a 6.4% improvement in `EncodersFactory.Create`.\n- Introduced `EncodersFactoryBenchmark.cs` for benchmarking the encoder creation process using BenchmarkDotNet.",
          "timestamp": "2025-08-13T22:26:57+02:00",
          "tree_id": "2964a2d8acf3dfb1b744f38907f2aabeacd49e7e",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/8523f367cec2d0fa32462a9730e348ea848e143a"
        },
        "date": 1755117226085,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18920.772602626257,
            "unit": "ns",
            "range": "± 134.0783947258368"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20073.637756347656,
            "unit": "ns",
            "range": "± 292.36167706543466"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25698.414479573566,
            "unit": "ns",
            "range": "± 63.728831532751286"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40920.841256277905,
            "unit": "ns",
            "range": "± 144.83714518619695"
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
          "id": "23aa334d7d9f6890fc39c3be071c2c7ecbfc3793",
          "message": "Optimize GetDisplayName method and add benchmarks\n\nUpdated project to target multiple frameworks.\nEnhanced GetDisplayName with caching for improved performance, reducing execution time from 370.7 ns to 1.931 ns.\nAdded performance improvement details to the documentation.\nIntroduced a benchmark class for performance measurement and added unit tests to validate functionality.",
          "timestamp": "2025-08-13T22:37:28+02:00",
          "tree_id": "56d53130d2537377d8a44e7a5c11b36219d798b4",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/23aa334d7d9f6890fc39c3be071c2c7ecbfc3793"
        },
        "date": 1755117826830,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 20125.676307229434,
            "unit": "ns",
            "range": "± 394.02106701510877"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 21348.31778172084,
            "unit": "ns",
            "range": "± 270.9128808010432"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25318.038447062176,
            "unit": "ns",
            "range": "± 65.14356589631889"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40971.91317952474,
            "unit": "ns",
            "range": "± 312.1992771846779"
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
          "id": "ff57471ddac43aa8c130d501741ffbfe4e0028c7",
          "message": "Add method optimization guidelines to documentation\n\nIntroduced a \"Method Optimization Todo List\" in the\n`method-optimization-todo.md` file. This includes a\nstructured approach for optimizing methods in the\nBarcodeGenerator library, covering steps for\nbenchmarking, code optimization, validation, and\ndocumentation. Best practices and lessons learned\nare also provided to assist developers in effective\nmethod optimizations.",
          "timestamp": "2025-08-13T22:45:33+02:00",
          "tree_id": "f83b1d2754b2e12ef5d46a6be9b5ac676d7a08ba",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/ff57471ddac43aa8c130d501741ffbfe4e0028c7"
        },
        "date": 1755118287175,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 19397.996763102212,
            "unit": "ns",
            "range": "± 152.34843201943968"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20712.866145207332,
            "unit": "ns",
            "range": "± 198.87028271811823"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25203.183919270832,
            "unit": "ns",
            "range": "± 25.58122996489905"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40264.32091346154,
            "unit": "ns",
            "range": "± 215.72560188519526"
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
          "id": "b55d345f48268163c54277b0f9cbe97a501336af",
          "message": "Enhance method optimization documentation with detailed checklists and validation steps",
          "timestamp": "2025-08-13T23:42:55+02:00",
          "tree_id": "2cbf5d66d9aec210ef4791b5d6a67dae9bd50204",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/b55d345f48268163c54277b0f9cbe97a501336af"
        },
        "date": 1755121771057,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 19387.924712117514,
            "unit": "ns",
            "range": "± 260.68639761481865"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20600.524943033855,
            "unit": "ns",
            "range": "± 80.14555096907874"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25366.01406273475,
            "unit": "ns",
            "range": "± 97.41620060566856"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40709.93889944894,
            "unit": "ns",
            "range": "± 300.17204579985247"
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
          "id": "531d9e2bd4dd0674b7cd4176a6488ee77209a7a7",
          "message": "Merge pull request #26 from TyKonKet/copilot/fix-25\n\nComprehensive Improvements to Unit Test Suite: Coverage, Naming, Organization, and Code Quality",
          "timestamp": "2025-08-14T14:19:20+02:00",
          "tree_id": "71cf58680508458f562f81434f2abde5d3239f90",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/531d9e2bd4dd0674b7cd4176a6488ee77209a7a7"
        },
        "date": 1755174330807,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 22278.446009318035,
            "unit": "ns",
            "range": "± 342.044736710035"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 21502.814489511344,
            "unit": "ns",
            "range": "± 125.84141000151808"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25428.674869243914,
            "unit": "ns",
            "range": "± 90.1838134471377"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40406.00370788574,
            "unit": "ns",
            "range": "± 121.35521589418404"
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
          "id": "7c56972ac49cdc002ee46a4f42b6fe64f2c0b56c",
          "message": "Refactor copilot instructions for clarity and conciseness; update build and testing sections",
          "timestamp": "2025-08-14T15:34:41+02:00",
          "tree_id": "4c63e781931a7b1f344ecf7fe5a5e10e90b4636b",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/7c56972ac49cdc002ee46a4f42b6fe64f2c0b56c"
        },
        "date": 1755179067818,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 22078.337471313476,
            "unit": "ns",
            "range": "± 3102.8395366559894"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 23484.71658895304,
            "unit": "ns",
            "range": "± 1313.5562662551113"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 26477.14561665853,
            "unit": "ns",
            "range": "± 398.90249952461005"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41446.986836751305,
            "unit": "ns",
            "range": "± 416.2286609914043"
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
          "id": "2befe61d8781159d458d302fbba84975e2c1d53f",
          "message": "chore: update contributing guidelines for clarity and accessibility",
          "timestamp": "2025-08-14T15:43:39+02:00",
          "tree_id": "2ef2974b9aa4316c1da556254d4cf5c1f5de2d1a",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/2befe61d8781159d458d302fbba84975e2c1d53f"
        },
        "date": 1755179473799,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 20985.60859527588,
            "unit": "ns",
            "range": "± 1426.4394825398385"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 22141.998194077434,
            "unit": "ns",
            "range": "± 714.8827060862199"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25462.164746965682,
            "unit": "ns",
            "range": "± 147.57948448022765"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41013.4060886928,
            "unit": "ns",
            "range": "± 470.9773030375004"
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
          "id": "bb8c1ebe47db01437e1ba57fdb2ea70f8cfe475c",
          "message": "chore: enhance documentation with improved security policy and reporting guidelines",
          "timestamp": "2025-08-14T15:52:07+02:00",
          "tree_id": "533f2339132c11b8d80133c4857f4cfe348a3776",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/bb8c1ebe47db01437e1ba57fdb2ea70f8cfe475c"
        },
        "date": 1755179920570,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18761.952697753906,
            "unit": "ns",
            "range": "± 322.5708983866921"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 21153.71563251202,
            "unit": "ns",
            "range": "± 120.74255616376551"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25713.554825846353,
            "unit": "ns",
            "range": "± 153.8699731063183"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40699.32013375418,
            "unit": "ns",
            "range": "± 362.2817304152886"
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
          "id": "832779376fa86a0b76e80cc75833531106222113",
          "message": "Update project configuration and documentation standards\n\n- Enhanced `.editorconfig` for StyleCop diagnostics and naming styles.\n- Modified `.gitattributes` for proper diff handling of C# and image files.\n- Updated `Directory.Build.props` to include `stylecop.json` and improved build properties.\n- Added copyright and licensing information to multiple source files for standardization.\n- Restructured `TyKonKet.BarcodeGenerator.csproj` for better organization and added new dependencies.\n- Created `stylecop.json` to enforce coding standards with specific rules.\n- Ensured consistency in namespaces and documentation across various classes and methods.",
          "timestamp": "2025-08-15T22:42:37+02:00",
          "tree_id": "3566dce76cc6b2030def2be60493fd51288e601f",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/832779376fa86a0b76e80cc75833531106222113"
        },
        "date": 1755290967335,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 19482.70581100236,
            "unit": "ns",
            "range": "± 745.7133540307991"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20217.359647310695,
            "unit": "ns",
            "range": "± 75.27998778414758"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25548.62730172964,
            "unit": "ns",
            "range": "± 38.74725710977154"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40112.117919921875,
            "unit": "ns",
            "range": "± 224.7392268010502"
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
          "id": "30468121833fd68d9331b038921c369fa1423143",
          "message": "chore: update README with roadmap link and bug report template",
          "timestamp": "2025-08-15T23:23:36+02:00",
          "tree_id": "cd78400d74a372c4015d5c5df3e65fde69d24589",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/30468121833fd68d9331b038921c369fa1423143"
        },
        "date": 1755293458824,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 20189.183689561,
            "unit": "ns",
            "range": "± 1051.600446946125"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20843.60553917518,
            "unit": "ns",
            "range": "± 317.70674941458935"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25552.2815422645,
            "unit": "ns",
            "range": "± 119.19756096987527"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40700.32963209886,
            "unit": "ns",
            "range": "± 185.68318097589975"
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
          "id": "e895e1f420f1612077a6a4a8709ad7ee74ae6fa7",
          "message": "Enhance performance optimization documentation\n\nUpdated `Perf.chatmode.md` to define the role of the performance optimization specialist for the BarcodeGenerator .NET library, emphasizing a strict 8-step optimization process, key performance areas, and response guidelines.\n\nRevised `Perf-Opt.prompt.md` to clarify the structure for optimizing method performance, including requirements for measuring performance baselines and maintaining API compatibility.\n\nModified `method-optimization-todo.md` to include critical reminders for benchmark setup, the importance of using the latest .NET framework, and best practices for isolating benchmarks.",
          "timestamp": "2025-08-16T17:02:25+02:00",
          "tree_id": "395f476e21e31a4a6f25bf03b442cb510de081ba",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/e895e1f420f1612077a6a4a8709ad7ee74ae6fa7"
        },
        "date": 1755356933920,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 19353.11389378139,
            "unit": "ns",
            "range": "± 335.4314337777239"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 21594.876485971305,
            "unit": "ns",
            "range": "± 499.20291373214"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 24929.031247456867,
            "unit": "ns",
            "range": "± 23.454003156441974"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40284.786267961776,
            "unit": "ns",
            "range": "± 204.92292021894426"
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
          "id": "8713363357770fe7be7ef909053d2d8c814cc2c0",
          "message": "Optimize EncodersFactory for performance by implementing factory delegate caching and reducing reflection overhead",
          "timestamp": "2025-08-16T17:36:49+02:00",
          "tree_id": "906bf6526771ea4c177b8d518177ba5c1f75ce8c",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/8713363357770fe7be7ef909053d2d8c814cc2c0"
        },
        "date": 1755358953289,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 16608.405752999442,
            "unit": "ns",
            "range": "± 145.96039220128094"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19418.222396850586,
            "unit": "ns",
            "range": "± 164.96997570934658"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25262.17341003418,
            "unit": "ns",
            "range": "± 165.55753683734778"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 39920.18231201172,
            "unit": "ns",
            "range": "± 143.48290905905162"
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
          "id": "87979799f6fb3504788a69400944a86efcbb4c0a",
          "message": "Enhance EncodersFactory with new tests and optimizations\n\nUpdated `EncodersFactoryTests.cs` to add tests for factory delegate creation, including handling null options and abstract types. Removed unused `using` directive in `Barcode.cs`. Rewrote `EncodersFactory.cs` to utilize compiled expressions for improved performance, with enhanced error handling and caching for encoder types.",
          "timestamp": "2025-08-16T21:00:00+02:00",
          "tree_id": "8cbe8fec96a052762a78a9efde5dd6156cdaf2c0",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/87979799f6fb3504788a69400944a86efcbb4c0a"
        },
        "date": 1755371195533,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18006.88457782452,
            "unit": "ns",
            "range": "± 139.1578892124662"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20271.399912516277,
            "unit": "ns",
            "range": "± 207.77038999585812"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25458.149287632532,
            "unit": "ns",
            "range": "± 97.5077766620944"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40414.267896379744,
            "unit": "ns",
            "range": "± 254.78129208660224"
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
          "id": "63872c34748216333c1d447d15c2467d9b092a5c",
          "message": "Refactor filename handling in Encoder class and enhance tests for placeholder replacements",
          "timestamp": "2025-08-16T21:26:39+02:00",
          "tree_id": "d6acc480b626c019e53689877b44a0dc6e6e912c",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/63872c34748216333c1d447d15c2467d9b092a5c"
        },
        "date": 1755372741258,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 17916.336940220423,
            "unit": "ns",
            "range": "± 167.34123660597564"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20266.371002197266,
            "unit": "ns",
            "range": "± 75.01038685762498"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25811.65459696452,
            "unit": "ns",
            "range": "± 274.17106460276193"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40147.85107421875,
            "unit": "ns",
            "range": "± 134.40514171230097"
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
          "id": "41e7a7df946025203f39bcdf6b042b110528a81e",
          "message": "Update filename validation tests for OS compatibility\n\nEnhanced `GetSafeFilename_ShouldRemoveAllInvalidCharacters`\nto support separate expected outputs for Windows and Linux.\nTest cases now reflect the appropriate expected values\nbased on the detected operating system at runtime.",
          "timestamp": "2025-08-16T21:43:50+02:00",
          "tree_id": "f2268eb9d256a9014c79773a34f73c8046a199ff",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/41e7a7df946025203f39bcdf6b042b110528a81e"
        },
        "date": 1755373784328,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 16300.452815129207,
            "unit": "ns",
            "range": "± 70.70137105722107"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19076.001210530598,
            "unit": "ns",
            "range": "± 87.56943731099953"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25352.39326985677,
            "unit": "ns",
            "range": "± 253.8349745251156"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40173.21930367606,
            "unit": "ns",
            "range": "± 546.2210440718057"
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
          "id": "d4a1b1381cdc727fc46301f446d5c819e3bdaf36",
          "message": "Update performance documentation to clarify benchmark usage and optimization processes",
          "timestamp": "2025-08-16T21:53:59+02:00",
          "tree_id": "3831719ed2487f5eb7bb03dbb5484a9dde7d3be9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/d4a1b1381cdc727fc46301f446d5c819e3bdaf36"
        },
        "date": 1755374381157,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 17177.624037522535,
            "unit": "ns",
            "range": "± 52.98944314378198"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19338.177947998047,
            "unit": "ns",
            "range": "± 152.18377694094235"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25371.92770737868,
            "unit": "ns",
            "range": "± 63.56441775408975"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40372.706290108814,
            "unit": "ns",
            "range": "± 237.40259384588904"
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
          "id": "67421de11ccb29af88d08929d11d332c5952fee4",
          "message": "Update filename tests for extreme quality values\n\nModified the `GetFinalFileName_ShouldHandleExtremeQualityValues` method by removing the test case for `\"test\\\\filename?.png\"` and adding a new case for `\"test\\\\file/name?.png\"`. This ensures better handling of invalid characters in file names across different operating systems.",
          "timestamp": "2025-08-16T21:58:37+02:00",
          "tree_id": "f50de7fe049a40ba10566b001c5d44209ea5b767",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/67421de11ccb29af88d08929d11d332c5952fee4"
        },
        "date": 1755374671015,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 16703.93354143415,
            "unit": "ns",
            "range": "± 144.55490392906876"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19343.09836324056,
            "unit": "ns",
            "range": "± 195.49296963705314"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25569.4953120305,
            "unit": "ns",
            "range": "± 74.73402612438886"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40810.8902752216,
            "unit": "ns",
            "range": "± 142.48985544087301"
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
          "id": "35748ee44a2954455df985e0e34f7e6616582e7e",
          "message": "Refactor filename formatting for .NET 6 compatibility",
          "timestamp": "2025-08-16T22:56:15+02:00",
          "tree_id": "c64b4754eea962f55253b996dde1ecc7ecaf3dd9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/35748ee44a2954455df985e0e34f7e6616582e7e"
        },
        "date": 1755378174175,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18234.990958077567,
            "unit": "ns",
            "range": "± 121.61067686862553"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20305.08754319411,
            "unit": "ns",
            "range": "± 163.62739066447645"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25151.728921072823,
            "unit": "ns",
            "range": "± 177.7505939947982"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40280.58673967634,
            "unit": "ns",
            "range": "± 187.327588248137"
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
          "id": "46b45f85cea73fafd90a92e61ba715b2774d9998",
          "message": "Add global benchmark results and refactor encoders\n\n- Updated `dotnet_benchmark_runner.yml` to include a step for storing global benchmark results using `benchmark-action/github-action-benchmark@v1`.\n- Refactored multiple encoder classes to remove unused constants and change method return types from void to string.\n- Changed `RegexCache` class visibility from internal to public.\n- Introduced a new `Global` class in `Global.cs` for benchmark tests on barcode export functionalities and regex validation.",
          "timestamp": "2025-08-16T23:53:46+02:00",
          "tree_id": "5c401796ad6525b246cf49f829094aa44c2413de",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/46b45f85cea73fafd90a92e61ba715b2774d9998"
        },
        "date": 1755382875551,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18128.63221153846,
            "unit": "ns",
            "range": "± 104.37522475020046"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20320.966974894207,
            "unit": "ns",
            "range": "± 181.0081586010655"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25739.0391998291,
            "unit": "ns",
            "range": "± 57.84961506198852"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40443.035288492836,
            "unit": "ns",
            "range": "± 96.83970405766237"
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
          "id": "46b45f85cea73fafd90a92e61ba715b2774d9998",
          "message": "Add global benchmark results and refactor encoders\n\n- Updated `dotnet_benchmark_runner.yml` to include a step for storing global benchmark results using `benchmark-action/github-action-benchmark@v1`.\n- Refactored multiple encoder classes to remove unused constants and change method return types from void to string.\n- Changed `RegexCache` class visibility from internal to public.\n- Introduced a new `Global` class in `Global.cs` for benchmark tests on barcode export functionalities and regex validation.",
          "timestamp": "2025-08-16T21:53:46Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/46b45f85cea73fafd90a92e61ba715b2774d9998"
        },
        "date": 1755391017761,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 16809.043067345254,
            "unit": "ns",
            "range": "± 123.2539371213486"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20055.233810424805,
            "unit": "ns",
            "range": "± 199.58851429142288"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25902.224678626426,
            "unit": "ns",
            "range": "± 105.72432275402386"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40844.55452786959,
            "unit": "ns",
            "range": "± 174.13422491116182"
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
          "id": "e2ec2ffe5d960fcb0f925f82403e74120d0b2fb2",
          "message": "Cleanup of Program.cs in Playground project",
          "timestamp": "2025-08-17T15:06:34+02:00",
          "tree_id": "f499e13126506d8706361f91fb5af112b579bfa9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/e2ec2ffe5d960fcb0f925f82403e74120d0b2fb2"
        },
        "date": 1755436378684,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 17683.468651404746,
            "unit": "ns",
            "range": "± 123.65396322970393"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19687.33363342285,
            "unit": "ns",
            "range": "± 86.61454331669522"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25552.305161696215,
            "unit": "ns",
            "range": "± 58.25493923712342"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40737.89606651893,
            "unit": "ns",
            "range": "± 247.03298661717065"
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
          "id": "315ef2c7cd5c5cc399a8d0f8aeeaa9d2ebda26be",
          "message": "Refactor EAN encoder tests to use char instead of string for expected check digits; optimize FormatBarcode method for performance improvements and update documentation with benchmark results.",
          "timestamp": "2025-08-17T16:28:27+02:00",
          "tree_id": "03e3f5f86aaa198f9d3fe93e7595457a884ad7f0",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/315ef2c7cd5c5cc399a8d0f8aeeaa9d2ebda26be"
        },
        "date": 1755441282928,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 17891.1738848005,
            "unit": "ns",
            "range": "± 238.43315310523764"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20163.133771623885,
            "unit": "ns",
            "range": "± 158.79548537876366"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25441.169435941258,
            "unit": "ns",
            "range": "± 113.86707999343939"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40667.85842895508,
            "unit": "ns",
            "range": "± 179.09092438191828"
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
          "id": "3df9a62edad191ed3d046ef07ac9cfa52178f137",
          "message": "Optimize EAN-8 barcode encoding for performance\n\nRefactored the `EncodeBars` method in `Ean8Encoder.cs` to replace `StringBuilder` with a stack-allocated `Span<char>`, eliminating heap allocations. This change enhances performance by directly copying encoded characters into a pre-allocated buffer. Performance improvements include a 107% increase in execution speed and a 72% reduction in memory allocation, as documented in `performance-improvements.md`.",
          "timestamp": "2025-08-17T17:13:29+02:00",
          "tree_id": "5a8abb78266c13bc9e96547f67492ad15f0b0ed9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/3df9a62edad191ed3d046ef07ac9cfa52178f137"
        },
        "date": 1755443986079,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 16545.84211077009,
            "unit": "ns",
            "range": "± 171.95237729695208"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19377.707255045574,
            "unit": "ns",
            "range": "± 237.76422631213774"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25770.614121657152,
            "unit": "ns",
            "range": "± 56.634160858313216"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41076.64746529715,
            "unit": "ns",
            "range": "± 231.7713661441362"
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
          "id": "873ba41654425b64cd1e78be4df5866c1da296d9",
          "message": "Refine optimization process documentation to clarify benchmarking steps and emphasize the importance of method duplication for baseline preservation.",
          "timestamp": "2025-08-17T17:21:08+02:00",
          "tree_id": "a4774b14c1ec647e8b7f5b9068c1764c3e88dc97",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/873ba41654425b64cd1e78be4df5866c1da296d9"
        },
        "date": 1755444447654,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 17891.913677509016,
            "unit": "ns",
            "range": "± 68.49299317753086"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20066.020310621996,
            "unit": "ns",
            "range": "± 238.06463139031214"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25479.469249180383,
            "unit": "ns",
            "range": "± 107.59675716591252"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41107.89681134905,
            "unit": "ns",
            "range": "± 224.0731411482607"
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
          "id": "f251453f416923819fdfce4ce1fc6ce838450e60",
          "message": "Optimize Ean13Encoder.EncodeBars for performance\n\nThe `EncodeBars` method in `Ean13Encoder.cs` has been refactored to eliminate allocations by replacing `StringBuilder` with a stack-allocated `Span<char>`. This allows for direct character copying into a pre-calculated buffer of 95 characters, streamlining the encoding process. The method now utilizes a single loop for both left and right digit groups, resulting in a performance improvement of approximately 213%, reducing the mean execution time from around 470 ns to about 150 ns per call.",
          "timestamp": "2025-08-17T17:35:44+02:00",
          "tree_id": "06575899d43310dab8f314045dbeac5d9e71fbeb",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/f251453f416923819fdfce4ce1fc6ce838450e60"
        },
        "date": 1755445315796,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 17881.76626078288,
            "unit": "ns",
            "range": "± 63.16379614192525"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19785.21316763071,
            "unit": "ns",
            "range": "± 215.25879579627"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25541.744973989633,
            "unit": "ns",
            "range": "± 89.8256655700921"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 41196.6719548152,
            "unit": "ns",
            "range": "± 152.9478725808939"
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
          "id": "e7269c582e3f0241af4a899d01002ae3e83975cd",
          "message": "Optimize UPC-A barcode encoding in UpcaEncoder.cs\n\nRefactored the `EncodeBars` method to eliminate `StringBuilder` usage, replacing it with a stack-allocated `Span<char>` for direct character copying. This change reduces dynamic memory allocations and simplifies the encoding logic. Performance improvements are significant, with execution time reduced from ~380 ns to ~130 ns per call, achieving a 192% speedup.",
          "timestamp": "2025-08-17T17:47:07+02:00",
          "tree_id": "f7de10bc5be421deb2603518cbb1eabb1da21756",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/e7269c582e3f0241af4a899d01002ae3e83975cd"
        },
        "date": 1755446003605,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 17728.245197002703,
            "unit": "ns",
            "range": "± 114.765287410474"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19512.79530843099,
            "unit": "ns",
            "range": "± 101.46334135066661"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25375.866861196664,
            "unit": "ns",
            "range": "± 85.53069030665925"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40466.75107046274,
            "unit": "ns",
            "range": "± 168.73298163237428"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T17:58:14+02:00",
          "tree_id": "a33fbcf787984c6f0a003d25ada19c87b11302d8",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1755446671267,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18212.368822370256,
            "unit": "ns",
            "range": "± 121.57413273132283"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20395.361910306492,
            "unit": "ns",
            "range": "± 157.79643489360882"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25434.824493408203,
            "unit": "ns",
            "range": "± 84.30208663183272"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40490.07251915565,
            "unit": "ns",
            "range": "± 166.08959744270572"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1755995772500,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 17339.184409005302,
            "unit": "ns",
            "range": "± 180.35128670555605"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19472.747461954754,
            "unit": "ns",
            "range": "± 269.22260414442206"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25710.319593157088,
            "unit": "ns",
            "range": "± 133.2367478165968"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 39981.14043172201,
            "unit": "ns",
            "range": "± 123.6874674542821"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1756600496708,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 18354.559951782227,
            "unit": "ns",
            "range": "± 70.65346211028478"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 20981.29461669922,
            "unit": "ns",
            "range": "± 215.03534937511097"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25406.753659761867,
            "unit": "ns",
            "range": "± 55.72848900108771"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40487.28226928711,
            "unit": "ns",
            "range": "± 304.5278907963615"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1757205261433,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.SimpleInstance",
            "value": 17449.592700664813,
            "unit": "ns",
            "range": "± 91.22237197149107"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.AdvancedInstance",
            "value": 19507.21519978841,
            "unit": "ns",
            "range": "± 245.36074503011073"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithoutText",
            "value": 25520.687947591145,
            "unit": "ns",
            "range": "± 72.95462803829044"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.UpcaEncoder.EncodingWithText",
            "value": 40326.93208821615,
            "unit": "ns",
            "range": "± 487.8934648988188"
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
        "date": 1755032315636,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 19107.07260131836,
            "unit": "ns",
            "range": "± 419.89832232924977"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 21250.126804896765,
            "unit": "ns",
            "range": "± 314.5696980982167"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24050.397161630484,
            "unit": "ns",
            "range": "± 65.72539626964588"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37154.375760591945,
            "unit": "ns",
            "range": "± 179.12499520335393"
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
          "id": "25ffb38bcc6184917c4cddab715b831842aaf4df",
          "message": "Merge pull request #24 from TyKonKet/copilot/fix-17\n\nAdd TextColor property for independent barcode text color control",
          "timestamp": "2025-08-12T23:55:32+02:00",
          "tree_id": "899e8029342be61f44e3de2941b3c5631e303ce4",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/25ffb38bcc6184917c4cddab715b831842aaf4df"
        },
        "date": 1755036138694,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 19661.48425807723,
            "unit": "ns",
            "range": "± 1014.2319293035289"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 21006.27935573033,
            "unit": "ns",
            "range": "± 185.9256355629969"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24044.30811016376,
            "unit": "ns",
            "range": "± 102.43745103791744"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36874.048569899336,
            "unit": "ns",
            "range": "± 97.8821155636571"
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
          "id": "37d5d7338e0c1f6d301417f04dd7255cf22e999f",
          "message": "Refactor barcode encoder classes to use nullable types for properties and improve exception handling in EncodersFactory",
          "timestamp": "2025-08-13T22:00:39+02:00",
          "tree_id": "3b8936c2b2ae115957ebe1c5a81c4271edcb3dfd",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/37d5d7338e0c1f6d301417f04dd7255cf22e999f"
        },
        "date": 1755115738925,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 20414.866727556502,
            "unit": "ns",
            "range": "± 575.1488568536271"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 22182.849290211994,
            "unit": "ns",
            "range": "± 566.5107224538913"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24636.591947428384,
            "unit": "ns",
            "range": "± 250.83251814235322"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37136.427729679985,
            "unit": "ns",
            "range": "± 157.5964608313369"
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
          "id": "0eb016c5d87e38bb28299eb9eeb6368e08040b57",
          "message": "Refactor benchmarks and simplify TypeCache initialization\n\nComment out various benchmark jobs in BenchmarkConfig.cs, focusing on .NET 10.0.\nSimplify the initialization of TypeCache in EncodersFactory.cs using target-typed new expression for improved readability.",
          "timestamp": "2025-08-13T22:09:42+02:00",
          "tree_id": "e8d89d1dbf7cd0f17b70eb01df5ca86f1764c746",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/0eb016c5d87e38bb28299eb9eeb6368e08040b57"
        },
        "date": 1755116178265,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 19988.220164707727,
            "unit": "ns",
            "range": "± 164.73643936226046"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 21865.203095656176,
            "unit": "ns",
            "range": "± 252.70481625275823"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23763.25038655599,
            "unit": "ns",
            "range": "± 290.4172542671166"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36708.024287632536,
            "unit": "ns",
            "range": "± 442.61871608693747"
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
          "id": "8523f367cec2d0fa32462a9730e348ea848e143a",
          "message": "Improve encoder creation\n\n- Refactored encoder creation in `EncodersFactory.cs` to use LINQ, enhancing efficiency and error handling.\n- Added `performance-improvements.md` to document performance enhancements, starting with a 6.4% improvement in `EncodersFactory.Create`.\n- Introduced `EncodersFactoryBenchmark.cs` for benchmarking the encoder creation process using BenchmarkDotNet.",
          "timestamp": "2025-08-13T22:26:57+02:00",
          "tree_id": "2964a2d8acf3dfb1b744f38907f2aabeacd49e7e",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/8523f367cec2d0fa32462a9730e348ea848e143a"
        },
        "date": 1755117227669,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18963.16668701172,
            "unit": "ns",
            "range": "± 208.00259045313814"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20800.73745727539,
            "unit": "ns",
            "range": "± 240.58899045452483"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24447.64038672814,
            "unit": "ns",
            "range": "± 64.64919335208359"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37553.05033874512,
            "unit": "ns",
            "range": "± 80.04685043170532"
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
          "id": "23aa334d7d9f6890fc39c3be071c2c7ecbfc3793",
          "message": "Optimize GetDisplayName method and add benchmarks\n\nUpdated project to target multiple frameworks.\nEnhanced GetDisplayName with caching for improved performance, reducing execution time from 370.7 ns to 1.931 ns.\nAdded performance improvement details to the documentation.\nIntroduced a benchmark class for performance measurement and added unit tests to validate functionality.",
          "timestamp": "2025-08-13T22:37:28+02:00",
          "tree_id": "56d53130d2537377d8a44e7a5c11b36219d798b4",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/23aa334d7d9f6890fc39c3be071c2c7ecbfc3793"
        },
        "date": 1755117828000,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18512.433619181316,
            "unit": "ns",
            "range": "± 117.49284611016536"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20346.455206064078,
            "unit": "ns",
            "range": "± 209.1047376138215"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23896.199315388996,
            "unit": "ns",
            "range": "± 50.79273246588772"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37047.37137075571,
            "unit": "ns",
            "range": "± 222.1490180606262"
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
          "id": "ff57471ddac43aa8c130d501741ffbfe4e0028c7",
          "message": "Add method optimization guidelines to documentation\n\nIntroduced a \"Method Optimization Todo List\" in the\n`method-optimization-todo.md` file. This includes a\nstructured approach for optimizing methods in the\nBarcodeGenerator library, covering steps for\nbenchmarking, code optimization, validation, and\ndocumentation. Best practices and lessons learned\nare also provided to assist developers in effective\nmethod optimizations.",
          "timestamp": "2025-08-13T22:45:33+02:00",
          "tree_id": "f83b1d2754b2e12ef5d46a6be9b5ac676d7a08ba",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/ff57471ddac43aa8c130d501741ffbfe4e0028c7"
        },
        "date": 1755118288540,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 19318.685478797324,
            "unit": "ns",
            "range": "± 262.91627478550265"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 19434.72553898738,
            "unit": "ns",
            "range": "± 230.42665225893006"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23591.684146587664,
            "unit": "ns",
            "range": "± 49.00219294948753"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36860.04805501302,
            "unit": "ns",
            "range": "± 102.8267636348572"
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
          "id": "b55d345f48268163c54277b0f9cbe97a501336af",
          "message": "Enhance method optimization documentation with detailed checklists and validation steps",
          "timestamp": "2025-08-13T23:42:55+02:00",
          "tree_id": "2cbf5d66d9aec210ef4791b5d6a67dae9bd50204",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/b55d345f48268163c54277b0f9cbe97a501336af"
        },
        "date": 1755121772751,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 19320.888185388903,
            "unit": "ns",
            "range": "± 371.88174356167525"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 21234.738401285806,
            "unit": "ns",
            "range": "± 330.0134537246236"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23838.83474222819,
            "unit": "ns",
            "range": "± 204.78394166982395"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36836.70491379958,
            "unit": "ns",
            "range": "± 208.729076622117"
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
          "id": "531d9e2bd4dd0674b7cd4176a6488ee77209a7a7",
          "message": "Merge pull request #26 from TyKonKet/copilot/fix-25\n\nComprehensive Improvements to Unit Test Suite: Coverage, Naming, Organization, and Code Quality",
          "timestamp": "2025-08-14T14:19:20+02:00",
          "tree_id": "71cf58680508458f562f81434f2abde5d3239f90",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/531d9e2bd4dd0674b7cd4176a6488ee77209a7a7"
        },
        "date": 1755174331817,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18972.095584869385,
            "unit": "ns",
            "range": "± 354.25180705908275"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20494.423945835657,
            "unit": "ns",
            "range": "± 321.73903901787696"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24024.603958129883,
            "unit": "ns",
            "range": "± 74.03324793299755"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37444.985068184986,
            "unit": "ns",
            "range": "± 226.41369293647946"
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
          "id": "7c56972ac49cdc002ee46a4f42b6fe64f2c0b56c",
          "message": "Refactor copilot instructions for clarity and conciseness; update build and testing sections",
          "timestamp": "2025-08-14T15:34:41+02:00",
          "tree_id": "4c63e781931a7b1f344ecf7fe5a5e10e90b4636b",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/7c56972ac49cdc002ee46a4f42b6fe64f2c0b56c"
        },
        "date": 1755179068783,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 20753.31776071102,
            "unit": "ns",
            "range": "± 802.720738045035"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 22019.410189233644,
            "unit": "ns",
            "range": "± 1463.5499908869065"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24722.984533691408,
            "unit": "ns",
            "range": "± 383.3324360522637"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37455.61016845703,
            "unit": "ns",
            "range": "± 358.0262804979265"
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
          "id": "2befe61d8781159d458d302fbba84975e2c1d53f",
          "message": "chore: update contributing guidelines for clarity and accessibility",
          "timestamp": "2025-08-14T15:43:39+02:00",
          "tree_id": "2ef2974b9aa4316c1da556254d4cf5c1f5de2d1a",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/2befe61d8781159d458d302fbba84975e2c1d53f"
        },
        "date": 1755179475226,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 19529.272450038367,
            "unit": "ns",
            "range": "± 264.85752721591354"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 21797.99984741211,
            "unit": "ns",
            "range": "± 388.46573859826344"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23811.52409010667,
            "unit": "ns",
            "range": "± 105.61599113659457"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37751.088134765625,
            "unit": "ns",
            "range": "± 145.64796464859964"
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
          "id": "bb8c1ebe47db01437e1ba57fdb2ea70f8cfe475c",
          "message": "chore: enhance documentation with improved security policy and reporting guidelines",
          "timestamp": "2025-08-14T15:52:07+02:00",
          "tree_id": "533f2339132c11b8d80133c4857f4cfe348a3776",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/bb8c1ebe47db01437e1ba57fdb2ea70f8cfe475c"
        },
        "date": 1755179921625,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18662.905123029435,
            "unit": "ns",
            "range": "± 246.7360765079493"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20767.544872029623,
            "unit": "ns",
            "range": "± 375.0498559988611"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24059.924830510066,
            "unit": "ns",
            "range": "± 76.47733580086553"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37359.37407977764,
            "unit": "ns",
            "range": "± 106.61102890200385"
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
          "id": "832779376fa86a0b76e80cc75833531106222113",
          "message": "Update project configuration and documentation standards\n\n- Enhanced `.editorconfig` for StyleCop diagnostics and naming styles.\n- Modified `.gitattributes` for proper diff handling of C# and image files.\n- Updated `Directory.Build.props` to include `stylecop.json` and improved build properties.\n- Added copyright and licensing information to multiple source files for standardization.\n- Restructured `TyKonKet.BarcodeGenerator.csproj` for better organization and added new dependencies.\n- Created `stylecop.json` to enforce coding standards with specific rules.\n- Ensured consistency in namespaces and documentation across various classes and methods.",
          "timestamp": "2025-08-15T22:42:37+02:00",
          "tree_id": "3566dce76cc6b2030def2be60493fd51288e601f",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/832779376fa86a0b76e80cc75833531106222113"
        },
        "date": 1755290968279,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 19181.09627356896,
            "unit": "ns",
            "range": "± 230.15075533510299"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20881.739149827223,
            "unit": "ns",
            "range": "± 186.20480223658438"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23943.589638343223,
            "unit": "ns",
            "range": "± 97.71544198368963"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36953.326190185544,
            "unit": "ns",
            "range": "± 390.5868295880957"
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
          "id": "30468121833fd68d9331b038921c369fa1423143",
          "message": "chore: update README with roadmap link and bug report template",
          "timestamp": "2025-08-15T23:23:36+02:00",
          "tree_id": "cd78400d74a372c4015d5c5df3e65fde69d24589",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/30468121833fd68d9331b038921c369fa1423143"
        },
        "date": 1755293459802,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 19704.859686715263,
            "unit": "ns",
            "range": "± 225.9178095180936"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 21898.255589076452,
            "unit": "ns",
            "range": "± 365.7001824829494"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24377.10498758952,
            "unit": "ns",
            "range": "± 172.6240970777464"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37547.99136352539,
            "unit": "ns",
            "range": "± 216.02046074947347"
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
          "id": "e895e1f420f1612077a6a4a8709ad7ee74ae6fa7",
          "message": "Enhance performance optimization documentation\n\nUpdated `Perf.chatmode.md` to define the role of the performance optimization specialist for the BarcodeGenerator .NET library, emphasizing a strict 8-step optimization process, key performance areas, and response guidelines.\n\nRevised `Perf-Opt.prompt.md` to clarify the structure for optimizing method performance, including requirements for measuring performance baselines and maintaining API compatibility.\n\nModified `method-optimization-todo.md` to include critical reminders for benchmark setup, the importance of using the latest .NET framework, and best practices for isolating benchmarks.",
          "timestamp": "2025-08-16T17:02:25+02:00",
          "tree_id": "395f476e21e31a4a6f25bf03b442cb510de081ba",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/e895e1f420f1612077a6a4a8709ad7ee74ae6fa7"
        },
        "date": 1755356935544,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18687.37553914388,
            "unit": "ns",
            "range": "± 395.7216797730869"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 20343.73636333759,
            "unit": "ns",
            "range": "± 282.68904270047375"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23242.83477783203,
            "unit": "ns",
            "range": "± 83.19484596565938"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36669.06095064603,
            "unit": "ns",
            "range": "± 140.6898672591946"
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
          "id": "8713363357770fe7be7ef909053d2d8c814cc2c0",
          "message": "Optimize EncodersFactory for performance by implementing factory delegate caching and reducing reflection overhead",
          "timestamp": "2025-08-16T17:36:49+02:00",
          "tree_id": "906bf6526771ea4c177b8d518177ba5c1f75ce8c",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/8713363357770fe7be7ef909053d2d8c814cc2c0"
        },
        "date": 1755358954803,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 17473.15301513672,
            "unit": "ns",
            "range": "± 126.34726223065135"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 18230.080474853516,
            "unit": "ns",
            "range": "± 193.89275567846278"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23521.2047068278,
            "unit": "ns",
            "range": "± 49.233969593754566"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36764.14772855319,
            "unit": "ns",
            "range": "± 220.2032508377437"
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
          "id": "87979799f6fb3504788a69400944a86efcbb4c0a",
          "message": "Enhance EncodersFactory with new tests and optimizations\n\nUpdated `EncodersFactoryTests.cs` to add tests for factory delegate creation, including handling null options and abstract types. Removed unused `using` directive in `Barcode.cs`. Rewrote `EncodersFactory.cs` to utilize compiled expressions for improved performance, with enhanced error handling and caching for encoder types.",
          "timestamp": "2025-08-16T21:00:00+02:00",
          "tree_id": "8cbe8fec96a052762a78a9efde5dd6156cdaf2c0",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/87979799f6fb3504788a69400944a86efcbb4c0a"
        },
        "date": 1755371196716,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 17028.502159705527,
            "unit": "ns",
            "range": "± 78.3871813548465"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 19231.67714436849,
            "unit": "ns",
            "range": "± 87.42031353233992"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23797.36996459961,
            "unit": "ns",
            "range": "± 156.86252021997512"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36646.598219651445,
            "unit": "ns",
            "range": "± 176.56540054524334"
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
          "id": "63872c34748216333c1d447d15c2467d9b092a5c",
          "message": "Refactor filename handling in Encoder class and enhance tests for placeholder replacements",
          "timestamp": "2025-08-16T21:26:39+02:00",
          "tree_id": "d6acc480b626c019e53689877b44a0dc6e6e912c",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/63872c34748216333c1d447d15c2467d9b092a5c"
        },
        "date": 1755372742254,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 17243.631321498327,
            "unit": "ns",
            "range": "± 154.07059377651953"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 19046.157915387834,
            "unit": "ns",
            "range": "± 184.64564629934927"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23694.760688194863,
            "unit": "ns",
            "range": "± 107.69243805039339"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36398.53679911295,
            "unit": "ns",
            "range": "± 186.63610129407127"
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
          "id": "41e7a7df946025203f39bcdf6b042b110528a81e",
          "message": "Update filename validation tests for OS compatibility\n\nEnhanced `GetSafeFilename_ShouldRemoveAllInvalidCharacters`\nto support separate expected outputs for Windows and Linux.\nTest cases now reflect the appropriate expected values\nbased on the detected operating system at runtime.",
          "timestamp": "2025-08-16T21:43:50+02:00",
          "tree_id": "f2268eb9d256a9014c79773a34f73c8046a199ff",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/41e7a7df946025203f39bcdf6b042b110528a81e"
        },
        "date": 1755373785868,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 17449.270357572117,
            "unit": "ns",
            "range": "± 57.97588844605618"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 18249.026448567707,
            "unit": "ns",
            "range": "± 98.90777275406113"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23676.064065786508,
            "unit": "ns",
            "range": "± 92.03342726505122"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36738.69003530649,
            "unit": "ns",
            "range": "± 132.87497891773037"
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
          "id": "d4a1b1381cdc727fc46301f446d5c819e3bdaf36",
          "message": "Update performance documentation to clarify benchmark usage and optimization processes",
          "timestamp": "2025-08-16T21:53:59+02:00",
          "tree_id": "3831719ed2487f5eb7bb03dbb5484a9dde7d3be9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/d4a1b1381cdc727fc46301f446d5c819e3bdaf36"
        },
        "date": 1755374382136,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 17595.113141741072,
            "unit": "ns",
            "range": "± 123.77110542624624"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 18307.683263142902,
            "unit": "ns",
            "range": "± 200.69936346585695"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24127.471756998697,
            "unit": "ns",
            "range": "± 169.09241842744754"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36682.41266276042,
            "unit": "ns",
            "range": "± 424.3272308447281"
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
          "id": "67421de11ccb29af88d08929d11d332c5952fee4",
          "message": "Update filename tests for extreme quality values\n\nModified the `GetFinalFileName_ShouldHandleExtremeQualityValues` method by removing the test case for `\"test\\\\filename?.png\"` and adding a new case for `\"test\\\\file/name?.png\"`. This ensures better handling of invalid characters in file names across different operating systems.",
          "timestamp": "2025-08-16T21:58:37+02:00",
          "tree_id": "f50de7fe049a40ba10566b001c5d44209ea5b767",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/67421de11ccb29af88d08929d11d332c5952fee4"
        },
        "date": 1755374672174,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 16668.21310933431,
            "unit": "ns",
            "range": "± 128.38618494774292"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 18493.3510538737,
            "unit": "ns",
            "range": "± 114.13692629909117"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24207.903299184945,
            "unit": "ns",
            "range": "± 54.95952071614528"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37714.94464111328,
            "unit": "ns",
            "range": "± 208.17536635107604"
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
          "id": "35748ee44a2954455df985e0e34f7e6616582e7e",
          "message": "Refactor filename formatting for .NET 6 compatibility",
          "timestamp": "2025-08-16T22:56:15+02:00",
          "tree_id": "c64b4754eea962f55253b996dde1ecc7ecaf3dd9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/35748ee44a2954455df985e0e34f7e6616582e7e"
        },
        "date": 1755378175332,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18369.562406099758,
            "unit": "ns",
            "range": "± 132.83765500351126"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 19379.41259256999,
            "unit": "ns",
            "range": "± 168.56234128339548"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23706.69022478376,
            "unit": "ns",
            "range": "± 245.33847840106657"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36668.28015645345,
            "unit": "ns",
            "range": "± 74.2883174392342"
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
          "id": "46b45f85cea73fafd90a92e61ba715b2774d9998",
          "message": "Add global benchmark results and refactor encoders\n\n- Updated `dotnet_benchmark_runner.yml` to include a step for storing global benchmark results using `benchmark-action/github-action-benchmark@v1`.\n- Refactored multiple encoder classes to remove unused constants and change method return types from void to string.\n- Changed `RegexCache` class visibility from internal to public.\n- Introduced a new `Global` class in `Global.cs` for benchmark tests on barcode export functionalities and regex validation.",
          "timestamp": "2025-08-16T23:53:46+02:00",
          "tree_id": "5c401796ad6525b246cf49f829094aa44c2413de",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/46b45f85cea73fafd90a92e61ba715b2774d9998"
        },
        "date": 1755382876501,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 17410.373845027043,
            "unit": "ns",
            "range": "± 52.09578902754613"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 19100.37610880534,
            "unit": "ns",
            "range": "± 72.14571328216878"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24161.97960335868,
            "unit": "ns",
            "range": "± 106.7234812896059"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37351.09907883864,
            "unit": "ns",
            "range": "± 111.56756318381295"
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
          "id": "46b45f85cea73fafd90a92e61ba715b2774d9998",
          "message": "Add global benchmark results and refactor encoders\n\n- Updated `dotnet_benchmark_runner.yml` to include a step for storing global benchmark results using `benchmark-action/github-action-benchmark@v1`.\n- Refactored multiple encoder classes to remove unused constants and change method return types from void to string.\n- Changed `RegexCache` class visibility from internal to public.\n- Introduced a new `Global` class in `Global.cs` for benchmark tests on barcode export functionalities and regex validation.",
          "timestamp": "2025-08-16T21:53:46Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/46b45f85cea73fafd90a92e61ba715b2774d9998"
        },
        "date": 1755391019693,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 16928.719560895646,
            "unit": "ns",
            "range": "± 200.1388545562606"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 18866.860826764787,
            "unit": "ns",
            "range": "± 205.53072446483029"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23888.57870600774,
            "unit": "ns",
            "range": "± 113.57156744945564"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37588.619873046875,
            "unit": "ns",
            "range": "± 227.2057235069185"
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
          "id": "e2ec2ffe5d960fcb0f925f82403e74120d0b2fb2",
          "message": "Cleanup of Program.cs in Playground project",
          "timestamp": "2025-08-17T15:06:34+02:00",
          "tree_id": "f499e13126506d8706361f91fb5af112b579bfa9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/e2ec2ffe5d960fcb0f925f82403e74120d0b2fb2"
        },
        "date": 1755436379648,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 17006.87651179387,
            "unit": "ns",
            "range": "± 45.71486694244783"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 19317.48602294922,
            "unit": "ns",
            "range": "± 427.98661586634944"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24104.74012169471,
            "unit": "ns",
            "range": "± 65.6089889482725"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36835.97880671574,
            "unit": "ns",
            "range": "± 165.54314809050106"
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
          "id": "315ef2c7cd5c5cc399a8d0f8aeeaa9d2ebda26be",
          "message": "Refactor EAN encoder tests to use char instead of string for expected check digits; optimize FormatBarcode method for performance improvements and update documentation with benchmark results.",
          "timestamp": "2025-08-17T16:28:27+02:00",
          "tree_id": "03e3f5f86aaa198f9d3fe93e7595457a884ad7f0",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/315ef2c7cd5c5cc399a8d0f8aeeaa9d2ebda26be"
        },
        "date": 1755441283998,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18072.302602914664,
            "unit": "ns",
            "range": "± 95.26745574824271"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 19067.88981628418,
            "unit": "ns",
            "range": "± 81.78084943564787"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23723.243456159318,
            "unit": "ns",
            "range": "± 127.478252380431"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36552.17288208008,
            "unit": "ns",
            "range": "± 119.25077915042047"
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
          "id": "3df9a62edad191ed3d046ef07ac9cfa52178f137",
          "message": "Optimize EAN-8 barcode encoding for performance\n\nRefactored the `EncodeBars` method in `Ean8Encoder.cs` to replace `StringBuilder` with a stack-allocated `Span<char>`, eliminating heap allocations. This change enhances performance by directly copying encoded characters into a pre-allocated buffer. Performance improvements include a 107% increase in execution speed and a 72% reduction in memory allocation, as documented in `performance-improvements.md`.",
          "timestamp": "2025-08-17T17:13:29+02:00",
          "tree_id": "5a8abb78266c13bc9e96547f67492ad15f0b0ed9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/3df9a62edad191ed3d046ef07ac9cfa52178f137"
        },
        "date": 1755443987057,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 17498.117721557617,
            "unit": "ns",
            "range": "± 110.85972472445253"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 18603.732578822546,
            "unit": "ns",
            "range": "± 166.8931503896107"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23480.878065842848,
            "unit": "ns",
            "range": "± 62.248108365900535"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37000.2534223284,
            "unit": "ns",
            "range": "± 174.02700901673228"
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
          "id": "873ba41654425b64cd1e78be4df5866c1da296d9",
          "message": "Refine optimization process documentation to clarify benchmarking steps and emphasize the importance of method duplication for baseline preservation.",
          "timestamp": "2025-08-17T17:21:08+02:00",
          "tree_id": "a4774b14c1ec647e8b7f5b9068c1764c3e88dc97",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/873ba41654425b64cd1e78be4df5866c1da296d9"
        },
        "date": 1755444448698,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18017.078735351562,
            "unit": "ns",
            "range": "± 56.59273447197643"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 18878.421347481864,
            "unit": "ns",
            "range": "± 186.56980050340164"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23876.357704749473,
            "unit": "ns",
            "range": "± 131.0023792530928"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36796.16205851237,
            "unit": "ns",
            "range": "± 144.94698904083344"
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
          "id": "f251453f416923819fdfce4ce1fc6ce838450e60",
          "message": "Optimize Ean13Encoder.EncodeBars for performance\n\nThe `EncodeBars` method in `Ean13Encoder.cs` has been refactored to eliminate allocations by replacing `StringBuilder` with a stack-allocated `Span<char>`. This allows for direct character copying into a pre-calculated buffer of 95 characters, streamlining the encoding process. The method now utilizes a single loop for both left and right digit groups, resulting in a performance improvement of approximately 213%, reducing the mean execution time from around 470 ns to about 150 ns per call.",
          "timestamp": "2025-08-17T17:35:44+02:00",
          "tree_id": "06575899d43310dab8f314045dbeac5d9e71fbeb",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/f251453f416923819fdfce4ce1fc6ce838450e60"
        },
        "date": 1755445317384,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 18155.10441371373,
            "unit": "ns",
            "range": "± 143.46331219340604"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 19157.872924804688,
            "unit": "ns",
            "range": "± 97.91693702078142"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 24000.756994628908,
            "unit": "ns",
            "range": "± 395.5698830549439"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36929.832188924156,
            "unit": "ns",
            "range": "± 157.7557342691311"
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
          "id": "e7269c582e3f0241af4a899d01002ae3e83975cd",
          "message": "Optimize UPC-A barcode encoding in UpcaEncoder.cs\n\nRefactored the `EncodeBars` method to eliminate `StringBuilder` usage, replacing it with a stack-allocated `Span<char>` for direct character copying. This change reduces dynamic memory allocations and simplifies the encoding logic. Performance improvements are significant, with execution time reduced from ~380 ns to ~130 ns per call, achieving a 192% speedup.",
          "timestamp": "2025-08-17T17:47:07+02:00",
          "tree_id": "f7de10bc5be421deb2603518cbb1eabb1da21756",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/e7269c582e3f0241af4a899d01002ae3e83975cd"
        },
        "date": 1755446004546,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 16752.580191476005,
            "unit": "ns",
            "range": "± 91.53104194363695"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 18596.335562569755,
            "unit": "ns",
            "range": "± 158.34967514461923"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23770.07215529222,
            "unit": "ns",
            "range": "± 128.24457992257072"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36696.14803568522,
            "unit": "ns",
            "range": "± 59.32045738150078"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T17:58:14+02:00",
          "tree_id": "a33fbcf787984c6f0a003d25ada19c87b11302d8",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1755446672374,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 17102.80484008789,
            "unit": "ns",
            "range": "± 106.91939175539727"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 19169.905192057293,
            "unit": "ns",
            "range": "± 240.97749441032025"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23892.42365112305,
            "unit": "ns",
            "range": "± 179.98271365919075"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36639.56371561686,
            "unit": "ns",
            "range": "± 47.97441315457863"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1755995774448,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 17674.277071439305,
            "unit": "ns",
            "range": "± 140.52453294043517"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 18492.34113566081,
            "unit": "ns",
            "range": "± 86.73561186177602"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23827.02960510254,
            "unit": "ns",
            "range": "± 324.35415150405"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36047.111684945914,
            "unit": "ns",
            "range": "± 111.97186323377203"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1756600498537,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 17805.696655273438,
            "unit": "ns",
            "range": "± 144.18707527593187"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 19731.20311991374,
            "unit": "ns",
            "range": "± 284.9385130050946"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23878.017902919226,
            "unit": "ns",
            "range": "± 64.11719844541614"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 37006.23430926983,
            "unit": "ns",
            "range": "± 113.0389060129108"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1757205263338,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.SimpleInstance",
            "value": 16945.4976109096,
            "unit": "ns",
            "range": "± 136.16047020222132"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.AdvancedInstance",
            "value": 19093.917018345423,
            "unit": "ns",
            "range": "± 249.05700748336454"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithoutText",
            "value": 23845.070587158203,
            "unit": "ns",
            "range": "± 76.86383410613706"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Isbn13Encoder.EncodingWithText",
            "value": 36705.32232157389,
            "unit": "ns",
            "range": "± 74.8059495738646"
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
        "date": 1755032316846,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 750.9260595185416,
            "unit": "ns",
            "range": "± 9.96007730927614"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2295.05617380778,
            "unit": "ns",
            "range": "± 115.59749354539464"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40654.018334960936,
            "unit": "ns",
            "range": "± 288.8039604156809"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 54035.764795939125,
            "unit": "ns",
            "range": "± 108.39830664194085"
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
          "id": "25ffb38bcc6184917c4cddab715b831842aaf4df",
          "message": "Merge pull request #24 from TyKonKet/copilot/fix-17\n\nAdd TextColor property for independent barcode text color control",
          "timestamp": "2025-08-12T23:55:32+02:00",
          "tree_id": "899e8029342be61f44e3de2941b3c5631e303ce4",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/25ffb38bcc6184917c4cddab715b831842aaf4df"
        },
        "date": 1755036139621,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 766.4419167591975,
            "unit": "ns",
            "range": "± 7.187892904256201"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2189.3169562298317,
            "unit": "ns",
            "range": "± 53.01328145603271"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40825.56001399113,
            "unit": "ns",
            "range": "± 174.1867120017199"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 54131.04485066732,
            "unit": "ns",
            "range": "± 134.0713929855711"
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
          "id": "37d5d7338e0c1f6d301417f04dd7255cf22e999f",
          "message": "Refactor barcode encoder classes to use nullable types for properties and improve exception handling in EncodersFactory",
          "timestamp": "2025-08-13T22:00:39+02:00",
          "tree_id": "3b8936c2b2ae115957ebe1c5a81c4271edcb3dfd",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/37d5d7338e0c1f6d301417f04dd7255cf22e999f"
        },
        "date": 1755115740035,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 837.9429768113529,
            "unit": "ns",
            "range": "± 26.436789951228352"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2362.625304500262,
            "unit": "ns",
            "range": "± 196.4101649717265"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41527.921142578125,
            "unit": "ns",
            "range": "± 598.282209952392"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55821.991430664064,
            "unit": "ns",
            "range": "± 660.1658033892777"
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
          "id": "0eb016c5d87e38bb28299eb9eeb6368e08040b57",
          "message": "Refactor benchmarks and simplify TypeCache initialization\n\nComment out various benchmark jobs in BenchmarkConfig.cs, focusing on .NET 10.0.\nSimplify the initialization of TypeCache in EncodersFactory.cs using target-typed new expression for improved readability.",
          "timestamp": "2025-08-13T22:09:42+02:00",
          "tree_id": "e8d89d1dbf7cd0f17b70eb01df5ca86f1764c746",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/0eb016c5d87e38bb28299eb9eeb6368e08040b57"
        },
        "date": 1755116179138,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 813.2505523363749,
            "unit": "ns",
            "range": "± 17.198356001470167"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2506.480220094019,
            "unit": "ns",
            "range": "± 98.29228727046304"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41215.240614827475,
            "unit": "ns",
            "range": "± 357.65677179103255"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55718.30782376803,
            "unit": "ns",
            "range": "± 237.8568733259048"
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
          "id": "8523f367cec2d0fa32462a9730e348ea848e143a",
          "message": "Improve encoder creation\n\n- Refactored encoder creation in `EncodersFactory.cs` to use LINQ, enhancing efficiency and error handling.\n- Added `performance-improvements.md` to document performance enhancements, starting with a 6.4% improvement in `EncodersFactory.Create`.\n- Introduced `EncodersFactoryBenchmark.cs` for benchmarking the encoder creation process using BenchmarkDotNet.",
          "timestamp": "2025-08-13T22:26:57+02:00",
          "tree_id": "2964a2d8acf3dfb1b744f38907f2aabeacd49e7e",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/8523f367cec2d0fa32462a9730e348ea848e143a"
        },
        "date": 1755117229216,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 844.1916233062744,
            "unit": "ns",
            "range": "± 13.080928987448651"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1966.4438946063701,
            "unit": "ns",
            "range": "± 25.179078413548986"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40750.24307759603,
            "unit": "ns",
            "range": "± 25.732822317699032"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55438.47465297154,
            "unit": "ns",
            "range": "± 270.30387453602117"
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
          "id": "23aa334d7d9f6890fc39c3be071c2c7ecbfc3793",
          "message": "Optimize GetDisplayName method and add benchmarks\n\nUpdated project to target multiple frameworks.\nEnhanced GetDisplayName with caching for improved performance, reducing execution time from 370.7 ns to 1.931 ns.\nAdded performance improvement details to the documentation.\nIntroduced a benchmark class for performance measurement and added unit tests to validate functionality.",
          "timestamp": "2025-08-13T22:37:28+02:00",
          "tree_id": "56d53130d2537377d8a44e7a5c11b36219d798b4",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/23aa334d7d9f6890fc39c3be071c2c7ecbfc3793"
        },
        "date": 1755117829120,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 818.0010638918195,
            "unit": "ns",
            "range": "± 12.460627267720657"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2034.889140537807,
            "unit": "ns",
            "range": "± 30.92483374048963"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40567.8631439209,
            "unit": "ns",
            "range": "± 84.9859849953161"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 54220.723541259766,
            "unit": "ns",
            "range": "± 374.7108475948487"
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
          "id": "ff57471ddac43aa8c130d501741ffbfe4e0028c7",
          "message": "Add method optimization guidelines to documentation\n\nIntroduced a \"Method Optimization Todo List\" in the\n`method-optimization-todo.md` file. This includes a\nstructured approach for optimizing methods in the\nBarcodeGenerator library, covering steps for\nbenchmarking, code optimization, validation, and\ndocumentation. Best practices and lessons learned\nare also provided to assist developers in effective\nmethod optimizations.",
          "timestamp": "2025-08-13T22:45:33+02:00",
          "tree_id": "f83b1d2754b2e12ef5d46a6be9b5ac676d7a08ba",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/ff57471ddac43aa8c130d501741ffbfe4e0028c7"
        },
        "date": 1755118289837,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 791.7717073880709,
            "unit": "ns",
            "range": "± 3.0951115909347457"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2016.184272257487,
            "unit": "ns",
            "range": "± 36.51262527388735"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40748.48599039714,
            "unit": "ns",
            "range": "± 263.8433693173617"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55180.83658708845,
            "unit": "ns",
            "range": "± 269.96654192755517"
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
          "id": "b55d345f48268163c54277b0f9cbe97a501336af",
          "message": "Enhance method optimization documentation with detailed checklists and validation steps",
          "timestamp": "2025-08-13T23:42:55+02:00",
          "tree_id": "2cbf5d66d9aec210ef4791b5d6a67dae9bd50204",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/b55d345f48268163c54277b0f9cbe97a501336af"
        },
        "date": 1755121774305,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 812.4817939646103,
            "unit": "ns",
            "range": "± 16.491277933411773"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2309.788518120261,
            "unit": "ns",
            "range": "± 47.416107355204055"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41182.54773966471,
            "unit": "ns",
            "range": "± 34.13755713513823"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55655.928842397836,
            "unit": "ns",
            "range": "± 174.8386167217734"
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
          "id": "531d9e2bd4dd0674b7cd4176a6488ee77209a7a7",
          "message": "Merge pull request #26 from TyKonKet/copilot/fix-25\n\nComprehensive Improvements to Unit Test Suite: Coverage, Naming, Organization, and Code Quality",
          "timestamp": "2025-08-14T14:19:20+02:00",
          "tree_id": "71cf58680508458f562f81434f2abde5d3239f90",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/531d9e2bd4dd0674b7cd4176a6488ee77209a7a7"
        },
        "date": 1755174332818,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 789.9304789861043,
            "unit": "ns",
            "range": "± 7.034187114788407"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1971.359375,
            "unit": "ns",
            "range": "± 31.601929666207173"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40624.74541015625,
            "unit": "ns",
            "range": "± 255.3319376439252"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 54823.94637858073,
            "unit": "ns",
            "range": "± 760.3492900521136"
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
          "id": "7c56972ac49cdc002ee46a4f42b6fe64f2c0b56c",
          "message": "Refactor copilot instructions for clarity and conciseness; update build and testing sections",
          "timestamp": "2025-08-14T15:34:41+02:00",
          "tree_id": "4c63e781931a7b1f344ecf7fe5a5e10e90b4636b",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/7c56972ac49cdc002ee46a4f42b6fe64f2c0b56c"
        },
        "date": 1755179069853,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 875.3893124898275,
            "unit": "ns",
            "range": "± 12.23700601006473"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2335.3648427327475,
            "unit": "ns",
            "range": "± 74.10001586563662"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41428.255310058594,
            "unit": "ns",
            "range": "± 362.7055052971642"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55116.43731689453,
            "unit": "ns",
            "range": "± 185.29016035988263"
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
          "id": "2befe61d8781159d458d302fbba84975e2c1d53f",
          "message": "chore: update contributing guidelines for clarity and accessibility",
          "timestamp": "2025-08-14T15:43:39+02:00",
          "tree_id": "2ef2974b9aa4316c1da556254d4cf5c1f5de2d1a",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/2befe61d8781159d458d302fbba84975e2c1d53f"
        },
        "date": 1755179476433,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 726.9912694295248,
            "unit": "ns",
            "range": "± 2.8141179243664185"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2063.7452251727764,
            "unit": "ns",
            "range": "± 23.492651634040413"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40936.99314528245,
            "unit": "ns",
            "range": "± 206.6452905832288"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55524.43694196428,
            "unit": "ns",
            "range": "± 218.86619458628405"
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
          "id": "bb8c1ebe47db01437e1ba57fdb2ea70f8cfe475c",
          "message": "chore: enhance documentation with improved security policy and reporting guidelines",
          "timestamp": "2025-08-14T15:52:07+02:00",
          "tree_id": "533f2339132c11b8d80133c4857f4cfe348a3776",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/bb8c1ebe47db01437e1ba57fdb2ea70f8cfe475c"
        },
        "date": 1755179922590,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 875.6132026399885,
            "unit": "ns",
            "range": "± 7.886404003975943"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2098.8563123430527,
            "unit": "ns",
            "range": "± 43.83342779486776"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41093.92304875301,
            "unit": "ns",
            "range": "± 91.54651590346865"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55068.882904052734,
            "unit": "ns",
            "range": "± 732.0988050731072"
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
          "id": "832779376fa86a0b76e80cc75833531106222113",
          "message": "Update project configuration and documentation standards\n\n- Enhanced `.editorconfig` for StyleCop diagnostics and naming styles.\n- Modified `.gitattributes` for proper diff handling of C# and image files.\n- Updated `Directory.Build.props` to include `stylecop.json` and improved build properties.\n- Added copyright and licensing information to multiple source files for standardization.\n- Restructured `TyKonKet.BarcodeGenerator.csproj` for better organization and added new dependencies.\n- Created `stylecop.json` to enforce coding standards with specific rules.\n- Ensured consistency in namespaces and documentation across various classes and methods.",
          "timestamp": "2025-08-15T22:42:37+02:00",
          "tree_id": "3566dce76cc6b2030def2be60493fd51288e601f",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/832779376fa86a0b76e80cc75833531106222113"
        },
        "date": 1755290969224,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 771.3404480389187,
            "unit": "ns",
            "range": "± 7.38159998926927"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2145.6415100097656,
            "unit": "ns",
            "range": "± 38.563102996046055"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40354.6945706881,
            "unit": "ns",
            "range": "± 116.38372224065542"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 54224.64600626627,
            "unit": "ns",
            "range": "± 539.1365811291327"
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
          "id": "30468121833fd68d9331b038921c369fa1423143",
          "message": "chore: update README with roadmap link and bug report template",
          "timestamp": "2025-08-15T23:23:36+02:00",
          "tree_id": "cd78400d74a372c4015d5c5df3e65fde69d24589",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/30468121833fd68d9331b038921c369fa1423143"
        },
        "date": 1755293460790,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 800.9373143513998,
            "unit": "ns",
            "range": "± 14.746916021962754"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2433.3164102890914,
            "unit": "ns",
            "range": "± 46.48718708045936"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40909.088431222095,
            "unit": "ns",
            "range": "± 214.52243731747123"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 53725.57316080729,
            "unit": "ns",
            "range": "± 375.3543658823395"
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
          "id": "e895e1f420f1612077a6a4a8709ad7ee74ae6fa7",
          "message": "Enhance performance optimization documentation\n\nUpdated `Perf.chatmode.md` to define the role of the performance optimization specialist for the BarcodeGenerator .NET library, emphasizing a strict 8-step optimization process, key performance areas, and response guidelines.\n\nRevised `Perf-Opt.prompt.md` to clarify the structure for optimizing method performance, including requirements for measuring performance baselines and maintaining API compatibility.\n\nModified `method-optimization-todo.md` to include critical reminders for benchmark setup, the importance of using the latest .NET framework, and best practices for isolating benchmarks.",
          "timestamp": "2025-08-16T17:02:25+02:00",
          "tree_id": "395f476e21e31a4a6f25bf03b442cb510de081ba",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/e895e1f420f1612077a6a4a8709ad7ee74ae6fa7"
        },
        "date": 1755356937063,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 733.2098483358111,
            "unit": "ns",
            "range": "± 6.525467733259456"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1932.8887410845075,
            "unit": "ns",
            "range": "± 26.99902950349868"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40334.19016676683,
            "unit": "ns",
            "range": "± 127.60621066529657"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 53882.400362141925,
            "unit": "ns",
            "range": "± 810.8379444257907"
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
          "id": "8713363357770fe7be7ef909053d2d8c814cc2c0",
          "message": "Optimize EncodersFactory for performance by implementing factory delegate caching and reducing reflection overhead",
          "timestamp": "2025-08-16T17:36:49+02:00",
          "tree_id": "906bf6526771ea4c177b8d518177ba5c1f75ce8c",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/8713363357770fe7be7ef909053d2d8c814cc2c0"
        },
        "date": 1755358956330,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 444.1754152224614,
            "unit": "ns",
            "range": "± 1.7757311301133272"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1725.9308005741664,
            "unit": "ns",
            "range": "± 12.36951219176035"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40450.930043538414,
            "unit": "ns",
            "range": "± 57.57970842244153"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 53178.17101033529,
            "unit": "ns",
            "range": "± 82.14404202931357"
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
          "id": "87979799f6fb3504788a69400944a86efcbb4c0a",
          "message": "Enhance EncodersFactory with new tests and optimizations\n\nUpdated `EncodersFactoryTests.cs` to add tests for factory delegate creation, including handling null options and abstract types. Removed unused `using` directive in `Barcode.cs`. Rewrote `EncodersFactory.cs` to utilize compiled expressions for improved performance, with enhanced error handling and caching for encoder types.",
          "timestamp": "2025-08-16T21:00:00+02:00",
          "tree_id": "8cbe8fec96a052762a78a9efde5dd6156cdaf2c0",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/87979799f6fb3504788a69400944a86efcbb4c0a"
        },
        "date": 1755371197929,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 419.7538077990214,
            "unit": "ns",
            "range": "± 6.558643236986148"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1801.8100972856794,
            "unit": "ns",
            "range": "± 9.543715869891251"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41022.4332838792,
            "unit": "ns",
            "range": "± 164.41026741411417"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 53552.27252901517,
            "unit": "ns",
            "range": "± 183.234901306022"
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
          "id": "63872c34748216333c1d447d15c2467d9b092a5c",
          "message": "Refactor filename handling in Encoder class and enhance tests for placeholder replacements",
          "timestamp": "2025-08-16T21:26:39+02:00",
          "tree_id": "d6acc480b626c019e53689877b44a0dc6e6e912c",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/63872c34748216333c1d447d15c2467d9b092a5c"
        },
        "date": 1755372743211,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 447.0293845494588,
            "unit": "ns",
            "range": "± 3.845687686434408"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1868.094258235051,
            "unit": "ns",
            "range": "± 13.222517960687073"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40791.46829223633,
            "unit": "ns",
            "range": "± 208.48429004900385"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 53693.86952718099,
            "unit": "ns",
            "range": "± 113.29625530638555"
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
          "id": "41e7a7df946025203f39bcdf6b042b110528a81e",
          "message": "Update filename validation tests for OS compatibility\n\nEnhanced `GetSafeFilename_ShouldRemoveAllInvalidCharacters`\nto support separate expected outputs for Windows and Linux.\nTest cases now reflect the appropriate expected values\nbased on the detected operating system at runtime.",
          "timestamp": "2025-08-16T21:43:50+02:00",
          "tree_id": "f2268eb9d256a9014c79773a34f73c8046a199ff",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/41e7a7df946025203f39bcdf6b042b110528a81e"
        },
        "date": 1755373787416,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 401.65518847755766,
            "unit": "ns",
            "range": "± 7.723756100762798"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1741.6400121961321,
            "unit": "ns",
            "range": "± 13.519362307357405"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40264.02015686035,
            "unit": "ns",
            "range": "± 131.77316231700877"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 54600.05466308594,
            "unit": "ns",
            "range": "± 680.979764327896"
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
          "id": "d4a1b1381cdc727fc46301f446d5c819e3bdaf36",
          "message": "Update performance documentation to clarify benchmark usage and optimization processes",
          "timestamp": "2025-08-16T21:53:59+02:00",
          "tree_id": "3831719ed2487f5eb7bb03dbb5484a9dde7d3be9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/d4a1b1381cdc727fc46301f446d5c819e3bdaf36"
        },
        "date": 1755374383076,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 442.50723631041393,
            "unit": "ns",
            "range": "± 1.3689988292034476"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1707.8189296722412,
            "unit": "ns",
            "range": "± 8.838425064221756"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40967.00421651205,
            "unit": "ns",
            "range": "± 55.18842423741105"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 54790.60467529297,
            "unit": "ns",
            "range": "± 243.00152998244454"
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
          "id": "67421de11ccb29af88d08929d11d332c5952fee4",
          "message": "Update filename tests for extreme quality values\n\nModified the `GetFinalFileName_ShouldHandleExtremeQualityValues` method by removing the test case for `\"test\\\\filename?.png\"` and adding a new case for `\"test\\\\file/name?.png\"`. This ensures better handling of invalid characters in file names across different operating systems.",
          "timestamp": "2025-08-16T21:58:37+02:00",
          "tree_id": "f50de7fe049a40ba10566b001c5d44209ea5b767",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/67421de11ccb29af88d08929d11d332c5952fee4"
        },
        "date": 1755374673362,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 449.12757943471274,
            "unit": "ns",
            "range": "± 3.6113585029262256"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1854.8490147908528,
            "unit": "ns",
            "range": "± 10.491436935714335"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41357.68258666992,
            "unit": "ns",
            "range": "± 71.35172681732926"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55245.89133199056,
            "unit": "ns",
            "range": "± 379.10835917814546"
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
          "id": "35748ee44a2954455df985e0e34f7e6616582e7e",
          "message": "Refactor filename formatting for .NET 6 compatibility",
          "timestamp": "2025-08-16T22:56:15+02:00",
          "tree_id": "c64b4754eea962f55253b996dde1ecc7ecaf3dd9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/35748ee44a2954455df985e0e34f7e6616582e7e"
        },
        "date": 1755378176547,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 410.6344088315964,
            "unit": "ns",
            "range": "± 1.6851560562871921"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1768.6872408730644,
            "unit": "ns",
            "range": "± 12.740416948909797"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41130.15788922991,
            "unit": "ns",
            "range": "± 267.0896019693061"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55282.058668870195,
            "unit": "ns",
            "range": "± 282.7604713852815"
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
          "id": "46b45f85cea73fafd90a92e61ba715b2774d9998",
          "message": "Add global benchmark results and refactor encoders\n\n- Updated `dotnet_benchmark_runner.yml` to include a step for storing global benchmark results using `benchmark-action/github-action-benchmark@v1`.\n- Refactored multiple encoder classes to remove unused constants and change method return types from void to string.\n- Changed `RegexCache` class visibility from internal to public.\n- Introduced a new `Global` class in `Global.cs` for benchmark tests on barcode export functionalities and regex validation.",
          "timestamp": "2025-08-16T23:53:46+02:00",
          "tree_id": "5c401796ad6525b246cf49f829094aa44c2413de",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/46b45f85cea73fafd90a92e61ba715b2774d9998"
        },
        "date": 1755382877500,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 414.3819248859699,
            "unit": "ns",
            "range": "± 2.142808345900329"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1963.7404112134661,
            "unit": "ns",
            "range": "± 10.200518852288644"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40432.471018473305,
            "unit": "ns",
            "range": "± 68.5556064248604"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55580.116455078125,
            "unit": "ns",
            "range": "± 215.15967081196612"
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
          "id": "46b45f85cea73fafd90a92e61ba715b2774d9998",
          "message": "Add global benchmark results and refactor encoders\n\n- Updated `dotnet_benchmark_runner.yml` to include a step for storing global benchmark results using `benchmark-action/github-action-benchmark@v1`.\n- Refactored multiple encoder classes to remove unused constants and change method return types from void to string.\n- Changed `RegexCache` class visibility from internal to public.\n- Introduced a new `Global` class in `Global.cs` for benchmark tests on barcode export functionalities and regex validation.",
          "timestamp": "2025-08-16T21:53:46Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/46b45f85cea73fafd90a92e61ba715b2774d9998"
        },
        "date": 1755391021702,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 484.1580377306257,
            "unit": "ns",
            "range": "± 7.402856665447909"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2135.648642434014,
            "unit": "ns",
            "range": "± 45.56355499859568"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41079.396092006136,
            "unit": "ns",
            "range": "± 262.17259207749487"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 54407.92058454241,
            "unit": "ns",
            "range": "± 706.7570969869518"
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
          "id": "e2ec2ffe5d960fcb0f925f82403e74120d0b2fb2",
          "message": "Cleanup of Program.cs in Playground project",
          "timestamp": "2025-08-17T15:06:34+02:00",
          "tree_id": "f499e13126506d8706361f91fb5af112b579bfa9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/e2ec2ffe5d960fcb0f925f82403e74120d0b2fb2"
        },
        "date": 1755436380574,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 407.7579662616436,
            "unit": "ns",
            "range": "± 1.9670530719301058"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1871.1823521931967,
            "unit": "ns",
            "range": "± 20.21031195892392"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40935.99270395132,
            "unit": "ns",
            "range": "± 98.97515954858113"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 53904.98086039225,
            "unit": "ns",
            "range": "± 113.60240788576463"
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
          "id": "315ef2c7cd5c5cc399a8d0f8aeeaa9d2ebda26be",
          "message": "Refactor EAN encoder tests to use char instead of string for expected check digits; optimize FormatBarcode method for performance improvements and update documentation with benchmark results.",
          "timestamp": "2025-08-17T16:28:27+02:00",
          "tree_id": "03e3f5f86aaa198f9d3fe93e7595457a884ad7f0",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/315ef2c7cd5c5cc399a8d0f8aeeaa9d2ebda26be"
        },
        "date": 1755441285080,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 397.4071209271749,
            "unit": "ns",
            "range": "± 2.2901703912032048"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1741.4170845576696,
            "unit": "ns",
            "range": "± 11.957627891911676"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40317.960557204024,
            "unit": "ns",
            "range": "± 122.65451165850796"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 54401.35656302316,
            "unit": "ns",
            "range": "± 690.418138369196"
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
          "id": "3df9a62edad191ed3d046ef07ac9cfa52178f137",
          "message": "Optimize EAN-8 barcode encoding for performance\n\nRefactored the `EncodeBars` method in `Ean8Encoder.cs` to replace `StringBuilder` with a stack-allocated `Span<char>`, eliminating heap allocations. This change enhances performance by directly copying encoded characters into a pre-allocated buffer. Performance improvements include a 107% increase in execution speed and a 72% reduction in memory allocation, as documented in `performance-improvements.md`.",
          "timestamp": "2025-08-17T17:13:29+02:00",
          "tree_id": "5a8abb78266c13bc9e96547f67492ad15f0b0ed9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/3df9a62edad191ed3d046ef07ac9cfa52178f137"
        },
        "date": 1755443987999,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 405.50316209059497,
            "unit": "ns",
            "range": "± 3.872512956236487"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1804.8428975618804,
            "unit": "ns",
            "range": "± 13.575646092387293"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41212.51510620117,
            "unit": "ns",
            "range": "± 262.7922739704486"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 54239.38443697416,
            "unit": "ns",
            "range": "± 138.61147681900366"
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
          "id": "873ba41654425b64cd1e78be4df5866c1da296d9",
          "message": "Refine optimization process documentation to clarify benchmarking steps and emphasize the importance of method duplication for baseline preservation.",
          "timestamp": "2025-08-17T17:21:08+02:00",
          "tree_id": "a4774b14c1ec647e8b7f5b9068c1764c3e88dc97",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/873ba41654425b64cd1e78be4df5866c1da296d9"
        },
        "date": 1755444449836,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 392.70087348497833,
            "unit": "ns",
            "range": "± 2.2769258803387964"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1874.4021170479912,
            "unit": "ns",
            "range": "± 14.165673680480518"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40876.80662653996,
            "unit": "ns",
            "range": "± 144.3124207077505"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 53248.04192176232,
            "unit": "ns",
            "range": "± 264.95674095917303"
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
          "id": "f251453f416923819fdfce4ce1fc6ce838450e60",
          "message": "Optimize Ean13Encoder.EncodeBars for performance\n\nThe `EncodeBars` method in `Ean13Encoder.cs` has been refactored to eliminate allocations by replacing `StringBuilder` with a stack-allocated `Span<char>`. This allows for direct character copying into a pre-calculated buffer of 95 characters, streamlining the encoding process. The method now utilizes a single loop for both left and right digit groups, resulting in a performance improvement of approximately 213%, reducing the mean execution time from around 470 ns to about 150 ns per call.",
          "timestamp": "2025-08-17T17:35:44+02:00",
          "tree_id": "06575899d43310dab8f314045dbeac5d9e71fbeb",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/f251453f416923819fdfce4ce1fc6ce838450e60"
        },
        "date": 1755445318959,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 423.8113468977121,
            "unit": "ns",
            "range": "± 6.656267074239838"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 2077.399067197527,
            "unit": "ns",
            "range": "± 26.879477373678938"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41285.951568603516,
            "unit": "ns",
            "range": "± 77.59931282616195"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 54740.1219904973,
            "unit": "ns",
            "range": "± 165.3113637854376"
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
          "id": "e7269c582e3f0241af4a899d01002ae3e83975cd",
          "message": "Optimize UPC-A barcode encoding in UpcaEncoder.cs\n\nRefactored the `EncodeBars` method to eliminate `StringBuilder` usage, replacing it with a stack-allocated `Span<char>` for direct character copying. This change reduces dynamic memory allocations and simplifies the encoding logic. Performance improvements are significant, with execution time reduced from ~380 ns to ~130 ns per call, achieving a 192% speedup.",
          "timestamp": "2025-08-17T17:47:07+02:00",
          "tree_id": "f7de10bc5be421deb2603518cbb1eabb1da21756",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/e7269c582e3f0241af4a899d01002ae3e83975cd"
        },
        "date": 1755446005501,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 444.50993434588116,
            "unit": "ns",
            "range": "± 9.340099570219907"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1969.822910308838,
            "unit": "ns",
            "range": "± 38.639654486827254"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40656.96883719308,
            "unit": "ns",
            "range": "± 173.36808906990836"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 53989.44448617788,
            "unit": "ns",
            "range": "± 153.81798255028252"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T17:58:14+02:00",
          "tree_id": "a33fbcf787984c6f0a003d25ada19c87b11302d8",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1755446673485,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 438.1151878493173,
            "unit": "ns",
            "range": "± 4.1883326781126025"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1881.4895022074381,
            "unit": "ns",
            "range": "± 32.1420583070031"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41076.524088541664,
            "unit": "ns",
            "range": "± 219.51531935320142"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 54632.30570765904,
            "unit": "ns",
            "range": "± 224.06842419373038"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1755995776360,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 418.1219910108126,
            "unit": "ns",
            "range": "± 1.914661556000637"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1800.1407729557582,
            "unit": "ns",
            "range": "± 9.601336739998386"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40750.36307271322,
            "unit": "ns",
            "range": "± 56.330892437011386"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 55026.11885579427,
            "unit": "ns",
            "range": "± 64.05130417451825"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1756600500282,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 449.71964038213093,
            "unit": "ns",
            "range": "± 7.948851954184798"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1909.2993349347796,
            "unit": "ns",
            "range": "± 32.2637310686768"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 41222.84338848408,
            "unit": "ns",
            "range": "± 208.8315031591656"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 54184.53841458834,
            "unit": "ns",
            "range": "± 195.06764015543482"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1757205265278,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.SimpleInstance",
            "value": 417.7682729107993,
            "unit": "ns",
            "range": "± 4.70274001055761"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.AdvancedInstance",
            "value": 1869.5631116231282,
            "unit": "ns",
            "range": "± 22.357812254853126"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithoutText",
            "value": 40899.761305588945,
            "unit": "ns",
            "range": "± 167.81621623973624"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code93Encoder.EncodingWithText",
            "value": 54883.13184611002,
            "unit": "ns",
            "range": "± 76.05344912994003"
          }
        ]
      }
    ],
    "Global": [
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
          "id": "46b45f85cea73fafd90a92e61ba715b2774d9998",
          "message": "Add global benchmark results and refactor encoders\n\n- Updated `dotnet_benchmark_runner.yml` to include a step for storing global benchmark results using `benchmark-action/github-action-benchmark@v1`.\n- Refactored multiple encoder classes to remove unused constants and change method return types from void to string.\n- Changed `RegexCache` class visibility from internal to public.\n- Introduced a new `Global` class in `Global.cs` for benchmark tests on barcode export functionalities and regex validation.",
          "timestamp": "2025-08-16T23:53:46+02:00",
          "tree_id": "5c401796ad6525b246cf49f829094aa44c2413de",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/46b45f85cea73fafd90a92e61ba715b2774d9998"
        },
        "date": 1755382872191,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToStream",
            "value": 1504536.0344801683,
            "unit": "ns",
            "range": "± 14035.818663028685"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFile",
            "value": 1527710.7039620536,
            "unit": "ns",
            "range": "± 2337.341238794588"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFileWithPlaceholders",
            "value": 1527722.326171875,
            "unit": "ns",
            "range": "± 1903.6999808722164"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.GetDisplayName",
            "value": 33.79773158293504,
            "unit": "ns",
            "range": "± 0.036460668210242"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.EanAllowedCharsetRegex",
            "value": 25.89232554535071,
            "unit": "ns",
            "range": "± 0.010469438282173288"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.Code93AllowedCharsetRegex",
            "value": 26.210748800864586,
            "unit": "ns",
            "range": "± 0.020266096324225404"
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
          "id": "46b45f85cea73fafd90a92e61ba715b2774d9998",
          "message": "Add global benchmark results and refactor encoders\n\n- Updated `dotnet_benchmark_runner.yml` to include a step for storing global benchmark results using `benchmark-action/github-action-benchmark@v1`.\n- Refactored multiple encoder classes to remove unused constants and change method return types from void to string.\n- Changed `RegexCache` class visibility from internal to public.\n- Introduced a new `Global` class in `Global.cs` for benchmark tests on barcode export functionalities and regex validation.",
          "timestamp": "2025-08-16T21:53:46Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/46b45f85cea73fafd90a92e61ba715b2774d9998"
        },
        "date": 1755391011567,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToStream",
            "value": 1479683.4525240385,
            "unit": "ns",
            "range": "± 875.9033210241636"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFile",
            "value": 1590653.3822115385,
            "unit": "ns",
            "range": "± 2356.7611658784544"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFileWithPlaceholders",
            "value": 1513318.4539620536,
            "unit": "ns",
            "range": "± 2471.0673601720687"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.GetDisplayName",
            "value": 32.96218572060267,
            "unit": "ns",
            "range": "± 0.03682444241446511"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.EanAllowedCharsetRegex",
            "value": 25.911171515073097,
            "unit": "ns",
            "range": "± 0.024409024174927282"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.Code93AllowedCharsetRegex",
            "value": 26.22525054216385,
            "unit": "ns",
            "range": "± 0.024067261106832695"
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
          "id": "e2ec2ffe5d960fcb0f925f82403e74120d0b2fb2",
          "message": "Cleanup of Program.cs in Playground project",
          "timestamp": "2025-08-17T15:06:34+02:00",
          "tree_id": "f499e13126506d8706361f91fb5af112b579bfa9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/e2ec2ffe5d960fcb0f925f82403e74120d0b2fb2"
        },
        "date": 1755436375415,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToStream",
            "value": 1480644.5904947917,
            "unit": "ns",
            "range": "± 1086.7269673330484"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFile",
            "value": 1504484.29296875,
            "unit": "ns",
            "range": "± 1536.1887878864102"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFileWithPlaceholders",
            "value": 1531574.74609375,
            "unit": "ns",
            "range": "± 1148.260352707829"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.GetDisplayName",
            "value": 32.96859840835844,
            "unit": "ns",
            "range": "± 0.1493660253133926"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.EanAllowedCharsetRegex",
            "value": 25.58675202478965,
            "unit": "ns",
            "range": "± 0.009175882242770224"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.Code93AllowedCharsetRegex",
            "value": 26.20397963661414,
            "unit": "ns",
            "range": "± 0.012960652730612079"
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
          "id": "315ef2c7cd5c5cc399a8d0f8aeeaa9d2ebda26be",
          "message": "Refactor EAN encoder tests to use char instead of string for expected check digits; optimize FormatBarcode method for performance improvements and update documentation with benchmark results.",
          "timestamp": "2025-08-17T16:28:27+02:00",
          "tree_id": "03e3f5f86aaa198f9d3fe93e7595457a884ad7f0",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/315ef2c7cd5c5cc399a8d0f8aeeaa9d2ebda26be"
        },
        "date": 1755441279193,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToStream",
            "value": 1506517.149564303,
            "unit": "ns",
            "range": "± 2105.2981098499513"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFile",
            "value": 1504410.4259207589,
            "unit": "ns",
            "range": "± 3110.041996936426"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFileWithPlaceholders",
            "value": 1527631.7743389423,
            "unit": "ns",
            "range": "± 1819.5416293813525"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.GetDisplayName",
            "value": 32.92034427821636,
            "unit": "ns",
            "range": "± 0.02195605928205741"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.EanAllowedCharsetRegex",
            "value": 25.93252374117191,
            "unit": "ns",
            "range": "± 0.05381411476270637"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.Code93AllowedCharsetRegex",
            "value": 26.326338034409744,
            "unit": "ns",
            "range": "± 0.14019978734624408"
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
          "id": "3df9a62edad191ed3d046ef07ac9cfa52178f137",
          "message": "Optimize EAN-8 barcode encoding for performance\n\nRefactored the `EncodeBars` method in `Ean8Encoder.cs` to replace `StringBuilder` with a stack-allocated `Span<char>`, eliminating heap allocations. This change enhances performance by directly copying encoded characters into a pre-allocated buffer. Performance improvements include a 107% increase in execution speed and a 72% reduction in memory allocation, as documented in `performance-improvements.md`.",
          "timestamp": "2025-08-17T17:13:29+02:00",
          "tree_id": "5a8abb78266c13bc9e96547f67492ad15f0b0ed9",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/3df9a62edad191ed3d046ef07ac9cfa52178f137"
        },
        "date": 1755443982864,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToStream",
            "value": 1477198.765904018,
            "unit": "ns",
            "range": "± 2431.5019764757817"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFile",
            "value": 1502139.1535993305,
            "unit": "ns",
            "range": "± 3150.907215918227"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFileWithPlaceholders",
            "value": 1541658.01171875,
            "unit": "ns",
            "range": "± 11242.088559779862"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.GetDisplayName",
            "value": 33.00043201020786,
            "unit": "ns",
            "range": "± 0.0577321614558854"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.EanAllowedCharsetRegex",
            "value": 25.979404435707973,
            "unit": "ns",
            "range": "± 0.018456253302406293"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.Code93AllowedCharsetRegex",
            "value": 26.204922695245063,
            "unit": "ns",
            "range": "± 0.010363118654704668"
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
          "id": "873ba41654425b64cd1e78be4df5866c1da296d9",
          "message": "Refine optimization process documentation to clarify benchmarking steps and emphasize the importance of method duplication for baseline preservation.",
          "timestamp": "2025-08-17T17:21:08+02:00",
          "tree_id": "a4774b14c1ec647e8b7f5b9068c1764c3e88dc97",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/873ba41654425b64cd1e78be4df5866c1da296d9"
        },
        "date": 1755444443882,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToStream",
            "value": 1481681.4308035714,
            "unit": "ns",
            "range": "± 2379.9800814918563"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFile",
            "value": 1508306.8717912945,
            "unit": "ns",
            "range": "± 1928.8104897587768"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFileWithPlaceholders",
            "value": 1526317.5647786458,
            "unit": "ns",
            "range": "± 1456.9597209118695"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.GetDisplayName",
            "value": 33.013571028526016,
            "unit": "ns",
            "range": "± 0.053438919128731235"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.EanAllowedCharsetRegex",
            "value": 25.913383439183235,
            "unit": "ns",
            "range": "± 0.011392569980099429"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.Code93AllowedCharsetRegex",
            "value": 26.272690992270196,
            "unit": "ns",
            "range": "± 0.03801967247636807"
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
          "id": "f251453f416923819fdfce4ce1fc6ce838450e60",
          "message": "Optimize Ean13Encoder.EncodeBars for performance\n\nThe `EncodeBars` method in `Ean13Encoder.cs` has been refactored to eliminate allocations by replacing `StringBuilder` with a stack-allocated `Span<char>`. This allows for direct character copying into a pre-calculated buffer of 95 characters, streamlining the encoding process. The method now utilizes a single loop for both left and right digit groups, resulting in a performance improvement of approximately 213%, reducing the mean execution time from around 470 ns to about 150 ns per call.",
          "timestamp": "2025-08-17T17:35:44+02:00",
          "tree_id": "06575899d43310dab8f314045dbeac5d9e71fbeb",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/f251453f416923819fdfce4ce1fc6ce838450e60"
        },
        "date": 1755445310214,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToStream",
            "value": 1497516.9024832589,
            "unit": "ns",
            "range": "± 9870.900526869567"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFile",
            "value": 1505438.666766827,
            "unit": "ns",
            "range": "± 1331.5659560327028"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFileWithPlaceholders",
            "value": 1528758.385044643,
            "unit": "ns",
            "range": "± 2361.877103175959"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.GetDisplayName",
            "value": 32.916131790195195,
            "unit": "ns",
            "range": "± 0.03514852418375257"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.EanAllowedCharsetRegex",
            "value": 28.673459406409943,
            "unit": "ns",
            "range": "± 0.02994084678536948"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.Code93AllowedCharsetRegex",
            "value": 26.224539942466297,
            "unit": "ns",
            "range": "± 0.02177019489865622"
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
          "id": "e7269c582e3f0241af4a899d01002ae3e83975cd",
          "message": "Optimize UPC-A barcode encoding in UpcaEncoder.cs\n\nRefactored the `EncodeBars` method to eliminate `StringBuilder` usage, replacing it with a stack-allocated `Span<char>` for direct character copying. This change reduces dynamic memory allocations and simplifies the encoding logic. Performance improvements are significant, with execution time reduced from ~380 ns to ~130 ns per call, achieving a 192% speedup.",
          "timestamp": "2025-08-17T17:47:07+02:00",
          "tree_id": "f7de10bc5be421deb2603518cbb1eabb1da21756",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/e7269c582e3f0241af4a899d01002ae3e83975cd"
        },
        "date": 1755446000352,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToStream",
            "value": 1506760.6375,
            "unit": "ns",
            "range": "± 13354.277505413442"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFile",
            "value": 1529062.4892578125,
            "unit": "ns",
            "range": "± 1695.6910927714239"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFileWithPlaceholders",
            "value": 1509022.7745535714,
            "unit": "ns",
            "range": "± 3269.142712871276"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.GetDisplayName",
            "value": 32.894047243254526,
            "unit": "ns",
            "range": "± 0.031179556926114377"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.EanAllowedCharsetRegex",
            "value": 26.790018298796245,
            "unit": "ns",
            "range": "± 0.021799777501818763"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.Code93AllowedCharsetRegex",
            "value": 26.192518419944324,
            "unit": "ns",
            "range": "± 0.017433945902276055"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T17:58:14+02:00",
          "tree_id": "a33fbcf787984c6f0a003d25ada19c87b11302d8",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1755446667276,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToStream",
            "value": 1485410.4532877605,
            "unit": "ns",
            "range": "± 3873.615006044551"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFile",
            "value": 1515582.889873798,
            "unit": "ns",
            "range": "± 8960.151929240636"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFileWithPlaceholders",
            "value": 1510609.6134314905,
            "unit": "ns",
            "range": "± 1796.81701236406"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.GetDisplayName",
            "value": 32.98690588133676,
            "unit": "ns",
            "range": "± 0.04003331657201137"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.EanAllowedCharsetRegex",
            "value": 25.909158773720264,
            "unit": "ns",
            "range": "± 0.03615533816954059"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.Code93AllowedCharsetRegex",
            "value": 26.207981204986574,
            "unit": "ns",
            "range": "± 0.02568940360349809"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1755995765800,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToStream",
            "value": 1481956.9097055288,
            "unit": "ns",
            "range": "± 4504.851276271845"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFile",
            "value": 1507206.2225060095,
            "unit": "ns",
            "range": "± 2190.563767879442"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFileWithPlaceholders",
            "value": 1506170.4029296874,
            "unit": "ns",
            "range": "± 4064.278548747738"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.GetDisplayName",
            "value": 33.51331292305674,
            "unit": "ns",
            "range": "± 0.030451769601582898"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.EanAllowedCharsetRegex",
            "value": 25.931174205882208,
            "unit": "ns",
            "range": "± 0.018924408483568828"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.Code93AllowedCharsetRegex",
            "value": 26.205705713767273,
            "unit": "ns",
            "range": "± 0.018476933445424715"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1756600490357,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToStream",
            "value": 1489261.998798077,
            "unit": "ns",
            "range": "± 2255.8143307069317"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFile",
            "value": 1504558.2654854911,
            "unit": "ns",
            "range": "± 2105.17372704212"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFileWithPlaceholders",
            "value": 1513451.2998046875,
            "unit": "ns",
            "range": "± 1526.51360667121"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.GetDisplayName",
            "value": 33.22623433975073,
            "unit": "ns",
            "range": "± 0.03544527195362944"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.EanAllowedCharsetRegex",
            "value": 25.913238953266823,
            "unit": "ns",
            "range": "± 0.021727124933265313"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.Code93AllowedCharsetRegex",
            "value": 26.222887877907073,
            "unit": "ns",
            "range": "± 0.03477196573974255"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1757205254697,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToStream",
            "value": 1500362.9320963542,
            "unit": "ns",
            "range": "± 13219.882739243487"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFile",
            "value": 1513677.639778646,
            "unit": "ns",
            "range": "± 10965.255224884899"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFileWithPlaceholders",
            "value": 1506094.91875,
            "unit": "ns",
            "range": "± 2010.0207278824935"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.GetDisplayName",
            "value": 33.263915351458955,
            "unit": "ns",
            "range": "± 0.03522676276533518"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.EanAllowedCharsetRegex",
            "value": 25.9179476638635,
            "unit": "ns",
            "range": "± 0.026887179175423423"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.Code93AllowedCharsetRegex",
            "value": 26.207917439086096,
            "unit": "ns",
            "range": "± 0.01783899203037094"
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
          "id": "42ab96d82346b4f0985c10fc7f6b09a023bcbcdb",
          "message": "Optimize barcode encoding methods for performance\n\nThe `FormatBarcode` method in `Isbn13Encoder.cs` was optimized to eliminate unnecessary allocations, resulting in a performance increase of approximately 169% and a reduction in memory usage by 73-76%. The implementation now uses stackalloc and spans to avoid intermediate string creation.\n\nSimilarly, the `EncodeBars` method in `UpcaEncoder.cs` was refactored to utilize stackalloc and spans, removing the need for StringBuilder allocations and streamlining the UPC-A encoding process.\n\nAdditionally, a new section was added to `performance-improvements.md` to document these changes, including benchmarks that highlight the significant improvements in execution time and memory usage for both methods.",
          "timestamp": "2025-08-17T15:58:14Z",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/42ab96d82346b4f0985c10fc7f6b09a023bcbcdb"
        },
        "date": 1757810041659,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToStream",
            "value": 1497531.0804966518,
            "unit": "ns",
            "range": "± 8430.99217279728"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFile",
            "value": 1533245.136328125,
            "unit": "ns",
            "range": "± 24442.182356340938"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.ExportToFileWithPlaceholders",
            "value": 1513670.4701021635,
            "unit": "ns",
            "range": "± 3296.9676320825956"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.GetDisplayName",
            "value": 33.66494302664484,
            "unit": "ns",
            "range": "± 0.04869081849085221"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.EanAllowedCharsetRegex",
            "value": 25.90754709499223,
            "unit": "ns",
            "range": "± 0.024381115184519905"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Global.Code93AllowedCharsetRegex",
            "value": 26.234164364062824,
            "unit": "ns",
            "range": "± 0.011209999625649697"
          }
        ]
      }
    ]
  }
}