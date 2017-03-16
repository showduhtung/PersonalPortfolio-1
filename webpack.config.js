const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});
const webpackpluginConfig = new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    })
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  {from: 'client/assets'}
])

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
      { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: "file" },
      { test: /\.csv$/, loader: 'dsv-loader' },
      { test: /\.scss$/, loader: "style-loader!raw-loader!sass-loader?includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib") }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, webpackpluginConfig, CopyWebpackPluginConfig, new webpack.LoaderOptionsPlugin({
    debug: false
  })
  ,
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.AggressiveMergingPlugin(), new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})
],
  devServer: {
    port: 8080,
    historyApiFallback: true
  }
}

