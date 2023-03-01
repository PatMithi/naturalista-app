import React from "react";
import { View, Text, Box, Image, Heading, VStack, Input, Button, Pressable } from "native-base";
 import Colors from "../color";
import { AntDesign, Ionicons } from '@expo/vector-icons';

function RegistrationScreen () {
    return (
        <Box flex={1} bg={Colors.whiteSolid}>
            
            <Box 
                bg={Colors.white}
                w='full' 
                h='1/4' 
                position='fixed'
                px='6'
                justifyContent='center'
            >
                <Image 
                    flex={1} 
                    alt="Logo" 
                    resizeMode='contain'
                    w='full'
                    h='full'
                    source={require('../../images/Naturalista-logo.jpeg')} 
                />
            </Box>
            <Box
                bg={Colors.whiteSolid}
                w='full'
                h='3/4'
                top='1/4'
                position='absolute'
                px='6'
                justifyContent='center'
                >
                <Box 
                bg={Colors.purpletransparent}
                w='100%' 
                h='100%' 
                position='absolute'
                left='6'
                px='6'
                justifyContent='center'
                borderRadius='2xl'
            >
                <Heading color={Colors.yellow} left='1/3' pt={6}>Register</Heading>
                <Text alignContent='center' ml={2} color={Colors.white}>Join today and get one step closer to healthier hair!</Text>
                <VStack space={5} pt='0' left='5%' justifyContent='space-evenly' justifyItems={"center"}>
                <Input 
                        
                        variant='rounded' 
                        placeholder="First Name" 
                        w='90%' 
                        h='10%'
                        bg={Colors.grey}
                        borderBottomColor={Colors.yellow}
                    />
                <Input 
                        
                        variant='rounded' 
                        placeholder="Last Name" 
                        w='90%' 
                        h='10%'
                        bg={Colors.grey}
                        borderBottomColor={Colors.yellow}
                    />
                <Input 
                       
                        variant='rounded' 
                        placeholder="Last Name" 
                        w='90%' 
                        h='10%'
                        bg={Colors.grey}
                        borderBottomColor={Colors.yellow}
                    />
                <Input 
                       
                        variant='rounded' 
                        placeholder="Username" 
                        w='90%' 
                        h='10%'
                        bg={Colors.grey}
                        borderBottomColor={Colors.yellow}
                    />
                <Input 
                        
                        variant='rounded' 
                        placeholder="Email Address" 
                        w='90%' 
                        h='10%'
                        bg={Colors.grey}
                        borderBottomColor={Colors.yellow}
                    />
                <Input 
                        variant='rounded' 
                        placeholder="Phone Number" 
                        w='90%' 
                        h='10%'
                        bg={Colors.grey}
                        borderBottomColor={Colors.yellow}
                    />
                </VStack>
                <Button
                    _pressed={{
                        bg: Colors.main,
                    }}
                    left='10%'
                    justifyContent='center'
                    my={30}
                    w="60%"
                    rounded={50}
                    bg={Colors.yellow}
                    _text={{
                        color: Colors.whiteSolid
                    }}
                    >
                    Register
                </Button>
            </Box>
                
                </Box>
        </Box>
    )
}

export default RegistrationScreen;