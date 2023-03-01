import React from "react";
import {Text, Box, Heading} from 'native-base';
import Colors from "../color";
import Rating from "./Rating";
import Message from "./Message";

function Review() {
    return (
        <Box my={9} px={3}>
            <Heading bold fontSize={18} mb={2} px={3}>
                Reviews
            </Heading>
            {/* If theere is no review */}
            {/* Review */}
            <Box p={3} bg={Colors.grey} mt={5} rounded={5}>
                <Heading fontSize={15} color={Colors.black}>
                    John Doe
                </Heading>
                <Rating value={4} size={15} />
                <Text mb={3}>
                    Nov 22,2022
                </Text>
                <Message color={Colors.black} bg={Colors.whiteSolid} size={12} children={ 
                    'This is the perfect healthy hair combo for all those who' +
                    'are started their natural hair journey, those with damaged' +
                    'hair or for those looking for the best products to apply using' +
                    'the LCO/ LOC method.'
                } />
                
            </Box>
        </Box>
    )
};

export default Review; 