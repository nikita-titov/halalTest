import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeTabNavigator from './src/navigation/TabBarNavigator';

// navigation and router
import {NativeRouter} from 'react-router-native';

const App = () => {
  return (
    <NavigationContainer>
      <NativeRouter>
        <HomeTabNavigator />
      </NativeRouter>
    </NavigationContainer>
  );
};

export default App;
