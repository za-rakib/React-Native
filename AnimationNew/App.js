import React from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Rong from './src/Rong';
import GestureHandler from './src/Screen/GestureHandler';
import Flag from './src/Screen/Flag';
export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* content */}
      {/* <GestureHandler />
      <Flag /> */}
      <Rong />
    </GestureHandlerRootView>
  );
}
