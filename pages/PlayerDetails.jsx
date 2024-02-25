import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const PlayerDetails = ({ route }) => {

    const { player } = route.params;

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.Image} source={{ uri: player.player_picture }} />
            </View>

            <View style={styles.info}>
                <View>
                    <Text>{player.player_name}</Text>
                    <Text>Position : {player.position_short_name}</Text>
                    <Text>Team : {player.team_name}</Text>
                </View>
                <View>
                    <Text>Value : {player.estimated_value}</Text>
                    <Text>age : {player.age}</Text>
                </View>

            </View>


        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        height: 200,
        width: 360,
        marginTop: 24,
        backgroundColor: '#1F1D2B'
    },
    Image: {
        width: 173,
        height: 173,
        borderRadius: 50,
        backgroundColor: 'white',
        zIndex:1222,
        marginTop:110
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: 20,
    }

})

export default PlayerDetails