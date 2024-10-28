import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import P1LoginScreen from './components/P1/LoginScreen';
import P2LoginScreen from './components/P2/LoginScreen';
import P3LoginScreen from './components/P3/LoginScreen';
import P5Screen from './components/P5/Screen';
import P6Screen from './components/P6/Screen'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="P1LoginScreen">
        <Stack.Screen name="P1LoginScreen" component={P1LoginScreen} />
        <Stack.Screen name="P2LoginScreen" component={P2LoginScreen} />
        <Stack.Screen name="P3LoginScreen" component={P3LoginScreen} />
        <Stack.Screen name="P5Screen" component={P5Screen} />
        <Stack.Screen name="P6Screen" component={P6Screen} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}