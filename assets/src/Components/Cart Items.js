import React from "react";
import {Box, Center, Hidden, HStack, Image, Pressable, Text} from 'native-base';
import { Animated, TouchableHighlight, TouchableOpacity, StatusBar } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import products from "../data/Products";
import Colors from "../color";
import {FontAwesome} from '@expo/vector-icons'

const data = products;

const renderItems = (data) => {
    <Pressable >
        <Box ml={6} mb={3}>
            <HStack 
                alignItems='center' 
                bg={Colors.whiteSolid} 
                shadow={1} 
                rounded={10}
                overflow='hidden' >
                <Center w='25%' bg={Colors.main}>
                    {/* <Image 
                        source={{uri:data.item.image}} 
                        alt={data.item.name} 
                        w='full'
                        h={24}
                        resizeMode='contain'/> */}
                </Center>
            </HStack> 
        </Box>
    </Pressable>
};

const hiddenItems = () => {
    <Pressable 
        w={50} 
        roundedTopRight={10} 
        roundedBottomRight={10}
        h='88%'
        ml='auto'
        justifyContent='center'
        color={Colors.red}>
        <Center alignItems='center'>
            <FontAwesome name="trash" size={24} color={Colors.whiteSolid}/>
        </Center>
    </Pressable>
};

const Swiper = () => {
    <SwipeListView
        rightOpenValue={-50}
        previewRowKey='0'
        previewOpenValue={-40}
        previewOpenDelay={3000}
        renderHiddenItem={hiddenItems}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false} />
};

function CartItems() {
    return (
        <Box mr={6} flex={1}>
            <Swiper/>
        </Box>
    );
};

export default CartItems;