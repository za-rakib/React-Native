import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const SurveyQuestionScreen = () => {
  const questionData = {
    totalQuestions: 2,
    questions: [
      {
        id: 1,
        question: "How satisfied are you with your current work-life balance?",
        // image: require('@/assets/images/profile/bottom1.png'),
        options: [
          { label: "Satisfied", icon: "😊" },
          { label: "Strongly Satisfied", icon: "🤩" },
          { label: "Neutral", icon: "😶" },
          { label: "Dissatisfied", icon: "😨" },
          { label: "Strongly Dissatisfied", icon: "😡" },
        ],
      },
      {
        id: 2,
        question: "How satisfied are you with your current work environment?",
        // image: require('@/assets/images/profile/bottom2.png'),
        options: [
          { label: "Satisfied", icon: "😊" },
          { label: "Strongly Satisfied", icon: "😍" },
          { label: "Neutral", icon: "😐" },
          { label: "Dissatisfied", icon: "😟" },
          { label: "Strongly Dissatisfied", icon: "😠" },
        ],
      },
    ],
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const currentQuestion = questionData.questions[currentQuestionIndex];
  
  const [selectedAgerange, setselectedAgerange] = useState();
  const [selectedoption, setselectedoption] = useState();

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option?.label);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questionData.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
    } else {
      router.push('/quiz/result')
      console.log("Survey completed");
      // Handle submission or navigation here
    }
  };
  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedOption(null);
    } else {
      console.log("Survey completed");
      // Handle submission or navigation here
    }
  };

  return (
    <>
      <View className="flex-1 p-4 pb-24">
        {/* Progress Header */}
        <View className='flex-row items-center justify-between gap-1 mb-2'>
          {questionData.questions.map((_, index) => (
            <View
              key={index}
              className='h-[6px] flex-1 rounded-full'
              style={{ backgroundColor: index <= currentQuestionIndex ? colors.primaryTextColor : '#fff' }}
            />
          ))}
          <Text className="text-base ml-2">{currentQuestionIndex + 1}/{questionData.totalQuestions}</Text>
        </View>

        {/* Question Number and Text */}
        <View className="rounded-b-lg my-4">
          <Text className="text-[32px] font-bold">0{currentQuestion.id}</Text>
          <Text className="text-gray-900 font-semibold text-[20px] mt-2">{currentQuestion.question}</Text>
        </View>

        {/* Options */}
        <View className="mb-4">
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOptionSelect(option)}
              className="flex-row items-center mb-2 p-[14px] bg-white rounded-full"
            >
              <View className="ml-2 flex-1 flex-row items-center">
                <Text className='text-2xl'>{option.icon}</Text>
                <Text className="ml-2 text-gray-600">{option.label}</Text>
              </View>
              <FontAwesome
                name={selectedOption === option.label ? 'check-circle' : 'circle-o'}
                size={25}
                color={selectedOption === option.label ? colors.primaryButton : '#eee'}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Encouragement */}
        <Text className="text-sm estonBlue mb-4 text-center">
          Take your time - you're doing great!
        </Text>

       
      </View>

      {/* Bottom Image */}
      <Image
        source={require("@/assets/images/profile/bottom1.png")} // Replace with actual mascot image URL
        style={{ width: '100%', position: "absolute", bottom: 0, right: 0 }}
      />

      {/* Next Button */}
      {currentQuestionIndex < questionData.questions.length - 1 &&<View className='p-4 absolute bottom-0 left-0 right-0 flex-row justify-between'>
        {currentQuestionIndex > 0&&<View className='w-[48%]'>
          <Button
            name="Previous"
            textColor="#00adc0"
            bgColor={'#ffffff'}
            onclick={handlePrev}
          />
        </View>}
        <View className={`${currentQuestionIndex === 0 ? 'w-[100%]' : 'w-[48%]'}`}>
          <Button
            name="Next"
            textColor="#fff"
            bgColor={!selectedOption ? '#BCE6EA' : colors.primaryButton}
            onclick={handleNext}
          />
        </View>
      </View>}
      {!(currentQuestionIndex < questionData.questions.length - 1) &&<View className='p-4 absolute bottom-0 left-0 right-0 flex-row justify-between'>
        
          <Button
            name="Submit Answer"
            textColor="#fff"
            bgColor={!selectedOption ? '#BCE6EA' : colors.primaryButton}
            onclick={handleNext}
          />
     
      </View>}
    </>
  );
};

export default SurveyQuestionScreen;
