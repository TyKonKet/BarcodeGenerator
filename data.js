window.BENCHMARK_DATA = {
  "lastUpdate": 1763853497827,
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
          "id": "7b005aca3b2cf91c2cdca89e72bd46f01dd3eaaf",
          "message": "Add GitHub token and configure user for version update commits in benchmark runner",
          "timestamp": "2025-11-23T00:10:39+01:00",
          "tree_id": "761044fd07b65b91b1fc7dcf89a7c272354e0d36",
          "url": "https://github.com/TyKonKet/BarcodeGenerator/commit/7b005aca3b2cf91c2cdca89e72bd46f01dd3eaaf"
        },
        "date": 1763853496428,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TyKonKet.BarcodeGenerator.Benchmarks.Benchmarks.CodabarEncoder.SimpleInstance",
            "value": 687.3401544234332,
            "unit": "ns",
            "range": "± 13.846241164526386"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.Benchmarks.Benchmarks.CodabarEncoder.AdvancedInstance",
            "value": 2517.4168907165526,
            "unit": "ns",
            "range": "± 20.389010164529548"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.Benchmarks.Benchmarks.CodabarEncoder.EncodingWithoutText",
            "value": 29893.234443077676,
            "unit": "ns",
            "range": "± 52.01347984375801"
          },
          {
            "name": "TyKonKet.BarcodeGenerator.Benchmarks.Benchmarks.CodabarEncoder.EncodingWithText",
            "value": 40324.85782732283,
            "unit": "ns",
            "range": "± 83.19278338774255"
          }
        ]
      }
    ]
  }
}