import React from 'react';
import { ActivityIndicator, Image, Text, TouchableOpacity } from 'react-native';
import { StyleSheet, View } from 'react-native';

const Button = ({ name, textColor, bgColor, loading, onclick, sideimage,icon }: any) => {
    return (
        <TouchableOpacity
            onPress={loading ? null : onclick}
            className="bg-[#13914C] font-semibold p-5 w-[100%]  rounded-full mb-3"
            style={{ backgroundColor: bgColor ?? "#13914C", elevation:1.5, shadowColor:'#171717',  }}
        >
            {!loading ?
                <View className='flex-row justify-center items-center'>
                    {sideimage&&<Image resizeMode='cover' source={sideimage} className="w-7 h-7 mr-2" />}
                    {
                        icon&&<Text className='mr-2'>{icon}</Text>
                    }
                    <Text className={`text-center font-semibold text-white`}
                        style={{ color: textColor ?? "#fff" }}>{name ?? "Button"}</Text>
                </View>
                :
                <ActivityIndicator color={'#fbff7c'} />}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default Button;
