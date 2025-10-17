import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import HalfCircleProgress from './components/HalfCircleProgressBar';
import Progressbar from '@/components/Progressbar/Progressbar';
import Button from '@/components/Buttons/Button';
import { colors } from '@/assets/lib';


const ParentingStyleQuizResultsScreen = () => {
    // Sample data for quiz results
    const quizResults = {
        title: "Parenting Style Quiz",
        date: "June 15, 2023",
        overallScore: 55,
        strengths: [
            {
                icon: "heart-o",
                title: "Emotional Connection",
                description: "Strong ability to connect emotionally with your child",
                progress:30
            },
            {
                icon: "comment-o",
                title: "Open Communication",
                description: "Excellent at maintaining open dialogue",
                progress:10
            },
            {
                icon: "lightbulb-o",
                title: "Problem Solving",
                description: "Creative approach for challenges",
                progress:70
            },
            {
                icon: "quote-left",
                title: "Personalized Communication",
                description: "Learn techniques for better parent-child conversations",
                progress:100
            },
        ],
    };

    return (
        <ScrollView className="flex-1 p-4 pt-0">
            {/* Header */}
            <View className="estonBlue_bg p-2 rounded-lg mb-4 flex-row items-center gap-2">
                <Image source={require("@/assets/images/login/notifi.png")} className="w-[60px] h-[60px]" />
                <View className='flex-1'>
                    <Text className="text-lg w-[80%] text-white font-semibold">Here’s what I’ve learned to better support you</Text>

                </View>
            </View>

            <View className='mb-5'>
                <Text className='text-[30px] font-semibold'>Your Results: Parenting Style Quiz</Text>
                <Text className='py-2'>Completed on June 15, 2023</Text>
            </View>

            <View>
                <View className='bg-white p-4 rounded-lg'>
                    <Text className='text-xl font-semibold'>Great Progress!</Text>
                    <Text className='text-gray-600 my-2' style={{ lineHeight: 20 }}>You have a strong foundation in open communication and emotional awareness. Let's explore your strengths and growth areas!</Text>
                    <HalfCircleProgress progress={.4} />

                </View>
            </View>

            {/* Your Strengths */}
            <View className="mb-4">
                <Text className="text-lg font-semibold mb-2">Your Strengths</Text>
                {quizResults.strengths.map((strength, index) => (
                    <View key={index} className='w-full flex-row items-center bg-white p-4 rounded-lg mb-2'>
                        <Image source={require("@/assets/images/imoji/animoji.png")} resizeMode='cover' className="w-[60px] h-[60px] rounded-full" />
                        <View className='flex-1 ml-2'>
                            <Text className="text-[16px] font-semibold">{strength.title}</Text>
                            <Text className="text-gray-600 text-[14px]">{strength.description}</Text>
                            <Progressbar progress={strength.progress} unfilledColor={'#fcf3f2'} filledColor={'#FFB4AC'} />
                        </View>
                    </View>
                ))}
            </View>
            {/* Mindful Communication */}
            <View className="mb-4">
                <Text className="text-lg font-semibold mb-2">Personalized Next Steps</Text>
                {quizResults.strengths.map((strength, index) => (
                    <View key={index} className='w-full flex-row items-start bg-white p-4 rounded-lg mb-2'>
                        <Image source={require("@/assets/images/imoji/animoji.png")} resizeMode='cover' className="w-[60px] h-[60px] rounded-full" />
                        <View className='flex-1 ml-2'>
                            <Text className="text-[16px] font-semibold">{strength.title}</Text>
                            <Text className="text-gray-600 text-[14px]">{strength.description}</Text>
                            <View className='w-1/2 mt-2'>
                                <Button name="Start Now" onPress={() => { }} bgColor={"#8dbfaa"} />
                            </View>
                        </View>
                    </View>
                ))}
            </View>

            {/* Mindful Communication */}
            <View>
                <Button name="Save Results" onPress={() => { }} textColor={"#272727"} bgColor={"#ffffff"} />
                <Button name="Save Results" onPress={() => { }} textColor={"#fff"} bgColor={colors.primaryButton} />
            </View>

            <View className='h-[100px]'></View>
        </ScrollView>
    );
};

export default ParentingStyleQuizResultsScreen;