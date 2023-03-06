import React from "react";
import {Box, Center, Text, View} from 'native-base';
import Colors from "../color";
import {FontAwesome} from '@expo/vector-icons';
import Buttone from "./Buttone";

const EmptyCart = () => {
    return (
        <Box flex={1} px={1}>
            <Center h='75%'>
                <Center w={200} h={200} bg={Colors.main} rounded='full'>
                     <FontAwesome name='shopping-basket' size={64} color={Colors.white}/>
                </Center>
                <Text color={Colors.main} bold mt={5}>
                    Cart is empty!
                </Text>
            </Center>
            <Buttone bg={Colors.yellow} color={Colors.white}>
                Continue Shopping
            </Buttone>
        </Box>
    );
};

export default EmptyCart;