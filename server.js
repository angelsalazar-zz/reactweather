const express = require('express');
const path = require('path');

const config = require('./config');

var app = express();

// Redirect traffic that uses http protocol
// throughout https
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static(path.join(__dirname,'public')));

app.listen(config.port, (err) => {
  if (err) {
    console.log('Whoops something went wront');
  } else {
    console.log('Started on port ' + config.port)
  }
})
