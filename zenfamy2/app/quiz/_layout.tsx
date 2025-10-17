import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';

const Layout = () => {
    return (
        <Stack initialRouteName='home' screenOptions={{ contentStyle: { backgroundColor: 'transparent' } }}>
            <Stack.Screen name="index" options={{header: () => <Header title="Emotional Journal" home={true}/>}} />
            <Stack.Screen name="home" options={{header: () => <Header title="" home={true} rightImage={true}/>}} />
            <Stack.Screen name="quiz" options={{header: () => <Header title="Quiz" home={true} rightImage={true}/>}} />
            <Stack.Screen name="result" options={{header: () => <Header title="" home={false}/>}} />
            <Stack.Screen name="treasures" options={{header: () => <Header title="My ZenFamy Treasures" home={false}/>}} />
            
            
        </Stack>
    );
}

const styles = StyleSheet.create({})

export default Layout;
