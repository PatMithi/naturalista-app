import React, { useState } from "react";
import { View, Text, Box, ScrollView, Image, Heading, HStack, Spacer, Button } from "native-base";
import Colors from "../color";
import Rating from "../Components/Rating";
import NumericInput from "react-native-numeric-input";
import NavigationBottom from "../Components/NavigationBottom";
import Buttone from "../Components/Buttone";
import { useFonts } from "expo-font";
import Review from "../Components/Review";

function ProductDetails () {
    const [value, setValue] = useState(0);
    let [fontsLoaded] = useFonts({
        'Montserrat': require('../../fonts/Montserrat-Regular.ttf'),
        'Montserrat-bold': require('../../fonts/Montserrat-Bold.ttf') 
    });

    
    return (
        <Box flex={1} bg={Colors.whiteSolid}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image 
                    source={require('../../images/Naturalista-hair-bundle.png')} 
                    alt='Product' 
                    w='full' 
                    h='300' 
                    resizeMode="cover" />
                <Heading px={3} pt={3} bold fontSize={22} mb={2} lineHeight={22} style={{fontFamily:'Montserrat-bold'}}>Leave-in and Hydrating Bundle</Heading>
                <Rating value={4} px={4} size={18}/>
                <HStack space={2} alignItems='center' my={5} px={3}>
                    <NumericInput 
                        value={value} 
                        totalWidth={140} 
                        totalHeight={30} 
                        iconSize={25} 
                        step={1} 
                        maxValue={15} 
                        borderColor={Colors.main} 
                        rounded 
                        textColor={Colors.black}
                        iconStyle={{color:Colors.whiteSolid}}
                        rightButtonBackgroundColor={Colors.main}
                        leftButtonBackgroundColor={Colors.main}
                    />
                    <Spacer />
                    <Heading bold color={Colors.black} fontSize={20} fontFamily={'Montserrat'}>
                        £24
                    </Heading>
                </HStack>
                <Text lineHeight={24} fontSize={14} fontFamily='Montserrat' px={4}>
                This is the perfect healthy hair combo for all those who 
                are started their natural hair journey, those with damaged 
                hair or for those looking for the best products to apply using 
                the LCO/ LOC method.
                This is the perfect healthy hair combo for all those who 
                are started their natural hair journey, those with damaged 
                hair or for those looking for the best products to apply using 
                the LCO/ LOC method.
                This is the perfect healthy hair combo for all those who 
                are started their natural hair journey, those with damaged 
                hair or for those looking for the best products to apply using 
                the LCO/ LOC method.
                </Text>
                {/* <Buttone bg={Colors.main} color={Colors.white} mt={10}>
                    ADD TO CART
                </Buttone> */}
                <Button
                    _pressed={{
                        bg: Colors.main,
                    }}
                    left='4%'
                    justifyContent='center'
                    my={30}
                    w="80%"
                    rounded={50}
                    bg={Colors.main}
                    _text={{
                        color: Colors.whiteSolid,
                        fontSize: '14',
                        fontWeight: 'bold',
                        fontFamily: 'Montserrat'
                    }}
                    >
                    ADD TO CART
                </Button>
                <Review/>
            </ScrollView>
            <NavigationBottom/>
        </Box> 
        
    )
}

export default ProductDetails;