import React, {useState} from 'react'
import { View, Text, Button,FlatList, TouchableOpacity } from 'react-native'
import { globalStyles } from '../assets/globalStyle'
import Card from '../shared/card'

export default function Home({navigation}){

    const [reviews, setReviews] = useState([
        { title:'Diablo III', rating: 5, body:'lorem ipsum', key:'1' },
        { title:'World of Warcraft', rating: 5, body:'lorem ipsum', key:'2' },
        { title:'AFK Arena', rating: 3, body:'lorem ipsum', key:'3' },
        { title:'王者荣耀', rating: 2, body:'lorem ipsum', key:'4' },

    ])

    const pressHandler = () => {
        navigation.navigate('ReviewDetailPage')
    }
    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item ) }>
                        <Card>
                            <Text style={globalStyles.title}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            {/* <Text style={globalStyles.titleText}>Home Page</Text>
            <Button title='Check Reviews' onPress={pressHandler} /> */}
        </View>
    )
}
