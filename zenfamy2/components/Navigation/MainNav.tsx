import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import NavExpand from './NavExpand';

const MainNav = ({screen}:any) => {
    const [showNav, setshowNav] = useState(false);
    
    return (<>
        <View className='absolute bottom-0 z-[99999] justify-center items-center p-4 w-full'>
            <ImageBackground source={require('../../assets/images/home/navbg.png')} resizeMode='stretch' className='flex-row items-center justify-between px-1' style={{ height: 80, width: 322, }}>

                <TouchableOpacity onPress={()=>router.push('/home')} className={` ${screen == 'home' ? 'bg-black' : 'bg-white'} w-[74px] h-[74px] rounded-full flex-row items-center justify-center`}>
                <Ionicons name="home-outline" size={24} color={screen == 'home' ? "#fff" : "#000"} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>router.push('./emotional')} className={` ${screen == 'emotional' ? 'bg-black' : 'bg-white'} w-[74px] h-[74px] rounded-full flex-row items-center justify-center`}>
                    <Ionicons name="book-outline" size={24} color={screen == 'emotional' ? "#fff" : "#000"}  />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>router.push('/profile')} className={` ${screen == 'profile' ? 'bg-black' : 'bg-white'} w-[74px] h-[74px] rounded-full flex-row items-center justify-center`}>
                    <Ionicons name={"settings-outline"} size={24} color={screen == 'profile' ? "#fff" : "#000"} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setshowNav(true)} className='bg-white w-[74px] h-[74px] rounded-full flex-row items-center justify-center'>
                    <Ionicons name="add" size={24} color="black" />
                </TouchableOpacity>
            </ImageBackground>
        </View>
        {showNav&&<NavExpand setshowNav={setshowNav}/>}
    </>
    );
}

const styles = StyleSheet.create({})

export default MainNav;
