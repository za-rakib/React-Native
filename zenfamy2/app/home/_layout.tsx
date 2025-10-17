import Header from '@/components/Header/Header';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';


const Layout = () => {
    return (
        <Stack initialRouteName='index' screenOptions={{ contentStyle: { backgroundColor: 'transparent' } }}>
            <Stack.Screen name="index" options={{headerShown: false}} />
            <Stack.Screen name="journal" options={{header: () => <Header title="Journal" rightImage={require('../../assets/images/imoji/animoji.png')}/>}} />
            <Stack.Screen name="stories" options={{header: () => <Header title="Stories"/>}} />
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
