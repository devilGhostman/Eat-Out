import React from 'react';
import Lottie from 'lottie-react-native';
import {Appearance} from 'react-native';

const Loading = () => {
  const colorScheme = Appearance.getColorScheme();
  return (
    <>
      <Lottie
        source={require('../../assets/animation/food.json')}
        autoPlay
        loop
        style={{
          backgroundColor: colorScheme === 'dark' ? '#000000' : '#ffffff',
        }}
      />
    </>
  );
};

export default Loading;
