import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
const SIZES = Dimensions.get('window');

const Player = () => {
  return (
    <Animated.View style={[styles.wrapper]}>
      <Text>PlayerAnimation</Text>
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
export default Player;
