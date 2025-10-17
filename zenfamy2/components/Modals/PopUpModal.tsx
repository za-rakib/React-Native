import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from '../Buttons/Button';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/assets/lib';


const PopUpModal = ({image,title,description, controller, button1, button2, style}:any) => {
    return (
        <View className='absolute top-0 flex-1 left-0 h-full w-full z-50 items-center justify-center bg-[#0000006b]' style={style?style:{}}>
            <View className='bg-white w-[90%] rounded-2xl p-6'>
                <View className='justify-center items-center mb-6 pt-4'>
                    <View className=' rounded-full items-center justify-center my-3'>
                        {<Image source={image??require('../../assets/images/login/popup.png')} className='' />}
                    </View>
                    <Text className='text-center text-[24px] font-semibold text-[#000000]'>{title??"Check Your Email"}</Text>
                    <Text className='text-gray-500 text-[12px] text-center'>{description??"Your order has been successfully placedYou successfully Completed the Profile verification process."}</Text>
                </View>
                {button1??<Button onclick={controller} name={'Done'} textColor={'#fff'} bgColor={colors.primaryButton} loading={false}/>}
                {button2&&button2}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default PopUpModal;
