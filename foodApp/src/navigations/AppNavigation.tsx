import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack />
      {/* <AuthStack/> */}
    </NavigationContainer>
  );
};

export default AppNavigation;
