const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        }]
    },
    devServer: {
        historyApiFallback: true
    }
}