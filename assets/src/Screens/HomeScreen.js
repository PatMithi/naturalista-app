import React from "react";
import { View, Text, Box } from "native-base";
import Colors from "../color";
import SearchBar from "../Components/SearchBar";
import ProductsComponent from "../Components/ProductsComponent";
import NavigationBottom from "../Components/NavigationBottom";
import HomeBanner from "../Components/HomeBanner";
import HomeMenu from "../Components/HomeMenu";
import TipOfTheDay from "../Components/TipOfTheDay";

function HomeScreen() {
    return (
        <Box flex={1} bg={Colors.whiteSolid }>
            <SearchBar/> 
            <HomeBanner/>
            <HomeMenu/>
            <TipOfTheDay/>
            <NavigationBottom />
        </Box>
    );
} 

export default HomeScreen;