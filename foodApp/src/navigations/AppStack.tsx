import React from 'react';
import {Appearance} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Details from '../screens/Details';
import CartScreen from '../screens/CartScreen';
import Delivery from '../screens/Delivery';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Favourite from '../screens/Favourite';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Ionicons from 'react-native-vector-icons/Ionicons';

import {useSelector, useDispatch} from 'react-redux';

function TabNavigation() {
  const favItemsQuantity = useSelector(
    (state: any) => state.favourite.quantity,
  );
  const colorScheme = Appearance.getColorScheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
          backgroundColor: colorScheme === 'dark' ? '#181a1b' : 'white',
          borderTopColor: colorScheme === 'dark' ? '#181a1b' : 'white',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name={focused ? 'grid' : 'grid-outline'}
                color={focused ? '#FB923C' : 'grey'}
                size={25}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name={focused ? 'search' : 'search'}
                color={focused ? '#FB923C' : 'grey'}
                size={25}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarBadge: favItemsQuantity,
          tabBarBadgeStyle: {backgroundColor: 'red'},
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name={focused ? 'heart' : 'heart-outline'}
                color={focused ? '#FB923C' : 'grey'}
                size={25}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                color={focused ? '#FB923C' : 'grey'}
                size={25}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="BottomTab" component={TabNavigation} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }}
      />
      <Stack.Screen name="Delivery" component={Delivery} />
    </Stack.Navigator>
  );
};

export default AppStack;
