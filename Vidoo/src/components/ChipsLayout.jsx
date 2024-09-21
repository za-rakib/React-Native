import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

export default function ChipsLayout() {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 10}}>
        <Text style={styles.tab}>All</Text>
        <Text style={styles.tab}>News</Text>
        <Text style={styles.tab}>Music</Text>
        <Text style={styles.tab}>Programming</Text>
        <Text style={styles.tab}>Javascript</Text>
        <Text style={styles.tab}>Movies</Text>
        <Text style={styles.tab}>Gaming</Text>
        <Text style={styles.tab}>Sports</Text>
        <Text style={styles.tab}>Tech</Text>
        <Text style={styles.tab}>Comedy</Text>
        <Text style={styles.tab}>Lifestyle</Text>
        <Text style={styles.tab}>Education</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 5,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
});
