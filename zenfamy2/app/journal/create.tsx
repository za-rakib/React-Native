import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import PopUpModal from '@/components/Modals/PopUpModal';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const StoryCreationScreen = () => {
    // State management for selected options
    const [selectedEmotion, setSelectedEmotion] = useState(null);
    const [selectedvalue, setselectedvalue] = useState<any>(null);
    const [showSuccesModal, setshowSuccesModal] = useState(false);
    const controller = () => {
        setshowSuccesModal(false)
        router.push('/home')
    };

    const topics = [
        { name: "School", icon: require('@/assets/images/stories/pokemon.png') },
        { name: "Siblings", icon: require('@/assets/images/stories/stars.png') },
        { name: "Bedtime", icon: require('@/assets/images/stories/crown.png') },
        { name: "Homework", icon: require('@/assets/images/stories/sword.png') },
        { name: "Conflict", icon: require('@/assets/images/stories/paint-board.png') },
        { name: "Friends", icon: require('@/assets/images/stories/game.png') },
        { name: "Anger", icon: require('@/assets/images/stories/natural-food.png') },
        { name: "Anxiety", icon: require('@/assets/images/stories/beach.png') },
        { name: "Play", icon: require('@/assets/images/stories/baseball.png') },
        { name: "Screen Time", icon: require('@/assets/images/stories/favourite.png') },
        { name: "Physical Activity", icon: require('@/assets/images/stories/school.png') },
        { name: "Special Event", icon: require('@/assets/images/stories/user-group.png') },

    ]



    // Emotions data
    const emotions = [
        { label: "Happy", icon: "😀" },
        { label: "Excited", icon: "😵" },
        { label: "Sad", icon: "😔" },
        { label: "Angry", icon: "😡" },
        { label: "Scared", icon: "😨" },
        { label: "Tired", icon: "😴" },
        { label: "Anxious", icon: "😁" },
        { label: "Loved", icon: "😍" },
        { label: "Proud", icon: "🥲" },
        { label: "Disappointed", icon: "🫤" },
        { label: "Surprised", icon: "😲" },
        { label: "Calm", icon: "🙂‍↔️" },
    ];
    const [secondaryCharacter, setSecondaryCharacter] = useState('');

    // Handle emotion selection
    const handleEmotionSelect = (emotion: any) => {
        setSelectedEmotion(emotion);
    };

    return (<>
        <ScrollView className="flex-1  p-4">
            {/* Header */}
            <View className='mb-4'>
                <Text className="text-lg font-semibold mb-2">When did this happen?</Text>
                <TouchableOpacity className='flex flex-row items-center gap-2 bg-white p-4 px-5 border border-gray-300 rounded-full'>
                    <Ionicons name='calendar-outline' size={20} color={'#5c5c5c'} />
                    <Text className=" text-[#1a1a1a]">Select date</Text>
                </TouchableOpacity>
            </View>

            {/* How is Emily feeling today? */}
            <View className="mb-4">
                <Text className="text-lg font-semibold mb-2">How is Emily feeling today?</Text>
                <View className="flex flex-row flex-wrap justify-between">
                    {emotions.map((emotion, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleEmotionSelect(emotion.label)}
                            className={` w-1/4 py-2 rounded-full justify-center items-center $`}
                        >
                            <View className={`w-[68px] bg-[#FDFDFD] rounded-full justify-center items-center h-[68px] ${selectedEmotion === emotion.label ? 'border-2 border-[#00b3ad]' : ''}`}>
                                <Text className='text-center text-[38px]'>{emotion.icon}</Text>
                            </View>
                            <Text className="text-center text-sm mt-1">{emotion.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Add a Secondary Character (Optional) */}
            <View className="mt-4">
                <View>
                    <Text className="text-lg font-semibold mb-2">What was this about?</Text>
                    <View className='flex-row flex-wrap items-center gap-2'>
                        {topics.map((item: any, index: any) => (
                            <TouchableOpacity
                                key={index}
                                className={`p-4 px-1 justify-center items-center flex-row rounded-full mb-3 border ${selectedvalue === item.name
                                    ? 'bg-[#85b17625] border-[#adcda3]'
                                    : 'bg-white border-gray-200'
                                    }`}
                                style={{ width: '32%' }}
                                onPress={() => setselectedvalue(item?.name)}
                            >


                                {/* Language Name */}
                                <Text className=" text-gray-800 font-medium ml-2 text-base">
                                    {item.name}
                                </Text>

                                {/* Selection Indicator */}

                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Add a Secondary Character (Optional) */}
                <View className="my-4">
                    <Text className="text-lg font-semibold mb-2">Tell me what happened...</Text>

                    <TextInput placeholder="Write your thoughts here..." value={secondaryCharacter} onChangeText={(text) => setSecondaryCharacter(text)} className='bg-white p-4 px-5 border border-gray-300 rounded-xl h-[100px]' textAlignVertical='top' />


                </View>
                <View className='border border-gray-300 rounded-xl p-4 my-4 mb-6'>
                    <Text className='text-lg font-semibold mb-2'>Would you like a personalized tip for this situation?</Text>
                    <View className=" flex-row justify-between">
                        <View className='w-[48%]'>
                            <Button
                                icon={<Ionicons name='add-outline' size={20} color={'#679698'} />}
                                name="No, Thanks"
                                textColor={"#679698"}
                                onclick={() => router.push('./create')}
                                bgColor={"#E6FBFB"}
                            />
                        </View>
                        <View className='w-[48%]'>
                            <Button
                                icon={<Ionicons name='add-outline' size={20} color={'#fff'} />}
                                name="Yes, Help me"
                                onclick={() => router.push('./create')}
                                bgColor={colors.primaryButton}
                            />
                        </View>

                    </View>
                </View>

            </View>

            <Button name="Save Journal Entry" bgColor={colors.primaryButton} onclick={() => setshowSuccesModal(true)} />

            <View className='h-[100px]'></View>



        </ScrollView>
        {showSuccesModal&&<PopUpModal 
        controller={controller} 
        title={'Journal Added Successfully'}
        description={'Thanks for sharing. Keep writing — I’m here with you.'}
        image={require('../../assets/images/login/done.png')} 
        button1={<Button icon={<Ionicons name='add-outline' size={20} color={'#fff'} />} name={'Add Another'} onclick={controller}  textColor={'#fff'} bgColor={colors.secondaryTextColor} loading={false}/>}
        button2={<Button onclick={controller}  name={'View Entry'} textColor={'#fff'} bgColor={colors.primaryButton} loading={false}/>}  /> }              
    </>
    );
};

export default StoryCreationScreen;