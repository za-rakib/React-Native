import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './compoents/Header';

const Layout = () => {
    return (
        <Stack initialRouteName='index' screenOptions={{ contentStyle: { backgroundColor: 'transparent' } }}>
            <Stack.Screen name="index" options={{header: () => <Header/>}} />
            <Stack.Screen name="addchild" options={{headerShown:false}} />
            {/* <Stack.Screen name="Login" options={{header: () => <Header/>}} />
            <Stack.Screen name="Forgotpassword" options={{header: () => <Header/>}} />
            <Stack.Screen name="verifiy" options={{header: () => <Header/>}} />
            <Stack.Screen name="reset_password" options={{header: () => <Header/>}} />
            <Stack.Screen name="all_set" options={{headerShown: false}} /> */}
            
        </Stack>
    );
}

const styles = StyleSheet.create({})

export default Layout;
