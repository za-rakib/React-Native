import Header from '@/components/Header/Header';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';


const Layout = () => {
    return (
        <Stack initialRouteName='home' screenOptions={{ contentStyle: { backgroundColor: 'transparent' } }}>
            <Stack.Screen name="index" options={{header: () => <Header title="Tips" rightImage={require('../../assets/images/imoji/animoji.png')} />}} />
            <Stack.Screen name="activity" options={{header: () => <Header title="Activities" rightImage={require('../../assets/images/imoji/animoji.png')} />}} />
            <Stack.Screen name="create" options={{header: () => <Header title="New Journal Entry" rightImage={require('../../assets/images/imoji/animoji.png')} />}} />
            <Stack.Screen name="play" options={{header: () => <Header title="Journal" />}} />
            <Stack.Screen name="tips" options={{header: () => <Header title="" />}} />
            <Stack.Screen name="home" options={{header: () => <Header title="Master Zenio Recommends" />}} />
            <Stack.Screen name="details" options={{headerShown: false}} />
        
        </Stack>
    );
}

const styles = StyleSheet.create({})

export default Layout;
