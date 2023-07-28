import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {useSelector, useDispatch} from 'react-redux';
import {
  addItem,
  removeItem,
} from '../../app/slices/favourite';

type details = {
  id: string;
  name: string;
  description: string;
  rating: string;
  address: string;
  imgUrl: string;
};

const ResturantCard = ({
  id,
  name,
  description,
  rating,
  address,
  imgUrl,
}: details) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favItems = useSelector((state: any) => state.favourite.favItem);

  const isFav = favItems.some((item: {id: string}) => {
    return item.id == id;
  });
  return (
    <Pressable
      onPress={() => navigation.navigate('Details', {id})}
      className="">
      <View
        style={{elevation: 10}}
        className="mr-4 p-2 bg-lightBg dark:bg-darkTheme rounded-3xl shadow-md shadow-lightShadow dark:shadow-darkBg dark:border dark:border-[#ffffff2f] my-2">
        <Image
          className="h-36 w-64 rounded-3xl object-cover"
          source={{uri: imgUrl}}
        />

        <View className="px-3 pb-4 space-y-2">
          <View className="flex-row pt-2 items-center justify-between">
            <Text className="text-lg font-bold  text-lightText dark:text-darkText">
              {name}
            </Text>
            {isFav ? (
              <Pressable
                onPress={() => dispatch(removeItem(id))}
                style={{elevation: 15}}
                className="absolute top-1 right-1 bg-lightBg dark:bg-darkTheme p-2 rounded-full shadow">
                <FontAwesomeIcon name="heart" size={24} color="red" />
              </Pressable>
            ) : (
              <Pressable
                onPress={() =>
                  dispatch(
                    addItem({
                      id,
                      name,
                      description,
                      rating,
                      address,
                      picture: imgUrl,
                    }),
                  )
                }
                style={{elevation: 15}}
                className="absolute top-1 right-1 1g-lightBg dark:bg-darkTheme p-2 rounded-full shadow">
                <FontAwesomeIcon name="heart-o" size={24} color="red" />
              </Pressable>
            )}
          </View>
          <View className="flex-row items-center space-x-1">
            <FontAwesomeIcon name="star" size={20} color="#fac849" />
            <Text className="text-green-700 text-xs">{rating}</Text>
            <Text className="text-lightSecText dark:text-darkSecText text-xs">
              ({Math.floor(Math.random() * 100)} review)
            </Text>
          </View>
          <View>
            <Text className="font-semibold text-lightSecText dark:text-darkSecText">
              {description}
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
