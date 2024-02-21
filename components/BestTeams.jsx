import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'

const BestTeams = () => {
  return (
    <View style={styles.BestTeams}>
      <Image style={styles.Image} source={require('../assets/Team4.png')}/>
    </View>
  )
}


const styles = StyleSheet.create({

    BestTeams:{
        // backgroundColor:'white',
        // borderWidth: 1,
        // borderColor: '#3AD873',
        // width:73,
        marginTop:20,
        marginLeft:10,
        borderRadius: 50,
    },
    Image:{
        width:73,
        height:73,
    }


})

export default BestTeams