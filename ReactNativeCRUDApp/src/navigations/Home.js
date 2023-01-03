import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeMain from '../screens/HomeMain';
import Profile from '../screens/Profile';
import Basket from '../screens/Basket';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeMain"
        component={HomeMain}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen
        name="Basket"
        component={Basket}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Home;
