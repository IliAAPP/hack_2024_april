import React from 'react'
// import { store } from './src/store'
import MapScreen from './MapScreen'
import { View } from 'react-native'
import Main from './components/Main'
import Authorization from './components/Authorization'
import * as Font from 'expo-font';
import Gamification from './components/Gamification'
import Payment from './components/Payment'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

const lightFont = require('./assets/fonts/MontserratAlternates-Light.ttf');
const boldFont = require('./assets/fonts/MontserratAlternates-SemiBold.ttf');

const loadFonts = async () => {
  await Font.loadAsync({
    'mt-light': lightFont,
    'mt-bold': boldFont
  });
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Authorization" component={Authorization} />
        <Stack.Screen name="Gamification" component={Gamification} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// const App = () => (
//   <View>
//     {/* <MapScreen /> */}
//     {/* <Main/> */}
//     {/* <Authorization/> */}
//     {/* <Gamification />     */}
//     <Payment/>
//   </View>
  
// )

export default App