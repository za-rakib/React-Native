import Header from '@/components/Header/Header';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';


const Layout = () => {
    return (
        <Stack initialRouteName='index' screenOptions={{ contentStyle: { backgroundColor: 'transparent' } }}>
            <Stack.Screen name="index" options={{header: () => <Header title="Stories" rightImage={require('../../assets/images/imoji/animoji.png')} />}} />
            <Stack.Screen name="create_stories" options={{header: () => <Header title="" rightImage={require('../../assets/images/imoji/animoji.png')} />}} />
            <Stack.Screen name="play" options={{header: () => <Header title="Story" />}} />
            
        </Stack>
    );
}

const styles = StyleSheet.create({})

export default Layout;
