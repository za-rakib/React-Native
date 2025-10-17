import Header from '@/components/Header/Header';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';


const Layout = () => {
    return (
        <Stack initialRouteName='index' screenOptions={{ contentStyle: { backgroundColor: 'transparent' } }}>
            <Stack.Screen name="index" options={{header: () => <Header title="Journal" rightImage={require('../../assets/images/imoji/animoji.png')} />}} />
            <Stack.Screen name="create" options={{header: () => <Header title="New Journal Entry" rightImage={require('../../assets/images/imoji/animoji.png')} />}} />
            <Stack.Screen name="play" options={{header: () => <Header title="Journal" />}} />
            
        </Stack>
    );
}

const styles = StyleSheet.create({})

export default Layout;
