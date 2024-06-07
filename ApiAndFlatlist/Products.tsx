import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'

// press 4 for refresh in the metro .. to refresh the project
const Products = () => {

    // now define type for the items.. copy the respose and format
    // it online and see the keys and create the interface for it
    // json curios concept.com

    interface ProductState {
        category: string,
        description: string,
        id: number,
        image: string,
        price: number,
        rating: any,
        title: string
    }

    // now I want to use these proudcts in child component and pass the 
    // data when I get from the api so need state 
    const [products, setProducts] = useState<ProductState[]>([])

    


    // useEffect to hit the api and get the prodcuts
     useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setProducts(json)
        })
    };

// you can not use comment inside the  return
  return (
    <View>
     <FlatList 
     data={products}
     renderItem={({item, index}:{item: ProductState, index : number}) => {
        return <ProductItem item={item}/>
     }} />
    </View>
  )
}

export default Products;

// https://fakestoreapi.com/products