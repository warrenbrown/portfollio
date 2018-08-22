const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, function() {
  console.log('App is running at localhost:' + port);
});
