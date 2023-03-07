import React from "react";
import { View, Text, Center, Heading } from "native-base";
import Colors from "../color";
import {FontAwesome} from '@expo/vector-icons';
import Tabs from "../Components/Profile/Tabs";
import { SceneMap } from "react-native-tab-view";


function ProfileScreen () {
    return (
        <View>
            <Center bg={Colors.main} pt={10} pb={6} safeAreaTop h={'1/2'}>
                <FontAwesome name="user-circle-o" size={80} color={Colors.whiteSolid}/>
                <Heading bold fontSize={15} isTruncated color={Colors.whiteSolid} mt={2}>Graham Scott</Heading>
            </Center>
            <Tabs />
        </View>
    )
}

export default ProfileScreen;