import Button from "@/components/Buttons/Button";
import AppleLogin from "@/components/Login/AppleLogin";
import EmailLogin from "@/components/Login/EmailLogin";
import FacebookLogin from "@/components/Login/Facebook";
import GoogleLogin from "@/components/Login/GoogleLogin";

import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center p-6 skyBlue_bg">
      <View>
        <Text className="text-[38px] text-center font-semibold text-white">
          Welcome to
        </Text>
        <Text className="text-[38px] text-center font-semibold text-white">
          ZenFamy
        </Text>
        <Text className="text-[14px] text-center text-white my-4">
          Parenting isn't easy. We're here to help you understand and support
          your child with calm, clarity, and confidence.
        </Text>
      </View>
      <View className="w-full my-8">
        <AppleLogin />
        <GoogleLogin />
        <FacebookLogin />
        <EmailLogin />
      </View>

      <View className="flex-row items-center justify-between">
        <View className="w-[45%] h-[1px] bg-white/80"></View>
        <Text className="text-white">Or</Text>
        <View className="w-[45%] h-[1px] bg-white/80"></View>
      </View>

      <TouchableOpacity
        onPress={() => router.push("/signup")}
        className="flex-row items-center justify-center my-8"
      >
        <Text className="text-white text-center">
          Don’t hvae an account?{" "}
          <Text style={{ color: "#4682B4" }}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
      <View className="flex-row items-center justify-center my-8">
        <Button
          name="Login"
          textColor="#fff"
          bgColor={"#4682B4"}
          onclick={() => router.push("/login/Login")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
