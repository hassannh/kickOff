import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { format } from 'date-fns'
import { useNavigation } from '@react-navigation/native';
import { addToFavorits } from '../redux/Actions/MatchActions';


const MatchDetails = ({ route }) => {

  const { item } = route.params;

  const dispatch = useDispatch();
  const navigation = useNavigation()


  const AddToFavorits = () =>{
    dispatch(addToFavorits( {...item}));
  }

  return (
    <>
      <View>

        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>

          <Text style={styles.tournament}>{item.tournament.uniqueTournament.name}</Text>

          <Text style={styles.Round}>{item.roundInfo.name}</Text>

          <View style={styles.matchContainer}>

            <View style={styles.matchDetail}>
              <Image source={{ uri: `https://api.sofascore.app/api/v1/team/${item.homeTeam.id}/image` }}
                style={styles.image}
              />
              <Text style={{ color: 'white' }}>{item.homeTeam.name}</Text>
            </View>




            <Text style={styles.score}>
              {item.homeScore.normaltime}-{item.awayScore.normaltime}
            </Text>

            <View style={styles.matchDetail}>
              <Image source={{
                uri: `https://api.sofascore.app/api/v1/team/${item.awayTeam.id}/image`,
              }}
                style={styles.image}
              />
              <Text style={{ color: 'white' }}>{item.awayTeam.name}</Text>
            </View>


          </View>
          <Text style={styles.date}>{format(new Date(item.startTimestamp), 'dd/MM/ - HH:mm')}</Text>

        </LinearGradient>

        <View style={styles.action}>

          <TouchableOpacity onPress={AddToFavorits}>
            <FontAwesome name="heart" size={54} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Text>{item.changes.name}</Text>

    </>
  )
}

const styles = StyleSheet.create({

  image: {
    width: 77,
    height: 77,
    borderRadius: 50
  },
  favoriteIcon: {
    width: 80,
    height: 80,
  },
  action: {
    position: 'absolute',
    bottom: -80,
    right: 15,
  },
  matchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    gap: 12,
    height: 120,

  },
  matchDetail: {
    display: 'flex',
    alignItems: 'center',
  },
  linearGradient: {
    backgroundColor: 'red',
    justifyContent:'center',
    alignItems:'center'
  },
  tournament: {
    marginTop: 50,
    color:'white',
  },
  score: {
    fontSize: 20,
    color:'white',

  },
  Round:{
    color:'white',
  },
  date: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10

  }
})

export default MatchDetails