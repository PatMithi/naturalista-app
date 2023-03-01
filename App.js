import {Box, NativeBaseProvider, Text} from 'native-base';
import React from 'react';
import ProductDetails from './assets/src/Screens/ProductDetailsScreen';


export default function App() {
  return (
    <NativeBaseProvider>
      <ProductDetails />
    </NativeBaseProvider>
  );
}

