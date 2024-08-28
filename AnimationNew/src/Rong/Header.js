import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header() {
  return (
    <View style={styles.row}>
      {/* <Image
        style={styles.logo}
        source={{
          uri: 'https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg',
        }}
      /> */}
      <View style={styles.logo}>
        <Image
          style={styles.logoImage}
          source={require('../assets/Rong.png')}
        />
      </View>
      <View style={[styles.row, {width: '30%', marginRight: 10}]}>
        <Feather name="cast" size={25} color="black" />
        <Ionicons name="notifications-outline" size={25} color="black" />
        <Feather name="search" size={25} color="black" />
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
    width: 80,
    height: 50,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
