import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = ({elementNo}:any) => {
    return (
        <View className='mt-16 p-4 flex-row items-center justify-between'>
            {
                [1, 2, 3, 4, 5, 6].map((item, index) => {
                    return <View key={index} className='h-[6px] w-[53px] bg-white rounded-full overflow-hidden'>
                        {elementNo >= item &&<View className='h-[6px] w-[53px] estonBlue_bg rounded-full'></View>}
                    </View>
                })
            }
            <TouchableOpacity onPress={() => router.back()} className=' w-[50px] flex-row items-center justify-center'>
                <Text>Skip</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Header;
