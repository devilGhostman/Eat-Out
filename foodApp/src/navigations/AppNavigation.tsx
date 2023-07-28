import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import Loader from '../components/Loading/Loader';

import {useDispatch, useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

const AppNavigation = () => {
  const {isLoading, isError, user, token} = useSelector(
    (state: any) => state.user,
  );

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      {token === null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default AppNavigation;
