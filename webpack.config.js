const path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: {
    common: ["./src/page/common/index.js", "./src/page/common/login.js"],
    index: ["./src/page/index/index.js"],
    login: ["./src/page/login/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].js"
  },
  externals: {
    jquery: "window.jQuery"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      // (给 chunk 一个不同的名字)
      filename: "./js/base.js"
    }),
    new ExtractTextPlugin("css/[name].css"),
    new HtmlWebpackPlugin({
      template: "./src/view/index.html",
      filename: "view/index-[hash].html",
      inject: true,
      title: "新title"
    })
  ]
};
