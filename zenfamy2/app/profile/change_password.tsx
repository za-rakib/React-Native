import { colors, toasts } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import Input from '@/components/Input/Input';
import PopUpModal from '@/components/Modals/PopUpModal';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, View } from 'react-native';

const Login = () => {
    const [confirmpassword, setConfirmpassword] = useState('');
    const [password, setpassword] = useState('');
    const [currentpassword, setcurrentpassword] = useState('');
    const [showmodal, setshowmodal] = useState(false);
    const controll = () => { 
        setshowmodal(false)
        router.push('/login/all_set')
     }

    const handleSubmit = ()=>{
        Keyboard.dismiss();
        setshowmodal(true)
        
    }

    return (<>
        <View className='flex-1 p-4'>
            <View>
                <Text className='text-[28px] font-semibold'>Change Password</Text>
                <Text className='text-[14px] gray700 my-2'>Your password should be at least 6 characters long and include a mix of letters, numbers, and special characters like !$@%.</Text>
            </View>

            <View className='mt-8'>
                <View>
                    <Input label='Current Password' setInput={setcurrentpassword} inputvalue={currentpassword} ispassword={true} />
                </View>
                <View>
                    <Input label='New password' setInput={setConfirmpassword} inputvalue={confirmpassword} ispassword={true} />
                </View>
                <View>
                    <Input label='Retype your password' setInput={setpassword} inputvalue={password} ispassword={true} />
                </View>


            </View>

            <View className='mt-12'>
                {!(confirmpassword && password) && <Button name='Continue' textColor='#535862' bgColor={colors.disabledButton} onclick={() => toasts('Please enter your New password')} />}

                {(confirmpassword && password) && <Button name='Continue' textColor='#ffffff' bgColor={colors.primaryButton} onclick={() => handleSubmit()} />}
            </View>

        </View>
        {showmodal&&<PopUpModal controller={controll} title="Password update successfully!" description="Your password has been created" />}
    </>
    );
}

const styles = StyleSheet.create({})

export default Login;
