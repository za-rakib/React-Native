// src/redux/storiesSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api";

// Create My Story
export const createMyStory = createAsyncThunk(
  "stories/createMyStory",
  async (data: any, thunkAPI: any) => {
    try {
      const state = thunkAPI.getState();
      const token = state.users.access_token;
      const response = await api.post("/stories/me", data, {
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
);

// List My Stories
export const listMyStories = createAsyncThunk(
  "stories/listMyStories",
  async (_, thunkAPI: any) => {
    try {
      const state = thunkAPI.getState();
      const token = state.users.access_token;
      const response = await api.get("/stories/me", {
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
);

// Retrieve My Story
export const retrieveMyStory = createAsyncThunk(
  "stories/retrieveMyStory",
  async (story_id: string, thunkAPI: any) => {
    try {
      const state = thunkAPI.getState();
      const token = state.users.access_token;
      const response = await api.get(`/stories/me/${story_id}`, {
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
);

// Delete My Story
export const deleteMyStory = createAsyncThunk(
  "stories/deleteMyStory",
  async (story_id: string, thunkAPI: any) => {
    try {
      const state = thunkAPI.getState();
      const token = state.users.access_token;
      const response = await api.delete(`/stories/me/${story_id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return { story_id, data: response.data };
    } catch (error: any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Update My Story Rating
export const updateStoryRating = createAsyncThunk(
  "stories/updateStoryRating",
  async ({ story_id, rating }: { story_id: string; rating: any }, thunkAPI: any) => {
    try {
      const state = thunkAPI.getState();
      const token = state.users.access_token;
      const response = await api.put(`/stories/me/${story_id}/rating`, rating, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return { story_id, data: response.data };
    } catch (error: any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Update My Story Read
export const updateStoryRead = createAsyncThunk(
  "stories/updateStoryRead",
  async ({ story_id, readData }: { story_id: string; readData: any }, thunkAPI: any) => {
    try {
      const state = thunkAPI.getState();
      const token = state.users.access_token;
      const response = await api.put(`/stories/me/${story_id}/read`, readData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return { story_id, data: response.data };
    } catch (error: any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Get Story Audio
export const getStoryAudio = createAsyncThunk(
  "stories/getStoryAudio",
  async (story_id: string, thunkAPI: any) => {
    try {
      const state = thunkAPI.getState();
      const token = state.users.access_token;
      const response = await api.get(`/stories/me/${story_id}/audio`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        responseType: 'blob' // Important for audio files
      });
      return { story_id, audio: response.data };
    } catch (error: any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Get Story PDF
export const getStoryPdf = createAsyncThunk(
  "stories/getStoryPdf",
  async (story_id: string, thunkAPI: any) => {
    try {
      const state = thunkAPI.getState();
      const token = state.users.access_token;
      const response = await api.get(`/stories/me/${story_id}/pdf`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        responseType: 'blob' // Important for PDF files
      });
      return { story_id, pdf: response.data };
    } catch (error: any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Get Latest Story For Child
export const getLatestStoryForChild = createAsyncThunk(
  "stories/getLatestStoryForChild",
  async (child_id: string, thunkAPI: any) => {
    try {
      const state = thunkAPI.getState();
      const token = state.users.access_token;
      const response = await api.get(`/children/me/${child_id}/stories/latest`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return { child_id, data: response.data };
    } catch (error: any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

interface StoryState {
  stories: any[];
  currentStory: any | null;
  loading: boolean;
  error: string | null;
  audio: { [key: string]: Blob | null };
  pdf: { [key: string]: Blob | null };
  latestStories: { [key: string]: any | null };
}

const initialState: StoryState = {
  stories: [],
  currentStory: null,
  loading: false,
  error: null,
  audio: {},
  pdf: {},
  latestStories: {}
};

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearCurrentStory: (state) => {
      state.currentStory = null;
    },
    clearAudio: (state, action) => {
      const storyId = action.payload;
      if (storyId) {
        state.audio[storyId] = null;
      } else {
        state.audio = {};
      }
    },
    clearPdf: (state, action) => {
      const storyId = action.payload;
      if (storyId) {
        state.pdf[storyId] = null;
      } else {
        state.pdf = {};
      }
    }
  },
  extraReducers: (builder) => {
    // Create My Story
    builder
      .addCase(createMyStory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createMyStory.fulfilled, (state, action) => {
        state.loading = false;
        state.stories.push(action.payload);
      })
      .addCase(createMyStory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });

    // List My Stories
    builder
      .addCase(listMyStories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(listMyStories.fulfilled, (state, action) => {
        state.loading = false;
        state.stories = action.payload;
      })
      .addCase(listMyStories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });

    // Retrieve My Story
    builder
      .addCase(retrieveMyStory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(retrieveMyStory.fulfilled, (state, action) => {
        state.loading = false;
        state.currentStory = action.payload;
      })
      .addCase(retrieveMyStory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });

    // Delete My Story
    builder
      .addCase(deleteMyStory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteMyStory.fulfilled, (state, action) => {
        state.loading = false;
        state.stories = state.stories.filter(story => story.id !== action.payload.story_id);
        if (state.currentStory && state.currentStory.id === action.payload.story_id) {
          state.currentStory = null;
        }
      })
      .addCase(deleteMyStory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });

    // Update Story Rating
    builder
      .addCase(updateStoryRating.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStoryRating.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.stories.findIndex(story => story.id === action.payload.story_id);
        if (index !== -1) {
          state.stories[index] = { ...state.stories[index], ...action.payload.data };
        }
        if (state.currentStory && state.currentStory.id === action.payload.story_id) {
          state.currentStory = { ...state.currentStory, ...action.payload.data };
        }
      })
      .addCase(updateStoryRating.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });

    // Update Story Read
    builder
      .addCase(updateStoryRead.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStoryRead.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.stories.findIndex(story => story.id === action.payload.story_id);
        if (index !== -1) {
          state.stories[index] = { ...state.stories[index], ...action.payload.data };
        }
        if (state.currentStory && state.currentStory.id === action.payload.story_id) {
          state.currentStory = { ...state.currentStory, ...action.payload.data };
        }
      })
      .addCase(updateStoryRead.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });

    // Get Story Audio
    builder
      .addCase(getStoryAudio.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStoryAudio.fulfilled, (state, action) => {
        state.loading = false;
        state.audio[action.payload.story_id] = action.payload.audio;
      })
      .addCase(getStoryAudio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });

    // Get Story PDF
    builder
      .addCase(getStoryPdf.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStoryPdf.fulfilled, (state, action) => {
        state.loading = false;
        state.pdf[action.payload.story_id] = action.payload.pdf;
      })
      .addCase(getStoryPdf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });

    // Get Latest Story For Child
    builder
      .addCase(getLatestStoryForChild.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLatestStoryForChild.fulfilled, (state, action) => {
        state.loading = false;
        state.latestStories[action.payload.child_id] = action.payload.data;
      })
      .addCase(getLatestStoryForChild.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  }
});

export const { clearError, clearCurrentStory, clearAudio, clearPdf } = storiesSlice.actions;
export default storiesSlice.reducer;