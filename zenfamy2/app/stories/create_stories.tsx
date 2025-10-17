import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import Generate from './svgs/Generator';
import BottomSheet from './components/BottomSheet';
import Input from '@/components/Input/Input';
import Button from '@/components/Buttons/Button';
import { router } from 'expo-router';
import { colors } from '@/assets/lib';

const StoryCreationScreen = () => {
    // State management for selected options
    const [selectedEmotion, setSelectedEmotion] = useState(null);
    const [storyTheme, setStoryTheme] = useState<any>([]);
    const [interestSelected, setinterestSelected] = useState<any>([]);
    const [lifeLessons, setlifeLessons] = useState<any>([]);
    const [specialLesson, setSpecialLesson] = useState('');
    const [showThemeModal, setshowThemeModal] = useState(false);
    const [showInterestModal, setshowInterestModal] = useState(false);
    const [showLessonModal, setshowLessonModal] = useState(false);

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
    const lessons = [
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

    const getTheRightIcon = (name: any) => {
        return theme.filter(theme => theme.name === name)[0].icon
    }

    const getTheRightIconInterest = (name: any) => {
        return interests.filter(theme => theme.name === name)[0].icon
    }


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
            <View>
                <Text className="text-2xl font-bold mb-4">Let's Choose the Adventure!</Text>
                <Text className="text-gray-600 mb-4">
                    Pick the elements for your magical story.
                </Text>
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

            {/* Choose a theme for your story */}
            <View className="mb-4">
                <Text className="text-lg font-semibold mb-2">Choose a theme for your story</Text>

                <TouchableOpacity onPress={() => setshowThemeModal(true)} className='px-2 py-2 pr-6 rounded-full mt-2 bg-white border overflow-hidden border-gray-300 focus:border-blue-500 focus:outline-none flex-row items-center justify-between'>
                    {storyTheme.length < 1 && <Text className="text-gray-500 py-3 px-4">Select a theme for your story</Text>}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className='flex-row  gap-2 overflow-scroll w-[100px]'>
                        {storyTheme && storyTheme.map((theme: any, index: any) => {
                            return <View key={index} className='px-6 h-[46px] rounded-full bg-[#85b1763b] border border-[#adcda3] focus:border-blue-500 focus:outline-none flex-row items-center justify-between mr-2'>
                                <Image source={getTheRightIcon(theme)} className='w-[20px] h-[20px]' />
                                <Text className=' text-gray-600 ml-1'>{theme}</Text>
                            </View>
                        })}
                    </ScrollView>


                    <Ionicons name='chevron-down-outline' size={20} color={'#818181'} />
                </TouchableOpacity>


            </View>

            {/* What interests Saria's right now? */}
            <View className="mb-4">
                <Text className="text-lg font-semibold mb-2">What interests Saria's right now?</Text>
                <TouchableOpacity onPress={() => setshowInterestModal(true)} className='px-2 py-2 pr-6 rounded-full mt-2 bg-white border overflow-hidden border-gray-300 focus:border-blue-500 focus:outline-none flex-row items-center justify-between'>
                    {interestSelected.length < 1 && <Text className="text-gray-500 py-3 px-4">Select interests</Text>}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className='flex-row  gap-2 overflow-scroll w-[100px]'>
                        {interestSelected && interestSelected.map((theme: any, index: any) => {
                            return <View key={index} className='px-6 h-[46px] rounded-full bg-[#85b1763b] border border-[#adcda3] focus:border-blue-500 focus:outline-none flex-row items-center justify-between mr-2'>
                                <Image source={getTheRightIconInterest(theme)} className='w-[20px] h-[20px]' />
                                <Text className=' text-gray-600 ml-1'>{theme}</Text>
                            </View>
                        })}
                    </ScrollView>


                    <Ionicons name='chevron-down-outline' size={20} color={'#818181'} />
                </TouchableOpacity>
            </View>

            {/* Lofe lesson */}
            <View className="mb-4">
                <Text className="text-lg font-semibold mb-2">Add a Special Lesson</Text>
                <TouchableOpacity onPress={() => setshowLessonModal(true)} className='px-2 py-2 pr-6 rounded-full mt-2 bg-white border overflow-hidden border-gray-300 focus:border-blue-500 focus:outline-none flex-row items-center justify-between'>
                    {lifeLessons.length < 1 && <Text className="text-gray-500 py-3 px-4">Choose a life lesson</Text>}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className='flex-row  gap-2 overflow-scroll w-[100px]'>
                        {lifeLessons && lifeLessons.map((theme: any, index: any) => {
                            return <View key={index} className='px-6 h-[46px] rounded-full bg-[#85b1763b] border border-[#adcda3] focus:border-blue-500 focus:outline-none flex-row items-center justify-between mr-2'>
                              
                                <Text className=' text-gray-600 ml-1'>{theme}</Text>
                            </View>
                        })}
                    </ScrollView>


                    <Ionicons name='chevron-down-outline' size={20} color={'#818181'} />
                </TouchableOpacity>
            </View>

            {/* Add a Secondary Character (Optional) */}
            <View className="mb-4">
                <Text className="text-lg font-semibold">Add a Secondary Character (Optional)</Text>
                <Text className="text-gray-600 mb-2">Would you like to include someone in the story?</Text>
                <Input label="e.g., Uncle Sam, Teddy, best friend..." setInput={setSecondaryCharacter} inputvalue={secondaryCharacter} ispassword={false} />
                
            </View>

            <Button name="Next" bgColor={colors.primaryButton} onclick={() => router.push('./play')} />

                <View className='h-[100px]'></View>

            <BottomSheet setvalue={setStoryTheme} selectedvalue={storyTheme} setshowmodal={setshowThemeModal} showmodal={showThemeModal} data={theme} limit={1} icon={true} />

            <BottomSheet setvalue={setinterestSelected} selectedvalue={interestSelected} setshowmodal={setshowInterestModal} showmodal={showInterestModal} data={interests} limit={3} icon={true} />

            <BottomSheet setvalue={setlifeLessons} selectedvalue={lifeLessons} setshowmodal={setshowLessonModal} showmodal={showLessonModal} data={lessons} limit={3} icon={false} />

            
        </ScrollView>

    </>
    );
};

export default StoryCreationScreen;