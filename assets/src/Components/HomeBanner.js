import React from "react";
import { View, Text, Box, Image, Button, VStack } from "native-base";
import Colors from "../color";
import Buttone from "./Buttone";

function HomeBanner () {
    return (
        <Box h={'1/3'} bg={Colors.whiteSolid}>
            <Image
               h={'full'}
               w='full'
               alt="home banner"
               resizeMode="cover"
               source={{uri:'https://firebasestorage.googleapis.com/v0/b/msikayaalimi.appspot.com/o/images%2FNaturalista-login-background.jpeg?alt=media&token=701a9799-d693-4d0f-ac6e-0a17841897a7'}}
               zIndex={1} 
            />
            <Box zIndex={2} bg={Colors.white} h={'1/2'} w='70%' mx={'15%'} my={'15%'} position='absolute'>
                <VStack space={2} alignItems={'center'}>
                    <Text mt={8} textAlign={'center'}>Brand New Formula to help increase hair growth!</Text>
                    <Button
                        bg={Colors.white}
                        borderColor={Colors.main}
                        borderWidth={1}
                        rounded={30}
                        w={32}
                        _text={{
                            color:Colors.main,
                            fontWeight:'bold'
                        }}
                    >
                        Read More
                    </Button>
                </VStack>
                
            </Box>
        </Box>
    )
}

export default HomeBanner;