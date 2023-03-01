import React from "react";
import {Text, Box, Heading} from 'native-base';
import Colors from "../color";
import Rating from "./Rating";

function Review() {
    return (
        <Box my={9}>
            <Heading bold fontSize={15} mb={2}>
                Review
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
            </Box>
        </Box>
    )
};

export default Review; 