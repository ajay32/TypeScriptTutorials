import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { MyContext } from './Stylecontext'

// React.FC tells is a react function component
const Comp : React.FC = () => {

    // useContext will take the context and will return the MyContext
    const value = useContext(MyContext)

  return (
    <View style={{backgroundColor: value.bg, height: 200, width : '100%'}}>
      <Text style={{fontSize:20, color: value.color}}>Comp</Text>
    </View>
  )
}

export default Comp