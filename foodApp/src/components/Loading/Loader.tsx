import {View, Text, Image} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View className="flex-1 h-full">
      <Image
        source={require('../../assets/gifs/loading.gif')}
        className="w-full h-full object-cover"
      />
    </View>
  );
};

export default Loader;
