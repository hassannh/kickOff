import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';


const SearchInput = ({ setSearchQuery }) => {


    return (
        <View style={styles.container}>
            <Searchbar
                style={styles.search}
                placeholder="Search"
                onChangeText={(query) => setSearchQuery(query)}
                // value={SearchQuery}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    search: {
        // alignItems:'center',
        marginTop: 45,
        width: 320,
        height: 45,
    }
})

export default SearchInput