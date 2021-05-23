// 开发环境配置
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./base.config');
let devConfig = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, '../src/'),
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
module.exports = merge(baseConfig, devConfig);