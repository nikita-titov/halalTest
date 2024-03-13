import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// pages
import Home from '../screens/Home';
import Bookings from '../screens/Bookings';
import Favorites from '../screens/Favourites';
import Profile from '../screens/Profile';
import EntryScreen from '../screens/Entry';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#191A25',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTintColor: '#000000',
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Entry"
        component={EntryScreen}
        options={{headerShown: false}}
      />
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const BookingsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name=" "
        component={Bookings}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const FavoritesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name=" "
        component={Favorites}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name=" "
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  BookingsStackNavigator,
  FavoritesStackNavigator,
  ProfileStackNavigator,
};
