import React from "react";
import { Box, Heading, HStack, Text, View, Image, Center } from "native-base";
import Colors from "../color";

function TipOfTheDay () {
    return (
        <Box w='full' h='160px' bg={Colors.grey} mt={2}>
            <Heading textAlign='center' fontSize={18} color={Colors.main} mt={2} fontWeight='normal'>Tip of the Day</Heading>
            <HStack space={5} w='70%' h='1/2' p={2}>
                <Image
                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/msikayaalimi.appspot.com/o/images%2Frehydrating.png?alt=media&token=a9a6c760-2736-4960-a684-32c4fd88017b'}}
                    alt={'Tip'}
                    w='100px'
                    h='100px'
                    resizeMode='cover'
                />
                <Center>
                    Use Plastic or wooden 
                    combs to protect your hair 
                    from the damage caused
                    by metal combs
                </Center>
            </HStack>
        </Box>
    )
}

export default TipOfTheDay;