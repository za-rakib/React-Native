import React, { useEffect, useMemo, useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";
// import * as Google from "expo-auth-session/providers/google";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { storeData } from "@/assets/lib/lib";
// import { useDispatch } from "react-redux";
// import { login, savetempo } from "@/redux/userSlice";
import { router, useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { useRoute } from "@react-navigation/native";
import Button from "../Buttons/Button";
// import Button from "../ui/Button";
// import { useLazyQuery, useQuery } from "@apollo/client";
// import { GET_ALL_USER, GET_USER_BY_EMAIL } from "@/queries/queries";

WebBrowser.maybeCompleteAuthSession();

export default function GoogleLogin({ small }: any) {
    const [user, setUser] = useState<any>(null);
    // const dispatch = useDispatch()
    // const [getUserFunByEmail, { data, error, loading }] = useLazyQuery(GET_USER_BY_EMAIL)





    // Configure Google Auth
    // const [request, response, promptAsync] = Google.useAuthRequest({
    //     iosClientId: "676916873883-e99qd55upntdc4uetjeo23sq89cfppci.apps.googleusercontent.com",
    //     androidClientId: "676916873883-tbesh9pvq5e8p965c46hn345ihe6p586.apps.googleusercontent.com",
    //     webClientId: "676916873883-7tb04l4i61fb6uabv4oo49lmh6sirgal.apps.googleusercontent.com",

    // });

    // useEffect(() => {
    //     if (response?.type === "success" && !loading) {
    //         const { authentication }: any = response;
    //         getUserInfo(authentication.accessToken);
    //         // router.push('/login/2');
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

    // const getuserFun = async (email: string) => {
    //     try {
    //         const response = await getUserFunByEmail({ variables: { email } });
    //         return response?.data?.userByEmail || [];
    //     } catch (error) {
    //         console.log(error);
    //         return [];
    //     }
    // };

    // const getUserInfo = async (token: any) => {
    //     try {
    //         const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
    //             headers: { Authorization: `Bearer ${token}` },
    //         });
    //         const userInfo = await res.json();

    //         const userIsExist = await getuserFun(userInfo?.email);
    //         console.log(userIsExist,10);
            
    //         setUser(userInfo);

    //         if (userIsExist?.email) {
    //             storeData({ ...userIsExist[0] });
    //             dispatch(login({ ...userIsExist[0] }));
    //             return router.push("/home/1");
    //         }

    //         dispatch(savetempo({ ...userInfo, photo: userInfo?.picture }));
    //         router.push({ pathname: "/login/2", params: { from: "google" } });
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
                name="Sign in with Google"
                textColor={'#000000'}
                bgColor={'#ffffff'}
                // onclick={() => promptAsync()}
                sideimage={require('../../assets/images/login/google.png')}
            />}

            {small && <TouchableOpacity
                className="bg-[#ffffff] p-5 w-[60px] h-[56px] flex-row justify-center items-center  rounded-lg mb-3"
                // onPress={() => promptAsync()}
            >
                <Image source={require('../../assets/images/login/google.png')} style={{ width: 28, height: 28 }} />
            </TouchableOpacity>}
        </View>
    );
}
