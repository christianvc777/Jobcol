import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import P1LoginScreen from './components/P1/LoginScreen';
import P2LoginScreen from './components/P2/LoginScreen';
import P3LoginScreen from './components/P3/LoginScreen';
import P5Screen from './components/P5/Screen';
import P6Screen from './components/P6/Screen'; 
import P7Screen from './components/P7/Screen';
import P8Screen from './components/P8/Screen';
import P9Screen from './components/P9/Screen';
import P10Screen from './components/P10/Screen';
import P11Screen from './components/P11/Screen';


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
        <Stack.Screen name="P7Screen" component={P7Screen} /> 
        <Stack.Screen name="P8Screen" component={P8Screen} />
        <Stack.Screen name="P9Screen" component={P9Screen} />
        <Stack.Screen name="P10Screen" component={P10Screen} />
        <Stack.Screen name="P11Screen" component={P11Screen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}