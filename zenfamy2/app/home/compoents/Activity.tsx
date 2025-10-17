import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const Activity = () => {
    return (
        <View className='mt-4'>
           
            <FlatList
                data={[1, 2, 3, 4, 5]}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View className='p-4 rounded-lg bg-[#fff] w-[260px] ml-4'>
                        <View className='flex-row items-center'>
                            <Image source={require('../../../assets/images/home/yoga.png')} className='' />
                            <Text className='font-medium text-[16px] flex-1 ml-3'>Breathing Butterfly</Text>
                        </View>
                        <Text className='flex-1 text-gray-600 py-2'>
                            Guide your child through a calming breathing exercise
                        </Text>
                        <Text className='flex-row items-center'>
                            <Text className='mt-1'><Feather name="clock" size={20} className='' color={colors.primaryTextColor} /></Text>
                            <Text className='estonBlue text-[18px]'> 30 mins</Text>
                        </Text>
                        <View className='w-2/3 mt-5'>
                            <Button name="View Activity" onclick={() => { router.push("./recommendation/details)") }} bgColor={colors.primaryButton} />
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Activity;
