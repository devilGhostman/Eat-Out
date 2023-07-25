import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Category from '../components/Category/Category';
import ResturantsList from '../components/Resturant/ResturantsList';
import Offers from '../components/Swiper/Offers';

import FeatherIcon from 'react-native-vector-icons/Feather';
import {fetchResturants} from '../api/apiCall';

const Home = ({navigation}: any) => {
  const [resturants, setResturants] = useState([]);
  const [loading, setLoading] = useState(true);

  const getResturants = async () => {
    const data = await fetchResturants();
    if (data) {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getResturants();
  }, []);

  return (
    <SafeAreaView className="bg-lightBg dark:bg-darkBg">
      <StatusBar />
      {/* Main Section */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 80,
        }}>
        {/* Header Section */}
        <View className="flex-row justify-between px-4 items-center mt-5">
          <View>
            <View className="flex-row justify-start items-center">
              <Text className="text-[28px]">Hello,</Text>
              <Text className="text-[28px] font-bold ml-2">User</Text>
            </View>
            <Text
              className=" text-[22px] text-lightText dark:text-darkText
            ">
              What do you wanna try today
            </Text>
          </View>
          <Image
            source={require('../assets/category.png')}
            style={{height: 50, width: 50, borderRadius: 25}}
          />
        </View>
        {/* Search Section */}
        <View className="flex-row items-center justify-center w-full space-x-2 px-4 pb-2 my-2">
          <Pressable
            onPress={() => navigation.navigate('Search')}
            className="flex-1">
            <View className="flex-row flex-1 items-center px-3 py-4 rounded-lg border border-gray-300">
              <FeatherIcon name="search" size={20} color="grey" />
              <Text
                // placeholder="Resturants"
                // keyboardType="default"
                className="ml-2 flex-1">
                Resturants
              </Text>
              <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                <FeatherIcon name="map-pin" size={20} color="grey" />
                <Text className="text-lightSecText dark:text-darkSecText">
                  New Delhi, IND
                </Text>
              </View>
            </View>
          </Pressable>
          <View className="p-3 rounded-full bg-lightTheme ">
            <FeatherIcon
              name="sliders"
              size={20}
              color="white"
              // onPress={navigation.navigate('')}
            />
          </View>
        </View>
        {/* Banner Section */}
        <Offers />
        {/* Category Section */}
        <Category />
        {/* Resturants List */}
        <ResturantsList />
        <ResturantsList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
