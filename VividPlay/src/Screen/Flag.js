/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Flag = () => {
  const animation = useSharedValue(1);
  const [clicked, setClicked] = useState(false);
  const animatedStyle = useAnimatedStyle(() => {
    const width = interpolate(animation.value, [1, 0], [200, 200]);
    const height = interpolate(animation.value, [1, 0], [100, 100]);
    //  const borderRadius = interpolate(animation.value, [1, 0], [0, 100]);
    const backgroundColor = interpolateColor(
      animation.value,
      [1, 0],
      ['green', '#007CC2'],
    );
    //  console.log({width});
    return {
      width: width,
      height: height,
      backgroundColor,
      // borderRadius,
    };
  });
  const circleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animation.value,
      [1, 0],
      ['red', '#FFCC00'],
    );
    return {
      backgroundColor,
    };
  });
  // useEffect(() => {
  //   console.log({animation});
  // }, [animation]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={{
          color: 'red',
          fontSize: 30,
          marginTop: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Animation
      </Text>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View
          style={[
            {
              height: 50,
              width: 150,
              backgroundColor: '#ee3333',
              justifyContent: 'center',
              alignItems: 'center',
            },
            animatedStyle,
          ]}>
          <Animated.View
            style={[
              {
                height: 60,
                width: 60,
                backgroundColor: '#fff',
                borderRadius: 30,
                borderColor: '#000',
              },
              circleStyle,
            ]}></Animated.View>
        </Animated.View>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            height: 50,
            width: 150,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
          onPress={() => {
            // animation.value = 0;
            if (clicked) {
              animation.value = withTiming(1, {duration: 500});
            } else {
              animation.value = withTiming(0, {duration: 500});
            }
            setClicked(!clicked);
          }}>
          <Text>Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Flag;
