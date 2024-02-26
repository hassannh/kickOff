import React, { useEffect, useState } from 'react';
import { View, Image, Text, Alert, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import getAllMatchsThunk from '../redux/thunks/matchsThunk';
import MatchCard from './MatchCard';
import { format } from 'date-fns'
import ModalSelector from 'react-native-modal-selector';




const width = Dimensions.get('screen').width


const Matchs = ({ navigation }) => {

  const dispatch = useDispatch();

  const data = useSelector(state => state.matchs.matchs)

  const [selectedTournament, setSelectedTournament] = useState(null);



  useEffect(() => {
    dispatch(getAllMatchsThunk())
  },
   [dispatch]
   )

  const handleShowDetails = (item) => {
    navigation.navigate('detail', { item })
  };

  const tournaments = Array.from(new Set(data.map(match => match.tournament.uniqueTournament.name)));


  const handleTournamentChange = (tournament) => {
    setSelectedTournament(tournament);
  };

  const resetTournamentFilter = () => {
    setSelectedTournament(null);
  };

  

  const filteredMatches = selectedTournament
    ? data.filter(match => match.tournament.uniqueTournament.name === selectedTournament)
    : data;


  return (
    <>

      <View style={styles.select}>
        <ModalSelector
          data={tournaments.map(tournament => ({ key: tournament, label: tournament }))}
          initValue="All Tournaments"
          onChange={(option) => handleTournamentChange(option.key)}
        />
        {selectedTournament && (
          <TouchableOpacity onPress={resetTournamentFilter} style={{ backgroundColor: 'white', padding: 10, borderRadius: 5 }}>
            <Text>Back to All Matches</Text>
          </TouchableOpacity>
        )}
      </View>


      <ScrollView horizontal={true}>
        {Array.isArray(filteredMatches) && 
        filteredMatches.map((match, index) => (
          <TouchableOpacity key={index} onPress={() => handleShowDetails(match)}>
            <View style={styles.container}>

              <View style={styles.phase_one}>
                <MatchCard homeId={match.homeTeam.id} awayId={match.awayTeam.id} score1={match.homeScore.normaltime} score2={match.awayScore.normaltime} />
                <Text style={styles.date}>{match.tournament.uniqueTournament.name}</Text>
              </View>
              <View style={styles.phase_two}>
                <Text style={styles.Number}>  {format(new Date(match.startTimestamp), 'HH:mm')}  </Text>
                <Text style={styles.horizontalName}>{format(new Date(match.startTimestamp), 'dd/MM')}</Text>
              </View>

            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </>

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
    fontSize: 20,
    transform: [{ rotate: '90deg' }],
    marginTop: 30
  },
  Number: {
    color: 'white',
    fontSize: 22,
  },

  select:{
    display:'flex',
    flexDirection:'row',
    marginTop: 10,
    justifyContent:'space-around'
  }





});

export default Matchs;
