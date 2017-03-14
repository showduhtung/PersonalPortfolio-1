const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const nodemailer = require('nodemailer');
const app = express();
const port = 8080;

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(express.static(path.join(__dirname, '/dist')));
// app.use(express.static(path.join(__dirname, '/client/assets')));


app.post('/contact', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  let mailOptions = {
    from: '"Portfolio of Wells" <communication.vrpacman@gmail.com>',
    to: 'wells.z.tsai@gmail.com',
    subject: 'Portfolio - Contact Form Submission',
    text: `name: ${name}\nemail: ${email}\nmessage: ${message}`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent:', info.messageId, info.response);
  })

  res.end();
})

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/index.html'))
// })

app.listen(port, function() {
  console.log(`Portfolio server listening on port ${port}`)
})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'communication.vrpacman@gmail.com',
    pass: 'rocketleague'
  }
});

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