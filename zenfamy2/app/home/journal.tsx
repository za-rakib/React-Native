
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
            <EmptyScreen image={require('@/assets/images/home/emptyStories.png')} title='No events yet' description='Ready to share a moment?' buttonTitle='Add an Event' />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Index;
