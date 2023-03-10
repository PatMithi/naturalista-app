import React, { useState } from "react";
import {Text} from 'native-base';
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { useWindowDimensions, StyleSheet } from "react-native";
import Profile from "./Profile";
import Order from "./Order";
import Colors from "../../color";

const renderScene = SceneMap({
    first: Profile,
    second: Order
})

function Tabs () {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key: 'first', title: 'PROFILE'
        },
        {
            key:'second', title: 'ORDERS'
        }
    ]);

    const renderTabsBar = (props) => (
        <TabBar 
            {...props} 
            
            tabStyle={styles.tabStyle} 
            indicatorStyle={{backgroundColor:Colors.red}} 
            activeColor={Colors.whiteSolid} 
            inactiveColor={Colors.lightGrey}
            renderLabel={({route, color}) => 
                <Text style={{color, ...styles.text}}>{route.title}</Text>
            }/>
    );
    return (
        <TabView 
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width:layout.width}}
            renderTabBar={renderTabsBar}
        />
    )
};

const styles = StyleSheet.create({
    tabStyle: {
        backgroundColor:Colors.yellow,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',

    },

});

export default Tabs;