/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  runOnJS,
  Extrapolation,
} from 'react-native-reanimated';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

const RongPlayer3 = ({onClose, selectedVideo}) => {
  const {width, height} = useWindowDimensions();

  // Constants for image sizes and positions
  const IMAGE_TOP_DISTANCE = 100;
  const IMAGE_BOTTOM_DISTANCE = width / 1.2;
  const BIG_IMAGE_SIZE = height / 3.2;
  const IMAGE_WIDTH_COL = (width * 33) / 100;
  const bottomTranslateY = (height * 95) / 100 - 120;

  const translateY = useSharedValue(300);
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({x: 0, y: 0});
  const start = useSharedValue({x: 0, y: 0});
  const [isAtBottom, setIsAtBottom] = useState(false);

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
      isPressed.value = true;
      start.value = {x: 0, y: translateY.value};
    })
    .onUpdate(e => {
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };
      translateY.value = offset.value.y;
    })
    .onEnd(() => {
      const endPosition =
        offset.value.y > bottomTranslateY - 80
          ? 0
          : offset.value.y > 100
          ? bottomTranslateY
          : 0;

      translateY.value = withTiming(endPosition, {duration: 300});

      runOnJS(setIsAtBottom)(endPosition === bottomTranslateY);
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  const translateStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));

  const imageStyle = useAnimatedStyle(() => ({
    width: interpolate(
      translateY.value,
      [IMAGE_TOP_DISTANCE, IMAGE_BOTTOM_DISTANCE],
      [width, IMAGE_WIDTH_COL],
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP,
      },
    ),
    height: interpolate(
      translateY.value,
      [IMAGE_TOP_DISTANCE, IMAGE_BOTTOM_DISTANCE],
      [BIG_IMAGE_SIZE, IMAGE_WIDTH_COL - 20],
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP,
      },
    ),
    padding: interpolate(
      translateY.value,
      [IMAGE_TOP_DISTANCE, (height * 70) / 100],
      [0, 5],
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP,
      },
    ),
  }));

  const detailsStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateY.value,
      [IMAGE_TOP_DISTANCE, (height * 70) / 100],
      [1, 0],
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP,
      },
    ),
  }));

  const expandPlayer = () => {
    if (isAtBottom) {
      translateY.value = withTiming(0, {duration: 300});
      runOnJS(setIsAtBottom)(false);
    }
  };

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[translateStyle, styles.wrapper]}>
        <TouchableWithoutFeedback onPress={expandPlayer}>
          <View style={styles.playerContainer}>
            <Animated.View>
              <Animated.View style={[imageStyle]}>
                <Image
                  style={{width: '100%', height: '100%', resizeMode: 'cover'}}
                  source={{
                    uri:
                      selectedVideo?.thumbnail ||
                      'https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg',
                  }}
                />
              </Animated.View>
            </Animated.View>
            <View style={[styles.iconsContainer, {width: (width * 23) / 100}]}>
              <TouchableOpacity
                onPress={e => {
                  e.stopPropagation();
                  onClose();
                }}>
                <Icon name="close" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <Animated.View style={[detailsStyle, styles.container]}>
          <Text style={styles.title}>{selectedVideo?.title}</Text>
          <View style={styles.iconsContainer}>
            <Icon name="like2" size={30} color="black" />
            <Icon name="dislike2" size={30} color="black" />
            <Icon name="sharealt" size={30} color="black" />
            <Icon name="addfile" size={30} color="black" />
          </View>
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
};

export default RongPlayer3;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    elevation: 10,
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 9999,
    overflow: 'hidden',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    lineHeight: 30,
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  iconsContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  playerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
