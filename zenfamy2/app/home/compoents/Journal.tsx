import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Journal = () => {
    return (
        <View className='bg-white rounded-lg p-5'>
            <TouchableOpacity className='flex-row pb-3'>
                <View className='flex-row items-center w-[48px] h-[48px] bg-[#1aa7a959] rounded-full justify-center mb-[10px]'>
                    <Ionicons name='book-outline' size={24} color='#008c96' />
                </View>
                <View className='flex-1 ml-3 border-b border-b-[#d9d9d97d] pb-2'>
                    <Text className='font-medium text-[16px]'>Math homework was challenging but I managed to finish it.</Text>
                    <Text className='text-[#898989]'>14:30</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className='flex-row pb-3'>
                <View className='flex-row items-center w-[48px] h-[48px] bg-[#1aa7a959] rounded-full justify-center mb-[10px]'>
                    <Ionicons name='book-outline' size={24} color='#008c96' />
                </View>
                <View className='flex-1 ml-3 border-b border-b-[#d9d9d97d] pb-2'>
                    <Text className='font-medium text-[16px]'>Math homework was challenging but I managed to finish it.</Text>
                    <Text className='text-[#898989]'>14:30</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className='flex-row pb-3'>
                <View className='flex-row items-center w-[48px] h-[48px] bg-[#1aa7a959] rounded-full justify-center mb-[10px]'>
                    <Ionicons name='book-outline' size={24} color='#008c96' />
                </View>
                <View className='flex-1 ml-3 border-b border-b-[#d9d9d97d] pb-2'>
                    <Text className='font-medium text-[16px]'>Math homework was challenging but I managed to finish it.</Text>
                    <Text className='text-[#898989]'>14:30</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className='flex-row pb-3'>
                <View className='flex-row items-center w-[48px] h-[48px] bg-[#1aa7a959] rounded-full justify-center mb-[10px]'>
                    <Ionicons name='book-outline' size={24} color='#008c96' />
                </View>
                <View className='flex-1 ml-3 border-b border-b-[#d9d9d97d] pb-2'>
                    <Text className='font-medium text-[16px]'>Math homework was challenging but I managed to finish it.</Text>
                    <Text className='text-[#898989]'>14:30</Text>
                </View>
            </TouchableOpacity>
            <View className='h-[20px]'></View>
            <Button name='+ Add Event' bgColor={colors.primaryButton} onclick={() => { router.push('/journal/create'  as any) }}  />

        </View>
    );
}

const styles = StyleSheet.create({})

export default Journal;
