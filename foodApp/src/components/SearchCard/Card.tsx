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

import {useSelector, useDispatch} from 'react-redux';
import {addItem, removeItem} from '../../app/slices/favourite';

const {width} = Dimensions.get('screen');
const cardWidth = width - 12;

const Card = ({data}: any) => {
  // console.log(data);
  const navigation = useNavigation();
  const id = data?.id;
  const dispatch = useDispatch();
  const favItems = useSelector((state: any) => state.favourite.favItem);

  const isFav = favItems.some((item: {id: string}) => {
    return item.id == id;
  });

  return (
    <View className="px-3">
      <Pressable
        onPress={() => navigation.navigate('Details', {id})}
        className="mx-auto"
        style={{width: cardWidth}}>
        <View
          style={{elevation: 10}}
          className="flex-row mr-4 p-2 bg-lightBg dark:bg-darkTheme rounded-3xl shadow-md shadow-lightShadow dark:shadow-darkBg dark:border dark:border-[#ffffff2f] my-2">
          <Image
            className="rounded-2xl mt-1"
            style={{height: 100, width: 100}}
            source={{uri: data.picture}}
          />
          <View className="px-3 pb-2 space-y-1">
            <View className="flex-row pt-2 items-center justify-between">
              <Text className="text-lg font-bold  text-lightText dark:text-darkText">
                {data.name}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <FontAwesomeIcon name="star" size={20} color="#fac849" />
              <Text className="text-green-700 text-xs">{data.rating}</Text>
              <Text className="text-lightSecText dark:text-darkSecText text-xs">
                ({Math.floor(Math.random() * 100)} review)
              </Text>
            </View>
            <View>
              <Text className="font-semibold text-lightSecText dark:text-darkSecText">
                {data.description}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <FeatherIcon name="map-pin" size={15} color="grey" />
              <Text className="text-lightSecText dark:text-darkSecText text-xs">
                Nearby · {data.address}
              </Text>
            </View>
          </View>
          {isFav ? (
            <Pressable
              onPress={() => dispatch(removeItem(id))}
              style={{elevation: 15}}
              className="absolute top-3 right-4 bg-lightBg dark:bg-darkTheme p-2 rounded-full shadow">
              <FontAwesomeIcon name="heart" size={24} color="red" />
            </Pressable>
          ) : (
            <Pressable
              onPress={() =>
                dispatch(
                  addItem({
                    id,
                    name: data.name,
                    description: data.description,
                    rating: data.rating,
                    address: data.location,
                    picture: data.picture,
                  }),
                )
              }
              style={{elevation: 15}}
              className="absolute top-3 right-4 1g-lightBg dark:bg-darkTheme p-2 rounded-full shadow">
              <FontAwesomeIcon name="heart-o" size={24} color="red" />
            </Pressable>
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default Card;
