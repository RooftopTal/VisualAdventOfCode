const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "/adventOfCode"
    ],
    target: "https://localhost:7118",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
