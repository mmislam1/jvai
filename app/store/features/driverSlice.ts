import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";
import { Search } from "lucide-react";

export interface Delivery {
    deliveryId: string;
    orderId: string;
    orderDate: string;
    deliveryDate: string;
    payment: number;
    Pickup: string;
    dropOff: string;
    Distance: number;
    Earning: number;
    Company: string;
    Status: "pending" | "delivered";
    Description: string;
    rating: number;
}

export interface Profile {
    name: string;
    totalEarning: number;
    driverId: string;
    Avatar: string;
    Email: string;
    phoneNumber: string;
    Vehicle: "bike" | "pickup" | "truck";
    vehicleRegistration: string;
    drivingLicense: string;
}

export interface Message {
    userId: string;
    Text: string;
    Timestamp: string;
}

export interface Messages {
    orderId: string;
    clientId: string;
    clientAvatar: string;
    messages: Message[];
}

export interface Notification{
    id: string;
    text: string;
    timeStamp: string;
}

export interface DriverState{
    profile: Profile|null;
    deliveries: Delivery[];
    messages: Messages[];
    notifications: Notification[];
    searchDelivery: null| Delivery;
}

export const initialState:DriverState={
    profile:null,
    deliveries:[],
    messages:[],
    notifications:[],
    searchDelivery: {deliveryId: 'string',
    orderId: 'string',
    orderDate: 'string',
    deliveryDate: 'string',
    payment: 7867,
    Pickup: 'string',
    dropOff: 'string',
    Distance: 675688,
    Earning: 465467879,
    Company: 'string',
    Status: "pending" ,
    Description: 'string',
    rating: 4,},
}

export const driverSlice = createSlice({
  name: "driver",
  initialState,
  reducers: {
    acceptOrder: (state) => {
      state.deliveries=state.searchDelivery?[...state.deliveries,state.searchDelivery]:state.deliveries
      state.searchDelivery=null
    },
    declineOrder: (state) => {
      state.searchDelivery=null
    },
  },
});

export const {
    acceptOrder,
    declineOrder,

} = driverSlice.actions;
export default driverSlice.reducer;