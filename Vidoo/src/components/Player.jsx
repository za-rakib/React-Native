/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  interpolate,
  Extrapolation,
  runOnJS,
  interpolateColor,
} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {movePlayerToTop, setPlayerItem} from '../features/video/videoSlice';
import Icon from './Icon';

const SIZES = Dimensions.get('window');
const screenHeight = Dimensions.get('screen').height;
const VIDEO_TOP_DISTANCE = 80;
const BIG_VIDEO_SIZE = SIZES.height / 3.2;
const VIDEO_HEIGHT_COL = (SIZES.width * 33) / 130;

const Player = () => {
  const dispatch = useDispatch();
  const isFullScreen = useSelector(state => state.video.isFullScreen);
  const playerItem = useSelector(state => state.video.playerItem);
  const [localIsAtBottom, setLocalIsAtBottom] = useState(false);

  const BOTTOM_TRANSLATE_Y = useMemo(
    () => (screenHeight * 95) / 100 - VIDEO_HEIGHT_COL - 80,
    [],
  );

  const translateY = useSharedValue(BOTTOM_TRANSLATE_Y);
  const opacity = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const startY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withTiming(0, {duration: 300});
  }, [playerItem]);

  const gesture = Gesture.Pan()
    .minDistance(20)
    .onStart(() => {
      if (isFullScreen) return;
      startY.value = translateY.value;
      opacity.value = withTiming(0, {duration: 200});
    })
    .onUpdate(e => {
      if (isFullScreen) return;
      offsetY.value = e.translationY + startY.value;
      translateY.value = Math.max(offsetY.value, 0);
    })
    .onEnd(e => {
      if (isFullScreen) return;
      const endPosition =
        e.velocityY > 0 && (offsetY.value > 100 || e.velocityY > 800)
          ? BOTTOM_TRANSLATE_Y
          : 0;

      translateY.value = withSpring(endPosition, {
        damping: 15,
        stiffness: 100,
        velocity: e.velocityY,
      });
      runOnJS(setLocalIsAtBottom)(endPosition === BOTTOM_TRANSLATE_Y);
      if (endPosition === 0) {
        opacity.value = withSpring(1, {
          damping: 20,
          stiffness: 90,
        });
      }
    });

  const expandPlayer = () => {
    if (isFullScreen) return;
    dispatch(movePlayerToTop());
    const newIsAtBottom = !localIsAtBottom;
    translateY.value = withSpring(newIsAtBottom ? BOTTOM_TRANSLATE_Y : 0, {
      damping: 15,
      stiffness: 100,
    });
    runOnJS(setLocalIsAtBottom)(newIsAtBottom);
    if (!newIsAtBottom) {
      opacity.value = withSpring(1, {
        damping: 20,
        stiffness: 90,
      });
    }
  };

  const handleClose = () => {
    dispatch(setPlayerItem(null));
  };

  const translateStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));

  const containerStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      translateY.value,
      [0, BOTTOM_TRANSLATE_Y],
      ['black', '#1f1f1f'],
    ),
  }));

  // Styles for video translation and resizing
  //   const translateStyle = useAnimatedStyle(() => ({
  //     transform: [
  //       {translateY: isFullScreen ? 0 : translateY.value},
  //       {scale: scale.value},
  //     ],
  //   }));

  const videoStyle = useAnimatedStyle(() => ({
    width: interpolate(
      translateY.value,
      [VIDEO_TOP_DISTANCE, BOTTOM_TRANSLATE_Y],
      [SIZES.width, (SIZES.width * 33) / 100],
      Extrapolation.CLAMP,
    ),
    height: interpolate(
      translateY.value,
      [VIDEO_TOP_DISTANCE, BOTTOM_TRANSLATE_Y],
      [BIG_VIDEO_SIZE, (SIZES.width * 33) / 100],
      Extrapolation.CLAMP,
    ),
  }));

  return (
    <Animated.View
      style={[
        translateStyle,
        containerStyle,
        {
          width: '100%',
          height: screenHeight,
          position: 'absolute',
          zIndex: 9999,
          overflow: 'hidden',
        },
      ]}>
      <GestureDetector gesture={gesture}>
        <TouchableWithoutFeedback onPress={expandPlayer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Animated.View style={videoStyle}>
              <Image
                style={{width: '100%', height: '100%', resizeMode: 'cover'}}
                source={require('../assets/screenshots/logo.jpg')}
              />
            </Animated.View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: (SIZES.width * 23) / 100,
              }}>
              <TouchableOpacity
                onPress={handleClose}
                style={{height: 40, width: 40}}>
                <Icon name="close" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </GestureDetector>
    </Animated.View>
  );
};

export default Player;
