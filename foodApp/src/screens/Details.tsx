import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  StatusBar,
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';

import MenuCard from '../components/Menu/MenuCard';
import Cart from '../components/Cart/Cart';

const menu = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];

const Details = ({navigation}: any) => {
  return (
    <View>
      {/* Cart */}
      <Cart />
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        className="bg-lightBg dark:bg-darkBg"
        showsVerticalScrollIndicator={false}>
        {/* Banner Section */}
        <View className="relative">
          <Image
            className="w-full h-72"
            source={require('../assets/banner/banner2.jpg')}
          />
          <Pressable
            onPress={() => navigation.goBack()}
            style={{elevation: 15}}
            className="absolute top-6 left-4 bg-lightBg dark:bg-darkTheme p-2 rounded-full shadow">
            <FeatherIcon name="arrow-left" size={30} color={'#FB923C'} />
          </Pressable>
        </View>
        {/* Details Section*/}
        <View
          style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
          className="bg-lightBg dark:bg-darkTheme -mt-12 pt-6">
          <View className="px-5">
            <Text className="text-3xl font-bold text-lightText dark:text-darkText">
              title
            </Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                {/* <Image
                source={require('../assets/images/fullStar.png')}
                className="h-4 w-4"
              /> */}
                <Text className="text-xs">
                  <Text className="text-green-700">rating</Text>
                  <Text className="text-lightSecText dark:text-darkSecText">
                    (4.6k review)
                  </Text>
                  <Text className="font-semibold text-lightSecText dark:text-darkSecText">
                    type
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <FeatherIcon name="map-pin" size={15} color="grey" />
                <Text className="text-lightSecText dark:text-darkSecText text-xs">
                  Nearby · address
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">description</Text>
          </View>
        </View>
        {/* Menu Section */}
        <View className="pb-20 bg-lightBg dark:bg-darkTheme">
          <Text className="px-4 py-4 text-2xl font-bold text-lightText dark:text-darkText">
            Menu
          </Text>
          {menu.map(dish => {
            return <MenuCard key={dish.id} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
