/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import {transform} from '@babel/core';

const SIZES = Dimensions.get('window');

// IMAGE SIZES
const IMAGE_TOP_DISTANCE = 100;
const screenWidth = Dimensions.get('screen').width;
const IMAGE_BOTTOM_DISTANCE = SIZES.width / 1.2;
const BIG_IMAGE_SIZE = SIZES.height / 3.2;

// IMAGE WIDTH
const IMAGE_WIDTH_COL = (SIZES.width * 33) / 100;

const screenHeight = Dimensions.get('screen').height;
let bottomTranslateY = (screenHeight * 95) / 100 - IMAGE_WIDTH_COL - 20;

const RongPlayer = ({onClose, selectedVideo}) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({x: 0, y: 0});
  const start = useSharedValue({x: 0, y: 0});
  useEffect(() => {
    translateY.value = withTiming(0, {duration: 300});
  }, []);

  useEffect(() => {
    if (selectedVideo) {
      translateY.value = withTiming(0, {duration: 300});
    }
  }, [selectedVideo]);

  const gesture = Gesture.Pan()
    .onStart(() => {
      // Flag the start of the gesture
      isPressed.value = true;
      // Store the initial position for tracking
      start.value = {x: translateX.value, y: translateY.value};
    })
    .onUpdate(e => {
      // Log the event details for debugging (optional)
      console.log({e});
      // Calculate the offset based on the current event and initial position
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };
      // Update the translateY value directly for animation (adjust as needed)
      translateY.value = offset.value.y;
    })
    .onEnd(() => {
      // Update the starting position based on the final offset
      start.value = {x: offset.value.x, y: offset.value.y};
      // Determine the end position based on specific logic
      const endPosition =
        offset.value.y > bottomTranslateY - 80
          ? 0
          : offset.value.y > 100
          ? bottomTranslateY
          : 0;
      // Animate the transition to the end position
      translateY.value = withTiming(endPosition, {duration: 300});
    })
    .onFinalize(() => {
      // Reset the pressed flag after gesture completes
      isPressed.value = false;
    });

  const translateStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(
        translateY.value,
        [IMAGE_TOP_DISTANCE, IMAGE_BOTTOM_DISTANCE],
        [SIZES.width, IMAGE_WIDTH_COL],
        {
          extrapolateLeft: Extrapolation.CLAMP,
          extrapolateRight: Extrapolation.CLAMP,
        },
      ),
      height: interpolate(
        translateY.value,
        [IMAGE_TOP_DISTANCE, IMAGE_BOTTOM_DISTANCE],
        [BIG_IMAGE_SIZE, IMAGE_WIDTH_COL],
        {
          extrapolateLeft: Extrapolation.CLAMP,
          extrapolateRight: Extrapolation.CLAMP,
        },
      ),
    };
  });
  return (
    <Animated.View style={[translateStyle, styles.wrapper]}>
      <View style={styles.playerContainer}>
        <GestureDetector gesture={gesture}>
          <Animated.View>
            <TouchableWithoutFeedback style={styles.playerContainer}>
              <Animated.View style={[imageStyle]}>
                <Image
                  style={[{width: '100%', height: '100%', resizeMode: 'cover'}]}
                  source={{
                    uri:
                      selectedVideo?.thumbnail ||
                      'https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg',
                  }}
                />
              </Animated.View>
            </TouchableWithoutFeedback>
            {/* <Image
              style={[{width: '100%', height: '100%', resizeMode: 'cover'}]}
              source={{
                uri:
                  selectedVideo?.thumbnail ||
                  'https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg',
              }}
            /> */}
          </Animated.View>
        </GestureDetector>
        <View
          style={[styles.iconsContainer, {width: (SIZES.width * 23) / 100}]}>
          {/* <Icon2 name="controller-play" size={30} color="black" /> */}
          <TouchableOpacity
            onPress={e => {
              e.stopPropagation();
              onClose();
            }}>
            <Icon name="close" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{color: 'red', marginTop: 30}}>RongPlayer</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    elevation: 10,
    width: '100%',
    height: SIZES.height,
    position: 'absolute',
    zIndex: 9999,
    overflow: 'hidden',
  },
  playerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconsContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default RongPlayer;
