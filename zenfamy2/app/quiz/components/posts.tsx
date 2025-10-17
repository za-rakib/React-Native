import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Posts = ({showbutton}:any) => {
    const [selectFilter, setselectFilter] = useState('week');
    return (
        <View className='flex-1'>

            {showbutton&&
            <View className='flex-row flex-1 items-center justify-between gap-2 mt-5'>
                <View className='w-[30%]'>
                    <Button onclick={() => setselectFilter('week')} name="This week" textColor={selectFilter == 'week' ? "#fff" : "#679698"} bgColor={selectFilter == 'week' ? colors.primaryButton : "#fff"} />
                </View>
                <View className='w-[30%]'>
                    <Button onclick={() => setselectFilter('month')} name="This Month" textColor={selectFilter == 'month' ? "#fff" : "#679698"} bgColor={selectFilter == 'month' ? colors.primaryButton : "#fff"} />
                </View>
                <View className='w-[35%]'>
                    <Button onclick={() => setselectFilter('3month')} name="Last 3 Month" textColor={selectFilter == '3month' ? "#fff" : "#679698"} bgColor={selectFilter == '3month' ? colors.primaryButton : "#fff"} />
                </View>
            </View>}

            <View>
                <Text className='text-[16px] font-bold text-[#000000] my-6'>February 10, 2024</Text>
                <TouchableOpacity className='flex-row items-center justify-between gap-2 bg-white rounded-xl p-4 mb-2'>
                    <Image className='w-[44px] h-[44px] bg-white rounded-full' source={require('@/assets/images/imoji/animoji.png')} />
                    <View className='flex-1'>
                        <Text className='text-[16px] font-bold text-[#000000]'>Math homework was challenging but I managed to finish it.</Text>
                        <Text className='text-gray-300'>14:30</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity className='flex-row items-center justify-between gap-2 bg-white rounded-xl p-4 mb-2'>
                    <Image className='w-[44px] h-[44px] bg-white rounded-full' source={require('@/assets/images/imoji/animoji.png')} />
                    <View className='flex-1'>
                        <Text className='text-[16px] font-bold text-[#000000]'>Math homework was challenging but I managed to finish it.</Text>
                        <Text className='text-gray-300'>14:30</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity className='flex-row items-center justify-between gap-2 bg-white rounded-xl p-4 mb-2'>
                    <Image className='w-[44px] h-[44px] bg-white rounded-full' source={require('@/assets/images/imoji/animoji.png')} />
                    <View className='flex-1'>
                        <Text className='text-[16px] font-bold text-[#000000]'>Math homework was challenging but I managed to finish it.</Text>
                        <Text className='text-gray-300'>14:30</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity className='flex-row items-center justify-between gap-2 bg-white rounded-xl p-4 mb-2'>
                    <Image className='w-[44px] h-[44px] bg-white rounded-full' source={require('@/assets/images/imoji/animoji.png')} />
                    <View className='flex-1'>
                        <Text className='text-[16px] font-bold text-[#000000]'>Math homework was challenging but I managed to finish it.</Text>
                        <Text className='text-gray-300'>14:30</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity className='flex-row items-center justify-between gap-2 bg-white rounded-xl p-4 mb-2'>
                    <Image className='w-[44px] h-[44px] bg-white rounded-full' source={require('@/assets/images/imoji/animoji.png')} />
                    <View className='flex-1'>
                        <Text className='text-[16px] font-bold text-[#000000]'>Math homework was challenging but I managed to finish it.</Text>
                        <Text className='text-gray-300'>14:30</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity className='flex-row items-center justify-between gap-2 bg-white rounded-xl p-4 mb-2'>
                    <Image className='w-[44px] h-[44px] bg-white rounded-full' source={require('@/assets/images/imoji/animoji.png')} />
                    <View className='flex-1'>
                        <Text className='text-[16px] font-bold text-[#000000]'>Math homework was challenging but I managed to finish it.</Text>
                        <Text className='text-gray-300'>14:30</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity className='flex-row items-center justify-between gap-2 bg-white rounded-xl p-4 mb-2'>
                    <Image className='w-[44px] h-[44px] bg-white rounded-full' source={require('@/assets/images/imoji/animoji.png')} />
                    <View className='flex-1'>
                        <Text className='text-[16px] font-bold text-[#000000]'>Math homework was challenging but I managed to finish it.</Text>
                        <Text className='text-gray-300'>14:30</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View className='h-[100px]'></View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Posts;
