import {Box, NativeBaseProvider, Text} from 'native-base';
import React from 'react';
import CartScreen from './assets/src/Screens/CartScreen';
import ProductDetails from './assets/src/Screens/ProductDetailsScreen';


export default function App() {
  return (
    <NativeBaseProvider>
      <CartScreen />
    </NativeBaseProvider>
  );
}

