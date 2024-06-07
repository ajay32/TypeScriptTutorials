import { View, Text } from 'react-native'
import React, { FunctionComponent, ReactElement } from 'react'

interface MyProps {
    name: string,
    email: string,
    age: number
}


//const FunctionalComp:FunctionComponent<MyProps> = ({name, email, age}: MyProps) : ReactElement => {
    const FunctionalComp = ({name, email, age}: MyProps) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default FunctionalComp