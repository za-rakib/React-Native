import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import "../global.css";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  return (
    <View className="flex justify-end flex-1">
      <StatusBar style="light" />
      <Image
        className="absolute w-full h-full"
        source={require("../assets/images/welcome.png")}
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        // colors={["#4c669f", "#3b5998", "#192f6a"]}
        // style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="justify-end space-y-8 w-full h-[70%]"
      >
        <Animated.View
          entering={FadeInDown.delay(200).springify()}
          className="flex items-center mb-12"
        >
          <Text
            className="font-bold tracking-wide text-white"
            style={{ fontSize: hp(5) }}
          >
            Best <Text className="text-rose-500">Workouts</Text>
          </Text>
          <Text
            className="font-bold tracking-wide text-white"
            style={{ fontSize: hp(5) }}
          >
            For You
          </Text>
        </Animated.View>

        <View className="mb-12">
          <TouchableOpacity
            onPress={() => router.replace("home")}
            style={{ height: hp(7), width: wp(80) }}
            className="flex items-center justify-center mx-auto border-2 rounded-full bg-rose-500 border-neutral-200"
          >
            <Text
              style={{ fontSize: hp(3) }}
              className="font-bold tracking-widest text-white"
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
