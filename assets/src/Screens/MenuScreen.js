import React from "react";
import { View, Text, Box } from "native-base";
import MenuItem from "../Components/MenuIem";
import NavigationBottom from "../Components/NavigationBottom";
import SearchBar from "../Components/SearchBar";

function MenuScreen () {
    return (
        <Box flex={1} >
            <SearchBar />
            <MenuItem/>
            <NavigationBottom />
        </Box>

    )
}

export default MenuScreen;