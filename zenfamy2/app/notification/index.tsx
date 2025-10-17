import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Empty from "@/app/notification/Components/Empty";

const PremiumSubscriptionScreen = () => {
    const dispatch = useDispatch()
    const {notification} = useSelector((state: any) => state?.notifications)
    
    
    return (
        <ScrollView className="flex-1 p-4">
           
            {/* Benefits Section */}
            {notification?.length>0&&<Text className='text-[14px] text-right estonBlue mb-2'>Mark all as read</Text>}
            <View className="">

                {notification?.length>0&&<View className="bg-white p-4 rounded-lg border border-gray-200 flex-col gap-2">
                    {/* Benefit 1: Personalized Stories */}
                    <View className="mr-2 mb-2 rounded-full flex-row items-center border-b border-gray-100 pb-3">
                        <Image source={require('@/assets/images/subscription/paperpen.png')} className='w-[50px] h-[50px] bg-white rounded-full flex-row items-center justify-center' />
                        <View>
                            <Text className="text-black text-xl font-semibold ml-2">New Story Available</Text>
                            <Text className="text-gray-700 text-sm ml-2">Unlimited personalized stories</Text>
                            <Text className="text-gray-500 text-xs ml-2 mt-1">10 min ago</Text>
                        </View>
                    </View>


                    <View className="mr-2 mb-2 rounded-full flex-row items-center border-b border-gray-100 pb-3">
                        <Image source={require('@/assets/images/subscription/light.png')} className='w-[50px] h-[50px] bg-white rounded-full flex-row items-center justify-center' />
                        <View>
                            <Text className="text-black text-xl font-semibold ml-2">Daily Activity</Text>
                            <Text className="text-gray-700 text-sm ml-2">Track emotional growth with AI-powered analytics</Text>
                            <Text className="text-gray-500 text-xs ml-2 mt-1">10 min ago</Text>
                        </View>
                    </View>



                    <View className="mr-2 mb-2 rounded-full flex-row items-center border-b border-gray-100 pb-3">
                        <Image source={require('@/assets/images/subscription/penpaaper.png')} className='w-[50px] h-[50px] bg-white rounded-full flex-row items-center justify-center' />
                        <View>
                            <Text className="text-black text-xl font-semibold ml-2">New Feature</Text>
                            <Text className="text-gray-700 text-sm ml-2">Access premium quizzes and family exercises</Text>
                            <Text className="text-gray-500 text-xs ml-2 mt-1">10 min ago</Text>
                        </View>
                    </View>


                    <View className="mr-2 mb-2 rounded-full flex-row items-center border-b border-gray-100 pb-3">
                        <Image source={require('@/assets/images/subscription/yoga.png')} className='w-[50px] h-[50px] bg-white rounded-full flex-row items-center justify-center' />
                        <View>
                            <Text className="text-black text-xl font-semibold ml-2">Great progress! </Text>
                            <Text className="text-gray-700 text-sm ml-2">Learn from Master Zenio's complete collection</Text>
                            <Text className="text-gray-500 text-xs ml-2 mt-1">10 min ago</Text>
                        </View>
                    </View>

                </View>}

                <View className='flex-1 justify-center items-center'>
                    <Empty/>
                    <Text className='text-[29px] font-semibold text-center w-[80%]'>No new notifications right now</Text>
                </View>
            </View>

           

            

            <View className='h-[100px]'></View>
        </ScrollView>
    );
};

export default PremiumSubscriptionScreen;