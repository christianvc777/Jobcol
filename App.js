import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import P1LoginScreen from './components/P1/LoginScreen';
import P2LoginScreen from './components/P2/LoginScreen';
import P3LoginScreen from './components/P3/LoginScreen'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="P1LoginScreen">
        <Stack.Screen name="P1LoginScreen" component={P1LoginScreen} />
        <Stack.Screen name="P2LoginScreen" component={P2LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}