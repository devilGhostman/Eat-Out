import {View, Text, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text}: any) => {
  return (
    <View
      style={{elevation: 4}}
      className="w-full my-3 bg-lightTheme justify-center items-center rounded-md shadow-lg shadow-lightTheme">
      <Pressable onPress={onPress} className="w-full p-4 ">
        <Text className="font-semibold text-[#ffffff] text-center">{text}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;
