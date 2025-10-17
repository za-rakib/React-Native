import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import HalfCircleProgress from './components/HalfCircleProgressBar';
import Progressbar from '@/components/Progressbar/Progressbar';
import Button from '@/components/Buttons/Button';
import { colors } from '@/assets/lib';
import Input from '@/components/Input/Input';
import InputIcon from '@/components/Input/InputIcon';


const ParentingStyleQuizResultsScreen = () => {
    const [selectedFilter, setselectedFilter] = useState("All");
    const [selectedType, setselectedType] = useState("Stories");
    // Sample data for quiz results
    const quizResults = {
        title: "Parenting Style Quiz",
        date: "June 15, 2023",
        overallScore: 55,
        strengths: [
            {
                icon: "heart-o",
                title: "Emotional Connection",
                description: "Today",
                progress: 30
            },
            {
                icon: "comment-o",
                title: "Open Communication",
                description: "Yesterday",
                progress: 10
            },
            {
                icon: "lightbulb-o",
                title: "Problem Solving",
                description: "2 days ago",
                progress: 70
            },
            {
                icon: "quote-left",
                title: "Personalized Communication",
                description: "3 days ago",
                progress: 100
            },
        ],
    };

    return (
        <ScrollView className="flex-1 p-4 pt-0">


            <View>
                <InputIcon setInput={() => { }} inputvalue="" label="Search your treasures..." ispassword={false} icon={<Ionicons name="search" size={24} color="black" />} />
            </View>

            <View className='mb-4'>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        ["All", "By Child", "Date Range", "StOries"]
                            .map((item, index) =>
                                <TouchableOpacity onPress={() => setselectedFilter(item)} key={index} style={{ elevation: 3 }} className={`rounded-full mr-2 flex-row items-center ${selectedFilter === item ? "estonBlue_bg" : "bg-[#E6FBFB]"} p-4 px-[30px] mb-2`}>
                                    <Text className="text-[14px]" style={{ color: selectedFilter === item ? "white" : "black" }}>{item}</Text>
                                </TouchableOpacity>
                            )}

                </ScrollView>

            </View>

            <View className='my-4'>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        ["Stories", "Recomendations", "Quizzes", "JOurnal"]
                            .map((item, index) =>
                                <TouchableOpacity onPress={() => setselectedType(item)} key={index} className={`border-b-2 pb-3 flex-row items-center ${selectedType === item ? "border-[#00bdbd]" : "border-[#D6E4EA]"} px-[20px] mb-2`}>

                                    <Text className="text-[14px]" style={{ color: selectedType === item ? "#00bdbd" : "black" }}>

                                        {item}</Text>
                                </TouchableOpacity>
                            )}

                </ScrollView>

            </View>

            {/* Your Strengths */}
            <View className="my-4">

                {quizResults.strengths.map((strength, index) => (
                    <View key={index} className='w-full flex-row items-center bg-white p-4 rounded-lg mb-2'>
                        <Image source={require("@/assets/images/imoji/animoji.png")} resizeMode='cover' className="w-[60px] h-[60px] rounded-full" />
                        <View className='flex-1 ml-2'>
                            <Text className="text-[16px] font-semibold">{strength.title}</Text>
                            <View className='flex-row items-center mt-2'>
                                <Ionicons name='time-outline' size={18} />
                                <Text className="text-gray-600 text-[14px]"> {strength.description}</Text>
                            </View>

                        </View>
                        <Ionicons name="chevron-forward" size={18} color="#747474" />
                    </View>
                ))}
            </View>


            <View className='h-[100px]'></View>
        </ScrollView>
    );
};

export default ParentingStyleQuizResultsScreen;