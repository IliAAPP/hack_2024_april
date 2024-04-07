import React from 'react';
import MapScreen from './MapScreen';
import { View } from 'react-native';
import Main from './components/Main';
import Authorization from './components/Authorization';
import * as Font from 'expo-font';
import Gamification from './components/Gamification';
import PushNotifications from './components/PushNotifications';
import Payment from './components/Payment';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Admin from './components/Admin';
import { useEffect } from 'react';

const lightFont = require('./assets/fonts/MontserratAlternates-Light.ttf');
const boldFont = require('./assets/fonts/MontserratAlternates-SemiBold.ttf');

const loadFonts = async () => {
  await Font.loadAsync({
    'mt-light': lightFont,
    'mt-bold': boldFont
  });
};

const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    // скриншоты готовых страниц находятся в папке img_result

  // <Authorization></Authorization>
  // <Admin/>
  <Gamification></Gamification>
  // <MapScreen></MapScreen>
  // <Payment></Payment>
  // <Main></Main>
  
  );
}

export default App;
