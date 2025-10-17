import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

const PremiumSubscriptionScreen = () => {
    return (
        <ScrollView className="flex-1 p-4 mt-8">
            <View>
                <Image resizeMode='contain' className='w-[100%] ' source={require('@/assets/images/subscription/feat.png')} />
            </View>
            <View className='flex-row flex-wrap' style={{ elevation: 3 }}>
                <Text className='bg-[#F4978E] px-5 py-3 rounded-full text-[12px] text-white'>👑 Premium</Text>
            </View>
            {/* Header */}
            <View className="mb-4">
                <Text className="text-[23px] my-2 font-bold">Give your family full access to the ZenFamy world</Text>
                <Text className="text-gray-500 mt-2">
                    Join thousands of families on their journey to mindfulness
                </Text>
            </View>

            {/* Benefits Section */}
            <View className="mb-4">

                <View className="bg-white p-4 rounded-lg border border-gray-200 flex-col gap-2">
                    {/* Benefit 1: Personalized Stories */}
                    <View className="mr-2 mb-2 rounded-full flex-row items-center border-b border-gray-100 pb-3">
                        <Image source={require('@/assets/images/subscription/paperpen.png')} className='w-[50px] h-[50px] bg-white rounded-full flex-row items-center justify-center' />
                        <View>
                            <Text className="text-black text-xl font-semibold ml-2">Unlimited personalized stories</Text>
                            <Text className="text-gray-500 text-sm ml-2">Unlimited personalized stories</Text>
                        </View>
                    </View>


                    <View className="mr-2 mb-2 rounded-full flex-row items-center border-b border-gray-100 pb-3">
                        <Image source={require('@/assets/images/subscription/light.png')} className='w-[50px] h-[50px] bg-white rounded-full flex-row items-center justify-center' />
                        <View>
                            <Text className="text-black text-xl font-semibold ml-2">Tailored parenting advice</Text>
                            <Text className="text-gray-500 text-sm ml-2">Track emotional growth with AI-powered analytics</Text>
                        </View>
                    </View>



                    <View className="mr-2 mb-2 rounded-full flex-row items-center border-b border-gray-100 pb-3">
                        <Image source={require('@/assets/images/subscription/penpaaper.png')} className='w-[50px] h-[50px] bg-white rounded-full flex-row items-center justify-center' />
                        <View>
                            <Text className="text-black text-xl font-semibold ml-2">Emotional journal for each child</Text>
                            <Text className="text-gray-500 text-sm ml-2">Access premium quizzes and family exercises</Text>
                        </View>
                    </View>


                    <View className="mr-2 mb-2 rounded-full flex-row items-center border-b border-gray-100 pb-3">
                        <Image source={require('@/assets/images/subscription/yoga.png')} className='w-[50px] h-[50px] bg-white rounded-full flex-row items-center justify-center' />
                        <View>
                            <Text className="text-black text-xl font-semibold ml-2">Complete access to quizzes</Text>
                            <Text className="text-gray-500 text-sm ml-2">Learn from Master Zenio's complete collection</Text>
                        </View>
                    </View>

                </View>
            </View>

           

            {/* Featured Image */}
            <Image
                source={require("@/assets/images/subscription/banner.png")} // Replace with actual image URL
                className='mb-4'
                style={{ width: "100%", borderRadius: 8 }}
            />

            {/* Call-to-Action Button */}
            <Button bgColor={colors.secondaryBackground} name="Learn More" textColor={colors.primaryButton} onPress={() => { }} />
            <Button bgColor={colors.secondaryTextColor} name="Start Premium Journey" onPress={() => { }} />

            {/* Footer Note */}
            <Text className="text-sm mt-2 text-center text-[#b9807e]">
                7-day free trial | Cancel anytime
            </Text>

            <View className='h-[100px]'></View>
        </ScrollView>
    );
};

export default PremiumSubscriptionScreen;