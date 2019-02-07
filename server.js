const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const app = express();

const home = require('./server/routes/home');
const mission = require('./server/routes/mission');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/home', home);
app.use('/mission', mission);
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log('RUNNING on port : ' + port);
});
