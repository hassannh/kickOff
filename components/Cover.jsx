import { View, Image, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';


const Cover = () => {



    return (
        <TouchableOpacity style={styles.cover}>
          <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
            <View style={styles.text}>
              <Text style={{ fontSize: 18, marginBottom: 7, backgroundColor: 'white', width: 80, paddingLeft: 7, borderRadius: 3 }}>FootBall</Text>
              <Text style={{ fontSize: 15 ,color:'white'}}>Zidan and Real Madrid win champions league for the 14th.</Text>
            </View>
            <Image
              style={styles.image}
              source={require('../assets/Zidane.png')}
            />
          </LinearGradient>
        </TouchableOpacity>
      );
}

const styles = StyleSheet.create({
    cover: {
      width: '93%',
      marginLeft: 12,
      height: 180,
      marginTop: 50,
    },
    linearGradient: {
      flex: 1,
      borderRadius: 10,
    
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
    },
    text: {
      flex: 1,
    //   marginRight: 16,
    },
    image: {
      width: 150,
      height: 150,
      resizeMode: 'cover',
      borderRadius: 5,
    },
  });



export default Cover