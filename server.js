var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var path = require('path')

var app = express();

var server = http.createServer(app);
var io = require('socket.io')(server);
server.listen(4000);
// socket io
io.on('connection', function (socket) {
  console.log('User connected');
  socket.on('disconnect', function () {
    console.log('User disconnected');
  });
  socket.on('save-message', function (data) {
    console.log("save message: ",data);
    io.emit('new-message', { message: data });
  });
});

app.use(express.static(path.join(__dirname,'./client/dist')));
app.use(bodyParser.urlencoded({extends: true}));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


var port = normalizePort(process.env.PORT || '8000');
app.set('port', port);
var server = http.createServer(app);
server.listen(port);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
// app.listen(8000,function(){
//   console.log("App is running on port 8000!");
// })
