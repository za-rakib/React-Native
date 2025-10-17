
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
            <Image className='mt-20' source={require('@/assets/images/tutorial/2.png')} />
            <View className='my-6'>
                <Text className='text-[30px] text-center font-bold'>Set Up Your Family & Child Profiles</Text>
                <Text className='text-[13px] text-center gray700 my-4 pb-10'>Personalize ZenFamy by adding profiles for your children. This helps us tailor stories and activities just for them!</Text>
            </View>

            <Button name='Next' textColor='#fff' bgColor={colors.primaryButton} onclick={() => router.push('/tutorial/3')} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Index;
