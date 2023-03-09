import React from "react";
import { View, Text, ScrollView, Center, HStack, Image, Box } from "native-base";
import Colors from "../color";

const MenuOptions = [
    {
        title: 'Hair Products',
        uri: 'https://firebasestorage.googleapis.com/v0/b/msikayaalimi.appspot.com/o/images%2FNaturalista-hair-bundle.png?alt=media&token=db65ad1b-3550-480f-ba4e-0b78621fc658'
    },
    {
        title: 'Haircare Routines',
        uri: 'https://firebasestorage.googleapis.com/v0/b/msikayaalimi.appspot.com/o/images%2Frehydrating.png?alt=media&token=a9a6c760-2736-4960-a684-32c4fd88017b'
    },
    {
        title: 'HairStylist Hub',
        uri: 'https://firebasestorage.googleapis.com/v0/b/msikayaalimi.appspot.com/o/images%2FNaturalista-login-background.jpeg?alt=media&token=701a9799-d693-4d0f-ac6e-0a17841897a7'
    },
    {
        title: 'HairStylist Hub',
        uri: 'https://firebasestorage.googleapis.com/v0/b/msikayaalimi.appspot.com/o/images%2Frehydrating.png?alt=media&token=a9a6c760-2736-4960-a684-32c4fd88017b'
    },
    {
        title: 'Hair Products',
        uri: 'https://firebasestorage.googleapis.com/v0/b/msikayaalimi.appspot.com/o/images%2FNaturalista-hair-bundle.png?alt=media&token=db65ad1b-3550-480f-ba4e-0b78621fc658'
    },
    {
        title: 'Haircare Routines',
        uri: 'https://firebasestorage.googleapis.com/v0/b/msikayaalimi.appspot.com/o/images%2Frehydrating.png?alt=media&token=a9a6c760-2736-4960-a684-32c4fd88017b'
    },
    {
        title: 'HairStylist Hub',
        uri: 'https://firebasestorage.googleapis.com/v0/b/msikayaalimi.appspot.com/o/images%2FNaturalista-login-background.jpeg?alt=media&token=701a9799-d693-4d0f-ac6e-0a17841897a7'
    },
    {
        title: 'HairStylist Hub',
        uri: 'https://firebasestorage.googleapis.com/v0/b/msikayaalimi.appspot.com/o/images%2Frehydrating.png?alt=media&token=a9a6c760-2736-4960-a684-32c4fd88017b'
    }
]

function HomeMenu () {
    return(
        <Box h='110px' mt={2}>
            <ScrollView flex={1} horizontal={true} showsHorizontalScrollIndicator={false} h='15%' bg={Colors.whiteSolid} mx={4} w='95%'>
                <HStack flex={1} h='1/3' w='full' space={4}  >
                    {MenuOptions.map((i) =>(
                        <Center h={'110px'} rounded='full'>
                            <Image
                                source={{uri: i.uri}}
                                alt={i.title}
                                rounded='full'
                                w='65px'
                                h='65px'
                                resizeMode='cover'
                            />
                            <Text w={'70px'} textAlign='center'>
                                {i.title}
                            </Text>
                        </Center>  
                    ))}    
                </HStack>
            </ScrollView>
        </Box>
        
    )
}

export default HomeMenu;