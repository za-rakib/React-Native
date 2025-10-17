import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const DateInput = ({ setDate, inputvalue }: any) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date: Date) => {
    setDate(date);
    hideDatePicker();
  };

  return (
    <View>
      <TouchableOpacity
        onPress={showDatePicker}
        className="w-full h-16 bg-white border border-gray-300 rounded-full px-5 flex-row items-center mb-4"
        style={{ justifyContent: 'flex-start' }}
      >
        <Ionicons name="calendar-outline" size={22} color="#a8a8a8" style={{ marginRight: 10 }} />
        <Text className="text-black">
          {inputvalue ? moment(inputvalue).format("YYYY-MM-DD") : 'Select a date'}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DateInput;
