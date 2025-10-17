import { colors, toasts } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import Input from '@/components/Input/Input';
import BottomSheet from '@/components/Modals/BottomSheet';
import CountryModal from '@/components/Modals/CountryModal';
import { setFamilyDraft } from '@/redux/slices/familySlice';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';


const theme = [
    { name: "Adventure", icon: require('@/assets/images/stories/pokemon.png') },
    { name: "Humorous", icon: require('@/assets/images/stories/stars.png') },
    { name: "Poetic", icon: require('@/assets/images/stories/crown.png') },
    { name: "Fantasy", icon: require('@/assets/images/stories/sword.png') },
    { name: "Educational", icon: require('@/assets/images/stories/paint-board.png') },
    { name: "Emotional", icon: require('@/assets/images/stories/game.png') },
    { name: "Mystery", icon: require('@/assets/images/stories/natural-food.png') },
    { name: "Realistic", icon: require('@/assets/images/stories/rocket.png') },
]
const goals = [
    { name: "Courage", icon: require('@/assets/images/stories/pokemon.png') },
    { name: "Friendship", icon: require('@/assets/images/stories/stars.png') },
    { name: "Respect", icon: require('@/assets/images/stories/crown.png') },
    { name: "Generosity", icon: require('@/assets/images/stories/sword.png') },
    { name: "Perseverance", icon: require('@/assets/images/stories/paint-board.png') },
    { name: "Empathy", icon: require('@/assets/images/stories/game.png') },
    { name: "Creativity", icon: require('@/assets/images/stories/natural-food.png') },
    { name: "Patience", icon: require('@/assets/images/stories/rocket.png') },
    { name: "Responsibility", icon: require('@/assets/images/stories/rocket.png') },
]
const interests = [
    { name: "Animals", icon: require('@/assets/images/stories/pokemon.png') },
    { name: "Magic", icon: require('@/assets/images/stories/stars.png') },
    { name: "Princesses", icon: require('@/assets/images/stories/crown.png') },
    { name: "Knights", icon: require('@/assets/images/stories/sword.png') },
    { name: "Dinosaurs", icon: require('@/assets/images/stories/paint-board.png') },
    { name: "Robots", icon: require('@/assets/images/stories/game.png') },
    { name: "Forest", icon: require('@/assets/images/stories/natural-food.png') },
    { name: "Space", icon: require('@/assets/images/stories/rocket.png') },
    { name: "Ocean", icon: require('@/assets/images/stories/beach.png') },
    { name: "Sports", icon: require('@/assets/images/stories/baseball.png') },
    { name: "Friendship", icon: require('@/assets/images/stories/favourite.png') },
    { name: "School", icon: require('@/assets/images/stories/school.png') },
    { name: "Family", icon: require('@/assets/images/stories/user-group.png') },
    { name: "Nature", icon: require('@/assets/images/stories/natural-food.png') },
    { name: "Adventure", icon: require('@/assets/images/stories/adventure.png') },
]

const interestArr=[
    { name: "Empathy", icon: require('@/assets/images/stories/game.png') },
    { name: "Respect", icon: require('@/assets/images/stories/crown.png') },
]

const Login = () => {
    const [email, setemail] = useState('');
    const [fullName, setfullName] = useState("");
    const [password, setpassword] = useState('');
    const [confirmPasWord, setconfirmPasWord] = useState("");
    const [numberOfChild, setnumberOfChild] = useState(2);
    const [showmodal, setshowmodal] = useState(false);
    const [familyType, setfamilyType] = useState(null);
    const [parents, setparents] = useState([""]);
    const [showFlagModal, setshowFlagModal] = useState(false);
    const familyTypeData = [{ name: "Couple" }, { name: "Blanded" }, { name: "Single Parent" }, { name: "Other" }]
    const [selectLanguage, setselectLanguage] = useState(null);
    const [showLanguageodal, setshowLanguageodal] = useState(false);
    const [selectedCountry, setselectedCountry] = useState(null);
    const [interestSelected, setinterestSelected] = useState<any>([]);
    const [selectededucationalGoals, setselectededucationalGoals] = useState<any>([]);
    const dispatch = useDispatch();
    const count = (operation: string) => {
        if (operation === 'add') {
            setnumberOfChild(numberOfChild + 1)
        } else {
            setnumberOfChild((numberOfChild - 1) < 0 ? 0 : numberOfChild - 1)
        }
    }
    useEffect(() => {

    }, [])

    const handleSubmit = async () => {
        try {
            const res = dispatch(setFamilyDraft({family_name:fullName,family_type:familyType,num_children:numberOfChild }))
            toasts("Saved successfulLy")
            router.push("/family_profile/create")
        } catch (error) {
            console.log(error);
            
        }
    }

    const onHandleChangeParent = (index: number, value: string) => {
        setparents((prev) => prev.map((item, i) => index === i ? value : item))
    }

    const handleSelect = (item: any) => {
        setinterestSelected((prev: string[]) => {
            if (prev.includes(item.name)) {
                // Remove item
                return prev.filter(val => val !== item.name);
            } else {
                // Add item
                if (prev.length >= 5) {
                    return [...prev];
                }
                return [...prev, item.name];
            }
        });
    };
    const handleSelectGolas = (item: any) => {
        setselectededucationalGoals((prev: string[]) => {
            if (prev.includes(item.name)) {
                // Remove item
                return prev.filter(val => val !== item.name);
            } else {
                // Add item
                if (prev.length >= 3) {
                    return [...prev];
                }
                return [...prev, item.name];
            }
        });
    };
    return (<>
        <ScrollView className='flex-1 p-4'>


            <View className='mt-2'>
                <View>
                    <Text className='text-[16px] font-semibold mb-3'>Family Name</Text>
                    <Input label='Enter family name' setInput={setfullName} inputvalue={fullName} ispassword={false} />
                </View>
                <View className='mb-3'>
                    {parents.map((item, index) => (
                        <View key={index}>
                            <View className='flex-row items-center justify-between'>
                                <Text className='text-[16px] font-semibold mb-3'>Parent {index + 1}</Text>
                                {index > 0 && <TouchableOpacity onPress={() => setparents((prev) => prev.filter((_, i) => i !== index))} className='mr-3'>
                                    <Entypo name="circle-with-cross" size={18} color="red" />
                                </TouchableOpacity>}
                            </View>
                            <TextInput className={`w-full h-16 bg-white text-black border border-[#a5a5a53f]  rounded-full py-4 px-5 mb-4`} placeholder="Enter parent's name" value={item} onChangeText={(value) => onHandleChangeParent(index, value)} />

                        </View>
                    ))}

                    <Button name='+ Add another parent' textColor='#ffffff' bgColor={colors.primaryButton} onclick={() => setparents([...parents, ""])} />
                </View>
                <View className='mb-4'>
                    <Text className='text-[16px] font-semibold mb-3'>Country</Text>
                    <TouchableOpacity onPress={() => setshowFlagModal(true)}>
                        <Text className={`text-[14px] flex-1 bg-white border-[1px] border-[#E9EAEB] p-5 rounded-full ${selectedCountry ? 'text-black' : 'text-gray-400'}`}>{selectedCountry ?? 'Select type'}</Text>
                        <Ionicons className='absolute right-5 top-[16]' name="chevron-down" size={24} color={colors.gray600} />
                    </TouchableOpacity>
                </View>

                <View className='mb-4'>
                    <Text className='text-[16px] font-semibold mb-3'>Primary Language</Text>
                    <TouchableOpacity onPress={() => setshowLanguageodal(true)}>
                        <Text className={`text-[14px] flex-1 bg-white border-[1px] border-[#E9EAEB] p-5 rounded-full ${selectLanguage ? 'text-black' : 'text-gray-400'}`}>{selectLanguage ?? 'Select type'}</Text>
                        <Ionicons className='absolute right-5 top-[16]' name="chevron-down" size={24} color={colors.gray600} />
                    </TouchableOpacity>
                </View>
                <View className='mb-4'>
                    <Text className='text-[16px] font-semibold mb-3'>Family type</Text>
                    <TouchableOpacity onPress={() => setshowmodal(true)}>
                        <Text className={`text-[14px] flex-1 bg-white border-[1px] border-[#E9EAEB] p-5 rounded-full ${familyType ? 'text-black' : 'text-gray-400'}`}>{familyType ?? 'Select type'}</Text>
                        <Ionicons className='absolute right-5 top-[16]' name="chevron-down" size={24} color={colors.gray600} />
                    </TouchableOpacity>
                </View>


            </View>

            <View>
                <Text className='text-[16px] font-semibold mb-4'>Number of children</Text>
                <View className='flex-row items-center justify-between flex-grow'>
                    <TouchableOpacity onPress={() => count('subsctruct')} className='h-[56px] w-[56px] bg-white rounded-full flex-row items-center justify-center border-[1px] border-[#E9EAEB]' style={{ elevation: 1 }}>
                        <Text className='text-[14px] font-semibold'>
                            <AntDesign name="minus" size={24} color="black" />
                        </Text>
                    </TouchableOpacity>

                    <Text className='text-[14px] font-semibold flex-1 text-center bg-white border-[1px] border-[#E9EAEB] p-3 rounded-full mx-2 text-2xl'>{numberOfChild}</Text>

                    <TouchableOpacity onPress={() => count('add')} className='h-[56px] w-[56px] estonBlue_bg rounded-full flex-row items-center justify-center border-[1px] border-[#E9EAEB]' style={{ elevation: 1 }}>
                        <Text className='text-[14px] font-semibold '>
                            <AntDesign name="plus" size={24} color={"#fff"} />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="my-6 hidden">
                <Text className="text-lg font-semibold mb-2">Family Values</Text>
                <View className='flex-row flex-wrap gap-2'>
                    {interests.map((item: any, index: any) => (
                        <TouchableOpacity
                            key={index}
                            className={`p-4 px-1 justify-center items-center flex-row rounded-full mb-3 border ${interestSelected.includes(item.name)
                                ? 'bg-[#85b17625] border-[#adcda3]'
                                : 'bg-white border-gray-200'
                                }`}
                            style={{ width: '32%' }}
                            onPress={() => handleSelect(item)}
                        >

                            {item.icon &&
                                <Image source={item.icon} className="w-[20px] h-[20px] rounded-full justify-center items-center" />

                            }
                            {/* Language Name */}
                            <Text className=" text-gray-800 font-medium ml-2 text-base">
                                {item.name}
                            </Text>

                            {/* Selection Indicator */}

                        </TouchableOpacity>
                    ))}
                </View>
                <View className='flex-row flex-wrap items-center justify-between mt-2'>
                    <Text className='text-gray-600 text-xs'>Select up to 5 values that represent your family.</Text>
                    <Text className='text-gray-600 text-xs'>{interestSelected.length}/5 selected</Text>
                </View>
            </View>

            <View className="my-6 hidden">
                <Text className="text-lg font-semibold mb-2">Educational Goals</Text>
                <View className='flex-row flex-wrap gap-2'>
                    {goals.map((item: any, index: any) => (
                        <TouchableOpacity
                            key={index}
                            className={`p-4 px-1 justify-center items-center flex-row rounded-full mb-3 border ${selectededucationalGoals.includes(item.name)
                                ? 'bg-[#85b17625] border-[#adcda3]'
                                : 'bg-white border-gray-200'
                                }`}
                            style={{ width: '32%' }}
                            onPress={() => handleSelectGolas(item)}
                        >

                            {item.icon &&
                                <Image source={item.icon} className="w-[20px] h-[20px] rounded-full justify-center items-center" />

                            }
                            {/* Language Name */}
                            <Text className=" text-gray-800 font-medium ml-2 text-base">
                                {item.name}
                            </Text>

                            {/* Selection Indicator */}

                        </TouchableOpacity>
                    ))}
                </View>
                <View className='flex-row flex-wrap items-center justify-between mt-2'>
                    <Text className='text-gray-600 text-xs'>Select up to 5 values</Text>
                    <Text className='text-gray-600 text-xs'>{selectededucationalGoals.length}/3 selected</Text>
                </View>
            </View>

            <View className='hidden'>
                <Text className='text-[16px] font-semibold mb-2'>Specific Needs</Text>
                <Input placeholder='Enter Specific Needs' />

                <Text className='text-[16px] font-semibold mb-4'>Free Description</Text>
                <TextInput multiline textAlignVertical='top' className='h-[140px] p-4 border-[1px] border-[#E9EAEB] rounded-lg bg-white' placeholder='Enter Free Description' />
                
            </View>

            <View className='h-[50px]'></View>
            <BottomSheet setvalue={setfamilyType} selectedvalue={familyType} setshowmodal={setshowmodal} showmodal={showmodal} data={familyTypeData} />

            <CountryModal setvalue={setselectedCountry} selectedvalue={selectedCountry} setshowmodal={setshowFlagModal} showmodal={showFlagModal} />

            <CountryModal setvalue={setselectLanguage} selectedvalue={selectLanguage} setshowmodal={setshowLanguageodal} showmodal={showLanguageodal} datatype="language" />



        </ScrollView>
        <View className='p-4'>
            {!(familyType) && <Button name='Save and Continue' textColor='#5358627c' bgColor={colors.disabledButton} onclick={() => toasts('Please enter input')} />}

            {(familyType) && <Button name='Save and Continue' textColor='#ffffff' bgColor={colors.primaryButton} onclick={handleSubmit} />}
        </View>
        {/* Country Modal */}
        {/* <CountryPicker withFlag={true} visible={showFlagModal} countryCode={'AF'} withFlagButton={false}  /> */}

    </>
    );
}

const styles = StyleSheet.create({})

export default Login;
