import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Apple from "./svgs/Apple";
import Chrome from "./svgs/Chrome";
import Windows from "./svgs/Windows";
import Button from '@/components/Buttons/Button';
import { colors, toasts } from '@/assets/lib';
import PopUpModal from '@/components/Modals/PopUpModal';


const ConnectedDevicesScreen = () => {
    const [showModal, setshowModal] = useState(false);
    const controller = () => setshowModal(false);
    // Sample data for connected devices
    const devices = [
        {
            device: "iPhone 14 Pro",
            platform: "iOS",
            location: "New York, USA",
            status: "Active now",
            icon: <Apple />
        },
        {
            device: "MacBook Pro",
            platform: "Chrome Browser",
            location: "London, UK",
            status: " 2 hours ago",
            icon: <Chrome />
        },
        {
            device: "iPad Air",
            platform: "iPadOS",
            location: "Paris, France",
            status: "Yesterday",
            icon: <Apple />
        },
        {
            device: "Windows PC",
            platform: "Firefox Browser",
            location: "Berlin, Germany",
            status: " 3 days ago",
            icon: <Windows />
        },
    ];

    return (<>
        <View className="flex-1 p-4">
            {/* Header */}
            <View className=" rounded-b-lg mb-8">
                <Text className="text-[23px] font-bold">Connected Devices</Text>
                <Text className="text-gray-600 text-[16px] mt-2">
                    These are all the devices currently logged into your account
                </Text>
            </View>

            {/* Device List */}
            {devices.map((device, index) => (
                <View key={index} className="bg-white p-4 mb-4 rounded-xl border border-gray-200">
                    {/* Device Info */}
                    <View className="flex-row justify-between">
                        {/* Device Name and Platform */}
                        <View className="flex-1 flex-row gap-5">
                            {device.icon}
                            <View>
                                <Text className="text-lg font-semibold">{device.device}</Text>
                                <Text className="text-gray-600 mt-2">
                                    {device.platform} • {device.location}
                                </Text>
                                <Text className=" mt-2">
                                    {device.status !== "Active now" && <Text>Last active: </Text>}
                                    <Text className='estonBlue pl-2'>{device.status}</Text>
                                </Text>
                            </View>
                        </View>
                        {/* Log Out Button */}
                        <View>
                            <TouchableOpacity className="secondaryBgColor px-4 py-3 rounded-full">
                                <Text className="text-white">Log Out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Last Active Status */}

                </View>
            ))}
        </View>
        <View className='p-4'>
            <Button bgColor={colors.secondaryTextColor} name='Log Out of all devices' onclick={() => setshowModal(true)} />
        </View>
        {showModal&&<PopUpModal
            button1={<Button bgColor={colors.primaryButton} name='No, Keep It' onclick={setshowModal} />}
            button2={<Button bgColor={colors.secondaryTextColor}
            name='Yes, Log out from this device'
            onclick={setshowModal} />}
            controller={controller}
            image={require('../../assets/images/home/logout.png')}
            title={'Are you sure you want to Log Out from This Device?'}
            description={'You’re about to log out from this device. You’ll need to log in again to access your account from it.'} />}
    </>
    );
};

export default ConnectedDevicesScreen;