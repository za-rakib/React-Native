import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from './Icon';

export default function Header() {
  return (
    <View style={styles.row}>
      <View style={styles.logo}>
        <Image
          style={styles.logoImage}
          source={require('../assets/screenshots/cat.jpg')}
        />
      </View>
      <View style={[styles.icon, {width: '30%'}]}>
        <Icon name="search" color="black" size={24} />
        <Icon name="camera" color="black" size={26} />
        <Icon name="notifications" color="black" size={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 50,
    height: 50,
    borderRadius: 50, // Half of the width or height to round the image
    resizeMode: 'cover', // Ensures the image fits well within the rounded shape
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
