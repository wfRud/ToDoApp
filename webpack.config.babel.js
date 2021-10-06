import { resolve } from "path";
import glob from "glob";
// import ExtractTextWebpackPlugin from "extract-text-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
// import OptimizeCssPlugin from "optimize-css-assets-webpack-plugin";
// import PurifyCSS from 'purifycss-webpack';

const config = {};

config.entry = {
  app: ["./src/js/app.js"],
};

config.output = {
  filename: "bundle.js",
  path: resolve(__dirname, "dist"),
  // publicPath: '/',
};

config.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
    },
    {
      test: /\.(sa|sc|c)ss$/,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      loader: "file-loader",
      options: {
        outputPath: "images/icons",
        name: "[name].[ext]",
      },
    },
  ],
};

config.plugins = [
  //   new ExtractTextWebpackPlugin("style.css"),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
  //   new OptimizeCssPlugin({
  //     assetNameRegExp: /\.css$/g,
  //     cssProcessor: require("cssnano"),
  //     cssProcessorPluginOptions: {
  //       preset: [
  //         "default",
  //         {
  //           discardComments: {
  //             removeAll: true,
  //           },
  //         },
  //       ],
  //     },
  //     canPrint: true,
  //   }),
  //   // new PurifyCSS({
  //   //     paths: glob.sync(resolve(__dirname, 'src/*.html')),
  //   // }),
];

config.optimization = {
  minimizer: [new CssMinimizerPlugin()],
};

config.devServer = {
  watchFiles: ["src/**/*.scss", "src/**/*.js", "src/*.html"],
  port: 8080,
};

module.exports = config;
