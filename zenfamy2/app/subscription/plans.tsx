import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const PlanSelectionScreen = () => {
    // State to track selected plan
    const [selectedPlan, setSelectedPlan] = useState('monthly'); // Default to monthly plan

    // Plan data
    const plans: any = [
        {
            id: 'monthly',
            title: 'Monthly Plan',
            price: '$9.99',
            frequency: 'Monthly',
            benefits: [
                'Unlimited personalized stories',
                'Personalized parenting advice',
                'Up to 10% off downloads',
                'No ads or interruptions',
                'Full access to premium content',
            ],
            features: {
                "Personalized stories": 'Limited',
                Games: 'Limited',
                "Download credits": 1,
            },
        },
        {
            id: 'annual',
            title: 'Annual Plan',
            price: '$79.99',
            frequency: 'Annually',
            benefits: [
                'Unlimited personalized stories',
                'Personalized parenting advice',
                'Up to 10% off downloads',
                'No ads or interruptions',
                'Full access to premium content',
            ],
            features: {
                "Personalized stories": 'Unlimited',
                Games: 'Unlimited',
                "Download credits": 10,
            },
        },
    ];

    // Handle plan selection
    const handlePlanSelect = (planId: any) => {
        setSelectedPlan(planId);
    };

    return (
        <ScrollView className="flex-1 p-4">
            {/* Header */}
            <View className="rounded-b-lg mb-4">
                <Text className="text-xl font-bold">Unlock the Full ZenFamy Experience</Text>
                <Text className="text-gray-600 mb-1 text-xs">Join thousands of families on their journey to mindfulness</Text>
            </View>

            {/* Current Plan */}
            <View className="bg-white p-4 mb-4 rounded-lg shadow-md flex-row justify-between">
                <View>
                    <Text className="text-sm">Current Plan</Text>
                    <Text className="text-xl font-semibold mb-2">ZenFamy Full Access</Text>
                </View>
                <TouchableOpacity className="bg-[#8dbfaa] px-4 py-2 rounded-full flex-row items-center justify-center">
                    <Text className="text-white text-sm">+Active</Text>
                </TouchableOpacity>
            </View>

            {/* Plan Options */}
            <View >
                {plans.map((plan: any) => (
                    <View key={plan.id} className="mb-4">
                        <TouchableOpacity
                            onPress={() => handlePlanSelect(plan.id)}
                            className={`bg-white p-4 rounded-lg shadow-md ${selectedPlan === plan.id ? 'border-2 border-teal-500' : ''
                                }`}
                        >
                            <View className="flex-row justify-between items-start border-b  pb-4 mb-4 border-gray-200">
                                <View>
                                    <Text className="text-lg font-semibold">{plan.title}</Text>
                                    <View className='flex-row items-end'>
                                        <Text className="text-gray-900 font-semibold text-[29px]">
                                        {plan.price}</Text>
                                        <Text className='text-xs mb-2'>/{plan.frequency}</Text>
                                    </View>
                                </View>

                                <View>
                                    <View className='flex-row flex-wrap'>
                                        <Text className='bg-[#F4978E] px-5 py-3 rounded-full text-[12px] text-white'>🔥 Most Popular</Text>
                                    </View>
                                    <Text  className='text-right mt-5 text-[#F4978E]'>Save 33%</Text>
                                </View>

                            </View>

                            {/* Benefits */}
                            <View className="my-2 mb-6">
                                {plan.benefits.map((benefit: any, index: any) => (
                                    <View key={index} className='flex-row items-center gap-1 mb-2'>
                                        <Text><Ionicons name='checkmark-circle-outline' size={23} color={'#00a308'} /></Text>
                                        <Text className="text-gray-800 font-semibold">
                                            {benefit}
                                        </Text>
                                    </View>
                                ))}
                            </View>

                            {/* Start Free Trial Button (for Monthly Plan) */}
                            {plan.id === 'monthly' && (
                                <Button name="Start a Free Trial" textColor='#fff' bgColor={colors.primaryButton} onclick={() => router.push('/family_profile')} />
                            )}

                            {/* Buy Now Button (for Annual Plan) */}
                            {plan.id === 'annual' && (
                                <Button name="Choose Annual" textColor='#fff' bgColor={colors.primaryButton} onclick={() => router.push('/family_profile')} />
                            )}
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

            {/* What's Included Section */}
            <Text className="text-lg font-semibold my-2">What's included</Text>
            <View className="bg-white p-4 mb-4 rounded-lg shadow-md">
                
                <View className="flex-row justify-between border-b border-gray-100 py-4">
                    <Text className="text-gray-800 font-semibold w-[33%]">Features</Text>
                    <Text className="text-gray-800 font-semibold w-[33%]">Free Plan</Text>
                    <Text className="text-gray-800 font-semibold w-[33%]">Full Access</Text>
                </View>
                <View className="mt-2">
                    {Object.keys(plans[0].features).map((feature, index) => (
                        <View key={index} className="flex-row justify-between border-b border-gray-100 py-4">
                            <Text className="text-gray-600 text-xs w-[33%]">{feature}</Text>
                            <Text className="text-gray-600 text-xs w-[33%]">{plans[0].features[feature]}</Text>
                            <Text className="text-gray-600 text-xs w-[33%]">{plans[1].features[feature]}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <View>
                <Text className='text-center text-[#F4978E]'>7-day free trial included</Text>

                <Text className=' mt-6'>By continuing, you agree to our <Link href={'/terms'} className='estonBlue'> Terms of Service </Link> and <Link href={'/terms'} className='estonBlue'> Privacy Policy</Link></Text>
            </View>

            <View className='h-[100px]'></View>
        </ScrollView>
    );
};

export default PlanSelectionScreen;