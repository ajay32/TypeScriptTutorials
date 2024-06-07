import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import ClassComp from './ClassComp';
import FunctionalComp from './FunctionalComp';

function App() {
  return (
    <View>
      <ClassComp name={'Ajay'} email={'ajay32@gmail.com'} age={24} />
      <FunctionalComp name={'Ajay'} email={'ajay32@gmail.com'} age={24} />
    </View>
  );
}

export default App;

// if imoprts seems read or first React import seems red 
// gives this issue Cannot use JSX unless the '--jsx' flag is provided
// that means  u need restart your IDE