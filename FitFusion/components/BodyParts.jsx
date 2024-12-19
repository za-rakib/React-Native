import { View, Text, FlatList } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { bodyParts } from "../constants";
import BodyPartsCard from "./BodyPartsCard";

const BodyParts = () => {
  return (
    <View className="mx-5">
      <Text style={{ fontSize: hp(3) }} className="font-bold text-neutral-700">
        Exercises
      </Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <BodyPartsCard item={item} index={index} />
        )}
      />
    </View>
  );
};

export default BodyParts;
