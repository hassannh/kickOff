import React, { useEffect, useState } from 'react';
import { View, Image, Text, Alert, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import getAllMatchsThunk from '../redux/thunks/matchsThunk';
import MatchCard from './MatchCard';
import {useNavigation} from '@react-navigation/native';



// const navigation = useNavigation();

const width = Dimensions.get('screen').width


const Matchs = ({ navigation,item }) => {

  const dispatch = useDispatch();

  const { data } = useSelector(state => state.Matchs.data)


  useEffect(() => {
    dispatch(getAllMatchsThunk())
  }, [dispatch])



  const handleShowDetails = (item) => {
    navigation.navigate('detail', { item })
  };


  return (


    <ScrollView horizontal={true}>
      {data?.map((match, index) => (
        <TouchableOpacity  onPress={() => handleShowDetails(match)}>
          <View key={index}  style={styles.container}>

            <View style={styles.phase_one}>
              <MatchCard />

              <Text style={styles.date}>{match.starting_at} </Text>
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
