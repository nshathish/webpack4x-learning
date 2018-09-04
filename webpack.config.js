const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'bundle.min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack4x-Learning',
      template: resolve(__dirname, 'src', 'index.ejs')
    })
  ]
};

module.exports = config;