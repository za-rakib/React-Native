import Header from '@/components/Header/Header';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Layout = () => {
    return (
        <Stack initialRouteName='cancelation' screenOptions={{ contentStyle: { backgroundColor: 'transparent' } }}>
            <Stack.Screen name="index" options={{headerShown:false}} />
            <Stack.Screen name="plans" options={{header: () => <Header title="Choose Your Plan" home={false} rightImage={false} />}} />
            <Stack.Screen name="myplan" options={{header: () => <Header title="My Subscription" home={false} rightImage={false} />}} />
            <Stack.Screen name="cancelation" options={{header: () => <Header title="Canceling your plan?" home={false} rightImage={false} />}} />
            
            
            
        </Stack>
    );
}

const styles = StyleSheet.create({})

export default Layout;
