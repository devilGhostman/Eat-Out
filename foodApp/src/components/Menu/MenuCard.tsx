import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {useSelector, useDispatch} from 'react-redux';
import {addItem, removeItem} from '../../app/slices/cart';

type dishType = {
  id: string;
  name: string;
  rating: string;
  imgUrl: string;
  price: string;
};

const MenuCard = ({id, name, rating, imgUrl, price}: dishType) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.cartItem);
  const cartItem = cart.find((item: {id: string}) => item.id == id);

  return (
    <View
      style={{elevation: 10}}
      className="flex-row items-center bg-lightBg dark:bg-darkTheme p-3 rounded-3xl shadow-2xl mb-3 mx-2 shadow-lightShadow dark:shadow-darkBg dark:border dark:border-[#ffffff2f]">
      <Image
        className="rounded-2xl "
        style={{height: 100, width: 100}}
        source={{uri: imgUrl}}
      />
      <View className="flex flex-1 ">
        <View className="pl-3 space-y-1">
          <Text className="text-xl text-lightText dark:text-darkText">
            {name}
          </Text>
          <View className="flex-row space-x-2">
            <FontAwesomeIcon name="star" size={20} color="#fac849" />
            <Text className="text-lightSecText dark:text-darkSecText">
              {rating}
            </Text>
          </View>
          <Text className="text-lightSecText dark:text-darkSecText text-xs">
            ({Math.floor(Math.random() * 100)} review)
          </Text>
        </View>
        <View className="flex-row pl-3 justify-between items-center">
          <Text className="text-lightText dark:text-darkText text-lg font-bold">
            ₹ {price}
          </Text>
          <View className="flex-row items-center">
            {cartItem !== undefined && cartItem.quantity > 0 ? (
              <Pressable
                onPress={() => {
                  dispatch(removeItem(id));
                }}
                className="p-1 rounded-full bg-lightTheme ">
                <FeatherIcon name="minus" size={20} color="white" />
              </Pressable>
            ) : (
              <Pressable
                // onPress={() => {
                //   dispatch(removeItem(id));
                // }}
                className="p-1 rounded-full bg-lightTheme ">
                <FeatherIcon name="minus" size={20} color="white" />
              </Pressable>
            )}
            {cartItem === undefined ? (
              <Text className="px-3">0</Text>
            ) : (
              <Text className="px-3">{cartItem.quantity}</Text>
            )}

            <Pressable
              onPress={() => {
                dispatch(
                  addItem({
                    id,
                    name,
                    imgUrl,
                    price,
                    quantity: 1,
                  }),
                );
              }}
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
