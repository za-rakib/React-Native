import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const PrivacyPolicyScreen = () => {
  return (
    <ScrollView className="p-4">
      {/* Header */}
      <View className=" rounded-b-lg">
        <Text className="text-xl font-bold">Privacy Policy</Text>
        <Text className="text-gray-600 mt-2">
          Welcome to Route Whisper! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our travel platform.
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
    </ScrollView>
  );
};

export default PrivacyPolicyScreen;