const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniScssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require("path");

module.exports = {
    entry: {
        app: "./src/index.js",
        page2: "./src/page2.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "bundle"),
        publicPath: "./",
        assetModuleFilename: 'assets/[name][ext][query]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'App',
            template: './src/index.html',
            excludeChunks: ['page2']
        }),
        new HtmlWebpackPlugin({
            title: 'Page 2',
            chunks: ['page2'],
            template: './src/page2.html',
            filename: 'page2.html'
            
        }),
        new MiniScssExtractPlugin({
            filename: "[name].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniScssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                },
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime']
                  }
                }
              },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin()
        ]
    }
}