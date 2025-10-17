import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const Choosephoto = () => {
    const { familyDraft } = useSelector((state: any) => state.family);
    console.log(familyDraft);

    const allAvatar:any = {
        animoji: require('@/assets/images/family/animoji.png'),
        animoji1: require('@/assets/images/family/animoji(1).png'),
        animoji2: require('@/assets/images/family/animoji(2).png'),
        animoji3: require('@/assets/images/family/animoji(3).png'),
        animoji4: require('@/assets/images/family/animoji(4).png'),
        animoji5: require('@/assets/images/family/animoji(5).png'),
        animoji6: require('@/assets/images/family/animoji(6).png'),
        animoji7: require('@/assets/images/family/animoji(7).png'),
        animoji8: require('@/assets/images/family/animoji(8).png'),
    }




    return (
        <View className='flex-1 w-full'>
            <View className='flex-1 justify-center items-center w-full'>
            {familyDraft?.profile_picture_url && <Image source={allAvatar[familyDraft?.profile_picture_url]} className='w-[200px] h-[200px] rounded-full' />}
                <Text className='text-[20px] text-center font-bold mt-5 mb-2'>Your family avatar</Text>
                <Text className='text-[13px] text-center'>Add a family photo to make your profile more personal.</Text>
            </View>

            <View className='p-4'>
                <Button bgColor={colors.primaryButton} onclick={() => { router.push('/family_profile/create/detailsinput') }} name="Save Profile" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Choosephoto;
