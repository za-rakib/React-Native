
import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const EmptyScreen = ({title, description, buttonTitle, route, image}:any) => {
    
    
    return (
        <View className='flex-1 items-center justify-center p-5'>
            <Image source={image??require('@/assets/images/login/done.png')} />
            <View className='mt-4'>
                <Text className='text-[30px] text-center font-bold'>{title??"All Set!"}</Text>
                <Text className='text-[14px] text-center gray700 my-4 pb-4'>{description??"You’re one step closer to a calmer, more connected parenting experience experience."}</Text>
            </View>

            <Button name={buttonTitle??'Let’s Explore'} textColor='#fff' bgColor={colors.primaryButton} onclick={() => router.push(route??'/home/Index')} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default EmptyScreen;
