import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';


const SubscriptionDetailsScreen = () => {
    // Sample subscription data
    const subscriptionData = {
        planName: "My ZenFamy Plan",
        price: "$99.99",
        frequency: "year",
        status: "Active",
        billingCycle: "Annual",
        startDate: "September 15, 2025",
        nextRenewalDate: "September 15, 2026",
        nextBillingDate: "September 15, 2024",
    };

    return (
        <ScrollView className="flex-1  p-4">
            {/* Header */}
            <View className="rounded-b-lg mb-4">
                <Text className="text-xl font-bold">{subscriptionData.planName}</Text>
                <Text className="text-gray-600 mt-2">{subscriptionData.price}</Text>
                <Text className="text-sm text-gray-600">Next billing: {subscriptionData.nextBillingDate}</Text>
            </View>
            {/* Current Plan */}
            <View className="bg-white p-4 mb-4 rounded-lg shadow-md flex-row justify-between">
                <View>
                    <Text className="text-xl font-semibold mb-4">{subscriptionData.planName}</Text>
                    <View className='flex-row items-end'>
                        <Text className="text-gray-900 font-semibold text-[29px]">
                            {subscriptionData.price}</Text>
                        <Text className='text-xs mb-2'>/{subscriptionData.frequency}</Text>
                    </View>
                    <Text className="text-sm text-gray-500 my-2">Next billing: September 15, 2024</Text>
                </View>
                <View>
                    <TouchableOpacity className="bg-[#8dbfaa] px-4 py-2 rounded-full flex-row items-center justify-center">
                        <Text className="text-white text-sm">+Active</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Subscription Details */}
            <View className='bg-white p-4 rounded-xl mb-5 shadow-md '>
                <View className="mb-4 items-center flex-row justify-between border-b border-gray-100 pb-2">
                    <Text className="text-gray-600">Status</Text>
                    <Text className="text-right text-green-500 font-semibold">{subscriptionData.status}</Text>
                </View>
                <View className="mb-4 items-center flex-row justify-between border-b border-gray-100 pb-2">
                    <Text className="text-gray-600">Billing Cycle</Text>
                    <Text className="text-right text-gray-600">{subscriptionData.billingCycle}</Text>
                </View>
                <View className="mb-4 items-center flex-row justify-between border-b border-gray-100 pb-2">
                    <Text className="text-gray-600">Start Date</Text>
                    <Text className="text-right text-gray-600">{subscriptionData.startDate}</Text>
                </View>
                <View className="mb-4 items-center flex-row justify-between border-b border-gray-100 pb-2">
                    <Text className="text-gray-600">Next Renewal Date</Text>
                    <Text className="text-right text-gray-600">{subscriptionData.nextRenewalDate}</Text>
                </View>
            </View>

            {/* Action Buttons */}
            <View>
                <Button name="Manage Payment Method" bgColor={colors.primaryButton} onPress={() => { }} />
                <Button name="Change Plan" bgColor={'#6A9B9D'} onclick={() => {router.push("./plans") }} />
                <Button name="Cancel Subscription" bgColor={"#f4d0cd"} onclick={() => { router.push("./cancelation") }} />
            </View>

            {/* Auto-Renewal Note */}
            <View className="bg-red-50 p-4 border border-gray-200 flex-row rounded-lg mt-4">
                <Ionicons name="information-circle-outline" size={26} color="red" />
                <Text className="text-sm text-red-500 ml-2 flex-1">
                    Your subscription will automatically renew unless auto-renewal is turned off at least 24 hours before the end of the current period.
                </Text>
            </View>

            <View className='h-[20px]'></View>
        </ScrollView>
    );
};

export default SubscriptionDetailsScreen;