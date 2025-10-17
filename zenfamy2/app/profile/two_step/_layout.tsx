import Header from '@/components/Header/Header';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';


const Layout = () => {
    return (
        <Stack initialRouteName='index' screenOptions={{ contentStyle: { backgroundColor: 'transparent' } }}>
            <Stack.Screen name="index" options={{header: () => <Header title="Contact Us" />}}  />
            <Stack.Screen name="sms_verify" options={{header: () => <Header title="" />}}  />
            <Stack.Screen name="authenticator" options={{header: () => <Header title="" />}}  />
            <Stack.Screen name="app_verify" options={{header: () => <Header title="" />}}  />
            {/* <Stack.Screen name="contact" options={{header: () => <Header title="Contact Us" />}} /> */}
            
            {/* <Stack.Screen name="journal" options={{header: () => <Header title="Journal" rightImage={require('../../assets/images/imoji/animoji.png')}/>}} />
            <Stack.Screen name="stories" options={{header: () => <Header title="Stories"/>}} /> */}
            
            
        </Stack>
    );
}

const styles = StyleSheet.create({})

export default Layout;
