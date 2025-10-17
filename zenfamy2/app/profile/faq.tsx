import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';


const HelpCenterScreen = () => {
  // Data for FAQ questions and answers
  const faqData = [
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on the 'Forgot Password' link on the login screen. You'll receive an email with instructions to create a new password.",
    },
    {
      question: "How to update profile information?",
      answer:
        "Log in to your account, navigate to the 'Profile' section, and edit your details. Save changes when done.",
    },
    {
      question: "Can I delete my account?",
      answer:
        "Yes, you can delete your account. Go to the 'Account Settings' and find the 'Delete Account' option. Follow the prompts to confirm deletion.",
    },
    {
      question: "How to add a child profile?",
      answer:
        "In the app, go to 'Children Profiles', tap 'Add Child', and fill in the required details. Save the profile to add it.",
    },
    {
      question: "Managing screen time limits",
      answer:
        "Go to 'Family Profile', select a child's profile, and set screen time limits under 'Screen Time'. Apply the settings.",
    },
    {
      question: "Customizing content filters",
      answer:
        "Access 'Content Filters' in the app settings, choose the appropriate age group, and apply the filters.",
    },
    {
      question: "Billing cycle information",
      answer:
        "Your billing cycle is monthly. You can view detailed billing information in the 'Subscription' section.",
    },
    {
      question: "How to change plan?",
      answer:
        "Go to 'Subscription', select 'Change Plan', choose a new plan, and follow the prompts to switch.",
    },
    {
      question: "Cancel subscription",
      answer:
        "In the 'Subscription' section, tap 'Cancel Subscription' and follow the instructions to cancel your plan.",
    },
    {
      question: "Accessing offline content",
      answer:
        "Download content in the app while connected to the internet. Once downloaded, you can access it offline.",
    },
    {
      question: "Device compatibility",
      answer:
        "The app is compatible with iOS devices running iOS 14+ and Android devices running Android 8+. Check system requirements.",
    },
    {
      question: "Parental controls overview",
      answer:
        "Parental controls allow you to manage screen time, customize content filters, and monitor activity. Set them in the 'Family Profile' section.",
    },
  ];

  // State to track expanded questions
  const [expandedQuestions, setExpandedQuestions] = useState<any>({});

  // Function to toggle the expansion of a question
  const toggleQuestion = (question:any) => {
    setExpandedQuestions((prev:any) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  return (
    <ScrollView className="flex-1 p-4">
      {/* Header */}
      <Text className="text-[16px] font-semibold mb-4">Account</Text>

      {/* FAQ List */}
      {faqData.map((item:any, index) => (
        <View key={index} className="bg-white rounded-lg mb-4 p-4">
          {/* Question */}
          <TouchableOpacity
            onPress={() => toggleQuestion(item.question)}
            className="flex-row justify-between items-center"
          >
            <Text className="text-lg font-semibold">{item.question}</Text>
            <Ionicons
              name={expandedQuestions[item.question] ? "chevron-up" : "chevron-down"}
              size={16}
              color="gray"
            />
          </TouchableOpacity>

          {/* Answer (conditionally rendered) */}
          {expandedQuestions[item.question] && (
            <Text className="mt-2 text-gray-600">{item.answer}</Text>
          )}
        </View>
      ))}

      <View className='h-[50px]'></View>
    </ScrollView>
  );
};

export default HelpCenterScreen;