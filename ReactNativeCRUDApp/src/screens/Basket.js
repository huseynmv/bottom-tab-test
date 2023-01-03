import {View, Text, Image, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import NumericInput from 'react-native-numeric-input';
const Basket = () => {
  const [quantity, setquantity] = useState(0);
  // console.log(quantity)

  const [baskteitems, setbaskteitems] = useState([]);

  const GetBasketItem = () => {
    fetch('https://639935b029930e2bb3cc9fb8.mockapi.io/rmad101/baskets')
      .then(res => res.json())
      .then(data =>
        data.forEach(item => {
          if (item.userId == 2) {
            setbaskteitems(item);
          }
        }),
      );
  };
  useEffect(() => {
    GetBasketItem();
  }, []);
  console.log(baskteitems);

  return (
    <View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <Text style={{fontSize: 36, fontWeight: '700'}}>Basket</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 15,
          marginHorizontal: 40,
          backgroundColor: 'cyan',
          borderRadius: 20,
        }}>
        <Text style={{fontSize: 20, fontWeight: '400', padding: 10}}>
          Delivery for Free until the end of the month
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View>
          <Image
            source={require('../assets/ipad.png')}
            style={{height: 90, width: 90}}
          />
        </View>
        <View style={{justifyContent: 'space-between'}}>
          <Text>2020 Apple Ipad Air 10.9</Text>
          <Text>$ 579.00</Text>
          <NumericInput
            value={quantity}
            onChange={setquantity}
            totalWidth={150}
            totalHeight={40}
            step={1}
            valueType="real"
            rounded
            textColor="#B0228C"
            iconStyle={{color: 'white'}}
            rightButtonBackgroundColor="#EA3788"
            leftButtonBackgroundColor="#E56B70"
            minValue={0}
          />
        </View>
      </View>
    </View>
  );
};

export default Basket;
