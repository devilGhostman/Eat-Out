import React from 'react';
import {View, Text, Pressable, Image, ScrollView} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';

const CartScreen = ({navigation}: any) => {
  return (
    <View className="dark:bg-darkBg">
      {/* Navigation section */}
      <View className="relative py-4 shadow-sm ">
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
            Your cart
          </Text>
          <Text className="text-center text-lightSecText dark:text-darkSecText">
            title
          </Text>
        </View>
      </View>
      {/* Delivery Section */}
      <View className="flex-row px-4 items-center bg-lightSecTheme">
        <Image
          source={require('../assets/gifs/food.gif')}
          className="w-12 h-12 "
        />
        <Text className="flex-1 pl-4 dark:text-lightText text-lightText">
          Deliver in 20-30 minutes
        </Text>
        <Pressable>
          <Text className="font-bold text-lightTheme">Change</Text>
        </Pressable>
      </View>
      {/* Items Section */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-lightBg dark:bg-[#ffffff13] pt-5 h-[50%]"
        contentContainerStyle={{
          paddingBottom: 10,
        }}>
        <View className="flex-row items-center space-x-2 py-2 px-4 bg-lightBg dark:bg-[#ffffff2f] rounded-3xl mx-2 mb-3 shadow-md">
          <Text className="font-bold text-lightTheme">2</Text>
          <Text className="font-bold text-lightTheme">X</Text>

          <Image
            className="h-14 w-14 rounded-full"
            source={require('../assets/category.png')}
          />
          <Text className="flex-1 font-bold text-lightText dark:text-darkText">
            name
          </Text>
          <Text className="font-semibold text-base">₹ Price</Text>
          <Pressable
            onPress={() => {
              console.log('sd');
            }}
            className="p-1 rounded-full bg-lightTheme ">
            <FeatherIcon name="minus" size={20} color="white" />
          </Pressable>
        </View>
      </ScrollView>
      {/* Total Section */}
      <View className=" p-6 px-8 rounded-t-3xl space-y-4">
        <View className="flex-row justify-between">
          <Text className="text-lightSecText dark:text-darkSecText">
            Subtotal
          </Text>
          <Text className="text-lightText dark:text-darkText">
            ₹ basketTotal
          </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-lightSecText dark:text-darkSecText">
            Delivery Fee
          </Text>
          <Text className="text-lightText dark:text-darkText">
            ₹ deliveryFee
          </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="font-extrabold text-lightText dark:text-darkText">
            Order Total
          </Text>
          <Text className="font-extrabold text-lightText dark:text-darkText">
            ₹ basketTotal + deliveryFee
          </Text>
        </View>
        <View>
          <Pressable
            onPress={() => navigation.navigate('Delivery')}
            className="p-3 rounded-full bg-lightTheme">
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
