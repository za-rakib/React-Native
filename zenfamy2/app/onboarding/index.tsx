import { getToken, toasts } from "@/assets/lib";
import { getUsers, tokenset } from "@/redux/slices/userSlices";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

const Index = () => {
  const [showLoadingBar, setShowLoadingBar] = useState(false);
  const [loadingTimer, setLoadingTimer] = useState(0);
  const [token, setToken] = useState<string | null>(null);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    let timer: any;

    // Fetch token first
    const fetchTokenAndStart = async () => {
      const savedToken: any = await getToken();
      setToken(savedToken);

      setShowLoadingBar(true);

      let elapsed = 0;
      timer = setInterval(async () => {
        setLoadingTimer((prev) => prev + 10);
        elapsed += 10;

        if (elapsed >= 239) {
          clearInterval(timer);

          if (savedToken) {
            try {
              dispatch(tokenset(savedToken));
              const me = await dispatch(getUsers()).unwrap();
              console.log(me);
              if (!me?.active_tokens) return toasts("Failed to login");
              // AsyncStorage.setItem('user', JSON.stringify(me));

              router.push("./home");
            } catch (error: any) {
              console.log(error);
              const msg: any =
                typeof error?.detail === "string"
                  ? error?.detail
                  : "Something went wrong";
              if (msg) {
                toasts(msg);
                AsyncStorage.removeItem("access_token");
                router.push("./login/Login");
              }
            }
          } else {
            router.push("./login/Index");
          }
        }
      }, 200);
    };

    fetchTokenAndStart();

    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <View className="flex-1 items-center justify-center skyBlue_bg">
      <Image source={require("@/assets/images/onboard/frog.png")} />
      {showLoadingBar && (
        <View className="absolute bottom-[100px]">
          <View className="bg-white/80 h-1 w-[239px] rounded-full overflow-hidden">
            <View
              style={{ width: loadingTimer }}
              className="h-1 bg-[#4682B4] rounded-full"
            />
          </View>
          <Text className="text-center mt-4 text-white">
            {Math.round((loadingTimer / 239) * 100)}% Loading
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
