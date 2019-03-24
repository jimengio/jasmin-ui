var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var TSConfigPathsWebpackPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./example/app.tsx",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "template.ejs",
    }),
  ],
  devtool: "cheap-source-map",
  devServer: {
    contentBase: __dirname,
    publicPath: "/",
    compress: true,
    clientLogLevel: "info",
    disableHostCheck: true,
    host: "0.0.0.0",
    port: 6602,
    watchOptions: {
      ignored: [/node_module/],
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [
      new TSConfigPathsWebpackPlugin({
        configFile: path.resolve(__dirname, "./tsconfig.json"),
      }),
    ],
  },
};
