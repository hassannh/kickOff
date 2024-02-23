import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  Button  from '../components/Button';


const MatchDetails = ({ route }) => {

  const { item } = route.params;


  return (
    <View>
      <Image style={styles.image} source={{ uri: 'https://static.timesofisrael.com/www/uploads/2021/11/000_9RJ8CT.jpg' }} />

      <View>
        <Text>{item.starting_at}</Text>
      </View>



      <Button/>


    </View>
  )
}

const styles = StyleSheet.create({

  image: {
    height: 200,
    width: 360,
    marginTop: 24,
  },
  
})

export default MatchDetails