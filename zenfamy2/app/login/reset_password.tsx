import { colors, toasts } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import Input from '@/components/Input/Input';
import PopUpModal from '@/components/Modals/PopUpModal';
import { resetPassword } from '@/redux/slices/userSlices';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const [confirmpassword, setConfirmpassword] = useState('');
    const [password, setpassword] = useState('');
    const [showmodal, setshowmodal] = useState(false);
    const dispatch = useDispatch<any>()
    const [passworderror, setpassworderror] = useState<null | string>(null);
    const [allerrors, setallerrors] = useState<any>([]);
    const { loading } = useSelector((state: any) => state.users)

    useEffect(() => {

        if (confirmpassword !== password) {
            setpassworderror('Password does not match')
        } else {
            setpassworderror(null)
        }
    }, [password, confirmpassword])
    const controll = () => {
        setshowmodal(false)
        router.push('/login/all_set')
    }

    const handleSubmit = async () => {
        router.push("/login/all_set")
        try {
            
            const res = await dispatch(resetPassword({})).unwrap()
            if (res) {
                //router.push('/login/verifiy')
            }

        } catch (error: any) {
            setallerrors(typeof error?.detail === 'string' ? [{ msg: error?.detail }] : error?.detail)
            console.log(error, 1);

        }


    }

    return (<>
        <View className='flex-1 p-4'>
            <View>
                <Text className='text-[28px] font-semibold'>Reset Password</Text>
                <Text className='text-[14px] gray700 my-2'>Your password should be at least 6 characters long and include a mix of letters, numbers, and special characters like !$@%.</Text>
            </View>

            <View className='mt-8'>
                <View>
                    <Input label='New password' setInput={setConfirmpassword} inputvalue={confirmpassword} ispassword={true} />
                </View>
                <View>
                    <Input label='Retype your password' setInput={setpassword} inputvalue={password} ispassword={true} />
                </View>
                {passworderror && <Text className='text-[14px] text-red-600'>{passworderror}</Text>}


            </View>

            <View className='mt-12'>
                {!(confirmpassword && password) && <Button name='Continue' textColor='#535862' bgColor={colors.disabledButton} onclick={() => toasts('Please enter your New password')} />}

                {(confirmpassword && password) && <Button name='Continue' textColor='#ffffff' bgColor={colors.primaryButton} onclick={() => handleSubmit()} />}
            </View>

        </View>
        {showmodal && <PopUpModal controller={controll} title="Password update successfully!" description="Your password has been created" />}
    </>
    );
}

const styles = StyleSheet.create({})

export default Login;
