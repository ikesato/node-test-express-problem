const express = require('express');
const app = express();

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'tobi' });
});
app.get('/mock', function(req, res) {
  res.sendFile('/path/to/fake/dir/a.txt');
});
//app.listen(8080);

module.exports = app;
