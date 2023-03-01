import React from "react";
import { View, Text, Box, Center, Image, VStack, Button } from "native-base";
import Colors from "../color";
import Buttone from "../Components/Buttone";

function UnverifiedScreen () {
    return (
        <Box
            flex={1}
            bg={Colors.white}
            safeAreaTop
        >
            <Center
                w='full'
                h={250}
            >
                <Image 
                    source={require("../../images/Naturalista-logo.jpeg")}
                    alt="Logo"
                    resizeMode="contain"
                />
            </Center>
            <VStack space={6} px={5} alignItems="center">
                <Buttone bg={Colors.main} color={Colors.whiteSolid}>REGISTER</Buttone>
                <Buttone bg={Colors.yellow} color={Colors.whiteSolid}>LOGIN</Buttone>
            </VStack>             
        </Box>
    )
}

export default UnverifiedScreen;