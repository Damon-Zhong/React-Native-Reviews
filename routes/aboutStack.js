import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import Header from '../shared/header'
import About from '../components/About'

const screens = {
    // HomePage: {
    //     screen: HomePage,
    //     navigationOptions: {
    //         title: 'Home Page',
    //         headerStyle: {
    //             backgroundColor: 'coral'
    //         }
    //     }
    // },
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return{
                header: () => <Header navigation={navigation} title='About Page' />
            }
            // title: 'About Page'
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#333', height: 60 }
    }
})

export default AboutStack