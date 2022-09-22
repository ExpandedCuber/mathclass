const express = require('express');

const path = require('path');
const app = express();

const htmldirectory = path.join(__dirname, "html");

app.get('/', function(req, res) {
  app.use(express.static(htmldirectory));
  res.sendFile(path.join(__dirname, 'html/index.html'));
});

app.use(express.static('public/'))

app.listen(3000, () => {
  console.log('server started');
});