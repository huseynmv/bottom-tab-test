import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const Profile = () => {
  const [user, setuser] = useState([])

  const User = () => {
    fetch('https://639935b029930e2bb3cc9fb8.mockapi.io/rmad101/users/13')
      .then(res => res.json())
      .then(data => setuser(data))
  }

  useEffect(() => {
    User()
  }, [])
  
  return (
    <Card>
      <Card.Title />
      <Card.Content>
        <Title>{user.firstName}</Title>
        <Title>{user.lastName}</Title>
      </Card.Content>
      <Card.Cover source={{uri: user.avatar}} />
    </Card>
  );
}

export default Profile