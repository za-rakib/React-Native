import { colors } from '@/assets/lib';
import Button from '@/components/Buttons/Button';
import { getMyChild } from '@/redux/slices/childSlice';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const ChildrenList = () => {
  const [children, setChildren] = useState([
    { id: 1, name: "Emily", age: 15, avatar: require('@/assets/images/imoji/animoji.png') },
    { id: 2, name: "Emily", age: 15, avatar: require('@/assets/images/imoji/animoji(2).png') },
    { id: 3, name: "Emily", age: 15, avatar: require('@/assets/images/imoji/animoji(3).png') },
    { id: 4, name: "Emily", age: 15, avatar: require('@/assets/images/imoji/animoji(4).png') },
  ]);
  const { loading, childs } = useSelector((state: any) => state.childs)
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getMyChild());
    console.log(childs);

  }, [dispatch, childs]);

  const handleAddChild = () => {
    router.push("/child_create")
    // const newId = children.length + 1;
    // setChildren([
    //   ...children,
    //   {
    //     id: newId,
    //     name: "Emily",
    //     age: 15,
    //     avatar: require('@/assets/images/imoji/animoji.png') // Default avatar
    //   },
    // ]);
  };

  return (
    <View className="flex-1 p-4">

      <FlatList
        data={childs}
        renderItem={({ item }: any) => (
          <TouchableOpacity onPress={() => { router.push("/family_profile/profile_prev") }} key={item.child_id} className="bg-white p-4 mb-4 rounded-xl shadow-sm flex-row items-center">
            <Image
              source={item.avatar_url}
              style={{ width: 50, height: 50, borderRadius: 25, marginRight: 12 }}
            />
            <View>
              <Text className="text-lg font-bold">{item.first_name}</Text>
              <Text className="text-gray-500">{item.birth_date}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.child_id.toString()}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center">
            <Text className="text-gray-500">No children found</Text>
          </View>
        )}
      />

      {/* Add Child Button */}
      <Button name="+ Add Child" bgColor={colors.primaryButton} onclick={handleAddChild} />
    </View>
  );
};

export default ChildrenList;
