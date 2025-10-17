import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

const Index = () => {
  const [ShowLoadingBar, setShowLoadingBar] = useState(false);
  const [LoadingTimer, setLoadingTimer] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onboarding");
    }, 1000);

    return () => {
      clearInterval(timer);
      // clearTimeout(timerInt);
    };
  }, [ShowLoadingBar]);
  return (
    <View className="flex-1 items-center justify-center skyBlue_bg">
      <Image source={require("@/assets/images/onboard/frog.png")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
