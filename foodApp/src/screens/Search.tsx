import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';
import Card from '../components/SearchCard/Card';

const Search = ({navigation}: any) => {
  return (
    <SafeAreaView className="bg-lightBg dark:bg-darkBg">
      <StatusBar />
      <View className="flex-row items-center justify-center w-full space-x-2 px-4 my-3">
        <View
          style={{elevation: 15}}
          className=" rounded-full bg-lightBg dark:bg-darkTheme p-2 shadow-lg shadow-lightShadow">
          <FeatherIcon
            name="arrow-left"
            size={30}
            color={'#FB923C'}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View className="flex-row flex-1 items-center px-3 py-1 rounded-lg border border-gray-300">
          <FeatherIcon name="search" size={20} color="grey" />
          <TextInput
            placeholder="Resturants"
            className="ml-2 flex-1"
            keyboardType="default"
          />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <FeatherIcon name="map-pin" size={20} color="grey" />
            <Text className="text-lightSecText dark:text-darkSecText">
              New Delhi, IND
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row items-center justify-start w-full px-6 my-2">
        <Text className=" text-[20px] font-bold text-lightText dark:text-darkText">
          Near By Resturants
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        className="h-full w-full">
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
