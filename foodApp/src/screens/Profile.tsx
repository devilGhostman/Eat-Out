import {
  View,
  Text,
  StatusBar,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../app/slices/user';

const Profile = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {user} = useSelector((state: any) => state.user);
  console.log(user);
  return (
    <ScrollView
      className="flex-1 bg-lightBg dark:bg-darkBg"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 10,
      }}>
      <StatusBar />
      {/* Header Section */}
      <View className="relative py-5 ">
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
            Account
          </Text>
        </View>
      </View>
      {/* Profile */}
      <View
        className="mx-5 mt-4 px-5 py-4 bg-lightBg dark:dark:bg-[#ffffff13] rounded-xl flex-row justify-start items-center"
        style={{elevation: 4}}>
        <Image
          source={{uri: user.userPicture}}
          style={{height: 50, width: 50, borderRadius: 25}}
        />
        <View className="ml-4">
          <Text className="text-lightText dark:text-darkText font-bold text-[20px]">
            {user.userName}
          </Text>
          <Text className="text-lightSecText dark:text-darkSecText font-medium text-[15px]">
            {user.email}
          </Text>
        </View>
      </View>
      {/* Menu */}
      <View
        className="mx-5 mt-4 py-4 flex-row justify-between bg-lightBg dark:dark:bg-[#ffffff13] rounded-xl"
        style={{elevation: 4}}>
        <Pressable className="flex-1 items-center">
          <View className="w-9 h-9 justify-center items-center rounded-[32px] bg-[#56f50d77]">
            <MaterialCommunityIcons
              name="truck-fast-outline"
              size={22}
              color={'#56f50d'}
            />
          </View>
          <Text className="text-center mt-1 font-normal text-lightSecText dark:text-darkSecText">
            My All {'\n'}Orders
          </Text>
        </Pressable>
        <Pressable className="flex-1 items-center">
          <View className="w-9 h-9 justify-center items-center rounded-[32px] bg-[#f50d0d57]">
            <MaterialCommunityIcons name="gift" size={22} color={'red'} />
          </View>
          <Text className="text-center mt-1 font-normal text-lightSecText dark:text-darkSecText">
            Offers {'&\n'} Promos
          </Text>
        </Pressable>
        <Pressable className="flex-1 items-center">
          <View className="w-9 h-9 justify-center items-center rounded-[32px] bg-[#f5a40d83]">
            <IoniconsIcon name="location" size={22} color={'orange'} />
          </View>
          <Text className="text-center mt-1 font-normal text-lightSecText dark:text-darkSecText">
            Delivery {'\n'} Addresses
          </Text>
        </Pressable>
      </View>

      {/* Account Section */}
      <View
        className="mx-5 mt-4 px-5 pb-4 bg-lightBg dark:dark:bg-[#ffffff13] rounded-xl mb-20"
        style={{elevation: 4}}>
        {/* First row */}
        <Text className="mt-5 font-semibold text-[14px] text-lightText dark:text-darkText">
          My Account
        </Text>
        <Pressable className="flex-row items-center justify-between mt-4">
          <View className="flex-row items-center">
            <IoniconsIcon name="person-outline" size={18} color={'#FB923C'} />
            <Text className="text-[13px] text-lightSecText dark:text-darkSecText font-medium ml-2">
              Manage Profile
            </Text>
          </View>
          <FeatherIcon name="chevron-right" color={'#FB923C'} size={20} />
        </Pressable>
        <Pressable className="flex-row items-center justify-between mt-4">
          <View className="flex-row items-center">
            <IoniconsIcon name="card-outline" size={18} color={'#FB923C'} />
            <Text className="text-[13px] text-lightSecText dark:text-darkSecText font-medium ml-2">
              Manage Payment
            </Text>
          </View>
          <FeatherIcon name="chevron-right" color={'#FB923C'} size={20} />
        </Pressable>
        {/* Second Row */}
        <Text className="mt-5 font-semibold text-[14px] text-lightText dark:text-darkText">
          Notification
        </Text>
        <Pressable className="flex-row items-center justify-between mt-4">
          <View className="flex-row items-center">
            <FeatherIcon name="bell" size={18} color={'#FB923C'} />
            <Text className="text-[13px] text-lightSecText dark:text-darkSecText font-medium ml-2">
              Notification
            </Text>
          </View>
          <FeatherIcon name="chevron-right" color={'#FB923C'} size={20} />
        </Pressable>
        <Pressable className="flex-row items-center justify-between mt-4">
          <View className="flex-row items-center">
            <FeatherIcon name="bell" size={18} color={'#FB923C'} />
            <Text className="text-[13px] text-lightSecText dark:text-darkSecText font-medium ml-2">
              Promos & Offers Notification
            </Text>
          </View>
          <FeatherIcon name="chevron-right" color={'#FB923C'} size={20} />
        </Pressable>
        {/* Third Row */}
        <Text className="mt-5 font-semibold text-[14px] text-lightText dark:text-darkText">
          More
        </Text>
        <Pressable
          onPress={() => {
            dispatch(logout());
          }}
          className="flex-row items-center justify-between mt-4">
          <View className="flex-row items-center">
            <FeatherIcon name="log-out" size={18} color={'#FB923C'} />
            <Text className="text-[13px] text-lightSecText dark:text-darkSecText font-medium ml-2">
              Log Out
            </Text>
          </View>
          <FeatherIcon name="chevron-right" color={'#FB923C'} size={20} />
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Profile;
