import { colors, toasts } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import Input from '@/components/Input/Input';
import { clearError, createUser } from '@/redux/slices/userSlices';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const [email, setemail] = useState('');
    const [fullName, setfullName] = useState("");
    const [password, setpassword] = useState('');
    const [confirmPasWord, setconfirmPasWord] = useState("");
    const dispatch = useDispatch<any>()
    const [passworderror, setpassworderror] = useState<null | string>(null);
    const [allerrors, setallerrors] = useState<any>([]);
    const { loading } = useSelector((state: any) => state.users)
    useEffect(() => {
        dispatch(clearError());
    }, []);
    useEffect(() => {

        if (confirmPasWord !== password) {
            setpassworderror('Password does not match')
        } else {
            setpassworderror(null)
        }
    }, [password, confirmPasWord])

    const handleSubmit = async () => {
        console.log({ email, first_name: fullName, password });
        //router.push("/tutorial")
        try {
            if (!(email && password && confirmPasWord && fullName)) {
                toasts('Please enter information')
                return;
            }
            const res = await dispatch(createUser({ email, first_name: fullName, password, last_name: "" })).unwrap()
            if (res) {
                toasts('Success Check and Verify your email to login');
                router.push('/login/Login')
            }

        } catch (error: any) {
            setallerrors(typeof error?.detail === 'string' ? [{ msg: error?.detail }] : error?.detail)
            console.log(error, 1);

        }
    }
    return (<>
        <ScrollView className='flex-1 p-4'>
            <View>
                <Text className='text-[28px] font-semibold'>Let’s get Started </Text>
                <Text className='text-[14px] gray700 my-2'>Create your Zenfamy account today and start your calm 🌿 parenting journey.</Text>
            </View>

            <View className='mt-8'>
                <View>
                    <Input label='Full Name' setInput={setfullName} inputvalue={fullName} ispassword={false} />
                </View>
                <View>
                    <Input label='Email address' setInput={setemail} inputvalue={email} ispassword={false} />
                </View>
                <View>
                    <Input label='Create Password' setInput={setpassword} inputvalue={password} ispassword={true} />
                </View>
                <View>
                    <Input label='Confirm Password' setInput={setconfirmPasWord} inputvalue={confirmPasWord} ispassword={true} />
                </View>

                {passworderror && <Text className='text-[12px] text-red-500'>{passworderror}</Text>}
                {allerrors[0] &&
                    allerrors.map((error: any, i: number) => {
                        return <View key={i} className='flex-row items-center'>
                            <Ionicons name="close-circle-outline" size={18} color="red" />
                            <Text className='text-[14px] text-red-500'> {error.msg}</Text>
                        </View>
                    })
                }


            </View>

            <View className='mt-12'>
                {!(email && password && confirmPasWord && fullName) && <Button name='Next' textColor='#535862' bgColor={colors.disabledButton} onclick={() => toasts('Please enter information')} />}

                {(email && password && confirmPasWord && fullName) && <Button name={loading ? 'Please wait...' : 'Next'} textColor='#ffffff' bgColor={colors.primaryButton} onclick={() => handleSubmit()} />}
            </View>
        </ScrollView>
        <View className='p-14'>
            <Text className='text-[12px] gray700 text-center'>By using this application, you agree to our <Text className='estonBlue'>Terms</Text> and <Text className='estonBlue'>Privacy Policy</Text>.</Text>
        </View>
    </>
    );
}

const styles = StyleSheet.create({})

export default Login;
