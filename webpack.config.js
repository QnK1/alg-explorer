const path = require('path');

module.exports = {
    entry: './assets/cube3d.js',  // path to our input file
    output: {
        filename: 'cube3d-bundle.js',  // output bundle file name
        path: path.resolve(__dirname, './static/js'),  // path to our Django static directory
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env"] }
        },
    ]
    }
};