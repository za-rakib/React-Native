import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isFullScreen: false,
  playerItem: null,
  isAtBottom: false,
};

const name = 'video';

const videoSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setFullScreen: (state, action) => {
      state.isFullScreen = action.payload;
    },
    setPlayerItem: (state, action) => {
      console.log({action});
      state.playerItem = action.payload ? action.payload : null;
    },
    movePlayerToBottom: state => {
      state.isAtBottom = true;
    },
    movePlayerToTop: state => {
      state.isAtBottom = false;
    },
  },
});

export const {
  setFullScreen,
  setPlayerItem,
  movePlayerToBottom,
  movePlayerToTop,
} = videoSlice.actions;
export default videoSlice.reducer;
