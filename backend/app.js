const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins for simplicity
  }
});

// In-memory data store for poll results
const pollData = {
  'Go': 0,
  'Python': 0,
  'JavaScript': 0,
  'Rust': 0
};

io.on('connection', (socket) => {
  console.log('A user connected');

  // Send the current poll data to the newly connected client
  socket.emit('update', pollData);

  // Listen for a 'vote' event from a client
  socket.on('vote', (option) => {
    if (pollData.hasOwnProperty(option)) {
      pollData[option]++;
      // Broadcast the updated poll data to all connected clients
      io.emit('update', pollData);
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(4000, () => {
  console.log('Polling server listening on port 4000');
});