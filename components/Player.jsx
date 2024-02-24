import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getAllPlayersThunk from '../redux/thunks/playersThunk';
import { LinearGradient } from 'expo-linear-gradient';



const Player = ({ data }) => {


    return (
        <View >
            {data?.map((player, index) => (
                <View key={index} style={styles.container}>

                    <View >
                        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.player}>

                            <View style={styles.ImageContainer}>
                                <Image style={styles.Image} source={{ uri: player.player_picture }} />
                            </View>
                            <View>
                                <Text>{player.player_name}</Text>
                                <Text>Contry :{player.country_name}</Text>
                                <Text>Power :{player.sci_skill_smg}</Text>
                                <Text>Team :{player.team_name}</Text>
                            </View>

                        </LinearGradient>
                    </View>

                </View>

            ))}

        </View>
    )
}

const styles = StyleSheet.create({

    player: {
        alignItems: 'center',
        width: 290,
        height: 120,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 25,
        marginLeft: 35,
    },
    Image: {
        width: 73,
        height: 73,
        borderRadius: 50,
    },
    container: {

        display: 'flex',
        justifyContent: 'center',
        border: 1,
    },

})

export default Player