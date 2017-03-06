const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '/client')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/index.html'))
})

app.listen(port, function() {
  console.log(`Portfolio server listening on port ${port}`)
})

// const webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');
// const config = require('./webpack.config');
// const port = 8080;

// new WebpackDevServer(webpack(config), {
//     publicPath: config.output.publicPath,
//     hot: true,
//     historyApiFallback: true,
//     // It suppress error shown in console, so it has to be set to false.
//     quiet: false,
//     // It suppress everything except error, so it has to be set to false as well
//     // to see success build.
//     noInfo: false,
//     stats: {
//       // Config for minimal console.log mess.
//       assets: false,
//       colors: true,
//       version: false,
//       hash: false,
//       timings: false,
//       chunks: false,
//       chunkModules: false
//     }
// }).listen(port, 'localhost', function (err) {
//     if (err) {
//         console.log(err);
//     }

//   console.log(`Listening on port ${port}`);
// });