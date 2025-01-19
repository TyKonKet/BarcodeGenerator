window.BENCHMARK_DATA = {
  "lastUpdate": 1737315863405,
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
      }
    ]
  }
}