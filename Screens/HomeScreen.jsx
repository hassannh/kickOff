import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Matchs from '../components/Matchs';
import Cover from '../components/Cover';
import BestTeams from '../components/BestTeams';

const HomeScreen = () => {
  return (
    <>

      <View style={{ flex: 1, backgroundColor: '#1F1D2B' }}>

        <View >
          <Cover />
        </View>
        <Text style={{marginLeft:10,marginTop:30,fontSize: 20 ,color:'white'}}>Popular Teams</Text>
        
        <ScrollView horizontal={true}>
          <BestTeams />
          <BestTeams />
          <BestTeams />
          <BestTeams />
          <BestTeams />
          <BestTeams />
          <BestTeams />
          <BestTeams />
          <BestTeams />
        </ScrollView>
        <Text style={{marginLeft:10,marginTop:12,fontSize: 20 ,color:'white'}}>UpComing Matches</Text>

        <ScrollView horizontal={true}>

          <Matchs />
          <Matchs />
          <Matchs />
          <Matchs />
        </ScrollView>
      </View>

    </>

  )
}

  ;

export default HomeScreen;