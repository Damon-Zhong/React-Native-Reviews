import React from 'react'
import { View, Text, Button, Image } from 'react-native'
import { globalStyles, images } from '../assets/globalStyle'
import Card from '../shared/card'

export default function ReviewDetail({ navigation }){

    const pressHandler = () => {
        navigation.goBack()
    }

    const rating = navigation.getParam('rating')

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <View style={globalStyles.rating}>
                    <Text>Game Rating: </Text>
                    {/* <Text>{navigation.getParam('rating')}</Text> */}
                    <Image source={images.ratings[rating]} />
                    {/* <Button title='Back to Home' onPress={pressHandler} /> */}
                </View>
            </Card>
        </View>
    )
}