import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] },
});

io.on('connection', (socket) => {
  let userId = null;

  socket.on('register', ({ userId: uid }) => {
    userId = uid;
    socket.join(uid);
  });

  socket.on('message', (payload) => {
    // Relay to recipient room
    const { to } = payload;
    io.to(to).emit('message', payload);
    // Optionally echo back delivery receipt
  });

  socket.on('disconnect', () => {
    if (userId) {
      // Presence offline can be emitted here if needed
    }
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Realtime server listening on http://localhost:${PORT}`);
});


