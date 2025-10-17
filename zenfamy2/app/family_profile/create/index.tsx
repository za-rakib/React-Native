import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { setFamilyDraft } from '@/redux/slices/familySlice';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
    const [selecteAvtar, setselecteAvtar] = useState<any>();
    const [avatarname, setavatarname] = useState("");
    const dispatch = useDispatch();
    const {familyDraft} = useSelector((state: any) => state.family);

    const allAvatar = [
        {
            id: 1,
            name: 'animoji',
            image: require('@/assets/images/family/animoji.png'),
        },
        {
            id: 2,
            name: 'animoji1',
            image: require('@/assets/images/family/animoji(1).png'),
        },
        {
            id: 3,
            name: 'animoji2',
            image: require('@/assets/images/family/animoji(2).png'),
        },
        {
            id: 4,
            name: 'animoji3',
            image: require('@/assets/images/family/animoji(3).png'),
        },
        {
            id: 5,
            name: 'animoji4',
            image: require('@/assets/images/family/animoji(4).png'),
        },
        {
            id: 6,
            name: 'animoji5',
            image: require('@/assets/images/family/animoji(5).png'),
        },
        {
            id: 7,
            name: 'animoji6',
            image: require('@/assets/images/family/animoji(6).png'),
        },
        {
            id: 8,
            name: 'animoji7',
            image: require('@/assets/images/family/animoji(7).png'),
        },
        {
            id: 9,
            name: 'animoji8',
            image: require('@/assets/images/family/animoji(8).png'),
        }
    ]

    const avatar = async () => {
        const data = dispatch(setFamilyDraft({ profile_picture_url: avatarname }));
       
        router.push('./create/choosephoto')
    }
    return (<View className='flex-1'>
        <View className='p-4 justify-center flex-1'>
            <View>
                <Text className='font-semibold text-[16px]'>Choose Avatar</Text>

                <View className='flex-row flex-wrap justify-between mt-4'>
                    {
                        allAvatar.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => { setselecteAvtar(item.id);setavatarname(item.name) }} className='mb-5'>
                                <Image className='h-[98px] w-[98px] rounded-full' style={{ borderWidth: selecteAvtar == item.id ? 3 : 0, borderColor: selecteAvtar == item.id ? colors.primaryButton : 'transparent' }} source={item.image} />
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        </View>
        <View className='p-4'>
            <Button name="Choose Avatar" textColor={'#fff'} onclick={avatar} bgColor={selecteAvtar ? colors.primaryButton : '#dafdfb'} />
        </View>
    </View>
    );
}

const styles = StyleSheet.create({})

export default Index;
