import React from 'react'
import { View, Text, Button } from 'react-native'
import { globalStyles } from '../assets/globalStyle'

export default function ReviewDetail({ navigation }){

    const pressHandler = () => {
        navigation.goBack()
    }

    return (
        <View style={globalStyles.container}>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
            <Button title='Back to Home' onPress={pressHandler} />
        </View>
    )
    
}