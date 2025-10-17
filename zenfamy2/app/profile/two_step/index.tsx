import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';



const Index = () => {
    const [selectType, setselectType] = useState<any>(null);
  return (
    <View className="flex-1 ">
      {/* Header */}
      <View className="p-4 rounded-b-lg mb-4 justify-center items-center">
        {/* Mascot Image */}
        <Image
          source={require('@/assets/images/profile/twostep.png')}
          style={{ marginBottom: 16 }}
        />
        {/* Title */}
        <Text className="text-xl font-bold text-center">Two-Factor Authentication</Text>
        <Text className="text-gray-600 mt-2 text-center">
          Secure your account with 2FA
        </Text>
      </View>

      {/* Options */}
      <View className="p-4 flex-1">
        {/* SMS Verification */}
        <TouchableOpacity
          onPress={() => setselectType('sms')}
          className={`bg-white p-4 mb-4 rounded-lg border ${selectType === 'sms' ? 'border-blue-500' : 'border-gray-200'} flex-row items-center`}
        >
          <Image
            source={require('../../../assets/images/profile/Button.png')}
            style={{ width: 32, height: 32 }}
            resizeMode="contain"
          />
          <View className='ml-2'>
            <Text className="text-lg font-semibold">SMS Verification</Text>
            <Text className="text-gray-600">
              Receive codes via text message
            </Text>
          </View>
        </TouchableOpacity>

        {/* Authenticator App */}
        <TouchableOpacity
          onPress={() => setselectType('app')}
          className={`bg-white p-4 mb-4 rounded-lg border ${selectType === 'app' ? 'border-blue-500' : 'border-gray-200'} flex-row items-center`}
        >
          <Image
            source={require('../../../assets/images/profile/Button(1).png')}
            style={{ width: 32, height: 32 }}
            resizeMode="contain"
          />
          <View className='ml-2'>
            <Text className="text-lg font-semibold">Authenticator App</Text>
            <Text className="text-gray-600">
              Use an authentication app to generate codes
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View className='p-4'>
        <Button onclick={() => {
            if (selectType==='sms') {
                router.push('./two_step/sms_verify')
            }else{
                router.push('./two_step/authenticator')
            }
        }} name="Next" bgColor={!selectType ? colors.disabledButton : colors.primaryButton} />
      </View>
    </View>
  );
};

export default Index;