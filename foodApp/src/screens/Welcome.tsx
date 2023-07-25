import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import CustomButton from '../components/Button/CustomButton';

const Welcome = () => {
  return (
    <View className="flex bg-[#313639]">
      {/* <Image
        source={require('../assets/images/welcome.jpg')}
        className=" w-full object-cover"
      />
      <View className="absolute bottom-4 left-[50%] w-[80%]">
        <View className="rounded-md bg-[#00000056] dark:bg-darkBg  relative left-[-50%]">
          <View className=" px-5 py-5 ">
            <Text className="text-[40px] font-bold text-lightText dark:text-darkText">
              What speal Meal Today ? 
            </Text>

            <CustomButton text={'Login'} />
          </View>
        </View>
      </View> */}

      <View className="w-full h-2/6 items-center justify-center">
        <Image
          source={require('../assets/banner/banner1.jpeg')}
          className="w-1/2 h-[100px]"
        />
      </View>
      <View className="w-full h-3/6 items-center">
        <Image
          source={require('../assets/banner/banner1.jpeg')}
          className="h-full w-4/5 rounded-3xl"
        />
      </View>
      <View className="w-full h-1/6 items-center">
        <Text> What speal Meal Today ? </Text>
        <CustomButton text={'Login'} />
      </View>
    </View>
  );
};

export default Welcome;
