import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

type details = {
  id: string;
  name: string;
  description: string;
  rating: string;
  address: string;
};

const ResturantCard = ({id, name, description, rating, address}: details) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('Details')}
      className=""
      //   onPress={() => {
      //     navigation.navigate('Resturant', {
      //       id,
      //       title,
      //       imgUrl,
      //       rating,
      //       type,
      //       address,
      //       description,
      //       dishes,
      //       lng,
      //       reviews,
      //       lat,
      //     });
      //   }}
    >
      <View
        style={{elevation: 10}}
        className="mr-4 p-2 bg-lightBg dark:bg-darkTheme rounded-3xl shadow-md shadow-lightShadow dark:shadow-darkBg dark:border dark:border-[#ffffff2f] my-2">
        <Image
          className="h-36 w-64 rounded-3xl "
          source={require('../../assets/banner/banner1.jpeg')}
        />

        <View className="px-3 pb-4 space-y-2">
          <View className="flex-row pt-2 items-center justify-between">
            <Text className="text-lg font-bold  text-lightText dark:text-darkText">
              {name}
            </Text>
            <FontAwesomeIcon name="bookmark" size={22} color="red" />
          </View>
          <View className="flex-row items-center space-x-1">
            {/* <Image
              source={require('../assets/images/fullStar.png')}
              className="h-4 w-4"
            /> */}
            <Text className="text-xs">
              <Text className="text-green-700">{rating}</Text>
              <Text className="text-lightSecText dark:text-darkSecText">
                (reviews review)
              </Text>
              <Text className="font-semibold text-lightSecText dark:text-darkSecText">
                type
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <FeatherIcon name="map-pin" size={15} color="grey" />
            <Text className="text-lightSecText dark:text-darkSecText text-xs">
              Nearby · {address}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ResturantCard;
