const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const ExtractCss = new ExtractTextPlugin('../css/[name].css')
const path = require('path')

module.exports = {
    entry: __dirname + '/src/js/index.js',
    output: {
        path: __dirname + "/assets/js",
        filename: "index.js",
        publicPath: '/temp/'
    },
    devServer: {
        contentBase:__dirname,
        host:'localhost',
        port: 9000

    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractCss.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ],
        // rules: [{
        //     test: /\.less$/,
        //     use: [{
        //         loader: "style-loader" // creates style nodes from JS strings
        //     }, {
        //         loader: "css-loader" // translates CSS into CommonJS
        //     }, {
        //         loader: "less-loader" // compiles Less to CSS
        //     }]
        // }],
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ],

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        ExtractCss
    ]

};