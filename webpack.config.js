const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist/static")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   loader: "awesome-typescript-loader"
      // },
      // {
      //   test: /\.js?$/,
      //   loader: "babel-loader"
      // }
      {
        test: /\.tsx?$/,
        loader: "babel-loader!awesome-typescript-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "../index.html",
      template: "index.html"
      // filename: path.resolve(__dirname, "./index.html")
    })
    // new webpack.ProvidePlugin({
    //   React: "react",
    //   ReactDOM: "react-dom"
    // })
  ]
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM"
  // }
};
