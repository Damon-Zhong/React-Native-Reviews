import React from 'react'
import { View, Text, Button } from 'react-native'
import { globalStyles } from '../assets/globalStyle'

export default function Home({navigation}){

    const pressHandler = () => {
        navigation.navigate('ReviewDetails')
    }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Page</Text>
            <Button title='Check Reviews' onPress={pressHandler} />
        </View>
    )
}
