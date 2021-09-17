const path = require('path');
const SRC_DIR = path.resolve(__dirname, 'client');
const SRC_FILE = path.resolve(SRC_DIR, 'index.js');
const OUT_DIR = path.resolve(__dirname, 'public');

module.exports = {
    entry: SRC_FILE,
    output: {
        path: OUT_DIR,
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    mode: 'development'
}