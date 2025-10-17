import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import PopUpModal from '@/components/Modals/PopUpModal';
import { AntDesign, Entypo, Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const NavExpand = ({ setshowNav }: any) => {
    const [showModal, setshowModal] = useState(false);
    return (
        <BlurView intensity={30} experimentalBlurMethod='dimezisBlurView' tint='systemChromeMaterialDark' className='absolute flex-1 top-0 h-full z-[9999999999] justify-center items-center w-full'>
            <View>
                <View className='absolute -right-[170px] top-[100px] '>
                    <TouchableOpacity onPress={() => setshowNav(false)} className='estonBlue_bg  w-[64px] h-[64px] rounded-full flex-row items-center justify-center '>
                        <Entypo name="cross" size={24} color="white" />
                    </TouchableOpacity>

                </View>
                <View className='absolute -right-[170px] top-[-40px]'>
                    <TouchableOpacity onPress={() => {setshowNav(false);router.push('/recommendation/home')}} className='bg-white  w-[64px] h-[64px] rounded-full flex-row items-center justify-center'>
                        <AntDesign name="star" size={24} color="black" />
                    </TouchableOpacity>
                    <Text className=' text-white absolute left-[-23px] bottom-[-25px] w-[120px]'>Recommendation</Text>
                </View>
                <View className='absolute -right-[170px] top-[225px]'>
                    <TouchableOpacity onPress={() => setshowNav(true)} className='bg-[#F4978E]  w-[64px] h-[64px] rounded-full flex-row items-center justify-center'>
                        <Octicons name="sign-out" size={24} color="white" />
                    </TouchableOpacity>
                    <Text className=' text-white absolute left-[6px] bottom-[-25px] w-[50px]'>Log out</Text>
                </View>
                <View className='absolute -right-[60px] top-[165px]'>
                    <TouchableOpacity onPress={() => {setshowNav(false);router.push('/quiz/home')}} className='bg-white  w-[64px] h-[64px] rounded-full flex-row items-center justify-center'>
                        <MaterialIcons name="quiz" size={24} color="black" />
                    </TouchableOpacity>
                    <Text className=' text-white absolute left-[16px] bottom-[-25px] w-[50px]'>Quiz</Text>
                </View>
                <View className='absolute -right-[60px] top-[25px]'>
                    <TouchableOpacity onPress={() =>{setshowNav(false); router.push('/stories')}} className='bg-white  w-[64px] h-[64px] rounded-full flex-row items-center justify-center'>
                        <Ionicons name="create" size={24} color="black" />
                    </TouchableOpacity>
                    <Text className=' text-white absolute left-[0px] bottom-[-25px] w-[90px]'>New Story</Text>
                </View>
            </View>
            {showModal && <PopUpModal
                image={require('../../assets/images/home/logout.png')}
                title={'Are you sure you want to Log Out from This Device?'}
                style1={{ backgroundColor: "transparent" }}
                button1={<Button onclick={() => setshowNav(false)} name={'Yes, Log out '} textColor={'#ffffff'} bgColor={colors?.secondaryTextColor} loading={false} />}
                button2={<Button onclick={() => setshowModal(false)} name={'Cancel'} textColor={'#ffffff'} bgColor={colors?.primaryButton} loading={false} />}
                description={'You’re about to log out from this device. You’ll need to log in again to access your account from it.'} />}
        </BlurView>
    );
}

const styles = StyleSheet.create({})

export default NavExpand;
