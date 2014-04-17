#!/usr/bin/env node

var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

var buffer = fs.readFileSync('index.html');
console.log(buffer.toString());

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
