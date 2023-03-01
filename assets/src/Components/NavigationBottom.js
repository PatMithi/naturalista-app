import { Pressable, Text } from "react-native";
import React from "react";
import {HStack} from 'native-base';
import Colors from "../color";
import { Entypo, Feather } from '@expo/vector-icons';

function NavigationBottom() {
    return (
        <HStack 
            space= '32' 
            w="full" 
            px={6} 
            bg={Colors.white} 
            py={1} 
            pt={5}
            borderColor={Colors.main}
            alignItems="center" 
            borderTopStyle='solid'
            borderTopColor={Colors.main}
            safeAreaBottom
        >
            
            <Pressable>
                <Entypo name="shop" size={32} color={Colors.main} />
            </Pressable>
            <Pressable>
                <Feather name="home" size={32} color={Colors.main} />
            </Pressable>
            <Pressable>
                <Feather name="menu" size={32} color={Colors.main} />
            </Pressable>
        </HStack>

        
    )
}

export default NavigationBottom;