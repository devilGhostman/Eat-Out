import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';
import Card from '../components/SearchCard/Card';

const Favourite = ({navigation}: any) => {
  return (
    <SafeAreaView className="bg-lightBg dark:bg-darkBg">
      {/* Header Section */}
      <View className="relative py-5 ">
        <View
          style={{elevation: 15}}
          className="absolute z-20 top-4 left-4 bg-lightBg dark:bg-darkTheme p-2 rounded-full shadow-lg shadow-lightShadow ">
          <FeatherIcon
            name="arrow-left"
            size={30}
            color={'#FB923C'}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View>
          <Text className="text-center font-bold text-xl text-lightText dark:text-darkText">
            Favourites
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        className="h-full w-full mt-4">
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favourite;
