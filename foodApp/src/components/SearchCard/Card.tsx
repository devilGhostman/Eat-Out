import React from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const Card = () => {
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
        className="flex-row items-center bg-lightBg dark:bg-darkTheme p-3 rounded-3xl shadow-2xl mb-3 mx-2 shadow-lightShadow dark:shadow-darkBg dark:border dark:border-[#ffffff2f]">
        <Image
          className="rounded-2xl"
          style={{height: 100, width: 100}}
          source={require('../../assets/banner/banner1.jpeg')}
        />
        <View className="flex flex-1 space-y-3 px-2">
          <View className="flex-row  items-center justify-between">
            <Text className="text-lg font-bold  text-lightText dark:text-darkText">
              name
            </Text>
            <FontAwesomeIcon name="bookmark" size={22} color="red" />
          </View>
          <View className="flex-row items-center space-x-1">
            {/* <Image
              source={require('../assets/images/fullStar.png')}
              className="h-4 w-4"
            /> */}
            <Text className="text-xs">
              <Text className="text-green-700">rating</Text>
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
              Nearby · address
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;
