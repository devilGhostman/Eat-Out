import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';

const MenuCard = () => {
  return (
    <View
      style={{elevation: 10}}
      className="flex-row items-center bg-lightBg dark:bg-darkTheme p-3 rounded-3xl shadow-2xl mb-3 mx-2 shadow-lightShadow dark:shadow-darkBg dark:border dark:border-[#ffffff2f]">
      <Image
        className="rounded-2xl"
        style={{height: 100, width: 100}}
        source={require('../../assets/banner/banner1.jpeg')}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl text-lightText dark:text-darkText">
            name
          </Text>
          <Text className="text-lightSecText dark:text-darkSecText">description</Text>
        </View>
        <View className="flex-row pl-3 justify-between items-center">
          <Text className="text-lightText dark:text-darkText text-lg font-bold">
            ₹ price
          </Text>
          <View className="flex-row items-center">
            <Pressable
              onPress={() => {}}
              //   disabled={!basketItems.length}
              className="p-1 rounded-full bg-lightTheme ">
              <FeatherIcon name="minus" size={20} color="white" />
            </Pressable>
            <Text className="px-3">4</Text>

            <Pressable
              onPress={() => {}}
              className="p-1 rounded-full bg-lightTheme ">
              <FeatherIcon name="plus" size={20} color="white" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MenuCard;
