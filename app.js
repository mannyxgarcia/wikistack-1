const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(morgan('dev')); // logging middlewear
app.use(express.static(path.join(__dirname, 'public'))); // serves up public folder
// app.use(express.urlencoded({ extended: false })); // body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const layout = require('./views/layout');

app.get('/', (req, res) => {
  res.send(layout(''));
});

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}`);
});
