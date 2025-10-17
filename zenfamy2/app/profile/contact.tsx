import { colors, toasts } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import Input from '@/components/Input/Input';
import { contactpost } from '@/redux/slices/notificationSlice';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';


const ContactForm = () => {
    // State management for form inputs
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch<any>()
    const [laoding, setlaoding] = useState(false);

    // Function to handle form submission
    const handleSubmit = async () => {
        
        try {
            setlaoding(true)
            const res = await dispatch(contactpost({ name:email.split("@")[0],subject, message, email })).unwrap()
            toasts("Message sent successfully")
            setEmail('')
            setSubject('')
            setMessage('')
            setlaoding(false)
        } catch (error) {
        setlaoding(false)
            toasts("Failed to send message")
        }
        // You can add API call or further logic here
    };

    return (<View className="flex-1 ">
        <View className="flex-1 p-4">
            {/* Subject Input */}
            <View className="mb-4 mt-8">
                <Text className="text-[16px] font-semibold mb-3">Subject</Text>
                <Input label='Enter Subject' setInput={setSubject} inputvalue={subject} ispassword={false} />
            </View>

            {/* Message Input */}
            <View className="mb-4">

                <Text className="text-[16px] font-semibold mb-3">Your Message</Text>

                <TextInput
                    placeholder="Type your message here..."
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                    multiline
                    textAlignVertical='top'
                    className="mt-2 px-4 py-3 rounded-xl border bg-white border-gray-300 focus:border-blue-500 focus:outline-none"
                    style={{ height: 132 }}
                />
                <Text className="text-right text-sm text-gray-500 mt-2">
                    {message.length}/500 characters
                </Text>
            </View>

            {/* Email Input (Optional) */}
            <View className="mb-4">

                <Text className="text-[16px] font-semibold mb-3">Your Email (optional)</Text>
                <Input label='Enter Subject' setInput={setEmail} inputvalue={email} ispassword={false} />
            </View>

            {/* Submit Button */}


        </View>

        <View className='p-4'>
            <Button name='Send Message' loading={laoding} bgColor={colors.primaryButton} onclick={() => handleSubmit()} />
        </View>
    </View>
    );
};

export default ContactForm;