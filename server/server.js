const path = require("path");
const http = require('http');
const express = require("express");
const socketIO = require('socket.io');

const port = process.env.PORT || 9001;

const publicPath = path.join(__dirname, "../public");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New user connected');
  
  socket.emit('newMessage', {
    from: 'John',
    text: 'See you then',
    createdAt: 123123
  });

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail);
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  });  
});

app.use(express.static(publicPath));

server.listen(port, () => {
  console.log("Server is up on port 9001");
});
