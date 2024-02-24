import React from 'react';
import { NavigationContainer ,useNavigation} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MatchDetails from './pages/MatchDetails';
import PlayerDetails from './pages/PlayerDetails';



const Stack = createNativeStackNavigator();


export default function App() {


  return (

    <Provider store={store}>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AppTabs" component={AppNavigator} />
          <Stack.Screen name="detail" component={MatchDetails} />
          <Stack.Screen name="playerdetail" component={PlayerDetails}  />
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  );
}


