import {View, Text, Pressable, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Appearance} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';

import Lottie from 'lottie-react-native';
import Loading from '../components/Loading/Loading';

const Delivery = ({navigation}: any) => {
  const colorScheme = Appearance.getColorScheme();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View className="flex-1">
      <Image
        source={require('../assets/gifs/map.gif')}
        className="flex-1 w-full object-cover"
      />
      {/* <Lottie
        source={require('../assets/animation/map.json')}
        autoPlay
        loop
        style={{height: 120, width: "100%",flex:1}}
      /> */}
      <View className="rounded-t-3xl -mt-12 bg-lightBg dark:bg-darkBg relative">
        <Pressable className="absolute right-4 top-2"></Pressable>
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-lightSecText dark:text-darkSecText font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl font-extrabold text-lightText dark:text-darkText">
              20-30 Minutes
            </Text>
            <Text className="mt-2 text-lightSecText dark:text-darkSecText font-semibold">
              Your Order is own its way
            </Text>
          </View>
          {colorScheme !== 'dark' ? (
            <Lottie
              source={require('../assets/animation/delivery2.json')}
              autoPlay
              loop
              style={{height: 120, width: 120}}
            />
          ) : (
            <Image
              source={require('../assets/gifs/delivery.gif')}
              className="w-[120px] h-[120px]"
            />
          )}
        </View>

        <View className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2 bg-lightTheme">
          <View
            style={{backgroundColor: 'rgba(255,255,255,0.4)'}}
            className="p-1 rounded-full">
            <Image
              style={{backgroundColor: 'rgba(255,255,255,0.4)'}}
              className="w-16 h-16 rounded-full"
              source={require('../assets/category.png')}
            />
          </View>

          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Syed Noman</Text>
            <Text className="text-white font-semibold">Your Rider</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <Pressable className="bg-white p-2 rounded-full">
              <FeatherIcon name="phone" size={30} color={'#FB923C'} />
            </Pressable>

            <Pressable
              onPress={() => {
                navigation.navigate('Cart');
              }}
              className="bg-white p-2 rounded-full">
              <FeatherIcon name="x" size={33} color={'red'} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Delivery;
