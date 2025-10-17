import { colors, toasts } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { OtpInput } from "react-native-otp-entry";

const Verify = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [text, settext] = useState("");
    useEffect(() => {

    }, [])
    return (
        <View className='flex-1 p-4'>
            <View>
                <Text className='text-[28px] font-semibold'>Enter Verification Code</Text>
                <Text className='text-[14px] gray700 my-2'>We sent a verification code to hello.or*****gmail.com please check your mobile device and enter the code.</Text>
            </View>

            <View className='mt-8'>

                <OtpInput
                    numberOfDigits={6}
                    focusColor="green"
                    autoFocus={false}
                    hideStick={true}
                    placeholder=""
                    blurOnFilled={true}
                    disabled={false}
                    type="numeric"
                    secureTextEntry={false}
                    focusStickBlinkingDuration={500}
                    // onFocus={() => console.log("Focused")}
                    // onBlur={() => console.log("Blurred")}
                    onTextChange={(text: any) => settext(text)}
                    textInputProps={{
                        accessibilityLabel: "One-Time Password",
                    }}
                    textProps={{
                        accessibilityRole: "text",
                        accessibilityLabel: "OTP digit",
                        allowFontScaling: false,
                    }}
                    theme={{

                        pinCodeContainerStyle: {
                            height: 60,
                            width: 60,
                            paddingTop: 3,
                            backgroundColor: '#fff',
                            elevation: 2,
                            borderWidth: 0
                        },

                    }}
                />

                <TouchableOpacity onPress={() => router.push('/login/Forgotpassword')} className='flex-row items-center justify-center mt-5'>
                    <Text className='text-[14px] my-2 gray700 text-center'>Your code will expire in - </Text>
                    <Text className='text-[14px] my-2 gray700 font-semibold text-center'>00:32 minutes</Text>
                </TouchableOpacity>

            </View>

            <View className='mt-12'>
                {text.length !== 6 && <Button name='Continue' textColor='#535862' bgColor={colors.disabledButton} onclick={() => toasts('Please enter OTP code to continue')} />}

                {text.length === 6 && <Button name='Continue' textColor='#f4f4f4' bgColor={colors.primaryButton} onclick={() => router.push('/login/reset_password')} />}

                {<Button name='Resend Code' textColor='#b1b1b1' bgColor={"#fff"} onclick={() => router.push('/login/reset_password')} />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Verify;
