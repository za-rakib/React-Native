
import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import EmptyScreen from '@/components/Empty/EmptyScreen';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Index = () => {
    const [ShowLoadingBar, setShowLoadingBar] = useState(false);
    const [LoadingTimer, setLoadingTimer] = useState(0);
    
    return (
        <View className='flex-1'> 
            <EmptyScreen image={require('@/assets/images/home/emptyjournal.png')} title='Your Story Library is Empty!' description='Start your journey by creating your first magical tale to make the most of your experience' buttonTitle='Create Your First Story' />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Index;
