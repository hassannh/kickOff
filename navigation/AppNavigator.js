import React from 'react';
import { View, Text ,StyleSheet,Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import SettingsScreen from '../Screens/SettingScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import PlayersScreen from '../Screens/PlayersScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();



const AppNavigator = () => (
    <Tab.Navigator 
    activeColor="#6C5ECF"
    screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 5,
          backgroundColor: '#252836',
      },
    })}
    
    >
        <Tab.Screen   name="Home" component={HomeScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="home" size={40} color={'#464857'} />
            //         <Image
            //   source={require('../assets/home.png')}
            //   style={{ width: size, height: size, activeColor:'#464857' }}
            // />
                
                ),
            }}
        />
        <Tab.Screen name="Players" component={PlayersScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="people" size={40} color={'#464857'} />
                ),
            }}
        />
        <Tab.Screen name="Profil" component={ProfileScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="person" size={40} color={'#464857'} />
                ),
            }}
        />
        <Tab.Screen name="Setting" component={SettingsScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="settings" size={40} color={'#464857'} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default AppNavigator;