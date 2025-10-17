import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const Switch = ({setvalue, value}:any) => {
    return (
        <TouchableOpacity onPress={() => setvalue((prev:any) => !prev)} className={`w-[56px] h-[30px] border border-gray-200 rounded-full flex-row items-center ${!value?"justify-start bg-gray-200": 'justify-end estonBlue_bg'} `}>
            <View className='w-[23px] h-[23px] rounded-full mx-1 bg-[#ffffff]'></View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default Switch;
