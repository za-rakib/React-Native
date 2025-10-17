import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Connect from "./svgs/Connect";
import Info from "./svgs/Info";
import Password from "./svgs/Password";
import Privacy from "./svgs/Privacy";
import { useSelector } from 'react-redux';

const settingsData = [
    {
        title: 'Account Management',
        items: [

            {
                icon: <Password />,
                label: 'Change your Password',
                route: "/profile/change_password",
                rightLabel: 'Premium'
            },
            {
                icon: <Privacy />,
                label: 'Two-Factor Authentication',
                rightLabel: 'Premium',
                route: "/profile/two_step",
            },
            {
                icon: <Connect />,
                label: 'Connected Devices',
                route: "./connected_device",
                rightLabel: 'Premium',
                
            },
            {
                icon: <Info />,
                label: 'Account Information',
                rightLabel: 'Premium',
            },
        ],
    },

];

const ProfileSettingsScreen = () => {
    const {users} = useSelector((state:any) => state.users)
    // User profile data
    const userProfile = {
        name: users?.first_name??'No Name',
        email: users?.email??'No email found',
        profilePicture: "https://cdn-icons-png.flaticon.com/512/149/149071.png", // Replace with actual profile picture URL
    };

    return (
        <View className="flex-1 p-4">
            <View className='absolute bottom-0 w-full'>
                <Image className='w-[108%]' resizeMode='contain' source={require("@/assets/images/profile/bottom.png")} />
            </View>
            {/* Header */}
            <View className="p-4 items-center justify-between rounded-b-lg">
                {/* Profile Picture */}
                <Image
                    source={{ uri: userProfile.profilePicture }}
                    style={{ width: 96, height: 96, borderRadius: 40 }}
                />
                {/* Name and Email */}
                <View className="mt-2">
                    <Text className="text-[29px] font-semibold text-center">{userProfile.name}</Text>
                    <Text className="text-gray-500 text-[16px] text-center my-1">{userProfile.email}</Text>
                </View>
                {/* Edit Profile Button */}
                <TouchableOpacity onPress={() => router.push("/profile/account_edit")} className="bg-teal-500 flex-row gap-2 mt-4 items-center px-4 py-2 rounded-full">
                    <Ionicons name="create-outline" size={24} color="white" />
                    <Text className="text-white font-bold">Edit Profile</Text>
                </TouchableOpacity>
            </View>

            {/* Settings List */}
            {settingsData.map((section, sectionIndex) => (<View key={sectionIndex}>

                <View
                    className="bg-white p-4 mt-4 rounded-lg"
                >

                    {section.items.map((item: any, itemIndex) => (
                        <TouchableOpacity
                            onPress={() => item.route && router.push(item?.route as any)}
                            key={itemIndex}
                            className={`flex-row items-center justify-between p-2 py-3 ${itemIndex !== section.items.length - 1
                                ? 'border-b border-gray-100'
                                : ''
                                }`}
                        >
                            <View className="flex-row items-center space-x-2">
                                {(
                                    item.icon
                                )}
                                <View className='ml-3'>
                                    <Text className="font-semibold text-[16px]">{item.label}</Text>
                                    {item.subtitle && (
                                        <Text className="text-gray-500">{item.subtitle}</Text>
                                    )}
                                </View>
                            </View>
                            {item.rightLabel && (
                                <Ionicons name="chevron-forward" size={22} color="gray" />
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            ))}


        </View>
    );
};

export default ProfileSettingsScreen;