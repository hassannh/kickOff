import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { clearFavorits } from '../redux/Actions/MatchActions';
import { LinearGradient } from 'expo-linear-gradient';


const FavoritsScreen = () => {

  const dispatch = useDispatch();

  const favoritsArray = useSelector((state) => state.favorits.favorits);

  // const favorits = favoritsArray

  console.log('favorits data', favoritsArray);


  const clearFavoritsArray = () => {
    dispatch(clearFavorits());
  };

  return (
    <>
      <ScrollView  contentContainerStyle={{marginLeft:40,marginTop:70,gap:12}}>

        {Array.isArray(favoritsArray) &&

          favoritsArray.map((item, index) => (


            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient} key={index}>

              <View style={styles.matchContainer}>

                <Image source={{ uri: `https://api.sofascore.app/api/v1/team/${item.homeTeam.id}/image` }}
                  style={styles.image}
                />
                <Text>
                  {item.homeScore.normaltime}-{item.awayScore.normaltime}
                </Text>

                <Image source={{
                  uri: `https://api.sofascore.app/api/v1/team/${item.awayTeam.id}/image`,
                }}
                  style={styles.image}
                />
              </View>
            </LinearGradient>


          ))
        }
        <TouchableOpacity style={{ marginTop: 20 ,backgroundColor:'blue',width:52 ,paddingLeft:8 ,borderRadius: 8,}} onPress={clearFavoritsArray}>
          <Text>Clear</Text>
        </TouchableOpacity>

      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({

  matchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 30,
    gap: 12,
    height: 50,
    paddingBottom:32

  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 50
  },
  linearGradient: {
    borderRadius: 10,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width:'90%',
    
    // marginTop:50
  },
})

export default FavoritsScreen