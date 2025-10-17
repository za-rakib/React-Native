import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './compoents/Header';

const Layout = () => {
    return (
        <Stack initialRouteName='index' screenOptions={{ contentStyle: { backgroundColor: 'transparent' } }}>
            <Stack.Screen name="index" options={{header: () => <Header elementNo={1}/>}} />
            <Stack.Screen name="2" options={{header: () => <Header elementNo={2}/>}} />
            <Stack.Screen name="3" options={{header: () => <Header elementNo={3}/>}} />
            <Stack.Screen name="4" options={{header: () => <Header elementNo={4}/>}} />
            <Stack.Screen name="5" options={{header: () => <Header elementNo={5}/>}} />
            <Stack.Screen name="6" options={{header: () => <Header elementNo={6}/>}} />
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
