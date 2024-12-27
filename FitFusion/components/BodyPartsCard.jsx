import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const BodyPartsCard = ({ item, index }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/exercises",
          params: { item: JSON.stringify(item) },
        })
      }
      style={{ width: wp(44), height: wp(52) }}
      className="flex justify-end mb-5"
    >
      <Image
        source={item.image}
        resizeMode="cover"
        style={{ width: wp(44), height: wp(52) }}
        className="rounded-[35px] absolute"
      />
      <LinearGradient
        colors={["transparent", "rgba(0, 0, 0, 0.7)"]}
        // colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={{
          width: wp(44),
          height: hp(15),
          position: "absolute",
          bottom: 0,
          height: "70%",
          width: "100%",
          borderBottomLeftRadius: 35,
          borderBottomRightRadius: 35,
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
      <Text
        style={{ fontSize: hp(2.5) }}
        className="mb-3 font-bold tracking-wide text-center text-white"
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default BodyPartsCard;
