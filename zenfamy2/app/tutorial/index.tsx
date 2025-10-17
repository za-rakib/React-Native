
import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Index = () => {
    const [ShowLoadingBar, setShowLoadingBar] = useState(false);
    const [LoadingTimer, setLoadingTimer] = useState(0);
    
    return (
        <View className='flex-1 items-center justify-between p-5'>
            <Image className='mt-20' source={require('@/assets/images/tutorial/1.png')} />
            <View className='my-6'>
                <Text className='text-[30px] text-center font-bold'>Welcome to Your Family's Well-being Companion!</Text>
                <Text className='text-[13px] text-center gray700 my-4 pb-10'>ZenFamy helps you nurture your child's emotional intelligence through personalized stories, reflective journaling, and engaging activities.</Text>
            </View>

            <Button name='Get Started' textColor='#fff' bgColor={colors.primaryButton} onclick={() => router.push('/tutorial/2')} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Index;
