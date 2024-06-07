import { View, Text, Image } from 'react-native'
import React from 'react'

interface ProductItem {
    item : {
        category: string,
        description: string,
        id: number,
        image: string,
        price: number,
        rating: any,
        title: string
    }
 
}

const ProductItem = ({item} : ProductItem) => {
  return (
    <View style={{flexDirection:'row', margin: 20, alignSelf: 'center'}}>
        <Image source={{uri : item.image}} style={{width:60, height:60}} />
   <View style={{width:'90%' , backgroundColor: 'white', marginLeft:10}}>
      <Text style={{fontWeight: 500}}>{item.title}</Text>
      <Text style={{fontWeight: 100}}>{item.description.length > 50? item.description.substring(0,20) : item.description}</Text>
    </View>
    </View>
 
  )
}

export default ProductItem