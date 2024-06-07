import React, { Component } from 'react'
import { Text, View } from 'react-native'

interface MyProps {
    name: string,
    email: string,
    age: number
}

interface MyState {
    counter: number
}

export class ClassComp extends Component<MyProps, MyState> {
  render() {
    return (
      <View>
        <Text> {this.props.name + " "+ this.props.age}</Text>
      </View>
    )
  }
}

export default ClassComp
