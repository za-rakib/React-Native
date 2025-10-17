import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';


const Layout = () => {
    return (
        <Stack initialRouteName='index' screenOptions={{ contentStyle: { backgroundColor: 'transparent' } }}>
            <Stack.Screen name="index" options={{headerShown: false}} />
            
        </Stack>
    );
}

const styles = StyleSheet.create({})

export default Layout;
