import { View, Text} from 'react-native'
import React, { useEffect, useState } from 'react'
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
const ProductDetail = ({ route }) => {
    const [product, setproduct] = useState([])

    let { id } = route.params
    
    const GetProduct = () => {
        fetch(
          `https://639935b029930e2bb3cc9fb8.mockapi.io/rmad101/categories/1/products/${id}`,
        ).then(res => res.json())
        .then(data => setproduct(data))
    }

    useEffect(() => {
      GetProduct()
    }, [])
    

  return (
    <Card>
      <Card.Title />
      <Card.Content>
        <Title>{product.name}</Title>
        <Paragraph>{product.description}</Paragraph>
              <Paragraph>Price : {product.price}</Paragraph>
              <View>
                  <Text> Colors : {product.color}</Text>
              </View>
      </Card.Content>
      <Card.Cover source={{uri: product.image}} />
    </Card>
  );
}

export default ProductDetail