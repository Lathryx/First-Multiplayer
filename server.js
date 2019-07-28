var express = require('express');

var app = express();
var server = app.listen(process.env.PORT || 3000, () => console.log('Server online ... '));

app.use(express.static('public'));

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log('New Connection : ' + socket.id);

  socket.on('mouseCords', mouseMsg);

  function mouseMsg(data) {
    socket.broadcast.emit('mouseCords', data);
    console.log(data);
  }
}
