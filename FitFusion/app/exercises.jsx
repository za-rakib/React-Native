import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const exercises = () => {
  const { item } = useLocalSearchParams();
  const parsedItem = JSON.parse(item);
  const router = useRouter();

  console.log(parsedItem);
  return (
    <View className="mt-20">
      <TouchableOpacity onPress={() => router.back()}>
        <Text
          style={{ fontSize: hp(2.5) }}
          className="mt-2 font-bold text-neutral-500"
        >
          Back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default exercises;
