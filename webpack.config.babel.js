import {
    resolve
} from 'path';
import glob from 'glob';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import OptimizeCssPlugin from 'optimize-css-assets-webpack-plugin';
// import PurifyCSS from 'purifycss-webpack';

const config = {}

config.entry = {
    app: ['./src/js/app.js'],
};

config.output = {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    // publicPath: '/',
};

config.module = {
    rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        },
        {
            test: /\.(scss|sass)$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader'],
            })
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'file-loader',
            options: {
                outputPath: 'images/icons',
                name: '[name].[ext]',
            }
        },
    ],
};

config.plugins = [
    new ExtractTextWebpackPlugin('style.css'),
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
    new OptimizeCssPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
            preset: ['default', {
                discardComments: {
                    removeAll: true
                }
            }],
        },
        canPrint: true
    }),
    // new PurifyCSS({
    //     paths: glob.sync(resolve(__dirname, 'src/*.html')),
    // }),
];

config.devServer = {
    contentBase: resolve(__dirname, 'dist'),
    watchContentBase: true,
    port: 8080,
}

module.exports = config;