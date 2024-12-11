import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const home = () => {
  return (
    <View className="m-auto">
      <Link href="" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#ff2222",
  },
});
