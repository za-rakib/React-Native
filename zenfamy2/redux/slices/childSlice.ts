import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api";

export const createChild = createAsyncThunk(
  "child/createChild",
  async (data: any, thunkAPI: any) => {
    try {
      const state = thunkAPI.getState();
      const token = state.users.access_token;
      const response = await api.post("/children/me", data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error:any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const getMyChild = createAsyncThunk(
  "child/getMyChild",
  async (_, thunkAPI: any) => {
    try {
      const state = thunkAPI.getState();
      const token = state.users.access_token;
      const response = await api.get("/children/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error:any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

const childSlice = createSlice({
  name: "childs",
  initialState: {
    childs: [],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createChild.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createChild.fulfilled, (state, action) => {
        state.loading = false;
        state.childs = action.payload;
      })
      .addCase(createChild.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
    builder
      .addCase(getMyChild.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMyChild.fulfilled, (state, action) => {
        state.loading = false;
        state.childs = action.payload;
      })
      .addCase(getMyChild.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
  },
});

export default childSlice.reducer;