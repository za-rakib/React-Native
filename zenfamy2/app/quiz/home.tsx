import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';


const QuizzesScreen = () => {
    const [showCatDropdown, setshowCatDropdown] = useState(false);
    const [showModal, setshowModal] = useState(false);
    const [selectFilterAge, setselectFilterAge] = useState<any>();
    const [selectedcats, setselectedcats] = useState("All Questionaries");
    const allcats = ["All Questionaries", "Understanding Strengths", "Recognizing Feelings", "Problem Solving Skills", "Emotional Reactions", "Sibling Relationships", "Conflict Resolution", "Focus and Attention", "Motivation and Goals"]
    // Sample data for quizzes
    const quizzes = [
        {
            title: "Understanding Your Child's Strengths",
            description: "Discover your child's unique abilities and learn how to nurture them effectively.",
            duration: "30 mins",
            status: "Completed", // or "Not Started"
        },
        {
            title: "Developing Social Skills",
            description: "Learn strategies to help your child build strong social connections.",
            duration: "25 mins",
            status: "Not Started",
        },
        {
            title: "Encouraging Creativity",
            description: "Explore ways to foster creativity and imagination in your child.",
            duration: "40 mins",
            status: "Not Started",
        },
    ];

    return (
        <View className="flex-1 p-4">
            {/* Header */}
            <View className="rounded-b-lg mb-4">
                <Text className="text-[32px] font-bold">Explore with Quizzes</Text>
                <Text className="text-gray-600 text-[14px] mt-2">
                    Take these short quizzes to learn more about your child’s development, family dynamics, and get personalized tips from Master Zellers.
                </Text>
            </View>

            {/* Filter Section */}
            <View className="flex-row justify-between items-center mb-4">
                <TouchableOpacity onPress={() => setshowCatDropdown(!showCatDropdown)} className={`px-5 py-4 w-[70%] flex-row  items-center justify-between gap-2 ${showCatDropdown ? "rounded-t-2xl" : 'rounded-full'}`} style={{ backgroundColor: colors.secondaryTextColor }} >
                    <Text className="text-sm text-white">{selectedcats}</Text>
                    <Ionicons name="chevron-down" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setshowModal(true)} className='flex-row items-center gap-2 bg-white px-5 py-4 rounded-full'>
                    <Ionicons name="filter" size={20} color="#858585" />
                    <Text className='text-[14px] text-[#858585]'>Filter</Text>
                </TouchableOpacity>
                {showCatDropdown && <View className='bg-white p-4 rounded-b-2xl absolute border border-gray-200 z-50 top-[50px] w-[70%]'>
                    {
                        allcats.map((quiz, index) => (
                            <TouchableOpacity onPress={() => { setselectedcatsquiz; setshowCatDropdown(false) }} key={index} className="p-2 flex-row justify-between items-center py-4 border-b border-gray-100">
                                <Text>{quiz}</Text>
                                <Ionicons name={selectedcats === quiz ? "checkmark-circle" : "checkmark-circle-outline"} size={22} color={selectedcats === quiz ? colors.primaryButton : "#eee"} />
                            </TouchableOpacity>
                        ))
                    }
                </View>}

            </View>


            {/* Quiz Cards */}
            {
                <FlatList
                    data={quizzes}
                    renderItem={({ item: quiz }: any) => (
                        <View className="bg-white p-4 mb-4 rounded-xl shadow-md">
                            {/* Title and Description */}
                            <View className=' flex flex-row justify-between mb-4'>
                                <Text className='text-gray-600 border bg-white rounded-full px-4 border-gray-200 p-2'>Based on your interest in nature</Text>
                            </View>
                            <Text className="text-2xl font-semibold mb-2">{quiz?.title}</Text>
                            <Text className="text-gray-600 mb-2">{quiz?.description}</Text>

                            {/* Duration */}
                            <Text className="text-sm text-gray-600 mb-4">Based on your child's interests and values</Text>

                            <View className='flex-row items-center mb-4'>
                                <Ionicons name='time-outline' size={24} color={colors?.primaryButton} />
                                <Text className="text-gray-600 text-[16px] estonBlue"> 30 mins</Text>
                            </View>

                            {/* Action Button */}
                            {quiz?.status === "Completed" ? (
                                <TouchableOpacity className="bg-[#8dbfaa] flex-row items-center justify-center px-4 py-5 w-[40%] rounded-full gap-2">
                                    <Ionicons name="checkmark" size={20} color="white" />
                                    <Text className="text-white text-center font-semibold">Completed</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => router.push('./quiz')} className="estonBlue_bg flex-row items-center justify-center px-4 py-5 rounded-full gap-2">
                                    <Text className="text-white font-semibold">Start Quiz</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    )}
                    keyExtractor={(item) => item.title}
                />
            }

            <Modal animationType="fade" transparent={true} statusBarTranslucent={true} visible={showModal}>
                <View className='flex-1 justify-end items-center bg-[rgba(0,0,0,0.5)]'>
                    <View className='bg-white rounded-t-2xl p-6 w-full '>
                        <View className='flex-row items-center justify-between my-5 mt-2'>
                            <Text className='text-[22px] font-semibold'>Filter Categories</Text>
                            <TouchableOpacity onPress={() => {
                                setselectFilterAge("");
                                // setshowModal(false);
                            }}>
                                <Ionicons name='reload-outline' size={24} color='black' />
                            </TouchableOpacity>
                        </View>
                        <Text className='text-lg mb-2 font-semibold'>Select your age range:</Text>
                        <View className='flex-row flex-wrap gap-2 mb-5'>
                            <TouchableOpacity className='rounded-full p-4 border px-5 border-gray-200 mb-2'>
                                <Text>All</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className='rounded-full p-4 px-5 border border-gray-200 mb-2'>
                                <Text>Completed</Text>
                            </TouchableOpacity>
                        </View>

                        <Text className='text-lg mb-2 font-semibold'>Select your age range:</Text>
                        <View className='flex-row flex-wrap justify-between mb-4'>
                            {
                                ["0-3", "3-6", "6-12", "12-18"].map((age:any, index) => (
                                    <TouchableOpacity className='rounded-lg w-[49%] p-4 px-5 border border-gray-200 mb-2' style={{ backgroundColor: selectFilterAge === age ? '#E9F6E5' : "#fff" }} key={index} onPress={() => { setselectFilterAge(age) }}>
                                        <Text className='font-semibold text-[28px] text-center'>{age}</Text>
                                        <Text className='text-center text-gray-500'>Years</Text>
                                    </TouchableOpacity>
                                ))
                            }

                        </View>

                        <Button name="Search Result" onclick={() => { setshowModal(false) }} bgColor={colors?.primaryButton} />

                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default QuizzesScreen;