import { Ionicons } from '@expo/vector-icons';
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';

interface Language {
  name: string;
  label: string;
}

export default function BottomSheet({ setvalue, selectedvalue, setshowmodal, showmodal, data }: any) {


  const languages: Language[] = [
    {
      name: 'Saudi arabia (Arabic)',
      label: 'ar'
    },
    {
      name: 'England (English)',
      label: 'en'
    },
  ];

  const handleSelect = (language: Language) => {
    setvalue(language.name);
  };

  const handleContinue = () => {
    setshowmodal(false);
    // Navigate to welcome screen
    // router.push('/onboarding/welcome');
  };

  return (
    <View className="flex-1 h-full ">


      {/* Dark overlay */}
      <View className="flex-1  " />


        <Modal
          visible={showmodal}
          transparent={true}
          animationType="slide"
          statusBarTranslucent={true}
        >
          <View className="flex-1 justify-end bg-black/50">
            <View className="bg-white rounded-t-3xl p-6 mx-0 h-[50%]">
              <Text className="text-xl font-bold text-center mb-6 text-gray-800">
                Select Item
              </Text>

              <FlatList
                data={data}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                  <TouchableOpacity

                    className={`flex-row items-center p-4 rounded-full mb-3 border ${selectedvalue === item.name
                      ? 'bg-gray-100 border-gray-100'
                      : 'bg-white border-gray-200'
                      }`}
                    onPress={() => handleSelect(item)}
                  >
                    {/* Flag Circle */}
                    {/* <View className="w-10 h-10 rounded-full bg-green-600 mr-4 justify-center items-center">
                      <Text className="text-lg">{item.name}</Text>
                    </View> */}

                    {/* Language Name */}
                    <Text className="flex-1 text-gray-800 font-medium text-base">
                      {item.name}
                    </Text>

                    {/* Selection Indicator */}
                    {
                      <Ionicons name='checkmark' size={20} color={selectedvalue === item.name ? '#053b29' : '#c6c6c68a'} />
                    }
                  </TouchableOpacity>
                )}

              />



              {/* Continue Button */}
              <TouchableOpacity
                className="estonBlue_bg rounded-full py-4 mt-4 shadow-lg"
                onPress={handleContinue}
                activeOpacity={0.8}
              >
                <Text className="text-white text-center font-bold text-lg">
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

    </View>
  );
}