import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

const StoryDetailsScreen = () => {
    // Story data
    const storyData = {
        title: "The Last Lighthouse Keeper",
        readingTime: "5 min read",
        generatedOn: "Generated on Oct 15, 2023",
        content:
            "On a remote island where the sea meets the sky, lived old Thomas, the last lighthouse keeper. Every evening, as the sun dipped below the horizon, he would climb the spiral staircase, his weathered hands gripping the brass rail.\n\nThe ritual never changed - light the beacon, check the mirrors, log the weather. But on this particular stormy night, something was different. The beam of light caught something unusual in the waves...\nThe ritual never changed - light the beacon, check the mirrors, log the weather. But on this particular stormy night, something was different. The beam of light caught something unusual in the waves...",
    };

    return (
        <ScrollView className="flex-1 p-4">
            {/* Header */}
            <View className="bg-purple-200 p-2 rounded-lg mb-4 flex-row items-center gap-2">
                <Image source={require("@/assets/images/login/notifi.png")} className="w-[60px] h-[60px]" />
                <View className='flex-1'>
                    <Text className="text-lg font-semibold">Your story is ready!</Text>
                    <Text className="text-lg font-semibold">Let's enjoy this adventure together.</Text>
                </View>
            </View>

            <View className='bg-white p-4 rounded-lg mb-4'>

                {/* Story Title and Metadata */}
                <View className="mb-4">
                    <Text className="text-2xl font-bold">{storyData.title}</Text>
                    <Text className="estonBlue font-semibold mt-1 text-[16px]" >
                        {storyData.readingTime} • {storyData.generatedOn}
                    </Text>
                </View>

                {/* Story Content */}
                <Text className="text-gray-600 mb-4  text-[16px]" style={{lineHeight: 23}}>{storyData.content}</Text>
            </View>
            {/* Interactive Options */}
            <View className="flex-row justify-between mb-4">
                {/* Read Aloud */}
                <TouchableOpacity className="items-center space-x-2 w-[48%] bg-white p-6 rounded-lg">
                    <Ionicons name="volume-high-outline" size={24} color="black" />
                    <Text className="text-black font-semibold">Read Aloud</Text>
                </TouchableOpacity>

                {/* Download PDF */}
                <TouchableOpacity className="items-center space-x-2 w-[48%] bg-white p-6 rounded-lg">
                    <Ionicons name="download" size={24} color="black" />
                    <Text className="text-black font-semibold">Download PDF</Text>
                </TouchableOpacity>
            </View>

            {/* Mark as Read and Delete */}
            <View className="flex-row justify-between mb-4">
                {/* Mark as Read */}
                <TouchableOpacity className="items-center space-x-2 w-[48%] bg-white p-6 rounded-lg">
                    <Ionicons name="checkmark-sharp" size={24} color="black" />
                    <Text className="text-black font-semibold">Mark as Read</Text>
                </TouchableOpacity>

                {/* Delete */}
                <TouchableOpacity className="items-center space-x-2 w-[48%] bg-white p-6 rounded-lg">
                    <Ionicons name="trash-outline" size={24} color="black" />
                    <Text className="text-black font-semibold">Delete</Text>
                </TouchableOpacity>
            </View>

            {/* Rating System */}
            <Text className='text-[16px] font-semibold mt-4 text-center'>Rate this story</Text>
            <View className="flex-row justify-center mb-4 mt-4 gap-3">
                <Ionicons name="star" size={24} color="gold" />
                <Ionicons name="star" size={24} color="gold" />
                <Ionicons name="star" size={24} color="gold" />
                <Ionicons name="star" size={24} color="gold" />
                <Ionicons name="star" size={24} color="gold" />
            </View>
            <View className='h-[100px]'></View>
        </ScrollView>
    );
};

export default StoryDetailsScreen;