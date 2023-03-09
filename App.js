import {Box, NativeBaseProvider, Text} from 'native-base';
import React from 'react';
import ProfileScreen from './assets/src/Screens/ProfileScreen';
import ShippingScreen from './assets/src/Screens/ShippingScreen';
import RegistrationScreen from './assets/src/Screens/RegistrationScreen';
import MenuScreen from './assets/src/Screens/MenuScreen';
import ProductsScreen from './assets/src/Screens/ProductsScreen';
import HomeScreen from './assets/src/Screens/HomeScreen';


export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
}

