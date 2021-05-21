// 公共配置
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
let baseConfig = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name]-bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: path.resolve(__dirname, '../src')
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
                include: path.resolve(__dirname, '../src')
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.vue'],
        alias: {
            'vue$': "vue/dist/vue.esm.js"
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlwebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            inject: 'body',
            minify: false,
            hash: true
        })
    ]
};
module.exports = baseConfig;