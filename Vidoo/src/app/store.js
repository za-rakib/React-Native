import {configureStore} from '@reduxjs/toolkit';
import imagesReducers from '../features/images/imagesSlice';
import videoReducers from '../features/video/videoSlice';
const store = configureStore({
  reducer: {
    images: imagesReducers,
    video: videoReducers,
  },
});

export default store;
