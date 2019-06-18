const htmlWebpack = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production'; 

module.exports = {
    entry : [
        '@babel/polyfill',
        './Source/App/index.js'
    ],
    output: {
        path: __dirname + "/Build",
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
                
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : miniCss.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpack({
            template: './Source/index.html'
        }),
        new miniCss({
            filename: 'bundle.css'
        })
    ]
};