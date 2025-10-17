import { colors, toasts } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import Input from '@/components/Input/Input';
import { clearError, getUsers, loginUser } from '@/redux/slices/userSlices';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import React, { use, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
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
        try {
            const res = await dispatch(loginUser({ email: email?.toLowerCase(), password })).unwrap()
            if (res?.access_token) {
                //console.log(res);
                AsyncStorage.setItem('access_token', res?.access_token);
                toasts('Login successfully');
                const me = await dispatch(getUsers()).unwrap();
                //console.log(me);
                if(!me?.active_tokens) return toasts("Failed to login");
                // AsyncStorage.setItem('user', me);
                router.push('/home');
            }
        } catch (error:any) {
            console.log(error);
            setallerrors(typeof error?.detail === 'string' ? [{ msg: error?.detail }] : error?.detail)
        }
    }
    return (
        <View className='flex-1 p-4'>
            <View>
                <Text className='text-[28px] font-semibold'>Glad to see you again ✋🏻</Text>
                <Text className='text-[14px] gray700 my-2'>Log in to access your saved preferences, continue where you stopped.</Text>
            </View>

            <View className='mt-8'>
                <View>
                    <Input label='Enter your email address' setInput={setemail} inputvalue={email} ispassword={false} />
                </View>
                <View>
                    <Input label='Enter your Password' setInput={setpassword} inputvalue={password} ispassword={true} />
                </View>
                {allerrors[0] &&
                    allerrors.map((error: any, i: number) => {
                        return <View key={i} className='flex-row items-center'>
                            <Ionicons name="close-circle-outline" size={18} color="red" />
                            <Text className='text-[14px] text-red-500'> {error.msg}</Text>
                        </View>
                    })
                }
                <TouchableOpacity onPress={() => router.push('/login/Forgotpassword')} className='flex-row items-center justify-end'>
                    <Text className='text-[14px] my-2 secondaryTextColor text-right'>Forgot Password?</Text>
                </TouchableOpacity>

            </View>

            <View className='mt-12'>
                {!(email && password) && <Button name='Continue' textColor='#535862' bgColor={colors.disabledButton} onclick={() => toasts('Please enter email and password')} />}

                {(email && password) && <Button name={loading ? 'Loading...' : 'Continue'} textColor='#ffffff' bgColor={colors.primaryButton} onclick={handleSubmit} />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Login;
