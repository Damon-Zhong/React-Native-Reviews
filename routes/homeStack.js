import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import HomePage from '../components/Home'
import ReviewDetailPage from '../components/reviewDetails'

// const Stack = createStackNavigator()

// const RootStack = () => {
//     return(
//         <Stack.Navigator
//             initialRouteName='Home'
//             screenOptions={{ gestureEnabled: false }}
//         >
//             <Stack.Screen
//                 name='Home'
//                 component={HomePage}
//                 options={{ title:'Home Page'}}
//             />
//             <Stack.Screen 
//                 name='Review Detail'
//                 component={ReviewDetailPage}
//                 options={{ title:'Review Details'}}
//             />

//         </Stack.Navigator>
//     )
// }

// export default RootStack

//Stack Navigation
const screens = {
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            title: 'Home Page',
            headerStyle: {
                backgroundColor: 'coral'
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetailPage,
        navigationOptions: {
            title: 'Review Detail'
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#333', height: 60 }
    }
})

// export default createAppContainer(HomeStack)
export default HomeStack