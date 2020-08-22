import * as Font from 'expo-font'
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo'
// import Home from './components/Home'
// import Routers from './routes/homeStack'
import Routers from './routes/drawer'

const getFonts = async () => {
  return await Font.loadAsync({
    'DoHyeon' : require('./assets/fonts/DoHyeon-Regular.ttf')
  })
}


export default function App() {
  const [pageLoad, setPageLoad] = useState(false)

  if(pageLoad){
    return (
      <Routers />
    )
  }else{
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setPageLoad(true)}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
