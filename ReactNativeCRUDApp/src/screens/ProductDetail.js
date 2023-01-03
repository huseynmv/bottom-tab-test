import { View, Text, Button} from 'react-native'
import React, { useEffect, useState } from 'react'
import {Avatar, Card, Title, Paragraph} from 'react-native-paper';
const ProductDetail = ({ route }) => {


  const AddToBasket = (id) => {
    fetch('https://639935b029930e2bb3cc9fb8.mockapi.io/rmad101/baskets/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 1,
        productId: id,

      }),
    })
    .then(alert("product added"))
  }

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
    <>
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
      <Button onPress={() => AddToBasket(product.id)} title="Add To Basket"></Button>
    </>
  );
}

export default ProductDetail