import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';

const Layout = () => {
    return (
        <Stack initialRouteName='index' screenOptions={{ contentStyle: { backgroundColor: 'transparent' } }}>
            <Stack.Screen name="index" options={{header: () => <Header title="Emotional Journal" home={true}/>}} />
            <Stack.Screen name="schedule" options={{header: () => <Header title="Emotional Journal" home={false}/>}} />
            
            
        </Stack>
    );
}

const styles = StyleSheet.create({})

export default Layout;
