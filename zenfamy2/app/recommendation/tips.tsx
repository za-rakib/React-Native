import { Feather, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TipsScreen = () => {
    return (
        <View className="flex-1  p-4">
            {/* Tip Title */}
            <Text className="text-[24px] font-semibold mb-4">5 Morning Habits That Boost Your Energy</Text>

            <View className='flex-1 bg-white rounded-xl p-4'>

                {/* Key Points */}
                <Text className="text-gray-600 my-4">
                    Sleep is fundamental to your toddler's development and well-being. Creating consistent bedtime routines can help your child transition smoothly from active play to restful sleep.
                </Text>

                <Text className="text-lg font-semibold mb-2">Key Points:</Text>
                <View className="ml-4">
                    <Text className="text-gray-600">
                        • Establish a consistent bedtime schedule
                    </Text>
                    <Text className="text-gray-600 my-2">
                        • Create a calming pre-sleep routine
                    </Text>
                    <Text className="text-gray-600">
                        • Make the bedroom environment sleep-friendly
                    </Text>
                </View>

                {/* Additional Information */}
                <Text className="text-gray-600 mt-4">
                    A regular bedtime routine helps your toddler understand when it's time to wind down. This predictability provides security and comfort, making bedtime less stressful for both parent and child.
                </Text>
            </View>

            {/* Feedback Section */}
            <View className="mt-8 justify-center items-center h-[200px]">
                <Text className="text-lg font-semibold mb-4">Was this tip helpful?</Text>
                <View className="flex-row gap-4">
                    {/* Helpful Button */}
                    <TouchableOpacity className="bg-[#e9f6e5] px-6 py-2 border border-gray-200 rounded-full flex-row items-center space-x-2">
                        <FontAwesome name="thumbs-up" size={20} color="#97a592" />
                        <Text className="text-[#97a592] ml-2 font-semibold">Helpful</Text>
                    </TouchableOpacity>

                    {/* Not Helpful Button */}
                    <TouchableOpacity className="bg-white px-4 py-4 border border-gray-200 rounded-full flex-row items-center space-x-2">
                        <Feather name="thumbs-down" size={20} color="#969696" />
                        <Text className="text-[#969696] font-semibold ml-2">Not Helpful</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default TipsScreen;