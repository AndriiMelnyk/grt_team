var express = require('express');
var path = require('path');
var app = express();

app.use('/node_modules', express.static(path.join(__dirname, './node_modules')));
app.use('/app', express.static(path.join(__dirname, './app')));
app.use('/templates', express.static(path.join(__dirname, './app/templates')));
app.use('/styles', express.static(path.join(__dirname, './styles')));

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080);

console.log("App listening on port 8080");