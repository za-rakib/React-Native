import React from 'react';
import { View, Text, ScrollView } from 'react-native';


const TermsOfServiceScreen = () => {
  return (
    <ScrollView className="p-4">
      {/* Header */}
      <View className="rounded-b-lg">
        <Text className="text-xl font-bold">Terms of Service</Text>
        <Text className="text-gray-600 mt-2">
          By accessing or using our services, you agree to be bound by these terms.
        </Text>
      </View>

      {/* Content */}
      <View className="p-4 bg-white rounded-xl mt-5">
        {/* Section 1: Acceptance of Terms */}
        <View className="mb-4">
          <Text className="text-lg font-bold">1. Acceptance of Terms</Text>
          <Text className="text-gray-600 mt-2">
            By accessing or using our services, you agree to be bound by these terms. If you do not agree to these terms, please do not use our platform.
          </Text>
        </View>

        {/* Section 2: Services Overview */}
        <View className="mb-4">
          <Text className="text-lg font-bold">2. Services Overview</Text>
          <Text className="text-gray-600 mt-2">
            RouteWhisper is an AI-powered travel assistant that helps users plan trips, discover destinations, book experiences, and receive real-time travel guidance. While we aim for accuracy, we cannot guarantee the accuracy, deals, or recommendations provided by third-party services.
          </Text>
        </View>

        {/* Section 3: User Responsibilities */}
        <View className="mb-4">
          <Text className="text-lg font-bold">3. User Responsibilities</Text>
          <Text className="text-gray-600 mt-2">
            Provide accurate and truthful information. Use the platform only for lawful purposes. Do not misuse the AI assistant or attempt to breach any security system.
          </Text>
        </View>

        {/* Section 4: Third-Party Services */}
        <View className="mb-4">
          <Text className="text-lg font-bold">4. Third-Party Services</Text>
          <Text className="text-gray-600 mt-2">
            We may link to or use third-party services (e.g., airlines, hotels, your own). We are not responsible for their content, privacy, or reliability. You use these services at your own risk.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TermsOfServiceScreen;