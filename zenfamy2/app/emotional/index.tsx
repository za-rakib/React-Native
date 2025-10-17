import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import MainNav from '@/components/Navigation/MainNav';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Story from './components/Story';
import Posts from './components/posts';

const Index = () => {
    
    return (<>
        <View className='p-4 flex-1'>
            {/* Story Add */}
            <Story/>
            <Posts showbutton={true}/>
        </View>
        <MainNav screen={"emotional"} />
    </>
    );
}

const styles = StyleSheet.create({})

export default Index;
