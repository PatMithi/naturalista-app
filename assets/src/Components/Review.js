import React, { useState } from "react";
import {Text, Box, Heading, VStack, FormControl, Select, CheckIcon, TextArea} from 'native-base';
import Colors from "../color";
import Rating from "./Rating";
import Message from "./Message";
import Buttone from "./Buttone";

function Review() {
    const [ratings, setRatings] = useState('')
    return (
        <Box my={2} px={3}>
            <Heading bold fontSize={18} mb={2} px={3}>
                Reviews
            </Heading>
            {/* If theere is no review */}
            {/* <Message color={Colors.white} bg={Colors.yellow} bold size={15} children={ 
                    'No Reviews yet'
                } /> */}
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
            <Box mt={6}>
                <Heading fontSize={18} color={Colors.black} px={3}>
                    Leave a Review
                </Heading>
                <VStack space={6}>
                    <FormControl>
                        <FormControl.Label
                            px={3}
                            _text={{
                                fontSize:'15px',
                                fontWeight:'bold',
                                color:Colors.black
                        }}  
                        >Rating</FormControl.Label>
                        <Select 
                            bg={Colors.grey} 
                            borderWidth={0} 
                            rounded={5} 
                            py={3}
                            mt={3}
                            mx={2}
                            pt={3}
                            placeholder='Select Rating'
                            justifyContent={'center'}
                            alignItems='center'
                            _selectedItem={{
                                bg: Colors.yellow,
                                endIcon: <CheckIcon />,
                            }}
                            selectedValue={ratings} 
                            onValueChange={(e) => setRatings(e)}
                        >
                            <Select.Item label="Select Rating"/> 
                            <Select.Item label="1 - Poor" value="1"/> 
                            <Select.Item label="2 - Okay" value="2"/> 
                            <Select.Item label="3 - Good" value="3"/> 
                            <Select.Item label="4 - Poor" value="4"/> 
                            <Select.Item label="5 - Poor" value="5"/> 
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label
                            px={3}
                            _text={{
                                fontSize:'15px',
                                fontWeight:'bold',
                                color:Colors.black
                        }}  
                        >
                            Comment
                        </FormControl.Label>
                        <TextArea 
                            h={24} 
                            w='full' 
                            placeholder="This product is amazing ....." 
                            borderWidth={0} 
                            bg={Colors.lightGrey}
                            p={4}
                        />
                    </FormControl>
                    <Buttone bg={Colors.main} color={Colors.white}>
                        SUBMIT
                    </Buttone>
                    {/* <Message
                        color={Colors.white}
                        bg={Colors.yellow}
                        bold 
                        children={'Please login to leave a review'}
                    /> */}
                </VStack>
            </Box>
        </Box>
    )
};

export default Review; 