import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeMain from '../screens/HomeMain';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    
      <Tab.Navigator>
        <Tab.Screen
            name='HomeMain' component={HomeMain} options = {{headerShown: false}}
        />
        <Tab.Screen
            name='Profile' component={Profile}
        />
      </Tab.Navigator>
    
  )
}

export default Home