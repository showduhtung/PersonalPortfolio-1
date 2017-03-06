// const webpack = require('webpack');
// const path = require('path');

// module.exports = {
//   entry: './client/index.js',
//   output: {
//     filename: './dist/bundle.js'
//   },
//   module: {
//     loaders: [
//       { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
//       { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
//     ]
//   }
// }

///////////////////////////////
const path = require('path');

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
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    port: 8080,
    historyApiFallback: true
  }
}

/////////////////////////
// 'use strict';

// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: './client/index.tpl.html',
//   filename: 'index.html',
//   inject: 'body'
// });

// module.exports = {
//   devtool: 'eval-source-map',
//   entry: [
//     'webpack-dev-server/client?http://localhost:8080',
//     'webpack/hot/only-dev-server',
//     'react-hot-loader/patch',
//     path.join(__dirname, 'client/index.js')
//   ],
//   output: {
//     path: path.join(__dirname, '/dist/'),
//     filename: 'bundle.js',
//     publicPath: '/'
//   },
//   plugins: [
//     HtmlWebpackPluginConfig,
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoErrorsPlugin(),
//     new webpack.DefinePlugin({
//       'process.env.NODE_ENV': JSON.stringify('development');
//     })
//   ],
//   module: {
//     loaders: [
//       {
//         test: /\.js?$/,
//         exclude: /node_modules/,
//         loader: 'babel'
//       },
//       {
//         test: /\.json?$/,
//         loader: 'json'
//       },
//       {
//         test: /\.scss?$/,
//         loader: 'style!css!sass?modules&localIdentName=[name]---[local]---[hash:base64:5]'
//       },
//       {
//         test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//         loader: "url-loader?limit=10000&minetype=application/font-woff"
//       },
//       {
//         test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//         loader: "file-loader"
//       }
//     ]
//   }
// }