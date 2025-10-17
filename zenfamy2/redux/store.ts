// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import familyReducer from "./slices/familySlice";
import childReducer from "./slices/childSlice";
import storiesReducer from "./slices/storiesSlice";
import userReducer from "./slices/userSlices";
import notificationReducer from "./slices/notificationSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    family: familyReducer,
    childs: childReducer,
    stories: storiesReducer,
    notifications:notificationReducer
  },
});
