import {View, Text, ScrollView, Pressable, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {categories} from '../../constants/constants';

const Category = ({handleCategory}: any) => {
  const [activeCategory, setActiveCategory] = useState<string | null>('1');

  const selectCategory = (name: string) => {
    handleCategory(name);
  };

  return (
    <View className="mt-4">
      <ScrollView
        // className="p-4"
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}>
        {categories?.map(category => {
          let isActive = category.id == activeCategory;
          let btnClass = isActive
            ? ' bg-lightTheme'
            : ' bg-gray-200 dark:bg-[#ffffff2f]';
          let textClass = isActive
            ? ' font-bold text-lightText dark:text-darkText'
            : ' text-lightSecText dark:text-darkSecText';
          return (
            <View
              key={category.id}
              className="flex justify-center items-center mr-2 ">
              <Pressable
                onPress={() => {
                  setActiveCategory(category.id), selectCategory(category.name);
                }}
                className={
                  'p-1 rounded-full shadow flex flex-row justify-center items-center min-w-[100px]  ' +
                  btnClass
                }>
                <Image
                  style={{width: 45, height: 45, borderRadius: 30}}
                  source={{uri: `${category.picture}`}}
                />
                <Text className={'text-sm px-2 ' + textClass}>
                  {category.name}
                </Text>
              </Pressable>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Category;
