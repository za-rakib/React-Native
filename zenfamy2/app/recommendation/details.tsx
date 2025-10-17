import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Header from './components/Header';
import Button from '@/components/Buttons/Button';
import { colors } from '@/assets/lib';


const ActivityDetailsScreen = () => {
    // Sample data for the activity
    const activityData = {
        title: "The Magic Forest Adventure",
        duration: "3-4 years",
        times: "30 mins",
        materials: ["Finger paint","Large white paper","Old clothes", "Water wipes"],
        steps: [
            "Prepare the workspace with a protective cover.",
            "Place paint sheet on a protected surface.",
            "Put small amounts of different colored paints.",
            "Let your child explore and create freely.",
            "Allow to dry completely.",
        ],
        skillsDeveloped: ["Fine motor skills", "Color recognition", "Creative thinking", "Emotional expression"],
    };

    return (
        <ScrollView className="flex-1 ">
            {/* Header */}
            <Header title="" rightImage={<Ionicons name="heart-outline" size={24} color="black" />} />
            <View className=" p-4 rounded-b-lg mb-4">
                <Image
                    source={require("@/assets/images/recommendation/post.png")} // Replace with actual image URL
                    style={{ width: "100%", height: 200, borderRadius: 8 }}
                />
                <Text className="text-xl font-bold mt-4">{activityData.title}</Text>
                <View className='flex-row items-center gap-3'>
                    <View className="flex-row items-center gap-2 mt-2 px-5 py-3 border border-gray-300 bg-[#ccf8c8] rounded-full">
                        <Feather name="smile" size={18} color="gray" />
                        <Text className="text-gray-500">{activityData.duration}</Text>
                    </View>
                    <View className="flex-row items-center gap-2 mt-2 px-5 py-3 border border-gray-300 bg-[#ccf8c8] rounded-full">
                        <Feather name="clock" size={18} color="gray" />
                        <Text className="text-gray-500">{activityData.times}</Text>
                    </View>
                </View>
            </View>

            {/* Materials Needed */}
            <View className="mb-4 p-4">
                <Text className="text-lg font-semibold mb-2">About This Activity</Text>
                <Text className='text-gray-600'>Transform ordinary paper into a colorful masterpiece using just your fingers! This engaging activity encourages creativity, sensory exploration, and fine motor skill development while letting your child express themselves freely.</Text>
                <Text className="text-lg font-semibold my-2 mt-4">What You'll Need:</Text>
                <View className="flex-row flex-wrap">
                    {activityData.materials.map((material, index) => (
                        <View key={index} className="bg-white px-4 py-3 rounded-full mr-2 mb-2 border border-gray-200">
                            <Text className="text-gray-600 text-sm">{material}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Step-by-Step Guide */}
            <View className="mb-4 p-4 pt-0">
                <Text className="text-lg font-semibold mb-2">Step by Step Guide:</Text>
                <View className='bg-white p-4 rounded-xl'>
                    {activityData.steps.map((step, index) => (
                        <Text key={index} className="text-gray-600 mt-2 border-b border-gray-200 pb-4">
                            <Text>{index + 1}</Text> {step}
                        </Text>
                    ))}
                </View>
            </View>

            {/* Skills Developed */}
            <View className='p-4'>
                <Text className="text-lg font-semibold mb-2">Skills Developed:</Text>
                <View className="flex-row flex-wrap">
                    {activityData.skillsDeveloped.map((skill, index) => (
                        <View key={index} className="bg-white px-4 w-[48%] py-4 rounded-full mr-2 mb-2 border border-gray-200">
                            <Text className="text-gray-700 text-sm text-center">{skill}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <View className='p-4'>
                <Button name="Mark as Complete" onPress={() => { }} bgColor={colors.primaryButton} />
            </View>
        </ScrollView>
    );
};

export default ActivityDetailsScreen;