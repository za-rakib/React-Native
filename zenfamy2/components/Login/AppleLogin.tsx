import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert, StyleSheet, Platform, } from "react-native";
import * as WebBrowser from "expo-web-browser";
// import * as Google from "expo-auth-session/providers/google";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { storeData } from "@/assets/lib/lib";
// import { useDispatch } from "react-redux";
// import { savetempo } from "@/redux/userSlice";
import { router, useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { useRoute } from "@react-navigation/native";
// import * as AppleAuthentication from 'expo-apple-authentication';
import { FontAwesome } from "@expo/vector-icons";
import Button from "../Buttons/Button";
// import Button from "../ui/Button";

WebBrowser.maybeCompleteAuthSession();

export default function AppleLogin({ small }: any) {
    const [user, setUser] = useState<any>(null);
    // const dispatch = useDispatch()

    // // Configure Google Auth
    // const [request, response, promptAsync] = Google.useAuthRequest({
    //     iosClientId: "676916873883-8s7p9mg6ptgdso7v9mmdeqm3o4kdfftv.apps.googleusercontent.com",
    //     androidClientId: "676916873883-fgl9pal7mah0op57isa31kll59mm4mkt.apps.googleusercontent.com",
    //     webClientId: "676916873883-ch8ocaagq5hi902rtp42hle7t25718fr.apps.googleusercontent.com",

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


    // apple config

    // const appleLogin = async () => {
    //     try {
    //         if (Platform.OS !== 'ios') return Alert.alert("Waring", "Apple login is only available on iOS devices")
    //         // start the sign-in request
    //         const credential = await AppleAuthentication.signInAsync({
    //             requestedScopes: [
    //                 AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
    //                 AppleAuthentication.AppleAuthenticationScope.EMAIL,
    //             ],
    //         });
    //         // signed in
    //         console.log(credential);
    //         // credential includes user info
    //         const userInfo = {
    //             id: credential.user,
    //             email: credential.email,
    //             name: `${credential.fullName?.givenName} ${credential.fullName?.familyName}`,
    //             photo: `https://ui-avatars.com/api/?name=${credential.fullName?.givenName}+${credential.fullName?.familyName}`,
    //         };

    //     } catch (e: any) {
    //         if (e.code === 'ERR_REQUEST_CANCELED') {
    //             // handle that the user canceled the sign-in flow
    //         } else {
    //             // handle other errors
    //         }
    //     }
    // }

    return (
        <View style={styles.container}>
            {/* <AppleAuthentication.AppleAuthenticationButton
                buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
                buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
                cornerRadius={5}
                style={styles.button}
                onPress={appleLogin}
            /> */}

            {!small && <Button
                name="Sign in with Apple"
                textColor={'#000000'}
                bgColor={'#ffffff'}
                // onclick={() => promptAsync()}
                icon={<FontAwesome name='apple' size={22} color={'#000000'} />}
            />}

            {small && <TouchableOpacity
                className="bg-[#ffffff] p-5 w-[60px] h-[56px] flex-row justify-center items-center  rounded-lg mb-3"
                // onPress={() => promptAsync()}
            >
                <FontAwesome name='apple' size={22} color={'#000000'} />
            </TouchableOpacity>}

            {/* <TouchableOpacity
                className="bg-[#1C1B15] p-5 w-[100%] flex-row justify-center items-center rounded-lg mb-3"
                onPress={appleLogin}
            >
                <FontAwesome name='apple' size={22} color={'#fff'} />
                <Text className="text-white ml-2 font-semibold text-center"> Sign in with Apple</Text>
            </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        

    },
    button: {
        
    },
});
