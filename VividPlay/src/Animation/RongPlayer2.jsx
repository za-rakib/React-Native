/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
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

const SIZES = Dimensions.get('window');

// IMAGE SIZES
const IMAGE_TOP_DISTANCE = 50;
const IMAGE_BOTTOM_DISTANCE = SIZES.width / 1.2;
const BIG_IMAGE_SIZE = SIZES.height / 3.2;

// IMAGE WIDTH
const IMAGE_WIDTH_COL = (SIZES.width * 33) / 100;

const screenHeight = Dimensions.get('screen').height;
let bottomTranslateY = (screenHeight * 95) / 100 - IMAGE_WIDTH_COL - 20;

const RongPlayer2 = ({onClose, selectedVideo}) => {
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

      // Update isAtBottom state using runOnJS
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
      [SIZES.width, IMAGE_WIDTH_COL],
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
      [IMAGE_TOP_DISTANCE, (SIZES.height * 70) / 100],
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
      [IMAGE_TOP_DISTANCE, (SIZES.height * 70) / 100],
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
        {/* PLAYER Section */}
        <TouchableWithoutFeedback onPress={expandPlayer}>
          <View style={styles.playerContainer}>
            <Animated.View>
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
            </Animated.View>
            <View
              style={[
                styles.iconsContainer,
                {width: (SIZES.width * 23) / 100},
              ]}>
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
          {/* Like Dislike Buttons */}
          <View style={styles.iconsContainer}>
            <Icon name="like2" size={30} color="black" />
            <Icon name="dislike2" size={30} color="black" />
            <Icon name="sharealt" size={30} color="black" />
            <Icon name="addfile" size={30} color="black" />
          </View>

          {/* Channel Info */}
          <View style={[styles.rowCenter, {justifyContent: 'space-between'}]}>
            <View style={styles.rowCenter}>
              <Image
                style={styles.channelLogo}
                source={{
                  uri:
                    selectedVideo?.channelLogo ||
                    'https://yt3.ggpht.com/ytc/AKedOLR-TP_Uc-gh9UWENj1CsWNVyxDRwCikaVARVwhY=s48-c-k-c0x00ffffff-no-rj',
                }}
              />
              <View>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, marginBottom: 5}}>
                  {selectedVideo?.channelName}
                </Text>
                <Text>41.7K subscribers</Text>
              </View>
            </View>

            <Text style={styles.subBtn}>Subscribe</Text>
          </View>
          <Text style={{fontWeight: 'bold', marginTop: 20}}>Comments - 20</Text>
          <Text style={styles.commentSection}>Add Comment...</Text>
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
};

export default RongPlayer2;

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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    lineHeight: 30,
  },
  sideTitle: {
    paddingLeft: 5,
    fontSize: 18,
    color: 'black',
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
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subBtn: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'red',
    padding: 10,
  },
  playerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commentSection: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 8,
    paddingLeft: 20,
    marginTop: 10,
  },
  channelLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50,
    resizeMode: 'contain',
  },
});
