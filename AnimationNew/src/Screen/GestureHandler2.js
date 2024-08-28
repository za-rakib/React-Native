/* eslint-disable react/self-closing-comp */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const GestureHandler2 = () => {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({x: 0, y: 0});
  const start = useSharedValue({x: 0, y: 0});
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: offset.value.x},
        {translateY: offset.value.y},
        {
          scale: withTiming(isPressed.value ? 1.3 : 1, {duration: 1000}),
        },
      ],
      backgroundColor: withTiming(isPressed.value ? 'green' : 'red', {
        duration: 1000,
      }),
      borderRadius: withTiming(isPressed.value ? 50 : 0, {duration: 1000}),
    };
  });
  // console.log({isPressed: offset.value});
  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate(e => {
      console.log({e});
      // offset.value.x = e.translationX + start.value.x;
      // offset.value.y = e.translationY + start.value.y;
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };
    })
    .onEnd(() => {
      // start.value.x = offset.value.x;
      // start.value.y = offset.value.y;
      offset.value.x = 0;
      offset.value.y = 0;
      // isPressed.value = false;
    })
    .onFinalize(() => {
      isPressed.value = false;
    });
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.square, animatedStyles]} />
    </GestureDetector>
  );
};
const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    // alignSelf: 'center',
    margin: 20,
  },
});
export default GestureHandler2;
