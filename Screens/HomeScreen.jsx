import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Matchs from '../components/Matchs';
import Cover from '../components/Cover';
import BestPlayers from '../components/BestPlayers';

const HomeScreen = ({navigation}) => {
  return (
    <>

      <View style={{ flex: 1, backgroundColor: '#1F1D2B' }}>

        <View >
          <Cover />
        </View>
        <Text style={{marginLeft:10,marginTop:30,fontSize: 20 ,color:'white'}}>Popular Players</Text>
        
        <View>
          <BestPlayers />
        </View>
        <Text style={{marginLeft:10,marginTop:12,fontSize: 20 ,color:'white'}}>UpComing Matches</Text>

        {/* <TouchableOpacity style={{ backgroundColor: 'white', padding: 10, borderRadius: 5 }}>
        <Text>FILTER</Text>
        </TouchableOpacity> */}

        <View style={{marginBottom:60}}>

          <Matchs navigation={navigation}/>
          
          
        </View>
      </View>

    </>

  )
}

  ;

export default HomeScreen;