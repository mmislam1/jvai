import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Activity {
  id: string;
  orderId: string;
  status: string;
  timestamp: string;
}

interface DeliveryState {
  todayDeliverers: number;
  pendingOrders: number;
  completedOrders: number;
  activities: Activity[];
}

interface CustomerState {
  delivery: DeliveryState;
  name: string;
  email: string;
  phone: string;
}

const initialState: CustomerState = {
  delivery: {
    todayDeliverers: 2,
    pendingOrders: 2,
    completedOrders: 2,
    activities: [
      {
        id: "1",
        orderId: "12345",
        status: "Delivered Successfully",
        timestamp: "2 hors ago",
      },
      {
        id: "2",
        orderId: "12345",
        status: "Delivered Successfully",
        timestamp: "2 hors ago",
      },
      {
        id: "3",
        orderId: "12345",
        status: "Delivered Successfully",
        timestamp: "2 hors ago",
      },
      {
        id: "4",
        orderId: "12345",
        status: "Delivered Successfully",
        timestamp: "2 hors ago",
      },
      {
        id: "5",
        orderId: "12345",
        status: "Delivered Successfully",
        timestamp: "2 hors ago",
      },
      {
        id: "6",
        orderId: "12345",
        status: "Delivered Successfully",
        timestamp: "2 hors ago",
      },
    ],
  },
  name:'',
  email:'',
  phone:''
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    updateDeliverers: (state, action: PayloadAction<number>) => {
      state.delivery.todayDeliverers = action.payload;
    },
    updatePendingOrders: (state, action: PayloadAction<number>) => {
      state.delivery.pendingOrders = action.payload;
    },
    updateCompletedOrders: (state, action: PayloadAction<number>) => {
      state.delivery.completedOrders = action.payload;
    },
    addActivity: (state, action: PayloadAction<Activity>) => {
      state.delivery.activities.unshift(action.payload);
    },
  },
});

export const {
  updateDeliverers,
    updatePendingOrders,
    updateCompletedOrders,
    addActivity
} = customerSlice.actions;
export default customerSlice.reducer;
