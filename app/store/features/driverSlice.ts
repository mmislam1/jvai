import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

interface Delivery {
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

interface Profile {
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

interface Message {
    userId: string;
    Text: string;
    Timestamp: string;
}

interface Messages {
    orderId: string;
    clientId: string;
    clientAvatar: string;
    messages: Message[];
}

interface Notification{
    id: string;
    text: string;
    timeStamp: string;
}

interface DriverState{
    profile: Profile|null;
    deliveries: Delivery[];
    messages: Messages[];
    notifications: Notification[];
}

const initialState:DriverState={
    profile:null,
    deliveries:[],
    messages:[],
    notifications:[]

}

export const driverSlice = createSlice({
  name: "driver",
  initialState,
  reducers: {
    
  },
});

export const {
} = driverSlice.actions;
export default driverSlice.reducer;