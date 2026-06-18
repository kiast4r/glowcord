const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

// Initialize Socket.io with cross-origin rights for your React frontend
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Connect to MongoDB Database
connectDB();

// Global Middlewares
app.use(cors());
app.use(express.json());

// Main Express API endpoints
app.use('/api/auth', require('./routes/auth'));

// Live Real-Time Socket Connections (Discord Chat Core)
io.on('connection', (socket) => {
  console.log('✨ A user connected via socket:', socket.id);

  // When a user enters a specific text channel
  socket.on('join_channel', (channelId) => {
    socket.join(channelId);
    console.log(`📡 User joined channel: ${channelId}`);
  });

  // When a user transmits a fresh text message
  socket.on('send_message', (data) => {
    // Broadcast message to everyone safely tucked inside that specific channel
    io.to(data.channelId).emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('👋 User disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🏄‍♀️ Dreamin' backend riding waves on port ${PORT}`));
