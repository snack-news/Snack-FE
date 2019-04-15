const path = require("path");

const eslintrc = require("../../.eslintrc");

module.exports = {
  entry: path.resolve(__dirname, "./index.tsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./public/dist")
  },
  mode: "development",
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.[t|j]sx?$/,
        exclude: /node_modules/,
        use: [
          "awesome-typescript-loader",
          {
            loader: "eslint-loader",
            options: {
              ...eslintrc,
              fix: true,
              cache: true
            }
          }
        ]
      }
    ]
  }
};
