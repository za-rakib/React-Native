import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, View } from 'react-native';

const Input = ({ setInput, inputvalue, label, ispassword }: any) => {
    const [thefocuedInputs, setthefocuedInputs] = useState(false);
    const [showpassword, setshowpassword] = useState(true);
    return (
        <View className="relative">

            <TextInput
                className={`w-full h-16 bg-white text-black border border-[#a5a5a53f]  rounded-full py-4 px-5 mb-4`}
                placeholder={label ?? "Enter Value"}
                placeholderTextColor="#aaa"
                secureTextEntry={ispassword && showpassword}
                onFocus={() => setthefocuedInputs(true)}
                onBlur={() => setthefocuedInputs(false)}
                value={inputvalue}
                onChangeText={setInput}
            />
            {/* {(inputvalue || thefocuedInputs) && <Text className="text-[10px] absolute top-[8px] left-5 primaryColor">{label ?? "Enter Value"}</Text>} */}

            {ispassword&&<TouchableOpacity onPress={() => setshowpassword((prev) => !prev)} className='absolute right-5 top-[16]'>
                {showpassword ? <Feather name="eye-off" size={22} color="#979797" /> : <Feather name="eye" size={22} color="#979797" />}
            </TouchableOpacity>}
        </View>
    );
}

const styles = StyleSheet.create({})

export default Input;
