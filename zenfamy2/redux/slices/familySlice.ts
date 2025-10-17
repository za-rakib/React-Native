import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api";

export const createFamily = createAsyncThunk(
  "family/createFamily",
  async (data: any, thunkAPI: any) => {
    try {
      const state = thunkAPI.getState();
      const token = state.users.access_token;
      const response = await api.post("/families", data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error:any) {
      console.log(thunkAPI.getState());
      
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

const familySlice = createSlice({
  name: "family",
  initialState: {
    family: [],
    loading: false,
    error: null as string | null,
    familyDraft: {}
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setFamilyDraft: (state, action) => {
      state.familyDraft = { ...state.familyDraft, ...action.payload };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createFamily.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createFamily.fulfilled, (state, action) => {
        state.loading = false;
        state.family = action.payload;
      })
      .addCase(createFamily.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
  }
})

export const { clearError,setFamilyDraft } = familySlice.actions;
export default familySlice.reducer