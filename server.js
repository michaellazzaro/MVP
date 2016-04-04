var express = require('express');

var app = express();
var port = process.env.PORT || 4568;
app.use(express.static(__dirname));

app.listen(port);

