import React from "react";
import {Text, View, Box, ScrollView, VStack, FormControl, Input} from 'native-base';
import Colors from "../../color";
import Buttone from '../Buttone';

const Inputs = [
    {
        label:'USERNAME',
        type:'text'
    },
    {
        label:'EMAIL',
        type:'text'
    },
    {
        label:'NEW PASSWORD',
        type:'password'
    },
    {
        label:'CONFIRM PASSWORD',
        type:'password'
    },
]

export default function Profile () {
    return (
        <Box h='full' bg={Colors.whiteSolid} px={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack
                    space={8}
                    mt={5}
                    pb={10}>
                    {Inputs.map((i, index) => (
                        <FormControl>
                            <FormControl.Label _text={{
                                fontSize: '12px',
                                fontWeight:'bold',
                                px:2
                            }}>
                                {i.label}
                            </FormControl.Label>
                            <Input
                                rounded={30} 
                                borderWidth={0}
                                bg={Colors.lightGrey}
                                py={3}
                                type={i.type}
                                color={Colors.main}
                                fontSize={15}
                                _focus={{
                                    bg:Colors.lightGrey,
                                    borderColor:Colors.yellow,
                                    borderWidth: 1,
                                }} 
                            />
                        </FormControl>
                    ))}
                    <Buttone bg={Colors.main} color={Colors.whiteSolid}>
                        UPDATE DETAILS
                    </Buttone> 
                    <Buttone bg={Colors.whiteSolid} color={Colors.yellow} borderColor={Colors.yellow} borderWidth={1.5}>
                        LOGOUT
                    </Buttone>                    
                </VStack>
            </ScrollView>
        </Box>
    )
}