import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome } from '@expo/vector-icons';


const MatchDetails = ({ route }) => {

  const { item } = route.params;

  // console.log(item);


  return (
    <>
      <View>
        <Image style={styles.image} source={{ uri: 'https://static.timesofisrael.com/www/uploads/2021/11/000_9RJ8CT.jpg' }} />

        <View>
          <Text></Text>
        </View>

        <View style={styles.action}>

          <Button />

          <TouchableOpacity>
            <FontAwesome name="heart" size={44} color="black" />
          </TouchableOpacity>
        </View>
      </View>

    </>
  )
}

const styles = StyleSheet.create({

  image: {
    height: 200,
    width: 360,
    marginTop: 24,
  },
  favoriteIcon: {
    width: 80,
    height: 80,
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:'red',
    marginRight: 12
  }
})

export default MatchDetails