import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, Modal } from 'react-native';

const SelectedChildScreen = () => {
    const [showFilterModal, setshowFilterModal] = useState(false);
    const [selctedFilter, setselctedFilter] = useState("All");
    // Sample data for the selected child
    const selectedChild = {
        name: "Emma",
        age: 5,
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

            {/* Selected Child Info */}
            <View className="flex-row items-center mb-4">
                {/* Placeholder Profile Picture */}
                <Image
                    source={require("@/assets/images/imoji/animoji.png")} // Replace with actual profile picture URL
                    style={{ width: 60, height: 60, borderRadius: 50 }}
                />
                <View className="ml-4">
                    <Text className="text-lg font-semibold">{selectedChild.name}</Text>
                    <Text className="text-gray-600 text-xs">Age: {selectedChild.age}</Text>
                </View>
            </View>

            {/* Tabs */}
            <View className="flex-row justify-between w-full mb-4">
                <View className='flex-row items-center w-[60%] gap-2'>
                    <View className='w-[40%]'>
                        <Button
                            name="Tips"
                            textColor={"#ffffff"}
                            onclick={() => router.push('/recommendation/tips')}
                            bgColor={colors.primaryButton}
                        />
                    </View>
                    <View className='w-[45%]'>
                        <Button
                            name="Activities"
                            textColor={"#679698"}
                            onclick={() => router.push('/recommendation')}
                            bgColor={"#E6FBFB"}
                        />
                    </View>
                </View>

                <View className='w-[30%]'>
                    <Button
                        name="Filter" 
                        textColor={"#ffffff"}
                        onclick={() => setshowFilterModal(true)}
                        bgColor={'#8dbfaa'}
                    />
                </View>

            </View>

            {/* Featured Activity Card */}
            <FlatList
                data={[1, 2, 3, 4, 5]}
                scrollEnabled={false}
                renderItem={({ item }) => (
                    <View className="bg-white p-4 rounded-2xl shadow-md mb-4">
                        {/* Activity Image */}
                        <Image
                            source={require("@/assets/images/recommendation/post.png")} // Replace with actual image URL
                            style={{ width: "100%", height: 200, borderRadius: 8 }}
                        />

                        <Text className='text-[12px] font-semibold p-3 rounded-full text-[#28b700] bg-[#d6f6d7] text-center w-[150px] absolute z-30 top-6 left-6'>Interest in Nature</Text>

                        {/* Activity Title */}
                        <Text className="text-[22px] font-semibold mt-2">The Magic Forest Adventure</Text>

                        {/* Activity Description */}
                        <Text className="text-gray-600 mt-1 mb-4">
                            Join Emma on her journey through the enchanted forest.
                        </Text>

                        {/* Start Button */}
                        <Button
                            name="Start Now"
                            textColor={"#ffffff"}
                            onclick={() => router.push('./details')}
                            bgColor={colors.primaryButton}
                        />
                    </View>
                )}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={showFilterModal}
                statusBarTranslucent={true}
            >
                <View className="flex-1 bg-[#00000073] items-center justify-end">
                    <View className='w-[100%] bg-white rounded-t-3xl p-4 py-5'>
                        {
                            <FlatList
                                data={["All", "Recent", "In Progress", "Completed", "Marked as Useful"]}
                                scrollEnabled={false}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => setselctedFilter(item)} className='flex-row border-b border-b-gray-100 py-3 items-center justify-between'>
                                        <Text className='text-[16px] font-semibold' style={{color: selctedFilter == item ? '#000': "#727272"}}>{item}</Text>
                                        <Ionicons name="checkbox" size={24} color={selctedFilter == item ? colors.primaryButton : "#fff"} />
                                    </TouchableOpacity>
                                )}
                            />
                        }
                        <View className='h-[20px]'></View>
                        <Button name="Apply" textColor={"#ffffff"} onclick={() => setshowFilterModal(false)} bgColor={colors.primaryButton} />
                    </View>

                </View>
            </Modal>
        </ScrollView>
    );
};

export default SelectedChildScreen;