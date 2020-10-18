const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        path: path.join(__dirname, '/bundle'),
        filename: 'index_bundle.js'
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.module\.s(a|c)ss$/,
                loader: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}