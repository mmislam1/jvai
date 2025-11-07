import express from "express";
import http from "http";
import { Server } from "socket.io";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = parseInt(process.env.PORT || "3000", 10);

async function main() {
  await app.prepare();

  const expressApp = express();
  const server = http.createServer(expressApp);

  // ✅ Initialize Socket.IO server
  const io = new Server(server, {
    path: "/api/socket",
    cors: {
      origin: "*", // or specify your frontend URL
      methods: ["GET", "POST"],
    },
  });

  // ✅ Socket.IO logic
  io.on("connection", (socket) => {
    console.log("🟢 Client connected:", socket.id);

    // Example: send message
    socket.emit("welcome", { message: "Hello from Socket.IO server!" });

    socket.on("chat", (data) => {
      console.log("💬 Chat message:", data);
      // Broadcast to all clients
      io.emit("chat", data);
    });

    socket.on("disconnect", () => {
      console.log("🔴 Client disconnected:", socket.id);
    });
  });

  // Let Next.js handle everything else
  expressApp.all("*", (req, res) => handle(req, res));

  server.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
}

main().catch(console.error);
