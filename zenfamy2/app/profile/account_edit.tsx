import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import Input from '@/components/Input/Input';
import DateInput from '@/components/Input/Inputdate';
import InputIcon from '@/components/Input/InputIcon';
import LocationInput from '@/components/Input/LocationInput';
import CountryModal from '@/components/Modals/CountryModal';
import { updateUser } from '@/redux/slices/userSlices';
import { AntDesign, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';



const ProfileSettingsScreen = () => {
    const [fullName, setfullName] = useState('');
    const [dateofBirth, setdateofBirth] = useState('');
    const [country, setcountry] = useState('');
    const [email, setemail] = useState('');
    const [showDateModal, setshowDateModal] = useState(false);
    const { users } = useSelector((state: any) => state.users)
    const [showCountryModal, setshowCountryModal] = useState(false);
    const dispatch = useDispatch<any>()
    const { loading } = useSelector((state: any) => state.users)
    const [allerrors, setallerrors] = useState<any>([]);

    useEffect(() => {
        if (users?.first_name) setfullName(users?.first_name)
        if (users?.birth_date) setdateofBirth(users?.birth_date)
        if (users?.country) setcountry(users?.country)
        if (users?.email) setemail(users?.email)
    }, []);

    const handleSave = async () => {
        try {
            setallerrors([])
            const data = {
                first_name: fullName,
                birth_date: moment(dateofBirth).format("YYYY-MM-DD"),
                country: country,
                email: email,
                last_name: "",
                onboarding_step: 0,
                gender: "undisclosed",
                preferred_language: "fr",
                role: "parent"
            };
            console.log(moment(dateofBirth).format("YYYY-MM-DD"));

            const res = await dispatch(updateUser(data)).unwrap();
            console.log(res);
        } catch (error: any) {
            console.log(error);
            setallerrors(typeof error?.detail === 'string' ? [{ msg: error?.detail }] : error?.detail)

        }
    };

    // User profile data
    const userProfile = {
        name: users?.first_name ?? 'No Name',
        email: users?.email ?? 'No Name',
        profilePicture: "https://cdn-icons-png.flaticon.com/512/149/149071.png", // Replace with actual profile picture URL
    };

    const settingsData = [
        {
            title: 'Account Management',
            items: [

                {
                    icon: false,
                    label: 'Enter your name',
                    route: "/profile/childrens",
                    setInput: setfullName,
                    inputvalue: fullName,
                    type: 'text',
                    title: "Full Name"
                },
                {
                    icon: false,
                    label: 'Select Date of Birth',
                    type: 'date',
                    title: "Date of Birth",
                    setInput: setdateofBirth,
                    inputvalue: dateofBirth ? moment(dateofBirth).format("YYYY-MM-DD") : moment(new Date()).format("YYYY-MM-DD"),
                },
                {
                    icon: false,
                    label: 'Select Country',
                    route: "/family_profile",
                    type: 'location',
                    setInput: setcountry,
                    inputvalue: country,
                    title: "Country Location"
                },

                {
                    icon: <SimpleLineIcons name="envelope-open" size={24} color="#a8a8a8" />,
                    label: 'Enter email',
                    type: 'inputIcon',
                    title: "Email",
                    setInput: setemail,
                    inputvalue: email,
                },
            ],
        },

    ];

    return (
        <ScrollView className="flex-1 p-4 w-full">

            {/* Header */}
            <View className=" items-center justify-between mb-4 w-full">
                {/* Profile Picture */}
                <View className='relative'>
                    <Image
                        source={{ uri: userProfile.profilePicture }}
                        style={{ width: 96, height: 96, borderRadius: 40 }}
                    />
                    <TouchableOpacity className='estonBlue_bg w-[32px] h-[32px] rounded-full absolute bottom-0 right-0 flex-row items-center justify-center border-2 border-white'>
                        <AntDesign name="edit" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                {/* Name and Email */}
                <View className="mt-2">
                    <Text className="text-[29px] font-semibold text-center">{userProfile.name}</Text>
                    <Text className="text-gray-500 text-[16px] text-center my-1">{userProfile.email}</Text>
                </View>
                {/* Edit Profile Button */}

                {/* Settings List */}
                {settingsData.map((section, sectionIndex) => (<View className='w-full' key={sectionIndex}>

                    <View
                        className="bg-white p-6 mt-4 rounded-lg w-full"
                    >

                        {section.items.map((item: any, itemIndex) => (
                            <View key={itemIndex} className="w-full">
                                <Text className='tex-[16px] font-semibold'>{item.title}</Text>
                                <View className='mt-3 w-full'>
                                    {item?.type === "text" && <Input label={item?.label} setInput={item.setInput} inputvalue={item.inputvalue} ispassword={false} />}

                                    {item?.type === "location" && <TouchableOpacity onPress={() => setshowCountryModal(true)} className='flex-row items-center gap-2 relative w-full border border-gray-200 px-4 mb-4 py-4 rounded-full'>
                                        <Image source={require('@/assets/images/profile/location.png')} className='w-[24px] h-[24px]' />
                                        <Text>{country ? country : item?.label}</Text>
                                    </TouchableOpacity>}

                                    {item?.type === "date" && <DateInput inputvalue={item.inputvalue} showDateModal={showDateModal} setDate={item.setInput} setshowDateModal={setshowDateModal} />}


                                    {item?.type === "inputIcon" && <InputIcon icon={item?.icon} label={item?.label} inputvalue={item.inputvalue} ispassword={false} />}
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
                ))}



            </View>
            {allerrors[0] &&
                allerrors.map((error: any, i: number) => {
                    return <View key={i} className='flex-row items-center'>
                        <Ionicons name="close-circle-outline" size={18} color="red" />
                        <Text className='text-[14px] flex-1 text-red-500'> {error.msg}</Text>
                    </View>
                })
            }
            <CountryModal setvalue={setcountry} selectedvalue={country} setshowmodal={setshowCountryModal} showmodal={showCountryModal} />



            <View className='mt-8'>
                <Button name={"Save"} loading={loading} bgColor={colors.primaryButton} onclick={handleSave} />
            </View>

            <View className='h-[50px]'></View>
        </ScrollView>
    );
};

export default ProfileSettingsScreen;