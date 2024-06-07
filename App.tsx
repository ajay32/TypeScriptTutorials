import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import ClassComp from './ClassComp';
import FunctionalComp from './FunctionalComp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './navigation/Home';
import Settings from './navigation/Settings';

// you can also replease type with interface
export type RootStackParamList = { 
  Home: undefined;
  Settings: {
    name: string,
    email: string
  };
};

const Stack = createStackNavigator<RootStackParamList>()

function App() {
  return (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name={'Home'} component={Home}/>
    <Stack.Screen name={'Settings'} component={Settings}/>
  </Stack.Navigator>
</NavigationContainer>

//     <View>
//       <ClassComp name={'Ajay'} email={'ajay32@gmail.com'} age={24} />
//       <FunctionalComp name={'Ajay'} email={'ajay32@gmail.com'} age={24} />
// </View>
  );
}

export default App;

// if imoprts seems read or first React import seems red 
// gives this issue Cannot use JSX unless the '--jsx' flag is provided
// that means  u need restart your IDE