import {Box, NativeBaseProvider, Text} from 'native-base';
import React from 'react';
import CartScreen from './assets/src/Screens/CartScreen';
import ProductDetails from './assets/src/Screens/ProductDetailsScreen';
import ProfileScreen from './assets/src/Screens/ProfileScreen';


export default function App() {
  return (
    <NativeBaseProvider>
      <ProfileScreen />
    </NativeBaseProvider>
  );
}

