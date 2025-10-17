import { colors, toasts } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import Input from '@/components/Input/Input';
import { clearError, forgotPassword } from '@/redux/slices/userSlices';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Forgotpassword = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const { loading } = useSelector((state: any) => state.users)
    const dispatch = useDispatch<any>()
    const [allerrors, setallerrors] = useState<any>([]);
    useEffect(() => {
        dispatch(clearError());
        setallerrors([]);
    }, [email, password])

    const handleSubmit = async () => {
        router.push("/login/verifiy")
        try {
            const res = await dispatch(forgotPassword({ email: email?.toLowerCase() })).unwrap()
            if (res) {
                console.log(res);
                toasts(res.message+" successfully");
            }
        } catch (error:any) {
            console.log(error);
            setallerrors(typeof error?.detail === 'string' ? [{ msg: error?.detail }] : error?.detail)
        }
    }
    return (
        <View className='flex-1 p-4'>
            <View>
                <Text className='text-[28px] font-semibold'>Forgot Password?</Text>
                <Text className='text-[14px] gray700 my-2'>It happens with everyone! Please provide your email to reset your password.</Text>
            </View>

            <View className='mt-8'>
                <View>
                    <Input label='Enter your email address' setInput={setemail} inputvalue={email} ispassword={false} />
                </View>

                {allerrors[0] &&
                    allerrors.map((error: any, i: number) => {
                        return <View key={i} className='flex-row items-center'>
                            <Ionicons name="close-circle-outline" size={18} color="red" />
                            <Text className='text-[14px] text-red-500'> {error.msg}</Text>
                        </View>
                    })
                }
                
            </View>

            <View className='mt-8'>
                {!(email)&&<Button name='Continue' textColor='#535862' bgColor={colors.disabledButton} onclick={() => toasts('Please enter your email address')} />}
                {(email)&&<Button name={loading ? 'Please wait...' : 'Continue'} textColor='#ffffff' bgColor={colors.primaryButton} onclick={handleSubmit} />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Forgotpassword;
