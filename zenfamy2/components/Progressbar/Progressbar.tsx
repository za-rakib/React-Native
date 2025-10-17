import React from 'react';
import { StyleSheet, View } from 'react-native';

const Progressbar = ({progress,unfilledColor,filledColor,style}:any) => {
    return (
        <View className='w-full h-4 mt-3 bg-gray-200 rounded-full overflow-hidden' style={{backgroundColor:`${unfilledColor}`,...style}}>
            <View className='h-full bg-[#1aa7a959] rounded-full' style={{width:`${progress??40}%`,backgroundColor:`${filledColor}`}}></View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Progressbar;
