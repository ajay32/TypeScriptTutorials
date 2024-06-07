import { View, Text, Button } from 'react-native'
import React, { useReducer, useRef, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { TextInput } from 'react-native-gesture-handler';
import { StyleProvider } from '../Stylecontext';
import Comp from '../Comp';


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


//========================= reducer logic

// three thigns we requrie
// StateType - MyState
// initialState ( it will also be of MyState)
//  actionType - 

// for state (it will be object type)
type MyState = {
  count : number
}

type MyAction = 
   {type : 'increment'} | {type: 'decrement'}


const initialState : MyState = { count: 0 };

function reducer(state: MyState, action : MyAction) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
}


const Home = ({navigation} : HomeScreenProps) => {

  const [state, dispatch] = useReducer(reducer, initialState);

    // const [counter, setCounter] = useState<number>(0);
    // const [name, setName] = useState<string>('');
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [user, setUser] = useState<User>( {
    //     name: '',
    //     email: ''
    // });
    // const [item, setItem] = useState<Item[]>([]);
    // const [detail, setDetail] = useState<null>(null);

    const ref = useRef<TextInput>(null);

// I have a child component name Comp where I want to use the context
// but you have to wrap the parent compnent as well 
// so wrapping view in return with Provider
  return (
    <StyleProvider>
    <View>
      <Text style={{padding: 20, borderWidth: 1, color: 'black'}}
      onPress={()=> {
        navigation.navigate('Settings', {
            name: 'Ajay',
            email: 'ajay@gmail.com'
        });
      }}>I am home</Text>
      <TextInput ref={ref}> Hey</TextInput>
      <Text style={{fontSize:30, color : 'green'}}>Count: {state.count}</Text>
      <Button title="+" onPress={() => dispatch({ type: 'increment' })} />
      <Button title="-" onPress={() => dispatch({ type: 'decrement' })} />
      <Comp />
      </View>
    </StyleProvider>

  )
}

export default Home;

//============reducer logic will still work without giving the type
// below is javascript version
// it will for complex state management when state does not handle cleanly
// complex logic handle inside the component ..see above like multipe cases state logic

// import React, { useReducer } from 'react';
// import { View, Text, Button } from 'react-native';

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <View>
//       <Text>Count: {state.count}</Text>
//       <Button title="+" onPress={() => dispatch({ type: 'increment' })} />
//       <Button title="-" onPress={() => dispatch({ type: 'decrement' })} />
//     </View>
//   );
// }




