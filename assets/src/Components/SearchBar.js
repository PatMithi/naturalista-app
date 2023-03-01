import { Pressable, Text } from "react-native";
import React from "react";
import {HStack, Input} from 'native-base';
import Colors from "../color";
import { SimpleLineIcons, FontAwesome } from '@expo/vector-icons';

function SearchBar () {
    return (
        <HStack 
            space={5} 
            w="full" 
            px={6} 
            bg={Colors.main} 
            py={4} 
            alignItems="center" 
            safeAreaTop
        >

            <Input 
                placeholder="Beard oil, caster oil ...." 
                w='75%' 
                bg={Colors.whiteSolid} 
                type='search'
                h={12}
                borderWidth={0}
                variant='rounded'
                _focus={{
                    bg: Colors.whiteSolid
                }}
            />
            <Pressable>
                <SimpleLineIcons name="bag" size={27} color={Colors.yellow} />
            </Pressable>
            <Pressable>
                <FontAwesome name="user-o" size={27} color={Colors.yellow} />
            </Pressable>
        </HStack>
    )
}

export default SearchBar;