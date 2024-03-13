import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import mainStyles from '../../assets/mainStyles.tsx';

export const Logo = () => {
  return (
    <View style={mainStyles.logoContainer}>
      <Text style={mainStyles.logoHalalTitle}>Halal</Text>
      <Text style={mainStyles.logoBookingTitle}>Booking</Text>
    </View>
  );
};
