/**** webpack.config.js  ***/

// webpack 默认配置
const path = require('path');

module.exports = {
    // 项目入口文件 支持 str | [] | {}
    entry: path.resolve(__dirname, './src/index.js'),
    // 项目出口 
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'mian.js'
    },
    // 打包环境 默认是生产环境 production
    // 如果是开发环境 这里需要换成 development
    // 接下来为了观察打包后的文件，使用 development
    mode: 'development',
    // 模块 这些选项决定了如何处理项目中的不同类型的模块。
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            }
        ]},
    // 插件
    plugins: [],
    // 是否开启 source-map(打包真实数据)
    // devtool: 'source-map'
}