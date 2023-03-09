import React from "react";
import {View, Text, Center, Box, Image, HStack, VStack, ScrollView} from 'native-base';
import Colors from "../color";
import {FontAwesome} from '@expo/vector-icons';
import Buttone from "./Buttone";

const MenuOptionsLeft = [
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

const MenuOptionsRight = [
    {
        title: 'Beard Products',
        uri: 'https://firebasestorage.googleapis.com/v0/b/msikayaalimi.appspot.com/o/images%2FNaturalista-login-background.jpeg?alt=media&token=701a9799-d693-4d0f-ac6e-0a17841897a7'
    },
    {
        title: 'Blogs',
        uri: 'https://firebasestorage.googleapis.com/v0/b/msikayaalimi.appspot.com/o/images%2Frehydrating.png?alt=media&token=a9a6c760-2736-4960-a684-32c4fd88017b'
    },
    {
        title: 'Announcements',
        uri: 'https://firebasestorage.googleapis.com/v0/b/msikayaalimi.appspot.com/o/images%2Frehydrating.png?alt=media&token=a9a6c760-2736-4960-a684-32c4fd88017b'
    },
    {
        title: 'HairStylist Hub',
        uri: 'https://firebasestorage.googleapis.com/v0/b/msikayaalimi.appspot.com/o/images%2Frehydrating.png?alt=media&token=a9a6c760-2736-4960-a684-32c4fd88017b'
    }
]

function MenuItem () {
    return(
        <ScrollView flex={1} showsVerticalScrollIndicator={false} h='full'>
            <HStack flex={1} p={1} w='full' h={'full'}>
                <VStack h='full' mt={'8'} space={16} ml={'15%'}>
                    {MenuOptionsLeft.map((i) => (
                        <Center w={'full'} h={'110px'} rounded='full'>
                            <Image 
                            source={{uri: i.uri}}
                            alt={i.title}
                            h='full'
                            w='full'
                            resizeMode='cover'
                            rounded='full'
                            
                        />
                        <Text color={Colors.black} mt={4}>
                        {i.title}
                        </Text>
                        </Center>
                        
                    ))}
                </VStack>
                <VStack h='full' mt={'8'} space={'16'} ml={'15%'}>
                    {MenuOptionsRight.map((i) => (
                        <Center w={'full'} h={'110px'} rounded='full'>
                            <Image 
                            source={{uri: i.uri}}
                            alt={i.title}
                            h='full'
                            w='full'
                            resizeMode='cover'
                            rounded='full'
                            
                        />
                        <Text color={Colors.black} mt={4}>
                        {i.title}
                        </Text>
                        </Center>
                        
                    ))}
                </VStack>
            </HStack>
        </ScrollView>
        
    )
}

export default MenuItem;