const webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const ExtractCss = new ExtractTextPlugin('../css/[name].css')
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    entry: {
        index:__dirname + '/src/js/index.js',
        more:[__dirname + '/src/js/a.js', __dirname + '/src/js/b.js',]
    },
    output: {
        path: __dirname + "/assets/js",
        filename: "[name].js",
        publicPath: '/temp/'
    },
    devServer: {
        contentBase:__dirname,
        host:'localhost',
        // compress: true,
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
        /**
         * 拣出css
         */
        ExtractCss,
        /**
         * 插入HTML依赖
         */
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: '../index.html',
            template:__dirname + '/src/tpl/demo.ejs',
            inject:'body',
            info:'WebPack'
            // info:'我是传入模板的一句话 !',
        }),
        /**
         * 压缩操作
         */
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        }),
        /**
         * 代理服务
         */
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // })
        /**
         * 共享插件块
         */
        // new CommonsChunkPlugin("commons", "commons.js")
        new CommonsChunkPlugin({
            names:['a','b']
        })

    ],
    externals:{
        jquery:"https://cdn.bootcss.com/jquery/3.2.1/jquery.js"
    }

};