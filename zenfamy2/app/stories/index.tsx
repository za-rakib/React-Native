import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, SectionList } from 'react-native';

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
    title: "😊 My First Day at School",
    description: "Today was such an exciting day! I made new friends and learned about numbers...",
    actions: ["Play", "View", "Share"],
    
  },
  {
    date: "July 16, 2023",
    title: "😊 Math Exploration",
    description: "Today was such an exciting day! I made new friends and learned about numbers...",
    actions: ["Play", "View", "Share"],
  },
  {
    date: "July 15, 2023",
    title: "😊 Lunch Time",
    description: "Today was such an exciting day! I made new friends and learned about numbers...",
    actions: ["Play", "View", "Share"],
  },
  {
    date: "July 17, 2023",
    title: "😊 Outdoor Play",
    description: "Had fun at the playground and played games.",
    actions: ["Play", "View", "Share"],
  },
];

const getButtonColor = (action: string) => {
  switch (action) {
    case "Play":
      return colors.primaryButton;
    case "View":
      return "#8dbfaa";
    case "Share":
      return colors.secondaryTextColor;
    default:
      return "bg-gray-400";
  }
};
const getButtonIcon = (action: string) => {
  switch (action) {
    case "Play":
      return <Ionicons name='play-outline' size={20} color={'#fff'} />;
    case "View":
      return <Ionicons name='eye-outline' size={20} color={'#fff'} />
    case "Share":
      return <Ionicons name='share-social-outline' size={20} color={'#fff'} />
    default:
      return <Ionicons name='share-social-outline' size={20} color={'#fff'} />
  }
};

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
    <Text className="text-[18px] font-semibold">{activity.title}</Text>
    <Text className="text-gray-600 text-[14px] mt-2">{activity.description}</Text>
    <View className="flex-row justify-between mt-4 space-x-2">
      {activity.actions.map((action, idx) => (
        <TouchableOpacity
          key={idx}
          onPress={() => router.push("./stories/play")}
          style={{ backgroundColor: getButtonColor(action), elevation:1, shadowColor:"#3b5148", boxShadow:'#375c4dba 0px 1px 6px -2px, #43715ebb 0px 2px 4px -1px' }}
          className={`px-4 py-2 rounded-full w-[109px] items-center justify-center h-[48px] flex-row gap-2`}
        >
          <Text>{getButtonIcon(action)}</Text>
          <Text className="text-white font-bold">{action}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const Index = () => {
  const sections = useMemo(() => groupByDate(rawActivities), []);

  return (
    <View className="flex-1 ">
      {/* Header */}
      <View className=" mt-2 w-[60%] p-4">
        <Button 
        icon={<Ionicons name='add-outline' size={20} color={'#fff'} />}
         name="Generate New Story"
         onclick={() => router.push('./stories/create_stories')}
         bgColor={colors.primaryButton}
         />
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
