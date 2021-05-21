// 生产环境配置
const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./base.config')
let buildConfig = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, '../src/'),
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "style/[name].css"
        })
    ]
};
module.exports = merge(baseConfig, buildConfig);