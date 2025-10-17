import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";
// import * as Google from "expo-auth-session/providers/google";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { storeData } from "@/assets/lib/lib";
// import { useDispatch } from "react-redux";
// import { savetempo } from "@/redux/userSlice";
import { router, useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import Button from "../Buttons/Button";
// import { useRoute } from "@react-navigation/native";
// import Button from "../ui/Button";

WebBrowser.maybeCompleteAuthSession();

export default function FacebookLogin({ small }: any) {
    const [user, setUser] = useState<any>(null);
    // const dispatch = useDispatch()

    // Configure Google Auth
    // const [request, response, promptAsync] = Google.useAuthRequest({
    //     iosClientId: "451573069324-lf78jrlb8m0o42p19ai3bvm9dgmcoe1q.apps.googleusercontent.com",
    //     androidClientId: "451573069324-orp46tj63vsrmqpib24sdbn1ulhj0ol3.apps.googleusercontent.com",
    //     webClientId: "451573069324-8uudo037veea9ru87fcvejd7fh13704u.apps.googleusercontent.com",

    // });

    // useEffect(() => {
    //     if (response?.type === "success") {
    //         const { authentication }: any = response;
    //         getUserInfo(authentication.accessToken);
    //         router.push('/login/2');
    //     }
    // }, [response]);

    // {
    //     "id": "123456789012345678901",
    //     "email": "user@example.com",
    //     "verified_email": true,
    //     "name": "John Doe",
    //     "given_name": "John",
    //     "family_name": "Doe",
    //     "picture": "https://lh3.googleusercontent.com/a-/AOh14G...",
    //     "locale": "en"
    //   }

    // const getUserInfo = async (token: any) => {
    //     try {
    //         const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
    //             headers: { Authorization: `Bearer ${token}` },
    //         });
    //         const userInfo = await res.json();
    //         setUser(userInfo);

    //         // storeData({...userInfo,photo:userInfo?.picture})
    //         dispatch(savetempo({ ...userInfo, photo: userInfo?.picture }))
    //         router.push("/login/2")
    //         // // Alert.alert("Message",userdata?.name)
    //         // console.log(userdata,userInfo);


    //     } catch (error) {
    //         console.log("Error fetching user data:", error);
    //     }
    // };

    return (
        <View className="">
            {/* {user ? (
                <>
                    <Text>Welcome, {user.name}!</Text>
                    <Button title="Logout" onPress={() => setUser(null)} />
                </>
            ) : ( */}
            {/* <TouchableOpacity
                    className="bg-[#1C1B15] p-5 w-[100%] flex-row justify-center items-center  rounded-lg mb-3"
                    onPress={() => promptAsync()}
                >

                    <Image source={require('../../assets/images/login/google.png')} style={{ width: 27, height: 23 }} />
                    <Text className="text-white ml-1 font-semibold text-center"> Sign in with Google</Text>
                </TouchableOpacity> */}
            {/* // )} */}

            {!small && <Button
                name="Sign in with Facebook"
                textColor={'#000000'}
                bgColor={'#ffffff'}
                // onclick={() => promptAsync()}
                sideimage={require('../../assets/images/login/fb.png')}
            />}
            
            {small &&<TouchableOpacity
                className="bg-[#ffffff] p-5 w-[60px] h-[56px] flex-row justify-center items-center  rounded-lg mb-3"
                // onPress={() => promptAsync()}
            >
                <Image source={require('../../assets/images/login/fb.png')} style={{ width: 28, height: 28 }} />
            </TouchableOpacity>}
        </View>
    );
}
