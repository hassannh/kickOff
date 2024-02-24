import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const MatchCard = ({homeId,awayId,score1,score2}) => {
    return (

        <View>
            <View style={styles.matchContainer}>
                <Image source={{ uri: `https://api.sofascore.app/api/v1/team/${homeId}/image` }}
                    style={styles.image}
                />
                <Text>
                    {score1}-{score2}
                </Text>

                <Image source={{
                    uri: `https://api.sofascore.app/api/v1/team/${awayId}/image`,
                }}
                    style={styles.image}
                />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    matchContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        marginTop:40,
        gap:12

    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 50
    }
})

export default MatchCard