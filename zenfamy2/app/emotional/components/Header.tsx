import { colors } from '@/assets/lib';
import { Feather, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = ({ title, rightImage, home }: any) => {
    return (<View className='flex-row items-center justify-between mt-12 p-4'>
        <View className=' flex-row items-center '>
            <TouchableOpacity onPress={() => router.back()} className='h-[50px] w-[50px] bg-white rounded-full flex-row items-center justify-center'>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text className='text-[22px] font-semibold ml-2 '>{title ?? "Back"}</Text>
        </View>
        {<View className=' bg-white rounded-full p-1 flex-row items-center justify-center'>
            <TouchableOpacity onPress={() => router.push('/emotional')} className='h-[42px] w-[42px] estonBlue_bg rounded-full flex-row items-center justify-center' style={{backgroundColor: home ? colors.primaryButton : "white"}}>
            <Feather name="align-justify" size={24} color={home ? "white" : "black"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('./emotional/schedule')} className='h-[42px] w-[42px] rounded-full flex-row items-center justify-center' style={{backgroundColor: !home ? colors.primaryButton : "white"}}>
                <Ionicons name="calendar-outline" size={24} color={!home ? "white" : "black"} />
            </TouchableOpacity>
        </View>}

    </View>
    );
}

const styles = StyleSheet.create({})

export default Header;
