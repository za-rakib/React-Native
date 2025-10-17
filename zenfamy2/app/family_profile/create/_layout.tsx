import Header from '@/components/Header/Header';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Layout = () => {
    return (
        <Stack initialRouteName='index' screenOptions={{ contentStyle: { backgroundColor: 'transparent' } }}>
            <Stack.Screen name="index" options={{header: () => <Header title=""/>}} />
            <Stack.Screen name="choosephoto" options={{header: () => <Header title=""/>}} />
            <Stack.Screen name="detailsinput" options={{header: () => <Header title=""/>}} />
          
            
        </Stack>
    );
}

const styles = StyleSheet.create({})

export default Layout;
