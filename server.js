const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
})

const server = app.listen(3000);

module.exports = { 
  app: app,
  server: server,
};