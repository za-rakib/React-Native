import { View, Text } from "react-native";
import { Link } from "expo-router";
const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Home</Text>
      <Link href="/details">View details</Link>
    </View>
  );
};

export default index;
