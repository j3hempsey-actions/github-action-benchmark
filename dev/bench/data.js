window.BENCHMARK_DATA = {
  "lastUpdate": 1670368833316,
  "repoUrl": "https://github.com/j3hempsey/github-action-benchmark",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "jhempsey33@gmail.com",
            "name": "Justin Hempsey",
            "username": "j3hempsey"
          },
          "committer": {
            "email": "jhempsey33@gmail.com",
            "name": "Justin Hempsey",
            "username": "j3hempsey"
          },
          "distinct": true,
          "id": "0889c8d45172e1db2ccc41310690ff47a4cffa0b",
          "message": "Add PR comment when available",
          "timestamp": "2022-12-06T15:18:29-08:00",
          "tree_id": "cb6d132f161f33b15b793145a5edd5633b80c92c",
          "url": "https://github.com/j3hempsey/github-action-benchmark/commit/0889c8d45172e1db2ccc41310690ff47a4cffa0b"
        },
        "date": 1670368827806,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench.py::test_fib_10",
            "value": 59573.92304802095,
            "unit": "iter/sec",
            "range": "stddev: 4.841850108131118e-7",
            "extra": "mean: 16.785867856879705 usec\nrounds: 40161"
          },
          {
            "name": "bench.py::test_fib_20",
            "value": 491.2448849803738,
            "unit": "iter/sec",
            "range": "stddev: 0.000010189729343406933",
            "extra": "mean: 2.0356446053172688 msec\nrounds: 489"
          }
        ]
      }
    ],
    "Benchmark.js Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jhempsey33@gmail.com",
            "name": "Justin Hempsey",
            "username": "j3hempsey"
          },
          "committer": {
            "email": "jhempsey33@gmail.com",
            "name": "Justin Hempsey",
            "username": "j3hempsey"
          },
          "distinct": true,
          "id": "0889c8d45172e1db2ccc41310690ff47a4cffa0b",
          "message": "Add PR comment when available",
          "timestamp": "2022-12-06T15:18:29-08:00",
          "tree_id": "cb6d132f161f33b15b793145a5edd5633b80c92c",
          "url": "https://github.com/j3hempsey/github-action-benchmark/commit/0889c8d45172e1db2ccc41310690ff47a4cffa0b"
        },
        "date": 1670368832675,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "fib(10)",
            "value": 1350388,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "98 samples"
          },
          {
            "name": "fib(20)",
            "value": 11284,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "96 samples"
          }
        ]
      }
    ]
  }
}