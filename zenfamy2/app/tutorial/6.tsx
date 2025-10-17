
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
            <Image className='mt-20' source={require('@/assets/images/tutorial/6.png')} />
            <View className='my-6'>
                <Text className='text-[30px] text-center font-bold'>You're All Set!</Text>
                <Text className='text-[13px] text-center gray700 my-4 pb-10'>You've learned the basics. Now it's time to dive in and start your ZenFamy journey!</Text>
            </View>

            <Button name='Go to dashboard' textColor='#fff' bgColor={colors.primaryButton} onclick={() => router.push('/family_profile')} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Index;
