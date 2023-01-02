import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Splash = ({navigation}) => {

    const MoveHomeMenu = () => {
        navigation.navigate(
            'Home'
        )
    }
  return (
    <View>
      <TouchableOpacity onPress={() => MoveHomeMenu()}>
        <Image
          style={{width: '100%'}}
          source={require('../assets/Splash.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
