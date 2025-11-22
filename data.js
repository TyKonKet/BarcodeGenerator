window.BENCHMARK_DATA = {
  "lastUpdate": 1763825258893,
  "repoUrl": "https://github.com/TyKonKet/BarcodeGenerator",
  "entries": {
    "CodabarEncoder": [
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "5134171b6d50fa642de5b727c1e9d2e59dbdb76d",
          "message": "Fix paths in benchmark and test runner scripts to use the correct tools directory",
          "timestamp": "2025-11-22T16:22:16+01:00",
          "tree_id": "b0467471f40230a95e2034490041db2e80e50a8f",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/5134171b6d50fa642de5b727c1e9d2e59dbdb76d"
        },
        "date": 1763825243088,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.CodabarEncoder.SimpleInstance",
            "value": 435.88557144311756,
            "unit": "ns",
            "range": "± 1.6070211326938255"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.CodabarEncoder.AdvancedInstance",
            "value": 1828.1674817403157,
            "unit": "ns",
            "range": "± 13.41466369638545"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.CodabarEncoder.EncodingWithoutText",
            "value": 29014.899271647137,
            "unit": "ns",
            "range": "± 105.5912805579834"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.CodabarEncoder.EncodingWithText",
            "value": 40058.05422973633,
            "unit": "ns",
            "range": "± 51.98190990855693"
          }
        ]
      }
    ],
    "Code128Encoder": [
      {
        "commit": {
          "author": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "committer": {
            "email": "matteoautieri@live.it",
            "name": "TyKonKet",
            "username": "TyKonKet"
          },
          "distinct": true,
          "id": "5134171b6d50fa642de5b727c1e9d2e59dbdb76d",
          "message": "Fix paths in benchmark and test runner scripts to use the correct tools directory",
          "timestamp": "2025-11-22T16:22:16+01:00",
          "tree_id": "b0467471f40230a95e2034490041db2e80e50a8f",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/5134171b6d50fa642de5b727c1e9d2e59dbdb76d"
        },
        "date": 1763825257290,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code128Encoder.SimpleInstance",
            "value": 413.8815162522452,
            "unit": "ns",
            "range": "± 1.5822878888707765"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code128Encoder.AdvancedInstance",
            "value": 1810.2792979649134,
            "unit": "ns",
            "range": "± 13.966478604389946"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code128Encoder.EncodingWithoutText",
            "value": 48330.42432579627,
            "unit": "ns",
            "range": "± 55.55422167762457"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.CB.Benchmarks.Code128Encoder.EncodingWithText",
            "value": 62610.25812639509,
            "unit": "ns",
            "range": "± 64.72910899925697"
          }
        ]
      }
    ]
  }
}