import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  Pressable,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import Loader from '../components/Loading/Loader';

import FeatherIcon from 'react-native-vector-icons/Feather';
import Card from '../components/SearchCard/Card';
import {fetchResturantBySearch} from '../api/apiCall';

const Search = ({navigation}: any) => {
  const [resturantName, setresturantName] = useState('');
  const [resturants, setResturants] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchInputRef = useRef<TextInput>(null);

  const handleSearch = (resturantName: string) => {
    if (resturantName && resturantName.length > 1) {
      setLoading(true);
      fetchResturantBySearch(resturantName).then(data => {
        if (data) setResturants(data.resturants);
        setLoading(false);
      });
    } else {
      setResturants([]);
    }
  };
  useEffect(() => {
    handleSearch(resturantName);
  }, [resturantName]);

  const focusSearchInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  useEffect(() => {
    focusSearchInput();
  }, []);

  // console.log(resturantName);
  // console.log(resturants);
  // console.log(resturants.length);

  return (
    <SafeAreaView className="bg-lightBg dark:bg-darkBg h-full">
      <StatusBar />
      <View className="flex-row items-center justify-center w-full space-x-2 px-4 my-3">
        <View
          style={{elevation: 15}}
          className=" rounded-full bg-lightBg dark:bg-darkTheme p-2 shadow-lg shadow-lightShadow">
          <FeatherIcon
            name="arrow-left"
            size={30}
            color={'#FB923C'}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View className="flex-row flex-1 items-center px-3 py-1 rounded-lg border border-gray-300">
          <FeatherIcon name="search" size={20} color="grey" />
          <TextInput
            ref={searchInputRef}
            placeholder="Resturants"
            className="ml-2 flex-1"
            keyboardType="default"
            onChangeText={text => {
              setresturantName(text);
            }}
            value={resturantName}
          />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <FeatherIcon name="map-pin" size={20} color="grey" />
            <Text className="text-lightSecText dark:text-darkSecText">
              New Delhi, IND
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row items-center justify-start w-full px-6 my-2">
        <Text className=" text-[20px] font-bold text-lightText dark:text-darkText">
          Near By Resturants
        </Text>
      </View>
      {resturants.length > 0 && (
        <View className="bg-lightBg h-full">
          <FlatList
            data={resturants}
            showsVerticalScrollIndicator={false}
            keyExtractor={(resturants, index: any) => index}
            renderItem={({item}) => <Card data={item} />}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Search;
