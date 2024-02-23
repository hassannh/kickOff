import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Matchs from '../components/Matchs';
import Cover from '../components/Cover';
import BestTeams from '../components/BestPlayers';

const HomeScreen = ({navigation}) => {
  return (
    <>

      <View style={{ flex: 1, backgroundColor: '#1F1D2B' }}>

        <View >
          <Cover />
        </View>
        <Text style={{marginLeft:10,marginTop:30,fontSize: 20 ,color:'white'}}>Popular Players</Text>
        
        <View>
          <BestTeams />
        </View>
        <Text style={{marginLeft:10,marginTop:12,fontSize: 20 ,color:'white'}}>UpComing Matches</Text>

        <View style={{marginBottom:60}}>

          <Matchs navigation={navigation}/>
          
          
        </View>
      </View>

    </>

  )
}

  ;

export default HomeScreen;