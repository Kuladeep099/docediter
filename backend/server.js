const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: '*',
  }
});

app.use(cors());
app.use(express.json());

let documentContent = "";

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.emit('load-document', documentContent);

  socket.on('send-changes', (delta) => {
    documentContent = delta;
    socket.broadcast.emit('receive-changes', delta);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
