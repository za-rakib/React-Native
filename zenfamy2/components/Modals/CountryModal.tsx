import { Ionicons } from '@expo/vector-icons';
import { memo, useEffect, useState } from 'react';
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';

interface Language {
  name: string;
  label: string;
}

const CountryModal = ({setvalue,selectedvalue, setshowmodal, showmodal, data,datatype}:any)=> {
  const [countries, setcountries] = useState([]);

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json")
    .then((response) => response.json())
    .then((json) => setcountries(json));
  }, []);
  


  const handleSelect = (language: Language) => {
    setvalue(language.name);
  };

  const handleContinue = () => {
    setshowmodal(false);
    // Navigate to welcome screen
    // router.push('/onboarding/welcome');
  };

  return (
    <View className="flex-1">
        <Modal
          visible={showmodal}
          transparent={true}
          animationType="slide"
          statusBarTranslucent={true}
          

        >
          <View className="flex-1 justify-end bg-black/50" >
            <View className="bg-white rounded-t-3xl p-6 mx-0" style={{height:800}}>
              <Text className="text-xl font-bold text-center mb-6 text-gray-800">
                {datatype === "language" ? "Select Language" : "Select Country"}
              </Text>

              <FlatList
                data={countries}
                renderItem={({ item }:any) => (
                  <TouchableOpacity
                    onPress={() => handleSelect(item)}
                    className="flex-row items-center p-4 mb-3 border-b border-gray-200"
                  >
                    {/* Flag Circle */}
                    <View className="w-10 h-10 rounded-full bg-white border border-gray-200 mr-4 justify-center items-center">
                      <Text className="text-lg">{item.emoji}</Text>
                    </View>

                    {/* Language Name */}
                    <Text className="flex-1 text-gray-800 font-medium text-base">
                      {item.name	}
                    </Text>

                    {/* Selection Indicator */}
                    {
                      <Ionicons name='checkmark'  size={20}  color={selectedvalue === item.name ? '#053b29' : '#c6c6c68a'}  /> 
                      
                    }
                  </TouchableOpacity>
                )}
                keyExtractor={(item:any) => item.name}
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

export default memo(CountryModal);