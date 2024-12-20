const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('message', (msg) => {
        io.emit('message', msg); // 全クライアントに送信
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
