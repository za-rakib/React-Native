import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const Authenticator = () => {
    return (
        <View className='flex-1'>
            <View className='flex-1'>
                <Text className='text-[28px] font-semibold text-center'>Scan QR Code</Text>
                <Text className='text-[14px] gray700 my-2 text-center'>Set up Two-Factor Authentication</Text>
                <View className='flex-row items-center justify-center my-10'>
                    <View className='bg-white p-3 rounded-xl'>
                        <QRCode
                            value="http://awesome.link.qr"
                            size={200}
                        />
                    </View>
                </View>

                <View className='p-6 pt-0'>
                    <Text className='text-[16px] text-gray-900 my-2'>Manual entry code:</Text>
                    <TouchableOpacity className='bg-gray-100 p-3 rounded-full border border-gray-200 px-6'>
                        <Text className='text-[16px] text-gray-900 my-2'>123456WWDFDD</Text>
                        <Ionicons className='absolute top-5 right-5' name='copy-outline' size={24} color='#a5a5a5' />
                    </TouchableOpacity>
                </View>
            </View>

            <View className='p-4'>
                <Button bgColor={colors.primaryButton} name='Enter Code' onclick={() => router.push('/profile/two_step/app_verify')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Authenticator;
