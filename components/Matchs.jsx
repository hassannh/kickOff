import React, { useEffect, useState } from 'react';
import { View, Image, Text, Alert, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import getAllMatchsThunk from '../redux/thunks/matchsThunk';
import MatchCard from './MatchCard';
import {format} from 'date-fns'

// const navigation = useNavigation();

const width = Dimensions.get('screen').width


const Matchs = ({ navigation }) => {

  const dispatch = useDispatch();

  const  data  = useSelector(state => state.matchs)


  useEffect(() => {
    dispatch(getAllMatchsThunk())
  }, [dispatch])

  

  const handleShowDetails = (item) => {
    navigation.navigate('detail', { item })
  };


  return (


    <ScrollView horizontal={true}>
      {data?.map((match, index) => (
        <TouchableOpacity key={index}  onPress={() => handleShowDetails(match)}>
          <View   style={styles.container}>

            <View style={styles.phase_one}>
              <MatchCard homeId={match.homeTeam.id} awayId={match.awayTeam.id} score1={match.homeScore.normaltime} score2={match.awayScore.normaltime}/>

              <Text style={styles.date}>{format(new Date(match.startTimestamp), 'HH:mm')} </Text>
            </View>

            <View style={styles.phase_two}>
              <Text style={styles.Number}>28</Text>
              <Text style={styles.horizontalName}>December</Text>
            </View>

          </View>

        </TouchableOpacity>

      ))}
    </ScrollView>


  );


};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: width - 50,
    height: 150,
    backgroundColor: "#2648D1",
    borderRadius: 10,
    borderColor: '#3AD873',
    marginTop: 20,
    marginLeft: 10
  },

  phase_two: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10
  },
  phase_one: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: 'center',
    gap: 20
  },
  horizontalName: {
    color: 'white',
    fontFamily: 'BebasNeue-Bold',
    fontSize: 20,
    transform: [{ rotate: '90deg' }],
    marginTop: 30
  },
  Number: {
    color: 'white',
    fontSize: 22,
  },






});

export default Matchs;
