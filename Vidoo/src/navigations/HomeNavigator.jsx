import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME, IMAGE_DETAIL, LIVE, REDUX} from '../constants/routeNames';
import Home from '../screens/Home';
import Live from '../screens/Live';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator
      initialRouteName={REDUX}
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={HOME} component={Home} />
      <HomeStack.Screen name={LIVE} component={Live} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
