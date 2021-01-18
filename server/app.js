const express = require('express');
const app = express();
const port = 8010;

app.get('/', function (req, res) {
  res.send('Hello world!');
});

app.listen(port, () => console.log(`server is running on ${port}`));
