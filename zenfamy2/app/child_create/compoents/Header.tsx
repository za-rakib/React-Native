import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = () => {
    return (
        <View className='mt-16 p-4 flex-row items-center '>
            <TouchableOpacity onPress={() => router.back()} className='h-[50px] w-[50px] bg-white rounded-full flex-row items-center justify-center'>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text className='text-[22px] font-semibold ml-2'>Add a Child</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Header;
