import { colors, toasts } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import Input from '@/components/Input/Input';
import BottomSheet from '@/components/Modals/BottomSheet';
import { createChild, getMyChild } from '@/redux/slices/childSlice';
import { Ionicons } from '@expo/vector-icons';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { router } from 'expo-router';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch, useSelector } from 'react-redux';


const Login = () => {
    const [fullName, setfullName] = useState(null);
    const [showmodal, setshowmodal] = useState(false);
    const [selectGender, setselectGender] = useState<any>(null);
    const [dateOfBirth, setdateOfBirth] = useState<any>(moment().format("YYYY-MM-DD"));
    const [selectedAvatar, setselectedAvatar] = useState("avatar1");
    const [openTimeDial, setopenTimeDial] = useState(false);
    const genders = [{ name: "Male" }, { name: "Female" }]
    const dispatch = useDispatch<any>()
    const { loading,childs } = useSelector((state: any) => state.childs)
    const [allerrors, setallerrors] = useState<any>([]);

    


    const handleConfirme = (date: any) => {

        setdateOfBirth(date);
    };

    // const showMode = () => {
    //     DateTimePickerAndroid.open({
    //         value: dateOfBirth,
    //         onChange,
    //         mode: 'date',
    //         is24Hour: true,
    //     });
    // };

    const avatar = [
        { name: "avatar1", image: require("@/assets/images/imoji/animoji.png") },
        { name: "avatar2", image: require("@/assets/images/imoji/animoji(1).png") },
        { name: "avatar3", image: require("@/assets/images/imoji/animoji(2).png") },
        { name: "avatar4", image: require("@/assets/images/imoji/animoji(3).png") },
        { name: "avatar5", image: require("@/assets/images/imoji/animoji(4).png") },
        { name: "avatar6", image: require("@/assets/images/imoji/animoji(5).png") },
        { name: "avatar7", image: require("@/assets/images/imoji/animoji(6).png") },
        { name: "avatar8", image: require("@/assets/images/imoji/animoji(7).png") },
    ]



    const handleSubmit = async () => {
        try {
            const data = {
                first_name: fullName,
                gender: selectGender[0],
                birth_date: moment(dateOfBirth).format("YYYY-MM-DD"),
                avatar_url: selectedAvatar,
                interests: [''],
                favorite_activities:[''],
                special_needs:[''],
                personality:{
                    "additionalProp1": {}
                },
                progress:0
            }
            const res = await dispatch(createChild(data)).unwrap();
            console.log(res);
            
        } catch (error: any) {
            console.log({
                first_name: fullName,
                gender: selectGender[0],
                birth_date: moment(dateOfBirth).format("YYYY-MM-DD"),
                avatar_url: selectedAvatar,
                interests: [''],
                favorite_activities:[''],
                special_needs:[''],
                personality:{
                    "additionalProp1": {}
                },
                progress:0
            });
            
            setallerrors(typeof error?.detail === 'string' ? [{ msg: error?.detail }] : error?.detail)
        }
    }


    return (<>
        <ScrollView className='flex-1 p-4'>
            <DateTimePickerModal
                isVisible={openTimeDial}
                mode="date"
                onConfirm={handleConfirme}
                onCancel={() => setopenTimeDial(false)}
            />

            <View className='mt-2'>
                <Text className='text-[16px] font-semibold mb-3'>Choose Avatar</Text>
                <View className='flex-wrap flex-row mb-8'>
                    {
                        avatar.map((item, index) => {
                            return <TouchableOpacity onPress={() => setselectedAvatar(item.name)} key={index} className={`flex-row my-4 items-center justify-between mb-3 w-1/4`}>
                                <Image source={item.image} className='border-[3px] rounded-full' style={{ borderColor: selectedAvatar == item.name ? colors.primaryButton : "transparent" }} />
                            </TouchableOpacity>
                        })
                    }
                </View>
                <View>
                    <Text className='text-[16px] font-semibold mb-3'>First Child’s Name</Text>
                    <Input label='Enter first name' setInput={setfullName} inputvalue={fullName} ispassword={false} />
                </View>


                <View className='mb-4'>
                    <Text className='text-[16px] font-semibold mb-3'>Date of Birth</Text>
                    <TouchableOpacity onPress={() => setopenTimeDial(true)}>
                        <Ionicons className='absolute left-5 top-[16] z-50' name="male-female" size={24} color={colors.gray600} />
                        <Text className={`text-[14px] flex-1 bg-white border-[1px] border-[#E9EAEB] p-5 rounded-full pl-14 ${dateOfBirth ? 'text-black' : 'text-gray-400'}`}>{moment(dateOfBirth).format('MM-DD-YYYY') ?? 'MM-DD-YYYY'}</Text>
                        <Ionicons className='absolute right-5 top-[16]' name="chevron-down" size={24} color={colors.gray600} />
                    </TouchableOpacity>
                </View>


                <View className='mb-4'>
                    <Text className='text-[16px] font-semibold mb-3'>Gender(Optional)</Text>
                    <TouchableOpacity onPress={() => setshowmodal(true)}>
                        <Ionicons className='absolute left-5 top-[16] z-50' name="calendar-outline" size={24} color={colors.gray600} />
                        <Text className={`text-[14px] flex-1 bg-white border-[1px] border-[#E9EAEB] p-5 rounded-full pl-14 ${selectGender ? 'text-black' : 'text-gray-400'}`}>{selectGender ?? 'Select type'}</Text>
                        <Ionicons className='absolute right-5 top-[16]' name="chevron-down" size={24} color={colors.gray600} />
                    </TouchableOpacity>
                </View>


            </View>

            {allerrors[0] &&
                allerrors.map((error: any, i: number) => {
                    return <View key={i} className='flex-row items-center'>
                        <Ionicons name="close-circle-outline" size={18} color="red" />
                        <Text className='text-[14px] flex-1 text-red-500'> {error.msg}</Text>
                    </View>
                })
            }

            <View className='h-[50px]'></View>
            <BottomSheet setvalue={setselectGender} selectedvalue={selectGender} setshowmodal={setshowmodal} showmodal={showmodal} data={genders} />



        </ScrollView>
        <View className='p-4'>
            {!(fullName && dateOfBirth) && <Button name='Save Child' textColor='#5358627c' bgColor={colors.disabledButton} onclick={() => toasts('Please enter data')} />}

            {(fullName && dateOfBirth) && <Button name='Save Child' loading={loading} textColor='#ffffff' bgColor={colors.primaryButton} onclick={handleSubmit} />}
        </View>
        {/* Country Modal */}
        {/* <CountryPicker withFlag={true} visible={showFlagModal} countryCode={'AF'} withFlagButton={false}  /> */}

    </>
    );
}

const styles = StyleSheet.create({})

export default Login;
