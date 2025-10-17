import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Addchild = () => {
    return (
        <View className='flex-1 justify-center items-center p-4'>
            <Image source={require('@/assets/images/login/done.png')} className='' />

            <Text className='text-center text-[30px] font-bold my-6 mb-2'>Wonderful!</Text>
            <Text className='text-center text-[14px] mb-6'>Emma has beenadded to your Zenfamy family</Text>

            <Button name="Add Another Child" textColor='#fff' bgColor={colors.primaryButton} onclick={() => router.push('/child_create/' as any)} />

            <Button name="Continue" textColor='#000' bgColor={colors.secondaryBackground} onclick={() => router.push('/home/' as any)} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Addchild;
