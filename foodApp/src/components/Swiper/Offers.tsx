import {View, Text, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';

const Offers = () => {
  return (
    <View className="h-[230px] w-full flex justify-center items-center">
      <Swiper autoplay height={230} activeDotColor="#FB923C">
        <View className="flex-1 justify-center ">
          <Image
            source={require('../../assets/banner/banner1.jpeg')}
            resizeMode="cover"
            className="h-full w-full self-center"
          />
        </View>
        <View className="flex-1 justify-center ">
          <Image
            source={require('../../assets/banner/banner2.jpg')}
            resizeMode="cover"
            className="h-full w-full self-center"
          />
        </View>
        <View className="flex-1 justify-center ">
          <Image
            source={require('../../assets/banner/banner3.jpg')}
            resizeMode="cover"
            className="h-full w-full self-center"
          />
        </View>
      </Swiper>
    </View>
  );
};

export default Offers;
