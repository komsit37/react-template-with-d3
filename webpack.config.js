var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: './react/main.js',
    output: { path: __dirname, filename: 'bundle.js' },
    module: {
        loaders: [
            { test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
};