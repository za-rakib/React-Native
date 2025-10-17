import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';

interface Language {
  name: string;
  label: string;
}

export default function BottomSheet({ setvalue, selectedvalue, setshowmodal, showmodal, data, limit, icon }: any) {


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

  const handleSelect = (item: Language) => {
    setvalue((prev: string[]) => {
      if (prev.includes(item.name)) {
        // Remove item
        return prev.filter(val => val !== item.name);
      } else {
        // Add item
        if (prev.length >= limit) {
          return [...prev];
        }
        return [...prev, item.name];
      }
    });
  };

  const handleContinue = () => {
    setshowmodal(false);
    // Navigate to welcome screen
    // router.push('/onboarding/welcome');
  };

  return (
    <View className="flex-1">


      {/* Dark overlay */}
      <View className="flex-1  " />


      <Modal
        visible={showmodal}
        transparent={true}
        animationType="slide"
        statusBarTranslucent={true}

      >
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white rounded-t-3xl p-6 mx-0">
            <Text className="text-xl font-bold text-center mb-6 text-gray-800">
              Select Language
            </Text>
            <View className='flex-row flex-wrap items-center gap-2'>
              {data.map((item: any, index: any) => (
                <TouchableOpacity
                  key={index}
                  className={`p-4 px-1 justify-center items-center flex-row rounded-full mb-3 border ${selectedvalue.includes(item.name)
                    ? 'bg-[#85b17625] border-[#adcda3]'
                    : 'bg-white border-gray-200'
                    }`}
                  style={{ width: '32%' }}
                  onPress={() => handleSelect(item)}
                >

                  {icon&&
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
              <Text className='text-gray-600 text-sm'>(allow up to 3 selections)</Text>
              <Text className='text-gray-600 text-sm'>{selectedvalue.length}/{limit}</Text>
            </View>

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