import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'

const Button = () => {
  return (

    <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Add To Favorits</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    Container: {
      display: 'flex',
      
    },
    buttonContainer: {
      backgroundColor: '#6C5ECF',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      width: 240,
      height: 50,
      marginLeft:20,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    
    },
  })

export default Button