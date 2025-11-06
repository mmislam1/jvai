import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Message {
  id: string;
  sender: "user" | "agent";
  text: string;
  timestamp: Date;
  avatar: string;
  name: string;
}

interface ChatState {
  messages: Message[];
  loading: boolean;
  agentName: string;
  agentAvatar: string;
  userName: string;
  userAvatar: string;
}

const initialState: ChatState = {
  messages: [
    {
      id: "1",
      sender: "user",
      text: "Hi, are you on the way with my truck brake pads order?",
      timestamp: new Date(Date.now() - 5 * 60000),
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      name: "You",
    },
    {
      id: "2",
      sender: "agent",
      text: "Hello! Yes, I picked up your order from the warehouse. I'll reach your location in about 25 minutes.",
      timestamp: new Date(Date.now() - 4.5 * 60000),
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      name: "Sarah",
    },
    {
      id: "3",
      sender: "user",
      text: "Great! Please handle carefully, these are heavy parts.",
      timestamp: new Date(Date.now() - 4 * 60000),
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      name: "You",
    },
    {
      id: "4",
      sender: "agent",
      text: "Don't worry, I've secured the parts in the truck. Do you prefer delivery at the garage entrance or inside the workshop?",
      timestamp: new Date(Date.now() - 3.5 * 60000),
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      name: "Sarah",
    },
    {
      id: "5",
      sender: "user",
      text: "At the garage entrance is fine. I'll be waiting there.",
      timestamp: new Date(Date.now() - 3 * 60000),
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      name: "You",
    },
    {
      id: "6",
      sender: "agent",
      text: "👍 I'll call you once I arrive",
      timestamp: new Date(Date.now() - 2.5 * 60000),
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      name: "Sarah",
    },
    {
      id: "7",
      sender: "user",
      text: "Thanks, see you soon!",
      timestamp: new Date(Date.now() - 2 * 60000),
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      name: "You",
    },
  ],
  loading: false,
  agentName: "Sarah",
  agentAvatar:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  userName: "You",
  userAvatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setAgentInfo: (
      state,
      action: PayloadAction<{ name: string; avatar: string }>
    ) => {
      state.agentName = action.payload.name;
      state.agentAvatar = action.payload.avatar;
    },
    setUserInfo: (
      state,
      action: PayloadAction<{ name: string; avatar: string }>
    ) => {
      state.userName = action.payload.name;
      state.userAvatar = action.payload.avatar;
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const {
  addMessage,
  setLoading,
  setAgentInfo,
  setUserInfo,
  clearMessages,
} = chatSlice.actions;

export default chatSlice.reducer;