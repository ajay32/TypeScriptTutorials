import { View, Text } from 'react-native'
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { useRoute } from '@react-navigation/native';

interface SettingsNavigationProps {
    navigation: StackNavigationProp<RootStackParamList>;
}


const Settings = ({navigation}: SettingsNavigationProps) => {
    const route = useRoute() //route has the value
    console.log(route);
  return (
    <View>
      <Text 
      style={{padding: 20, borderWidth: 10, color: 'red'}}>{route.name}</Text>
      </View>
  )
}

export default Settings;


