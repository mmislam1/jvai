import { NextRequest } from "next/server";
import { Server as NetServer } from "http";
import { Server as SocketIOServer } from "socket.io";
import { NextApiResponseServerIO } from "../types/next";
import type { Server as HTTPServer } from "http";

// 👇 We store the socket server instance globally so it isn't recreated on every request
let io: SocketIOServer | undefined;

// This route does not respond like a normal API route.
// It's used to upgrade the HTTP connection to a WebSocket.
export const GET = async (req: NextRequest) => {
  return new Response("Socket endpoint", { status: 200 });
};

// Next.js will call this when the server starts
export const config = {
  api: {
    bodyParser: false,
  },
};

// This is only required if you're using the `pages/api` folder.
// In App Router, we can define socket initialization globally (see below).
