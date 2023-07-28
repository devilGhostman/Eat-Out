import {View, Text, Pressable, ScrollView, FlatList} from 'react-native';
import React from 'react';
import ResturantCard from './ResturantCard';

const ResturantsList = ({title,description,resturants}: any) => {
  return (
    <View className='mt-5'>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg text-lightText dark:text-darkText">
            {title}
          </Text>
          <Text className="text-xs text-lightSecText dark:text-darkSecText">
            {description}
          </Text>
        </View>

        <Pressable>
          <Text className="font-semibold text-lightTheme">See All</Text>
        </Pressable>
      </View>
      {resturants && (
        <FlatList
          data={resturants}
          keyExtractor={(resturants, index: any) => index}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <ResturantCard
              id={item.id}
              name={item.name}
              description={item.description}
              rating={item.rating}
              address={item.location}
              imgUrl={item.backdrop}
            />
          )}
        />
      )}
    </View>
  );
};

export default ResturantsList;
