import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

const exercises = () => {
  const { item } = useLocalSearchParams();
  const parsedItem = JSON.parse(item);
  const router = useRouter();

  console.log(parsedItem);
  return (
    <View>
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
