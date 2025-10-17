import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { SectionList, Text, TouchableOpacity, View } from 'react-native';

type Activity = {
  date: string;
  title: string;
  description: string;
  actions: string[];
  icon?: React.ReactNode
};

const rawActivities: Activity[] = [
  {
    date: "July 15, 2023",
    title: "😀",
    description: "Today was such an exciting day! I made new friends and learned about numbers...",
    actions: ["Play", "View", "Share"],

  },
  {
    date: "July 16, 2023",
    title: "😊",
    description: "Today was such an exciting day! I made new friends and learned about numbers...",
    actions: ["Play", "View", "Share"],
  },
  {
    date: "July 15, 2023",
    title: "😡",
    description: "Today was such an exciting day! I made new friends and learned about numbers...",
    actions: ["Play", "View", "Share"],
  },
  {
    date: "July 17, 2023",
    title: "😍",
    description: "Had fun at the playground and played games.",
    actions: ["Play", "View", "Share"],
  },
];

// Group activities by date
const groupByDate = (data: Activity[]) => {
  const grouped: { [key: string]: Activity[] } = {};
  data.forEach((item) => {
    if (!grouped[item.date]) grouped[item.date] = [];
    grouped[item.date].push(item);
  });

  return Object.keys(grouped).map((date) => ({
    title: date,
    data: grouped[date],
  }));
};

const PostCard = ({ activity }: { activity: Activity }) => (
  <View className="bg-white p-4 mx-4 mb-3 rounded-xl ">
    <View className='flex-row items-center justify-between'>
      <View className='flex-row items-center gap-2'>
        <Text className='text-[40px]'>{activity.title}</Text>
        <Text className='px-5 border py-3 rounded-full text-[14px] border-gray-200 text-center'>School</Text>
        <Text className='px-5 border py-3 rounded-full text-[14px] border-gray-200 text-center'>Social</Text>
      </View>
      <TouchableOpacity className='w-[48px] h-[48px] bg-white rounded-full flex-row items-center justify-center estonBlue_bg'>
        <MaterialIcons name='arrow-outward' size={20} color={'#ffffff'} />
      </TouchableOpacity>
    </View>
   
    <Text className="text-gray-600 text-[14px] mt-6">{activity.description}</Text>
    
  </View>
);

const Index = () => {
  const sections = useMemo(() => groupByDate(rawActivities), []);

  return (
    <View className="flex-1 ">
      {/* Header */}
      <View className=" mt-2  p-4 flex-row justify-between">
        <View className='w-[30%]'>
          <Button
            icon={<Ionicons name='add-outline' size={20} color={'#679698'} />}
            name="Filter"
            textColor={"#679698"}
            onclick={() => router.push('./create')}
            bgColor={"#E6FBFB"}
          />
        </View>
        <View className='w-[40%]'>
          <Button
            icon={<Ionicons name='add-outline' size={20} color={'#fff'} />}
            name="Add Event"
            onclick={() => router.push('/journal/create')}
            bgColor={colors.primaryButton}
          />
        </View>

      </View>

      {/* Sectioned Activity List */}
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={({ item }) => <PostCard activity={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-md font-bold text-gray-700 mb-2 mt-3 mx-4">{title}</Text>
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </View>
  );
};

export default Index;
