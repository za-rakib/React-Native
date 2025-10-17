import Header from '@/components/Header/Header';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';


const Layout = () => {
    return (
        <Stack initialRouteName='index' screenOptions={{ contentStyle: { backgroundColor: 'transparent' } }}>
            <Stack.Screen name="index" options={{headerShown: false}} />
            <Stack.Screen name="contact" options={{header: () => <Header title="Contact Us" />}} />
            <Stack.Screen name="faq" options={{header: () => <Header title="Help Center" />}} />
            <Stack.Screen name="childrens" options={{header: () => <Header title="Children Profiles" />}} />
            <Stack.Screen name="account" options={{header: () => <Header title="Account" />}} />
            <Stack.Screen name="account_edit" options={{header: () => <Header title="Edit Profile" />}} />
            <Stack.Screen name="change_password" options={{header: () => <Header title="Password Change" />}} />
            <Stack.Screen name="terms" options={{header: () => <Header title="Terms of Service" />}} />
            <Stack.Screen name="policy" options={{header: () => <Header title="Privacy Policy" />}} />
            <Stack.Screen name="about" options={{header: () => <Header title="About Zenfamy" />}} />
            <Stack.Screen name="connected_device" options={{header: () => <Header title="Setting" />}} />
            <Stack.Screen name="two_step" options={{headerShown: false}} />
            {/* <Stack.Screen name="journal" options={{header: () => <Header title="Journal" rightImage={require('../../assets/images/imoji/animoji.png')}/>}} />
            <Stack.Screen name="stories" options={{header: () => <Header title="Stories"/>}} /> */}
            
            
        </Stack>
    );
}

const styles = StyleSheet.create({})

export default Layout;
