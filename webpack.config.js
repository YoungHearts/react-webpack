/**** webpack.config.js  ***/
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const webpack = require('webpack')
// webpack 默认配置
const path = require('path');

module.exports = {
    // devServer和entry是平级的
    devServer: {
        // 指向打包后的文件地址
        // contentBase: path.join(__dirname, 'dist'),
        contentBase: './dist',
        inline: true,
        // compress: true,
        // // 是否自动打开一个新窗口
        open: true,
        // // 端口号
        port: 3000,
        // // 是否开启热更新
        hot: true,
        // // 启用热模块替换，而不会在构建失败时将页面刷新作为后备。
        // hotOnly: true
    },
    // 项目入口文件 支持 str | [] | {}
    entry: path.resolve(__dirname, './src/index.js'),
    // 项目出口 
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'mian_[hash:8].js'
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
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
              }
        ]},
    // 插件
    plugins: [
        // 每次部署时清空 dist 目录
        new CleanWebpackPlugin(),
        // 复制一个 html 并将最后打包好的资源在 html 中引入
        new htmlWebpackPlugin({
            // 页面title 需要搭配 ejs 使用
            title: "测试title",
            // html 模板路径
            template: "./index.html",
            // 输出文件名称
            filename: "index.html",
            minify: {
                // 压缩HTML⽂件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空⽩符与换⾏符
                minifyCSS: true // 压缩内联css
            }
        }),
        // 启用模块热替换(HMR - Hot Module Replacement)
        // new webpack.HotModuleReplacementPlugin(),
    ],
    // 是否开启 source-map(打包真实数据)
    // devtool: 'source-map'
}