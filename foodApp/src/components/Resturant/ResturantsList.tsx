import {View, Text, Pressable, ScrollView} from 'react-native';
import React from 'react';
import ResturantCard from './ResturantCard';

const Resturants = [
  {id: '1', name: 'dcsn', description: 'sdcdsc', rating: '4.2'},
  {id: '2', name: 'dcsn', description: 'sdcdsc', rating: '4.2'},
  {id: '3', name: 'dcsn', description: 'sdcdsc', rating: '4.2'},
  {id: '4', name: 'dcsn', description: 'sdcdsc', rating: '4.2'},
  {id: '5', name: 'dcsn', description: 'sdcdsc', rating: '4.2'},
];

const ResturantsList = () => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg text-lightText dark:text-darkText">
            title
          </Text>
          <Text className="text-xs text-lightSecText dark:text-darkSecText">
            description
          </Text>
        </View>

        <Pressable>
          <Text className="font-semibold text-lightTheme">See All</Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
        className="overflow-visible ">
        {Resturants.map(resturant => {
          return (
            <ResturantCard
              key={resturant.id}
              id={resturant.id}
              //   imgUrl={resturant.image}
              name={resturant.name}
              rating={resturant.rating}
              //   type={resturant.type?.name}
              address="123 main street"
              description={resturant.description}
              //   dishes={resturant.dishes}
              //   lng={resturant.lng}
              //   lat={resturant.lat}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ResturantsList;
