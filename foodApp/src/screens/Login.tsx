import {View, Text, SafeAreaView, Pressable, Image} from 'react-native';
import React, {useEffect} from 'react';

import InputField from '../components/Input/InputField';
import CustomButton from '../components/Button/CustomButton';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {loginHandler} from '../app/slices/user';

const Login = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {isLoading, isError, user, token} = useSelector(
    (state: any) => state.user,
  );

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors, isSubmitSuccessful},
  } = useForm<{email: string; password: string}>();

  const onSignIn = (data: {email: string; password: string}) => {
    loginHandler(dispatch, data);
  };

  const onSignInTestUser = () => {
    loginHandler(dispatch, {email: 'test@gmail.com', password: 'test@1234'});
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <SafeAreaView className="flex-1 justify-center bg-lightBg dark:bg-darkBg">
      <View className="px-6">
        <View className="h-[150px] w-[95%]  flex-row items-center justify-center">
          <Image
            source={require('../assets/images/logo2.png')}
            className="h-[100%] w-[100%]"
          />
        </View>
        <Text className="text-[28px] font-bold mt-2 mb-4 text-lightText dark:text-darkText">
          Login
        </Text>
        <InputField
          icon={
            <MaterialIcons
              name="person"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          name="email"
          control={control}
          placeholder="Enter Your email"
          secureTextEntry={false}
          rules={{
            required: 'Email is required',
          }}
        />
        <InputField
          icon={
            <Ionicons
              name="lock-closed"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          name="password"
          control={control}
          placeholder="Enter Your Password"
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be of 8 character long.',
            },
          }}
        />
        {isError && (
          <Text className="font-medium text-red-500 text-center">
            Invalid Credential
          </Text>
        )}
        <CustomButton onPress={handleSubmit(onSignIn)} text={'Sign In'} />
        <CustomButton onPress={onSignInTestUser} text={'Sign In As TestUser'} />

        <View className="flex-row justify-center items-center mt-6">
          <Text className="text-lightText dark:text-darkText">
            Dont have account?
          </Text>
          <Pressable
            className="ml-2"
            onPress={() => navigation.navigate('Register')}>
            <Text className="font-medium text-lightTheme">Register here</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
