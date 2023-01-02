import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Searchbar} from 'react-native-paper';
const HomeMain = ({navigation}) => {
  const [categories, setcategories] = useState('');
  const [products, setproducts] = useState([]);

  const GetCategories = () => {
    fetch('https://639935b029930e2bb3cc9fb8.mockapi.io/rmad101/categories')
      .then(res => res.json())
      .then(data => setcategories(data));
  };

  const GetProducts = () => {
    fetch(
      'https://639935b029930e2bb3cc9fb8.mockapi.io/rmad101/categories/1/products',
    )
      .then(res => res.json())
      .then(data => setproducts(data));
  };

  const ProductDetails = (id) => {
    navigation.navigate(
      'ProductDetail', {
        id :id
      }
    )
  }

  useEffect(() => {
    GetCategories();
    GetProducts();
  }, []);

  const renderItem = ({item}) => {
    return (
      <>
        <Text
          style={{fontWeight: 26, fontWeight: '600', paddingHorizontal: 10}}>
          {item.name}
        </Text>
      </>
    );
  };

  const ProductRender = ({item}) => {
    return (
      <View style={{marginHorizontal: 15}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: 100, height: 100}}
            source={{
              uri: item.image,
            }}
          />
        </View>
        <TouchableOpacity onPress={() => ProductDetails(item.id)}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text>{item.name}</Text>
            <Text numberOfLines={3} style={{width: 100}}>
              {item.description}
            </Text>
            <Text>{item.price}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <View>
        <Searchbar placeholder="Search" />
      </View>

      <View style={{marginVertical: 20}}>
        <Text style={{fontSize: 30, fontWeight: '900', paddingHorizontal: 15}}>
          Order Online{' '}
        </Text>
        <Text style={{fontSize: 30, fontWeight: '900', padding: 15}}>
          Collect in Store{' '}
        </Text>
      </View>

      <View>
        <FlatList
          style={{marginTop: 50}}
          data={categories}
          renderItem={renderItem}
          horizontal={true}
        />
      </View>
      <View style={{marginTop: 50}}>
        <FlatList
          horizontal={true}
          data={products}
          renderItem={ProductRender}
        />
      </View>
    </View>
  );
};

export default HomeMain;
