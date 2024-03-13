/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
// stack pages
import {
  HomeStackNavigator,
  BookingsStackNavigator,
  FavoritesStackNavigator,
  ProfileStackNavigator,
} from './StackNavigator';

// icons
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMagnifyingGlass,
  faHeart,
  faSuitcase,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1F8F84',
        tabBarInactiveTintColor: '#939393',
        tabBarStyle: styles.tabBarPadding,
      }}>
      <Tab.Screen
        name="Search"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faMagnifyingGlass} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faHeart} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={BookingsStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faSuitcase} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faUserCircle} size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarPadding: {
    paddingTop: 5,
  },
});

export default HomeTabNavigator;
