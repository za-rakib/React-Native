// src/redux/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";


export const getUsers = createAsyncThunk(
  "users/getUsers", 
  async (_, thunkAPI:any) => {
    try {
      const state = thunkAPI.getState();
      const token = state.users.access_token;
      const response = await api.get("/users/me", {
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

  });

export const createUser = createAsyncThunk(
  "users/createUser",
  async (data: any, thunkAPI: any) => {
    try {
      const response = await api.post("/auth/register", data);
      return response.data;
    } catch (error:any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (data: any, thunkAPI: any) => {
    try {
      const response = await api.post("/auth/login", data);
      return response.data;
    } catch (error:any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const forgotPassword = createAsyncThunk(
  "users/forgotPassword",
  async (data: any, thunkAPI: any) => {
    try {
      const response = await api.post("/auth/forgot-password", data);
      return response.data;
    } catch (error:any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const resetPassword = createAsyncThunk(
  "users/resetPassword",
  async (data: any, thunkAPI: any) => {
    try {
      const state = thunkAPI.getState();
      const token = state.users.access_token;
      const response = await api.post("/auth/reset-password/"+token, data);
      return response.data;
    } catch (error:any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (data: any, thunkAPI: any) => {
    try {
      const state = thunkAPI.getState();
      const token = state.users.access_token;
      const response = await api.put("/users/me", data, {
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

export const reset_password = createAsyncThunk(
  "users/reset_password",
  async (data: any, thunkAPI: any) => {
    try {
      const state = thunkAPI.getState();
      const token = state.users.access_token;
      const response = await api.post("/auth/reset-password/"+token);
      return response.data;
    } catch (error:any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null as string | null,
    access_token: null as string | null
  },
  reducers: {

    clearError: (state) => {
      state.error = null;
    },
    tokenset: (state, action) => {
      state.access_token = action.payload
    },
    userdataset: (state, action) => {
      state.users = action.payload
    }


  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state:any, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state:any, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
        console.log(action);
        
      })
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        //state.users = action.payload;
        state.access_token = action.payload.access_token
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
        console.log(action);
        
      })
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
        console.log(action);
        
      })
    builder
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
        console.log(action);
        
      })
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
        console.log(action);
        
      })
    builder
      .addCase(reset_password.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(reset_password.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(reset_password.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
        console.log(action);
        
      })
  
  },
});

export const { clearError,tokenset,userdataset } = userSlice.actions;
export default userSlice.reducer;
