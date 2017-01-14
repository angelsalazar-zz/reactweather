const express = require('express');
const path = require('path');

const config = require('./config');

var app = express();


app.use(express.static(path.join(__dirname,'public')));

app.listen(config.port, (err) => {
  if (err) {
    console.log('Whoops something went wront');
  } else {
    console.log('Started on port ' + config.port)
  }
})
