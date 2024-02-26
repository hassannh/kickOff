import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import SettingsScreen from '../Screens/SettingScreen';
import FavoritsScreen from '../Screens/FavoritsScreen';
import PlayersScreen from '../Screens/PlayersScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MatchDetails from '../pages/MatchDetails';

const Tab = createBottomTabNavigator();



const AppNavigator = () => (


    <Tab.Navigator
        screenOptions={() => ({
            headerShown: false,
            tabBarStyle: {
                height: 70,
                paddingHorizontal: 5,
                backgroundColor: '#252836',
                showLabel: false,
                activeTintColor: 'red', 
                inactiveTintColor: 'gray',
            },
        })}

    >
        <Tab.Screen name="Home" component={HomeScreen}
            options={{
                tabBarIcon: ({ color, size , focused }) => (
                    <Icon name="home" size={40} color={focused ? '#6C5ECF' : '#464857'} />
                ),
            }}
            tabBarOptions={{
                tabBarActiveTintColor: '#6C5ECF',

            }}
        />
        <Tab.Screen name="Players" component={PlayersScreen}
            sceneContainerStyle={{ backgroundColor: '#1F1D2B' }}

            options={{
                tabBarIcon: ({ color, size ,focused}) => (
                    <Icon name="people" size={40} color={focused ? '#6C5ECF' : '#464857'} />
                )
            }}
        />
        <Tab.Screen name="favorite" component={FavoritsScreen}
            options={{
                tabBarIcon: ({ color, size ,focused}) => (
                    <Icon name="favorite" size={40} color={focused ? '#6C5ECF' : '#464857'} />
                ),
            }}
        />
        <Tab.Screen name="Setting" component={SettingsScreen}
            options={{
                tabBarIcon: ({ color, size ,focused}) => (
                    <Icon name="settings" size={40} color={focused ? '#6C5ECF' : '#464857'} />
                ),
            }}
        />


    </Tab.Navigator>
);

export default AppNavigator;