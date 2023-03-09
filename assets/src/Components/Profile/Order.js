import React from "react";
import {Box, Button, HStack, Pressable, ScrollView, Text, View} from 'native-base';
import Colors from "../../color";

export default function Order () {
    return (
        <Box h='full' bg={Colors.whiteSolid} pt={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Pressable>
                    <HStack 
                        space={4} 
                        justifyContent='space-between' 
                        alignItems={'center'}
                        bg={Colors.lightGrey}
                        py={5}
                        px={2}
                    >
                        <Text fontSize={9} color={Colors.blue} isTruncated>
                            3598349484984
                        </Text>
                        <Text fontSize={9} color={Colors.blue} isTruncated>
                            PAID
                        </Text>
                        <Text fontSize={9} color={Colors.blue} isTruncated>
                            Jan 23. 2023
                        </Text>
                        <Button
                            px={7} 
                            py={1.6}
                            rounded={50}
                            bg={Colors.main}
                            _text={{
                                color:Colors.whiteSolid
                            }}    
                            _pressed={{
                                bg: Colors.main
                            }}
                        >
                            £267
                        </Button>
                        </HStack>
                </Pressable>
                {/* Not paid */}
                <Pressable>
                    <HStack 
                        space={4} 
                        justifyContent='space-between' 
                        alignItems={'center'}
                        py={5}
                        px={2}
                    >
                        <Text fontSize={9} color={Colors.blue} isTruncated>
                            3598349484984
                        </Text>
                        <Text fontSize={9} color={Colors.blue} isTruncated>
                            PAID
                        </Text>
                        <Text fontSize={9} color={Colors.blue} isTruncated>
                            Jan 15. 2022
                        </Text>
                        <Button
                            px={7} 
                            py={1.6}
                            rounded={50}
                            bg={Colors.red}
                            _text={{
                                color:Colors.whiteSolid
                            }}    
                            _pressed={{
                                bg: Colors.main
                            }}
                        >
                            £267
                        </Button>
                        </HStack>
                </Pressable>
            </ScrollView>
        </Box>
    )
}