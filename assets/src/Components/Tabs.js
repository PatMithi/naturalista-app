import React, { useState } from "react";
import {Text, View} from 'native-base';
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { useWindowDimensions } from "react-native";
import Colors from "../color";
import { StyleSheet } from "react-native";

const renderScene = SceneMap({
    first: Profile,
    second: Order
})

function Tabs () {
    const layout = useWindowDimensions()
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        {
            key: 'first', title: 'PROFILE'
        },
        {
            key:'second', title: 'ORDERS'
        }
    ])

    const renderTabsBar = (props) => (
        <TabBar 
            {...props} 
            tabStyle={style.tabStyle} 
            indicatorStyle={{backgroundColor:Colors.whiteSolid}} 
            activeColor={Colors.yellow} 
            inactiveColor={Colors.whiteSolid}
            renderLabel={({routes, color}) => 
                <Text style={{color, ...styles.text}}>{routes.title}</Text>
            }/>
    );
    return (
        <TabView 
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width:layout.width}}
            renderTabsBar={renderTabsBar}
        />
    )
};

const styles = StyleSheet.create({
    tabStyle: {
        backgroundColor:'black',
    },
    text: {
        fontSize: 13,
        fontWeight: 'bold',

    },

})

export default Tabs;