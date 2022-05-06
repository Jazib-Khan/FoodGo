import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from "react-redux";

export default function HeaderTabs(props) {
    const theme = useSelector((state) => state.themeReducer.theme);
    // Rendering Header button and stylising 
    return (
        // React native by default shows things in columns
        // flex Direction row is to align the buttons how I want them to
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <HeaderButton 
                text="Delivery" 
                btnColor="green" 
                textColor="white" 
                activeTab={props.activeTab} 
                setActiveTab={props.setActiveTab}
            />
            <HeaderButton 
                text="Pickup" 
                btnColor={theme === "Light" ? "black" : "white"} 
                textColor="black" 
                activeTab={props.activeTab} 
                setActiveTab={props.setActiveTab}
            />           
        </View>
    );
}

const HeaderButton = (props) => {
    const theme = useSelector((state) => state.themeReducer.theme);
    
    let color = "white";

    if(theme === "Dark" && props.activeTab !== props.text) {
        color = "black";
    }

    return (
        <TouchableOpacity 
            style={{
                backgroundColor: props.activeTab === props.text ? "green" : color,
                paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 30,
            }}
        // Picks up which tab is active and can switch between coloured 
        //indicators to highlight which tab is currently active
            onPress = {() => props.setActiveTab(props.text)}
        >
            <Text 
                style={{ 
                    color: props.activeTab === props.text ? color : "green", 
                    fontSize: 15, 
                    fontWeight: "900",
                }}
            >
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row", 
        padding: 10,
        paddingHorizontal: 30,
        justifyContent: "space-between",
    },
    wrapperDark: {
        backgroundColor: "black"
    },
    text: {
        color: "black"
    },
    textDark: {
        color: "white"
    },
    
});