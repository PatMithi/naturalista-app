import React from "react";
import { View, Text, Box, Image, Heading, VStack, Input, Button, Pressable } from "native-base";
import Colors from "../color";
import { AntDesign, Ionicons } from '@expo/vector-icons';

function LoginScreen () {
    return (
        <Box flex={1} bg={Colors.main}>
            <Image 
                flex={1} 
                alt="Logo" 
                resizeMode='cover'
                size='lg'
                w='full'
                h='full'
                source={require('../../images/Naturalista-login-background.jpeg')} />
            <Box 
                bg={Colors.white}
                w='5/6' 
                h='2/5' 
                position='absolute'
                top='56'
                left='6'
                px='6'
                justifyContent='center'
                borderRadius='2xl'
            >
                <VStack space={2} pt='0' left='1/6' justifyContent='space-evenly' justifyItems={"center"}>
                    <Image 
                        left={8}
                        alt="Logo" 
                        resizeMode='cover'
                        size='sm'
                        w='50%%'
                        h='40%'
                        source={require('../../images/Naturalista-logo.jpeg')} />
                    <Input 
                        InputLeftElement={
                            <AntDesign name="user" size={24} color={Colors.yellow} />
                        }
                        paddingLeft='1'
                        variant='underlined' 
                        placeholder="Email Address" 
                        w='70%' 
                        bg={Colors.whiteSolid}
                        borderBottomColor={Colors.main}
                    />
                    <Input 
                        InputLeftElement={
                            <Ionicons name="eye" size={24} color={Colors.yellow} />
                        }
                        paddingLeft='1'
                        variant='underlined' 
                        placeholder="*********" 
                        w='70%' 
                        bg={Colors.whiteSolid}
                        borderBottomColor={Colors.main}
                    />
                </VStack>
                <Button
                    _pressed={{
                        bg: Colors.main,
                    }}
                    left='1/5'
                    justifyContent='center'
                    my={30}
                    w="40"
                    rounded={50}
                    bg={Colors.main}
                    _text={{
                        color: Colors.whiteSolid
                    }}
                    >
                    Login
                </Button>
                <Pressable mb='5' left='1/4' pt={0} justifyContent='center'>
                    <Text color={Colors.black}>Not registered? Sign Up</Text>
                </Pressable>


            </Box>
        </Box>
    );
}

export default LoginScreen;