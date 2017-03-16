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
  })

  res.end();
})

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
