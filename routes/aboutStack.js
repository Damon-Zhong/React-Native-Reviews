import { createStackNavigator } from 'react-navigation-stack'
// import { createAppContainer } from 'react-navigation'
// import HomePage from '../components/Home'
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
        navigationOptions: {
            title: 'About Page'
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