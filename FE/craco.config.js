const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@(.*)$": "<rootDir>/src$1",
      },
    },
  },
};

// const cracoAlias = require("craco-alias");

// module.exports = {
//   plugins: [
//     {
//       plugin: cracoAlias,
//       options: { baseUrl: "./src", source: "tsconfig", tsConfigPath: "tsconfig.paths.json" },
//     },
//   ],
// };
