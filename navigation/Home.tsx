import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { TextInput } from 'react-native-gesture-handler';


interface HomeScreenProps {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

interface User {
    name: string,
    email: string
}

interface Item {
    name: string,
    height: number
}

const Home = ({navigation} : HomeScreenProps) => {

    const [counter, setCounter] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [user, setUser] = useState<User>( {
        name: '',
        email: ''
    });
    const [item, setItem] = useState<Item[]>([]);
    const [detail, setDetail] = useState<null>(null);

    const ref = useRef<TextInput>(null);


  return (
    <View>
      <Text style={{padding: 20, borderWidth: 1, color: 'black'}}
      onPress={()=> {
        navigation.navigate('Settings', {
            name: 'Ajay',
            email: 'ajay@gmail.com'
        });
      }}>I am home</Text>
      <TextInput ref={ref}> Hey</TextInput>
      </View>
  )
}

export default Home;


