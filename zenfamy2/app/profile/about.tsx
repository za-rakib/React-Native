import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

const About = () => {
  return (
    <ScrollView className="p-4">
      {/* Header */}
      <View className=" rounded-b-lg justify-center items-center">
        <Image source={require('../../assets/images/profile/about.png')} className='my-5' />
        <Text className="text-[29px] font-bold mt-4">Meet Master Zenio — Your Calm Parenting Guide 🌿</Text>
        <Text className="text-gray-600 mt-2">
          Master Zenio is here to gently support you on your parenting journey. Think of him as your wise, compassionate companion — ready to help you understand your child’s feelings, navigate daily challenges, and grow together with patience and kindness.
        </Text>
        <Text className="text-gray-600 mt-2">
          With insights rooted in child psychology and practical wisdom, Master Zenio offers advice, reflections, and tools designed just for parents like you — because calm parenting starts with confident understanding.
        </Text>
      </View>

      {/* Content */}
      <View className="p-4 rounded-xl mt-5 bg-white">
        {/* Section 1: Information We Collect */}
        <View className="mb-4">
          <Text className="text-lg font-bold">1. Information We Collect</Text>
          <Text className="text-gray-600 mt-2">
            We may collect the following types of information when you use our site:
          </Text>
          <View className="ml-4 mt-2">
            <Text className="text-gray-600">
              • Personal Information: Name, email address, phone number, etc. (only if you submit it through a form).
            </Text>
            <Text className="text-gray-600">
              • Usage Data: IP address, browser type, pages visited, time spent on the site.
            </Text>
            <Text className="text-gray-600">
              • Travel Preferences: If you use our AI planner, we may collect trip-related preferences (e.g., destinations, budget, travel style).
            </Text>
          </View>
        </View>

        {/* Section 2: How We Use Your Information */}
        <View className="mb-4">
          <Text className="text-lg font-bold">2. How We Use Your Information</Text>
          <Text className="text-gray-600 mt-2">
            We use your information to:
          </Text>
          <View className="ml-4 mt-2">
            <Text className="text-gray-600">
              • Personalize your travel experience.
            </Text>
            <Text className="text-gray-600">
              • Provide AI-based recommendations and services.
            </Text>
            <Text className="text-gray-600">
              • Respond to your inquiries or support requests.
            </Text>
            <Text className="text-gray-600">
              • Improve our platform, design, and features.
            </Text>
            <Text className="text-gray-600">
              • Send travel updates or marketing emails (only if you subscribe).
            </Text>
          </View>
        </View>

        {/* Section 3: Cookies & Tracking */}
        <View className="mb-4">
          <Text className="text-lg font-bold">3. Cookies & Tracking</Text>
          <Text className="text-gray-600 mt-2">
            We use cookies and tracking technologies to enhance user experience, analyze traffic, and understand how users interact with our platform. You can manage cookie preferences in your browser settings.
          </Text>
        </View>
      </View>
      <View className="h-100"></View>
    </ScrollView>
  );
};

export default About;