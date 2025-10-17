import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Quiz = () => {
    return (
        <View className='bg-white rounded-lg p-5'>
            <View className='flex-row pb-3 justify-end'>
                <View className='flex-row items-center p-3 border border-gray-300 px-6 bg-[#1aa7a959] rounded-full justify-center mb-[10px]'>
                    <Text className='estonBlue text-[16px]'>In Progress</Text>
                </View>
                
            </View>

            <View className=''>
                <Text className='font-medium text-[16px] mb-4'>Understanding Your Child's Strengths</Text>
                <Text className='text-gray-600 mb-3'>Resume from Question 5</Text>

                <View className='h-[6px] rounded-full bg-gray-300 '>
                    <View className='estonBlue_bg h-[6px] w-[50%] rounded-full'></View>
                </View>
            </View>
            
            <View className='h-[30px]'></View>
            <Button name='View All Quizzes' bgColor={colors.secondaryTextColor} onclick={() => router.push('/quiz/home')} />

        </View>
    );
}

const styles = StyleSheet.create({})

export default Quiz;
