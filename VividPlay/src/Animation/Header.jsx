import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header() {
  return (
    <View style={styles.row}>
      <View style={styles.logo}>
        <Image
          style={styles.logoImage}
          source={require('../assets/logo.png')}
        />
      </View>
      <View style={[styles.row, {width: '30%', marginRight: 10}]}>
        <Feather name="bell" size={25} color="black" />
        <Icon name="rocket" size={30} color="#900" />
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
    width: 100,
    height: 80,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
