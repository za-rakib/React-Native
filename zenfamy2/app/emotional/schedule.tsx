
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { useIsFocused } from '@react-navigation/native';

import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, ActivityIndicator, ScrollView } from 'react-native';
// import Story from './components/Story';
// import Posts from './components/posts';
// import MainNav from '@/components/Navigation/MainNav';







const HomeScreen = () => {
    const flatListRef = useRef<FlatList>(null);

    const isFocused = useIsFocused()
    const [showModal, setshowModal] = useState(false);
    const [selectedItem, setselectedItem] = useState("All");
    const menus = ["All", "Upcoming", "Pending", "Declined", "Completed"];
    const [selectedDate, setSelectedDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
    const [allTheScedule, setallTheScedule] = useState<String[]>([]);
    const [todaysDate, settodaysDate] = useState(moment(new Date()).format('DD'));

    const [monthCount, setmonthCount] = useState(1);
    const [selectedDateTitle, setselectedDateTitle] = useState(new Date());
    const [currentMonth, setcurrentMonth] = useState<any>(0);
    const [monthNumber, setmonthNumber] = useState(0);

    const [allAppointmentsArr, setallAppointmentsArr] = useState([]);

    useEffect(() => {
        console.log(selectedDate);

    }, [selectedDate]);





    function getMonthDays() {
        const dateString = moment(new Date()).format('YYYY-MM-DD');

        const inputDate = new Date(dateString);
        const year = inputDate.getFullYear();
        const month = inputDate.getMonth(); // 0-indexed
        setcurrentMonth(month + 1)
        const daysInMonth = new Date(year, month + monthCount, 0).getDate();

        setselectedDateTitle(new Date(year, month + monthCount, 0))//showing as a title
        setmonthNumber(month + monthCount)//which month data is showing
        const result = [];



        for (let day = 2; day <= daysInMonth; day++) {
            const current = new Date(year, month + monthCount - 1, day);
            const dayName = current.toLocaleDateString('en-US', { weekday: 'short' });
            // e.g., Monday, Tuesday

            result.push({
                dayName,
                date: current.toISOString().split('T')[0] // YYYY-MM-DD
            });
        }

        setallTheScedule(result as any)
        return result;
    }

    useEffect(() => {
        //  console.log(user, selectedReperentativeId);
        getMonthDays()
    }, [monthCount]);


    // if (!user?.email) return <Redirect href="/login/1" />

    // useEffect(() => {
    //   if(!user?.email) {
    //     router.replace("/login/1")
    //   }
    // }, [isFocused]);

    return (<>
        <View className="flex-1 p-4">

            <View className=''>
                {/* <Story /> */}
            </View>

            <ScrollView>
                {/* Calender */}

                <View className=" py-6">
                    <View className="flex-row justify-center items-center mb-5 px-4">

                        <View className="flex-row justify-center items-end">
                            <TouchableOpacity onPress={() => setmonthCount(prev => prev - 1)} className="mr-5">
                                <Ionicons name='chevron-back' size={24} color={'#000'} />
                            </TouchableOpacity>
                            <Text className="font-semibold text-[22px]">{moment(selectedDateTitle).format('MMMM, YYYY')}</Text>
                            <TouchableOpacity className='ml-5' onPress={() => setmonthCount(prev => prev + 1)}>
                                <Ionicons name='chevron-forward' size={24} color={'#000'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="flex-row pb-4 justify-between">
                        {allTheScedule && allTheScedule.map((d: any, index) => (
                            <TouchableOpacity
                                // disabled={Number(todaysDate) >= Number(d.date.split('-')[2]) && currentMonth === monthNumber}
                                style={{ elevation: 3 }}
                                key={index}
                                onPress={() => setSelectedDate(d?.date)}
                                className={`items-center p-4 mx-1 py-5 rounded-full 
      
                ${selectedDate === d.date
                                        ? 'estonBlue_bg'
                                        : 'bg-gray-100'
                                    }`}
                            >

                                <Text
                                    className={`mb-1 p-3  rounded-full font-semibold ${selectedDate === d.date
                                        ? 'text-black bg-white'
                                        : 'text-gray-600 bg-gray-200'
                                        }`}
                                >
                                    {d.date.split('-')[2]}
                                </Text>

                                <Text
                                    className={`${selectedDate === d.date
                                        ? 'text-white'
                                        : 'text-gray-700'
                                        }`}
                                >
                                    {d?.dayName}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Main Body */}
                {/* <View className='flex-1'>
                    <Posts />
                </View> */}
            </ScrollView>




        </View>
        {/* <MainNav screen={"emotional"} /> */}
    </>
    );
};

export default HomeScreen;
