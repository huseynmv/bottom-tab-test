import {View, Text} from 'react-native';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Splash from './Splash';

const Stack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>

        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      </Stack.Navigator>
    </>
  );
};

export default MainStackScreen;
