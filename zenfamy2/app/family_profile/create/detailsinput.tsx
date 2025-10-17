import { colors, toasts } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import BottomSheet from '@/components/Modals/BottomSheet';
import { createFamily, setFamilyDraft } from '@/redux/slices/familySlice';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


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

const interestArr = [
    { name: "Empathy", icon: require('@/assets/images/stories/game.png') },
    { name: "Respect", icon: require('@/assets/images/stories/crown.png') },
]

const Login = () => {

    const [numberOfChild, setnumberOfChild] = useState(2);
    const [showmodal, setshowmodal] = useState(false);
    const [familyType, setfamilyType] = useState(null);
    const [parents, setparents] = useState([""]);
    const dispatch = useDispatch<any>();
    const [description, setdescription] = useState<any>("");
    const { familyDraft, loading } = useSelector((state: any) => state.family);
    const [allerrors, setallerrors] = useState<any>([]);

    const familyTypeData = [{ name: "Nurturing" }, { name: "Authoritarian" }, { name: "Collaborative" }, { name: "Adaptive" }, { name: "Permissive" }, { name: "Structured" }, { name: "Protective" }, { name: "Involved" }, { name: "Reflective" }, { name: "Demanding but Supportive" }, { name: "Relaxed" }, { name: "Inconsistent" }]

    //[{ name: "Couple" }, { name: "Blanded" }, { name: "Single Parent" }, { name: "Other" }]
    const needs = [{ name: "Parental fatigue" }, { name: "Lack of quality family time" }, { name: "Need for emotional support" }, { name: "Difficulty setting boundaries" }, { name: "Need to improve communication" }, { name: "Family stress management" }, { name: "Supporting a child with special needs" }, { name: "Managing sibling conflicts" }, { name: "Organizing daily life" }, { name: "Demanding but Supportive" }, { name: "Strengthening the parent-child bond" }]


    const [showNeedsModal, setshowNeedsModal] = useState(false);
    const [seelectedneed, setseelectedneed] = useState(null);

    const [interestSelected, setinterestSelected] = useState<any>([]);
    const [selectededucationalGoals, setselectededucationalGoals] = useState<any>([]);


const handleSubmit = async () => {
  try {
    const dt = { 
      ...(familyDraft || {}), 
      parenting_style: familyType ?? "",
      family_values: interestSelected || [],
      educational_goals: selectededucationalGoals || [],
      needs: seelectedneed ? [seelectedneed] : [],
      family_bio: description || "",
      num_adults: 0,
      children_birth_years: [2020]
    };

    const res = await dispatch(createFamily(dt)).unwrap();
    console.log("Submitted payload:", dt);

    //router.push("/next-screen"); // if you want to go to the next screen

  } catch (error: any) {
    console.log(error);
    if(typeof error === 'string'){
        return toasts(error);
    }
    if (typeof error?.detail === "string") {
      toasts(error.detail);
    } else {
      setallerrors(
        typeof error?.detail === "string" ? [{ msg: error.detail }] : (error?.detail || [])
      );
    }
  }
};




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
    const allAvatar: any = {
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


    return (<>
        <ScrollView className='flex-1 p-4'>

            <View className='justify-center items-center w-full mb-[30px]'>
                {familyDraft?.profile_picture_url && <Image source={allAvatar[familyDraft?.profile_picture_url]} className='w-[96px] h-[96px] rounded-full' />}
                <Text className='text-[20px] text-center font-bold mt-5 mb-2'>Family's Profile</Text>
                <Text className='text-[13px] text-center'>Tell us a bit more about your family</Text>
            </View>

            <View className='mt-2'>

                <View className='mb-4'>
                    <Text className='text-[16px] font-semibold mb-3'>Parenting Style</Text>
                    <TouchableOpacity onPress={() => setshowmodal(true)}>
                        <Text className={`text-[14px] flex-1 bg-white border-[1px] border-[#E9EAEB] p-5 rounded-full ${familyType ? 'text-black' : 'text-gray-400'}`}>{familyType ?? 'Select type'}</Text>
                        <Ionicons className='absolute right-5 top-[16]' name="chevron-down" size={24} color={colors.gray600} />
                    </TouchableOpacity>
                </View>


            </View>


            <View className="my-6">
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

            {/* Golas */}

            <View className="my-6">
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
                    <Text className='text-gray-600 text-xs'>Select up to 3 values</Text>
                    <Text className='text-gray-600 text-xs'>{selectededucationalGoals.length}/3 selected</Text>
                </View>
            </View>

            <View className='mb-4'>
                <Text className='text-[16px] font-semibold mb-3'>Specific Needs</Text>
                <TouchableOpacity onPress={() => setshowNeedsModal(true)}>
                    <Text className={`text-[14px] flex-1 bg-white border-[1px] border-[#E9EAEB] p-5 rounded-full ${seelectedneed ? 'text-black' : 'text-gray-400'}`}>{seelectedneed ?? 'Select type'}</Text>
                    <Ionicons className='absolute right-5 top-[16]' name="chevron-down" size={24} color={colors.gray600} />
                </TouchableOpacity>
            </View>

            <View>


                <Text className='text-[16px] font-semibold mb-4'>Free Description</Text>
                <TextInput onChangeText={setdescription} multiline textAlignVertical='top' placeholderTextColor={colors.gray600} className='h-[140px] p-4 border-[1px] text-black border-[#E9EAEB] rounded-lg bg-white' placeholder='Enter Free Description' />

            </View>

            {allerrors[0] &&
                allerrors.map((error: any, i: number) => {
                    return <View key={i} className='flex-row items-center'>
                        <Ionicons name="close-circle-outline" size={18} color="red" />
                        <Text className='text-[14px] text-red-500'> {error.msg}</Text>
                    </View>
                })
            }

            <View className='h-[50px]'></View>
            <BottomSheet setvalue={setfamilyType} selectedvalue={familyType} setshowmodal={setshowmodal} showmodal={showmodal} data={familyTypeData} />
            <BottomSheet setvalue={setseelectedneed} selectedvalue={seelectedneed} setshowmodal={setshowNeedsModal} showmodal={showNeedsModal} data={needs} />





        </ScrollView>
        <View className='p-4'>
            {!(familyType) && <Button name='Save and Continue' textColor='#5358627c' bgColor={colors.disabledButton} onclick={() => toasts('Please enter all input')} />}

            {(familyType) && <Button name={loading ? 'Saving...' : 'Save and Continue'} textColor='#ffffff' bgColor={colors.primaryButton} onclick={handleSubmit} />}
        </View>
        {/* Country Modal */}
        {/* <CountryPicker withFlag={true} visible={showFlagModal} countryCode={'AF'} withFlagButton={false}  /> */}

    </>
    );
}

const styles = StyleSheet.create({})

export default Login;
