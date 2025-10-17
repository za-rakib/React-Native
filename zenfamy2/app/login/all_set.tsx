
import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Index = () => {
    const [ShowLoadingBar, setShowLoadingBar] = useState(false);
    const [LoadingTimer, setLoadingTimer] = useState(0);
    
    return (
        <View className='flex-1 items-center justify-center p-5'>
            <Image source={require('@/assets/images/login/done.png')} />
            <View className='my-6'>
                <Text className='text-[30px] text-center font-bold'>All Set!</Text>
                <Text className='text-[14px] text-center gray700 my-4 pb-10'>You’re one step closer to a calmer, more connected parenting experience experience.</Text>
            </View>

            <Button name='Let’s Explore' textColor='#fff' bgColor={colors.primaryButton} onclick={() => router.push('/login/Index')} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Index;
