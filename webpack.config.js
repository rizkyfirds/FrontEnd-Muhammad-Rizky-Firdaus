const path = require('path');

module.exports = {
    entry: './src/index.js',

    output: {
        publicPath: "http://localhost:3000/",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
            },
        ],
    },
}