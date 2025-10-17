import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, ActivityIndicator, Image } from 'react-native';
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';

const GOOGLE_API_KEY = 'AIzaSyAfJLfq52LxOaHU1nQ_riGsGRskMe7ddsc'; // Store in .env for safety

const LocationInput = ({ onSelect }: { onSelect: (place: string) => void }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [thefocuedInputs, setthefocuedInputs] = useState(false);

    useEffect(() => {
        const fetchPlaces = async () => {
            if (query.length < 2) {
                setSuggestions([]);
                return;
            }

            setLoading(true);

            try {
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
                        query
                    )}&key=${GOOGLE_API_KEY}`
                );

                const json = await response.json();
                const results = json.predictions?.map((item: any) => item.description) || [];
                setSuggestions(results);
                console.log(results);
                
            } catch (error) {
                console.error('Error fetching place suggestions:', error);
            } finally {
                setLoading(false);
            }
        };

        const timeout = setTimeout(fetchPlaces, 400); // Debounce API calls
        return () => clearTimeout(timeout);
    }, [query]);

    return (
        <View className='realative'>
            <TextInput
                placeholder="Enter a location"
                value={query}
                onFocus={() => setthefocuedInputs(true)}
                onBlur={() => setthefocuedInputs(false)}
                onChangeText={setQuery}
                className={`w-full h-16 bg-white border border-gray-200 rounded-full text-black ${thefocuedInputs && "border border-[#0094c6]"} p-2 px-5 pl-14  mb-4`}
            />
            <Image source={require('@/assets/images/profile/location.png')} className='absolute bg-white top-[16px] left-5' />
            {loading && <ActivityIndicator style={{ marginTop: 10 }} />}
            {suggestions.length > 0 && <View style={{ elevation: 5, zIndex: 9999 }}
                className='absolute w-full right-0 top-[70px] bg-white shadow-lg rounded-xl p-4'>
                {suggestions.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => {
                            onSelect(item);
                            setQuery(item); // Fill selected value
                            setSuggestions([]); // Clear dropdown
                        }}
                        style={{
                            paddingVertical: 12,
                            borderBottomColor: '#eee',
                            borderBottomWidth: 1,
                        }}
                    >
                        <Text>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>}
        </View>
    );
};

export default LocationInput;
