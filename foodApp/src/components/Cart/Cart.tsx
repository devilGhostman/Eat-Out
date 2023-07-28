import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {useSelector, useDispatch} from 'react-redux';

const Cart = () => {
  const navigation = useNavigation();
  const cart = useSelector((state: any) => state.cart.cartItem);
  //   const cart2 = useSelector((state: any) => state.cart);
  // console.log(cart2)
  const totalPrice = () => {
    let total = 0;
    let totalQuantity = 0;
    cart.forEach((item: {quantity: number; price: number}) => {
      total += item.quantity * item.price;
      totalQuantity += item.quantity;
    });
    return {total, totalQuantity};
  };

  return (
    <View className="absolute bottom-3 w-full z-50">
      <Pressable
        onPress={() => navigation.navigate('Cart')}
        className="flex-row justify-between items-center bg-lightTheme mx-5 rounded-full p-4 py-3 shadow-lg  ">
        <View
          className="p-2 px-4 rounded-full"
          style={{backgroundColor: 'rgba(255,255,255,0.3)'}}>
          <Text className="font-extrabold text-darkText text-lg">
            {totalPrice().totalQuantity}
          </Text>
        </View>

        <Text className="flex-1 text-center font-extrabold text-darkText text-lg">
          View Cart
        </Text>
        <Text className="font-extrabold text-darkText text-lg">
          ₹ {totalPrice().total}
        </Text>
      </Pressable>
    </View>
  );
};

export default Cart;
