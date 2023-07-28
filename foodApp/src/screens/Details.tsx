import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  StatusBar,
  FlatList,
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import MenuCard from '../components/Menu/MenuCard';
import Cart from '../components/Cart/Cart';
import Loader from '../components/Loading/Loader';

import {fetchResturantsByID} from '../api/apiCall';
import {useSelector, useDispatch} from 'react-redux';
import {addItem, removeItem, resetfavlist} from '../app/slices/favourite';

type resturantType = {
  name: string;
  description: string;
  rating: string;
  location: string;
  picture: string;
  backdrop: string;
  menu: [];
};

type menuType = {
  id: string;
  dishname: string;
  dishrating: string;
  dishPrice: string;
};

const Details = ({navigation, route}: any) => {
  const resturantId = route.params.id;
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.cartItem);
  const favItems = useSelector((state: any) => state.favourite.favItem);

  const isFav = favItems.some((item: {id: string}) => {
    return item.id == resturantId;
  });

  const [resturant, setResturant] = useState<resturantType>();
  const [loading, setLoading] = useState(true);

  const getResturant = async () => {
    const data = await fetchResturantsByID(resturantId);
    if (data) {
      setResturant(data.resturant);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getResturant();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <View>
      {/* Cart */}
      {cart.length > 0 && <Cart />}
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        className="bg-lightBg dark:bg-darkBg"
        showsVerticalScrollIndicator={false}>
        {/* Banner Section */}
        <View className="relative">
          <Image className="w-full h-72" source={{uri: resturant?.backdrop}} />
          <Pressable
            onPress={() => navigation.goBack()}
            style={{elevation: 15}}
            className="absolute top-6 left-4 bg-lightBg dark:bg-darkTheme p-2 rounded-full shadow">
            <FeatherIcon name="arrow-left" size={30} color={'#FB923C'} />
          </Pressable>
          {isFav ? (
            <Pressable
              onPress={() => dispatch(removeItem(resturantId))}
              style={{elevation: 15}}
              className="absolute top-6 right-4 bg-lightBg dark:bg-darkTheme p-2 rounded-full shadow">
              <FontAwesomeIcon name="heart" size={28} color="red" />
            </Pressable>
          ) : (
            <Pressable
              onPress={() =>
                dispatch(
                  addItem({
                    id: resturantId,
                    name: resturant?.name,
                    description: resturant?.description,
                    rating: resturant?.rating,
                    picture: resturant?.picture,
                    address: resturant?.location,
                  }),
                )
              }
              style={{elevation: 15}}
              className="absolute top-6 right-4 bg-lightBg dark:bg-darkTheme p-2 rounded-full shadow">
              <FontAwesomeIcon name="heart-o" size={28} color="red" />
            </Pressable>
          )}
        </View>
        {/* Details Section*/}
        <View
          style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
          className="bg-lightBg dark:bg-darkTheme -mt-12 pt-4 flex-row items-center space-x-6 px-4">
          <Image
            className="w-28 h-28 mt-4 rounded-2xl"
            source={{uri: resturant?.picture}}
          />
          <View className=" py-4 space-y-2 ">
            <View className="flex-row items-center justify-between">
              <Text className="text-lg font-bold  text-lightText dark:text-darkText">
                {resturant?.name}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <FontAwesomeIcon name="star" size={20} color="#fac849" />
              <Text className="text-green-700 text-xs">
                {resturant?.rating}
              </Text>
              <Text className="text-lightSecText dark:text-darkSecText text-xs">
                ({Math.floor(Math.random() * 100)} review)
              </Text>
            </View>
            <View>
              <Text className="font-semibold text-lightSecText dark:text-darkSecText">
                {resturant?.description}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <FeatherIcon name="map-pin" size={15} color="grey" />
              <Text className="text-lightSecText dark:text-darkSecText text-xs">
                Nearby · {resturant?.location}
              </Text>
            </View>
          </View>
        </View>
        {/* Menu Section */}
        <View className="pb-20 bg-lightBg dark:bg-darkTheme">
          <Text className="px-4 py-4 text-2xl font-bold text-lightText dark:text-darkText">
            Menu
          </Text>
          <FlatList
            data={resturant?.menu}
            keyExtractor={(dish: menuType, index: any) => index}
            renderItem={({item}: any) => (
              <MenuCard
                key={item.id}
                id={item.id}
                name={item.dishName}
                rating={item.dishRating}
                imgUrl={item.dishPic}
                price={item.dishPrice}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
