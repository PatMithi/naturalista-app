import { Text, ScrollView, Flex, Pressable, Image, Box, Heading } from "native-base";
import React from "react";
import Colors from "../color";
import products from "../data/Products";
import Rating from "./Rating";

function ProductsComponent () {
    return (
        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
            <Flex flexWrap='wrap'
                direction="row"
                justifyContent='space-between'
                px={6}
            >
                {
                    products.map((product) => (
                        <Pressable 
                            key={product._id}
                            w='47%'
                            bg={Colors.lightGrey}
                            rounded='lg'
                            shadow={2}
                            pt={0}
                            my={3}
                            pb={2}
                            overflow='hidden'
                        >
                            <Box
                                bg={Colors.whiteSolid}
                                w='full'
                                h={190}
                                rounded='2xl'
                                shadow='3'
                            >
                                <Image source={{uri:product.image}} alt={product.name} w='full' h='24' resizeMode='cover'/>
                                <Box px={4} pt={1}>
                                    <Heading size='sm' bold>
                                        {product.name}
                                    </Heading>
                                    <Text>
                                        {product.price}
                                    </Text>
                                    <Rating value={product.rating}/>
                                </Box>
                            </Box>
                            
                             
                        </Pressable>
                    ))
                }
            </Flex>
        </ScrollView>
    )
}

export default ProductsComponent;