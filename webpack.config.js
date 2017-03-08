const path = require('path');

// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const ExtractTextPluginConfig = new ExtractTextPlugin('style.css');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname + '/dist',
    filename: './index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    port: 8080,
    historyApiFallback: true
  }
}

