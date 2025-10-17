import { colors } from '@/assets/lib';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Story = () => {
    return (
        <View className='flex-row items-center justify-start mb-4 gap-4'>
            <TouchableOpacity className='items-center '>
                <View className='w-[64px] h-[64px] bg-white rounded-full flex-row items-center border-[1px] border-[#d2d2d2] justify-center' style={{ borderColor: colors.primaryTextColor }}>
                    <Ionicons name='add' size={34} color='#252525' />
                </View>
                <Text className='text-[16px] font-bold text-[#000000]'>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity className='items-center '>
                <Image source={require('@/assets/images/imoji/animoji.png')} className='w-[64px] h-[64px] bg-white rounded-full flex-row items-cente border-[3px] justify-center' style={{ borderColor: colors.primaryTextColor }} />
                <Text className='text-[16px] font-bold text-[#000000]'>Oliver</Text>
            </TouchableOpacity>
            <TouchableOpacity className='items-center'>
                <Image source={require('@/assets/images/imoji/animoji(1).png')} className='w-[64px] h-[64px] bg-white rounded-full flex-row items-center border-[3px]  justify-center' style={{ borderColor: colors.primaryTextColor }} />
                <Text className='text-[16px] font-bold text-[#000000]'>Emma</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { router.push('./emotional') }} className='items-center'>
                <Image source={require('@/assets/images/imoji/animoji(1).png')} className='w-[64px] h-[64px] bg-white rounded-full flex-row items-center border-[3px]  justify-center' style={{ borderColor: colors.primaryTextColor }} />
                <Text className='text-[16px] font-bold text-[#000000]'>Emma</Text>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({})

export default Story;
