import React from "react";
import { View, Text, Box } from "native-base";
import Colors from "../color";
import SearchBar from "../Components/SearchBar";
import ProductsComponent from "../Components/ProductsComponent";
import NavigationBottom from "../Components/NavigationBottom";

function ProductsScreen() {
    return (
        <Box flex={1} bg={Colors.whiteSolid }>
            <SearchBar/> 
            <ProductsComponent/>
            <NavigationBottom />
        </Box>
    );
} 

export default ProductsScreen;