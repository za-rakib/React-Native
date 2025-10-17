import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';


const SubscriptionCancellationScreen = () => {
    // State to track user's reasons for cancellation
    const [reasons, setReasons] = useState<any>({
        tooExpensive: false,
        notUsingFeatures: false,
        foundAlternative: false,
        technicalIssues: false,
        other: false,
    });

    // Handle reason selection
    const handleReasonChange = (key: any) => {
        setReasons((prev: any) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <ScrollView className="flex-1  p-4 pt-0">
            {/* Header */}
            <View className="bg-[#D6BFE2] p-2 gap-2 rounded-lg mb-4 flex-row items-center">
                <Image source={require('@/assets/images/login/notifi.png')} className='' />
                <View className='flex-1'>
                    <Text className="text-[13px] font-bold">We hope to help support your parenting journey.</Text>
                    <Text className="text-[13px] font-bold">Let’s see if we can help before you decide.</Text>
                </View>
            </View>

            {/* Subscription Details */}
            <View className="bg-white p-4 mb-4 rounded-lg shadow-md flex-row justify-between">
                <Ionicons name="information-circle-outline" size={24} color="#e3aeaa" />
                <Text className="text-sm text-gray-600 ml-2">Your ZenFamy Premium subscription is active until December 31, 2023.</Text>
            </View>

            {/* Special Offer */}
            <Text className="text-lg font-semibold mb-2">One last thing before you go...</Text>
            <View className="bg-white p-4 mb-4 rounded-lg shadow-md">

                <View className="flex-row items-center py-2 border-b border-gray-100">
                    <FontAwesome name="times-circle-o" size={24} color="#e3aeaa" />
                    <Text className="text-sm text-gray-600 ml-2">Unlimited meditation sessions</Text>
                </View>
                <View className="flex-row items-center py-2 border-b border-gray-100">
                    <FontAwesome name="times-circle-o" size={24} color="#e3aeaa" />
                    <Text className="text-sm text-gray-600 ml-2">Personalized wellness tracking</Text>
                </View>
                <View className="flex-row items-center py-2 border-b border-gray-100">
                    <FontAwesome name="times-circle-o" size={24} color="#e3aeaa" />
                    <Text className="text-sm text-gray-600 ml-2">Ad-free experience</Text>
                </View>

            </View>

            <View className='bg-[#fff] p-4 gap-2 rounded-lg mb-4'>
                <Text className="text-lg font-semibold mb-2">Special Offer</Text>
                <View className='flex-row items-end'>
                    <Text className='text-[29px] font-bold'>$99.99</Text>
                    <Text className='text-sm mb-1'>/year</Text>
                </View>
                <Text className='text-sm mb-4'>Enjoy 30 extra days of full access for $XX. Stay connected to stories, tips, and Zenio."</Text>
                <Button name="Accept Offer" bgColor={colors.secondaryTextColor} />
                <Button name="Start Free Trial" bgColor={"#8dbfaa"} />
            </View>

            {/* Feedback Section */}
            <View className="mb-4 bg-white p-4 rounded-lg">
                <Text className="text-lg font-semibold mb-2">Please tell us why you're cancelling:</Text>
                <View className="">
                    {/* Too expensive */}
                    {
                        Object.keys(reasons).map((key: any, index) => (
                            <TouchableOpacity onPress={() => handleReasonChange(key)} key={index} className="flex-row py-4 border-b border-gray-100 items-center mb-2 justify-between">
                                <Text className="ml-2 text-gray-600">{key}</Text>
                                {!reasons[key] && <View className='w-[20px] h-[20px] border-2 border-gray-200 rounded-md'></View>}
                                {reasons[key] && <Ionicons name="checkbox" size={20} color={colors.primaryButton} />}
                            </TouchableOpacity>
                        ))
                    }


                </View>
            </View>

            {/* Action Buttons */}
            <Button name="Keep My Subscription" bgColor={colors.primaryButton} />
            <Button name="Confirm Cancellation" bgColor={colors.secondaryTextColor} />

            <View className='h-[100px]'></View>
        </ScrollView>
    );
};

export default SubscriptionCancellationScreen;