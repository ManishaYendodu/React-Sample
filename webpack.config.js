var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/app.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.js', '.jsx', '.tsx'],
    },
    module: {
        rules : [
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: {
                  loader: 'ts-loader',
                },
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                  loader: 'ts-loader',
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            // {
            //     test: /\.(js|jsx)$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: "babel-loader"
            //       }
            // },
        ]
    },
    //loading the static files
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
    },
    //creation of HTML files to serve webpack bundles
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ]
}