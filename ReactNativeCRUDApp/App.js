import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStackScreen from './src/navigations/MainStackScreen'


const App = () => {
  return (
      <NavigationContainer>
        <MainStackScreen></MainStackScreen>
      </NavigationContainer>
  )
}

export default App