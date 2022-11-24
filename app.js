const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/2', (req, res) => {
    res.send('Hello World 2!');
});
  

app.listen(port, () => {
  console.log(port, 'Server is open with port!');
});