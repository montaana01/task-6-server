import express from 'express';
import http from "node:http";
import { WebSocketServer, WebSocket } from "ws";

const app = express();

app.get('/', (req, res) => {
  res.send({ ok: true, service: 'websocket-6-task-server' });
});

const server = http.createServer(app);

const wss = new WebSocketServer({ noServer: true });

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
