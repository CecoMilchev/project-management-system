const PROXY_CONFIG = [
  {
    context: [
      "/api/projects",
    ],
    target: "https://localhost:7208",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
