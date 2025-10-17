import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api";

export const getNotification = createAsyncThunk(
  "notification/getNotification",
  async (_, thunkAPI: any) => {
    try {
      const state = thunkAPI.getState();
      const token = state.users.access_token;
      const response = await api.get("/notifications/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const readNotification = createAsyncThunk(
  "notification/readNotification",
  async (data: any, thunkAPI: any) => {
    try {
      const state = thunkAPI.getState();
      const token = state.users.access_token;
      const response = await api.put(`/notifications/${data.id}/mark-read`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error:any) {
      if(error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const contactpost = createAsyncThunk(
  "notification/contactpost",
  async (data: any, thunkAPI: any) => {
    try {
      const state = thunkAPI.getState();
      const token = state.users.access_token;
      const response = await api.post("/support/contact", data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error:any) {
      if(error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    notification: [],
    loading: false,
    error: null as string | null
  },
  reducers: {},
  extraReducers: (builder) => {
    // get notifications
    builder.addCase(getNotification.pending, (state) => {
      state.loading = true;
    })
      .addCase(getNotification.fulfilled, (state, action) => {
        state.loading = false;
        state.notification = action.payload;
      })
      .addCase(getNotification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })

    // mark read notification
    builder.addCase(readNotification.pending, (state) => {
      state.loading = true;
    })
      .addCase(readNotification.fulfilled, (state, action) => {
        state.loading = false;
        state.notification = action.payload;
      })
      .addCase(readNotification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })

  },
});



export default notificationSlice.reducer;
