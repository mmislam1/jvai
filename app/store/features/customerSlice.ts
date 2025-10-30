import { createSlice, PayloadAction ,createAsyncThunk} from "@reduxjs/toolkit";

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
  notifications: Notification[];
}

interface Notification {
  id: string;
  orderId: string;
  message: string;
  timestamp: number;
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
  name: "",
  email: "",
  phone: "",
  notifications: [
    {
      id: "1",
      orderId: "ID#12345",
      message: "Driver on the way",
      timestamp: 1,
    },
    {
      id: "2",
      orderId: "ID#12345",
      message: "Driver on the way",
      timestamp: 1,
    },
    {
      id: "3",
      orderId: "ID#12345",
      message: "Driver on the way",
      timestamp: 1,
    },
    {
      id: "4",
      orderId: "ID#12345",
      message: "Driver on the way",
      timestamp: 1,
    },
    {
      id: "5",
      orderId: "ID#12345",
      message: "Driver on the way",
      timestamp: 1,
    },
    {
      id: "6",
      orderId: "ID#12345",
      message: "Driver on the way",
      timestamp: 1,
    },
    {
      id: "7",
      orderId: "ID#12345",
      message: "Driver on the way",
      timestamp: 1,
    },
  ],
};

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (_, { rejectWithValue }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const mockData: Notification[] = Array.from({ length: 7 }, (_, i) => ({
        id: `notif-${i + 1}`,
        orderId: 'ID#12345',
        message: 'Driver on the way',
        timestamp: (Date.now() - (2 * 60 * 60 * 1000)),
      }));
      
      return mockData;
    } catch (error) {
      return rejectWithValue('Failed to fetch notifications');
    }
  }
);

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
    deleteNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(n => n.id !== action.payload);
    },
    clearAllNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const {
  updateDeliverers,
  updatePendingOrders,
  updateCompletedOrders,
  addActivity,
  deleteNotification,
  clearAllNotifications
} = customerSlice.actions;
export default customerSlice.reducer;
