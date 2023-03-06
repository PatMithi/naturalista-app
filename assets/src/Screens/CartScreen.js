import React from "react";
import { View, Text, Box, Center, ScrollView, HStack, Button } from "native-base";
import Colors from "../color";
import EmptyCart from "../Components/EmptyCart";
import CartItems from "../Components/Cart Items";
import Buttone from "../Components/Buttone";

function CartScreen () {
    return (
        <Box flex={1} safeAreaTop bg={Colors.whiteSolid}>
            <Center w='full' py={5}>
                <Text color={Colors.main} fontSize={20} bold>Cart</Text>
            </Center>
            {/* <EmptyCart /> */}
            <Box h={'1/2'} w='full' bg={Colors.white}>
                <CartItems />
            </Box>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Center mt={5}>
                    <HStack
                        rounded={50}
                        justifyContent='space-between'
                        bg={Colors.whiteSolid}
                        shadow={2}
                        w='90%'
                        pl={5}
                        h={45}
                        alignItems='center'
                    >
                        <Text>Total</Text>
                        <Button
                            px={10}
                            h={45}
                            rounded={50}
                            bg={Colors.main}
                            _text={{
                                color: Colors.whiteSolid,
                                fontWeight: 'semibold',

                            }}
                            _pressed={{
                                bg: Colors.main
                            }}
                        >
                            £350
                            </Button>
                    </HStack>
                </Center>
                <Center px={5}>
                    <Buttone bg={Colors.yellow} color={Colors.whiteSolid} mt={10}>
                        CHECKOUT
                    </Buttone>
                </Center>
            </ScrollView>
        </Box>
    );
}

export default CartScreen;