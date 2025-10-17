import Button from "@/components/Buttons/Button";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Journal from "./compoents/Journal";
import Quiz from "./compoents/Quiz";
import Tips from "./compoents/Tips";

import MainNav from "@/components/Navigation/MainNav";
import { router } from "expo-router";

const Index = () => {
  const [showNav, setshowNav] = useState(false);
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "#87CEEB" }}>
        <ImageBackground
          source={require("../../assets/images/bg/homebg.png")}
          resizeMode="stretch"
          style={{ height: 325, width: "100%" }}
          className="justify-center"
        >
          <View
            className="flex-row items-center justify-between p-4 "
            style={{ marginTop: -30 }}
          >
            <View className="flex-row items-center relative">
              <Image
                source={require("../../assets/images/imoji/animoji.png")}
                className="mr-2"
              />
              <Text className="text-[12px] w-[64px] bg-[#4682B4] text-white text-center p-1 rounded-full absolute -bottom-3 left-[1px]">
                Premium
              </Text>
              <View>
                <Text className="text-[16px] font-bold text-white">
                  Good Morning, Sarah!
                </Text>
                <Text className="text-[12px] font-bold text-white">
                  What's happening today!
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => router.push("/notification")}
              className="w-[56px] h-[56px] bg-white/80 rounded-full flex-row items-center justify-center"
            >
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#4682B4"
              />
            </TouchableOpacity>
          </View>

          <View className="p-4">
            <View
              className="bg-[#4682B4] p-2 rounded-xl flex-row items-center"
              style={{
                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 4,
                elevation: 2,
              }}
            >
              <Image
                className="h-[60px] w-[60px] bg-white/80 rounded-lg"
                resizeMode="contain"
                source={require("../../assets/images/login/notifi.png")}
              />
              <View className="ml-3">
                <Text className="font-bold text-[14px] w-[80%] text-white">
                  Your story is ready!
                </Text>
                <Text className="font-bold text-[14px] text-white">
                  Let’s enjoy this adventure together.
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>

        {/* Story Add */}
        <View className="flex-row items-center justify-start -mt-[70px]">
          <TouchableOpacity className="items-center  p-4">
            <Image
              source={require("../../assets/images/imoji/animoji.png")}
              className="w-[64px] h-[64px] bg-white/80 rounded-full flex-row items-cente border-[3px] justify-center"
              style={{ borderColor: "#4682B4" }}
            />
            <Text className="text-[16px] font-bold text-white">Oliver</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center  p-4">
            <Image
              source={require("../../assets/images/imoji/animoji(1).png")}
              className="w-[64px] h-[64px] bg-white/80 rounded-full flex-row items-center border-[3px]  justify-center"
              style={{ borderColor: "#4682B4" }}
            />
            <Text className="text-[16px] font-bold text-white">Emma</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push("./child_create");
            }}
            className="items-center  p-4"
          >
            <View
              className="w-[64px] h-[64px] bg-white/80 rounded-full flex-row items-center border-[1px] border-[#d2d2d2] justify-center"
              style={{ borderColor: "#4682B4" }}
            >
              <Ionicons name="add" size={34} color="#4682B4" />
            </View>
            <Text className="text-[16px] font-bold text-white">Add</Text>
          </TouchableOpacity>
        </View>

        <View className="p-4">
          {/* Journal */}
          <View className="flex-row items-center justify-between py-4">
            <Text className="text-[16px] font-bold text-white">Journal</Text>
            <TouchableOpacity
              onPress={() => {
                router.push("/journal");
              }}
              className="flex-row items-center"
            >
              <Text style={{ color: "#4682B4", fontSize: 15 }}>See more</Text>
              {/* <Ionicons name="chevron-forward" size={16} color="black" /> */}
            </TouchableOpacity>
          </View>
          <Journal />
        </View>
        <View className="">
          {/* Recomendation */}
          <View className="flex-row items-center justify-between p-4">
            <Text className="text-[16px] font-bold text-white">
              Recommendation
            </Text>
          </View>
          <View className="flex-row items-center justify-between px-4">
            <Text className="text-[18px] text-white">Tips</Text>
            <TouchableOpacity
              onPress={() => {
                router.push("/recommendation");
              }}
              className="flex-row items-center"
            >
              <Text style={{ color: "#4682B4", fontSize: 15 }}>See more</Text>
              {/* <Ionicons name="chevron-forward" size={16} color="black" /> */}
            </TouchableOpacity>
          </View>
          <Tips />

          <View className="flex-row items-center justify-between px-4 mt-6">
            <Text className="text-[18px] text-white">Activity</Text>
            <TouchableOpacity
              onPress={() => {
                router.push("/recommendation/activity");
              }}
              className="flex-row items-center"
            >
              <Text style={{ color: "#4682B4", fontSize: 15 }}>See more</Text>
              {/* <Ionicons name="chevron-forward" size={16} color="black" /> */}
            </TouchableOpacity>
          </View>
          <Tips activity={true} />
        </View>

        <View className="p-4">
          {/* Quiz */}
          <View className="flex-row items-center justify-between py-4">
            <Text className="text-[16px] font-bold text-white">Quiz</Text>
          </View>
          <Quiz />
        </View>

        <View className="px-4">
          <View className="flex-row items-center justify-between py-4">
            <Text className="text-[16px] font-bold text-white">Story</Text>
          </View>

          <View className="bg-white/80 p-4 rounded-lg">
            <Button
              name={"Generate New Story"}
              icon={
                <MaterialIcons
                  name="generating-tokens"
                  size={24}
                  color="#fff"
                />
              }
              bgColor={"#4682B4"}
              onclick={() => {
                router.push("./stories/create_stories");
              }}
            />
            <View className="h-[10px]"></View>
            <Button
              name="Story History"
              icon={
                <MaterialIcons
                  name="history-toggle-off"
                  size={24}
                  color="#fff"
                />
              }
              bgColor={"#4682B4"}
              onclick={() => {
                router.push("./stories");
              }}
            />
          </View>
        </View>

        <View className="h-[80px]"></View>
      </ScrollView>

      <MainNav screen="home" />
    </>
  );
};

const styles = StyleSheet.create({});

export default Index;
