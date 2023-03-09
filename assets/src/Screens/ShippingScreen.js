import React from "react";
import {View, Text, Box, Center, ScrollView, FormControl, Input} from 'native-base';
import Colors from "../color";
import Buttone from "../Components/Buttone";

const ShippingInputs = [
    {
        label:"CITY",
        type: 'text'
    },
    {
        label:"POSTCODE",
        type: 'text'
    },
    {
        label:"ADDRESS",
        type: 'text'
    },
    {
        label:"REGION",
        type: 'text'
    },
]

function ShippingScreen () {
    return (
        <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
            <Center pb={15}>
                <Text color={Colors.whiteSolid} fontSize={15} bold> 
                    Delvery Address
                </Text>
            </Center>
            <Box
                h={'full'}
                bg={Colors.whiteSolid}
                px={5}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    {ShippingInputs.map((i) =>(
                        <FormControl> 
                            <FormControl.Label
                                _text={{
                                    fontSize: '12px',
                                    fontWeight:'bold'
                                }}
                            >
                                {i.label}
                            </FormControl.Label>
                            <Input
                                type={i.type}
                                borderWidth={0}
                                rounded={30}
                                bg={Colors.lightGrey}
                                py={4}
                                color={Colors.main}
                                _focus={{
                                    bg:Colors.lightGrey,
                                    borderWidth:'1,',
                                    borderColor:Colors.main
                                
                                }}
                            />
                        </FormControl>
                    ))}
                    <Buttone bg={Colors.main} color={Colors.whiteSolid}>
                        CONTINUE
                    </Buttone>                    
                </ScrollView>
            </Box>
        </Box>
    )
}

export default ShippingScreen;