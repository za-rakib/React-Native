// home.js

import { View, Text, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts";

const Home = () => {
  // Changed to PascalCase for component naming convention
  return (
    <SafeAreaView className="flex flex-1 bg-white" edges={["top"]}>
      <StatusBar style="dark" />
      <View className="flex-row items-center justify-between mx-5 mt-2">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-neutral-700"
          >
            READY TO
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="mt-1 font-bold tracking-wider text-rose-500"
          >
            WORKOUT
          </Text>
        </View>
        <View className="flex items-center justify-center space-y-2">
          <Image
            className="rounded-full"
            source={require("../assets/images/avatar.png")}
            style={{ height: hp(6), width: hp(6) }}
          />
          <View
            className="flex items-center justify-center rounded-full bg-neutral-200 border-[3px] border-neutral-300 mt-2"
            style={{ height: hp(5.5), width: hp(5.5) }}
          >
            <MaterialIcons
              name="notifications-none"
              size={hp(3)}
              color="gray"
            />
          </View>
        </View>
      </View>
      {/* Image slider */}
      <View className="my-4">
        <ImageSlider />
      </View>
      {/* body parts section */}
      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
};

export default Home; // Changed to PascalCase for consistency
