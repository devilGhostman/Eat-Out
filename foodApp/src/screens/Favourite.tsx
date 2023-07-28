import {View, Text, SafeAreaView, ScrollView, FlatList} from 'react-native';
import React from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useSelector, useDispatch} from 'react-redux';
import {addItem, isFavourite, removeItem, resetfavlist} from '../app/slices/favourite';
import Card from '../components/SearchCard/Card';

const Favourite = ({navigation}: any) => {
  const dispatch = useDispatch();
  const favItem = useSelector((state: any) => state.favourite);
  // console.log(favItem.favItem);
  return (
    <SafeAreaView className="bg-lightBg dark:bg-darkBg">
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
            Favourites
          </Text>
        </View>
        <View
          style={{elevation: 15}}
          className="absolute z-20 top-4 right-4 bg-lightBg dark:bg-darkTheme p-2 rounded-full shadow-lg shadow-lightShadow ">
          <MaterialIcons
            name="delete"
            size={30}
            color={'red'}
            onPress={() => {
              dispatch(resetfavlist());
            }}
          />
        </View>
      </View>
      <View className="bg-lightBg h-full">
        <FlatList
          data={favItem.favItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index: any) => index}
          renderItem={({item}) => <Card data={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Favourite;
